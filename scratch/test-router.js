const fs = require('fs');
const path = require('path');
const vm = require('vm');

function runTest() {
  const workspaceDir = path.dirname(__dirname);
  const dataPath = path.join(workspaceDir, 'data.js');
  const appPath = path.join(workspaceDir, 'app.js');
  const articleDir = path.join(workspaceDir, 'article');

  const dataCode = fs.readFileSync(dataPath, 'utf8');
  const appCode = fs.readFileSync(appPath, 'utf8');

  // Mock a complete browser context
  const context = {
    console: console,
    setTimeout: (cb) => cb(), // execute immediately
    clearTimeout: () => {},
    // DOM element mock
    document: {
      title: '',
      getElementById: (id) => {
        return {
          innerHTML: '',
          addEventListener: () => {},
          setAttribute: () => {},
          removeAttribute: () => {},
          remove: () => {}
        };
      },
      querySelectorAll: (selector) => {
        return [];
      },
      querySelector: (selector) => {
        return {
          setAttribute: () => {},
          removeAttribute: () => {},
          remove: () => {}
        };
      },
      createElement: (tag) => {
        return {
          id: '',
          type: '',
          text: '',
          setAttribute: () => {},
          removeAttribute: () => {},
          onload: () => {},
          onerror: () => {}
        };
      },
      head: {
        appendChild: (el) => {
          // Trigger onload manually for mock scripts
          if (el.src) {
            const artId = path.basename(el.src, '.js');
            const file = path.join(articleDir, `${artId}.js`);
            if (fs.existsSync(file)) {
              const content = fs.readFileSync(file, 'utf8');
              vm.runInContext(content, context);
            }
            if (el.onload) el.onload();
          }
        }
      },
      addEventListener: () => {}
    },
    window: {
      scrollTo: () => {},
      addEventListener: () => {},
      location: {
        origin: 'https://designschool.site',
        pathname: '/',
        search: '',
        hash: ''
      }
    },
    location: {
      origin: 'https://designschool.site',
      pathname: '/',
      search: '',
      hash: ''
    },
    history: {
      state: null,
      pushState: (state, title, url) => {
        const urlObj = new URL(url, 'https://designschool.site');
        context.location.pathname = urlObj.pathname;
        context.location.search = urlObj.search;
        context.location.hash = urlObj.hash;
      },
      replaceState: (state, title, url) => {
        const urlObj = new URL(url, 'https://designschool.site');
        context.location.pathname = urlObj.pathname;
        context.location.search = urlObj.search;
        context.location.hash = urlObj.hash;
      }
    },
    Lottie: {
      loadAnimation: () => {}
    },
    lottie: {
      loadAnimation: () => {}
    },
    URLSearchParams: URLSearchParams,
    URL: URL
  };

  vm.createContext(context);

  // Load data.js first
  vm.runInContext(dataCode, context);
  // Bridge exports
  vm.runInContext('globalThis.SITE = SITE; globalThis.CATEGORIES = CATEGORIES; globalThis.ARTICLE_IDS = ARTICLE_IDS; globalThis.ARTICLE_REGISTRY = ARTICLE_REGISTRY;', context);

  // Load app.js
  vm.runInContext(appCode, context);

  // Run DOMContentLoaded triggers manually
  console.log('Bootstrapping application...');
  // Manually invoke DOMContentLoaded handler if we can find it
  // Since we registered it, let's load articles
  vm.runInContext('loadArticles().then(() => { console.log("Loaded all mock articles."); })', context);

  const testNav = (urlPath) => {
    console.log(`\n--- NAVIGATING TO: ${urlPath} ---`);
    const urlObj = new URL(urlPath, 'https://designschool.site');
    context.location.pathname = urlObj.pathname;
    context.location.search = urlObj.search;
    context.location.hash = urlObj.hash;
    
    const parsedState = context.parseUrl();
    console.log('Parsed State:', JSON.stringify(parsedState));
    
    // Simulate render
    context.renderPage(parsedState);
    console.log('Rendering Succeeded!');
  };

  testNav('https://designschool.site/');
  testNav('https://designschool.site/category/ui-design');
  testNav('https://designschool.site/category/ui-design/typography');
  testNav('https://designschool.site/article/best-3-malayalam-fonts');
  testNav('https://designschool.site/article/best-no-code-website-builders');
  
  // Test click navigation
  console.log('\n--- TESTING INTERNAL CLICK NAVIGATION ---');
  // Navigate to home first
  testNav('https://designschool.site/');
  // Simulate clicking an article
  console.log('Clicking article: best-no-code-website-builders');
  vm.runInContext("navigate('article', ['tools', 'ui-design', 'ux-design'], ['website-builders', 'web-ui', 'prototyping'], 'best-no-code-website-builders')", context);
  console.log('Navigation completed without throwing!');
}

runTest();
