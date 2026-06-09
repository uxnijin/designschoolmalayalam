/* ============================================================
   DESIGN SCHOOL MALAYALAM — APP.JS
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
const getArticlesBySubcat = subId => ARTICLES.filter(a => a.subcategoryId === subId);
const getArticlesByCategory = catId => ARTICLES.filter(a => a.categoryId === catId);
const countInCategory = catId => ARTICLES.filter(a => a.categoryId === catId).length;

// ── HISTORY / ROUTER ─────────────────────────────────────────
// Each navigate() call pushes a state; popstate restores it.

let _rendering = false; // guard against double-render during popstate

function stateKey(page, catId, subId, articleId) {
  return JSON.stringify({ page, catId: catId || null, subId: subId || null, articleId: articleId || null });
}

function navigate(page, catId, subId, articleId, { replace = false } = {}) {
  catId = catId || null;
  subId = subId || null;
  articleId = articleId || null;

  const state = { page, catId, subId, articleId };
  const url = buildUrl(page, catId, subId, articleId);

  if (replace) {
    history.replaceState(state, '', url);
  } else {
    history.pushState(state, '', url);
  }

  renderPage(state);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function buildUrl(page, catId, subId, articleId) {
  if (page === 'home') return '/';
  if (page === 'category') return `/#cat=${catId}`;
  if (page === 'subcategory') return `/#cat=${catId}&sub=${subId}`;
  if (page === 'article') return `/#cat=${catId}&sub=${subId}&art=${articleId}`;
  return '/';
}

function parseHash() {
  const hash = location.hash.replace('#', '');
  if (!hash) return { page: 'home', catId: null, subId: null, articleId: null };

  const params = {};
  hash.split('&').forEach(p => { const [k, v] = p.split('='); if (k && v) params[k] = decodeURIComponent(v); });

  if (params.art) return { page: 'article', catId: params.cat, subId: params.sub, articleId: params.art };
  if (params.sub) return { page: 'subcategory', catId: params.cat, subId: params.sub, articleId: null };
  if (params.cat) return { page: 'category', catId: params.cat, subId: null, articleId: null };
  return { page: 'home', catId: null, subId: null, articleId: null };
}

window.addEventListener('popstate', e => {
  const state = e.state || parseHash();
  renderPage(state);
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ── RENDER ───────────────────────────────────────────────────

function renderPage(state) {
  const { page, catId, subId, articleId } = state;
  const content = document.getElementById('content');


  switch (page) {
    case 'home': content.innerHTML = renderHome(); break;
    case 'category': content.innerHTML = renderCategoryPage(catId); break;
    case 'subcategory': content.innerHTML = renderSubcategoryPage(catId, subId); break;
    case 'article': content.innerHTML = renderArticlePage(catId, subId, articleId); break;
    default: content.innerHTML = renderHome();
  }

  updateNavActive(catId);
  initEmptyStateLottie();
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

    navLinks.innerHTML = CATEGORIES.map(cat =>
      `<button class="nav-link" data-cat-id="${cat.id}" onclick="navigate('category','${cat.id}')">${cat.title}</button>`
    ).join('');
  }
}

// ── HOME ─────────────────────────────────────────────────────

function renderHome() {
  const subscribeUrl = `https://www.youtube.com/channel/${SITE.youtubeChannelId}?sub_confirmation=1`;

  // dynamic stats
  const statsHtml = HOME.stats.map(s => {
    let val = s.value;
    if (s.valueKey === 'articleCount') val = ARTICLES.length;
    if (s.valueKey === 'categoryCount') val = CATEGORIES.length;
    return `<div class="channel-stat"><strong>${val}</strong> ${s.label}</div>`;
  }).join('');

  const latestArticles = ARTICLES.slice().reverse().slice(0, HOME.latestArticlesCount);

  return `
    <div class="channel-banner">
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
            <a href="${SITE.youtubeChannel}" target="_blank" rel="noopener" class="btn-visit-channel">Visit Channel</a>
          </div>
        </div>
      </div>
    </div>

    <div class="page-wide">
      <div class="section-title">${HOME.browseSectionTitle}</div>
      <div class="category-grid">
        ${CATEGORIES.map(cat => `
          <div class="category-card" onclick="navigate('category','${cat.id}')">
            <div class="category-title">${cat.title}</div>
            <div class="category-desc">${cat.description}</div>
            <div class="category-count">${countInCategory(cat.id)} articles</div>
          </div>
        `).join('')}
      </div>

      <div class="section-title-article" style="margin-top:12px">${HOME.latestSectionTitle}</div>
      <div class="section-divider"></div>
      ${renderArticleList(latestArticles)}
    </div>
  `;
}

// ── CATEGORY ─────────────────────────────────────────────────

function renderCategoryPage(catId) {
  const cat = getCategoryById(catId);
  if (!cat) return emptyPage('Category not found.');

  return `
    <div class="page-wide">
      ${renderBreadcrumb([
    { label: 'Home', action: `navigate('home')` },
    { label: cat.title }
  ])}

      <div class="section-title">${cat.title} — Subcategories</div>
      <div class="sub-grid">
        ${cat.subcategories.map(sub => `
          <div class="sub-card" onclick="navigate('subcategory','${catId}','${sub.id}')">
            <div class="sub-card-title">${sub.title}</div>
            <div class="sub-card-desc">${sub.description}</div>
          </div>
        `).join('')}
      </div>

      <div class="section-title-article" style="margin-top:8px">All Articles</div>
      <div class="section-divider"></div>
      ${renderArticleList(getArticlesByCategory(catId))}
    </div>
  `;
}

// ── SUBCATEGORY ───────────────────────────────────────────────

function renderSubcategoryPage(catId, subId) {
  const cat = getCategoryById(catId);
  const sub = getSubcategoryById(catId, subId);
  if (!cat || !sub) return emptyPage('Not found.');

  const articles = getArticlesBySubcat(subId);
  return `
    <div class="page-wide">
      ${renderBreadcrumb([
    { label: 'Home', action: `navigate('home')` },
    { label: cat.title, action: `navigate('category','${catId}')` },
    { label: sub.title }
  ])}

      <div class="section-title">${sub.title}</div>
      <div class="section-divider"></div>
      ${articles.length ? renderArticleList(articles) : `<div class="empty-state">
        <div class="empty-state-lottie"></div>
        <p class="empty-state-text">No articles yet. Coming soon.</p>
      </div>`}
    </div>
  `;
}

// ── ARTICLE LIST ─────────────────────────────────────────────

function renderArticleList(articles) {
  if (!articles.length) return `<div class="empty-state">
    <div class="empty-state-lottie"></div>
    <p class="empty-state-text">No articles yet.</p>
  </div>`;
  return `<div class="article-list">
    ${articles.map(a => {
    const cat = getCategoryById(a.categoryId);
    const thumb = getThumbUrl(a.youtubeUrl);
    return `
        <div class="article-item" onclick="navigate('article','${a.categoryId}','${a.subcategoryId}','${a.id}')">
          <div class="article-info">
            <div class="article-tag-sm">${cat?.title || ''}</div>
            <div class="article-title">${a.title}</div>
            <div class="article-desc">${a.description}</div>
            <div class="article-date">${formatDate(a.date)}</div>
          </div>
          <div class="article-thumb">
            ${thumb ? `<img src="${thumb}" alt="${a.title}" loading="lazy">` : `<div class="thumb-placeholder">▶</div>`}
          </div>
        </div>
      `;
  }).join('')}
  </div>`;
}

// ── ARTICLE PAGE ─────────────────────────────────────────────

function renderArticlePage(catId, subId, articleId) {
  const article = ARTICLES.find(a => a.id === articleId);
  if (!article) return emptyPage('Article not found.');

  const cat = getCategoryById(catId);
  const sub = getSubcategoryById(catId, subId);
  const embedUrl = getEmbedUrl(article.youtubeUrl);

  return `
    <div class="article-shell">
      <div class="article-reading">
        ${renderBreadcrumb([
    { label: 'Home', action: `navigate('home')` },
    { label: cat?.title, action: `navigate('category','${catId}')` },
    { label: sub?.title, action: `navigate('subcategory','${catId}','${subId}')` },
    { label: article.title }
  ])}

        <div class="article-header">
          <div class="article-tag">${cat?.title}</div>
          <h1>${article.title}</h1>
          <div class="article-meta-row">
            <span class="article-date-meta">${formatDate(article.date)}</span>
          </div>
        </div>

        <div class="article-body">${article.content}</div>

        ${embedUrl ? `
          <div class="yt-embed-section">
            <div class="yt-embed-wrapper">
              <iframe src="${embedUrl}" allowfullscreen loading="lazy" title="${article.title}"></iframe>
            </div>
          </div>
        ` : ''}
      </div>

      <div class="training-inline">
        ${renderTrainingCard()}
      </div>
    </div>
  `;
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
  const text = `Hi! I'm ${name}. Phone: ${phone}.${msg ? ' Message: ' + msg : ''} — via Design School Malayalam website`;
  window.open(`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
}

// ── HELPERS ──────────────────────────────────────────────────

function renderBreadcrumb(crumbs) {
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
  return `<div class="breadcrumb">${joined.join('')}</div>`;
}

function emptyPage(msg) {
  return `<div class="page-wide">
    <div class="empty-state">
      <div class="empty-state-lottie"></div>
      <p class="empty-state-text">${msg}</p>
    </div>
  </div>`;
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

// ── INIT ─────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  initNav();

  const navLogo = document.getElementById('navLogo');
  if (navLogo) {
    navLogo.addEventListener('click', () => navigate('home'));
  }
  const btnYT = document.getElementById('btnYT');
  if (btnYT) {
    btnYT.addEventListener('click', () => window.open(SITE.youtubeChannel, '_blank'));
  }

  // Restore state from URL hash on first load
  const initialState = history.state || parseHash();
  // Replace current history entry so back doesn't bounce out of site
  history.replaceState(initialState, '', buildUrl(
    initialState.page, initialState.catId, initialState.subId, initialState.articleId
  ));

  renderPage(initialState);
});
