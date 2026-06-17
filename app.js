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

function getTrendingArticles() {
  const trendingIds = ['every-ui-ux-concept-explained', 'best-3-malayalam-fonts', '2026-graphic-design-trends'];
  const trending = ARTICLES.filter(a => trendingIds.includes(a.id));
  return trending.length ? trending : ARTICLES.slice(0, 3);
}

function getBestReads(categoryId, limit = 3) {
  return ARTICLES.filter(a => a.categoryId === categoryId).slice(0, limit);
}

function extractHeadings(html) {
  const regex = /<h([23])>(.*?)<\/h\1>/g;
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
  return html.replace(/<h([23])>(.*?)<\/h\1>/g, (match, level, text) => {
    return `<h${level} id="heading-${idCounter++}">${text}</h${level}>`;
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
    const hash = url.replace(/^\/\#/, '#');
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
  if (page === 'category') return `/#cat=${catId}`;
  if (page === 'subcategory') return `/#cat=${catId}&sub=${subId}`;
  if (page === 'article') return `/#cat=${catId}&sub=${subId}&art=${articleId}`;
  if (page === 'search') return `/#search=${encodeURIComponent(query)}`;
  return '/';
}

function parseHash() {
  const hash = location.hash.replace('#', '');
  if (!hash) return { page: 'home', catId: null, subId: null, articleId: null, query: null };

  const params = {};
  hash.split('&').forEach(p => { const [k, v] = p.split('='); if (k && v) params[k] = decodeURIComponent(v); });

  if (params.search) return { page: 'search', catId: null, subId: null, articleId: null, query: params.search };
  if (params.art) return { page: 'article', catId: params.cat, subId: params.sub, articleId: params.art, query: null };
  if (params.sub) return { page: 'subcategory', catId: params.cat, subId: params.sub, articleId: null, query: null };
  if (params.cat) return { page: 'category', catId: params.cat, subId: null, articleId: null, query: null };
  return { page: 'home', catId: null, subId: null, articleId: null, query: null };
}

window.addEventListener('popstate', e => {
  const state = e.state || parseHash();
  renderPage(state);
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

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
        case 'article': content.innerHTML = renderArticlePage(catId, subId, articleId); break;
        case 'search': content.innerHTML = renderSearchPage(query); break;
        default: content.innerHTML = renderHome();
      }
      initEmptyStateLottie();
      if (page === 'article') {
        initTOCActiveTracker();
      } else {
        cleanupScrollListeners();
      }
      activeRenderTimeout = null;
    }, 400);

    isInitialLoad = false;
  } else {
    // Render immediately for subsequent internal navigations since items are loaded
    switch (page) {
      case 'home': content.innerHTML = renderHome(); break;
      case 'category': content.innerHTML = renderCategoryPage(catId); break;
      case 'subcategory': content.innerHTML = renderSubcategoryPage(catId, subId); break;
      case 'article': content.innerHTML = renderArticlePage(catId, subId, articleId); break;
      case 'search': content.innerHTML = renderSearchPage(query); break;
      default: content.innerHTML = renderHome();
    }
    updateNavActive(catId);
    initEmptyStateLottie();
    if (page === 'article') {
      initTOCActiveTracker();
    } else {
      cleanupScrollListeners();
    }
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
        
        <div class="section-title">${cat ? cat.title : ''}</div>
        
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
    <div class="layout-container two-column">
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
        
        <div class="section-title">${sub ? sub.title : ''}</div>
        <div class="section-divider"></div>
        
        <div class="article-list">
          ${renderArticleListSkeleton(3)}
        </div>
      </main>
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
        
        <div class="article-header">
          <div class="article-tag">${cat?.title || ''}</div>
          <h1>${article ? article.title : ''}</h1>
          <div class="article-meta-row" style="padding-bottom: 14px; border-bottom: 1px solid var(--border);">
            <div class="shimmer" style="width: 100px; height: 12px; border-radius: 4px;"></div>
          </div>
        </div>
        
        <div class="shimmer" style="width: 100%; aspect-ratio: 16 / 9; border-radius: var(--radius); margin: 16px 0 32px 0;"></div>
        
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
            <a href="${SITE.youtubeChannel}" target="_blank" rel="noopener" class="btn-visit-channel">Visit Channel</a>
          </div>
        </div>
      </div>
    </div>

    <div class="page-wide">
      <div class="section-title stagger-item" style="--stagger: 1">${HOME.browseSectionTitle}</div>
      <div class="category-grid">
        ${CATEGORIES.map((cat, idx) => `
          <div class="category-card stagger-item" style="--stagger: ${2 + idx}" onclick="navigate('category','${cat.id}')">
            <div class="category-title">${cat.title}</div>
            <div class="category-desc">${cat.description}</div>
            <div class="category-count">${countInCategory(cat.id)} articles</div>
          </div>
        `).join('')}
      </div>

      <div class="section-title-article stagger-item" style="--stagger: ${2 + CATEGORIES.length}; margin-top:12px">${HOME.latestSectionTitle}</div>
      <div class="section-divider stagger-item" style="--stagger: ${3 + CATEGORIES.length}"></div>
      ${renderArticleList(latestArticles, 4 + CATEGORIES.length)}
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
            <a href="#cat=${catId}" class="sidebar-menu-item active" onclick="navigate('category','${catId}'); return false;">
              All Articles
            </a>
            ${cat.subcategories.map(sub => `
              <a href="#cat=${catId}&sub=${sub.id}" class="sidebar-menu-item" onclick="navigate('subcategory','${catId}','${sub.id}'); return false;">
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

        <div class="section-title stagger-item" style="--stagger: 2">${cat.title}</div>
        
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
  return `
    <div class="layout-container two-column">
      <!-- Left Column: Sibling subcategories on desktop -->
      <aside class="layout-left stagger-item" style="--stagger: 1">
        <div class="sidebar-widget">
          <h3 class="sidebar-title">Subcategories</h3>
          <nav class="sidebar-menu">
            <a href="#cat=${catId}" class="sidebar-menu-item" onclick="navigate('category','${catId}'); return false;">
              All Articles
            </a>
            ${cat.subcategories.map(s => `
              <a href="#cat=${catId}&sub=${s.id}" class="sidebar-menu-item ${s.id === subId ? 'active' : ''}" onclick="navigate('subcategory','${catId}','${s.id}'); return false;">
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

        <div class="section-title stagger-item" style="--stagger: 2">${sub.title}</div>
        <div class="section-divider stagger-item" style="--stagger: 3"></div>
        ${articles.length ? renderArticleList(articles, 4) : `<div class="empty-state">
          <div class="empty-state-lottie"></div>
          <p class="empty-state-text">No articles yet. Coming soon.</p>
        </div>`}
      </main>
    </div>
  `;
}

// ── ARTICLE LIST ─────────────────────────────────────────────

function renderArticleList(articles, startStaggerIdx = 0) {
  if (!articles.length) return `<div class="empty-state">
    <div class="empty-state-lottie"></div>
    <p class="empty-state-text">No articles yet.</p>
  </div>`;
  return `<div class="article-list">
    ${articles.map((a, idx) => {
    const cat = getCategoryById(a.categoryId);
    const thumb = a.thumbnail || getThumbUrl(a.youtubeUrl);
    return `
        <div class="article-item stagger-item" style="--stagger: ${startStaggerIdx + idx}" onclick="navigate('article','${a.categoryId}','${a.subcategoryId}','${a.id}')">
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

function renderArticlePage(catId, subId, articleId) {
  const article = ARTICLES.find(a => a.id === articleId);
  if (!article) return emptyPage('Article not found.');

  const cat = getCategoryById(catId);
  const sub = getSubcategoryById(catId, subId);
  const embedUrl = getEmbedUrl(article.youtubeUrl);
  const relatedArticles = getRelatedArticles(article, 3);

  const headings = extractHeadings(article.content);
  const bodyWithIds = injectHeadingIds(article.content);

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
              <a href="#" class="sidebar-menu-item" onclick="navigate('category','${catId}'); return false;">
                Back to ${cat?.title || 'Category'}
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

        <div class="article-header stagger-item" style="--stagger: 2">
          <div class="article-tag">${cat?.title}</div>
          <h1>${article.title}</h1>
          <div class="article-meta-row">
            <span class="article-date-meta">${formatDate(article.date)}</span>
          </div>
        </div>

        ${article.thumbnail && !embedUrl ? `
          <div class="article-hero-image stagger-item" style="--stagger: 3">
            <img src="${article.thumbnail}" alt="${article.title}" loading="lazy">
          </div>
        ` : ''}

        <div class="article-body stagger-item" style="--stagger: 4">${bodyWithIds}</div>

        ${embedUrl ? `
          <div class="yt-embed-section stagger-item" style="--stagger: 5">
            <div class="yt-embed-wrapper">
              <iframe src="${embedUrl}" allowfullscreen loading="lazy" title="${article.title}"></iframe>
            </div>
          </div>
        ` : ''}
      </main>

      <!-- Right Column: Related Articles on desktop -->
      <aside class="layout-right stagger-item" style="--stagger: 6">
        ${renderRelatedArticles(relatedArticles)}
      </aside>
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
            <a href="#" class="sidebar-menu-item" onclick="navigate('home'); return false;">
              Home
            </a>
            ${CATEGORIES.map(cat => `
              <a href="#cat=${cat.id}" class="sidebar-menu-item" onclick="navigate('category','${cat.id}'); return false;">
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
        
        ${results.length ? renderArticleList(results, 4) : `
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
        navigate('article', article.categoryId, article.subcategoryId, article.id);
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

// ── INIT ─────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initSearch();

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
  try {
    history.replaceState(initialState, '', buildUrl(
      initialState.page, initialState.catId, initialState.subId, initialState.articleId, initialState.query
    ));
  } catch (e) {
    console.warn('Initial history replaceState blocked (e.g. file:// protocol):', e);
  }

  renderPage(initialState);
});

