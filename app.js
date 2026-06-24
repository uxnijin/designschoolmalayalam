/* ============================================================
   DESIGN SCHOOL — APP.JS
   Do not edit. All content is in data.js
   ============================================================ */

// ── UTILS ────────────────────────────────────────────────────

function getYoutubeId(url) {
  if (!url) return null;
  const patterns = [/youtu\.be\/([^?#&]+)/, /[?&]v=([^?#&]+)/, /youtube\.com\/embed\/([^?#&]+)/];
  for (const p of patterns) { const m = url.match(p); if (m) return m[1]; }
  return null;
}
const getThumbUrl = url => { const id = getYoutubeId(url); return id ? `https://img.youtube.com/vi/${id}/mqdefault.jpg` : null; };
const getEmbedUrl = url => { const id = getYoutubeId(url); return id ? `https://www.youtube.com/embed/${id}` : null; };
const formatDate = s => s ? new Date(s).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' }) : '';

const getCategoryById = id => CATEGORIES.find(c => c.id === id);
const getSubcategoryById = (c, s) => getCategoryById(c)?.subcategories.find(x => x.id === s);
const getArticlesBySubcat = subId => ARTICLES.filter(a =>
  a._subcategories ? a._subcategories.includes(subId) : a.subcategoryId === subId
);
const getArticlesByCategory = catId => ARTICLES.filter(a =>
  a._categories ? a._categories.includes(catId) : a.categoryId === catId
);
const countInCategory = catId => ARTICLES.filter(a =>
  a._categories ? a._categories.includes(catId) : a.categoryId === catId
).length;

// ── LEARNING PATH & PROGRESS TRACKING UTILITIES ─────────────
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCqIHvx83WillWuQR7RrcUojdgabDeYxg",
  authDomain: "designschool-6b97c.firebaseapp.com",
  projectId: "designschool-6b97c",
  storageBucket: "designschool-6b97c.firebasestorage.app",
  messagingSenderId: "734958557338",
  appId: "1:734958557338:web:0a16d3c81638fb5a82e723",
  measurementId: "G-PLJHQ0H7PJ"
};

// Initialize Firebase using compat mode
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

let currentUser = null;

// Listen for auth state changes
auth.onAuthStateChanged((user) => {
  currentUser = user;

  // Update nav button text/icon immediately
  updateNavAuthButton();

  // Trigger UI update immediately if we are on dashboard, home page, article page, jobs page, or post-job page
  const state = history.state || parseUrl();
  if (state.page === 'dashboard' || state.page === 'home' || state.page === 'article' || state.page === 'jobs-admin' || state.page === 'jobs' || state.page === 'post-job') {
    renderPage(state);
  }

  if (user) {
    // User signed in - merge & sync progress in background
    syncLocalDataToCloud().then(() => {
      // Re-render after sync completes to reflect merged progress
      const currentState = history.state || parseUrl();
      if (currentState.page === 'dashboard' || currentState.page === 'home' || currentState.page === 'article' || currentState.page === 'jobs-admin' || currentState.page === 'jobs' || currentState.page === 'post-job') {
        renderPage(currentState);
      }
    });
  }
});

function updateNavAuthButton() {
  const btnDashboardNav = document.getElementById('btnDashboardNav');
  if (!btnDashboardNav) return;

  if (currentUser) {
    btnDashboardNav.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
        <line x1="9" y1="21" x2="9" y2="9"/>
        <line x1="3" y1="9" x2="21" y2="9"/>
      </svg>
      <span>Dashboard</span>
    `;
    btnDashboardNav.title = "View Dashboard";
    btnDashboardNav.classList.remove('auth-signed-out');
    btnDashboardNav.classList.add('auth-signed-in');
  } else {
    btnDashboardNav.innerHTML = `
      <span>Sign In</span>
    `;
    btnDashboardNav.title = "Sign In with Google";
    btnDashboardNav.classList.remove('auth-signed-in');
    btnDashboardNav.classList.add('auth-signed-out');
  }
}

async function syncLocalDataToCloud() {
  if (!currentUser) return;
  try {
    const docRef = db.collection('users').doc(currentUser.uid);
    const doc = await docRef.get();

    let localArticles = [];
    try {
      localArticles = JSON.parse(localStorage.getItem('ds_completed_articles') || '[]');
    } catch (e) { }

    let localQuizScores = {};
    try {
      localQuizScores = JSON.parse(localStorage.getItem('ds_quiz_scores') || '{}');
    } catch (e) { }

    let mergedArticles = [...localArticles];
    let mergedQuizScores = { ...localQuizScores };

    if (doc.exists) {
      const cloudData = doc.data();
      const cloudArticles = cloudData.completedArticles || [];
      const cloudScores = cloudData.quizScores || {};

      // Merge unique articles
      mergedArticles = Array.from(new Set([...localArticles, ...cloudArticles]));

      // Merge quiz scores keeping the highest
      const allKeys = new Set([...Object.keys(localQuizScores), ...Object.keys(cloudScores)]);
      for (const key of allKeys) {
        mergedQuizScores[key] = Math.max(localQuizScores[key] || 0, cloudScores[key] || 0);
      }
    }

    // Save to local storage as the unified local representation
    localStorage.setItem('ds_completed_articles', JSON.stringify(mergedArticles));
    localStorage.setItem('ds_quiz_scores', JSON.stringify(mergedQuizScores));

    // Upload to Firestore to ensure cloud is fully synced
    await docRef.set({
      completedArticles: mergedArticles,
      quizScores: mergedQuizScores,
      updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    }, { merge: true });
  } catch (e) {
    console.error('Error syncing local data to cloud:', e);
    showWarningToast('Sync failed: Could not synchronize progress with the cloud.');
  }
}

// ── LEARNING PATH & PROGRESS TRACKING UTILITIES ─────────────
function getCompletedArticles() {
  try {
    return JSON.parse(localStorage.getItem('ds_completed_articles') || '[]');
  } catch (e) {
    return [];
  }
}

async function saveCompletedArticles(list) {
  try {
    localStorage.setItem('ds_completed_articles', JSON.stringify(list));
  } catch (e) {
    console.warn('Failed to save completed articles to local storage:', e);
  }

  if (currentUser) {
    try {
      await db.collection('users').doc(currentUser.uid).set({
        completedArticles: list,
        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
      }, { merge: true });
    } catch (e) {
      console.error('Failed to sync completed articles to firestore:', e);
      showWarningToast('Sync failed: Progress saved locally but not in cloud.');
    }
  }
}

function isArticleCompleted(articleId) {
  return getCompletedArticles().includes(articleId);
}

function toggleArticleCompleted(articleId) {
  const list = [...getCompletedArticles()];
  const idx = list.indexOf(articleId);
  if (idx === -1) {
    list.push(articleId);
  } else {
    list.splice(idx, 1);
  }
  saveCompletedArticles(list);
  return idx === -1; // returns true if now completed, false if removed
}

const BADGES = [
  {
    id: 'typography-apprentice',
    title: 'Typography Apprentice',
    description: 'Read 2 Typography articles',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="badge-svg-icon">
      <polyline points="4 7 4 4 20 4 20 7"></polyline>
      <line x1="9" y1="20" x2="15" y2="20"></line>
      <line x1="12" y1="4" x2="12" y2="20"></line>
    </svg>`,
    theme: 'gradient-orange',
    check: (completedList) => {
      const typoArticles = getArticlesBySubcat('typography');
      return typoArticles.filter(a => completedList.includes(a.id)).length >= 2;
    }
  },
  {
    id: 'figma-beginner',
    title: 'Figma Beginner',
    description: 'Read 3 Figma articles',
    icon: `<svg viewBox="0 0 38 57" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" class="badge-svg-icon figma-svg" style="width: 16px; height: 24px; display: block;">
      <path d="M19 28.5C19 23.2533 14.7467 19 9.5 19C4.2533 19 0 23.2533 0 28.5C0 33.7467 4.2533 38 9.5 38H19V28.5Z" />
      <path d="M19 9.5C19 4.2533 14.7467 0 9.5 0C4.2533 0 0 4.2533 0 9.5C0 14.7467 4.2533 19 9.5 19H19V9.5Z" />
      <path d="M38 9.5C38 4.2533 33.7467 0 28.5 0C23.2533 0 19 4.2533 19 9.5V19H28.5C33.7467 19 38 14.7467 38 9.5Z" />
      <path d="M38 28.5C38 23.2533 33.7467 19 28.5 19C23.2533 19 19 23.2533 19 28.5V38H28.5C33.7467 38 38 33.7467 38 28.5Z" />
      <path d="M19 47.5C19 42.2533 14.7467 38 9.5 38C4.2533 38 0 42.2533 0 47.5C0 52.7467 4.2533 57 9.5 57C14.7467 57 19 52.7467 19 47.5Z" />
    </svg>`,
    theme: 'gradient-green',
    check: (completedList) => {
      const figmaArticles = getArticlesByCategory('figma');
      return figmaArticles.filter(a => completedList.includes(a.id)).length >= 3;
    }
  },
  {
    id: 'ux-explorer',
    title: 'UX Explorer',
    description: 'Read 3 UX Design articles',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="badge-svg-icon">
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1 .4 2.5 1.5 3.5.7.8 1.3 1.5 1.5 2.5"></path>
      <line x1="9" y1="18" x2="15" y2="18"></line>
      <line x1="10" y1="22" x2="14" y2="22"></line>
    </svg>`,
    theme: 'gradient-blue',
    check: (completedList) => {
      const uxArticles = getArticlesByCategory('ux-design');
      return uxArticles.filter(a => completedList.includes(a.id)).length >= 3;
    }
  },
  {
    id: 'design-legend',
    title: 'Design Legend',
    description: 'Read 10 or more articles',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" class="badge-svg-icon">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
      <path d="M4 22h16"></path>
      <path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34"></path>
      <path d="M12 2a5 5 0 0 0-5 5v5a5 5 0 0 0 10 0V7a5 5 0 0 0-5-5z"></path>
    </svg>`,
    theme: 'gradient-purple',
    check: (completedList) => {
      return completedList.length >= 10;
    }
  }
];

function checkBadges() {
  const completedList = getCompletedArticles();
  return BADGES.map(badge => ({
    ...badge,
    unlocked: badge.check(completedList)
  }));
}

// ── QUIZ ARENA STATE & DATA DEFINITIONS ──────────────────────
const QUIZ_TRACKS = [
  {
    id: 'ux-laws',
    title: 'UX Laws & Principles',
    description: 'Master cognitive principles: Jakob\'s Law, Hick\'s Law, Miller\'s Law, Fitts\'s Law, and Aesthetic Usability.',
    icon: '⚡',
    theme: 'gradient-orange',
    articleIds: [
      'aesthetic-usability-effect', 'fittss-law', 'hicks-law', 'jakobs-law',
      'millers-law', 'doherty-threshold', 'ikea-effect', 'occams-razor',
      'pareto-principle', 'parkinsons-law', 'peak-end-rule', 'teslers-law',
      'von-restorff-effect', 'zeigarnik-effect'
    ]
  },
  {
    id: 'cognitive-ux',
    title: 'Cognitive Psychology & UX',
    description: 'Learn about user behavior, cognitive load, chunking, choice overload, and mental models.',
    icon: '🧠',
    theme: 'gradient-blue',
    articleIds: [
      'cognitive-bias', 'cognitive-load', 'choice-overload', 'chunking',
      'goal-gradient-effect', 'mental-model'
    ]
  },
  {
    id: 'ux-research',
    title: 'UX Research Methods',
    description: 'Test your knowledge on user interviews, surveys, qualitative, and quantitative research.',
    icon: '🔍',
    theme: 'gradient-green',
    articleIds: [
      'qualitative-research', 'quantitative-research', 'user-interviews', 'surveys'
    ]
  },
  {
    id: 'ui-usability',
    title: 'UI Design & Usability',
    description: 'Check color contrast standards, responsive scaling, typography hierarchies, and layout rules.',
    icon: '📐',
    theme: 'gradient-purple',
    articleIds: [
      'accessibility', 'ux-writing', 'responsive-design', 'rule-of-thirds', 'rapid-prototyping'
    ]
  }
];

let activeQuizState = {
  trackId: null,
  currentQuestionIdx: 0,
  score: 0,
  selectedOptionIdx: null,
  answers: []
};

function getQuizScores() {
  try {
    return JSON.parse(localStorage.getItem('ds_quiz_scores') || '{}');
  } catch (e) {
    return {};
  }
}

async function saveQuizScore(trackId, scorePercent) {
  try {
    const scores = { ...getQuizScores() };
    const currentHigh = scores[trackId] || 0;
    if (scorePercent > currentHigh) {
      scores[trackId] = scorePercent;

      // Update local storage
      localStorage.setItem('ds_quiz_scores', JSON.stringify(scores));

      if (currentUser) {
        try {
          await db.collection('users').doc(currentUser.uid).set({
            quizScores: scores,
            updatedAt: firebase.firestore.FieldValue.serverTimestamp()
          }, { merge: true });
        } catch (e) {
          console.error('Failed to sync quiz scores to firestore:', e);
          showWarningToast('Sync failed: Quiz score saved locally but not in cloud.');
        }
      }
      return true;
    }
  } catch (e) {
    console.warn('Failed to save quiz score:', e);
  }
  return false;
}

function startQuiz(trackId) {
  const track = QUIZ_TRACKS.find(t => t.id === trackId);
  if (!track) return;

  const questions = track.articleIds
    .map(id => ({ ...QUIZZES[id], articleId: id }))
    .filter(q => q && q.question);

  if (questions.length === 0) {
    alert('This quiz track has no questions yet. Coming soon!');
    return;
  }

  activeQuizState = {
    trackId: trackId,
    currentQuestionIdx: 0,
    score: 0,
    selectedOptionIdx: null,
    answers: []
  };

  updateQuizView();
}

function updateQuizView() {
  const container = document.getElementById('quizArenaContainer');
  if (!container) return;

  const layout = document.querySelector('.dashboard-page-layout');
  if (layout) {
    if (activeQuizState.trackId === null) {
      layout.classList.remove('quiz-active-mode');
    } else {
      layout.classList.add('quiz-active-mode');
    }
  }

  if (activeQuizState.trackId === null) {
    container.innerHTML = renderQuizArena();
  } else {
    const track = QUIZ_TRACKS.find(t => t.id === activeQuizState.trackId);
    const questions = track.articleIds
      .map(id => ({ ...QUIZZES[id], articleId: id }))
      .filter(q => q && q.question);

    if (activeQuizState.currentQuestionIdx < questions.length) {
      container.innerHTML = renderActiveQuiz(track, questions);
    } else {
      container.innerHTML = renderQuizResults(track, questions);
    }
  }

  const rect = container.getBoundingClientRect();
  const absoluteTop = window.pageYOffset + rect.top;
  window.scrollTo({ top: absoluteTop - 80, behavior: 'smooth' });
}

function handleQuizPlaySelection(idx) {
  if (activeQuizState.selectedOptionIdx !== null) return;

  const track = QUIZ_TRACKS.find(t => t.id === activeQuizState.trackId);
  const questions = track.articleIds
    .map(id => ({ ...QUIZZES[id], articleId: id }))
    .filter(q => q && q.question);

  const q = questions[activeQuizState.currentQuestionIdx];
  activeQuizState.selectedOptionIdx = idx;

  const isCorrect = idx === q.answerIndex;
  activeQuizState.answers.push(isCorrect);
  if (isCorrect) activeQuizState.score++;

  updateQuizView();
}

function nextQuizQuestion() {
  activeQuizState.currentQuestionIdx++;
  activeQuizState.selectedOptionIdx = null;
  updateQuizView();
}

function exitQuiz() {
  activeQuizState.trackId = null;
  updateQuizView();
}

function handleTrackCardClick(e, trackId) {
  if (window.innerWidth >= 1024) {
    startQuiz(trackId);
  }
}

function renderQuizArena() {
  const scores = getQuizScores();

  const tracksHtml = QUIZ_TRACKS.map(track => {
    const questions = track.articleIds
      .map(id => ({ ...QUIZZES[id], articleId: id }))
      .filter(q => q && q.question);

    const totalQ = questions.length;
    const highScore = scores[track.id];
    const scoreText = highScore !== undefined ? `Best: <strong>${highScore}%</strong>` : 'Not started';

    return `
      <div class="quiz-track-card" onclick="handleTrackCardClick(event, '${track.id}')">
        <div class="quiz-track-header">
          <div class="quiz-track-icon-wrapper ${track.theme}">
            <span>${track.icon}</span>
          </div>
          <div class="quiz-track-score-pill">${scoreText}</div>
        </div>
        <div class="quiz-track-body">
          <h4 class="quiz-track-title">${track.title}</h4>
          <p class="quiz-track-desc">${track.description}</p>
        </div>
        <div class="quiz-track-footer">
          <span class="quiz-track-qcount">${totalQ} Questions</span>
          <button class="btn-start-quiz" onclick="event.stopPropagation(); startQuiz('${track.id}')">Start Quiz</button>
        </div>
      </div>
    `;
  }).join('');

  return `
    <div class="quiz-arena-grid">
      ${tracksHtml}
    </div>
  `;
}

function renderActiveQuiz(track, questions) {
  const qIdx = activeQuizState.currentQuestionIdx;
  const q = questions[qIdx];
  const total = questions.length;
  const progressPercent = Math.round((qIdx / total) * 100);

  const optionsHtml = q.options.map((opt, idx) => {
    const isSelected = activeQuizState.selectedOptionIdx === idx;
    const isRevealed = activeQuizState.selectedOptionIdx !== null;
    const isCorrectOption = idx === q.answerIndex;

    let statusClass = '';
    if (isRevealed) {
      if (isCorrectOption) statusClass = 'correct';
      else if (isSelected) statusClass = 'incorrect';
    }

    const disabledAttr = isRevealed ? 'disabled' : '';

    return `
      <button class="quiz-play-option ${statusClass}" ${disabledAttr} onclick="handleQuizPlaySelection(${idx})">
        <span class="quiz-play-letter">${String.fromCharCode(65 + idx)}</span>
        <span class="quiz-play-text">${opt}</span>
      </button>
    `;
  }).join('');

  const hasSelected = activeQuizState.selectedOptionIdx !== null;

  return `
    <div class="quiz-play-box">
      <div class="quiz-play-header">
        <div class="quiz-play-header-left">
          <span class="quiz-play-track-title">${track.icon} ${track.title}</span>
          <span class="quiz-play-progress-text">Question <strong>${qIdx + 1}</strong> of ${total}</span>
        </div>
        <button class="btn-quiz-exit-icon" onclick="exitQuiz()" title="Exit Quiz">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      
      <div class="quiz-play-progress-track">
        <div class="quiz-play-progress-fill" style="width: ${progressPercent}%"></div>
      </div>
      
      <div class="quiz-play-question-container">
        <h3 class="quiz-play-question">${q.question}</h3>
      </div>
      
      <div class="quiz-play-options">
        ${optionsHtml}
      </div>
      
      ${hasSelected ? `
        <div class="quiz-play-feedback">
          <div class="quiz-play-feedback-status ${activeQuizState.selectedOptionIdx === q.answerIndex ? 'correct-text' : 'incorrect-text'}">
            ${activeQuizState.selectedOptionIdx === q.answerIndex ? '✨ <strong>Correct choice!</strong> Good job.' : '🔍 <strong>Not quite!</strong> The correct answer is highlighted above.'}
          </div>
          <p class="quiz-play-explanation">${q.explanation}</p>
          <button class="btn-quiz-next" onclick="nextQuizQuestion()">
            <span>${qIdx + 1 === total ? 'Finish Quiz' : 'Next Question'}</span>
            ${qIdx + 1 === total ? '' : `
              <svg class="chevron-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            `}
          </button>
        </div>
      ` : ''}
    </div>
  `;
}

function renderQuizResults(track, questions) {
  const total = questions.length;
  const correct = activeQuizState.score;
  const scorePercent = Math.round((correct / total) * 100);

  const isNewHigh = saveQuizScore(track.id, scorePercent);

  let confettiHtml = '';
  if (scorePercent >= 80) {
    confettiHtml = `
      <div class="confetti-container">
        ${Array(30).fill(0).map((_, i) => {
      const left = Math.random() * 100;
      const delay = Math.random() * 2;
      const color = ['#FF6F2C', '#3B82F6', '#10B981', '#8B5CF6', '#F59E0B'][Math.floor(Math.random() * 5)];
      return `<div class="confetti-particle" style="left: ${left}%; animation-delay: ${delay}s; background: ${color}"></div>`;
    }).join('')}
      </div>
    `;
  }

  return `
    <div class="quiz-results-box">
      ${confettiHtml}
      <div class="results-header-section">
        <h3 class="results-main-title">Quiz Completed!</h3>
        <p class="results-subtitle">${track.title}</p>
      </div>
      
      <div class="results-score-circle-container">
        <svg class="results-score-circle-svg" viewBox="0 0 100 100">
          <circle class="results-circle-bg" cx="50" cy="50" r="45"></circle>
          <circle class="results-circle-fill" cx="50" cy="50" r="45" stroke-dasharray="283" stroke-dashoffset="${283 - (283 * scorePercent) / 100}"></circle>
        </svg>
        <div class="results-score-text">
          <span class="score-percent">${scorePercent}%</span>
          <span class="score-fraction">${correct} / ${total} Correct</span>
        </div>
      </div>
      
      <div class="results-badge-callout ${scorePercent >= 80 ? 'success' : 'info'}">
        <div class="callout-icon">${scorePercent >= 80 ? '🏆' : '📖'}</div>
        <div class="callout-content">
          <p class="callout-text">
            ${scorePercent >= 80
      ? '<strong>Expert Score!</strong> You scored a high result. Excellent mastery of these concepts!'
      : '<strong>Practice makes perfect!</strong> Keep reading and try again to master this track.'}
          </p>
        </div>
      </div>
      
      <div class="results-action-row">
        <button class="btn-results-action primary" onclick="startQuiz('${track.id}')">Try Again</button>
        <button class="btn-results-action secondary" onclick="exitQuiz()">Exit to Arena</button>
      </div>
    </div>
  `;
}



function getTrendingArticles() {
  const trendingIds = ['every-ui-ux-concept-explained', 'best-3-malayalam-fonts', '2026-graphic-design-trends'];
  const trending = ARTICLES.filter(a => trendingIds.includes(a.id));
  return trending.length ? trending : ARTICLES.slice(0, 3);
}

function getBestReads(categoryId, limit = 3) {
  return ARTICLES.filter(a => a.categoryId === categoryId).slice(0, limit);
}

function extractHeadings(html) {
  const regex = /<h([23])\b[^>]*>(.*?)<\/h\1>/g;
  const headings = [];
  let match;
  let idCounter = 1;
  while ((match = regex.exec(html)) !== null) {
    const level = parseInt(match[1]);
    const text = match[2].replace(/<[^>]*>/g, '').trim();
    headings.push({ level, text, id: `heading-${idCounter++}` });
  }
  return headings;
}

function injectHeadingIds(html) {
  let idCounter = 1;
  return html.replace(/<h([23])\b([^>]*)>(.*?)<\/h\1>/g, (match, level, attrs, text) => {
    return `<h${level} id="heading-${idCounter++}"${attrs}>${text}</h${level}>`;
  });
}

// ── HISTORY / ROUTER ─────────────────────────────────────────
// Each navigate() call pushes a state; popstate restores it.

let _rendering = false; // guard against double-render during popstate
let activeRenderTimeout = null;
let isInitialLoad = true;

function stateKey(page, catId, subId, articleId) {
  return JSON.stringify({ page, catId: catId || null, subId: subId || null, articleId: articleId || null });
}

function navigate(page, catId, subId, articleId, query = null, { replace = false } = {}) {
  if (page === 'jobs' || page === 'jobs-admin' || page === 'post-job' || page === 'dashboard') {
    page = 'home';
    catId = null;
    subId = null;
    articleId = null;
    query = null;
  }
  closeAllDropdowns();
  catId = catId || null;
  subId = subId || null;
  articleId = articleId || null;
  query = query || null;

  const state = { page, catId, subId, articleId, query };
  const url = buildUrl(page, catId, subId, articleId, query);

  try {
    if (replace) {
      history.replaceState(state, '', url);
    } else {
      history.pushState(state, '', url);
    }
    renderPage(state);
  } catch (e) {
    console.warn('History API not supported or blocked (e.g. file:// protocol):', e);
    // Fallback to hash if pushState is blocked or unsupported
    const hash = '#' + url.replace(/^\//, '');
    if (location.hash !== hash) {
      location.hash = hash;
    } else {
      renderPage(state);
    }
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function buildUrl(page, catId, subId, articleId, query) {
  if (page === 'home') return '/';
  if (page === 'category') return `/category/${catId}`;
  if (page === 'subcategory') return `/category/${catId}/${subId}`;
  if (page === 'article') {
    let url = `/article/${articleId}`;
    if (query) url += `?hl=${encodeURIComponent(query)}`;
    return url;
  }
  if (page === 'search') return `/search?q=${encodeURIComponent(query)}`;
  if (page === 'dashboard') return '/dashboard';
  if (page === 'tools') {
    let url = '/tools';
    if (query) url += `?t=${encodeURIComponent(query)}`;
    return url;
  }
  if (page === 'jobs') return '/jobs';
  if (page === 'jobs-admin') return '/jobs-admin';
  if (page === 'post-job') {
    let url = '/post-job';
    if (query) url += `?edit=${encodeURIComponent(query)}`;
    return url;
  }
  return '/';
}

function getToolUrl(toolId) {
  return `/tools?t=${encodeURIComponent(toolId)}`;
}

let _parsingUrl = false;

function parseUrl() {
  _parsingUrl = true;
  try {
    const path = location.pathname;
    let normalizedPath = path;
    if (normalizedPath.length > 1 && normalizedPath.endsWith('/')) {
      normalizedPath = normalizedPath.slice(0, -1);
    }

    // Determine the active routing path (uses hash path if it resembles a clean route)
    let routePath = normalizedPath;
    if (location.hash) {
      const hashPath = location.hash.replace('#', '');
      if (hashPath.startsWith('/article/') || hashPath.startsWith('article/') ||
        hashPath.startsWith('/category/') || hashPath.startsWith('category/') ||
        hashPath.startsWith('/search') || hashPath.startsWith('search') ||
        hashPath.startsWith('/dashboard') || hashPath.startsWith('dashboard') ||
        hashPath.startsWith('/tools') || hashPath.startsWith('tools') ||
        hashPath.startsWith('/jobs') || hashPath.startsWith('jobs') ||
        hashPath.startsWith('/post-job') || hashPath.startsWith('post-job')) {
        routePath = hashPath.startsWith('/') ? hashPath : '/' + hashPath;
      }
    }

    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('q') || searchParams.get('hl') || searchParams.get('t') || null;

    // Support old query-parameter-based hash URLs for backwards compatibility
    if (location.hash && !routePath.startsWith('/article/') && !routePath.startsWith('/category/') && !routePath.startsWith('/dashboard') && !routePath.startsWith('/tools') && !routePath.startsWith('/jobs')) {
      const hash = location.hash.replace('#', '');
      const params = {};
      hash.split('&').forEach(p => { const [k, v] = p.split('='); if (k && v) params[k] = decodeURIComponent(v); });

      if (params.search) return { page: 'search', catId: null, subId: null, articleId: null, query: params.search };
      if (params.art) return { page: 'article', catId: params.cat, subId: params.sub, articleId: params.art, query: params.hl || null };
      if (params.sub) return { page: 'subcategory', catId: params.cat, subId: params.sub, articleId: null, query: null };
      if (params.cat) return { page: 'category', catId: params.cat, subId: null, articleId: null, query: null };
    }

    if (routePath === '/' || routePath === '/index.html') {
      return { page: 'home', catId: null, subId: null, articleId: null, query: null };
    }

    if (routePath.startsWith('/dashboard')) {
      return { page: 'home', catId: null, subId: null, articleId: null, query: null };
    }

    if (routePath.startsWith('/tools')) {
      const hashQuery = routePath.includes('?') ? new URLSearchParams(routePath.split('?')[1]) : null;
      const activeTool = searchParams.get('t') || hashQuery?.get('t') || null; // null = show overview grid
      return { page: 'tools', catId: null, subId: null, articleId: null, query: activeTool };
    }

    /*
    if (routePath.startsWith('/post-job')) {
      const editId = searchParams.get('edit') || null;
      return { page: 'post-job', catId: null, subId: null, articleId: null, query: editId };
    }

    if (routePath.startsWith('/jobs-admin')) {
      return { page: 'jobs-admin', catId: null, subId: null, articleId: null, query: null };
    }

    if (routePath.startsWith('/jobs')) {
      return { page: 'jobs', catId: null, subId: null, articleId: null, query: null };
    }
    */

    if (routePath.startsWith('/post-job') || routePath.startsWith('/jobs-admin') || routePath.startsWith('/jobs')) {
      return { page: 'home', catId: null, subId: null, articleId: null, query: null };
    }

    if (routePath.startsWith('/search')) {
      return { page: 'search', catId: null, subId: null, articleId: null, query };
    }

    if (routePath.startsWith('/article/')) {
      const parts = routePath.split('/');
      const articleId = parts[2];
      const article = ARTICLES.find(a => a.id === articleId);
      if (article) {
        const catId = Array.isArray(article.categoryId) ? article.categoryId[0] : article.categoryId;
        const subId = Array.isArray(article.subcategoryId) ? article.subcategoryId[0] : article.subcategoryId;
        return { page: 'article', catId, subId, articleId, query };
      }
      return { page: 'article', catId: null, subId: null, articleId, query };
    }

    if (routePath.startsWith('/category/')) {
      const parts = routePath.split('/');
      const catId = parts[2];
      const subId = parts[3] || null;
      if (subId) {
        return { page: 'subcategory', catId, subId, articleId: null, query: null };
      }
      return { page: 'category', catId, subId: null, articleId: null, query: null };
    }

    return { page: 'home', catId: null, subId: null, articleId: null, query: null };
  } finally {
    _parsingUrl = false;
  }
}

window.addEventListener('popstate', e => {
  const state = e.state || parseUrl();
  renderPage(state);
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ── SEO & META TAG UPDATER ────────────────────────────────────

function updateSEO(state) {
  const { page, catId, subId, articleId, query } = state;

  let title = SITE.name;
  let description = SITE.description;
  let ogImage = SITE.logo;

  // Base URL calculation (defaults to window location if SITE.domain is missing)
  const origin = window.location.origin;
  const path = window.location.pathname.endsWith('/') ? window.location.pathname : window.location.pathname + '/';
  let baseDomain = SITE.domain || (origin + path);
  if (baseDomain.endsWith('/')) {
    baseDomain = baseDomain.slice(0, -1);
  }

  const hashUrl = buildUrl(page, catId, subId, articleId, query);
  const canonicalUrl = baseDomain + hashUrl;

  let schema = null;

  if (page === 'home') {
    title = `${SITE.name} | ${SITE.tagline || 'UI/UX Design'}`;
    description = `Learn UI/UX Design, Figma, Design Systems, and Graphic Design. Access articles, tutorials, quizzes, and 1-on-1 mentorship.`;

    schema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": SITE.name,
      "alternateName": "Design School",
      "url": baseDomain + '/',
      "description": description,
      "publisher": {
        "@type": "Organization",
        "name": SITE.name,
        "logo": {
          "@type": "ImageObject",
          "url": baseDomain + '/' + SITE.logo
        }
      }
    };
  } else if (page === 'category') {
    const cat = getCategoryById(catId);
    if (cat) {
      title = `${cat.title} | ${SITE.name}`;
      description = `Learn ${cat.title}. ${cat.description || ''} — Access full tutorials and articles.`;

      schema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": title,
        "description": description,
        "url": canonicalUrl
      };
    }
  } else if (page === 'subcategory') {
    const cat = getCategoryById(catId);
    const sub = getSubcategoryById(catId, subId);
    if (cat && sub) {
      title = `${sub.title} - ${cat.title} | ${SITE.name}`;
      description = `Learn ${sub.title} under ${cat.title}. ${sub.description || ''} — Browse related articles.`;

      schema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": title,
        "description": description,
        "url": canonicalUrl
      };
    }
  } else if (page === 'article') {
    const article = ARTICLES.find(a => a.id === articleId);
    if (article) {
      title = `${article.title} | ${SITE.name}`;
      description = article.description || `Read the full article about ${article.title} on Design School.`;

      const thumb = article.thumbnail || getThumbUrl(article.youtubeUrl);
      if (thumb) {
        if (thumb.startsWith('http')) {
          ogImage = thumb;
        } else {
          ogImage = baseDomain + '/' + thumb.replace(/^\//, '');
        }
      }

      schema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": article.title,
        "description": article.description || description,
        "datePublished": article.date,
        "author": {
          "@type": "Person",
          "name": "Nijin Muhammed",
          "url": "https://www.instagram.com/uxnijin/"
        },
        "publisher": {
          "@type": "Organization",
          "name": SITE.name,
          "logo": {
            "@type": "ImageObject",
            "url": baseDomain + '/' + SITE.logo
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": canonicalUrl
        },
        "image": ogImage
      };
    }
  } else if (page === 'search') {
    title = `Search results for "${query}" | ${SITE.name}`;
    description = `Find UI/UX design articles, Figma tutorials, and design resources on Design School.`;
  }

  // Update browser window/tab title
  document.title = title;

  // Helper to safely update meta elements
  const updateMeta = (selector, content) => {
    const el = document.querySelector(selector);
    if (el) {
      el.setAttribute('content', content);
    }
  };

  updateMeta('meta[name="description"]', description);

  // Update Canonical Tag
  const canonicalEl = document.getElementById('canonicalUrl');
  if (canonicalEl) {
    canonicalEl.setAttribute('href', canonicalUrl);
  }

  // Update OpenGraph & Twitter tags
  updateMeta('#ogTitle', title);
  updateMeta('#ogDesc', description);
  updateMeta('#ogUrl', canonicalUrl);
  updateMeta('#ogImg', ogImage);
  updateMeta('#twTitle', title);
  updateMeta('#twDesc', description);
  updateMeta('#twImg', ogImage);

  // Inject structured JSON-LD schema
  let schemaScript = document.getElementById('seo-schema');
  if (schemaScript) {
    schemaScript.remove();
  }

  if (schema) {
    schemaScript = document.createElement('script');
    schemaScript.id = 'seo-schema';
    schemaScript.type = 'application/ld+json';
    schemaScript.text = JSON.stringify(schema, null, 2);
    document.head.appendChild(schemaScript);
  }
}

// ── RENDER ───────────────────────────────────────────────────

function renderPage(state) {
  const { page, catId, subId, articleId, query } = state;
  const content = document.getElementById('content');

  // Cancel any pending render
  if (activeRenderTimeout) {
    clearTimeout(activeRenderTimeout);
    activeRenderTimeout = null;
  }

  // Cleanup Firestore listeners if we are not on the respective pages
  if (page !== 'jobs') {
    if (typeof _jobsUnsubscribe === 'function') {
      _jobsUnsubscribe();
      _jobsUnsubscribe = null;
    }
  }
  if (page !== 'jobs-admin') {
    if (typeof _adminJobsUnsubscribe === 'function') {
      _adminJobsUnsubscribe();
      _adminJobsUnsubscribe = null;
    }
  }

  if (isInitialLoad) {
    // 1. Immediately render page skeleton on first load (app initial boot)
    renderSkeletonForPage(state, content);
    updateNavActive(catId);

    // 2. Schedule final render after a small delay
    activeRenderTimeout = setTimeout(() => {
      switch (page) {
        case 'home': content.innerHTML = renderHome(); break;
        case 'category': content.innerHTML = renderCategoryPage(catId); break;
        case 'subcategory': content.innerHTML = renderSubcategoryPage(catId, subId); break;
        case 'article': content.innerHTML = renderArticlePage(catId, subId, articleId, query); break;
        case 'search': content.innerHTML = renderSearchPage(query); break;
        case 'dashboard':
          content.innerHTML = renderDashboardPage();
          updateQuizView();
          break;
        case 'tools':
          content.innerHTML = renderToolsPage(query);
          initToolsPageListeners(query);
          break;
        case 'jobs':
          content.innerHTML = renderJobsPage();
          initJobsPage();
          break;
        case 'jobs-admin':
          content.innerHTML = renderJobsAdminPage();
          initJobsAdminPage();
          break;
        case 'post-job':
          content.innerHTML = renderPostJobPage();
          initPostJobPage();
          break;
        default: content.innerHTML = renderHome();
      }
      initEmptyStateLottie();
      if (page === 'article') {
        initTOCActiveTracker();
        initAudioPlayer(articleId);
      } else {
        cleanupScrollListeners();
      }
      updateSEO(state);
      updateHeaderActiveState(page);
      syncPlayersVisibility(state);
      activeRenderTimeout = null;
    }, 400);

    isInitialLoad = false;
  } else {
    // Render immediately for subsequent internal navigations since items are loaded
    switch (page) {
      case 'home': content.innerHTML = renderHome(); break;
      case 'category': content.innerHTML = renderCategoryPage(catId); break;
      case 'subcategory': content.innerHTML = renderSubcategoryPage(catId, subId); break;
      case 'article': content.innerHTML = renderArticlePage(catId, subId, articleId, query); break;
      case 'search': content.innerHTML = renderSearchPage(query); break;
      case 'dashboard':
        content.innerHTML = renderDashboardPage();
        updateQuizView();
        break;
      case 'tools':
        content.innerHTML = renderToolsPage(query);
        initToolsPageListeners(query);
        break;
      case 'jobs':
        content.innerHTML = renderJobsPage();
        initJobsPage();
        break;
      case 'jobs-admin':
        content.innerHTML = renderJobsAdminPage();
        initJobsAdminPage();
        break;
      case 'post-job':
        content.innerHTML = renderPostJobPage();
        initPostJobPage();
        break;
      default: content.innerHTML = renderHome();
    }
    updateNavActive(catId);
    initEmptyStateLottie();
    if (page === 'article') {
      initTOCActiveTracker();
      initAudioPlayer(articleId);
    } else {
      cleanupScrollListeners();
    }
    updateSEO(state);
    updateHeaderActiveState(page);
    syncPlayersVisibility(state);
  }
}

// ── SKELETON LOADERS ─────────────────────────────────────────

function renderSkeletonForPage(state, content) {
  if (!content) return;
  const { page, catId, subId, articleId, query } = state;
  switch (page) {
    case 'home': content.innerHTML = renderHomeSkeleton(); break;
    case 'category': content.innerHTML = renderCategorySkeleton(catId); break;
    case 'subcategory': content.innerHTML = renderSubcategorySkeleton(catId, subId); break;
    case 'article': content.innerHTML = renderArticleSkeleton(catId, subId, articleId); break;
    case 'search': content.innerHTML = renderSearchSkeleton(query); break;
    case 'dashboard': content.innerHTML = renderDashboardSkeleton(); break;
    case 'tools': content.innerHTML = renderToolsSkeleton(); break;
    case 'jobs': content.innerHTML = renderJobsSkeleton(); break;
    case 'jobs-admin': content.innerHTML = renderJobsSkeleton(); break;
    case 'post-job': content.innerHTML = renderJobsSkeleton(); break;
    default: content.innerHTML = renderHomeSkeleton();
  }
}

function renderArticleListSkeleton(count = 4) {
  let html = '';
  for (let i = 0; i < count; i++) {
    html += `
      <div class="shimmer-article-item">
        <div class="shimmer-article-info">
          <div class="shimmer" style="width: 60px; height: 11px; margin-bottom: 8px; border-radius: 4px;"></div>
          <div class="shimmer" style="width: 80%; height: 18px; margin-bottom: 8px; border-radius: 4px;"></div>
          <div class="shimmer" style="width: 95%; height: 14px; margin-bottom: 6px; border-radius: 4px;"></div>
          <div class="shimmer" style="width: 70%; height: 14px; margin-bottom: 10px; border-radius: 4px;"></div>
          <div class="shimmer" style="width: 80px; height: 12px; border-radius: 4px;"></div>
        </div>
        <div class="shimmer shimmer-thumb"></div>
      </div>
    `;
  }
  return html;
}

function renderHomeSkeleton() {
  return `
    <div class="channel-banner">
      <div class="channel-inner">
        <div class="shimmer" style="width: 90px; height: 90px; border-radius: 50%; flex-shrink: 0;"></div>
        <div class="channel-info" style="width: 100%;">
          <div class="shimmer" style="width: 200px; height: 26px; border-radius: 6px; margin-bottom: 8px;"></div>
          <div class="shimmer" style="width: 80%; height: 16px; border-radius: 4px; margin-bottom: 16px;"></div>
          <div class="channel-meta" style="margin-bottom: 20px;">
            <div class="shimmer" style="width: 80px; height: 14px; border-radius: 4px;"></div>
            <div class="shimmer" style="width: 80px; height: 14px; border-radius: 4px;"></div>
            <div class="shimmer" style="width: 80px; height: 14px; border-radius: 4px;"></div>
          </div>
          <div class="channel-actions">
            <div class="shimmer" style="width: 120px; height: 38px; border-radius: 22px;"></div>
            <div class="shimmer" style="width: 120px; height: 38px; border-radius: 22px;"></div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="page-wide">
      <div class="section-title">${HOME.browseSectionTitle}</div>
      <div class="category-grid">
        ${Array(3).fill(0).map(() => `
          <div class="shimmer-category-card shimmer"></div>
        `).join('')}
      </div>

      <div class="section-title-article" style="margin-top:24px">${HOME.latestSectionTitle}</div>
      <div class="section-divider"></div>
      <div class="article-list">
        ${renderArticleListSkeleton(4)}
      </div>
    </div>
  `;
}

function renderCategorySkeleton(catId) {
  const cat = getCategoryById(catId);
  const breadcrumbHtml = cat ? renderBreadcrumb([
    { label: 'Home', action: `navigate('home')` },
    { label: cat.title }
  ], 1) : '';

  return `
    <div class="layout-container">
      <!-- Left Column Skeleton -->
      <aside class="layout-left">
        <div class="sidebar-widget">
          <div class="shimmer" style="width: 110px; height: 14px; margin-bottom: 16px; border-radius: 4px;"></div>
          <div class="sidebar-menu">
            ${Array(5).fill(0).map(() => `
              <div class="shimmer" style="width: 80%; height: 32px; border-radius: 8px; margin-bottom: 6px;"></div>
            `).join('')}
          </div>
        </div>
      </aside>

      <!-- Center Column Skeleton -->
      <main class="layout-center">
        <div class="header-navigation-row">
          <button class="btn-back" onclick="navigate('home')">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <span>Back</span>
          </button>
          ${breadcrumbHtml}
        </div>
        
        <div class="subcategory-banner">
          <div class="sub-banner-badge">Category</div>
          <h1 class="sub-banner-title">${cat ? cat.title : ''}</h1>
          ${cat && cat.description ? `<p class="sub-banner-desc">${cat.description}</p>` : ''}
        </div>
        
        <div class="category-subgrid-mobile-only">
          <div class="sub-grid">
            ${Array(4).fill(0).map(() => `
              <div class="shimmer-sub-card shimmer"></div>
            `).join('')}
          </div>
        </div>
        
        <div class="section-title-article" style="margin-top:24px">All Articles</div>
        <div class="section-divider"></div>
        
        <div class="article-list">
          ${renderArticleListSkeleton(3)}
        </div>
      </main>

      <!-- Right Column Skeleton -->
      <aside class="layout-right">
        <div class="sidebar-widget">
          <div class="shimmer" style="width: 100px; height: 14px; margin-bottom: 16px; border-radius: 4px;"></div>
          <div class="best-reads-list">
            ${Array(3).fill(0).map(() => `
              <div style="display: flex; gap: 12px; align-items: center; margin-bottom: 12px;">
                <div class="shimmer" style="width: 70px; height: 42px; border-radius: 6px; flex-shrink: 0;"></div>
                <div style="flex: 1;">
                  <div class="shimmer" style="width: 85%; height: 13px; margin-bottom: 6px; border-radius: 3px;"></div>
                  <div class="shimmer" style="width: 60px; height: 9px; border-radius: 3px;"></div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </aside>
    </div>
  `;
}

function renderSubcategorySkeleton(catId, subId) {
  const cat = getCategoryById(catId);
  const sub = getSubcategoryById(catId, subId);
  const breadcrumbHtml = (cat && sub) ? renderBreadcrumb([
    { label: 'Home', action: `navigate('home')` },
    { label: cat.title, action: `navigate('category','${catId}')` },
    { label: sub.title }
  ], 1) : '';

  return `
    <div class="layout-container">
      <!-- Left Column Skeleton -->
      <aside class="layout-left">
        <div class="sidebar-widget">
          <div class="shimmer" style="width: 110px; height: 14px; margin-bottom: 16px; border-radius: 4px;"></div>
          <div class="sidebar-menu">
            ${Array(5).fill(0).map(() => `
              <div class="shimmer" style="width: 80%; height: 32px; border-radius: 8px; margin-bottom: 6px;"></div>
            `).join('')}
          </div>
        </div>
      </aside>

      <!-- Center Column Skeleton -->
      <main class="layout-center">
        <div class="header-navigation-row">
          <button class="btn-back" onclick="navigate('category','${catId}')">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <span>Back</span>
          </button>
          ${breadcrumbHtml}
        </div>
        
        <div class="subcategory-banner">
          <div class="sub-banner-badge">Topic</div>
          <h1 class="sub-banner-title">${sub ? sub.title : ''}</h1>
          ${sub && sub.description ? `<p class="sub-banner-desc">${sub.description}</p>` : ''}
        </div>
        
        <div class="article-list">
          ${renderArticleListSkeleton(3)}
        </div>
      </main>

      <!-- Right Column Skeleton -->
      <aside class="layout-right">
        <div class="sidebar-widget">
          <div class="shimmer" style="width: 100px; height: 14px; margin-bottom: 16px; border-radius: 4px;"></div>
          <div class="best-reads-list">
            ${Array(3).fill(0).map(() => `
              <div style="display: flex; gap: 12px; align-items: center; margin-bottom: 12px;">
                <div class="shimmer" style="width: 70px; height: 42px; border-radius: 6px; flex-shrink: 0;"></div>
                <div style="flex: 1;">
                  <div class="shimmer" style="width: 85%; height: 13px; margin-bottom: 6px; border-radius: 3px;"></div>
                  <div class="shimmer" style="width: 60px; height: 9px; border-radius: 3px;"></div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </aside>
    </div>
  `;
}

function renderRelatedArticlesSkeleton() {
  return `
    <div class="related-articles-section">
      <div class="shimmer" style="width: 140px; height: 20px; border-radius: 4px; margin-bottom: 20px;"></div>
      <div class="related-grid">
        ${[1, 2, 3].map(() => `
          <div class="related-card-skeleton" style="display: flex; gap: 12px; align-items: center; margin-bottom: 16px;">
            <div class="shimmer" style="width: 70px; height: 42px; border-radius: 6px; flex-shrink: 0;"></div>
            <div style="flex: 1;">
              <div class="shimmer" style="width: 85%; height: 13px; margin-bottom: 6px; border-radius: 3px;"></div>
              <div class="shimmer" style="width: 60px; height: 9px; border-radius: 3px;"></div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderArticleSkeleton(catId, subId, articleId) {
  const article = ARTICLES.find(a => a.id === articleId);
  const cat = getCategoryById(catId);
  const sub = getSubcategoryById(catId, subId);
  const breadcrumbHtml = article ? renderBreadcrumb([
    { label: 'Home', action: `navigate('home')` },
    { label: cat?.title, action: `navigate('category','${catId}')` },
    { label: sub?.title, action: `navigate('subcategory','${catId}','${subId}')` },
    { label: article.title }
  ], 1) : '';

  return `
    <div class="layout-container article-shell">
      <!-- Left Column Skeleton -->
      <aside class="layout-left">
        <div class="sidebar-widget">
          <div class="shimmer" style="width: 120px; height: 14px; margin-bottom: 16px; border-radius: 4px;"></div>
          <div class="toc-list">
            ${Array(4).fill(0).map(() => `
              <div class="shimmer" style="width: 85%; height: 26px; border-radius: 6px; margin-bottom: 6px;"></div>
            `).join('')}
          </div>
        </div>
      </aside>

      <!-- Center Column Skeleton -->
      <main class="layout-center article-reading">
        <div class="header-navigation-row">
          <button class="btn-back" onclick="navigate('subcategory','${catId}','${subId}')">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <span>Back</span>
          </button>
          ${breadcrumbHtml}
        </div>
        
        <div class="subcategory-banner">
          <div class="sub-banner-badge">${sub?.title || cat?.title || 'Article'}</div>
          <h1 class="sub-banner-title">${article ? article.title : ''}</h1>
          ${article && article.description ? `<p class="sub-banner-desc" style="margin-bottom: 12px;">${article.description}</p>` : ''}
          <div class="shimmer" style="width: 80px; height: 10px; border-radius: 4px; background: rgba(255,255,255,0.25);"></div>
        </div>
        
        <div class="article-body">
          <div class="shimmer" style="width: 100%; height: 16px; border-radius: 4px; margin-bottom: 12px;"></div>
          <div class="shimmer" style="width: 95%; height: 16px; border-radius: 4px; margin-bottom: 12px;"></div>
          <div class="shimmer" style="width: 98%; height: 16px; border-radius: 4px; margin-bottom: 12px;"></div>
          <div class="shimmer" style="width: 85%; height: 16px; border-radius: 4px; margin-bottom: 24px;"></div>
        </div>
      </main>

      <!-- Right Column Skeleton -->
      <aside class="layout-right">
        ${renderRelatedArticlesSkeleton()}
        
        <div class="sidebar-widget" style="margin-top: 36px;">
          <div class="shimmer" style="width: 100px; height: 14px; margin-bottom: 16px; border-radius: 4px;"></div>
          <div class="best-reads-list">
            ${Array(3).fill(0).map(() => `
              <div style="display: flex; gap: 12px; align-items: center; margin-bottom: 12px;">
                <div class="shimmer" style="width: 70px; height: 42px; border-radius: 6px; flex-shrink: 0;"></div>
                <div style="flex: 1;">
                  <div class="shimmer" style="width: 85%; height: 13px; margin-bottom: 6px; border-radius: 3px;"></div>
                  <div class="shimmer" style="width: 60px; height: 9px; border-radius: 3px;"></div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </aside>
    </div>
  `;
}

// ── NAV ──────────────────────────────────────────────────────

function updateNavActive(activeCatId) {
  const otherCatIds = CATEGORIES.filter(c => c.id !== 'ui-design' && c.id !== 'ux-design').map(c => c.id);
  const isToolsActive = window.location.pathname.includes('/tools') || window.location.hash.includes('tools');

  document.querySelectorAll('.nav-link').forEach(btn => {
    const btnCatId = btn.dataset.catId;
    if (btnCatId === 'interactive-tools') {
      btn.classList.toggle('active', isToolsActive);
    } else if (btnCatId === 'more') {
      btn.classList.toggle('active', !isToolsActive && otherCatIds.includes(activeCatId));
    } else {
      btn.classList.toggle('active', !isToolsActive && btnCatId === activeCatId);
    }
  });
}

function initNav() {
  const navLogoText = document.getElementById('navLogoText');
  if (navLogoText) {
    navLogoText.innerHTML =
      `<span>${SITE.navLogo || SITE.name.split(' ').slice(0, 2).join(' ')}</span>`;
  }

  const navLinks = document.getElementById('navLinks');
  if (navLinks) {
    if (!NAV.showCategoryLinks) { navLinks.innerHTML = ''; return; }

    const directCats = CATEGORIES.filter(c => c.id === 'ui-design' || c.id === 'ux-design');
    const otherCats = CATEGORIES.filter(c => c.id !== 'ui-design' && c.id !== 'ux-design');

    const directHtml = directCats.map(cat => {
      let gridCols = 1;
      if (cat.subcategories.length > 8) {
        gridCols = 3;
      } else if (cat.subcategories.length > 3) {
        gridCols = 2;
      }

      const subcategoriesHtml = cat.subcategories.map(sub => {
        const articleCount = getArticlesBySubcat(sub.id).length;
        const countText = `${articleCount} ${articleCount === 1 ? 'article' : 'articles'}`;
        return `
          <a href="/category/${cat.id}/${sub.id}" class="nav-dropdown-item" onclick="navigate('subcategory','${cat.id}','${sub.id}'); return false;">
            <div class="nav-dropdown-item-title">${sub.title}</div>
            <div class="nav-dropdown-item-desc">${sub.description}</div>
            <div class="nav-dropdown-item-count">${countText}</div>
          </a>
        `;
      }).join('');

      return `
        <div class="nav-item-wrapper" data-cat-id="${cat.id}">
          <button class="nav-link" data-cat-id="${cat.id}" onclick="navigate('category','${cat.id}')">
            <span>${cat.title}</span>
            <svg class="nav-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          <div class="nav-dropdown-menu cols-${gridCols}">
            <div class="nav-dropdown-inner">
              <div class="nav-dropdown-header">
                <div class="nav-dropdown-title">
                  <span>${cat.title}</span>
                  <span class="nav-dropdown-header-count">${countInCategory(cat.id)} articles</span>
                </div>
                <div class="nav-dropdown-desc">${cat.description}</div>
              </div>
              <div class="nav-dropdown-grid">
                ${subcategoriesHtml}
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');

    const toolsHtml = `
      <div class="nav-item-wrapper" data-cat-id="interactive-tools">
        <button class="nav-link" data-cat-id="interactive-tools" onclick="navigate('tools'); return false;">
          <span>Tools</span>
        </button>
      </div>
    `;

    /*
    const jobsNavHtml = `
      <div class="nav-item-wrapper" data-cat-id="jobs">
        <button class="nav-link" id="btnJobsNav" data-cat-id="jobs" onclick="navigate('jobs'); return false;">
          <span>Jobs</span>
        </button>
      </div>
    `;
    */
    const jobsNavHtml = '';

    const otherCatsHtml = otherCats.map(cat => {
      const articleCount = getArticlesByCategory(cat.id).length;
      const countText = `${articleCount} ${articleCount === 1 ? 'article' : 'articles'}`;
      return `
        <a href="/category/${cat.id}" class="nav-dropdown-item" onclick="navigate('category','${cat.id}'); return false;">
          <div class="nav-dropdown-item-title">${cat.title}</div>
          <div class="nav-dropdown-item-desc">${cat.description}</div>
          <div class="nav-dropdown-item-count">${countText}</div>
        </a>
      `;
    }).join('');

    const moreHtml = `
      <div class="nav-item-wrapper" data-cat-id="more">
        <button class="nav-link" data-cat-id="more" onclick="return false;">
          <span>More</span>
          <svg class="nav-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
        <div class="nav-dropdown-menu cols-2">
          <div class="nav-dropdown-inner">
            <div class="nav-dropdown-header">
              <div class="nav-dropdown-title">
                <span>More Topics</span>
              </div>
              <div class="nav-dropdown-desc">Explore Figma, Graphic Design, Podcasts, Tools and Resources.</div>
            </div>
            <div class="nav-dropdown-grid">
              ${otherCatsHtml}
            </div>
          </div>
        </div>
      </div>
    `;

    navLinks.innerHTML = directHtml + toolsHtml + jobsNavHtml + moreHtml;

    setupDropdownHoverEvents();
  }
}

function setupDropdownHoverEvents() {
  const wrappers = document.querySelectorAll('.nav-item-wrapper');
  wrappers.forEach(wrapper => {
    const dropdown = wrapper.querySelector('.nav-dropdown-menu');
    let hideTimeout = null;

    const showDropdown = () => {
      wrappers.forEach(w => {
        if (w !== wrapper) {
          w.classList.remove('dropdown-active');
        }
      });
      clearTimeout(hideTimeout);
      wrapper.classList.add('dropdown-active');
    };

    const hideDropdown = () => {
      clearTimeout(hideTimeout);
      hideTimeout = setTimeout(() => {
        wrapper.classList.remove('dropdown-active');
      }, 150);
    };

    wrapper.addEventListener('mouseenter', showDropdown);
    wrapper.addEventListener('mouseleave', hideDropdown);

    if (dropdown) {
      dropdown.addEventListener('mouseenter', () => {
        clearTimeout(hideTimeout);
      });
      dropdown.addEventListener('mouseleave', hideDropdown);
    }
  });
}

function closeAllDropdowns() {
  document.querySelectorAll('.nav-item-wrapper').forEach(w => {
    w.classList.remove('dropdown-active');
  });
}

// ── HOME ─────────────────────────────────────────────────────

function renderLearningDashboard() {
  const completedList = getCompletedArticles();
  const totalArticles = ARTICLES.length;
  const completedCount = completedList.length;

  if (completedCount === 0) {
    return `
      <div class="learning-dashboard empty stagger-item" style="--stagger: 0.8">
        <div class="dashboard-header-simple">
          <h3>Start Your Learning Journey</h3>
          <p>Read UI/UX or Figma articles and mark them as completed to track progress and earn design badges!</p>
        </div>
      </div>
    `;
  }

  const overallPercent = Math.round((completedCount / totalArticles) * 100);

  const trackCats = ['ui-design', 'ux-design', 'figma'];
  const trackCatsHtml = trackCats.map(catId => {
    const cat = getCategoryById(catId);
    if (!cat) return '';

    const catArticles = getArticlesByCategory(catId);
    const catCompleted = catArticles.filter(a => completedList.includes(a.id)).length;
    const catTotal = catArticles.length;
    const catPercent = catTotal > 0 ? Math.round((catCompleted / catTotal) * 100) : 0;

    return `
      <div class="dashboard-cat-row">
        <div class="dashboard-cat-info">
          <span class="dashboard-cat-title">${cat.title}</span>
          <span class="dashboard-cat-meta">${catCompleted}/${catTotal} Read (${catPercent}%)</span>
        </div>
        <div class="dashboard-progress-bar-container">
          <div class="dashboard-progress-bar-fill" style="width: ${catPercent}%"></div>
        </div>
      </div>
    `;
  }).join('');

  const badges = checkBadges();
  const badgesHtml = badges.map(badge => {
    return `
      <div class="badge-item ${badge.unlocked ? 'unlocked' : 'locked'}" title="${badge.description}">
        <div class="badge-icon-wrapper ${badge.theme}">
          <span class="badge-icon">${badge.icon}</span>
        </div>
        <div class="badge-tooltip">
          <div class="badge-tooltip-title">${badge.title}</div>
          <div class="badge-tooltip-desc">${badge.description}</div>
          <div class="badge-tooltip-status">${badge.unlocked ? '✅ Unlocked' : '🔒 Locked'}</div>
        </div>
      </div>
    `;
  }).join('');

  return `
    <div class="learning-dashboard stagger-item" style="--stagger: 0.8">
      <div class="dashboard-inner-container">
        <div class="dashboard-title-row">
          <h3>Your Learning Dashboard</h3>
          <div class="dashboard-overall-pill">
            <span>Overall Progress: <strong>${completedCount}/${totalArticles}</strong> (${overallPercent}%)</span>
          </div>
        </div>
        <div class="dashboard-content-layout">
          <div class="dashboard-tracks">
            ${trackCatsHtml}
          </div>
          <!--
          <div class="dashboard-vertical-divider"></div>
          <div class="dashboard-badges-section">
            <h4 class="dashboard-badges-title">Design Badges</h4>
            <div class="dashboard-badges-grid">
              ${badgesHtml}
            </div>
          </div>
          -->
        </div>
      </div>
    </div>
  `;
}

function handleGoogleSignIn() {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider).catch((error) => {
    console.error("Authentication failed:", error);
    alert("Authentication failed: " + error.message);
  });
}

function handleSignOut() {
  auth.signOut().then(() => {
    localStorage.removeItem('ds_completed_articles');
    localStorage.removeItem('ds_quiz_scores');
  }).catch((error) => {
    console.error("Sign out failed:", error);
  });
}

function renderAuthBanner() {
  if (currentUser) {
    const avatarUrl = currentUser.photoURL || '';
    const name = currentUser.displayName || currentUser.email || 'User';
    const avatarHtml = avatarUrl
      ? `<img class="auth-avatar" src="${avatarUrl}" alt="Avatar">`
      : `<div class="auth-avatar-letter">${name.charAt(0).toUpperCase()}</div>`;

    return `
      <div class="auth-banner-card signed-in stagger-item" style="--stagger: 1.2">
        <div class="auth-banner-left">
          ${avatarHtml}
          <div class="auth-banner-info">
            <h4 class="auth-user-name">${name}</h4>
            <p class="auth-user-status">⚡ Syncing progress across your devices</p>
          </div>
        </div>
        <button class="btn-auth-action sign-out" onclick="handleSignOut()">Sign Out</button>
      </div>
    `;
  } else {
    return `
      <div class="auth-banner-card signed-out stagger-item" style="--stagger: 1.2">
        <div class="auth-banner-left">
          <div class="auth-banner-info">
            <h4 class="auth-banner-title">Sync Your Progress</h4>
            <p class="auth-banner-desc">Log in to keep your reading progress and quiz achievements synchronized across all devices.</p>
          </div>
        </div>
        <button class="btn-auth-action sign-in-google" onclick="handleGoogleSignIn()">
          <svg class="google-icon" viewBox="0 0 24 24" width="18" height="18">
            <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v3.92h6.69c-.29 1.5-1.14 2.77-2.4 3.61v3h3.86c2.26-2.09 3.59-5.17 3.59-8.46z"/>
            <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09C3.26 21.3 7.31 24 12 24z"/>
            <path fill="#FBBC05" d="M5.27 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.98-3.09z"/>
            <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z"/>
          </svg>
          <span>Sign In with Google</span>
        </button>
      </div>
    `;
  }
}

function renderDashboardSignInGate() {
  return `
    <div class="page-wide">
      <div class="dashboard-signin-gate">
        <div class="signin-gate-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
            <line x1="9" y1="21" x2="9" y2="9"/>
            <line x1="3" y1="9" x2="21" y2="9"/>
          </svg>
        </div>
        <h1 class="signin-gate-title">Learning Dashboard</h1>
        <p class="signin-gate-desc">Sign in with Google to track your reading progress, unlock achievements, and sync your learning across all devices.</p>
        <div class="signin-gate-perks">
          <div class="signin-gate-perk">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
            <span>Track reading progress across all articles</span>
          </div>
          <div class="signin-gate-perk">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>
            <span>Unlock design achievements as you learn</span>
          </div>
          <div class="signin-gate-perk">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
            <span>Synced across phone, tablet and desktop</span>
          </div>
        </div>
        <button class="btn-signin-gate" onclick="handleGoogleSignIn()">
          <svg viewBox="0 0 24 24" width="20" height="20">
            <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v3.92h6.69c-.29 1.5-1.14 2.77-2.4 3.61v3h3.86c2.26-2.09 3.59-5.17 3.59-8.46z"/>
            <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09C3.26 21.3 7.31 24 12 24z"/>
            <path fill="#FBBC05" d="M5.27 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.98-3.09z"/>
            <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z"/>
          </svg>
          <span>Sign in with Google</span>
        </button>
        <p class="signin-gate-note">Free forever. No email required beyond your Google account.</p>
      </div>
    </div>
  `;
}

function renderDashboardPage() {
  // Show sign-in gate for unauthenticated users
  if (!currentUser) {
    return renderDashboardSignInGate();
  }

  const completedList = getCompletedArticles();
  const completedArticles = ARTICLES.filter(a => completedList.includes(a.id))
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  let completedListHtml = '';
  if (completedArticles.length > 0) {
    completedListHtml = completedArticles.map(a => {
      return `
        <div class="completed-article-row" onclick="navigate('article','${a.categoryId}','${a.subcategoryId}','${a.id}')">
          <div class="completed-article-title-col">
            <span class="completed-checkmark-badge">✓</span>
            <span class="completed-article-title">${a.title}</span>
          </div>
          <span class="completed-article-date">${formatDate(a.date)}</span>
        </div>
      `;
    }).join('');
  } else {
    completedListHtml = `
      <div class="completed-articles-empty">
        <p>No completed articles yet. Start reading to build your learning path!</p>
      </div>
    `;
  }

  return `
    <div class="layout-container dashboard-page-layout">
      <!-- Left Column: Navigation Sidebar on desktop -->
      <aside class="layout-left stagger-item" style="--stagger: 1">
        <div class="sidebar-widget">
          <h3 class="sidebar-title">Menu</h3>
          <nav class="sidebar-menu">
            <a href="/" class="sidebar-menu-item" onclick="navigate('home'); return false;">
              Home Page
            </a>
            <a href="/dashboard" class="sidebar-menu-item active" onclick="navigate('dashboard'); return false;">
              Learning Dashboard
            </a>
          </nav>
        </div>
      </aside>

      <!-- Center Column: Full detailed dashboard and achievements list -->
      <main class="layout-center">
        <div class="header-navigation-row">
          <button class="btn-back stagger-item" style="--stagger: 0" onclick="navigate('home')">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <span>Back</span>
          </button>
          ${renderBreadcrumb([
    { label: 'Home', action: `navigate('home')` },
    { label: 'Learning Dashboard' }
  ], 1)}
        </div>
        
        <div class="subcategory-banner stagger-item" style="--stagger: 1.5">
          <div class="sub-banner-badge">My Progress</div>
          <h1 class="sub-banner-title">Your Learning Dashboard</h1>
          <p class="sub-banner-desc">Track your reading progress across categories, inspect your performance metrics, and review unlocked design achievements.</p>
        </div>
        
        <div class="auth-banner-mobile">
          ${renderAuthBanner()}
        </div>
        
        ${renderLearningDashboard()}
        
        <!-- 
        <div class="section-title-article stagger-item" style="--stagger: 1.8">UI/UX Quiz Arena</div>
        <div id="quizArenaContainer" class="stagger-item" style="--stagger: 2.0"></div>
        -->
        
        <div class="section-title-article stagger-item" style="--stagger: 2.2">Recently Completed Articles</div>
        
        <div class="completed-articles-list-container stagger-item" style="--stagger: 2.6">
          ${completedListHtml}
        </div>
      </main>

      <!-- Right Column: Auth Widget on desktop -->
      <aside class="layout-right stagger-item" style="--stagger: 1.8">
        <div class="auth-banner-desktop">
          ${renderAuthBanner()}
        </div>
      </aside>
    </div>
  `;
}

function renderDashboardSkeleton() {
  return `
    <div class="layout-container dashboard-page-layout">
      <!-- Left Column Skeleton -->
      <aside class="layout-left">
        <div class="sidebar-widget">
          <div class="shimmer" style="width: 100px; height: 14px; margin-bottom: 16px; border-radius: 4px;"></div>
          <div class="sidebar-menu">
            <div class="shimmer" style="width: 80%; height: 32px; border-radius: 8px; margin-bottom: 6px;"></div>
            <div class="shimmer" style="width: 80%; height: 32px; border-radius: 8px; margin-bottom: 6px;"></div>
          </div>
        </div>
      </aside>

      <!-- Center Column Skeleton -->
      <main class="layout-center">
        <div class="header-navigation-row">
          <button class="btn-back">
            <span>Back</span>
          </button>
        </div>
        
        <div class="subcategory-banner">
          <div class="sub-banner-badge">My Progress</div>
          <h1 class="sub-banner-title">Your Learning Dashboard</h1>
        </div>
        
        <div class="shimmer" style="width: 100%; height: 280px; border-radius: var(--radius); margin-top: 24px; margin-bottom: 32px;"></div>
        
        <div class="shimmer" style="width: 150px; height: 14px; margin-bottom: 16px; border-radius: 4px;"></div>
        <div class="shimmer" style="width: 100%; height: 120px; border-radius: var(--radius-sm);"></div>
      </main>
    </div>
  `;
}

function renderCompactLearningDashboard() {
  const completedList = getCompletedArticles();
  const totalArticles = ARTICLES.length;
  const completedCount = completedList.length;

  // if (completedCount === 0) {
  //   return `
  //     <div class="learning-dashboard empty stagger-item" style="--stagger: 0.8">
  //       <div class="dashboard-header-simple">
  //         <h3>Start Your Learning Journey</h3>
  //         <p>Read UI/UX or Figma articles and mark them as completed to track progress and earn design badges!</p>
  //       </div>
  //     </div>
  //   `;
  // }

  const overallPercent = Math.round((completedCount / totalArticles) * 100);

  // const badges = checkBadges();
  // const unlockedBadges = badges.filter(b => b.unlocked);
  let unlockedBadgesHtml = '';
  /*
  if (unlockedBadges.length > 0) {
    unlockedBadgesHtml = `
      <div class="dashboard-compact-badges-row">
        <span class="compact-badges-label">Unlocked Badges:</span>
        <div class="compact-badges-list">
          ${unlockedBadges.map(badge => `
            <div class="compact-badge-item ${badge.theme}" title="${badge.title}: ${badge.description}">
              ${badge.icon}
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
  */

  return `
    <div class="learning-dashboard compact stagger-item" style="--stagger: 0.8" onclick="navigate('dashboard')">
      <div class="dashboard-compact-inner">
        <div class="dashboard-compact-info-row">
          <div class="dashboard-compact-text">
            <span class="dashboard-compact-badge">My Progress</span>
            <span class="dashboard-compact-stats"><strong>${completedCount}/${totalArticles}</strong> Articles Completed</span>
          </div>
          <span class="dashboard-compact-link">View Dashboard</span>
        </div>
        <div class="dashboard-compact-progress-container">
          <div class="dashboard-compact-progress-fill" style="width: ${overallPercent}%"></div>
        </div>
        ${unlockedBadgesHtml}
      </div>
    </div>
  `;
}

function renderHome() {
  const subscribeUrl = `https://www.youtube.com/channel/${SITE.youtubeChannelId}?sub_confirmation=1`;

  // dynamic stats
  const statsHtml = HOME.stats.map(s => {
    let val = s.value;
    if (s.valueKey === 'articleCount') val = ARTICLES.length;
    if (s.valueKey === 'categoryCount') val = CATEGORIES.length;
    return `<div class="channel-stat"><strong>${val}</strong> ${s.label}</div>`;
  }).join('');

  const latestArticles = ARTICLES.slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, HOME.latestArticlesCount);

  return `
    <div class="channel-banner stagger-item" style="--stagger: 0">
      <div class="channel-inner">
        <img class="channel-avatar" src="${SITE.logo}" alt="Logo"
          onerror="this.style.background='var(--accent)';this.removeAttribute('src')">
        <div class="channel-info">
          <div class="channel-name">${SITE.name}</div>
          <div class="channel-sub">${SITE.description}</div>
          <div class="channel-meta">${statsHtml}</div>
          <div class="channel-actions">
            <a href="${subscribeUrl}" target="_blank" rel="noopener" class="btn-subscribe">
              ${svgYT(15)} Subscribe
            </a>
            <!-- <button class="btn-visit-channel" onclick="navigate('dashboard')">Learning Dashboard</button> -->
          </div>
        </div>
      </div>
    </div>

    <div class="page-wide">
      
      <div class="section-title stagger-item" style="--stagger: 1.2">${HOME.browseSectionTitle}</div>
      <div class="category-grid">
        ${CATEGORIES.map((cat, idx) => `
          <div class="category-card stagger-item" style="--stagger: ${1.4 + idx}" onclick="navigate('category','${cat.id}')">
            <div class="category-title">${cat.title}</div>
            <div class="category-desc">${cat.description}</div>
            <div class="category-count">${countInCategory(cat.id)} articles</div>
          </div>
        `).join('')}
      </div>

      <div class="section-title-article stagger-item" style="--stagger: ${1.6 + CATEGORIES.length}; margin-top:12px">${HOME.latestSectionTitle}</div>
      <div class="section-divider stagger-item" style="--stagger: ${1.8 + CATEGORIES.length}"></div>
      ${renderArticleList(latestArticles, 2.0 + CATEGORIES.length)}
    </div>
  `;
}

// ── CATEGORY PROGRESS HELPERS ────────────────────────────────
function renderCategoryBannerProgress(catId) {
  return '';
}

function renderSubcategoryBannerProgress(subId) {
  return '';
}

// ── CATEGORY ─────────────────────────────────────────────────

function renderCategoryPage(catId) {
  const cat = getCategoryById(catId);
  if (!cat) return emptyPage('Category not found.');

  const bestReads = getBestReads(catId, 3);

  return `
    <div class="layout-container">
      <!-- Left Column: Subcategories list on desktop -->
      <aside class="layout-left stagger-item" style="--stagger: 1">
        <div class="sidebar-widget">
          <h3 class="sidebar-title">Subcategories</h3>
          <nav class="sidebar-menu">
            <a href="/category/${catId}" class="sidebar-menu-item active" onclick="navigate('category','${catId}'); return false;">
              All Articles
            </a>
            ${cat.subcategories.map(sub => `
              <a href="/category/${catId}/${sub.id}" class="sidebar-menu-item" onclick="navigate('subcategory','${catId}','${sub.id}'); return false;">
                ${sub.title}
              </a>
            `).join('')}
          </nav>
        </div>
      </aside>

      <!-- Center Column: Articles -->
      <main class="layout-center">
        <div class="header-navigation-row">
          <button class="btn-back stagger-item" style="--stagger: 0" onclick="navigate('home')">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <span>Back</span>
          </button>

          ${renderBreadcrumb([
    { label: 'Home', action: `navigate('home')` },
    { label: cat.title }
  ], 1)}
        </div>
        
        <div class="subcategory-banner stagger-item" style="--stagger: 2">
          <div class="sub-banner-badge">Category</div>
          <h1 class="sub-banner-title">${cat.title}</h1>
          ${cat.description ? `<p class="sub-banner-desc">${cat.description}</p>` : ''}
          ${renderCategoryBannerProgress(catId)}
        </div>
        
        <!-- Subgrid: shown on mobile, hidden on desktop -->
        <div class="category-subgrid-mobile-only">
          <div class="sub-grid">
            ${cat.subcategories.map((sub, idx) => `
              <div class="sub-card stagger-item" style="--stagger: ${3 + idx}" onclick="navigate('subcategory','${catId}','${sub.id}')">
                <div class="sub-card-title">${sub.title}</div>
                <div class="sub-card-desc">${sub.description}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="section-title-article stagger-item" style="--stagger: ${3 + cat.subcategories.length}; margin-top:8px">All Articles</div>
        <div class="section-divider stagger-item" style="--stagger: ${4 + cat.subcategories.length}"></div>
        ${renderArticleList(getArticlesByCategory(catId), 5 + cat.subcategories.length)}
      </main>

      <!-- Right Column: Best Reads on desktop -->
      <aside class="layout-right stagger-item" style="--stagger: 2">
        <div class="sidebar-widget">
          <h3 class="sidebar-title">Best Reads</h3>
          <div class="best-reads-list">
            ${bestReads.map(a => {
    const thumb = a.thumbnail || getThumbUrl(a.youtubeUrl);
    return `
                <div class="best-read-card" onclick="navigate('article','${a.categoryId}','${a.subcategoryId}','${a.id}')">
                  <div class="best-read-thumb">
                    ${thumb ? `<img src="${thumb}" alt="${a.title}" loading="lazy">` : `<div class="thumb-placeholder">${a.youtubeUrl ? svgPlay(16) : svgDoc(16)}</div>`}
                  </div>
                  <div class="best-read-content">
                    <h4 class="best-read-title">${a.title}</h4>
                    <div class="best-read-date">${formatDate(a.date)}</div>
                  </div>
                </div>
              `;
  }).join('')}
          </div>
        </div>
      </aside>
    </div>
  `;
}

// ── SUBCATEGORY ───────────────────────────────────────────────

function renderSubcategoryPage(catId, subId) {
  const cat = getCategoryById(catId);
  const sub = getSubcategoryById(catId, subId);
  if (!cat || !sub) return emptyPage('Not found.');

  const articles = getArticlesBySubcat(subId);
  const bestReads = getBestReads(catId, 3);
  return `
    <div class="layout-container">
      <!-- Left Column: Sibling subcategories on desktop -->
      <aside class="layout-left stagger-item" style="--stagger: 1">
        <div class="sidebar-widget">
          <h3 class="sidebar-title">Subcategories</h3>
          <nav class="sidebar-menu">
            <a href="/category/${catId}" class="sidebar-menu-item" onclick="navigate('category','${catId}'); return false;">
              All Articles
            </a>
            ${cat.subcategories.map(s => `
              <a href="/category/${catId}/${s.id}" class="sidebar-menu-item ${s.id === subId ? 'active' : ''}" onclick="navigate('subcategory','${catId}','${s.id}'); return false;">
                ${s.title}
              </a>
            `).join('')}
          </nav>
        </div>
      </aside>

      <!-- Center Column: Articles -->
      <main class="layout-center">
        <div class="header-navigation-row">
          <button class="btn-back stagger-item" style="--stagger: 0" onclick="navigate('category','${catId}')">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <span>Back</span>
          </button>

          ${renderBreadcrumb([
    { label: 'Home', action: `navigate('home')` },
    { label: cat.title, action: `navigate('category','${catId}')` },
    { label: sub.title }
  ], 1)}
        </div>
        
        <div class="subcategory-banner stagger-item" style="--stagger: 2">
          <div class="sub-banner-badge">Topic</div>
          <h1 class="sub-banner-title">${sub.title}</h1>
          ${sub.description ? `<p class="sub-banner-desc">${sub.description}</p>` : ''}
          ${renderSubcategoryBannerProgress(sub.id)}
        </div>
        ${articles.length ? renderArticleList(articles, 4) : `<div class="empty-state">
          <div class="empty-state-lottie"></div>
          <p class="empty-state-text">No articles yet. Coming soon.</p>
        </div>`}
      </main>

      <!-- Right Column: Best Reads on desktop -->
      <aside class="layout-right stagger-item" style="--stagger: 2">
        <div class="sidebar-widget">
          <h3 class="sidebar-title">Best Reads</h3>
          <div class="best-reads-list">
            ${bestReads.map(a => {
    const thumb = a.thumbnail || getThumbUrl(a.youtubeUrl);
    return `
                <div class="best-read-card" onclick="navigate('article','${a.categoryId}','${a.subcategoryId}','${a.id}')">
                  <div class="best-read-thumb">
                    ${thumb ? `<img src="${thumb}" alt="${a.title}" loading="lazy">` : `<div class="thumb-placeholder">${a.youtubeUrl ? svgPlay(16) : svgDoc(16)}</div>`}
                  </div>
                  <div class="best-read-content">
                    <h4 class="best-read-title">${a.title}</h4>
                    <div class="best-read-date">${formatDate(a.date)}</div>
                  </div>
                </div>
              `;
  }).join('')}
          </div>
        </div>
      </aside>
    </div>
  `;
}

// ── ARTICLE LIST ─────────────────────────────────────────────

function renderArticleList(articles, startStaggerIdx = 0, query = null) {
  if (!articles.length) return `<div class="empty-state">
    <div class="empty-state-lottie"></div>
    <p class="empty-state-text">No articles yet.</p>
  </div>`;
  const queryArg = query ? `, '${query.replace(/'/g, "\\'")}'` : '';
  return `<div class="article-list">
    ${articles.map((a, idx) => {
    const cat = getCategoryById(a.categoryId);
    const thumb = a.thumbnail || getThumbUrl(a.youtubeUrl);
    return `
        <div class="article-item stagger-item" style="--stagger: ${startStaggerIdx + idx}" onclick="navigate('article','${a.categoryId}','${a.subcategoryId}','${a.id}'${queryArg})">
          <div class="article-info">
            <div class="article-tag-sm">${cat?.title || ''}</div>
            <div class="article-title">${a.title}</div>
            <div class="article-desc">${a.description}</div>
            <div class="article-date">${formatDate(a.date)}</div>
          </div>
          <div class="article-thumb">
            ${thumb ? `<img src="${thumb}" alt="${a.title}" loading="lazy">` : `<div class="thumb-placeholder">${a.youtubeUrl ? svgPlay() : svgDoc()}</div>`}
          </div>
        </div>
      `;
  }).join('')}
  </div>`;
}

// ── ARTICLE PAGE ─────────────────────────────────────────────

function getRelatedArticles(currentArticle, limit = 3) {
  // 1. Get articles in the same subcategory
  let related = ARTICLES.filter(a => a.id !== currentArticle.id && a.subcategoryId === currentArticle.subcategoryId);

  // 2. If we need more, get articles in the same category
  if (related.length < limit) {
    const sameCat = ARTICLES.filter(a => a.id !== currentArticle.id && a.categoryId === currentArticle.categoryId && !related.some(r => r.id === a.id));
    related = related.concat(sameCat.slice(0, limit - related.length));
  }

  // 3. If we still need more, fill with other articles
  if (related.length < limit) {
    const others = ARTICLES.filter(a => a.id !== currentArticle.id && !related.some(r => r.id === a.id));
    related = related.concat(others.slice(0, limit - related.length));
  }

  return related.slice(0, limit);
}

function renderRelatedArticles(articles) {
  if (!articles.length) return '';

  const itemsHtml = articles.map(a => {
    const thumb = a.thumbnail || getThumbUrl(a.youtubeUrl);
    return `
      <div class="related-card" onclick="navigate('article','${a.categoryId}','${a.subcategoryId}','${a.id}')">
        <div class="related-card-thumb">
          ${thumb ? `<img src="${thumb}" alt="${a.title}" loading="lazy">` : `<div class="thumb-placeholder">${a.youtubeUrl ? svgPlay(16) : svgDoc(16)}</div>`}
        </div>
        <div class="related-card-content">
          <h4 class="related-card-title">${a.title}</h4>
          <div class="related-card-date">${formatDate(a.date)}</div>
        </div>
      </div>
    `;
  }).join('');

  return `
    <div class="related-articles-section stagger-item" style="--stagger: 5">
      <h3 class="related-title">Related Articles</h3>
      <div class="related-grid">
        ${itemsHtml}
      </div>
    </div>
  `;
}

function renderArticlePage(catId, subId, articleId, query) {
  const article = ARTICLES.find(a => a.id === articleId);
  if (!article) return emptyPage('Article not found.');

  const cat = getCategoryById(catId);
  const sub = getSubcategoryById(catId, subId);
  const embedUrl = getEmbedUrl(article.youtubeUrl);
  const relatedArticles = getRelatedArticles(article, 3);
  const bestReads = getBestReads(catId, 3);

  const headings = extractHeadings(article.content);
  let bodyWithIds = injectHeadingIds(article.content);
  if (query) {
    bodyWithIds = highlightHtmlContent(bodyWithIds, query);
  }

  return `
    <div class="layout-container article-shell">
      <!-- Left Column: Table of Contents -->
      <aside class="layout-left stagger-item" style="--stagger: 1">
        ${headings.length ? `
          <div class="sidebar-widget toc-widget">
            <h3 class="sidebar-title">Table of Contents</h3>
            <ul class="toc-list">
              ${headings.map(h => `
                <li class="toc-item toc-level-${h.level}">
                  <a href="#${h.id}" class="toc-link" onclick="scrollToHeading('${h.id}'); return false;">
                    ${h.text}
                  </a>
                </li>
              `).join('')}
            </ul>
          </div>
        ` : `
          <div class="sidebar-widget">
            <nav class="sidebar-menu">
              <a href="/category/${catId}" class="sidebar-menu-item" onclick="navigate('category','${catId}'); return false;">
                Back
              </a>
            </nav>
          </div>
        `}
      </aside>

      <!-- Center Column: Article reading -->
      <main class="layout-center article-reading">
        <div class="header-navigation-row">
          <button class="btn-back stagger-item" style="--stagger: 0" onclick="navigate('subcategory','${catId}','${subId}')">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <span>Back</span>
          </button>

          ${renderBreadcrumb([
    { label: 'Home', action: `navigate('home')` },
    { label: cat?.title, action: `navigate('category','${catId}')` },
    { label: sub?.title, action: `navigate('subcategory','${catId}','${subId}')` },
    { label: article.title }
  ], 1)}
        </div>

        ${query ? `
          <div class="highlight-banner stagger-item" id="highlightBanner" style="--stagger: 1.5">
            <span>Showing matches highlighted for "<strong>${query}</strong>"</span>
            <button class="btn-clear-highlights" onclick="clearBodyHighlights()">Clear</button>
          </div>
        ` : ''}

        <div class="subcategory-banner stagger-item" style="--stagger: 2">
          <div class="sub-banner-badge">${sub?.title || cat?.title || 'Article'}</div>
          <h1 class="sub-banner-title">${article.title}</h1>
          ${article.description ? `<p class="sub-banner-desc" style="margin-bottom: 12px;">${article.description}</p>` : ''}
          <div style="font-family: var(--font-mono); font-size: 11px; opacity: 0.7; letter-spacing: 0.5px;">
            ${formatDate(article.date)}
          </div>
        </div>

        ${article.audioUrl ? renderAudioPlayer(article) : ''}

        <div class="article-body stagger-item" style="--stagger: 4">${bodyWithIds}</div>

        ${embedUrl ? `
          <div class="yt-embed-section stagger-item" style="--stagger: 5">
            <div class="yt-embed-wrapper">
              <iframe src="${embedUrl}" allowfullscreen loading="lazy" title="${article.title}"></iframe>
            </div>
          </div>
        ` : ''}

        ${renderQuizCard(article.id)}
        ${renderArticleCompletionToggle(article.id)}
      </main>

      <!-- Right Column: Related Articles on desktop -->
      <aside class="layout-right stagger-item" style="--stagger: 6">
        ${renderRelatedArticles(relatedArticles)}
        
        <div class="sidebar-widget" style="margin-top: 36px;">
          <h3 class="sidebar-title">Best Reads</h3>
          <div class="best-reads-list">
            ${bestReads.map(a => {
    const thumb = a.thumbnail || getThumbUrl(a.youtubeUrl);
    return `
                <div class="best-read-card" onclick="navigate('article','${a.categoryId}','${a.subcategoryId}','${a.id}')">
                  <div class="best-read-thumb">
                    ${thumb ? `<img src="${thumb}" alt="${a.title}" loading="lazy">` : `<div class="thumb-placeholder">${a.youtubeUrl ? svgPlay(16) : svgDoc(16)}</div>`}
                  </div>
                  <div class="best-read-content">
                    <h4 class="best-read-title">${a.title}</h4>
                    <div class="best-read-date">${formatDate(a.date)}</div>
                  </div>
                </div>
              `;
  }).join('')}
          </div>
        </div>
      </aside>
    </div>
  `;
}

// ── QUIZ CARD ──

function renderQuizCard(articleId) {
  const quiz = QUIZZES[articleId];
  if (!quiz) return '';

  return `
    <div class="quiz-card stagger-item" style="--stagger: 4.8" id="quiz-card-${articleId}">
      <div class="quiz-badge">Quick Test</div>
      <h3 class="quiz-question">${quiz.question}</h3>
      <div class="quiz-options">
        ${quiz.options.map((opt, idx) => `
          <button class="quiz-option" onclick="handleQuizSelection('${articleId}', ${idx}, this)">
            <span class="quiz-option-letter">${String.fromCharCode(65 + idx)}</span>
            <span class="quiz-option-text">${opt}</span>
          </button>
        `).join('')}
      </div>
      <div class="quiz-feedback" id="quiz-feedback-${articleId}" style="display: none;">
        <div class="quiz-feedback-status"></div>
        <div class="quiz-explanation">${quiz.explanation}</div>
      </div>
    </div>
  `;
}

function handleQuizSelection(articleId, selectedIdx, btn) {
  const quiz = QUIZZES[articleId];
  if (!quiz) return;

  const card = document.getElementById(`quiz-card-${articleId}`);
  if (!card) return;

  const options = card.querySelectorAll('.quiz-option');
  const feedback = document.getElementById(`quiz-feedback-${articleId}`);

  // Disable all options
  options.forEach(opt => opt.disabled = true);

  const correctIdx = quiz.answerIndex;

  if (selectedIdx === correctIdx) {
    btn.classList.add('correct');
    const statusElem = feedback.querySelector('.quiz-feedback-status');
    statusElem.innerHTML = `✨ <strong>Spot on!</strong> That's correct.`;
    statusElem.className = 'quiz-feedback-status correct-text';
  } else {
    btn.classList.add('incorrect');
    options[correctIdx].classList.add('correct');
    const statusElem = feedback.querySelector('.quiz-feedback-status');
    statusElem.innerHTML = `🔍 <strong>Not quite!</strong> The correct choice is highlighted.`;
    statusElem.className = 'quiz-feedback-status incorrect-text';
  }

  feedback.style.display = 'block';
}

// ── ARTICLE COMPLETION TOGGLE ──

function renderArticleCompletionToggle(articleId) {
  return '';
}

function handleArticleCompletionToggle(articleId, btn) {
  const completed = toggleArticleCompleted(articleId);
  btn.classList.toggle('completed', completed);
  const textEl = btn.querySelector('.completion-text');
  if (textEl) {
    textEl.textContent = completed ? 'Completed' : 'Mark as Completed';
  }

  // Optional: trigger subtle custom audio click sound if supported
  if (typeof window.navigator.vibrate === 'function') {
    window.navigator.vibrate(10); // subtle vibration feedback on mobile devices
  }
}

// ── SEARCH HIGHLIGHT HELPERS ──

function highlightHtmlContent(html, query) {
  if (!query) return html;
  const parser = new DOMParser();
  const doc = parser.parseFromString(`<div>${html}</div>`, 'text/html');
  const root = doc.body.firstChild;

  const q = query.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  const regex = new RegExp(`(${q})`, 'gi');

  function walk(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      if (node.nodeValue.trim()) {
        const text = node.nodeValue;
        if (regex.test(text)) {
          const temp = document.createElement('div');
          temp.innerHTML = text.replace(regex, '<mark class="body-highlight">$1</mark>');
          while (temp.firstChild) {
            node.parentNode.insertBefore(temp.firstChild, node);
          }
          node.parentNode.removeChild(node);
        }
      }
    } else if (node.nodeType === Node.ELEMENT_NODE && node.tagName !== 'SCRIPT' && node.tagName !== 'STYLE' && node.tagName !== 'A') {
      const children = Array.from(node.childNodes);
      for (const child of children) {
        walk(child);
      }
    }
  }

  walk(root);
  return root.innerHTML;
}

function clearBodyHighlights() {
  document.querySelectorAll('mark.body-highlight').forEach(el => {
    const text = el.textContent;
    el.replaceWith(document.createTextNode(text));
  });
  const banner = document.getElementById('highlightBanner');
  if (banner) banner.remove();

  try {
    const hash = location.hash;
    const newHash = hash.replace(/&hl=[^&]*/, '');
    history.replaceState(null, '', newHash);
  } catch (e) { }
}


// ── TRAINING CARD ────────────────────────────────────────────

function renderTrainingCard() {
  const t = TRAINING;
  const feats = t.features.map(f => `<div class="training-feature">${f}</div>`).join('');

  const action = t.useWhatsapp
    ? `<a href="https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappMessage)}" target="_blank">
        <button class="btn-wa">${svgWhatsapp()} Chat on WhatsApp</button>
      </a>`
    : `<div class="training-form">
        <input type="text" id="tf-name" placeholder="Your Name" />
        <input type="tel"  id="tf-phone" placeholder="Phone Number" />
        ${t.formFields.includes('message') ? `<textarea id="tf-msg" rows="3" placeholder="Message (optional)"></textarea>` : ''}
        <button class="btn-submit" onclick="submitTrainingForm()">Send Enquiry</button>
      </div>`;

  return `
    <div class="training-card">
      <div class="training-card-badge">${t.badge}</div>
      <div class="training-card-inner">
        <div class="training-card-text">
          <h3>${t.title}</h3>
          <p>${t.description}</p>
          <div class="training-features">${feats}</div>
        </div>
        <div class="training-card-action">${action}</div>
      </div>
    </div>
  `;
}

function submitTrainingForm() {
  const name = document.getElementById('tf-name')?.value?.trim();
  const phone = document.getElementById('tf-phone')?.value?.trim();
  const msg = document.getElementById('tf-msg')?.value?.trim() || '';
  if (!name || !phone) { alert('Please enter your name and phone number.'); return; }
  const text = `Hi! I'm ${name}. Phone: ${phone}.${msg ? ' Message: ' + msg : ''} — via Design School website`;
  window.open(`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
}

// ── HELPERS ──────────────────────────────────────────────────

function renderBreadcrumb(crumbs, startStaggerIdx = 0) {
  const parts = crumbs.map((c, i) => {
    const isLast = i === crumbs.length - 1;
    if (isLast) return `<span class="breadcrumb-current">${c.label}</span>`;
    return `<a onclick="${c.action}">${c.label}</a>`;
  });
  const joined = parts.reduce((acc, p, i) => {
    acc.push(p);
    if (i < parts.length - 1) acc.push(`<span>›</span>`);
    return acc;
  }, []);
  return `<div class="breadcrumb stagger-item" style="--stagger: ${startStaggerIdx}">${joined.join('')}</div>`;
}

function emptyPage(msg) {
  return `<div class="page-wide">
    <div class="empty-state">
      <div class="empty-state-lottie"></div>
      <p class="empty-state-text">${msg}</p>
    </div>
  </div>`;
}

function highlightText(text, query) {
  if (!query) return text;
  const q = query.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  const regex = new RegExp(`(${q})`, 'gi');
  return text.replace(regex, '<span class="search-highlight">$1</span>');
}

function searchArticles(query) {
  if (!query) return [];
  const q = query.toLowerCase().trim();

  const results = [];
  for (const article of ARTICLES) {
    let score = 0;
    const title = article.title?.toLowerCase() || '';
    const desc = article.description?.toLowerCase() || '';
    const tags = article.tags || [];

    if (title === q) {
      score += 100;
    } else if (title.startsWith(q)) {
      score += 80;
    } else if (title.includes(q)) {
      score += 50;
    }

    tags.forEach(tag => {
      const t = tag.toLowerCase();
      if (t === q) score += 40;
      else if (t.includes(q)) score += 20;
    });

    if (desc.includes(q)) {
      score += 10;
    }

    const cat = getCategoryById(article.categoryId);
    if (cat?.title?.toLowerCase().includes(q)) {
      score += 15;
    }

    const sub = getSubcategoryById(article.categoryId, article.subcategoryId);
    if (sub?.title?.toLowerCase().includes(q)) {
      score += 15;
    }

    const contentText = (article.content || '').replace(/<[^>]*>/g, ' ').toLowerCase();
    if (contentText.includes(q)) {
      score += 1;
    }

    if (score > 0) {
      results.push({ article, score });
    }
  }

  results.sort((a, b) => b.score - a.score);
  return results.map(r => r.article);
}

function renderSearchPage(query) {
  const results = searchArticles(query);
  const breadcrumbHtml = renderBreadcrumb([
    { label: 'Home', action: `navigate('home')` },
    { label: `Search: ${query}` }
  ], 1);

  const trendingArticles = getTrendingArticles();

  return `
    <div class="layout-container">
      <!-- Left Column: Topics menu on desktop -->
      <aside class="layout-left stagger-item" style="--stagger: 1">
        <div class="sidebar-widget">
          <h3 class="sidebar-title">Explore Topics</h3>
          <nav class="sidebar-menu">
            <a href="/" class="sidebar-menu-item" onclick="navigate('home'); return false;">
              Home
            </a>
            ${CATEGORIES.map(cat => `
              <a href="/category/${cat.id}" class="sidebar-menu-item" onclick="navigate('category','${cat.id}'); return false;">
                ${cat.title}
              </a>
            `).join('')}
          </nav>
        </div>
      </aside>

      <!-- Center Column: Search Results -->
      <main class="layout-center">
        <div class="header-navigation-row">
          <button class="btn-back stagger-item" style="--stagger: 0" onclick="navigate('home')">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <span>Back</span>
          </button>

          ${breadcrumbHtml}
        </div>
        
        <div class="section-title stagger-item" style="--stagger: 2">Search Results for "${query}"</div>
        <div class="section-divider stagger-item" style="--stagger: 3"></div>
        
        ${results.length ? renderArticleList(results, 4, query) : `
          <div class="empty-state">
            <div class="empty-state-lottie"></div>
            <p class="empty-state-text">No articles found matching "${query}". Try searching for something else!</p>
          </div>
        `}
      </main>

      <!-- Right Column: Trending articles on desktop -->
      <aside class="layout-right stagger-item" style="--stagger: 2">
        <div class="sidebar-widget">
          <h3 class="sidebar-title">Trending on Design School</h3>
          <div class="trending-list">
            ${trendingArticles.map((a, idx) => `
              <div class="trending-item" onclick="navigate('article','${a.categoryId}','${a.subcategoryId}','${a.id}')">
                <div class="trending-number">0${idx + 1}</div>
                <div class="trending-content">
                  <div class="trending-category">${getCategoryById(a.categoryId)?.title || ''}</div>
                  <h4 class="trending-title">${a.title}</h4>
                  <div class="trending-date">${formatDate(a.date)}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </aside>
    </div>
  `;
}

function renderSearchSkeleton(query) {
  const escapedQuery = query ? query.replace(/"/g, '&quot;') : '';
  return `
    <div class="layout-container">
      <!-- Left Column Skeleton -->
      <aside class="layout-left">
        <div class="sidebar-widget">
          <div class="shimmer" style="width: 110px; height: 14px; margin-bottom: 16px; border-radius: 4px;"></div>
          <div class="sidebar-menu">
            ${Array(5).fill(0).map(() => `
              <div class="shimmer" style="width: 80%; height: 32px; border-radius: 8px; margin-bottom: 6px;"></div>
            `).join('')}
          </div>
        </div>
      </aside>

      <!-- Center Column Skeleton -->
      <main class="layout-center">
        <div class="header-navigation-row">
          <button class="btn-back" onclick="navigate('home')">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <span>Back</span>
          </button>
          <div class="breadcrumb">
            <span class="breadcrumb-current">Search</span>
          </div>
        </div>
        <div class="section-title">Search Results for "${escapedQuery}"</div>
        <div class="section-divider"></div>
        <div class="article-list">
          ${renderArticleListSkeleton(3)}
        </div>
      </main>

      <!-- Right Column Skeleton -->
      <aside class="layout-right">
        <div class="sidebar-widget">
          <div class="shimmer" style="width: 130px; height: 14px; margin-bottom: 16px; border-radius: 4px;"></div>
          <div class="trending-list">
            ${Array(3).fill(0).map(() => `
              <div style="display: flex; gap: 16px; margin-bottom: 16px;">
                <div class="shimmer" style="width: 30px; height: 28px; border-radius: 4px;"></div>
                <div style="flex: 1;">
                  <div class="shimmer" style="width: 40px; height: 10px; margin-bottom: 6px; border-radius: 3px;"></div>
                  <div class="shimmer" style="width: 90%; height: 14px; margin-bottom: 6px; border-radius: 4px;"></div>
                  <div class="shimmer" style="width: 70px; height: 10px; border-radius: 3px;"></div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </aside>
    </div>
  `;
}

let lottieDataPromise = null;
function getLottieData() {
  if (!lottieDataPromise) {
    lottieDataPromise = fetch('./empty-state-lottie.json')
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .catch(err => {
        console.error('Failed to load Lottie JSON:', err);
        lottieDataPromise = null; // retry next time
        return null;
      });
  }
  return lottieDataPromise;
}

async function initEmptyStateLottie() {
  const containers = document.querySelectorAll('.empty-state-lottie');
  if (!containers.length) return;

  const data = await getLottieData();
  if (!data || !window.lottie) return;

  // Re-query in case DOM changed during await
  const currentContainers = document.querySelectorAll('.empty-state-lottie');
  currentContainers.forEach(container => {
    if (container.dataset.lottieLoaded === 'true') return;
    container.dataset.lottieLoaded = 'true';

    window.lottie.loadAnimation({
      container: container,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: data
    });
  });
}

// ── SVG ICONS ────────────────────────────────────────────────

function svgYT(size = 16) {
  return `<svg viewBox="0 0 24 24" fill="currentColor" width="${size}" height="${size}"><path d="M23 7s-.3-2-1.2-2.8c-1.1-1.2-2.4-1.2-3-1.3C16.2 2.8 12 2.8 12 2.8s-4.2 0-6.8.1c-.6.1-1.9.1-3 1.3C1.3 5 1 7 1 7S.8 9.2.8 11.4v2c0 2.2.2 4.4.2 4.4s.3 2 1.2 2.8c1.1 1.2 2.6 1.1 3.3 1.2C7.5 22 12 22 12 22s4.2 0 6.8-.2c.6-.1 1.9-.1 3-1.3.9-.8 1.2-2.8 1.2-2.8s.2-2.2.2-4.4v-2C23.2 9.2 23 7 23 7zM9.7 15.5v-7.6l8.1 3.8-8.1 3.8z"/></svg>`;
}
function svgWhatsapp() {
  return `<svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`;
}
function svgPlay(size = 24) {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="${size}" height="${size}"><polygon points="5 3 19 12 5 21 5 3" fill="currentColor"></polygon></svg>`;
}
function svgDoc(size = 24) {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="${size}" height="${size}"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`;
}

function initSearch() {
  const wrapper = document.getElementById('navSearchWrapper');
  const input = document.getElementById('navSearchInput');
  const suggestions = document.getElementById('searchSuggestions');

  if (!wrapper || !input || !suggestions) return;

  let activeIndex = -1;
  let currentSuggestions = [];

  function updateHighlight(items) {
    items.forEach((item, idx) => {
      item.classList.toggle('highlighted', idx === activeIndex);
      if (idx === activeIndex) {
        item.scrollIntoView({ block: 'nearest' });
      }
    });
  }

  function showSuggestions(val) {
    const query = val.trim();
    if (!query) {
      suggestions.style.display = 'none';
      activeIndex = -1;
      return;
    }

    const results = searchArticles(query);
    currentSuggestions = results.slice(0, 5);
    let html = '';

    if (currentSuggestions.length > 0) {
      currentSuggestions.forEach((article, idx) => {
        const cat = getCategoryById(article.categoryId);
        const titleHtml = highlightText(article.title, query);
        const descHtml = highlightText(article.description, query);
        html += `
          <div class="suggestion-item" data-index="${idx}">
            <div class="suggestion-tag">${cat?.title || ''}</div>
            <div class="suggestion-title">${titleHtml}</div>
            <div class="suggestion-desc">${descHtml}</div>
          </div>
        `;
      });
      html += `
        <div class="suggestion-special" data-index="${currentSuggestions.length}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <span>See all results for "${query}"</span>
        </div>
      `;
    } else {
      currentSuggestions = [];
      html += `
        <div class="suggestion-empty">No results found for "${query}"</div>
      `;
    }

    suggestions.innerHTML = html;
    suggestions.style.display = 'flex';
    activeIndex = -1;
  }

  input.addEventListener('input', (e) => {
    showSuggestions(e.target.value);
  });

  input.addEventListener('focus', (e) => {
    if (e.target.value.trim()) {
      showSuggestions(e.target.value);
    }
  });

  document.addEventListener('click', (e) => {
    if (!wrapper.contains(e.target)) {
      suggestions.style.display = 'none';
      activeIndex = -1;
    }
  });

  suggestions.addEventListener('click', (e) => {
    const item = e.target.closest('.suggestion-item');
    const special = e.target.closest('.suggestion-special');

    if (item) {
      const idx = parseInt(item.dataset.index, 10);
      const article = currentSuggestions[idx];
      if (article) {
        const query = input.value.trim();
        navigate('article', article.categoryId, article.subcategoryId, article.id, query);
        input.value = '';
        suggestions.style.display = 'none';
        input.blur();
      }
    } else if (special) {
      const query = input.value.trim();
      if (query) {
        navigate('search', null, null, null, query);
        suggestions.style.display = 'none';
        input.blur();
      }
    }
  });

  input.addEventListener('keydown', (e) => {
    const items = suggestions.querySelectorAll('.suggestion-item, .suggestion-special');
    const hasDropdownOpen = suggestions.style.display === 'flex';

    if (hasDropdownOpen && items.length > 0) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        activeIndex = (activeIndex + 1) % items.length;
        updateHighlight(items);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        activeIndex = (activeIndex - 1 + items.length) % items.length;
        updateHighlight(items);
      } else if (e.key === 'Escape') {
        suggestions.style.display = 'none';
        activeIndex = -1;
        input.blur();
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (activeIndex >= 0 && activeIndex < items.length) {
          const activeEl = items[activeIndex];
          if (activeEl.classList.contains('suggestion-item')) {
            const idx = parseInt(activeEl.dataset.index, 10);
            const article = currentSuggestions[idx];
            if (article) {
              navigate('article', article.categoryId, article.subcategoryId, article.id);
            }
          } else if (activeEl.classList.contains('suggestion-special')) {
            navigate('search', null, null, null, input.value.trim());
          }
          input.value = '';
          suggestions.style.display = 'none';
          input.blur();
        } else {
          const query = input.value.trim();
          if (query) {
            navigate('search', null, null, null, query);
            suggestions.style.display = 'none';
            input.blur();
          }
        }
      }
    } else {
      if (e.key === 'Enter') {
        const query = input.value.trim();
        if (query) {
          navigate('search', null, null, null, query);
          input.blur();
        }
      }
    }
  });

  document.addEventListener('keydown', (e) => {
    const isInputFocused = document.activeElement && (
      document.activeElement.tagName === 'INPUT' ||
      document.activeElement.tagName === 'TEXTAREA' ||
      document.activeElement.isContentEditable
    );

    if (!isInputFocused) {
      if (e.key === '/' || ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k')) {
        e.preventDefault();
        input.focus();
        input.select();
      } else if (e.key.length === 1 && e.key !== ' ' && !e.ctrlKey && !e.metaKey && !e.altKey) {
        input.focus();
        input.select();
      }
    }
  });
}

function scrollToHeading(id) {
  const el = document.getElementById(id);
  if (el) {
    const yOffset = -85;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

function initTOCActiveTracker() {
  const headings = document.querySelectorAll('.article-body h2, .article-body h3');
  const tocLinks = document.querySelectorAll('.toc-link');

  if (!headings.length || !tocLinks.length) return;

  function updateActiveHeading() {
    const yOffset = 100;
    let activeId = null;

    for (let i = 0; i < headings.length; i++) {
      const heading = headings[i];
      const top = heading.getBoundingClientRect().top;
      if (top <= yOffset) {
        activeId = heading.getAttribute('id');
      } else {
        break;
      }
    }

    if (!activeId && headings.length) {
      activeId = headings[0].getAttribute('id');
    }

    tocLinks.forEach(link => {
      const active = link.getAttribute('href') === `#${activeId}`;
      link.classList.toggle('active', active);
    });
  }

  updateActiveHeading();

  window.addEventListener('scroll', updateActiveHeading, { passive: true });

  if (window._currentScrollListener) {
    window.removeEventListener('scroll', window._currentScrollListener);
  }
  window._currentScrollListener = updateActiveHeading;
}

function cleanupScrollListeners() {
  if (window._currentScrollListener) {
    window.removeEventListener('scroll', window._currentScrollListener);
    window._currentScrollListener = null;
  }
}

// ── ARTICLE DYNAMIC LOADING ──────────────────────────────────
function loadArticles() {
  const promises = ARTICLE_IDS.map(id => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = `article/${id}.js`;
      script.onload = () => resolve();
      script.onerror = () => {
        console.error(`Failed to load article: ${id}`);
        resolve();
      };
      document.head.appendChild(script);
    });
  });
  return Promise.all(promises).then(() => {
    ARTICLE_IDS.forEach(id => {
      if (ARTICLE_REGISTRY[id] && !ARTICLES.some(a => a.id === id)) {
        const art = ARTICLE_REGISTRY[id];
        if (Array.isArray(art.categoryId)) {
          art._categories = art.categoryId;
          Object.defineProperty(art, 'categoryId', {
            get: () => {
              if (_parsingUrl) {
                return art._categories[0] || '';
              }
              const hashState = parseUrl();
              if (hashState.catId && art._categories.includes(hashState.catId)) {
                return hashState.catId;
              }
              return art._categories[0] || '';
            },
            configurable: true,
            enumerable: true
          });
        }
        if (Array.isArray(art.subcategoryId)) {
          art._subcategories = art.subcategoryId;
          Object.defineProperty(art, 'subcategoryId', {
            get: () => {
              if (_parsingUrl) {
                return art._subcategories[0] || '';
              }
              const hashState = parseUrl();
              if (hashState.subId && art._subcategories.includes(hashState.subId)) {
                return hashState.subId;
              }
              return art._subcategories[0] || '';
            },
            configurable: true,
            enumerable: true
          });
        }
        ARTICLES.push(art);
      }
    });
  });
}

// ── LIVE VISITOR STATS ────────────────────────────────────────

async function updateLiveVisitors() {
  if (!SITE.cloudflareWorkerUrl) return;
  try {
    const res = await fetch(SITE.cloudflareWorkerUrl);
    const data = await res.json();
    if (data && data.visitors) {
      document.querySelectorAll('.footer-visitors').forEach(el => {
        el.innerHTML = `
          <span class="pulse-dot"></span>
          ${data.visitors} monthly readers
        `;
      });
    }
  } catch (e) {
    console.warn('Failed to fetch live visitor data:', e);
  }
}

// ── CUSTOM PODCAST PLAYER ──────────────────────────────────────

let globalAudio = null;
let activePodcast = null;

function renderAudioPlayer(article) {
  return `
    <div class="podcast-player-card stagger-item" style="--stagger: 3">
      <div class="player-top">
        <div class="podcast-badge">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/>
            <path d="M19 10v1a7 7 0 0 1-14 0v-1"/>
            <line x1="12" y1="19" x2="12" y2="22"/>
          </svg>
          <span>Podcast Episode</span>
          <div class="sound-wave paused" id="podcast-sound-wave" style="margin-left: 6px;">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
          </div>
        </div>
        <div class="podcast-credit">
          Original video by <a href="${article.podcastCredit.youtubeUrl}" target="_blank" rel="noopener">${article.podcastCredit.channel}</a>
        </div>
      </div>
      
      <div class="player-body">
        <button class="player-play-btn" id="podcast-play-btn" aria-label="Play podcast">
          <svg class="play-svg" id="play-svg" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="5 3 19 12 5 21 5 3"/>
          </svg>
          <svg class="pause-svg" id="pause-svg" viewBox="0 0 24 24" fill="currentColor" style="display: none;">
            <rect x="6" y="4" width="4" height="16"/>
            <rect x="14" y="4" width="4" height="16"/>
          </svg>
        </button>
        
        <div class="player-details">
          <div class="player-title">${article.podcastCredit.episode}</div>
          <div class="player-meta">Hosted by <strong>${article.podcastCredit.host}</strong> • Featuring <strong>${article.podcastCredit.guest}</strong></div>
          
          <div class="player-controls-row">
            <span class="player-time" id="podcast-current-time">0:00</span>
            <div class="player-progress-container" id="podcast-progress-container">
              <div class="player-progress-bar" id="podcast-progress-bar"></div>
              <div class="player-progress-thumb" id="podcast-progress-thumb"></div>
            </div>
            <span class="player-time" id="podcast-duration">0:00</span>
          </div>
        </div>
      </div>
      
      <div class="player-footer">
        <div class="player-speed-control">
          <button class="btn-speed" id="podcast-speed-btn">1.0x</button>
        </div>
        
        <div class="player-volume-control">
          <button class="btn-mute" id="podcast-mute-btn" aria-label="Mute volume">
            <svg class="volume-svg" id="volume-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>
            </svg>
            <svg class="mute-svg" id="mute-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: none;">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
              <line x1="23" y1="9" x2="17" y2="15"/>
              <line x1="17" y1="9" x2="23" y2="15"/>
            </svg>
          </button>
          <input type="range" class="volume-slider" id="podcast-volume-slider" min="0" max="1" step="0.05" value="0.8" aria-label="Volume slider">
        </div>
      </div>
    </div>
  `;
}

function initGlobalPlayers() {
  if (!globalAudio) {
    globalAudio = new Audio();
    globalAudio.preload = 'metadata';

    globalAudio.addEventListener('timeupdate', () => {
      updateGlobalPlayers();
      syncInlinePlayerProgress();
    });

    globalAudio.addEventListener('loadedmetadata', () => {
      syncInlinePlayerProgress();
      updateGlobalPlayers();
    });

    globalAudio.addEventListener('durationchange', () => {
      syncInlinePlayerProgress();
      updateGlobalPlayers();
    });

    globalAudio.addEventListener('play', () => {
      updateGlobalPlayers();
      syncInlinePlayerPlayState(true);
      syncSoundWaves(true);
    });

    globalAudio.addEventListener('pause', () => {
      updateGlobalPlayers();
      syncInlinePlayerPlayState(false);
      syncSoundWaves(false);
    });

    globalAudio.addEventListener('ended', () => {
      updateGlobalPlayers();
      syncInlinePlayerPlayState(false);
      syncSoundWaves(false);
    });
  }

  const nav = document.querySelector('.nav');
  if (nav && !document.getElementById('nav-mini-player')) {
    const miniPlayer = document.createElement('div');
    miniPlayer.id = 'nav-mini-player';
    miniPlayer.className = 'nav-mini-player';
    miniPlayer.style.display = 'none';
    miniPlayer.innerHTML = `
      <button class="nav-mini-play-btn" id="nmp-play-btn" aria-label="Play/Pause">
        <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12" id="nmp-play-svg">
          <polygon points="5 3 19 12 5 21 5 3"/>
        </svg>
        <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12" id="nmp-pause-svg" style="display: none;">
          <rect x="6" y="4" width="4" height="16"/>
          <rect x="14" y="4" width="4" height="16"/>
        </svg>
      </button>
      <div class="nav-mini-details" id="nmp-details-navigate" style="cursor: pointer;">
        <div class="nav-mini-title" id="nmp-title">Title</div>
        <div class="sound-wave paused" id="nmp-sound-wave">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>
      </div>
      <div class="nav-mini-progress-container" id="nmp-progress-container">
        <div class="nav-mini-progress-bar" id="nmp-progress-bar"></div>
      </div>
      <button class="nav-mini-close-btn" id="nmp-close-btn" aria-label="Close player">&times;</button>
    `;

    const searchWrapper = document.getElementById('navSearchWrapper');
    if (searchWrapper) {
      nav.insertBefore(miniPlayer, searchWrapper);
    } else {
      nav.appendChild(miniPlayer);
    }

    document.getElementById('nmp-play-btn').addEventListener('click', toggleGlobalPlay);
    document.getElementById('nmp-details-navigate').addEventListener('click', navigateToActivePodcast);
    document.getElementById('nmp-close-btn').addEventListener('click', closeGlobalPlayer);
  }

  if (!document.getElementById('floating-podcast-player')) {
    const floatingPlayer = document.createElement('div');
    floatingPlayer.id = 'floating-podcast-player';
    floatingPlayer.className = 'floating-player-widget';
    floatingPlayer.style.display = 'none';
    floatingPlayer.innerHTML = `
      <div class="floating-player-content">
        <button class="floating-play-btn" id="fp-play-btn" aria-label="Play/Pause">
          <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" id="fp-play-svg">
            <polygon points="5 3 19 12 5 21 5 3"/>
          </svg>
          <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" id="fp-pause-svg" style="display: none;">
            <rect x="6" y="4" width="4" height="16"/>
            <rect x="14" y="4" width="4" height="16"/>
          </svg>
        </button>
        <div class="floating-details" id="fp-details-navigate" style="cursor: pointer;">
          <div class="floating-details-text">
            <div class="floating-title" id="fp-title">Title</div>
            <div class="floating-meta" id="fp-meta">Meta</div>
          </div>
          <div class="sound-wave paused" id="fp-sound-wave">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
          </div>
        </div>
        <button class="floating-close-btn" id="fp-close-btn" aria-label="Close player">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="16" height="16">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      <div class="floating-progress-container" id="fp-progress-container">
        <div class="floating-progress-bar" id="fp-progress-bar"></div>
      </div>
    `;
    document.body.appendChild(floatingPlayer);

    document.getElementById('fp-play-btn').addEventListener('click', toggleGlobalPlay);
    document.getElementById('fp-details-navigate').addEventListener('click', navigateToActivePodcast);
    document.getElementById('fp-close-btn').addEventListener('click', closeGlobalPlayer);
  }
}

function toggleGlobalPlay() {
  if (!globalAudio || !activePodcast) return;

  const absoluteUrl = new URL(activePodcast.audioUrl, window.location.href).href;
  if (globalAudio.src !== absoluteUrl) {
    globalAudio.src = activePodcast.audioUrl;
    globalAudio.load();
  }

  if (globalAudio.paused) {
    globalAudio.play().catch(err => console.warn("Global audio play blocked:", err));
  } else {
    globalAudio.pause();
  }
}

function navigateToActivePodcast() {
  if (activePodcast) {
    navigate('article', activePodcast.categoryId, activePodcast.subcategoryId, activePodcast.id);
  }
}

function closeGlobalPlayer() {
  if (globalAudio) {
    globalAudio.pause();
  }
  const mini = document.getElementById('nav-mini-player');
  if (mini) mini.style.display = 'none';
  const float = document.getElementById('floating-podcast-player');
  if (float) float.style.display = 'none';
  activePodcast = null;
}

function updateGlobalPlayers() {
  if (!globalAudio || !activePodcast) return;

  const titleText = activePodcast.podcastCredit?.episode || activePodcast.title;
  const metaText = activePodcast.podcastCredit
    ? `${activePodcast.podcastCredit.host} • ${activePodcast.podcastCredit.guest}`
    : 'Podcast';

  const mini = document.getElementById('nav-mini-player');
  if (mini) {
    const titleEl = document.getElementById('nmp-title');
    const metaEl = document.getElementById('nmp-meta');
    if (titleEl) titleEl.textContent = titleText;
    if (metaEl) metaEl.textContent = metaText;

    const playSvg = document.getElementById('nmp-play-svg');
    const pauseSvg = document.getElementById('nmp-pause-svg');
    if (globalAudio.paused) {
      if (playSvg) playSvg.style.display = 'block';
      if (pauseSvg) pauseSvg.style.display = 'none';
    } else {
      if (playSvg) playSvg.style.display = 'none';
      if (pauseSvg) pauseSvg.style.display = 'block';
    }

    const pct = globalAudio.duration ? (globalAudio.currentTime / globalAudio.duration) * 100 : 0;
    const bar = document.getElementById('nmp-progress-bar');
    if (bar) bar.style.width = `${pct}%`;
  }

  const float = document.getElementById('floating-podcast-player');
  if (float) {
    const titleEl = document.getElementById('fp-title');
    const metaEl = document.getElementById('fp-meta');
    if (titleEl) titleEl.textContent = titleText;
    if (metaEl) metaEl.textContent = metaText;

    const playSvg = document.getElementById('fp-play-svg');
    const pauseSvg = document.getElementById('fp-pause-svg');
    if (globalAudio.paused) {
      if (playSvg) playSvg.style.display = 'block';
      if (pauseSvg) pauseSvg.style.display = 'none';
    } else {
      if (playSvg) playSvg.style.display = 'none';
      if (pauseSvg) pauseSvg.style.display = 'block';
    }

    const pct = globalAudio.duration ? (globalAudio.currentTime / globalAudio.duration) * 100 : 0;
    const bar = document.getElementById('fp-progress-bar');
    if (bar) bar.style.width = `${pct}%`;
  }
}

function syncPlayersVisibility(state) {
  const mini = document.getElementById('nav-mini-player');
  const float = document.getElementById('floating-podcast-player');

  if (!activePodcast) {
    if (mini) mini.style.display = 'none';
    if (float) float.style.display = 'none';
    return;
  }

  const isCurrentlyOnActivePodcastPage = state.page === 'article' && state.articleId === activePodcast.id;

  if (isCurrentlyOnActivePodcastPage) {
    if (mini) mini.style.display = 'none';
    if (float) float.style.display = 'none';
  } else {
    if (mini) mini.style.display = 'flex';
    if (float) float.style.display = 'flex';
    updateGlobalPlayers();
    if (globalAudio) {
      syncSoundWaves(!globalAudio.paused);
    }
  }
}

function syncInlinePlayerPlayState(isPlaying) {
  const playSvg = document.getElementById('play-svg');
  const pauseSvg = document.getElementById('pause-svg');
  if (playSvg && pauseSvg) {
    if (isPlaying) {
      playSvg.style.display = 'none';
      pauseSvg.style.display = 'block';
    } else {
      playSvg.style.display = 'block';
      pauseSvg.style.display = 'none';
    }
  }
}

function syncSoundWaves(isPlaying) {
  const ids = ['nmp-sound-wave', 'fp-sound-wave', 'podcast-sound-wave'];
  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.classList.toggle('paused', !isPlaying);
    }
  });
}

function syncInlinePlayerProgress() {
  if (!globalAudio || !activePodcast) return;
  const currentTimeLabel = document.getElementById('podcast-current-time');
  const durationLabel = document.getElementById('podcast-duration');
  const progressBar = document.getElementById('podcast-progress-bar');
  const progressThumb = document.getElementById('podcast-progress-thumb');

  if (currentTimeLabel && durationLabel && progressBar && progressThumb) {
    const formatTime = (secs) => {
      if (isNaN(secs) || secs === Infinity) return '0:00';
      const m = Math.floor(secs / 60);
      const s = Math.floor(secs % 60);
      return `${m}:${s < 10 ? '0' : ''}${s}`;
    };

    const isCurrentAudio = globalAudio.src && (globalAudio.src === activePodcast.audioUrl || new URL(globalAudio.src, window.location.href).href === new URL(activePodcast.audioUrl, window.location.href).href);

    if (isCurrentAudio) {
      currentTimeLabel.textContent = formatTime(globalAudio.currentTime);
      durationLabel.textContent = formatTime(globalAudio.duration);

      if (globalAudio.duration) {
        const pct = (globalAudio.currentTime / globalAudio.duration) * 100;
        progressBar.style.width = `${pct}%`;
        progressThumb.style.left = `${pct}%`;
      } else {
        progressBar.style.width = '0%';
        progressThumb.style.left = '0%';
      }
    } else {
      currentTimeLabel.textContent = '0:00';
      durationLabel.textContent = '0:00';
      progressBar.style.width = '0%';
      progressThumb.style.left = '0%';
    }
  }
}

function initAudioPlayer(articleId) {
  const card = document.querySelector('.podcast-player-card');
  if (!card) return;

  const playBtn = document.getElementById('podcast-play-btn');
  const playSvg = document.getElementById('play-svg');
  const pauseSvg = document.getElementById('pause-svg');
  const currentTimeLabel = document.getElementById('podcast-current-time');
  const durationLabel = document.getElementById('podcast-duration');
  const progressContainer = document.getElementById('podcast-progress-container');
  const progressBar = document.getElementById('podcast-progress-bar');
  const progressThumb = document.getElementById('podcast-progress-thumb');
  const speedBtn = document.getElementById('podcast-speed-btn');
  const muteBtn = document.getElementById('podcast-mute-btn');
  const volumeSlider = document.getElementById('podcast-volume-slider');
  const volumeSvg = document.getElementById('volume-svg');
  const muteSvg = document.getElementById('mute-svg');

  if (!playBtn) return;

  const article = ARTICLES.find(a => a.id === articleId);
  if (!article) return;

  if (!activePodcast || activePodcast.id !== articleId) {
    if (globalAudio && !globalAudio.paused) {
      globalAudio.pause();
    }
    activePodcast = article;
  }

  const isCurrentAudio = globalAudio.src && (globalAudio.src === article.audioUrl || new URL(globalAudio.src, window.location.href).href === new URL(article.audioUrl, window.location.href).href);

  if (isCurrentAudio && !globalAudio.paused) {
    playSvg.style.display = 'none';
    pauseSvg.style.display = 'block';
    syncSoundWaves(true);
  } else {
    playSvg.style.display = 'block';
    pauseSvg.style.display = 'none';
    syncSoundWaves(false);
  }

  syncInlinePlayerProgress();

  speedBtn.textContent = `${globalAudio.playbackRate}x`;
  volumeSlider.value = globalAudio.volume;

  const updateVolumeIcon = (vol) => {
    if (vol === 0 || globalAudio.muted) {
      volumeSvg.style.display = 'none';
      muteSvg.style.display = 'block';
    } else {
      volumeSvg.style.display = 'block';
      muteSvg.style.display = 'none';
    }
  };
  updateVolumeIcon(globalAudio.volume);

  const togglePlay = () => {
    const absoluteUrl = new URL(article.audioUrl, window.location.href).href;
    if (globalAudio.src !== absoluteUrl) {
      globalAudio.src = article.audioUrl;
      globalAudio.load();
    }
    if (globalAudio.paused) {
      globalAudio.play().then(() => {
        playSvg.style.display = 'none';
        pauseSvg.style.display = 'block';
      }).catch(err => console.warn("Audio play blocked:", err));
    } else {
      globalAudio.pause();
      playSvg.style.display = 'block';
      pauseSvg.style.display = 'none';
    }
  };

  playBtn.addEventListener('click', togglePlay);

  const seek = (e) => {
    if (globalAudio.duration) {
      const rect = progressContainer.getBoundingClientRect();
      const posPct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      globalAudio.currentTime = posPct * globalAudio.duration;
      syncInlinePlayerProgress();
    }
  };

  progressContainer.addEventListener('click', seek);

  let isDraggingProgress = false;
  progressContainer.addEventListener('mousedown', (e) => {
    isDraggingProgress = true;
    seek(e);
  });

  const onMouseMove = (e) => {
    if (isDraggingProgress) {
      seek(e);
    }
  };

  const onMouseUp = () => {
    isDraggingProgress = false;
  };

  window.addEventListener('mousemove', onMouseMove);
  window.addEventListener('mouseup', onMouseUp);

  const speeds = [1, 1.25, 1.5, 2];
  let currentSpeedIdx = speeds.indexOf(globalAudio.playbackRate);
  if (currentSpeedIdx === -1) currentSpeedIdx = 0;

  speedBtn.addEventListener('click', () => {
    currentSpeedIdx = (currentSpeedIdx + 1) % speeds.length;
    const nextSpeed = speeds[currentSpeedIdx];
    globalAudio.playbackRate = nextSpeed;
    speedBtn.textContent = `${nextSpeed}x`;
  });

  let lastVolume = globalAudio.volume || 0.8;
  volumeSlider.addEventListener('input', (e) => {
    const vol = parseFloat(e.target.value);
    globalAudio.volume = vol;
    globalAudio.muted = false;
    lastVolume = vol;
    updateVolumeIcon(vol);
  });

  muteBtn.addEventListener('click', () => {
    if (globalAudio.muted || globalAudio.volume === 0) {
      globalAudio.muted = false;
      globalAudio.volume = lastVolume || 0.8;
      volumeSlider.value = globalAudio.volume;
      updateVolumeIcon(globalAudio.volume);
    } else {
      lastVolume = globalAudio.volume;
      globalAudio.muted = true;
      globalAudio.volume = 0;
      volumeSlider.value = 0;
      updateVolumeIcon(0);
    }
  });

  const observer = new MutationObserver((mutations, obs) => {
    if (!document.body.contains(card)) {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      obs.disconnect();
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
}

// ── INIT ─────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', async () => {
  await loadArticles();
  initNav();
  initSearch();
  initGlobalPlayers();

  const navLogo = document.getElementById('navLogo');
  if (navLogo) {
    navLogo.addEventListener('click', () => navigate('home'));
  }
  const btnToolsNav = document.getElementById('btnToolsNav');
  if (btnToolsNav) {
    btnToolsNav.addEventListener('click', (e) => {
      e.preventDefault();
      navigate('tools');
    });
  }

  const btnDashboardNav = document.getElementById('btnDashboardNav');
  if (btnDashboardNav) {
    btnDashboardNav.addEventListener('click', (e) => {
      e.preventDefault();
      navigate('dashboard');
    });
    updateNavAuthButton();
  }

  // Restore state from URL on first load
  const initialState = history.state || parseUrl();
  // Replace current history entry so back doesn't bounce out of site
  try {
    history.replaceState(initialState, '', buildUrl(
      initialState.page, initialState.catId, initialState.subId, initialState.articleId, initialState.query
    ));
  } catch (e) {
    console.warn('Initial history replaceState blocked (e.g. file:// protocol):', e);
  }

  renderPage(initialState);
  updateLiveVisitors();
});

// ── INTERACTIVE DESIGNER UTILITIES ───────────────────────────

function updateHeaderActiveState(page) {
  const btnToolsNav = document.getElementById('btnToolsNav');
  if (btnToolsNav) {
    btnToolsNav.classList.toggle('active', page === 'tools');
  }

  const btnDashboardNav = document.getElementById('btnDashboardNav');
  if (btnDashboardNav) {
    btnDashboardNav.classList.toggle('active', page === 'dashboard');
  }

  const btnJobsNav = document.getElementById('btnJobsNav');
  if (btnJobsNav) {
    btnJobsNav.classList.toggle('active', page === 'jobs' || page === 'post-job');
  }

  // Sync mobile bottom navbar
  const bnHome = document.getElementById('bnHome');
  const bnTools = document.getElementById('bnTools');
  const bnDashboard = document.getElementById('bnDashboard');
  const bnJobs = document.getElementById('bnJobs');
  if (bnHome) bnHome.classList.toggle('active', page === 'home' || page === 'category' || page === 'subcategory' || page === 'article' || page === 'search');
  if (bnTools) bnTools.classList.toggle('active', page === 'tools');
  if (bnDashboard) bnDashboard.classList.toggle('active', page === 'dashboard');
  if (bnJobs) bnJobs.classList.toggle('active', page === 'jobs' || page === 'post-job');
}

function handleBottomNavDashboard() {
  navigate('dashboard');
}

const WORKBENCH_TOOLS = [
  {
    id: "tints-shades",
    title: "Tints & Shades",
    description: "Create color variations",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 2a10 10 0 0 0-10 10h20A10 10 0 0 0 12 2z" fill="currentColor"></path>
          </svg>`
  },
  {
    id: "contrast-checker",
    title: "Contrast Checker",
    description: "Verify accessibility (A11y)",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 2a10 10 0 0 0 0 20 10 10 0 0 0 0-20z"></path>
            <path d="M12 6a6 6 0 0 0 0 12 6 6 0 0 0 0-12z" fill="currentColor"></path>
          </svg>`
  },
  {
    id: "bg-remover",
    title: "Background Remover",
    description: "AI-powered, runs in browser",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2"></rect>
            <path d="M3 9h18M9 21V9"></path>
          </svg>`
  },
  {
    id: "img-compressor",
    title: "Image Compressor",
    description: "Reduce file size instantly",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="8 17 12 21 16 17"></polyline>
            <line x1="12" y1="21" x2="12" y2="7"></line>
            <path d="M20 7H4"></path>
            <path d="M17 4H7"></path>
          </svg>`
  },
  {
    id: "image-format-converter",
    title: "Image Format Converter",
    description: "Convert JPG, PNG and WebP",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2"></rect>
            <path d="M8 11h8M8 15h5"></path>
            <path d="M16 7l2 2-2 2"></path>
          </svg>`
  },
  {
    id: "palette-extractor",
    title: "Color Palette Extractor",
    description: "Pull dominant image colors",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle>
            <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle>
            <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle>
            <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle>
            <path d="M12 22a10 10 0 1 1 10-10c0 3-2 4-4 4h-1.5a2.5 2.5 0 0 0 0 5H12z"></path>
          </svg>`
  },
  {
    id: "qr-generator",
    title: "QR Code Generator",
    description: "Create branded QR codes",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="3" width="6" height="6"></rect>
            <rect x="15" y="3" width="6" height="6"></rect>
            <rect x="3" y="15" width="6" height="6"></rect>
            <path d="M15 15h2v2h-2zM19 15h2v6h-6v-2"></path>
          </svg>`
  },
  {
    id: "font-pairing",
    title: "Google Font Pairing",
    description: "Random heading/body pairs",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 7V4h16v3"></path>
            <path d="M9 20h6"></path>
            <path d="M12 4v16"></path>
          </svg>`
  },
  {
    id: "favicon-generator",
    title: "Favicon Package Generator",
    description: "Export icons as a ZIP",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 3l2.7 5.5 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.8 1-6.1-4.4-4.3 6.1-.9L12 3z"></path>
          </svg>`
  },
  {
    id: "speed-test",
    title: "Internet Speed Test",
    description: "Measure download and upload speed",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20.38 3.62A10 10 0 1 0 22 12h-2a8 8 0 1 1-1.28-4.38L16.3 9.8a4 4 0 1 0-1.8 1.8l-2.08 2.08"></path>
            <polyline points="16 3 21 3 21 8"></polyline>
            <line x1="21" y1="3" x2="14" y2="10"></line>
          </svg>`
  }
];

function renderToolsOverview() {
  const toolCards = WORKBENCH_TOOLS.map(t => `
    <a href="${getToolUrl(t.id)}" class="tools-overview-card" onclick="navigate('tools', null, null, null, '${t.id}'); return false;">
      <div class="tools-overview-icon">${t.icon}</div>
      <div class="tools-overview-info">
        <div class="tools-overview-title">${t.title}</div>
        <div class="tools-overview-desc">${t.description}</div>
      </div>
      <div class="tools-overview-arrow">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"/>
          <polyline points="12 5 19 12 12 19"/>
        </svg>
      </div>
    </a>
  `).join('');

  return `
    <div class="page-wide">
      <div class="header-navigation-row">
        <button class="btn-back" onclick="navigate('home')">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          <span>Home</span>
        </button>
        <div class="breadcrumb">
          <span onclick="navigate('home')" style="cursor: pointer;">Home</span>
          <span class="breadcrumb-separator">/</span>
          <span class="breadcrumb-current">Tools</span>
        </div>
      </div>

      <div class="tools-overview-header">
        <div class="tools-overview-badge">Designer Utilities</div>
        <h1 class="tools-overview-title-main">Interactive Tools</h1>
        <p class="tools-overview-subtitle">Browser-based utilities built for UI/UX designers. No installs, no sign-in — just pick a tool and start creating.</p>
      </div>

      <div class="tools-overview-grid">
        ${toolCards}
      </div>
    </div>
  `;
}

function renderToolsPage(activeTool) {
  // Show overview grid when no specific tool is selected
  if (!activeTool) {
    return renderToolsOverview();
  }

  const selectedTool = WORKBENCH_TOOLS.find(t => t.id === activeTool) || WORKBENCH_TOOLS[0];

  let toolWorkbenchHtml = '';
  if (selectedTool.id === 'tints-shades') {
    toolWorkbenchHtml = renderTintsShadesTool();
  } else if (selectedTool.id === 'contrast-checker') {
    toolWorkbenchHtml = renderContrastCheckerTool();
  } else if (selectedTool.id === 'bg-remover') {
    toolWorkbenchHtml = renderBgRemoverTool();
  } else if (selectedTool.id === 'img-compressor') {
    toolWorkbenchHtml = renderImgCompressorTool();
  } else if (selectedTool.id === 'image-format-converter') {
    toolWorkbenchHtml = renderImageFormatConverterTool();
  } else if (selectedTool.id === 'palette-extractor') {
    toolWorkbenchHtml = renderPaletteExtractorTool();
  } else if (selectedTool.id === 'qr-generator') {
    toolWorkbenchHtml = renderQrGeneratorTool();
  } else if (selectedTool.id === 'font-pairing') {
    toolWorkbenchHtml = renderFontPairingTool();
  } else if (selectedTool.id === 'favicon-generator') {
    toolWorkbenchHtml = renderFaviconGeneratorTool();
  } else if (selectedTool.id === 'speed-test') {
    toolWorkbenchHtml = renderSpeedTestTool();
  }

  return `
    <div class="page-wide tools-focus-page">
      <div class="header-navigation-row">
        <button class="btn-back" onclick="navigate('tools')">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          <span>Tools</span>
        </button>
        <div class="breadcrumb">
          <span onclick="navigate('home')" style="cursor: pointer;">Home</span>
          <span class="breadcrumb-separator">/</span>
          <span onclick="navigate('tools')" style="cursor: pointer;">Tools</span>
          <span class="breadcrumb-separator">/</span>
          <span class="breadcrumb-current">${selectedTool.title}</span>
        </div>
      </div>

      <main class="tools-workbench tools-workbench-focused">
        <div class="tools-workbench-inner">
          ${toolWorkbenchHtml}
        </div>
      </main>
    </div>
  `;
}

function renderAboutPanelContent(toolId) {
  if (toolId === 'tints-shades') {
    return `
      <div class="sidebar-widget">
        <h4 class="info-panel-title">About Tints & Shades</h4>
        <p class="info-panel-desc" style="margin-bottom: 24px;">
          Tints and shades are monochromatic variations of a base color. Tints are created by mixing the color with white, while shades are mixed with black. Use them to build cohesive color scales for borders, backgrounds, and interactive states.
        </p>

        <div class="info-panel-tip-card">
          <svg class="info-panel-tip-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.5V19a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.5c0-.98-.4-1.9-1.077-2.506l-.547-.547z"></path>
          </svg>
          <div>
            <strong>Pro Tip:</strong> Click any color box in the grid to copy its hex value instantly to clipboard.
          </div>
        </div>
      </div>
    `;
  } else if (toolId === 'contrast-checker') {
    return `
      <div class="sidebar-widget">
        <h4 class="info-panel-title">About Contrast Checker</h4>
        <p class="info-panel-desc" style="margin-bottom: 24px;">
          Relative contrast measures readability between text and its background color. Testing your color palette ensures compliance with WCAG 2.1 accessibility standards (AA and AAA) for all users.
        </p>

        <div class="info-panel-tip-card">
          <svg class="info-panel-tip-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.5V19a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.5c0-.98-.4-1.9-1.077-2.506l-.547-.547z"></path>
          </svg>
          <div>
            <strong>Pro Tip:</strong> Click the swap button in the center to quickly flip foreground and background color combinations.
          </div>
        </div>
      </div>
    `;
  } else if (toolId === 'bg-remover') {
    return `
      <div class="sidebar-widget">
        <h4 class="info-panel-title">About Background Remover</h4>
        <p class="info-panel-desc" style="margin-bottom: 24px;">
          This tool runs a neural network model directly inside your browser using WebAssembly. Your images never leave your device, making it completely private, free, and unlimited.
        </p>

        <div class="info-panel-tip-card">
          <svg class="info-panel-tip-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.5V19a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.5c0-.98-.4-1.9-1.077-2.506l-.547-.547z"></path>
          </svg>
          <div>
            <strong>Pro Tip:</strong> The AI model (~5MB) is downloaded once on first use and cached by your browser for instant future sessions.
          </div>
        </div>
      </div>
    `;
  } else if (toolId === 'img-compressor') {
    return `
      <div class="sidebar-widget">
        <h4 class="info-panel-title">About Image Compressor</h4>
        <p class="info-panel-desc" style="margin-bottom: 24px;">
          Compress JPEG, PNG, and WEBP images right inside your browser. The library automatically handles image rotation metadata and lets you target a specific maximum file size.
        </p>

        <div class="info-panel-tip-card">
          <svg class="info-panel-tip-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.5V19a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.5c0-.98-.4-1.9-1.077-2.506l-.547-.547z"></path>
          </svg>
          <div>
            <strong>Pro Tip:</strong> For web use, try targeting under 200KB. For social media, under 500KB is usually ideal.
          </div>
        </div>
      </div>
    `;
  }
  return '';
}

function renderTintsShadesTool() {
  const defaultColor = '#FF6F2C';
  const presets = ['#FF6F2C', '#6366F1', '#10B981', '#3B82F6', '#EC4899', '#8B5CF6', '#F59E0B', '#64748B'];

  const presetsHtml = presets.map(p => `
    <button class="preset-dot" data-color="${p}" style="background-color: ${p}; width: 28px; height: 28px; border-radius: 50%; border: 2px solid var(--border); transition: transform 0.15s, border-color 0.15s; cursor: pointer; padding: 0;" title="${p}"></button>
  `).join('');

  return `
    <div class="tints-shades-tool-content" style="text-align: left;">
      <div style="margin-bottom: 32px;">
        <h2 class="tool-title" style="font-size: 26px; font-weight: 800; margin-bottom: 8px; color: var(--text); letter-spacing: -0.5px;">Tints & Shades Generator</h2>
        <p class="tool-subtitle" style="font-size: 14.5px; color: var(--text-2); line-height: 1.5; max-width: 580px;">Create lighter (tints) and darker (shades) variations of any base color. Essential for building design systems.</p>
      </div>

      <div class="modern-color-picker-container" style="display: flex; flex-direction: column; gap: 16px; margin-bottom: 40px; background: var(--bg-2); border: 1px solid var(--border); padding: 24px; border-radius: 16px; max-width: 440px;">
        <div style="display: flex; align-items: center; justify-content: space-between;">
          <label style="font-size: 13.5px; font-weight: 700; color: var(--text-2);">Select Color</label>
          <div style="display: flex; align-items: center; gap: 12px;">
            <!-- Custom circular picker wrapper -->
            <div class="custom-color-picker-trigger" id="colorPickerTrigger" style="background-color: ${defaultColor}; border: 3px solid var(--border); width: 38px; height: 38px; border-radius: 50%; cursor: pointer; position: relative; transition: transform 0.15s;">
              <input type="color" id="baseColorPicker" value="${defaultColor}" style="position: absolute; opacity: 0; inset: 0; width: 100%; height: 100%; cursor: pointer;">
            </div>
            <input type="text" id="baseColorInput" value="${defaultColor}" placeholder="#FFFFFF" maxlength="7" style="background: var(--bg-3); border: 1px solid var(--border); border-radius: 8px; color: var(--text); padding: 8px 12px; font-family: monospace; font-size: 14px; font-weight: 700; width: 110px; text-transform: uppercase; text-align: center;">
          </div>
        </div>

        <div style="border-top: 1px solid var(--border); padding-top: 16px;">
          <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-3); margin-bottom: 10px;">Aesthetic Presets</div>
          <div class="presets-row" style="display: flex; gap: 8px; flex-wrap: wrap;">
            ${presetsHtml}
          </div>
        </div>
      </div>

      <div class="palette-container" style="display: flex; flex-direction: column; gap: 36px;">
        <!-- Tints Section -->
        <div class="palette-group">
          <h3 class="palette-group-title" style="font-size: 14.5px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 16px; color: var(--text-2);">Tints (Mix with White)</h3>
          <div class="palette-grid" id="tintsGrid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(90px, 1fr)); gap: 10px;"></div>
        </div>

        <!-- Shades Section -->
        <div class="palette-group">
          <h3 class="palette-group-title" style="font-size: 14.5px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 16px; color: var(--text-2);">Shades (Mix with Black)</h3>
          <div class="palette-grid" id="shadesGrid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(90px, 1fr)); gap: 10px;"></div>
        </div>
      </div>
    </div>
  `;
}

function renderSpeedTestTool() {
  return `
    <div class="speed-test-tool-content" style="text-align: left;">
      <div style="margin-bottom: 32px;">
        <h2 class="tool-title" style="font-size: 26px; font-weight: 800; margin-bottom: 8px; color: var(--text); letter-spacing: -0.5px;">Internet Speed Test</h2>
        <p class="tool-subtitle" style="font-size: 14.5px; color: var(--text-2); line-height: 1.5; max-width: 580px;">Measure your connection latency and download speed in real time. Powered by global server infrastructure.</p>
      </div>

      <div class="speed-container" style="display: flex; flex-direction: column; align-items: center; gap: 32px; background: var(--bg-2); border: 1px solid var(--border); padding: 36px; border-radius: 20px; max-width: 540px; margin: 0 auto; box-shadow: 0 8px 30px rgba(0,0,0,0.12);">
        
        <!-- Speedometer Gauge -->
        <div class="speedometer-wrapper" style="position: relative; width: 220px; height: 220px; display: flex; align-items: center; justify-content: center;">
          <svg class="speedometer-svg" viewBox="0 0 200 200" style="width: 100%; height: 100%;">
            <defs>
              <linearGradient id="speed-gauge-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#FF6F2C" />
                <stop offset="100%" stop-color="#8B5CF6" />
              </linearGradient>
            </defs>
            <!-- Background track -->
            <circle cx="100" cy="100" r="85" fill="none" stroke="var(--border)" stroke-width="12" stroke-dasharray="400" stroke-dashoffset="0" stroke-linecap="round" transform="rotate(135 100 100)" style="opacity: 0.3;"></circle>
            <!-- Progress track (270 degrees = 3/4 of 2*PI*85 = 400.5) -->
            <circle id="speedGaugeProgress" cx="100" cy="100" r="85" fill="none" stroke="url(#speed-gauge-gradient)" stroke-width="12" stroke-dasharray="400" stroke-dashoffset="400" stroke-linecap="round" transform="rotate(135 100 100)" style="transition: stroke-dashoffset 0.1s ease;"></circle>
          </svg>
          <!-- Text inside gauge -->
          <div class="speedometer-display" style="position: absolute; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;">
            <div id="speedLiveVal" style="font-family: var(--font-display); font-size: 42px; font-weight: 800; color: var(--text); line-height: 1; letter-spacing: -1px;">0.0</div>
            <div id="speedLiveUnit" style="font-size: 13px; font-weight: 700; color: var(--text-3); text-transform: uppercase; margin-top: 4px; letter-spacing: 0.5px;">Mbps</div>
          </div>
        </div>

        <!-- Real-time sine wave visualizer -->
        <div class="speed-wave-wrapper" style="width: 100%; height: 40px; position: relative;">
          <canvas id="speedWaveCanvas" width="468" height="40" style="width: 100%; height: 100%; opacity: 0.8;"></canvas>
        </div>

        <!-- Stats Row -->
        <div class="speed-stats-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 12px; width: 100%;">
          
          <!-- Ping Card -->
          <div class="speed-stat-card" id="speedCardPing" style="background: var(--bg-3); border: 1px solid var(--border); padding: 16px 12px; border-radius: 14px; text-align: center; position: relative; transition: all var(--transition);">
            <div class="speed-stat-status-dot" id="dotPing" style="position: absolute; top: 12px; right: 12px; width: 8px; height: 8px; border-radius: 50%; background: transparent;"></div>
            <div style="font-size: 11px; font-weight: 700; color: var(--text-3); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px;">Ping</div>
            <div style="display: flex; align-items: baseline; justify-content: center; gap: 2px;">
              <span id="speedValPing" style="font-size: 20px; font-weight: 800; color: var(--text);">0</span>
              <span style="font-size: 11px; color: var(--text-3); font-weight: 600;">ms</span>
            </div>
          </div>

          <!-- Download Card -->
          <div class="speed-stat-card" id="speedCardDownload" style="background: var(--bg-3); border: 1px solid var(--border); padding: 16px 12px; border-radius: 14px; text-align: center; position: relative; transition: all var(--transition);">
            <div class="speed-stat-status-dot" id="dotDownload" style="position: absolute; top: 12px; right: 12px; width: 8px; height: 8px; border-radius: 50%; background: transparent;"></div>
            <div style="font-size: 11px; font-weight: 700; color: var(--text-3); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px;">Download</div>
            <div style="display: flex; align-items: baseline; justify-content: center; gap: 2px;">
              <span id="speedValDownload" style="font-size: 20px; font-weight: 800; color: var(--text);">0.0</span>
              <span style="font-size: 11px; color: var(--text-3); font-weight: 600;">Mbps</span>
            </div>
          </div>

          <!-- Upload Card -->
          <div class="speed-stat-card" id="speedCardUpload" style="display: none !important;">
            <div class="speed-stat-status-dot" id="dotUpload" style="position: absolute; top: 12px; right: 12px; width: 8px; height: 8px; border-radius: 50%; background: transparent;"></div>
            <div style="font-size: 11px; font-weight: 700; color: var(--text-3); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px;">Upload</div>
            <div style="display: flex; align-items: baseline; justify-content: center; gap: 2px;">
              <span id="speedValUpload" style="font-size: 20px; font-weight: 800; color: var(--text);">0.0</span>
              <span style="font-size: 11px; color: var(--text-3); font-weight: 600;">Mbps</span>
            </div>
          </div>
          
        </div>

        <!-- Start/Action Button -->
        <button class="btn-primary speed-test-btn" id="startSpeedTestBtn" style="width: 100%; padding: 14px; font-size: 15px; font-weight: 700; border-radius: 12px; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; border: none; background: var(--accent); color: #fff; box-shadow: 0 4px 12px rgba(255, 111, 44, 0.2); transition: all 0.2s;">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width: 16px; height: 16px;">
            <polygon points="5 3 19 12 5 21 5 3" fill="currentColor"></polygon>
          </svg>
          <span>Start Test</span>
        </button>

      </div>
    </div>
  `;
}

function renderToolsSkeleton() {
  return `
    <div class="layout-container tools-page-layout">
      <!-- Left Sidebar Skeleton -->
      <aside class="layout-left tools-sidebar">
        <div class="sidebar-widget">
          <div class="shimmer" style="width: 120px; height: 14px; margin-bottom: 16px; border-radius: 4px;"></div>
          <div class="tools-sidebar-menu">
            <div class="shimmer" style="width: 100%; height: 58px; border-radius: 12px; margin-bottom: 8px;"></div>
          </div>
        </div>
      </aside>

      <!-- Center Workbench Skeleton -->
      <main class="layout-center tools-workbench">
        <div class="header-navigation-row">
          <div class="shimmer" style="width: 70px; height: 32px; border-radius: 99px;"></div>
          <div class="shimmer" style="width: 140px; height: 16px; border-radius: 4px;"></div>
        </div>
        
        <div class="tints-shades-tool-content">
          <div style="margin-bottom: 32px;">
            <div class="shimmer" style="width: 250px; height: 28px; border-radius: 6px; margin-bottom: 8px;"></div>
            <div class="shimmer" style="width: 380px; height: 16px; border-radius: 4px;"></div>
          </div>
          
          <div class="modern-color-picker-container" style="margin-top: 24px;">
            <div class="shimmer" style="width: 120px; height: 14px; margin-bottom: 8px; border-radius: 4px;"></div>
            <div class="shimmer" style="width: 180px; height: 42px; border-radius: 8px;"></div>
          </div>
        </div>
      </main>

      <!-- Right Column Skeleton -->
      <aside class="layout-right tools-info-panel">
        <div class="sidebar-widget">
          <div class="shimmer" style="width: 110px; height: 14px; margin-bottom: 16px; border-radius: 4px;"></div>
          <div class="shimmer" style="width: 90%; height: 14px; margin-bottom: 8px; border-radius: 4px;"></div>
          <div class="shimmer" style="width: 95%; height: 14px; margin-bottom: 8px; border-radius: 4px;"></div>
        </div>
      </aside>
    </div>
  `;
}

function hexToRgb(hex) {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  const fullHex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(fullHex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
}

function mixColor(color, mixColor, factor) {
  const r = Math.round(color.r * (1 - factor) + mixColor.r * factor);
  const g = Math.round(color.g * (1 - factor) + mixColor.g * factor);
  const b = Math.round(color.b * (1 - factor) + mixColor.b * factor);
  return { r, g, b };
}

function generateTintsAndShades(hex) {
  const rgb = hexToRgb(hex);
  if (!rgb) return null;

  const white = { r: 255, g: 255, b: 255 };
  const black = { r: 0, g: 0, b: 0 };

  const tints = [];
  const shades = [];

  for (let i = 0; i <= 9; i++) {
    const factor = i / 10;
    const tintRgb = mixColor(rgb, white, factor);
    const shadeRgb = mixColor(rgb, black, factor);

    tints.push({
      percent: Math.round(factor * 100),
      hex: rgbToHex(tintRgb.r, tintRgb.g, tintRgb.b)
    });
    shades.push({
      percent: Math.round(factor * 100),
      hex: rgbToHex(shadeRgb.r, shadeRgb.g, shadeRgb.b)
    });
  }

  return { tints, shades };
}

function getContrastColor(hex) {
  const rgb = hexToRgb(hex);
  if (!rgb) return '#FFFFFF';
  const y = 0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b;
  return y > 140 ? '#000000' : '#FFFFFF';
}

function renderContrastCheckerTool() {
  const defaultFg = '#1A1A1A';
  const defaultBg = '#FFFFFF';

  return `
    <div class="contrast-checker-tool-content" style="text-align: left;">
      <div style="margin-bottom: 32px;">
        <h2 class="tool-title" style="font-size: 26px; font-weight: 800; margin-bottom: 8px; color: var(--text); letter-spacing: -0.5px;">Color Contrast Checker</h2>
        <p class="tool-subtitle" style="font-size: 14.5px; color: var(--text-2); line-height: 1.5; max-width: 580px;">Check the contrast ratio between text (foreground) and background colors to ensure compliance with WCAG 2.1 accessibility standards.</p>
      </div>

      <div class="contrast-inputs-row" style="display: flex; gap: 20px; align-items: center; flex-wrap: wrap; margin-bottom: 36px;">
        
        <!-- Text Color (Foreground) -->
        <div class="modern-color-picker-container" style="flex: 1; min-width: 220px; display: flex; flex-direction: column; gap: 12px; background: var(--bg-2); border: 1px solid var(--border); padding: 20px; border-radius: 16px;">
          <label style="font-size: 13.5px; font-weight: 700; color: var(--text-2);">Text Color (Foreground)</label>
          <div style="display: flex; align-items: center; gap: 12px;">
            <div class="custom-color-picker-trigger" id="fgColorPickerTrigger" style="background-color: ${defaultFg}; border: 3px solid var(--border); width: 38px; height: 38px; border-radius: 50%; cursor: pointer; position: relative; transition: transform 0.15s;">
              <input type="color" id="fgColorPicker" value="${defaultFg}" style="position: absolute; opacity: 0; inset: 0; width: 100%; height: 100%; cursor: pointer;">
            </div>
            <input type="text" id="fgColorInput" value="${defaultFg}" placeholder="#1A1A1A" maxlength="7" style="background: var(--bg-3); border: 1px solid var(--border); border-radius: 8px; color: var(--text); padding: 8px 12px; font-family: monospace; font-size: 14px; font-weight: 700; width: 110px; text-transform: uppercase; text-align: center;">
          </div>
        </div>

        <!-- Swap Button -->
        <button id="btnSwapColors" style="background: var(--bg-2); border: 1px solid var(--border); width: 44px; height: 44px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; color: var(--text-2); transition: all 0.15s; flex-shrink: 0;" title="Swap Colors">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width: 18px; height: 18px;">
            <polyline points="17 1 21 5 17 9"></polyline>
            <line x1="3" y1="5" x2="21" y2="5"></line>
            <polyline points="7 23 3 19 7 15"></polyline>
            <line x1="21" y1="19" x2="3" y2="19"></line>
          </svg>
        </button>

        <!-- Background Color -->
        <div class="modern-color-picker-container" style="flex: 1; min-width: 220px; display: flex; flex-direction: column; gap: 12px; background: var(--bg-2); border: 1px solid var(--border); padding: 20px; border-radius: 16px;">
          <label style="font-size: 13.5px; font-weight: 700; color: var(--text-2);">Background Color</label>
          <div style="display: flex; align-items: center; gap: 12px;">
            <div class="custom-color-picker-trigger" id="bgColorPickerTrigger" style="background-color: ${defaultBg}; border: 3px solid var(--border); width: 38px; height: 38px; border-radius: 50%; cursor: pointer; position: relative; transition: transform 0.15s;">
              <input type="color" id="bgColorPicker" value="${defaultBg}" style="position: absolute; opacity: 0; inset: 0; width: 100%; height: 100%; cursor: pointer;">
            </div>
            <input type="text" id="bgColorInput" value="${defaultBg}" placeholder="#FFFFFF" maxlength="7" style="background: var(--bg-3); border: 1px solid var(--border); border-radius: 8px; color: var(--text); padding: 8px 12px; font-family: monospace; font-size: 14px; font-weight: 700; width: 110px; text-transform: uppercase; text-align: center;">
          </div>
        </div>

      </div>

      <!-- Results & Preview Grid -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px; margin-bottom: 40px;">
        
        <!-- Score & Rules -->
        <div style="background: var(--bg-2); border: 1px solid var(--border); border-radius: 16px; padding: 28px; display: flex; flex-direction: column; gap: 24px;">
          <div style="display: flex; align-items: center; gap: 20px;">
            <div style="background: var(--bg-3); border-radius: 50%; width: 90px; height: 90px; display: flex; flex-direction: column; align-items: center; justify-content: center; border: 4px solid var(--border); transition: border-color 0.15s; flex-shrink: 0;" id="contrastRatioCircle">
              <span id="contrastRatioVal" style="font-size: 22px; font-weight: 800; color: var(--text);">4.5</span>
              <span style="font-size: 9px; color: var(--text-3); font-weight: 700; text-transform: uppercase; margin-top: -2px; letter-spacing: 0.05em;">ratio</span>
            </div>
            <div>
              <div id="contrastRatingText" style="font-size: 18px; font-weight: 700; color: var(--text); margin-bottom: 4px;">Very Good</div>
              <div style="font-size: 13px; color: var(--text-2); line-height: 1.4;" id="contrastDescription">Passes normal AA standard accessibility.</div>
            </div>
          </div>

          <div style="display: flex; flex-direction: column; gap: 12px; border-top: 1px solid var(--border); padding-top: 20px;">
            <!-- AA Normal -->
            <div style="display: flex; align-items: center; justify-content: space-between;">
              <span style="font-size: 13.5px; font-weight: 600; color: var(--text-2);">AA Normal Text (4.5:1)</span>
              <span id="badgeAANormal" class="contrast-badge">Pass</span>
            </div>
            <!-- AA Large -->
            <div style="display: flex; align-items: center; justify-content: space-between;">
              <span style="font-size: 13.5px; font-weight: 600; color: var(--text-2);">AA Large Text (3.0:1)</span>
              <span id="badgeAALarge" class="contrast-badge">Pass</span>
            </div>
            <!-- AAA Normal -->
            <div style="display: flex; align-items: center; justify-content: space-between;">
              <span style="font-size: 13.5px; font-weight: 600; color: var(--text-2);">AAA Normal Text (7.0:1)</span>
              <span id="badgeAAANormal" class="contrast-badge">Fail</span>
            </div>
            <!-- AAA Large -->
            <div style="display: flex; align-items: center; justify-content: space-between;">
              <span style="font-size: 13.5px; font-weight: 600; color: var(--text-2);">AAA Large Text (4.5:1)</span>
              <span id="badgeAAALarge" class="contrast-badge">Pass</span>
            </div>
          </div>
        </div>

        <!-- Live Preview Panel -->
        <div id="contrastPreviewBox" style="border: 1px solid var(--border); border-radius: 16px; padding: 28px; display: flex; flex-direction: column; gap: 24px; transition: background-color 0.15s; background-color: #FFFFFF; justify-content: center;">
          <div>
            <div style="font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-3); margin-bottom: 8px;">Normal Text Preview</div>
            <p style="font-size: 15px; font-weight: 500; margin: 0; line-height: 1.5; color: #1A1A1A;" id="previewNormalText">The quick brown fox jumps over the lazy dog. Good design is accessible to everyone.</p>
          </div>
          <div style="border-top: 1px solid var(--border); opacity: 0.15;"></div>
          <div>
            <div style="font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-3); margin-bottom: 8px;">Large Text Preview</div>
            <p style="font-size: 24px; font-weight: 800; margin: 0; line-height: 1.3; color: #1A1A1A;" id="previewLargeText">A11y Contrast Checker</p>
          </div>
        </div>

      </div>
    </div>
  `;
}

function getLuminance(r, g, b) {
  const a = [r, g, b].map(v => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

function calculateContrastRatio(fgHex, bgHex) {
  const fgRgb = hexToRgb(fgHex);
  const bgRgb = hexToRgb(bgHex);
  if (!fgRgb || !bgRgb) return 1;

  const fgL = getLuminance(fgRgb.r, fgRgb.g, fgRgb.b);
  const bgL = getLuminance(bgRgb.r, bgRgb.g, bgRgb.b);

  const l1 = Math.max(fgL, bgL);
  const l2 = Math.min(fgL, bgL);

  return (l1 + 0.05) / (l2 + 0.05);
}

function initTintsShadesListeners() {
  const picker = document.getElementById('baseColorPicker');
  const input = document.getElementById('baseColorInput');
  const trigger = document.getElementById('colorPickerTrigger');

  if (!picker || !input) return;

  const updatePalette = (hex) => {
    if (!hex.startsWith('#')) hex = '#' + hex;
    if (!/^#[0-9A-F]{6}$/i.test(hex) && !/^#[0-9A-F]{3}$/i.test(hex)) {
      return;
    }

    if (trigger) {
      trigger.style.backgroundColor = hex;
    }

    const data = generateTintsAndShades(hex);
    if (!data) return;

    const tintsGrid = document.getElementById('tintsGrid');
    const shadesGrid = document.getElementById('shadesGrid');

    if (tintsGrid) {
      tintsGrid.innerHTML = data.tints.map(t => {
        const textColor = getContrastColor(t.hex);
        return `
          <div class="color-block" style="background-color: ${t.hex}; color: ${textColor};" data-hex="${t.hex}">
            <div class="color-block-percent">${t.percent === 0 ? 'Base' : t.percent + '%'}</div>
            <div class="color-block-hex">${t.hex}</div>
          </div>
        `;
      }).join('');
    }

    if (shadesGrid) {
      shadesGrid.innerHTML = data.shades.map(s => {
        const textColor = getContrastColor(s.hex);
        return `
          <div class="color-block" style="background-color: ${s.hex}; color: ${textColor};" data-hex="${s.hex}">
            <div class="color-block-percent">${s.percent === 0 ? 'Base' : s.percent + '%'}</div>
            <div class="color-block-hex">${s.hex}</div>
          </div>
        `;
      }).join('');
    }

    document.querySelectorAll('.color-block').forEach(block => {
      block.addEventListener('click', () => {
        const hexVal = block.dataset.hex;
        navigator.clipboard.writeText(hexVal).then(() => {
          showClipboardToast(`Copied ${hexVal}!`);
        }).catch(err => {
          console.error('Could not copy text: ', err);
        });
      });
    });
  };

  picker.addEventListener('input', (e) => {
    const hex = e.target.value.toUpperCase();
    input.value = hex;
    updatePalette(hex);
  });

  input.addEventListener('input', (e) => {
    let hex = e.target.value;
    if (!hex.startsWith('#') && hex.length > 0) {
      hex = '#' + hex;
    }
    if (/^#[0-9A-F]{6}$/i.test(hex)) {
      picker.value = hex;
    }
    updatePalette(hex);
  });

  document.querySelectorAll('.preset-dot').forEach(dot => {
    dot.addEventListener('click', () => {
      const color = dot.dataset.color;
      picker.value = color;
      input.value = color;
      updatePalette(color);
    });
  });

  updatePalette(picker.value);
}

function initContrastCheckerListeners() {
  const fgPicker = document.getElementById('fgColorPicker');
  const fgInput = document.getElementById('fgColorInput');
  const fgTrigger = document.getElementById('fgColorPickerTrigger');

  const bgPicker = document.getElementById('bgColorPicker');
  const bgInput = document.getElementById('bgColorInput');
  const bgTrigger = document.getElementById('bgColorPickerTrigger');

  const swapBtn = document.getElementById('btnSwapColors');

  if (!fgPicker || !fgInput || !bgPicker || !bgInput) return;

  const updateContrast = () => {
    let fgHex = fgInput.value;
    let bgHex = bgInput.value;

    if (!fgHex.startsWith('#')) fgHex = '#' + fgHex;
    if (!bgHex.startsWith('#')) bgHex = '#' + bgHex;

    if (!/^#[0-9A-F]{6}$/i.test(fgHex) || !/^#[0-9A-F]{6}$/i.test(bgHex)) return;

    if (fgTrigger) fgTrigger.style.backgroundColor = fgHex;
    if (bgTrigger) bgTrigger.style.backgroundColor = bgHex;

    const ratio = calculateContrastRatio(fgHex, bgHex);

    const ratioValEl = document.getElementById('contrastRatioVal');
    if (ratioValEl) ratioValEl.textContent = ratio.toFixed(1);

    const ratioCircle = document.getElementById('contrastRatioCircle');
    let borderColor = 'var(--border)';
    let rating = 'Poor';
    let desc = 'Fails accessibility standards.';

    if (ratio >= 7) {
      borderColor = '#10B981';
      rating = 'Excellent (AAA)';
      desc = 'Passes enhanced Web content guidelines.';
    } else if (ratio >= 4.5) {
      borderColor = '#3B82F6';
      rating = 'Very Good (AA)';
      desc = 'Passes basic Web content guidelines.';
    } else if (ratio >= 3) {
      borderColor = '#F59E0B';
      rating = 'Fair';
      desc = 'Passes AA guidelines only for large text.';
    } else {
      borderColor = '#EF4444';
      rating = 'Poor Contrast';
      desc = 'Hard to read. Fails accessibility guidelines.';
    }

    if (ratioCircle) {
      ratioCircle.style.borderColor = borderColor;
    }

    const ratingTextEl = document.getElementById('contrastRatingText');
    if (ratingTextEl) ratingTextEl.textContent = rating;

    const ratingDescEl = document.getElementById('contrastDescription');
    if (ratingDescEl) ratingDescEl.textContent = desc;

    const updateBadge = (id, condition) => {
      const el = document.getElementById(id);
      if (el) {
        el.textContent = condition ? 'PASS' : 'FAIL';
        el.className = 'contrast-badge ' + (condition ? 'pass' : 'fail');
      }
    };

    updateBadge('badgeAANormal', ratio >= 4.5);
    updateBadge('badgeAALarge', ratio >= 3.0);
    updateBadge('badgeAAANormal', ratio >= 7.0);
    updateBadge('badgeAAALarge', ratio >= 4.5);

    const previewBox = document.getElementById('contrastPreviewBox');
    if (previewBox) {
      previewBox.style.backgroundColor = bgHex;
    }

    const previewNormal = document.getElementById('previewNormalText');
    if (previewNormal) {
      previewNormal.style.color = fgHex;
    }

    const previewLarge = document.getElementById('previewLargeText');
    if (previewLarge) {
      previewLarge.style.color = fgHex;
    }
  };

  const setupColorListeners = (picker, input, trigger) => {
    picker.addEventListener('input', (e) => {
      const hex = e.target.value.toUpperCase();
      input.value = hex;
      updateContrast();
    });

    input.addEventListener('input', (e) => {
      let hex = e.target.value;
      if (!hex.startsWith('#') && hex.length > 0) {
        hex = '#' + hex;
      }
      if (/^#[0-9A-F]{6}$/i.test(hex)) {
        picker.value = hex;
      }
      updateContrast();
    });
  };

  setupColorListeners(fgPicker, fgInput, fgTrigger);
  setupColorListeners(bgPicker, bgInput, bgTrigger);

  if (swapBtn) {
    swapBtn.addEventListener('click', () => {
      const tempVal = fgInput.value;
      fgInput.value = bgInput.value;
      fgPicker.value = bgInput.value;

      bgInput.value = tempVal;
      bgPicker.value = tempVal;

      updateContrast();
    });
  }

  updateContrast();
}

function renderBgRemoverTool() {
  return `
    <div class="bg-remover-tool-content" style="text-align: left;">
      <div style="margin-bottom: 32px;">
        <h2 class="tool-title" style="font-size: 26px; font-weight: 800; margin-bottom: 8px; color: var(--text); letter-spacing: -0.5px;">Background Remover</h2>
        <p class="tool-subtitle" style="font-size: 14.5px; color: var(--text-2); line-height: 1.5; max-width: 580px;">Remove the background from any image instantly. Powered by an AI model that runs 100% inside your browser — private, free, and unlimited.</p>
      </div>

      <!-- Dropzone -->
      <div class="bg-remover-dropzone" id="bgDropzone">
        <input type="file" id="bgFileInput" accept="image/*" style="display: none;">
        <svg class="bg-remover-dropzone-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="17 8 12 3 7 8"></polyline>
          <line x1="12" y1="3" x2="12" y2="15"></line>
        </svg>
        <div class="bg-remover-dropzone-title">Drop your image here</div>
        <div class="bg-remover-dropzone-desc" style="margin-bottom: 20px;">or click to browse — supports JPG, PNG, WEBP</div>
        <button class="btn-primary" id="bgPickBtn" style="font-size: 13.5px; padding: 10px 24px; border-radius: 99px;">Choose Image</button>
      </div>

      <!-- Loading State -->
      <div class="bg-remover-loading" id="bgLoading" style="display: none;">
        <!-- Blurred thumbnail backdrop -->
        <div class="bg-loading-backdrop" id="bgLoadingBackdrop"></div>

        <div class="bg-loading-card">
          <!-- Step indicator -->
          <div class="bg-loading-steps">
            <div class="bg-loading-step active" id="bgStep1">
              <div class="bg-loading-step-dot">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
              </div>
              <span>Load Model</span>
            </div>
            <div class="bg-loading-step-line"></div>
            <div class="bg-loading-step" id="bgStep2">
              <div class="bg-loading-step-dot">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M3 9h18M9 21V9"></path></svg>
              </div>
              <span>Remove BG</span>
            </div>
            <div class="bg-loading-step-line"></div>
            <div class="bg-loading-step" id="bgStep3">
              <div class="bg-loading-step-dot">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <span>Finalise</span>
            </div>
          </div>

          <!-- Main message -->
          <div class="bg-loading-title" id="bgLoadingText">Loading AI Model…</div>
          <div class="bg-loading-tip" id="bgLoadingSubtext">One-time download, cached for future use</div>

          <!-- Progress bar -->
          <div class="bg-remover-progress-container" style="max-width: 100%;">
            <div class="bg-remover-progress-bar" id="bgProgressBar"></div>
          </div>
          <div class="bg-loading-pct" id="bgLoadingPct">0%</div>
        </div>
      </div>

      <!-- Result -->
      <div id="bgResult" style="display: none;">
        <div class="bg-remover-result-grid">
          <div class="bg-remover-preview-card">
            <div class="bg-remover-preview-title">Original</div>
            <div class="bg-remover-img-wrapper">
              <img id="bgOriginalImg" src="" alt="Original">
            </div>
          </div>
          <div class="bg-remover-preview-card">
            <div class="bg-remover-preview-title">Background Removed</div>
            <div class="bg-remover-img-wrapper checkerboard-bg">
              <img id="bgResultImg" src="" alt="Result">
            </div>
          </div>
        </div>

        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
          <button class="btn-primary" id="bgDownloadBtn" style="font-size: 13.5px; padding: 10px 24px; border-radius: 99px; display: flex; align-items: center; gap: 8px;">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:16px;height:16px;">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Download PNG
          </button>
          <button id="bgResetBtn" style="font-size: 13.5px; padding: 10px 24px; border-radius: 99px; background: var(--bg-2); border: 1px solid var(--border); color: var(--text-2); cursor: pointer; transition: all var(--transition);">
            Upload Another
          </button>
        </div>
      </div>
    </div>
  `;
}

async function initBgRemoverListeners() {
  const dropzone = document.getElementById('bgDropzone');
  const fileInput = document.getElementById('bgFileInput');
  const pickBtn = document.getElementById('bgPickBtn');
  const loading = document.getElementById('bgLoading');
  const result = document.getElementById('bgResult');
  const loadingText = document.getElementById('bgLoadingText');
  const loadingSubtext = document.getElementById('bgLoadingSubtext');
  const progressBar = document.getElementById('bgProgressBar');
  const originalImg = document.getElementById('bgOriginalImg');
  const resultImg = document.getElementById('bgResultImg');
  const downloadBtn = document.getElementById('bgDownloadBtn');
  const resetBtn = document.getElementById('bgResetBtn');

  if (!dropzone) return;

  let resultBlobUrl = null;

  const showDropzone = () => {
    dropzone.style.display = 'flex';
    loading.style.display = 'none';
    result.style.display = 'none';
    if (resultBlobUrl) { URL.revokeObjectURL(resultBlobUrl); resultBlobUrl = null; }
  };

  const processFile = async (file) => {
    if (!file || !file.type.startsWith('image/')) return;

    // Show original preview
    const originalUrl = URL.createObjectURL(file);
    originalImg.src = originalUrl;

    // Switch to loading state
    dropzone.style.display = 'none';
    result.style.display = 'none';
    loading.style.display = 'flex';

    const backdrop = document.getElementById('bgLoadingBackdrop');
    const pctEl = document.getElementById('bgLoadingPct');
    const step1 = document.getElementById('bgStep1');
    const step2 = document.getElementById('bgStep2');
    const step3 = document.getElementById('bgStep3');

    // Set blurred backdrop to the original image
    if (backdrop) backdrop.style.backgroundImage = `url(${originalUrl})`;

    // Reset steps
    [step1, step2, step3].forEach(s => s && s.classList.remove('active', 'done'));
    if (step1) step1.classList.add('active');
    progressBar.style.width = '0%';
    if (pctEl) pctEl.textContent = '0%';
    loadingText.textContent = 'Loading AI Model…';
    loadingSubtext.textContent = 'One-time download, cached for future use';

    // Rotate witty tips during loading
    const tips = [
      'The AI model runs entirely on your device 🔒',
      'Your image never leaves your browser ✨',
      'WebAssembly makes this lightning fast ⚡',
      'No API keys. No sign-up. No limits 🚀',
      'First run downloads the model, then it\'s instant 💾',
    ];
    let tipIdx = 0;
    const tipInterval = setInterval(() => {
      tipIdx = (tipIdx + 1) % tips.length;
      if (loadingSubtext) loadingSubtext.textContent = tips[tipIdx];
    }, 2200);

    const setProgress = (pct) => {
      progressBar.style.width = pct + '%';
      if (pctEl) pctEl.textContent = Math.round(pct) + '%';
    };

    try {
      // Dynamically import the ESM library
      const { removeBackground } = await import('https://cdn.jsdelivr.net/npm/@imgly/background-removal@1.7.0/+esm');

      if (step1) { step1.classList.remove('active'); step1.classList.add('done'); }
      if (step2) step2.classList.add('active');
      loadingText.textContent = 'Removing Background…';
      setProgress(30);

      const config = {
        progress: (key, current, total) => {
          if (total > 0) {
            const pct = 30 + Math.round((current / total) * 65);
            setProgress(Math.min(pct, 95));
          }
        }
      };

      const blob = await removeBackground(file, config);

      if (step2) { step2.classList.remove('active'); step2.classList.add('done'); }
      if (step3) step3.classList.add('active');
      loadingText.textContent = 'Finalising…';
      setProgress(98);
      clearInterval(tipInterval);

      // Small delay for the finalise step to register
      await new Promise(r => setTimeout(r, 400));
      setProgress(100);
      if (step3) { step3.classList.remove('active'); step3.classList.add('done'); }

      resultBlobUrl = URL.createObjectURL(blob);
      resultImg.src = resultBlobUrl;

      // Slight pause then show results
      await new Promise(r => setTimeout(r, 300));
      loading.style.display = 'none';
      result.style.display = 'block';

      // Set up download
      downloadBtn.onclick = () => {
        const a = document.createElement('a');
        a.href = resultBlobUrl;
        const baseName = file.name.replace(/\.[^.]+$/, '');
        a.download = baseName + '-no-bg.png';
        a.click();
      };

    } catch (err) {
      clearInterval(tipInterval);
      console.error('Background removal failed:', err);
      loadingText.textContent = 'Something went wrong';
      loadingSubtext.textContent = 'Please try a different image or refresh the page';
      setProgress(0);
      setTimeout(showDropzone, 3000);
    }

    URL.revokeObjectURL(originalUrl);
  };

  // Drag and drop
  dropzone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropzone.classList.add('dragover');
  });
  dropzone.addEventListener('dragleave', () => dropzone.classList.remove('dragover'));
  dropzone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropzone.classList.remove('dragover');
    const file = e.dataTransfer.files[0];
    processFile(file);
  });

  // Click to open file picker
  pickBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    fileInput.click();
  });
  dropzone.addEventListener('click', () => fileInput.click());
  fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    processFile(file);
    fileInput.value = '';
  });

  // Reset button
  resetBtn.addEventListener('click', showDropzone);
}

function renderImgCompressorTool() {
  return `
    <div class="img-compressor-tool-content" style="text-align: left;">
      <div style="margin-bottom: 32px;">
        <h2 class="tool-title" style="font-size: 26px; font-weight: 800; margin-bottom: 8px; color: var(--text); letter-spacing: -0.5px;">Image Compressor</h2>
        <p class="tool-subtitle" style="font-size: 14.5px; color: var(--text-2); line-height: 1.5; max-width: 580px;">Reduce image file size without a noticeable loss in quality — entirely in your browser. No uploads, no accounts, no limits.</p>
      </div>

      <!-- Dropzone -->
      <div class="bg-remover-dropzone" id="icDropzone">
        <input type="file" id="icFileInput" accept="image/*" style="display: none;">
        <svg class="bg-remover-dropzone-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="8 17 12 21 16 17"></polyline>
          <line x1="12" y1="21" x2="12" y2="3"></line>
          <path d="M20 7H4M17 4H7"></path>
        </svg>
        <div class="bg-remover-dropzone-title">Drop your image here</div>
        <div class="bg-remover-dropzone-desc" style="margin-bottom: 20px;">or click to browse — JPG, PNG, WEBP</div>
        <button class="btn-primary" id="icPickBtn" style="font-size: 13.5px; padding: 10px 24px; border-radius: 99px;">Choose Image</button>
      </div>

      <!-- Settings + Result -->
      <div id="icWorkspace" style="display: none;">

        <!-- Settings Panel -->
        <div class="ic-settings-panel">
          <div class="ic-settings-header">
            <div class="ic-original-thumb-wrap">
              <img id="icOriginalThumb" src="" alt="">
            </div>
            <div class="ic-settings-info">
              <div class="ic-filename" id="icFilename">image.jpg</div>
              <div class="ic-original-size" id="icOriginalSize">Original: — KB</div>
            </div>
          </div>

          <div class="ic-controls">
            <!-- Max Size -->
            <div class="ic-control-row">
              <div class="ic-control-label">
                <span>Max file size</span>
                <strong id="icMaxSizeVal">1 MB</strong>
              </div>
              <input type="range" id="icMaxSizeSlider" min="0.1" max="5" step="0.1" value="1" class="ic-slider">
            </div>

            <!-- Max Dimension -->
            <div class="ic-control-row">
              <div class="ic-control-label">
                <span>Max dimension</span>
                <strong id="icMaxDimVal">1920 px</strong>
              </div>
              <input type="range" id="icMaxDimSlider" min="320" max="4096" step="64" value="1920" class="ic-slider">
            </div>

            <button class="btn-primary" id="icCompressBtn" style="width: 100%; border-radius: 12px; padding: 12px; font-size: 14px;">
              Compress Image
            </button>
          </div>
        </div>

        <!-- Progress -->
        <div class="ic-progress" id="icProgress" style="display: none;">
          <div class="bg-remover-progress-container" style="max-width: 100%;">
            <div class="bg-remover-progress-bar ic-progress-bar" id="icProgressBar"></div>
          </div>
          <div style="font-size: 13px; color: var(--text-2); margin-top: 8px; text-align: center;">Compressing…</div>
        </div>

        <!-- Result -->
        <div id="icResult" style="display: none;">
          <!-- Before / After Stats -->
          <div class="ic-stats-row">
            <div class="ic-stat-card">
              <div class="ic-stat-label">Original</div>
              <div class="ic-stat-size" id="icStatOriginal">—</div>
            </div>
            <div class="ic-stat-arrow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </div>
            <div class="ic-stat-card ic-stat-card--result">
              <div class="ic-stat-label">Compressed</div>
              <div class="ic-stat-size" id="icStatCompressed">—</div>
            </div>
            <div class="ic-stat-card ic-stat-card--savings">
              <div class="ic-stat-label">Saved</div>
              <div class="ic-stat-size ic-stat-savings" id="icStatSavings">—</div>
            </div>
          </div>

          <!-- Preview comparison -->
          <div class="ic-preview-grid">
            <div class="ic-preview-card">
              <div class="ic-preview-label">Original</div>
              <div class="ic-preview-img-wrap"><img id="icPreviewOriginal" src="" alt="Original"></div>
            </div>
            <div class="ic-preview-card">
              <div class="ic-preview-label">Compressed</div>
              <div class="ic-preview-img-wrap"><img id="icPreviewCompressed" src="" alt="Compressed"></div>
            </div>
          </div>

          <!-- Actions -->
          <div style="display: flex; gap: 12px; flex-wrap: wrap;">
            <button class="btn-primary" id="icDownloadBtn" style="font-size: 13.5px; padding: 10px 24px; border-radius: 99px; display: flex; align-items: center; gap: 8px;">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:16px;height:16px;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              Download
            </button>
            <button id="icCompressAgainBtn" style="font-size: 13.5px; padding: 10px 24px; border-radius: 99px; background: var(--bg-2); border: 1px solid var(--border); color: var(--text-2); cursor: pointer; transition: all var(--transition);">
              Compress Again
            </button>
            <button id="icResetBtn" style="font-size: 13.5px; padding: 10px 24px; border-radius: 99px; background: var(--bg-2); border: 1px solid var(--border); color: var(--text-2); cursor: pointer; transition: all var(--transition);">
              New Image
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function formatBytes(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
}

async function initImgCompressorListeners() {
  const dropzone = document.getElementById('icDropzone');
  const fileInput = document.getElementById('icFileInput');
  const pickBtn = document.getElementById('icPickBtn');
  const workspace = document.getElementById('icWorkspace');
  const progress = document.getElementById('icProgress');
  const progressBar = document.getElementById('icProgressBar');
  const result = document.getElementById('icResult');

  const maxSizeSlider = document.getElementById('icMaxSizeSlider');
  const maxSizeVal = document.getElementById('icMaxSizeVal');
  const maxDimSlider = document.getElementById('icMaxDimSlider');
  const maxDimVal = document.getElementById('icMaxDimVal');
  const compressBtn = document.getElementById('icCompressBtn');
  const downloadBtn = document.getElementById('icDownloadBtn');
  const compressAgainBtn = document.getElementById('icCompressAgainBtn');
  const resetBtn = document.getElementById('icResetBtn');

  if (!dropzone) return;

  let currentFile = null;
  let compressedBlob = null;
  let compressedUrl = null;

  // Slider live labels
  maxSizeSlider.addEventListener('input', () => {
    maxSizeVal.textContent = parseFloat(maxSizeSlider.value).toFixed(1) + ' MB';
  });
  maxDimSlider.addEventListener('input', () => {
    maxDimVal.textContent = parseInt(maxDimSlider.value) + ' px';
  });

  const loadFile = (file) => {
    if (!file || !file.type.startsWith('image/')) return;
    currentFile = file;

    // Populate settings header
    document.getElementById('icFilename').textContent = file.name;
    document.getElementById('icOriginalSize').textContent = 'Original: ' + formatBytes(file.size);
    const thumb = document.getElementById('icOriginalThumb');
    if (thumb) { URL.revokeObjectURL(thumb.src); thumb.src = URL.createObjectURL(file); }
    document.getElementById('icPreviewOriginal').src = thumb.src;

    dropzone.style.display = 'none';
    result.style.display = 'none';
    progress.style.display = 'none';
    workspace.style.display = 'block';
  };

  const doCompress = async () => {
    if (!currentFile) return;

    compressBtn.disabled = true;
    result.style.display = 'none';
    progress.style.display = 'block';
    progressBar.style.width = '10%';

    const options = {
      maxSizeMB: parseFloat(maxSizeSlider.value),
      maxWidthOrHeight: parseInt(maxDimSlider.value),
      useWebWorker: true,
      onProgress: (pct) => {
        progressBar.style.width = pct + '%';
      }
    };

    try {
      // `imageCompression` is the global from the CDN script
      compressedBlob = await imageCompression(currentFile, options);

      if (compressedUrl) URL.revokeObjectURL(compressedUrl);
      compressedUrl = URL.createObjectURL(compressedBlob);

      // Stats
      document.getElementById('icStatOriginal').textContent = formatBytes(currentFile.size);
      document.getElementById('icStatCompressed').textContent = formatBytes(compressedBlob.size);
      const saved = Math.max(0, currentFile.size - compressedBlob.size);
      const pct = currentFile.size > 0 ? Math.round((saved / currentFile.size) * 100) : 0;
      document.getElementById('icStatSavings').textContent = formatBytes(saved) + ' (' + pct + '% smaller)';

      // Preview
      document.getElementById('icPreviewCompressed').src = compressedUrl;

      // Download
      downloadBtn.onclick = () => {
        const a = document.createElement('a');
        a.href = compressedUrl;
        const ext = currentFile.name.match(/\.([^.]+)$/) ? currentFile.name.match(/\.([^.]+)$/)[1] : 'jpg';
        a.download = currentFile.name.replace(/\.[^.]+$/, '') + '-compressed.' + ext;
        a.click();
      };

      progress.style.display = 'none';
      result.style.display = 'block';

    } catch (err) {
      console.error('Compression error:', err);
      progress.style.display = 'none';
      result.style.display = 'none';
    }

    compressBtn.disabled = false;
  };

  // Drag and drop
  dropzone.addEventListener('dragover', (e) => { e.preventDefault(); dropzone.classList.add('dragover'); });
  dropzone.addEventListener('dragleave', () => dropzone.classList.remove('dragover'));
  dropzone.addEventListener('drop', (e) => {
    e.preventDefault(); dropzone.classList.remove('dragover');
    loadFile(e.dataTransfer.files[0]);
  });

  // Click to open file picker
  pickBtn.addEventListener('click', (e) => { e.stopPropagation(); fileInput.click(); });
  dropzone.addEventListener('click', () => fileInput.click());
  fileInput.addEventListener('change', () => { loadFile(fileInput.files[0]); fileInput.value = ''; });

  // Compress button
  compressBtn.addEventListener('click', doCompress);

  // Compress Again (go back to settings, keep same file)
  compressAgainBtn.addEventListener('click', () => {
    result.style.display = 'none';
  });

  // New Image reset
  resetBtn.addEventListener('click', () => {
    currentFile = null;
    if (compressedUrl) { URL.revokeObjectURL(compressedUrl); compressedUrl = null; }
    workspace.style.display = 'none';
    result.style.display = 'none';
    progress.style.display = 'none';
    dropzone.style.display = 'flex';
  });
}

function renderToolIntro(title, subtitle) {
  return `
    <div class="tool-hero">
      <div class="tools-overview-badge">Designer Tool</div>
      <h2 class="tool-title">${title}</h2>
      <p class="tool-subtitle">${subtitle}</p>
    </div>
  `;
}

function renderSimpleDropzone(idPrefix, title, desc, accept = "image/*") {
  return `
    <div class="bg-remover-dropzone" id="${idPrefix}Dropzone">
      <input type="file" id="${idPrefix}FileInput" accept="${accept}" style="display: none;">
      <svg class="bg-remover-dropzone-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
        <polyline points="17 8 12 3 7 8"></polyline>
        <line x1="12" y1="3" x2="12" y2="15"></line>
      </svg>
      <div class="bg-remover-dropzone-title">${title}</div>
      <div class="bg-remover-dropzone-desc" style="margin-bottom: 20px;">${desc}</div>
      <button class="btn-primary" id="${idPrefix}PickBtn" style="font-size: 13.5px; padding: 10px 24px; border-radius: 99px;">Choose File</button>
    </div>
  `;
}

function wireDropzone(idPrefix, onFile) {
  const dropzone = document.getElementById(`${idPrefix}Dropzone`);
  const fileInput = document.getElementById(`${idPrefix}FileInput`);
  const pickBtn = document.getElementById(`${idPrefix}PickBtn`);
  if (!dropzone || !fileInput || !pickBtn) return;

  dropzone.addEventListener('dragover', (e) => { e.preventDefault(); dropzone.classList.add('dragover'); });
  dropzone.addEventListener('dragleave', () => dropzone.classList.remove('dragover'));
  dropzone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropzone.classList.remove('dragover');
    onFile(e.dataTransfer.files[0]);
  });
  pickBtn.addEventListener('click', (e) => { e.stopPropagation(); fileInput.click(); });
  dropzone.addEventListener('click', () => fileInput.click());
  fileInput.addEventListener('change', () => {
    onFile(fileInput.files[0]);
    fileInput.value = '';
  });
}

function loadImageFromFile(file) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => resolve({ img, url });
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error('Could not load image'));
    };
    img.src = url;
  });
}

function canvasToBlob(canvas, type = 'image/png', quality = 0.92) {
  return new Promise((resolve) => canvas.toBlob(resolve, type, quality));
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function renderImageFormatConverterTool() {
  return `
    <div class="simple-tool-content" style="text-align: left;">
      ${renderToolIntro('Image Format Converter', 'Convert JPG, PNG, and WebP files in your browser using canvas export. Great for web-ready assets and quick client handoffs.')}
      ${renderSimpleDropzone('ifc', 'Drop an image to convert', 'JPG, PNG, or WebP')}
      
      <div id="ifcWorkspace" class="utility-panel" style="display:none;">
        <div class="utility-grid-two">
          
          <!-- Left Column: Visual Preview (Normal Design) -->
          <div style="display: flex; justify-content: center; align-items: center; width: 100%;">
            <img id="ifcPreview" class="utility-preview-img" alt="Image preview">
          </div>
          
          <!-- Right Column: Export Settings & Controls -->
          <div class="utility-stack" style="justify-content: center;">
            <div class="utility-file-name" id="ifcFilename" style="margin-bottom: 8px;">image.png</div>
            
            <div class="utility-label">
              <span>Export Format</span>
              <div class="tool-segmented-control" data-tool="ifc">
                <button class="tool-segment-btn active" data-value="image/png">PNG</button>
                <button class="tool-segment-btn" data-value="image/jpeg">JPG</button>
                <button class="tool-segment-btn" data-value="image/webp">WebP</button>
              </div>
            </div>
            
            <div class="premium-range-group" id="ifcQualityGroup" style="opacity: 0.5; pointer-events: none; transition: opacity var(--transition);">
              <div class="premium-slider-header">
                <span class="utility-label" style="gap: 0;">Quality</span>
                <div class="premium-slider-info">
                  <span class="premium-slider-badge" id="ifcQualityVal">92%</span>
                  <span id="ifcQualityDesc" style="font-size:11px; color:var(--text-3); font-weight:600;">Lossless (PNG)</span>
                </div>
              </div>
              <input type="range" id="ifcQuality" min="0.4" max="1" step="0.01" value="0.92" class="premium-slider">
            </div>
            
            <div class="tool-action-row">
              <button class="btn-primary" id="ifcConvertBtn" style="flex: 1; border-radius: 12px; padding: 12px 18px; display: flex; align-items: center; justify-content: center; gap: 8px;">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:16px;height:16px;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                Convert & Download
              </button>
              <button id="ifcResetBtn" style="border-radius: 12px; padding: 12px 18px; background: var(--bg-3); border: 1px solid var(--border); color: var(--text-2); cursor: pointer; transition: all var(--transition);">
                New Image
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  `;
}

async function initImageFormatConverterListeners() {
  const workspace = document.getElementById('ifcWorkspace');
  const preview = document.getElementById('ifcPreview');
  const filename = document.getElementById('ifcFilename');
  const quality = document.getElementById('ifcQuality');
  const qualityVal = document.getElementById('ifcQualityVal');
  const qualityDesc = document.getElementById('ifcQualityDesc');
  const qualityGroup = document.getElementById('ifcQualityGroup');
  const convertBtn = document.getElementById('ifcConvertBtn');
  const resetBtn = document.getElementById('ifcResetBtn');
  
  let currentFile = null;
  let currentImage = null;
  let currentUrl = null;
  let selectedFormat = 'image/png'; // default selected active segment

  if (!workspace) return;

  const updateQualityDesc = (val) => {
    qualityVal.textContent = Math.round(val * 100) + '%';
    if (selectedFormat === 'image/png') {
      qualityDesc.textContent = 'Lossless (PNG)';
    } else {
      if (val < 0.6) qualityDesc.textContent = 'Low Size / Low Quality';
      else if (val < 0.8) qualityDesc.textContent = 'Medium Size / Good';
      else if (val < 0.95) qualityDesc.textContent = 'Balanced / High Quality';
      else qualityDesc.textContent = 'Large Size / Max Quality';
    }
  };

  quality.addEventListener('input', () => {
    updateQualityDesc(parseFloat(quality.value));
  });

  // Setup custom format switcher chips
  const formatButtons = document.querySelectorAll('.tool-segmented-control[data-tool="ifc"] .tool-segment-btn');
  formatButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      formatButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedFormat = btn.dataset.value;
      
      if (selectedFormat === 'image/png') {
        qualityGroup.style.opacity = '0.5';
        qualityGroup.style.pointerEvents = 'none';
        updateQualityDesc(parseFloat(quality.value));
      } else {
        qualityGroup.style.opacity = '1';
        qualityGroup.style.pointerEvents = 'auto';
        updateQualityDesc(parseFloat(quality.value));
      }
    });
  });

  wireDropzone('ifc', async (file) => {
    if (!file || !file.type.startsWith('image/')) return;
    if (currentUrl) URL.revokeObjectURL(currentUrl);
    currentFile = file;
    const loaded = await loadImageFromFile(file);
    currentImage = loaded.img;
    currentUrl = loaded.url;
    preview.src = currentUrl;
    
    const sizeStr = formatBytes(file.size);
    filename.textContent = `${file.name} · ${currentImage.naturalWidth}x${currentImage.naturalHeight} (${sizeStr})`;
    
    document.getElementById('ifcDropzone').style.display = 'none';
    workspace.style.display = 'block';
  });

  convertBtn.addEventListener('click', async () => {
    if (!currentImage || !currentFile) return;
    const canvas = document.createElement('canvas');
    canvas.width = currentImage.naturalWidth;
    canvas.height = currentImage.naturalHeight;
    const ctx = canvas.getContext('2d');
    
    if (selectedFormat === 'image/jpeg') {
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    
    ctx.drawImage(currentImage, 0, 0);
    const qVal = selectedFormat === 'image/png' ? 1.0 : parseFloat(quality.value);
    const blob = await canvasToBlob(canvas, selectedFormat, qVal);
    const ext = selectedFormat === 'image/jpeg' ? 'jpg' : selectedFormat.split('/')[1];
    
    // Add micro-animation/toast checkmark on convertBtn
    const origHtml = convertBtn.innerHTML;
    convertBtn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="width:16px;height:16px;"><polyline points="20 6 9 17 4 12"></polyline></svg>
      Downloaded!
    `;
    convertBtn.style.background = '#4CAF50';
    
    setTimeout(() => {
      convertBtn.innerHTML = origHtml;
      convertBtn.style.background = '';
    }, 2000);

    downloadBlob(blob, currentFile.name.replace(/\.[^.]+$/, '') + '.' + ext);
  });

  resetBtn.addEventListener('click', () => {
    currentFile = null;
    currentImage = null;
    if (currentUrl) { URL.revokeObjectURL(currentUrl); currentUrl = null; }
    workspace.style.display = 'none';
    document.getElementById('ifcDropzone').style.display = 'flex';
  });
}

function renderPaletteExtractorTool() {
  return `
    <div class="simple-tool-content" style="text-align: left;">
      ${renderToolIntro('Color Palette Extractor', 'Upload an image and extract five dominant colors you can copy straight into your design file.')}
      ${renderSimpleDropzone('pe', 'Drop an inspirational image', 'Extracts 5 dominant colors')}
      
      <div id="peResult" style="display:none;">
        <div class="palette-dashboard-grid">
          
          <!-- Left side: Image and details (Normal Design, No Card Wrapper) -->
          <div class="utility-stack" style="gap: 16px;">
            <div style="display: flex; justify-content: center; align-items: center; width: 100%;">
              <img id="pePreview" class="utility-preview-img" alt="Palette source">
            </div>
            
            <div class="palette-export-actions">
              <div class="utility-file-name" style="font-size:13px; text-transform:uppercase; color:var(--text-3); font-weight:700; letter-spacing:0.05em; margin-bottom: 4px;">Export Palette</div>
              <div class="tool-action-row-grid">
                <button class="btn-primary" id="peCopyAllBtn" style="font-size:12.5px; padding: 11px 14px; border-radius: 10px; display:flex; align-items:center; justify-content:center; gap:6px;">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:14px;height:14px;"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                  Copy HEX
                </button>
                <button id="peDownloadCssBtn" class="btn-secondary" style="font-size:12.5px; padding: 11px 14px; border-radius: 10px; background:var(--bg-3); border:1px solid var(--border); color:var(--text); cursor:pointer; transition:all var(--transition); display:flex; align-items:center; justify-content:center; gap:6px;">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:14px;height:14px;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                  CSS Var
                </button>
                <button id="peDownloadJsonBtn" class="btn-secondary" style="font-size:12.5px; padding: 11px 14px; border-radius: 10px; background:var(--bg-3); border:1px solid var(--border); color:var(--text); cursor:pointer; transition:all var(--transition); display:flex; align-items:center; justify-content:center; gap:6px;">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:14px;height:14px;"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                  JSON File
                </button>
                <button id="peResetBtn" class="btn-secondary" style="font-size:12.5px; padding: 11px 14px; border-radius: 10px; background:var(--bg-3); border:1px solid var(--border); color:var(--text-2); cursor:pointer; transition:all var(--transition);">
                  New Image
                </button>
              </div>
            </div>
          </div>
          
          <!-- Right side: Extracted colors -->
          <div class="utility-stack" style="gap: 16px;">
            <div class="utility-file-name" id="peFilename" style="margin-bottom: 4px;">image.png</div>
            <div class="palette-swatches-grid" id="peColors"></div>
          </div>
          
        </div>
      </div>
    </div>
  `;
}

async function initPaletteExtractorListeners() {
  const result = document.getElementById('peResult');
  const preview = document.getElementById('pePreview');
  const colorsEl = document.getElementById('peColors');
  const filename = document.getElementById('peFilename');
  
  const copyAllBtn = document.getElementById('peCopyAllBtn');
  const downloadCssBtn = document.getElementById('peDownloadCssBtn');
  const downloadJsonBtn = document.getElementById('peDownloadJsonBtn');
  const resetBtn = document.getElementById('peResetBtn');
  
  let extractedColors = [];

  if (!result) return;

  wireDropzone('pe', async (file) => {
    if (!file || !file.type.startsWith('image/')) return;
    const loaded = await loadImageFromFile(file);
    preview.src = loaded.url;
    
    const sizeStr = formatBytes(file.size);
    filename.textContent = file.name + ' · ' + loaded.img.naturalWidth + 'x' + loaded.img.naturalHeight + ' (' + sizeStr + ')';
    
    const colorThief = new ColorThief();
    const palette = colorThief.getPalette(loaded.img, 5);
    
    extractedColors = palette.map(rgb => rgbToHex(rgb[0], rgb[1], rgb[2]));
    
    colorsEl.innerHTML = palette.map((rgb, idx) => {
      const hex = extractedColors[idx];
      
      const ratioWhite = calculateContrastRatio(hex, '#FFFFFF');
      const ratioBlack = calculateContrastRatio(hex, '#111111');
      
      let wcagText = 'Low Contrast';
      let wcagClass = 'fail';
      
      if (ratioWhite >= 4.5) {
        wcagText = 'AA White text';
        wcagClass = 'pass';
      } else if (ratioBlack >= 4.5) {
        wcagText = 'AA Dark text';
        wcagClass = 'pass';
      }
      
      return `
        <div class="palette-swatch-card" data-hex="${hex}">
          <div class="palette-swatch-color" style="background:${hex}">
            <button class="palette-swatch-copy-btn" title="Copy Hex">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
            </button>
          </div>
          <div class="palette-swatch-info">
            <div class="palette-swatch-hex">${hex}</div>
            <div class="palette-swatch-rgb">rgb(${rgb.join(', ')})</div>
            <span class="palette-contrast-badge ${wcagClass}">${wcagText}</span>
          </div>
        </div>
      `;
    }).join('');
    
    const cards = colorsEl.querySelectorAll('.palette-swatch-card');
    cards.forEach(card => {
      card.addEventListener('click', (e) => {
        const hex = card.dataset.hex;
        copyToClipboard(hex);
        
        const copyBtn = card.querySelector('.palette-swatch-copy-btn');
        const origSvg = copyBtn.innerHTML;
        copyBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>';
        copyBtn.style.background = '#4CAF50';
        copyBtn.style.opacity = '1';
        copyBtn.style.transform = 'scale(1)';
        
        setTimeout(() => {
          copyBtn.innerHTML = origSvg;
          copyBtn.style.background = '';
          copyBtn.style.opacity = '';
          copyBtn.style.transform = '';
        }, 1200);
      });
    });
    
    document.getElementById('peDropzone').style.display = 'none';
    result.style.display = 'block';
  });

  copyAllBtn.addEventListener('click', () => {
    if (extractedColors.length === 0) return;
    const textStr = extractedColors.join(', ');
    copyToClipboard(textStr);
    
    const origHtml = copyAllBtn.innerHTML;
    copyAllBtn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="width:14px;height:14px;"><polyline points="20 6 9 17 4 12"></polyline></svg>
      HEX Codes Copied!
    `;
    copyAllBtn.style.background = '#4CAF50';
    
    setTimeout(() => {
      copyAllBtn.innerHTML = origHtml;
      copyAllBtn.style.background = '';
    }, 1500);
  });

  downloadCssBtn.addEventListener('click', () => {
    if (extractedColors.length === 0) return;
    const cssVars = ':root {\n' + extractedColors.map((hex, i) => '  --extracted-color-' + (i + 1) + ': ' + hex + ';').join('\n') + '\n}\n';
    const blob = new Blob([cssVars], { type: 'text/css' });
    downloadBlob(blob, 'extracted-palette.css');
  });

  downloadJsonBtn.addEventListener('click', () => {
    if (extractedColors.length === 0) return;
    const jsonStr = JSON.stringify({ colors: extractedColors }, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    downloadBlob(blob, 'extracted-palette.json');
  });

  resetBtn.addEventListener('click', () => {
    extractedColors = [];
    result.style.display = 'none';
    document.getElementById('peDropzone').style.display = 'flex';
  });
}

function renderQrGeneratorTool() {
  return `
    <div class="simple-tool-content" style="text-align: left;">
      ${renderToolIntro('QR Code Generator', 'Create QR codes for packaging mockups, business cards, print layouts, and launch materials.')}
      
      <div class="utility-panel">
        <div class="utility-grid-two">
          
          <!-- Left: Customizer Panel -->
          <div class="utility-stack" style="gap: 16px;">
            <div class="utility-label">
              <span>URL or Text</span>
              <textarea id="qrText" class="utility-textarea" rows="4" style="font-family: inherit;">https://designschool.site</textarea>
            </div>
            
            <div class="utility-grid-two compact">
              <div class="utility-label">
                <span>Foreground Color</span>
                <div class="custom-picker-row">
                  <div class="custom-picker-trigger" id="qrFgTrigger" style="background-color: #111111;">
                    <input type="color" id="qrForeground" value="#111111">
                  </div>
                  <input type="text" id="qrFgHex" class="custom-picker-input" value="#111111" maxlength="7">
                </div>
              </div>
              
              <div class="utility-label">
                <span>Background Color</span>
                <div class="custom-picker-row">
                  <div class="custom-picker-trigger" id="qrBgTrigger" style="background-color: #FFFFFF;">
                    <input type="color" id="qrBackground" value="#FFFFFF">
                  </div>
                  <input type="text" id="qrBgHex" class="custom-picker-input" value="#FFFFFF" maxlength="7">
                </div>
              </div>
            </div>
            
            <div class="color-presets-wrapper">
              <span class="utility-label">Designer Presets</span>
              <div class="color-presets-list" id="qrPresets">
                <button class="color-preset-btn active" data-fg="#111111" data-bg="#FFFFFF">
                  <span class="preset-color-dot" style="background: #111111;"></span> Classic
                </button>
                <button class="color-preset-btn" data-fg="#8A2BE2" data-bg="#000000">
                  <span class="preset-color-dot" style="background: #8A2BE2;"></span> Cyberpunk
                </button>
                <button class="color-preset-btn" data-fg="#1DB954" data-bg="#191414">
                  <span class="preset-color-dot" style="background: #1DB954;"></span> Spotify
                </button>
                <button class="color-preset-btn" data-fg="#FF8C00" data-bg="#111111">
                  <span class="preset-color-dot" style="background: #FF8C00;"></span> Sunset
                </button>
                <button class="color-preset-btn" data-fg="#05C46B" data-bg="#0F172A">
                  <span class="preset-color-dot" style="background: #05C46B;"></span> Emerald
                </button>
              </div>
            </div>

            <div class="utility-label">
              <span>Module Style</span>
              <div class="tool-segmented-control" data-tool="qrStyle">
                <button class="tool-segment-btn active" data-value="square">Square</button>
                <button class="tool-segment-btn" data-value="rounded">Rounded</button>
              </div>
            </div>
            
            <div class="premium-range-group">
              <div class="premium-slider-header">
                <span class="utility-label" style="gap:0;">Export Size</span>
                <span class="premium-slider-badge" id="qrSizeVal">260 px</span>
              </div>
              <input type="range" id="qrSize" min="200" max="1000" step="10" value="260" class="premium-slider">
            </div>
          </div>
          
          <!-- Right: QR Canvas -->
          <div class="utility-stack qr-canvas-col" style="gap: 16px; align-items: center; justify-content: center;">
            <div style="background: #FFFFFF; padding: 18px; border-radius: 12px; box-shadow: 0 8px 32px rgba(0,0,0,0.06); display: flex; align-items: center; justify-content: center;" id="qrCanvasWrap">
              <canvas id="qrCanvas" width="220" height="220" style="display:block; max-width: 100%; height: auto;"></canvas>
            </div>
            <div class="tool-action-row">
              <button class="btn-primary" id="qrDownloadBtn" style="flex: 1; border-radius: 12px; padding: 12px 18px; display: flex; align-items: center; justify-content: center; gap: 8px;">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:16px;height:16px;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                Download PNG
              </button>
              <button class="btn-secondary" id="qrCopyBtn" style="border-radius: 12px; padding: 12px 18px; background:var(--bg-3); border:1px solid var(--border); color:var(--text); cursor:pointer; transition:all var(--transition); display: flex; align-items: center; justify-content: center; gap: 8px;">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:16px;height:16px;"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                Copy QR
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  `;
}

function initQrGeneratorListeners() {
  const canvas = document.getElementById('qrCanvas');
  const text = document.getElementById('qrText');
  const foreground = document.getElementById('qrForeground');
  const background = document.getElementById('qrBackground');
  const fgHex = document.getElementById('qrFgHex');
  const bgHex = document.getElementById('qrBgHex');
  const fgTrigger = document.getElementById('qrFgTrigger');
  const bgTrigger = document.getElementById('qrBgTrigger');
  const sizeSlider = document.getElementById('qrSize');
  const sizeVal = document.getElementById('qrSizeVal');
  const downloadBtn = document.getElementById('qrDownloadBtn');
  const copyBtn = document.getElementById('qrCopyBtn');
  const presets = document.querySelectorAll('#qrPresets .color-preset-btn');
  const styleSegments = document.querySelectorAll('[data-tool="qrStyle"] .tool-segment-btn');
  
  if (!canvas) return;

  let qrSize = parseInt(sizeSlider.value);
  let qrStyle = 'square'; // 'square' | 'rounded'

  // Hidden off-screen canvas that QRious renders into.
  // We then post-process it onto the visible canvas.
  const qrRaw = document.createElement('canvas');

  const qr = new QRious({
    element: qrRaw,
    size: qrSize,
    value: text.value.trim() || ' ',
    foreground: foreground.value,
    background: background.value
  });

  // Draw a single rounded rectangle on a 2d context
  function roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.arcTo(x + w, y, x + w, y + r, r);
    ctx.lineTo(x + w, y + h - r);
    ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
    ctx.lineTo(x + r, y + h);
    ctx.arcTo(x, y + h, x, y + h - r, r);
    ctx.lineTo(x, y + r);
    ctx.arcTo(x, y, x + r, y, r);
    ctx.closePath();
    ctx.fill();
  }

  // Redraw qrRaw canvas onto the visible canvas, optionally with rounded modules
  function applyStyle() {
    const size = qrRaw.width;
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');

    if (qrStyle === 'square') {
      // Simple copy
      ctx.drawImage(qrRaw, 0, 0);
      return;
    }

    // --- Rounded style ---
    // Read raw pixel data to detect dark modules
    const rawCtx = qrRaw.getContext('2d');
    const imageData = rawCtx.getImageData(0, 0, size, size);
    const data = imageData.data;

    // Detect module size: QRious has a quiet zone; find first dark pixel
    // We scan rows until we see a dark pixel transition pattern
    const bgColor = background.value || '#FFFFFF';
    const fgColor = foreground.value || '#000000';

    // Fill background
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, size, size);

    // Detect module grid by sampling
    // Find the left edge of first module by scanning top row
    let moduleSize = 0;
    let quiet = 0;
    const isLight = (x, y) => {
      const idx = (y * size + x) * 4;
      // compare to foreground: if it's closer to fg it's dark
      const r = data[idx], g = data[idx+1], b = data[idx+2];
      // simple luminance threshold
      return (r + g + b) > 382; // > ~127*3
    };

    // Find quiet zone (leading light pixels in top row)
    for (let x = 0; x < size; x++) {
      if (!isLight(x, size >> 1)) { quiet = x; break; }
    }
    // Module size: measure first dark run
    for (let x = quiet; x < size; x++) {
      if (isLight(x, size >> 1)) { moduleSize = x - quiet; break; }
    }
    if (moduleSize < 1) moduleSize = 1;

    const cols = Math.round((size - quiet * 2) / moduleSize);
    const r = moduleSize * 0.35; // corner radius

    ctx.fillStyle = fgColor;
    for (let row = 0; row < cols; row++) {
      for (let col = 0; col < cols; col++) {
        const px = quiet + col * moduleSize + Math.floor(moduleSize / 2);
        const py = quiet + row * moduleSize + Math.floor(moduleSize / 2);
        if (!isLight(px, py)) {
          const x = quiet + col * moduleSize;
          const y = quiet + row * moduleSize;
          roundRect(ctx, x + 1, y + 1, moduleSize - 2, moduleSize - 2, r);
        }
      }
    }
  }

  const updateQR = () => {
    qr.value = text.value.trim() || ' ';
    qr.foreground = foreground.value;
    qr.background = background.value;
    qr.size = qrSize;
    qrRaw.width = qrSize;
    qrRaw.height = qrSize;
    // Re-render qrRaw
    const newQr = new QRious({
      element: qrRaw,
      size: qrSize,
      value: text.value.trim() || ' ',
      foreground: foreground.value,
      background: background.value
    });
    
    applyStyle();
    
    // Update trigger bg colors
    fgTrigger.style.backgroundColor = foreground.value;
    bgTrigger.style.backgroundColor = background.value;
    
    // Update text boxes
    fgHex.value = foreground.value.toUpperCase();
    bgHex.value = background.value.toUpperCase();
    
    const wrap = document.getElementById('qrCanvasWrap');
    if (wrap) wrap.style.backgroundColor = background.value;
  };

  // Module style segments
  styleSegments.forEach(btn => {
    btn.addEventListener('click', () => {
      styleSegments.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      qrStyle = btn.dataset.value;
      applyStyle();
    });
  });

  // Color Pickers synchronization
  foreground.addEventListener('input', () => {
    updateQR();
    presets.forEach(p => p.classList.remove('active'));
  });
  background.addEventListener('input', () => {
    updateQR();
    presets.forEach(p => p.classList.remove('active'));
  });

  // Text inputs synchronization
  const handleHexInput = (textEl, pickerEl) => {
    let val = textEl.value;
    if (!val.startsWith('#') && val.length > 0) val = '#' + val;
    if (/^#[0-9A-F]{6}$/i.test(val)) {
      pickerEl.value = val;
      updateQR();
      presets.forEach(p => p.classList.remove('active'));
    }
  };
  fgHex.addEventListener('input', () => handleHexInput(fgHex, foreground));
  bgHex.addEventListener('input', () => handleHexInput(bgHex, background));

  // Presets trigger
  presets.forEach(btn => {
    btn.addEventListener('click', () => {
      presets.forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      foreground.value = btn.dataset.fg;
      background.value = btn.dataset.bg;
      updateQR();
    });
  });

  // Size slider
  sizeSlider.addEventListener('input', () => {
    qrSize = parseInt(sizeSlider.value);
    sizeVal.textContent = qrSize + ' px';
    updateQR();
  });

  // Text textarea
  text.addEventListener('input', updateQR);

  // Download Action
  downloadBtn.addEventListener('click', async () => {
    const blob = await canvasToBlob(canvas, 'image/png');
    downloadBlob(blob, 'qr-code.png');
  });

  // Copy Action (Clipboard Item Blob)
  copyBtn.addEventListener('click', async () => {
    try {
      const blob = await canvasToBlob(canvas, 'image/png');
      await navigator.clipboard.write([
        new ClipboardItem({ 'image/png': blob })
      ]);
      
      const origHtml = copyBtn.innerHTML;
      copyBtn.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="width:16px;height:16px;"><polyline points="20 6 9 17 4 12"></polyline></svg>
        Copied!
      `;
      copyBtn.style.background = '#4CAF50';
      
      setTimeout(() => {
        copyBtn.innerHTML = origHtml;
        copyBtn.style.background = '';
      }, 1500);
      
    } catch (err) {
      console.error(err);
      showClipboardToast('Copy failed, please download instead.');
    }
  });

  // Trigger initial render
  updateQR();
}

const GOOGLE_FONT_PAIRS = [
  ['Playfair Display', 'Inter', 'Elegant Editorial'],
  ['Fraunces', 'Source Sans 3', 'Warm & Friendly'],
  ['Space Grotesk', 'DM Sans', 'Tech & Creative'],
  ['Merriweather', 'Open Sans', 'News Editorial'],
  ['Bebas Neue', 'Lato', 'Bold Marketing'],
  ['Cormorant Garamond', 'Nunito Sans', 'High Luxury'],
  ['Oswald', 'Roboto', 'Condensed Modern'],
  ['Libre Baskerville', 'Work Sans', 'Academic & Clean'],
  ['Archivo Black', 'Archivo', 'Brutalism Graphic'],
  ['Lora', 'Poppins', 'Stylish App Interface'],
  ['Syne', 'Manrope', 'Avant-Garde/Tastemaker'],
  ['Prata', 'Mulish', 'Chic & Minimalist']
];

function renderFontPairingTool() {
  return `
    <div class="simple-tool-content" style="text-align: left;">
      ${renderToolIntro('Google Font Pairing Generator', 'Randomize compatible Google Font combinations and preview them on a heading and body sample.')}
      
      <div class="utility-panel">
        <div class="fp-toolbar">
          <div class="fp-toolbar-main">
            <div class="utility-label" style="margin-bottom:4px;">Current Font Pairing</div>
            <div style="display:flex; align-items:center; gap: 8px; flex-wrap: wrap;">
              <div class="utility-file-name" id="fpPairName" style="font-size:16px;">Playfair Display + Inter</div>
              <span class="premium-slider-badge" id="fpVibeBadge" style="text-transform:none; font-size:11px;">Elegant Editorial</span>
            </div>
          </div>
          
          <div class="fp-toolbar-controls">
            <div class="premium-range-group fp-size-control">
              <div class="premium-slider-header">
                <span class="utility-label" style="font-size:11px; gap:0;">Heading Size</span>
                <span style="font-size: 11px; font-weight:700; color:var(--accent);" id="fpHeadingSizeVal">48px</span>
              </div>
              <input type="range" id="fpHeadingSize" min="28" max="72" value="48" class="premium-slider">
            </div>
            
            <button class="btn-primary fp-randomize-btn" id="fpRandomBtn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:14px;height:14px;"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>
              Randomize
            </button>
          </div>
        </div>
        
        <!-- Interactive Specimen Preview Canvas -->
        <div class="font-pairing-preview-container">
          <div class="font-pairing-canvas light-theme" id="fpPreviewCanvas">
            <h3 id="fpHeading" contenteditable="true" spellcheck="false" title="Click to edit heading text">Design systems should feel calm, useful, and memorable.</h3>
            <p id="fpBody" contenteditable="true" spellcheck="false" title="Click to edit body text">A strong type pairing gives interface content a rhythm: clear hierarchy for scanning, enough character for brand, and comfortable reading for long-form lessons.</p>
          </div>
          
          <div class="font-pairing-editor-bar">
            <span style="font-size:12px; color:var(--text-3); font-weight:600;">💡 Click the text to edit directly</span>
            <div class="font-theme-toggle-group">
              <button class="font-theme-toggle-btn active" id="fpThemeLight" title="Light Background">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
              </button>
              <button class="font-theme-toggle-btn" id="fpThemeDark" title="Dark Background">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
              </button>
            </div>
          </div>
        </div>
        
        <!-- Code Integration Panel -->
        <div class="fp-code-grid">
          <div class="code-embed-container">
            <div class="code-embed-header">
              <span class="code-embed-title">1. Embed HTML Link</span>
              <button class="btn-copy-code" id="fpCopyLinkBtn">Copy Link</button>
            </div>
            <pre class="code-embed-pre" id="fpCodeLink">&lt;link rel="stylesheet" href="..."&gt;</pre>
          </div>
          
          <div class="code-embed-container">
            <div class="code-embed-header">
              <span class="code-embed-title">2. Declare CSS Family</span>
              <button class="btn-copy-code" id="fpCopyCssBtn">Copy CSS</button>
            </div>
            <pre class="code-embed-pre" id="fpCodeCss">font-family: 'Playfair Display', serif;</pre>
          </div>
        </div>
        
      </div>
    </div>
  `;
}

function initFontPairingListeners() {
  const heading = document.getElementById('fpHeading');
  const body = document.getElementById('fpBody');
  const name = document.getElementById('fpPairName');
  const vibeBadge = document.getElementById('fpVibeBadge');
  const btn = document.getElementById('fpRandomBtn');
  const headingSize = document.getElementById('fpHeadingSize');
  const headingSizeVal = document.getElementById('fpHeadingSizeVal');
  const canvas = document.getElementById('fpPreviewCanvas');
  const themeLight = document.getElementById('fpThemeLight');
  const themeDark = document.getElementById('fpThemeDark');
  const codeLink = document.getElementById('fpCodeLink');
  const codeCss = document.getElementById('fpCodeCss');
  const copyLinkBtn = document.getElementById('fpCopyLinkBtn');
  const copyCssBtn = document.getElementById('fpCopyCssBtn');
  
  if (!heading) return;
  let idx = -1;

  const applyPair = () => {
    idx = (idx + 1 + Math.floor(Math.random() * (GOOGLE_FONT_PAIRS.length - 1))) % GOOGLE_FONT_PAIRS.length;
    const [headingFont, bodyFont, vibe] = GOOGLE_FONT_PAIRS[idx];
    
    // Inject stylesheet
    const linkId = 'dynamic-google-font-pair';
    const existing = document.getElementById(linkId);
    if (existing) existing.remove();
    
    const link = document.createElement('link');
    link.id = linkId;
    link.rel = 'stylesheet';
    
    const headFontUrl = headingFont.replace(/ /g, '+');
    const bodyFontUrl = bodyFont.replace(/ /g, '+');
    const url = `https://fonts.googleapis.com/css2?family=${headFontUrl}:wght@400;600;700&family=${bodyFontUrl}:wght@400;500;700&display=swap`;
    link.href = url;
    document.head.appendChild(link);
    
    // Apply styling
    heading.style.fontFamily = `"${headingFont}", serif`;
    body.style.fontFamily = `"${bodyFont}", sans-serif`;
    name.textContent = `${headingFont} + ${bodyFont}`;
    vibeBadge.textContent = vibe;
    
    // Update code outputs
    codeLink.textContent = `<link rel="preconnect" href="https://fonts.googleapis.com">\n<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n<link rel="stylesheet" href="${url}">`;
    codeCss.textContent = `/* Heading styling */\nh1, h2, h3 {\n  font-family: "${headingFont}", serif;\n}\n\n/* Body styling */\nbody, p {\n  font-family: "${bodyFont}", sans-serif;\n}`;
  };

  btn.addEventListener('click', applyPair);

  // Heading Size Slider
  headingSize.addEventListener('input', () => {
    const size = headingSize.value;
    headingSizeVal.textContent = size + 'px';
    heading.style.fontSize = size + 'px';
  });

  // Theme Toggles
  themeLight.addEventListener('click', () => {
    themeLight.classList.add('active');
    themeDark.classList.remove('active');
    canvas.classList.remove('dark-theme');
    canvas.classList.add('light-theme');
  });

  themeDark.addEventListener('click', () => {
    themeDark.classList.add('active');
    themeLight.classList.remove('active');
    canvas.classList.remove('light-theme');
    canvas.classList.add('dark-theme');
  });

  // Copy Buttons
  const handleCopyAction = (btnEl, text) => {
    copyToClipboard(text);
    const origHtml = btnEl.innerHTML;
    btnEl.innerHTML = 'Copied!';
    btnEl.style.background = '#4CAF50';
    btnEl.style.color = '#FFFFFF';
    setTimeout(() => {
      btnEl.innerHTML = origHtml;
      btnEl.style.background = '';
      btnEl.style.color = '';
    }, 1500);
  };

  copyLinkBtn.addEventListener('click', () => {
    handleCopyAction(copyLinkBtn, codeLink.textContent);
  });
  copyCssBtn.addEventListener('click', () => {
    handleCopyAction(copyCssBtn, codeCss.textContent);
  });

  // Apply initial font size and font pair
  heading.style.fontSize = headingSize.value + 'px';
  applyPair();
}

const UNICODE_STYLES = {
  fraktur: { name: 'Fraktur', lower: '𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷', upper: '𝔄𝔅ℭ𝔇𝔈𝔉𝔊ℌℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ' },
  double: { name: 'Double-Struck', lower: '𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫', upper: '𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ' },
  bold: { name: 'Math Bold', lower: '𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳', upper: '𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙' },
  script: { name: 'Script', lower: '𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃', upper: '𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩' }
};

function convertUnicodeText(text, styleKey) {
  const style = UNICODE_STYLES[styleKey];
  return Array.from(text).map(ch => {
    const lowerIndex = 'abcdefghijklmnopqrstuvwxyz'.indexOf(ch);
    const upperIndex = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(ch);
    if (lowerIndex >= 0) return Array.from(style.lower)[lowerIndex];
    if (upperIndex >= 0) return Array.from(style.upper)[upperIndex];
    return ch;
  }).join('');
}

function renderUnicodeTextTool() {
  const options = Object.entries(UNICODE_STYLES).map(([key, value]) => `<option value="${key}">${value.name}</option>`).join('');
  return `
    <div class="simple-tool-content" style="text-align: left;">
      ${renderToolIntro('Stylish Text / Unicode Converter', 'Convert regular text into Unicode styles you can paste into bios, captions, and readmes.')}
      <div class="utility-panel">
        <label class="utility-label">Style</label>
        <select id="utStyle" class="utility-select">${options}</select>
        <label class="utility-label">Text</label>
        <textarea id="utInput" class="utility-textarea" rows="4">Stylish fonts for designers</textarea>
        <div class="unicode-output" id="utOutput"></div>
        <button class="btn-primary" id="utCopyBtn" style="border-radius: 12px; padding: 12px 18px;">Copy Text</button>
      </div>
    </div>
  `;
}

function initUnicodeTextListeners() {
  const style = document.getElementById('utStyle');
  const input = document.getElementById('utInput');
  const output = document.getElementById('utOutput');
  const copyBtn = document.getElementById('utCopyBtn');
  if (!style) return;
  const update = () => output.textContent = convertUnicodeText(input.value, style.value);
  [style, input].forEach(el => el.addEventListener('input', update));
  copyBtn.addEventListener('click', () => copyToClipboard(output.textContent));
  update();
}

function renderFaviconGeneratorTool() {
  return `
    <div class="simple-tool-content" style="text-align: left;">
      ${renderToolIntro('Favicon Package Generator', 'Upload one square logo and generate browser favicons plus an Apple Touch Icon as a ZIP package.')}
      ${renderSimpleDropzone('fg', 'Drop a square logo', 'PNG, JPG, SVG, or WebP')}
      
      <div id="fgResult" style="display:none;">
        <div class="utility-panel">
          <div>
            <!-- Assets info & Copyable codes -->
            <div class="utility-stack" style="gap: 16px;">
              <div class="utility-file-name" id="fgFilename">logo.png</div>
              
              <div class="utility-label" style="text-transform:uppercase; font-size:11px; letter-spacing:0.05em; color:var(--text-3); margin-top:8px;">Generated Assets</div>
              <div class="favicon-package-grid">
                <div class="favicon-package-card">
                  <div class="favicon-package-preview-wrapper">
                    <img id="fgPreview16" src="" alt="16x16" style="width:16px; height:16px;">
                  </div>
                  <div class="favicon-package-card-title">favicon-16x16.png</div>
                  <div class="favicon-package-card-size">16 x 16 px</div>
                </div>
                
                <div class="favicon-package-card">
                  <div class="favicon-package-preview-wrapper">
                    <img id="fgPreview32" src="" alt="32x32" style="width:32px; height:32px;">
                  </div>
                  <div class="favicon-package-card-title">favicon-32x32.png</div>
                  <div class="favicon-package-card-size">32 x 32 px</div>
                </div>
                
                <div class="favicon-package-card">
                  <div class="favicon-package-preview-wrapper">
                    <img id="fgPreview180" src="" alt="180x180" style="width:40px; height:40px; border-radius: 8px;">
                  </div>
                  <div class="favicon-package-card-title">apple-touch-icon.png</div>
                  <div class="favicon-package-card-size">180 x 180 px</div>
                </div>
              </div>
              
              <div class="code-embed-container">
                <div class="code-embed-header">
                  <span class="code-embed-title">HTML Headers Snippet</span>
                  <button class="btn-copy-code" id="fgCopySnippetBtn">Copy Snippet</button>
                </div>
                <pre class="code-embed-pre" id="fgCodeSnippet" style="font-size:11px; max-height:100px; overflow-y:auto;"></pre>
              </div>
              <div class="tool-action-row">
                <button class="btn-primary" id="fgDownloadBtn" style="flex: 1; border-radius: 12px; padding: 12px 18px; display: flex; align-items: center; justify-content: center; gap: 8px;">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:16px;height:16px;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                  Download ZIP
                </button>
                <button id="fgResetBtn" style="border-radius: 12px; padding: 12px 18px; background: var(--bg-3); border: 1px solid var(--border); color: var(--text-2); cursor: pointer; transition: all var(--transition);">
                  New Image
                </button>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  `;
}

async function initFaviconGeneratorListeners() {
  const result = document.getElementById('fgResult');
  const filename = document.getElementById('fgFilename');
  const downloadBtn = document.getElementById('fgDownloadBtn');
  const resetBtn = document.getElementById('fgResetBtn');
  const copySnippetBtn = document.getElementById('fgCopySnippetBtn');
  
  const preview16 = document.getElementById('fgPreview16');
  const preview32 = document.getElementById('fgPreview32');
  const preview180 = document.getElementById('fgPreview180');
  const codeSnippet = document.getElementById('fgCodeSnippet');
  
  let currentImage = null;
  if (!result) return;

  const htmlSnippet = `<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">\n<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">\n<link rel="apple-touch-icon" href="/apple-touch-icon.png">`;

  wireDropzone('fg', async (file) => {
    if (!file || !file.type.startsWith('image/')) return;
    const loaded = await loadImageFromFile(file);
    currentImage = loaded.img;
    
    filename.textContent = file.name;
    
    preview16.src = loaded.url;
    preview32.src = loaded.url;
    preview180.src = loaded.url;
    
    codeSnippet.textContent = htmlSnippet;
    
    document.getElementById('fgDropzone').style.display = 'none';
    result.style.display = 'block';
  });

  copySnippetBtn.addEventListener('click', () => {
    copyToClipboard(htmlSnippet);
    
    const origHtml = copySnippetBtn.innerHTML;
    copySnippetBtn.innerHTML = 'Copied!';
    copySnippetBtn.style.background = '#4CAF50';
    copySnippetBtn.style.color = '#FFFFFF';
    
    setTimeout(() => {
      copySnippetBtn.innerHTML = origHtml;
      copySnippetBtn.style.background = '';
      copySnippetBtn.style.color = '';
    }, 1500);
  });

  downloadBtn.addEventListener('click', async () => {
    if (!currentImage) return;
    const zip = new JSZip();
    
    for (const size of [16, 32, 180]) {
      const canvas = document.createElement('canvas');
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(currentImage, 0, 0, size, size);
      const blob = await canvasToBlob(canvas, 'image/png');
      zip.file(size === 180 ? 'apple-touch-icon.png' : `favicon-${size}x${size}.png`, blob);
    }
    
    zip.file('favicon-html.txt', htmlSnippet);
    const blob = await zip.generateAsync({ type: 'blob' });
    downloadBlob(blob, 'favicon-package.zip');
  });

  resetBtn.addEventListener('click', () => {
    currentImage = null;
    result.style.display = 'none';
    document.getElementById('fgDropzone').style.display = 'flex';
  });
}

function renderDuotoneFilterTool() {
  return `
    <div class="simple-tool-content" style="text-align: left;">
      ${renderToolIntro('Duotone Photo Filter Generator', 'Upload a photo, choose dark and light tones, and export a Spotify-style duotone image.')}
      ${renderSimpleDropzone('df', 'Drop a photo', 'JPG, PNG, or WebP')}
      <div id="dfWorkspace" class="utility-panel" style="display:none;">
        <div class="utility-grid-two">
          <div class="utility-stack">
            <label class="utility-label">Dark color <input type="color" id="dfDark" value="#16213E"></label>
            <label class="utility-label">Light color <input type="color" id="dfLight" value="#00E676"></label>
            <button class="btn-primary" id="dfDownloadBtn" style="border-radius: 12px; padding: 12px 18px;">Download PNG</button>
          </div>
          <canvas id="dfCanvas" class="duotone-canvas"></canvas>
        </div>
      </div>
    </div>
  `;
}

async function initDuotoneFilterListeners() {
  const workspace = document.getElementById('dfWorkspace');
  const canvas = document.getElementById('dfCanvas');
  const dark = document.getElementById('dfDark');
  const light = document.getElementById('dfLight');
  const downloadBtn = document.getElementById('dfDownloadBtn');
  let sourceImage = null;
  if (!workspace) return;

  const applyDuotone = () => {
    if (!sourceImage) return;
    const maxWidth = 900;
    const scale = Math.min(1, maxWidth / sourceImage.naturalWidth);
    canvas.width = Math.round(sourceImage.naturalWidth * scale);
    canvas.height = Math.round(sourceImage.naturalHeight * scale);
    const ctx = canvas.getContext('2d');
    ctx.drawImage(sourceImage, 0, 0, canvas.width, canvas.height);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const darkRgb = hexToRgb(dark.value);
    const lightRgb = hexToRgb(light.value);
    for (let i = 0; i < imageData.data.length; i += 4) {
      const gray = (0.2126 * imageData.data[i] + 0.7152 * imageData.data[i + 1] + 0.0722 * imageData.data[i + 2]) / 255;
      const mixed = mixColor(darkRgb, lightRgb, gray);
      imageData.data[i] = mixed.r;
      imageData.data[i + 1] = mixed.g;
      imageData.data[i + 2] = mixed.b;
    }
    ctx.putImageData(imageData, 0, 0);
  };

  wireDropzone('df', async (file) => {
    if (!file || !file.type.startsWith('image/')) return;
    const loaded = await loadImageFromFile(file);
    sourceImage = loaded.img;
    workspace.style.display = 'block';
    applyDuotone();
  });
  [dark, light].forEach(el => el.addEventListener('input', applyDuotone));
  downloadBtn.addEventListener('click', async () => {
    const blob = await canvasToBlob(canvas, 'image/png');
    downloadBlob(blob, 'duotone-image.png');
  });
}

function renderLottieColorEditorTool() {
  return `
    <div class="simple-tool-content" style="text-align: left;">
      ${renderToolIntro('Lottie Animation Color Editor', 'Drop a Lottie JSON file, find color arrays, replace colors, and download the edited animation.')}
      ${renderSimpleDropzone('le', 'Drop a Lottie JSON file', 'Detects RGB color arrays inside JSON', '.json,application/json')}
      <div id="leWorkspace" class="utility-panel" style="display:none;">
        <div class="utility-file-name" id="leFilename"></div>
        <div id="leColors" class="lottie-color-list"></div>
        <button class="btn-primary" id="leDownloadBtn" style="border-radius: 12px; padding: 12px 18px;">Download Edited JSON</button>
      </div>
    </div>
  `;
}

function rgbArrayToHex(arr) {
  return rgbToHex(Math.round(arr[0] * 255), Math.round(arr[1] * 255), Math.round(arr[2] * 255));
}

function hexToLottieArray(hex, alpha = 1) {
  const rgb = hexToRgb(hex);
  return [rgb.r / 255, rgb.g / 255, rgb.b / 255, alpha];
}

function collectLottieColorRefs(node, refs = []) {
  if (!node || typeof node !== 'object') return refs;
  if (Array.isArray(node)) {
    const looksLikeColor = node.length >= 3 && node.length <= 4 && node.slice(0, 3).every(n => typeof n === 'number' && n >= 0 && n <= 1);
    if (looksLikeColor) refs.push(node);
    node.forEach(item => collectLottieColorRefs(item, refs));
  } else {
    Object.values(node).forEach(value => collectLottieColorRefs(value, refs));
  }
  return refs;
}

function initLottieColorEditorListeners() {
  const workspace = document.getElementById('leWorkspace');
  const filename = document.getElementById('leFilename');
  const colorsEl = document.getElementById('leColors');
  const downloadBtn = document.getElementById('leDownloadBtn');
  let lottieJson = null;
  let colorRefsByHex = new Map();
  if (!workspace) return;

  wireDropzone('le', async (file) => {
    if (!file) return;
    try {
      lottieJson = JSON.parse(await file.text());
      filename.textContent = file.name;
      const refs = collectLottieColorRefs(lottieJson);
      colorRefsByHex = refs.reduce((map, ref) => {
        const hex = rgbArrayToHex(ref);
        if (!map.has(hex)) map.set(hex, []);
        map.get(hex).push(ref);
        return map;
      }, new Map());
      colorsEl.innerHTML = [...colorRefsByHex.entries()].map(([hex, refs], idx) => `
        <label class="lottie-color-row">
          <span class="lottie-color-chip" style="background:${hex}"></span>
          <span>${hex}</span>
          <small>${refs.length} layer value${refs.length === 1 ? '' : 's'}</small>
          <input type="color" value="${hex}" data-lottie-color="${hex}" id="leColor${idx}">
        </label>
      `).join('') || '<div class="utility-file-name">No editable colors found.</div>';
      colorsEl.querySelectorAll('input[type="color"]').forEach(input => {
        input.addEventListener('input', () => {
          const originalHex = input.dataset.lottieColor;
          const next = hexToLottieArray(input.value);
          colorRefsByHex.get(originalHex).forEach(ref => {
            ref[0] = next[0]; ref[1] = next[1]; ref[2] = next[2];
            if (ref.length > 3) ref[3] = next[3];
          });
          input.closest('.lottie-color-row').querySelector('.lottie-color-chip').style.background = input.value;
        });
      });
      workspace.style.display = 'block';
    } catch (err) {
      showClipboardToast('Invalid Lottie JSON');
    }
  });

  downloadBtn.addEventListener('click', () => {
    if (!lottieJson) return;
    downloadBlob(new Blob([JSON.stringify(lottieJson, null, 2)], { type: 'application/json' }), 'edited-lottie.json');
  });
}

function initSpeedTestListeners() {
  const startBtn = document.getElementById('startSpeedTestBtn');
  const speedGaugeProgress = document.getElementById('speedGaugeProgress');
  const speedLiveVal = document.getElementById('speedLiveVal');
  const speedLiveUnit = document.getElementById('speedLiveUnit');
  const speedValPing = document.getElementById('speedValPing');
  const speedValDownload = document.getElementById('speedValDownload');
  const speedValUpload = document.getElementById('speedValUpload');
  
  const cardPing = document.getElementById('speedCardPing');
  const cardDownload = document.getElementById('speedCardDownload');
  const cardUpload = document.getElementById('speedCardUpload');
  
  const dotPing = document.getElementById('dotPing');
  const dotDownload = document.getElementById('dotDownload');
  const dotUpload = document.getElementById('dotUpload');
  
  const canvas = document.getElementById('speedWaveCanvas');
  
  if (!startBtn) return;
  
  let isRunning = false;
  let waveOffset = 0;
  let currentSpeed = 0;
  let testPhase = 'idle'; // 'idle', 'ping', 'download', 'complete'
  let animationId = null;

  // Wave Visualizer logic
  function animateWave() {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Wave parameters based on phase and currentSpeed
    let amplitude = 4;
    let frequency = 0.02;
    let speed = 0.05;
    let strokeColor = 'rgba(255, 111, 44, 0.4)'; // Orange accent default
    
    if (testPhase === 'ping') {
      amplitude = 6;
      frequency = 0.04;
      speed = 0.12;
      strokeColor = 'rgba(255, 111, 44, 0.6)';
    } else if (testPhase === 'download') {
      amplitude = Math.min(15, 6 + currentSpeed / 8);
      frequency = Math.min(0.08, 0.03 + currentSpeed / 500);
      speed = Math.min(0.25, 0.1 + currentSpeed / 200);
      strokeColor = 'rgba(255, 111, 44, 0.85)';
    } else if (testPhase === 'complete') {
      amplitude = 3;
      frequency = 0.015;
      speed = 0.03;
      strokeColor = 'rgba(16, 185, 129, 0.5)'; // Green accent for complete
    }
    
    ctx.beginPath();
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = 2.5;
    ctx.lineCap = 'round';
    
    for (let x = 0; x < canvas.width; x++) {
      const y = canvas.height / 2 + Math.sin(x * frequency + waveOffset) * amplitude;
      if (x === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.stroke();
    
    // Draw a secondary subtle background wave
    ctx.beginPath();
    ctx.strokeStyle = strokeColor.replace('0.85', '0.2').replace('0.6', '0.15').replace('0.5', '0.1').replace('0.4', '0.08');
    ctx.lineWidth = 1.5;
    for (let x = 0; x < canvas.width; x++) {
      const y = canvas.height / 2 + Math.cos(x * (frequency * 0.8) - waveOffset * 0.9) * (amplitude * 0.7);
      if (x === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.stroke();
    
    waveOffset += speed;
    animationId = requestAnimationFrame(animateWave);
  }
  
  // Start constant wave animation
  animateWave();
  
  function updateGauge(speedVal) {
    currentSpeed = speedVal;
    speedLiveVal.textContent = speedVal.toFixed(1);
    
    let maxVal = 100;
    if (speedVal > 100) maxVal = 500;
    if (speedVal > 500) maxVal = 1000;
    
    const offset = 400 - (400 * Math.min(speedVal, maxVal)) / maxVal;
    if (speedGaugeProgress) {
      speedGaugeProgress.style.strokeDashoffset = offset;
    }
  }
  
  function resetGauge() {
    currentSpeed = 0;
    speedLiveVal.textContent = "0.0";
    if (speedGaugeProgress) {
      speedGaugeProgress.style.strokeDashoffset = "400";
    }
  }
  
  function setPulseState(activeCard, dotEl) {
    [cardPing, cardDownload, cardUpload].forEach(c => {
      if (c) {
        c.style.borderColor = 'var(--border)';
        c.style.boxShadow = 'none';
      }
    });
    [dotPing, dotDownload, dotUpload].forEach(d => {
      if (d) {
        d.style.background = 'transparent';
        d.classList.remove('pulse-dot-active');
      }
    });
    
    if (activeCard && dotEl) {
      activeCard.style.borderColor = 'var(--accent)';
      activeCard.style.boxShadow = '0 4px 15px rgba(255, 111, 44, 0.15)';
      dotEl.style.background = 'var(--accent)';
      dotEl.classList.add('pulse-dot-active');
    }
  }

  async function startTest() {
    if (isRunning) return;
    isRunning = true;
    startBtn.disabled = true;
    startBtn.style.opacity = '0.7';
    startBtn.querySelector('span').textContent = 'Testing...';
    
    resetGauge();
    speedValPing.textContent = '0';
    speedValDownload.textContent = '0.0';
    if (speedValUpload) speedValUpload.textContent = '0.0';
    
    // Reset component visibility: show Ping and Download, hide Upload
    if (cardPing) cardPing.style.display = 'block';
    if (cardDownload) cardDownload.style.display = 'block';
    if (cardUpload) cardUpload.style.display = 'none';
    
    let pingScore = 0;
    let downloadScore = 0;
    let pingWorked = false;
    let downloadWorked = false;
    
    try {
      // 1. Latency (Ping) Phase
      testPhase = 'ping';
      speedLiveUnit.textContent = 'Ping';
      setPulseState(cardPing, dotPing);
      
      let pingInterval = setInterval(() => {
        speedLiveVal.textContent = Math.floor(20 + Math.random() * 30);
      }, 80);
      
      try {
        pingScore = await runPingTest();
        pingWorked = true;
        speedValPing.textContent = pingScore;
        speedLiveVal.textContent = pingScore;
        speedLiveUnit.textContent = 'ms';
      } catch (pingErr) {
        console.warn('Ping phase failed:', pingErr);
        if (cardPing) cardPing.style.display = 'none';
      } finally {
        clearInterval(pingInterval);
      }
      
      await new Promise(r => setTimeout(r, 600));
      
      // 2. Download Phase
      testPhase = 'download';
      speedLiveUnit.textContent = 'Mbps';
      setPulseState(cardDownload, dotDownload);
      resetGauge();
      
      try {
        downloadScore = await runDownloadTest((liveSpeed) => {
          updateGauge(liveSpeed);
        });
        downloadWorked = true;
        speedValDownload.textContent = downloadScore.toFixed(1);
        updateGauge(downloadScore);
      } catch (downloadErr) {
        console.warn('Download phase failed:', downloadErr);
        if (cardDownload) cardDownload.style.display = 'none';
        resetGauge();
      }
      
      await new Promise(r => setTimeout(r, 600));
      
      // Complete phase (upload is completely skipped)
      testPhase = 'complete';
      setPulseState(null, null);
      
      if (downloadWorked) {
        updateGauge(downloadScore);
        speedLiveVal.textContent = downloadScore.toFixed(1);
        speedLiveUnit.textContent = 'Mbps';
      } else if (pingWorked) {
        resetGauge();
        speedLiveVal.textContent = pingScore;
        speedLiveUnit.textContent = 'ms';
      } else {
        resetGauge();
        speedLiveVal.textContent = '0.0';
        speedLiveUnit.textContent = 'Mbps';
      }
      
    } catch (err) {
      console.error('Speed test error:', err);
      // Suppress showing error messages/toasts as requested
      testPhase = 'idle';
      setPulseState(null, null);
      resetGauge();
    } finally {
      isRunning = false;
      startBtn.disabled = false;
      startBtn.style.opacity = '1';
      startBtn.querySelector('span').textContent = 'Run Test Again';
    }
  }
  
  startBtn.addEventListener('click', startTest);
  
  async function runPingTest() {
    const cloudflareUrls = [
      'https://speed.cloudflare.com/cdn-cgi/trace',
      'https://speed.cloudflare.com/cdn-cgi/trace',
      'https://speed.cloudflare.com/cdn-cgi/trace',
      'https://speed.cloudflare.com/cdn-cgi/trace',
      'https://speed.cloudflare.com/cdn-cgi/trace'
    ];
    const localUrls = [
      window.location.origin + '/assets/logo.png',
      window.location.origin + '/assets/logo.png',
      window.location.origin + '/assets/logo.png',
      window.location.origin + '/assets/logo.png',
      window.location.origin + '/assets/logo.png'
    ];
    
    let useLocal = false;
    try {
      const res = await fetch(cloudflareUrls[0] + '?t=' + Math.random(), { cache: 'no-store', method: 'GET' });
      if (!res.ok) useLocal = true;
    } catch (e) {
      useLocal = true;
    }
    
    const targets = useLocal ? localUrls : cloudflareUrls;
    let times = [];
    let successCount = 0;
    
    for (let i = 0; i < targets.length; i++) {
      const start = performance.now();
      try {
        const res = await fetch(targets[i] + '?t=' + Math.random(), { cache: 'no-store', method: 'GET' });
        if (res.ok) {
          const end = performance.now();
          times.push(end - start);
          successCount++;
        }
      } catch (e) {
        // failed
      }
    }
    
    if (successCount === 0) {
      throw new Error('Ping failed');
    }
    
    const sum = times.reduce((a, b) => a + b, 0);
    return Math.round(sum / times.length);
  }
  
  async function runDownloadTest(onProgress) {
    const urls = [
      'https://speed.cloudflare.com/__down?bytes=5000000&t=' + Math.random(),
      window.location.origin + '/assets/sama.png?t=' + Math.random(),
      window.location.origin + '/assets/anek.png?t=' + Math.random()
    ];
    
    let lastError = null;
    for (const url of urls) {
      try {
        const response = await fetch(url, { cache: 'no-store' });
        if (!response.ok) continue;
        const reader = response.body.getReader();
        let loaded = 0;
        const startTime = performance.now();
        let speeds = [];
        
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          loaded += value.length;
          const elapsed = (performance.now() - startTime) / 1000;
          if (elapsed > 0) {
            const speedBps = loaded / elapsed;
            const speedMbps = (speedBps * 8) / 1000000;
            speeds.push(speedMbps);
            onProgress(speedMbps);
          }
        }
        const activeSpeeds = speeds.slice(Math.floor(speeds.length * 0.2));
        const sum = activeSpeeds.length > 0 ? activeSpeeds.reduce((a, b) => a + b, 0) : 1;
        return sum / (activeSpeeds.length || 1);
      } catch (err) {
        lastError = err;
        console.warn(`Download test failed for url ${url}:`, err);
      }
    }
    throw lastError || new Error('All download sources failed');
  }
  
  function runUploadTest(onProgress) {
    return Promise.resolve(0);
  }
}

function initToolsPageListeners(activeTool) {
  const toolId = activeTool || 'tints-shades';
  if (toolId === 'tints-shades') {
    initTintsShadesListeners();
  } else if (toolId === 'contrast-checker') {
    initContrastCheckerListeners();
  } else if (toolId === 'bg-remover') {
    initBgRemoverListeners();
  } else if (toolId === 'img-compressor') {
    initImgCompressorListeners();
  } else if (toolId === 'image-format-converter') {
    initImageFormatConverterListeners();
  } else if (toolId === 'palette-extractor') {
    initPaletteExtractorListeners();
  } else if (toolId === 'qr-generator') {
    initQrGeneratorListeners();
  } else if (toolId === 'font-pairing') {
    initFontPairingListeners();
  } else if (toolId === 'favicon-generator') {
    initFaviconGeneratorListeners();
  } else if (toolId === 'speed-test') {
    initSpeedTestListeners();
  }
}

function copyToClipboard(text) {
  if (!text) return;
  navigator.clipboard.writeText(text).then(() => {
    showClipboardToast('Copied to clipboard');
  }).catch(() => {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    showClipboardToast('Copied to clipboard');
  });
}

function showClipboardToast(message) {
  const existing = document.getElementById('clipboard-toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.id = 'clipboard-toast';
  toast.className = 'clipboard-toast';
  toast.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    <span>${message}</span>
  `;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('show');
  }, 10);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

// ============================================================
//  JOBS PAGE
//  Jobs are stored in Firestore: collection 'jobs'
//  Each job document fields:
//    title       : string  (e.g. "UI/UX Designer")
//    company     : string  (e.g. "Acme Studio")
//    location    : string  (e.g. "Remote · Kerala")
//    type        : string  (e.g. "Full-time" | "Freelance" | "Internship")
//    category    : string  (slug, e.g. "ui-ux")
//    description : string  (short 1-2 line desc)
//    link        : string  (apply URL)
//    logo        : string  (optional company logo URL)
//    featured    : boolean (optional, shows accent badge)
//    active      : boolean (set false to hide)
//    postedAt    : Firestore Timestamp / ISO date string
// ============================================================

const JOB_CATEGORIES = [
  { id: 'all',               label: 'All Jobs' },
  { id: 'ui-ux',             label: 'UI / UX Design' },
  { id: 'graphic-design',    label: 'Graphic Design' },
  { id: 'video-editing',     label: 'Video Editing' },
  { id: 'motion-graphics',   label: 'Motion Graphics' },
  { id: 'illustration',      label: 'Illustration' },
  { id: 'branding',          label: 'Branding' },
  { id: 'content-writing',   label: 'Content Writing' },
  { id: 'digital-marketing', label: 'Digital Marketing' },
  { id: 'production',        label: 'Production' },
  { id: '3d-cgi',            label: '3D Design / CGI' },
  { id: 'motion-design-vfx', label: 'Motion Design / VFX' },
  { id: 'packaging-print',   label: 'Packaging & Print' },
  { id: 'web-ui-dev',        label: 'Web & UI Developer' },
  { id: 'photography-shoot', label: 'Photography & Shoot' },
];

let _jobsData = [];
let _jobsUnsubscribe = null;
let _jobsActiveCategory = 'all';
let _jobsSearchQuery = '';

function renderJobsSkeleton() {
  const pills = Array(5).fill(0).map(() =>
    `<div class="shimmer" style="width:90px;height:34px;border-radius:99px;"></div>`
  ).join('');

  const cards = Array(6).fill(0).map(() => `
    <div class="job-card" style="pointer-events:none;">
      <div style="display:flex;gap:14px;align-items:flex-start;">
        <div class="shimmer" style="width:48px;height:48px;border-radius:12px;flex-shrink:0;"></div>
        <div style="flex:1;min-width:0;">
          <div class="shimmer" style="width:65%;height:18px;border-radius:4px;margin-bottom:8px;"></div>
          <div class="shimmer" style="width:45%;height:13px;border-radius:4px;margin-bottom:10px;"></div>
          <div style="display:flex;gap:8px;">
            <div class="shimmer" style="width:70px;height:24px;border-radius:99px;"></div>
            <div class="shimmer" style="width:80px;height:24px;border-radius:99px;"></div>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  return `
    <div class="page-wide">
      <div class="jobs-page-hero">
        <div class="shimmer" style="width:180px;height:26px;border-radius:99px;margin-bottom:18px;"></div>
        <div class="shimmer" style="width:70%;height:44px;border-radius:6px;margin-bottom:12px;"></div>
        <div class="shimmer" style="width:50%;height:16px;border-radius:4px;"></div>
      </div>
      <div class="jobs-filter-bar" style="gap:8px;">${pills}</div>
      <div class="jobs-grid">${cards}</div>
    </div>
  `;
}

function renderJobsPage() {
  return `
    <div class="page-wide" id="jobsPageRoot">
      <div class="jobs-page-hero">
        <h1 class="jobs-page-title">Find Your Next<br><span class="jobs-title-gradient">Creative Role</span></h1>
        <p class="jobs-page-subtitle">Curated listings for designers, editors, illustrators &amp; marketers — updated in real time.</p>
      </div>

      <div class="jobs-controls-row">
        <div class="jobs-search-wrapper">
          <svg class="jobs-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            id="jobsSearchInput"
            class="jobs-search-input"
            type="text"
            placeholder="Search jobs, companies, skills…"
            autocomplete="off"
            oninput="handleJobsSearch(this.value)"
          >
          <button class="jobs-search-clear" id="jobsSearchClear" onclick="clearJobsSearch()" style="display:none;" aria-label="Clear search">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <button class="jobs-post-btn-top" onclick="navigate('post-job')">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:14px;height:14px;">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          Post a Job
        </button>
      </div>

      <div class="jobs-filter-bar" id="jobsFilterBar">
        ${JOB_CATEGORIES.map(cat => `
          <button
            class="jobs-filter-pill ${cat.id === 'all' ? 'active' : ''}"
            data-cat="${cat.id}"
            onclick="setJobsCategory('${cat.id}')"
          >${cat.label}</button>
        `).join('')}
      </div>

      <div id="jobsGrid" class="jobs-grid">
        <div class="jobs-loading-state">
          <div class="jobs-loading-spinner"></div>
          <p>Loading jobs…</p>
        </div>
      </div>

      <div class="jobs-post-cta">
        <div class="jobs-post-cta-inner">
          <div class="jobs-post-cta-text">
            <strong>Hiring a designer?</strong>
            <span>Reach thousands of creative professionals — post a job for free.</span>
          </div>
          <button class="jobs-post-btn" onclick="navigate('post-job')">
            Post a Job
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- User submitted jobs section (shown last) -->
      <div id="userSubmittedJobsSection" class="user-submitted-jobs-section" style="display:none;">
        <div class="user-submitted-jobs-header">
          <h3 class="user-submitted-jobs-title">Your Job Postings (<span id="userSubmittedEmail"></span>)</h3>
          <p class="user-submitted-jobs-desc">Manage the job listings you have submitted. Only you can edit or delete them.</p>
        </div>
        <div id="userJobsList" class="user-jobs-list"></div>
      </div>
    </div>
  `;
}

function renderJobCard(job) {
  const postedDate = job.postedAt
    ? (() => {
        try {
          const d = job.postedAt.toDate ? job.postedAt.toDate() : new Date(job.postedAt);
          const diffDays = Math.floor((Date.now() - d.getTime()) / 86400000);
          if (diffDays === 0) return 'Today';
          if (diffDays === 1) return 'Yesterday';
          if (diffDays < 7) return `${diffDays}d ago`;
          if (diffDays < 30) return `${Math.floor(diffDays / 7)}w ago`;
          return d.toLocaleDateString('en-IN', { month: 'short', day: 'numeric' });
        } catch(e) { return ''; }
      })()
    : '';

  const catLabel = JOB_CATEGORIES.find(c => c.id === job.category)?.label || job.customCategoryLabel || job.category || '';

  const logoHtml = job.logo
    ? `<img src="${job.logo}" alt="${job.company || ''}" class="job-card-logo" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"><div class="job-card-logo-fallback" style="display:none">${(job.company || 'C').charAt(0).toUpperCase()}</div>`
    : `<div class="job-card-logo-fallback">${(job.company || 'C').charAt(0).toUpperCase()}</div>`;

  return `
    <div class="job-card ${job.featured ? 'job-card--featured' : ''}" onclick="openJobDetailModal('${job.id}')" id="job-${job.id}" style="cursor: pointer;">
      ${job.featured ? '<span class="job-card-featured-badge">⭐ Featured</span>' : ''}
      <div class="job-card-top">
        <div class="job-card-logo-wrap">
          ${logoHtml}
        </div>
        <div class="job-card-meta">
          <div class="job-card-title">${job.title || 'Untitled Role'}</div>
          <div class="job-card-company">${job.company || ''}</div>
        </div>
        <div class="job-card-arrow">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </div>
      </div>
      ${job.description ? `<p class="job-card-desc">${job.description}</p>` : ''}
      <div class="job-card-tags">
        ${job.type ? `<span class="job-tag job-tag--type">${job.type}</span>` : ''}
        ${job.location ? `<span class="job-tag job-tag--location">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:10px;height:10px;flex-shrink:0;">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          ${job.location}
        </span>` : ''}
        ${catLabel ? `<span class="job-tag job-tag--cat">${catLabel}</span>` : ''}
        ${postedDate ? `<span class="job-tag job-tag--date">${postedDate}</span>` : ''}
      </div>
    </div>
  `;
}

function renderJobsGrid(jobs) {
  const grid = document.getElementById('jobsGrid');
  if (!grid) return;

  if (jobs.length === 0) {
    grid.innerHTML = `
      <div class="jobs-empty-state">
        <div class="jobs-empty-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
          </svg>
        </div>
        <h3 class="jobs-empty-title">No jobs found</h3>
        <p class="jobs-empty-desc">Try a different category or search term. New jobs are added regularly!</p>
        <button class="jobs-empty-reset" onclick="resetJobsFilters()">Clear filters</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = jobs.map(j => renderJobCard(j)).join('');
}

function getFilteredJobs() {
  let jobs = [..._jobsData];

  if (_jobsActiveCategory && _jobsActiveCategory !== 'all') {
    jobs = jobs.filter(j => j.category === _jobsActiveCategory);
  }

  if (_jobsSearchQuery.trim()) {
    const q = _jobsSearchQuery.toLowerCase();
    jobs = jobs.filter(j =>
      (j.title || '').toLowerCase().includes(q) ||
      (j.company || '').toLowerCase().includes(q) ||
      (j.location || '').toLowerCase().includes(q) ||
      (j.description || '').toLowerCase().includes(q) ||
      (j.type || '').toLowerCase().includes(q)
    );
  }

  // Featured jobs first, then newest
  jobs.sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    const ta = a.postedAt ? (a.postedAt.toDate ? a.postedAt.toDate() : new Date(a.postedAt)) : new Date(0);
    const tb = b.postedAt ? (b.postedAt.toDate ? b.postedAt.toDate() : new Date(b.postedAt)) : new Date(0);
    return tb - ta;
  });

  return jobs;
}

function setJobsCategory(catId) {
  _jobsActiveCategory = catId;
  const pills = document.querySelectorAll('.jobs-filter-pill');
  pills.forEach(p => p.classList.toggle('active', p.dataset.cat === catId));
  renderJobsGrid(getFilteredJobs());
}

function handleJobsSearch(value) {
  _jobsSearchQuery = value;
  const clearBtn = document.getElementById('jobsSearchClear');
  if (clearBtn) clearBtn.style.display = value ? 'flex' : 'none';
  renderJobsGrid(getFilteredJobs());
}

function clearJobsSearch() {
  _jobsSearchQuery = '';
  const input = document.getElementById('jobsSearchInput');
  const clearBtn = document.getElementById('jobsSearchClear');
  if (input) input.value = '';
  if (clearBtn) clearBtn.style.display = 'none';
  renderJobsGrid(getFilteredJobs());
}

function resetJobsFilters() {
  _jobsActiveCategory = 'all';
  _jobsSearchQuery = '';
  const input = document.getElementById('jobsSearchInput');
  const clearBtn = document.getElementById('jobsSearchClear');
  if (input) input.value = '';
  if (clearBtn) clearBtn.style.display = 'none';
  const pills = document.querySelectorAll('.jobs-filter-pill');
  pills.forEach(p => p.classList.toggle('active', p.dataset.cat === 'all'));
  renderJobsGrid(getFilteredJobs());
}

function initJobsPage() {
  _jobsActiveCategory = 'all';
  _jobsSearchQuery = '';

  if (_jobsUnsubscribe) {
    _jobsUnsubscribe();
    _jobsUnsubscribe = null;
  }

  // Also unsubscribe admin subscriber if active
  if (_adminJobsUnsubscribe) {
    _adminJobsUnsubscribe();
    _adminJobsUnsubscribe = null;
  }

  const attachListener = (query) => {
    return query.onSnapshot(snapshot => {
      _jobsData = snapshot.docs
        .map(doc => ({ id: doc.id, ...doc.data() }))
        .filter(j => j.active !== false);
      renderJobsFilterBar();
      renderJobsGrid(getFilteredJobs());
      renderUserSubmittedJobs();
    }, err => {
      console.error('Jobs load failed:', err);
      const grid = document.getElementById('jobsGrid');
      if (grid) grid.innerHTML = `
        <div class="jobs-empty-state">
          <div class="jobs-empty-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
            </svg>
          </div>
          <h3 class="jobs-empty-title">No jobs right now</h3>
          <p class="jobs-empty-desc">Check back soon — new listings are added regularly!</p>
        </div>
      `;
    });
  };

  try {
    _jobsUnsubscribe = attachListener(db.collection('jobs'));
  } catch(e) {
    console.error('initJobsPage complete failure:', e);
  }
}

// ── JOBS ADMIN PANEL ──────────────────────────────────────────

let _adminJobsData = [];
let _adminJobsUnsubscribe = null;
let _adminEditingJobId = null;

function renderJobsAdminPage() {
  if (!currentUser) {
    return `
      <div class="page-wide jobs-admin-auth-container">
        <div class="jobs-admin-auth-card">
          <div class="jobs-admin-auth-icon">🔐</div>
          <h2>Admin Access Required</h2>
          <p>Sign in with your administrator Google account to post, edit, or delete jobs.</p>
          <button class="btn-submit" onclick="handleGoogleSignIn()">Sign In with Google</button>
          <div style="margin-top: 16px; text-align: center;">
            <a href="/jobs" class="jobs-admin-back-link" onclick="event.preventDefault(); navigate('jobs');">← Back to Jobs Board</a>
          </div>
        </div>
      </div>
    `;
  }

  if (currentUser.email !== SITE.adminEmail) {
    return `
      <div class="page-wide jobs-admin-auth-container">
        <div class="jobs-admin-auth-card">
          <div class="jobs-admin-auth-icon">⚠️</div>
          <h2>Access Denied</h2>
          <p>Signed in as <strong>${currentUser.email}</strong>. This account does not have administrator access to manage job postings.</p>
          <button class="btn-submit btn-submit--secondary" onclick="handleSignOut()">Sign Out</button>
          <div style="margin-top: 16px; text-align: center;">
            <a href="/jobs" class="jobs-admin-back-link" onclick="event.preventDefault(); navigate('jobs');">← Back to Jobs Board</a>
          </div>
        </div>
      </div>
    `;
  }

  return `
    <div class="page-wide" id="jobsAdminRoot">
      <div class="jobs-admin-header">
        <div>
          <div class="jobs-admin-badge">Admin Controls</div>
          <h1 class="jobs-admin-title">Jobs Admin Panel</h1>
          <p class="jobs-admin-subtitle">Create, edit, and delete job postings for Design School.</p>
        </div>
        <div class="jobs-admin-user-info">
          <span>Admin: <strong>${currentUser.email}</strong></span>
          <div class="jobs-admin-header-actions">
            <a href="/jobs" class="btn-jobs-admin-outline" onclick="event.preventDefault(); navigate('jobs');">View Jobs Board</a>
            <button class="btn-jobs-admin-outline btn-jobs-admin-outline--danger" onclick="handleSignOut()">Sign Out</button>
          </div>
        </div>
      </div>

      <div class="jobs-admin-layout">
        <!-- Form Side -->
        <div class="jobs-admin-form-card">
          <h3 id="formTitle">Create New Job</h3>
          <form id="jobForm" onsubmit="handleJobFormSubmit(event)" class="jobs-admin-form">
            <div class="form-group">
              <label for="jobTitle">Job Title <span class="required">*</span></label>
              <input type="text" id="jobTitle" required placeholder="e.g. UI/UX Designer">
            </div>
            
            <div class="form-group">
              <label for="jobCompany">Company <span class="required">*</span></label>
              <input type="text" id="jobCompany" required placeholder="e.g. Brandcraft Studio">
            </div>

            <div class="form-group">
              <label for="jobLogo">Company Logo URL <span class="optional">(Optional)</span></label>
              <input type="url" id="jobLogo" placeholder="e.g. https://domain.com/logo.png">
            </div>

            <div class="form-group">
              <label for="jobLocation">Location <span class="required">*</span></label>
              <input type="text" id="jobLocation" required placeholder="e.g. Remote / Kochi">
            </div>

            <div class="form-row-2">
              <div class="form-group">
                <label for="jobType">Job Type <span class="required">*</span></label>
                <select id="jobType" required>
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Freelance">Freelance</option>
                  <option value="Internship">Internship</option>
                  <option value="Contract">Contract</option>
                </select>
              </div>

              <div class="form-group">
                <label for="jobCategory">Category <span class="required">*</span></label>
                <select id="jobCategory" required onchange="handleCategoryChange(this, 'adminCustomCategoryGroup')">
                  ${JOB_CATEGORIES.filter(c => c.id !== 'all').map(c => `
                    <option value="${c.id}">${c.label}</option>
                  `).join('')}
                  <option value="custom">Other / Custom Category...</option>
                </select>
              </div>
            </div>

            <div class="form-group" id="adminCustomCategoryGroup" style="display:none;">
              <label for="jobCustomCategory">Custom Category Name <span class="required">*</span></label>
              <input type="text" id="jobCustomCategory" placeholder="e.g. 3D Animator">
            </div>

            <div class="form-group">
              <label for="jobLink">Apply URL / WhatsApp Link <span class="required">*</span></label>
              <input type="url" id="jobLink" required placeholder="e.g. https://linkedin.com/jobs/...">
            </div>

            <div class="form-row-2">
              <div class="form-group">
                <label for="jobSalary">Salary Range <span class="optional">(Optional)</span></label>
                <input type="text" id="jobSalary" placeholder="e.g. ₹30k - ₹50k / mo">
              </div>

              <div class="form-group">
                <label for="jobExperience">Experience Required <span class="optional">(Optional)</span></label>
                <input type="text" id="jobExperience" placeholder="e.g. 2+ years">
              </div>
            </div>

            <div class="form-group">
              <label for="jobSkills">Required Skills <span class="optional">(Optional - Comma separated)</span></label>
              <input type="text" id="jobSkills" placeholder="e.g. Figma, UI Design, Prototyping">
            </div>

            <div class="form-group">
              <label for="jobCompanyDesc">About the Company <span class="optional">(Optional)</span></label>
              <textarea id="jobCompanyDesc" rows="2" placeholder="Brief info about the company..."></textarea>
            </div>

            <div class="form-group">
              <label for="jobDescription">Job Description <span class="required">*</span></label>
              <textarea id="jobDescription" required rows="3" placeholder="Detailed key responsibilities, requirements, tools..."></textarea>
            </div>

            <div class="form-checkbox-group">
              <label class="checkbox-label">
                <input type="checkbox" id="jobFeatured">
                <span>⭐ Pin as Featured Job</span>
              </label>
              <label class="checkbox-label">
                <input type="checkbox" id="jobActive" checked>
                <span>🟢 Active (Visible on site)</span>
              </label>
            </div>

            <div class="form-actions">
              <button type="submit" id="btnSubmitForm" class="btn-submit">Publish Job</button>
              <button type="button" id="btnCancelEdit" class="btn-cancel" style="display:none;" onclick="cancelJobEdit()">Cancel Edit</button>
            </div>
          </form>
        </div>

        <!-- Listings Side -->
        <div class="jobs-admin-listings-card">
          <h3>All Job Postings</h3>
          <div id="adminJobsList" class="admin-jobs-list">
            <div class="jobs-loading-state">
              <div class="jobs-loading-spinner"></div>
              <p>Loading jobs database…</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function initJobsAdminPage() {
  _adminEditingJobId = null;

  if (_adminJobsUnsubscribe) {
    _adminJobsUnsubscribe();
    _adminJobsUnsubscribe = null;
  }

  // Also unsubscribe regular jobs snapshot to avoid double firing
  if (_jobsUnsubscribe) {
    _jobsUnsubscribe();
    _jobsUnsubscribe = null;
  }

  if (!currentUser || currentUser.email !== SITE.adminEmail) {
    return;
  }

  // Subscribe to all jobs
  const attachAdminListener = (query) => {
    return query.onSnapshot(snapshot => {
      _adminJobsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      _adminJobsData.sort((a, b) => {
        const ta = a.postedAt ? (a.postedAt.toDate ? a.postedAt.toDate() : new Date(a.postedAt)) : new Date(0);
        const tb = b.postedAt ? (b.postedAt.toDate ? b.postedAt.toDate() : new Date(b.postedAt)) : new Date(0);
        return tb - ta;
      });
      renderAdminJobsList();
    }, err => {
      console.error('Admin jobs load failed:', err);
      const listDiv = document.getElementById('adminJobsList');
      if (listDiv) {
        listDiv.innerHTML = `<div class="admin-jobs-error">Failed to load jobs database: ${err.message}</div>`;
      }
    });
  };

  try {
    _adminJobsUnsubscribe = attachAdminListener(db.collection('jobs'));
  } catch(e) {
    console.error('initJobsAdminPage complete failure:', e);
  }
}

function renderAdminJobsList() {
  const listDiv = document.getElementById('adminJobsList');
  if (!listDiv) return;

  if (_adminJobsData.length === 0) {
    listDiv.innerHTML = `<div class="admin-jobs-empty">No job postings found. Add your first job using the form!</div>`;
    return;
  }

  listDiv.innerHTML = _adminJobsData.map(job => {
    const isEditing = _adminEditingJobId === job.id;
    const catLabel = JOB_CATEGORIES.find(c => c.id === job.category)?.label || job.customCategoryLabel || job.category;
    
    const logoHtml = job.logo
      ? `<img src="${job.logo}" alt="${job.company || ''}" class="admin-job-logo" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"><div class="admin-job-logo-fallback" style="display:none">${(job.company || 'C').charAt(0).toUpperCase()}</div>`
      : `<div class="admin-job-logo-fallback">${(job.company || 'C').charAt(0).toUpperCase()}</div>`;

    return `
      <div class="admin-job-row ${isEditing ? 'admin-job-row--editing' : ''} ${job.active === false ? 'admin-job-row--inactive' : ''}" id="admin-job-${job.id}">
        <div class="admin-job-main">
          <div class="admin-job-logo-wrap">
            ${logoHtml}
          </div>
          <div class="admin-job-info">
            <div class="admin-job-title-wrap">
              <strong>${job.title || 'Untitled Role'}</strong>
              <span class="admin-job-company">${job.company || ''}</span>
            </div>
            <div class="admin-job-meta-badges">
              <span class="admin-badge admin-badge--cat">${catLabel}</span>
              <span class="admin-badge admin-badge--type">${job.type || ''}</span>
              <span class="admin-badge admin-badge--loc">${job.location || ''}</span>
              ${job.featured ? `<span class="admin-badge admin-badge--featured">⭐ Featured</span>` : ''}
              <span class="admin-badge admin-badge--status ${job.active !== false ? 'admin-badge--active' : 'admin-badge--hidden'}" 
                    onclick="toggleJobActiveState('${job.id}', ${job.active !== false})" 
                    title="Click to toggle visibility">
                ${job.active !== false ? '🟢 Active' : '⚪ Hidden'}
              </span>
            </div>
          </div>
        </div>
        <div class="admin-job-actions">
          <button class="btn-admin-action btn-admin-action--edit" onclick="editJob('${job.id}')" title="Edit Job">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
              <path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
            </svg>
            Edit
          </button>
          <button class="btn-admin-action btn-admin-action--delete" onclick="deleteJob('${job.id}')" title="Delete Job">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              <line x1="10" y1="11" x2="10" y2="17"></line>
              <line x1="14" y1="11" x2="14" y2="17"></line>
            </svg>
            Delete
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function toggleJobActiveState(jobId, currentActive) {
  db.collection('jobs').doc(jobId).update({
    active: !currentActive
  }).catch(err => {
    alert("Failed to toggle status: " + err.message);
  });
}

function editJob(jobId) {
  const job = _adminJobsData.find(j => j.id === jobId);
  if (!job) return;

  _adminEditingJobId = jobId;

  // Fill form
  document.getElementById('jobTitle').value = job.title || '';
  document.getElementById('jobCompany').value = job.company || '';
  document.getElementById('jobLogo').value = job.logo || '';
  document.getElementById('jobLocation').value = job.location || '';
  document.getElementById('jobType').value = job.type || 'Full-time';
  
  const isDefaultCategory = JOB_CATEGORIES.some(c => c.id === job.category);
  if (job.category && !isDefaultCategory) {
    document.getElementById('jobCategory').value = 'custom';
    const customGroup = document.getElementById('adminCustomCategoryGroup');
    if (customGroup) {
      customGroup.style.display = 'flex';
      const customInput = customGroup.querySelector('input');
      customInput.required = true;
      customInput.value = job.customCategoryLabel || '';
    }
  } else {
    document.getElementById('jobCategory').value = job.category || 'ui-ux';
    const customGroup = document.getElementById('adminCustomCategoryGroup');
    if (customGroup) {
      customGroup.style.display = 'none';
      const customInput = customGroup.querySelector('input');
      customInput.required = false;
      customInput.value = '';
    }
  }

  document.getElementById('jobLink').value = job.link || '';
  document.getElementById('jobSalary').value = job.salary || '';
  document.getElementById('jobExperience').value = job.experience || '';
  document.getElementById('jobSkills').value = job.skills || '';
  document.getElementById('jobCompanyDesc').value = job.companyDesc || '';
  document.getElementById('jobDescription').value = job.description || '';
  document.getElementById('jobFeatured').checked = !!job.featured;
  document.getElementById('jobActive').checked = job.active !== false;

  // Update headers/buttons
  document.getElementById('formTitle').innerText = "Edit Job Post";
  document.getElementById('btnSubmitForm').innerText = "Save Changes";
  document.getElementById('btnCancelEdit').style.display = "inline-block";

  // Re-render list to highlight editing row
  renderAdminJobsList();

  // Scroll to form on mobile
  document.getElementById('jobsAdminRoot').scrollIntoView({ behavior: 'smooth' });
}

function cancelJobEdit() {
  _adminEditingJobId = null;

  document.getElementById('jobForm').reset();
  document.getElementById('adminCustomCategoryGroup').style.display = 'none';
  document.getElementById('adminCustomCategoryGroup').querySelector('input').required = false;
  // Keep active default checked
  document.getElementById('jobActive').checked = true;

  document.getElementById('formTitle').innerText = "Create New Job";
  document.getElementById('btnSubmitForm').innerText = "Publish Job";
  document.getElementById('btnCancelEdit').style.display = "none";

  renderAdminJobsList();
}

function deleteJob(jobId) {
  const job = _adminJobsData.find(j => j.id === jobId);
  if (!job) return;

  const confirmed = confirm(`Are you sure you want to permanently delete "${job.title}" at "${job.company}"?`);
  if (!confirmed) return;

  db.collection('jobs').doc(jobId).delete().then(() => {
    if (_adminEditingJobId === jobId) {
      cancelJobEdit();
    }
  }).catch(err => {
    alert("Failed to delete job: " + err.message);
  });
}

function handleJobFormSubmit(event) {
  event.preventDefault();

  const title = document.getElementById('jobTitle').value.trim();
  const company = document.getElementById('jobCompany').value.trim();
  const logo = document.getElementById('jobLogo').value.trim();
  const location = document.getElementById('jobLocation').value.trim();
  const type = document.getElementById('jobType').value;
  const category = document.getElementById('jobCategory').value;
  const link = document.getElementById('jobLink').value.trim();
  const description = document.getElementById('jobDescription').value.trim();
  const featured = document.getElementById('jobFeatured').checked;
  const active = document.getElementById('jobActive').checked;

  const salary = document.getElementById('jobSalary').value.trim();
  const experience = document.getElementById('jobExperience').value.trim();
  const skills = document.getElementById('jobSkills').value.trim();
  const companyDesc = document.getElementById('jobCompanyDesc').value.trim();

  let finalCategory = category;
  let customCategoryLabel = '';
  if (category === 'custom') {
    const customText = document.getElementById('jobCustomCategory').value.trim();
    finalCategory = slugify(customText);
    customCategoryLabel = customText;
  }

  const jobData = {
    title,
    company,
    logo,
    location,
    type,
    category: finalCategory,
    customCategoryLabel,
    link,
    description,
    featured,
    active,
    salary,
    experience,
    skills,
    companyDesc
  };

  const btnSubmit = document.getElementById('btnSubmitForm');
  btnSubmit.disabled = true;
  const originalText = btnSubmit.innerText;
  btnSubmit.innerText = "Saving...";

  if (_adminEditingJobId) {
    db.collection('jobs').doc(_adminEditingJobId).update(jobData).then(() => {
      alert("Job listing updated!");
      cancelJobEdit();
    }).catch(err => {
      alert("Failed to update job: " + err.message);
      btnSubmit.disabled = false;
      btnSubmit.innerText = originalText;
    });
  } else {
    jobData.postedAt = firebase.firestore.FieldValue.serverTimestamp();
    db.collection('jobs').add(jobData).then(() => {
      alert("Job listing published!");
      document.getElementById('jobForm').reset();
      document.getElementById('adminCustomCategoryGroup').style.display = 'none';
      document.getElementById('adminCustomCategoryGroup').querySelector('input').required = false;
      document.getElementById('jobActive').checked = true;
      btnSubmit.disabled = false;
      btnSubmit.innerText = originalText;
    }).catch(err => {
      alert("Failed to publish job: " + err.message);
      btnSubmit.disabled = false;
      btnSubmit.innerText = originalText;
    });
  }
}

// ── CUSTOM CATEGORIES & USER SUBMISSIONS HELPERS ───────────────

function slugify(text) {
  return 'custom-' + text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

function handleCategoryChange(selectElem, customGroupId) {
  const customGroup = document.getElementById(customGroupId);
  if (customGroup) {
    if (selectElem.value === 'custom') {
      customGroup.style.display = 'flex';
      customGroup.querySelector('input').required = true;
    } else {
      customGroup.style.display = 'none';
      const input = customGroup.querySelector('input');
      input.required = false;
      input.value = '';
    }
  }
}

function getActiveCategories(jobsData) {
  const list = [...JOB_CATEGORIES];
  jobsData.forEach(job => {
    if (job.category && !list.some(c => c.id === job.category)) {
      const label = job.customCategoryLabel || job.category.replace('custom-', '').split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      list.push({ id: job.category, label });
    }
  });
  return list;
}

function renderJobsFilterBar() {
  const filterBar = document.getElementById('jobsFilterBar');
  if (!filterBar) return;
  const categories = getActiveCategories(_jobsData);
  filterBar.innerHTML = categories.map(cat => `
    <button
      class="jobs-filter-pill ${cat.id === _jobsActiveCategory ? 'active' : ''}"
      data-cat="${cat.id}"
      onclick="setJobsCategory('${cat.id}')"
    >${cat.label}</button>
  `).join('');
}

// ── FULLSCREEN JOB DETAILS MODAL ──────────────────────────────

function openJobDetailModal(jobId) {
  let job = _jobsData.find(j => j.id === jobId);
  if (!job) {
    job = _adminJobsData.find(j => j.id === jobId);
  }
  if (!job) return;

  const postedDate = job.postedAt
    ? (() => {
        try {
          const d = job.postedAt.toDate ? job.postedAt.toDate() : new Date(job.postedAt);
          return d.toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });
        } catch(e) { return ''; }
      })()
    : '';

  const catLabel = JOB_CATEGORIES.find(c => c.id === job.category)?.label || job.customCategoryLabel || job.category || '';
  
  const logoHtml = job.logo
    ? `<img src="${job.logo}" alt="${job.company || ''}" class="job-modal-logo" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"><div class="job-modal-logo-fallback" style="display:none">${(job.company || 'C').charAt(0).toUpperCase()}</div>`
    : `<div class="job-modal-logo-fallback">${(job.company || 'C').charAt(0).toUpperCase()}</div>`;

  const skillsHtml = job.skills
    ? job.skills.split(',').map(s => `<span class="job-detail-skill-tag">${s.trim()}</span>`).join('')
    : '';

  const overlay = document.createElement('div');
  overlay.id = 'jobDetailModal';
  overlay.className = 'job-details-modal-overlay';
  overlay.onclick = (e) => {
    if (e.target === overlay) closeJobDetailModal();
  };

  overlay.innerHTML = `
    <div class="job-details-modal-content">
      <button class="job-modal-close" onclick="closeJobDetailModal()" aria-label="Close details">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>

      <div class="job-modal-header">
        <div class="job-modal-logo-wrap">
          ${logoHtml}
        </div>
        <div class="job-modal-header-text">
          <h2 class="job-modal-title">${job.title || 'Untitled Role'}</h2>
          <div class="job-modal-company">${job.company || ''}</div>
        </div>
      </div>

      <div class="job-modal-badges">
        ${job.type ? `<span class="job-modal-badge job-modal-badge--type">${job.type}</span>` : ''}
        ${job.location ? `<span class="job-modal-badge job-modal-badge--location">📍 ${job.location}</span>` : ''}
        ${catLabel ? `<span class="job-modal-badge job-modal-badge--cat">${catLabel}</span>` : ''}
        ${postedDate ? `<span class="job-modal-badge job-modal-badge--date">📅 ${postedDate}</span>` : ''}
        ${job.featured ? `<span class="job-modal-badge job-modal-badge--featured">⭐ Featured</span>` : ''}
      </div>

      <div class="job-modal-grid">
        ${job.salary ? `
          <div class="job-modal-grid-card">
            <span class="job-modal-card-label">Salary Range</span>
            <span class="job-modal-card-value">${job.salary}</span>
          </div>
        ` : ''}
        ${job.experience ? `
          <div class="job-modal-grid-card">
            <span class="job-modal-card-label">Experience Required</span>
            <span class="job-modal-card-value">${job.experience}</span>
          </div>
        ` : ''}
      </div>

      ${skillsHtml ? `
        <div class="job-modal-section">
          <h3>Required Skills</h3>
          <div class="job-detail-skills-wrap">
            ${skillsHtml}
          </div>
        </div>
      ` : ''}

      ${job.companyDesc ? `
        <div class="job-modal-section">
          <h3>About the Company</h3>
          <p class="job-modal-text-block">${job.companyDesc}</p>
        </div>
      ` : ''}

      <div class="job-modal-section">
        <h3>Job Description</h3>
        <p class="job-modal-text-block">${job.description || ''}</p>
      </div>

      <div class="job-modal-footer">
        ${job.createdBy ? `<span class="job-modal-submitted-by">Posted by: <strong>${job.createdBy}</strong></span>` : ''}
        <a href="${job.link || '#'}" target="_blank" rel="noopener noreferrer" class="btn-job-apply-now">
          Apply Now
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);
  document.body.style.overflow = 'hidden';
}

function closeJobDetailModal() {
  const modal = document.getElementById('jobDetailModal');
  if (modal) modal.remove();
  if (!document.getElementById('postJobModal')) {
    document.body.style.overflow = '';
  }
}

// ── FULLSCREEN VISITOR JOB POSTING ────────────────────────────

function renderPostJobPage() {
  if (!currentUser) {
    return `
      <div class="page-wide post-job-container">
        <div class="jobs-admin-auth-card">
          <div class="jobs-admin-auth-icon">🔐</div>
          <h2>Sign In Required</h2>
          <p>You must sign in with your Google account to post a job listing and manage it later.</p>
          <button class="btn-submit" onclick="handleGoogleSignIn()">Sign In with Google</button>
          <div style="margin-top: 16px; text-align: center;">
            <a href="/jobs" class="jobs-admin-back-link" onclick="event.preventDefault(); navigate('jobs');">← Back to Jobs Board</a>
          </div>
        </div>
      </div>
    `;
  }

  return `
    <div class="page-wide post-job-container" id="postJobRoot">
      <div class="post-job-header">
        <a href="/jobs" class="post-job-back-link" onclick="event.preventDefault(); navigate('jobs');">← Back to Jobs Board</a>
        <h1 class="post-job-title" id="postJobPageTitle">Post a New Job</h1>
        <p class="post-job-subtitle">Reach thousands of creative professionals in our community.</p>
      </div>

      <div class="jobs-admin-form-card" style="max-width: 800px; margin: 0 auto 40px auto;">
        <form id="postJobForm" onsubmit="handlePostJobFormSubmit(event)" class="jobs-admin-form">
          <div class="form-group">
            <label for="postJobTitle">Job Title <span class="required">*</span></label>
            <input type="text" id="postJobTitle" required placeholder="e.g. Graphic Designer">
          </div>
          
          <div class="form-group">
            <label for="postJobCompany">Company Name <span class="required">*</span></label>
            <input type="text" id="postJobCompany" required placeholder="e.g. Kochi Design Studio">
          </div>

          <div class="form-group">
            <label for="postJobLogo">Company Logo URL <span class="optional">(Optional)</span></label>
            <input type="url" id="postJobLogo" placeholder="e.g. https://domain.com/logo.png">
          </div>

          <div class="form-group">
            <label for="postJobLocation">Location <span class="required">*</span></label>
            <input type="text" id="postJobLocation" required placeholder="e.g. Kochi (On-site) / Remote">
          </div>

          <div class="form-row-2">
            <div class="form-group">
              <label for="postJobType">Job Type <span class="required">*</span></label>
              <select id="postJobType" required>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Freelance">Freelance</option>
                <option value="Internship">Internship</option>
                <option value="Contract">Contract</option>
              </select>
            </div>

            <div class="form-group">
              <label for="postJobCategory">Category <span class="required">*</span></label>
              <select id="postJobCategory" required onchange="handleCategoryChange(this, 'postCustomCategoryGroup')">
                ${JOB_CATEGORIES.filter(c => c.id !== 'all').map(c => `
                  <option value="${c.id}">${c.label}</option>
                `).join('')}
                <option value="custom">Other / Custom Category...</option>
              </select>
            </div>
          </div>

          <div class="form-group" id="postCustomCategoryGroup" style="display: none;">
            <label for="postJobCustomCategory">Custom Category Name <span class="required">*</span></label>
            <input type="text" id="postJobCustomCategory" placeholder="e.g. 3D Animator">
          </div>

          <div class="form-group">
            <label for="postJobLink">Apply Link / URL <span class="required">*</span></label>
            <input type="url" id="postJobLink" required placeholder="e.g. LinkedIn Apply URL or WhatsApp link">
          </div>

          <div class="form-row-2">
            <div class="form-group">
              <label for="postJobSalary">Salary Range <span class="optional">(Optional)</span></label>
              <input type="text" id="postJobSalary" placeholder="e.g. ₹25k - ₹40k / mo">
            </div>

            <div class="form-group">
              <label for="postJobExperience">Experience Required <span class="optional">(Optional)</span></label>
              <input type="text" id="postJobExperience" placeholder="e.g. 1-2 years">
            </div>
          </div>

          <div class="form-group">
            <label for="postJobSkills">Required Skills <span class="optional">(Optional - Comma separated)</span></label>
            <input type="text" id="postJobSkills" placeholder="e.g. Photoshop, Premiere Pro, Color Grading">
          </div>

          <div class="form-group">
            <label for="postJobCompanyDesc">About the Company <span class="optional">(Optional)</span></label>
            <textarea id="postJobCompanyDesc" rows="2" placeholder="Brief info about your agency or studio..."></textarea>
          </div>

          <div class="form-group">
            <label for="postJobDescription">Job Description <span class="required">*</span></label>
            <textarea id="postJobDescription" required rows="6" placeholder="Detail the roles, responsibilities, work schedule, requirements..."></textarea>
          </div>

          <div class="form-actions">
            <button type="submit" id="btnSubmitPostForm" class="btn-submit">Submit Job Post</button>
            <button type="button" class="btn-cancel" onclick="navigate('jobs')">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  `;
}

function initPostJobPage() {
  const state = history.state || parseUrl();
  const editJobId = state.query;
  
  if (!currentUser) return;

  if (editJobId) {
    const titleEl = document.getElementById('postJobPageTitle');
    const submitBtn = document.getElementById('btnSubmitPostForm');
    if (titleEl) titleEl.innerText = "Edit Job Posting";
    if (submitBtn) submitBtn.innerText = "Save Changes";

    let job = _jobsData.find(j => j.id === editJobId);
    if (!job && _adminJobsData) {
      job = _adminJobsData.find(j => j.id === editJobId);
    }

    if (job) {
      populatePostJobForm(job);
    } else {
      db.collection('jobs').doc(editJobId).get().then(doc => {
        if (doc.exists) {
          const fetchedJob = { id: doc.id, ...doc.data() };
          if (fetchedJob.createdBy !== currentUser.email && currentUser.email !== SITE.adminEmail) {
            alert("Access Denied: You do not have permission to edit this job posting.");
            navigate('jobs');
            return;
          }
          populatePostJobForm(fetchedJob);
        } else {
          alert("Job posting not found.");
          navigate('jobs');
        }
      }).catch(err => {
        alert("Error loading job details: " + err.message);
        navigate('jobs');
      });
    }
  }
}

function populatePostJobForm(job) {
  const titleInput = document.getElementById('postJobTitle');
  const companyInput = document.getElementById('postJobCompany');
  const logoInput = document.getElementById('postJobLogo');
  const locationInput = document.getElementById('postJobLocation');
  const typeInput = document.getElementById('postJobType');
  const categoryInput = document.getElementById('postJobCategory');
  const customCatGroup = document.getElementById('postCustomCategoryGroup');
  const customCatInput = document.getElementById('postJobCustomCategory');
  const linkInput = document.getElementById('postJobLink');
  const salaryInput = document.getElementById('postJobSalary');
  const experienceInput = document.getElementById('postJobExperience');
  const skillsInput = document.getElementById('postJobSkills');
  const companyDescInput = document.getElementById('postJobCompanyDesc');
  const descInput = document.getElementById('postJobDescription');

  if (titleInput) titleInput.value = job.title || '';
  if (companyInput) companyInput.value = job.company || '';
  if (logoInput) logoInput.value = job.logo || '';
  if (locationInput) locationInput.value = job.location || '';
  if (typeInput) typeInput.value = job.type || 'Full-time';

  const categoryExists = JOB_CATEGORIES.some(c => c.id === job.category);
  if (categoryExists && job.category !== 'all') {
    if (categoryInput) categoryInput.value = job.category;
    if (customCatGroup) customCatGroup.style.display = 'none';
    if (customCatInput) {
      customCatInput.value = '';
      customCatInput.removeAttribute('required');
    }
  } else {
    if (categoryInput) categoryInput.value = 'custom';
    if (customCatGroup) customCatGroup.style.display = 'flex';
    if (customCatInput) {
      customCatInput.value = job.customCategoryLabel || job.category || '';
      customCatInput.setAttribute('required', 'required');
    }
  }

  if (linkInput) linkInput.value = job.link || '';
  if (salaryInput) salaryInput.value = job.salary || '';
  if (experienceInput) experienceInput.value = job.experience || '';
  if (skillsInput) skillsInput.value = job.skills || '';
  if (companyDescInput) companyDescInput.value = job.companyDesc || '';
  if (descInput) descInput.value = job.description || '';
}

function handlePostJobFormSubmit(event) {
  event.preventDefault();

  const title = document.getElementById('postJobTitle').value.trim();
  const company = document.getElementById('postJobCompany').value.trim();
  const logo = document.getElementById('postJobLogo').value.trim();
  const location = document.getElementById('postJobLocation').value.trim();
  const type = document.getElementById('postJobType').value;
  const category = document.getElementById('postJobCategory').value;
  const link = document.getElementById('postJobLink').value.trim();
  const salary = document.getElementById('postJobSalary').value.trim();
  const experience = document.getElementById('postJobExperience').value.trim();
  const skills = document.getElementById('postJobSkills').value.trim();
  const companyDesc = document.getElementById('postJobCompanyDesc').value.trim();
  const description = document.getElementById('postJobDescription').value.trim();

  let finalCategory = category;
  let customCategoryLabel = '';
  if (category === 'custom') {
    const customText = document.getElementById('postJobCustomCategory').value.trim();
    finalCategory = slugify(customText);
    customCategoryLabel = customText;
  }

  const jobData = {
    title,
    company,
    logo,
    location,
    type,
    category: finalCategory,
    customCategoryLabel,
    link,
    salary,
    experience,
    skills,
    companyDesc,
    description,
    active: true
  };

  const btnSubmit = document.getElementById('btnSubmitPostForm');
  btnSubmit.disabled = true;
  const originalText = btnSubmit.innerText;
  btnSubmit.innerText = "Submitting...";

  const state = history.state || parseUrl();
  const editJobId = state.query;

  if (editJobId) {
    db.collection('jobs').doc(editJobId).update(jobData).then(() => {
      alert("Job posting updated successfully!");
      navigate('jobs');
    }).catch(err => {
      alert("Failed to update job: " + err.message);
      btnSubmit.disabled = false;
      btnSubmit.innerText = originalText;
    });
  } else {
    jobData.postedAt = firebase.firestore.FieldValue.serverTimestamp();
    jobData.createdBy = currentUser.email;
    jobData.featured = false;

    db.collection('jobs').add(jobData).then(() => {
      alert("Job posting submitted successfully!");
      navigate('jobs');
    }).catch(err => {
      alert("Failed to submit job: " + err.message);
      btnSubmit.disabled = false;
      btnSubmit.innerText = originalText;
    });
  }
}

function editVisitorJob(jobId) {
  navigate('post-job', null, null, null, jobId);
}

function deleteVisitorJob(jobId) {
  const confirmed = confirm("Are you sure you want to permanently delete your job posting?");
  if (!confirmed) return;

  db.collection('jobs').doc(jobId).delete().then(() => {
    alert("Job posting deleted.");
  }).catch(err => {
    alert("Failed to delete job: " + err.message);
  });
}

function renderUserSubmittedJobs() {
  const section = document.getElementById('userSubmittedJobsSection');
  const list = document.getElementById('userJobsList');
  const emailSpan = document.getElementById('userSubmittedEmail');
  if (!section || !list) return;

  if (!currentUser) {
    section.style.display = 'none';
    return;
  }

  const userJobs = _jobsData.filter(j => j.createdBy === currentUser.email);
  
  if (userJobs.length === 0) {
    section.style.display = 'none';
    return;
  }

  if (emailSpan) emailSpan.innerText = currentUser.email;
  section.style.display = 'block';

  list.innerHTML = userJobs.map(job => {
    const catLabel = JOB_CATEGORIES.find(c => c.id === job.category)?.label || job.customCategoryLabel || job.category;
    
    return `
      <div class="user-job-row" id="user-job-${job.id}">
        <div class="user-job-details">
          <div class="user-job-title">${job.title || 'Untitled Role'}</div>
          <div class="user-job-company-row">
            <span>${job.company || ''}</span>
            <span class="user-job-dot">•</span>
            <span>${catLabel}</span>
            <span class="user-job-dot">•</span>
            <span>${job.type || ''}</span>
          </div>
        </div>
        <div class="user-job-actions">
          <button class="btn-user-action btn-user-action--edit" onclick="editVisitorJob('${job.id}')">
            Edit
          </button>
          <button class="btn-user-action btn-user-action--delete" onclick="deleteVisitorJob('${job.id}')">
            Delete
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function showWarningToast(message) {
  const existing = document.getElementById('warning-toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.id = 'warning-toast';
  toast.className = 'clipboard-toast';
  toast.style.borderColor = 'rgba(235, 94, 40, 0.4)';
  toast.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" stroke="#eb5e28" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width: 16px; height: 16px;">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
      <line x1="12" y1="9" x2="12" y2="13"></line>
      <line x1="12" y1="17" x2="12.01" y2="17"></line>
    </svg>
    <span style="color: #eb5e28;">${message}</span>
  `;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('show');
  }, 10);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}
