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

  // Trigger UI update immediately if we are on dashboard, home page, or article page
  const state = history.state || parseUrl();
  if (state.page === 'dashboard' || state.page === 'home' || state.page === 'article') {
    renderPage(state);
  }

  if (user) {
    // User signed in - merge & sync progress in background
    syncLocalDataToCloud().then(() => {
      // Re-render after sync completes to reflect merged progress
      const currentState = history.state || parseUrl();
      if (currentState.page === 'dashboard' || currentState.page === 'home' || currentState.page === 'article') {
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
  } else {
    btnDashboardNav.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
        <polyline points="10 17 15 12 10 7"/>
        <line x1="15" y1="12" x2="3" y2="12"/>
      </svg>
      <span>Sign In</span>
    `;
    btnDashboardNav.title = "Sign In with Google";
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
    } catch(e) {}
    
    let localQuizScores = {};
    try {
      localQuizScores = JSON.parse(localStorage.getItem('ds_quiz_scores') || '{}');
    } catch(e) {}

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
  return '/';
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
        hashPath.startsWith('/dashboard') || hashPath.startsWith('dashboard')) {
        routePath = hashPath.startsWith('/') ? hashPath : '/' + hashPath;
      }
    }

    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('q') || searchParams.get('hl') || null;

    // Support old query-parameter-based hash URLs for backwards compatibility
    if (location.hash && !routePath.startsWith('/article/') && !routePath.startsWith('/category/') && !routePath.startsWith('/dashboard')) {
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
      return { page: 'dashboard', catId: null, subId: null, articleId: null, query: null };
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
        default: content.innerHTML = renderHome();
      }
      initEmptyStateLottie();
      if (page === 'article') {
        initTOCActiveTracker();
      } else {
        cleanupScrollListeners();
      }
      updateSEO(state);
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
      default: content.innerHTML = renderHome();
    }
    updateNavActive(catId);
    initEmptyStateLottie();
    if (page === 'article') {
      initTOCActiveTracker();
    } else {
      cleanupScrollListeners();
    }
    updateSEO(state);
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
  document.querySelectorAll('.nav-link').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.catId === activeCatId);
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

    navLinks.innerHTML = CATEGORIES.map(cat => {
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

function renderDashboardPage() {
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
        <div class="section-divider stagger-item" style="--stagger: 2.4"></div>
        
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
            <button class="btn-visit-channel" onclick="navigate('dashboard')">Learning Dashboard</button>
          </div>
        </div>
      </div>
    </div>

    <div class="page-wide">
      ${renderCompactLearningDashboard()}
      
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
  const completedList = getCompletedArticles();
  const catArticles = getArticlesByCategory(catId);
  const total = catArticles.length;
  if (total === 0) return '';
  const completed = catArticles.filter(a => completedList.includes(a.id)).length;
  const percent = Math.round((completed / total) * 100);

  return `
    <div class="banner-progress-container">
      <div class="banner-progress-info">
        <span>Course Progress: <strong>${completed}/${total} completed</strong> (${percent}%)</span>
      </div>
      <div class="banner-progress-track">
        <div class="banner-progress-fill" style="width: ${percent}%"></div>
      </div>
    </div>
  `;
}

function renderSubcategoryBannerProgress(subId) {
  const completedList = getCompletedArticles();
  const subArticles = getArticlesBySubcat(subId);
  const total = subArticles.length;
  if (total === 0) return '';
  const completed = subArticles.filter(a => completedList.includes(a.id)).length;
  const percent = Math.round((completed / total) * 100);

  return `
    <div class="banner-progress-container">
      <div class="banner-progress-info">
        <span>Topic Progress: <strong>${completed}/${total} completed</strong> (${percent}%)</span>
      </div>
      <div class="banner-progress-track">
        <div class="banner-progress-fill" style="width: ${percent}%"></div>
      </div>
    </div>
  `;
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
  const isDone = isArticleCompleted(articleId);
  return `
    <div class="completion-card stagger-item" style="--stagger: 5" id="completion-card-${articleId}">
      <div class="completion-card-inner">
        <div class="completion-info">
          <h4 class="completion-title">Finished reading this article?</h4>
          <p class="completion-desc">Mark it as completed to track your progress and unlock badges!</p>
        </div>
        <button class="btn-completion-toggle ${isDone ? 'completed' : ''}" onclick="handleArticleCompletionToggle('${articleId}', this)">
          <span class="completion-text">${isDone ? 'Completed' : 'Mark as Completed'}</span>
        </button>
      </div>
    </div>
  `;
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

// ── INIT ─────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', async () => {
  await loadArticles();
  initNav();
  initSearch();

  const navLogo = document.getElementById('navLogo');
  if (navLogo) {
    navLogo.addEventListener('click', () => navigate('home'));
  }
  const btnDashboardNav = document.getElementById('btnDashboardNav');
  if (btnDashboardNav) {
    btnDashboardNav.addEventListener('click', (e) => {
      e.preventDefault();
      if (currentUser) {
        navigate('dashboard');
      } else {
        handleGoogleSignIn();
      }
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
});

