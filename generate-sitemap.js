const fs = require('fs');
const path = require('path');
const vm = require('vm');

function generateSEO() {
  console.log('Generating sitemap.xml and robots.txt...');

  const dataPath = path.join(__dirname, 'data.js');
  if (!fs.existsSync(dataPath)) {
    console.error('Error: data.js not found in current directory.');
    process.exit(1);
  }

  // Set up VM context to parse data.js and articles
  const context = {
    ARTICLE_REGISTRY: {},
    ARTICLES: [],
  };
  vm.createContext(context);

  try {
    let dataContent = fs.readFileSync(dataPath, 'utf8');
    // Append bridge code to export block-scoped constants to globalThis so the host script can access them.
    dataContent += '\n; globalThis.SITE = SITE; globalThis.CATEGORIES = CATEGORIES; globalThis.ARTICLE_IDS = ARTICLE_IDS; globalThis.ARTICLE_REGISTRY = ARTICLE_REGISTRY;';
    vm.runInContext(dataContent, context);
  } catch (err) {
    console.error('Error executing data.js:', err);
    process.exit(1);
  }

  const { SITE, CATEGORIES, ARTICLE_IDS } = context;

  if (!SITE || !SITE.domain) {
    console.error('Error: SITE.domain is not defined in data.js.');
    process.exit(1);
  }

  let baseDomain = SITE.domain;
  if (baseDomain.endsWith('/')) {
    baseDomain = baseDomain.slice(0, -1);
  }

  // Load articles from article/ folder to get their subcategories and dates
  const articleDir = path.join(__dirname, 'article');
  if (fs.existsSync(articleDir) && Array.isArray(ARTICLE_IDS)) {
    ARTICLE_IDS.forEach(id => {
      const artPath = path.join(articleDir, `${id}.js`);
      if (fs.existsSync(artPath)) {
        try {
          let artContent = fs.readFileSync(artPath, 'utf8');
          vm.runInContext(artContent, context);
        } catch (err) {
          console.error(`Error executing article script ${id}.js:`, err);
        }
      } else {
        console.warn(`Warning: Article script not found: ${id}.js`);
      }
    });
  }

  const urls = [];

  // 1. Add Homepage
  urls.push({
    loc: `${baseDomain}/`,
    changefreq: 'daily',
    priority: '1.0'
  });

  // 2. Add Links Page
  const linksPath = path.join(__dirname, 'links.html');
  if (fs.existsSync(linksPath)) {
    urls.push({
      loc: `${baseDomain}/links.html`,
      changefreq: 'weekly',
      priority: '0.8'
    });
  }

  // 3. Add Categories
  if (Array.isArray(CATEGORIES)) {
    CATEGORIES.forEach(cat => {
      urls.push({
        loc: `${baseDomain}/category/${cat.id}`,
        changefreq: 'weekly',
        priority: '0.8'
      });

      // 4. Add Subcategories
      if (Array.isArray(cat.subcategories)) {
        cat.subcategories.forEach(sub => {
          urls.push({
            loc: `${baseDomain}/category/${cat.id}/${sub.id}`,
            changefreq: 'weekly',
            priority: '0.7'
          });
        });
      }
    });
  }

  // 5. Add Articles
  if (context.ARTICLE_REGISTRY) {
    Object.keys(context.ARTICLE_REGISTRY).forEach(id => {
      const art = context.ARTICLE_REGISTRY[id];
      if (art) {
        const catId = Array.isArray(art.categoryId) ? art.categoryId[0] : art.categoryId;
        const subId = Array.isArray(art.subcategoryId) ? art.subcategoryId[0] : art.subcategoryId;
        
        if (catId && subId) {
          urls.push({
            loc: `${baseDomain}/article/${id}`,
            lastmod: art.date || null,
            changefreq: 'monthly',
            priority: '0.6'
          });
        }
      }
    });
  }

  // Generate sitemap.xml content
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  urls.forEach(url => {
    xml += '  <url>\n';
    xml += `    <loc>${url.loc}</loc>\n`;
    if (url.lastmod) {
      xml += `    <lastmod>${url.lastmod}</lastmod>\n`;
    }
    xml += `    <changefreq>${url.changefreq}</changefreq>\n`;
    xml += `    <priority>${url.priority}</priority>\n`;
    xml += '  </url>\n';
  });

  xml += '</urlset>\n';

  fs.writeFileSync(path.join(__dirname, 'sitemap.xml'), xml, 'utf8');
  console.log(`Successfully generated sitemap.xml with ${urls.length} URLs.`);

  // Generate robots.txt content
  const robots = `User-agent: *
Allow: /

Sitemap: ${baseDomain}/sitemap.xml
`;

  fs.writeFileSync(path.join(__dirname, 'robots.txt'), robots, 'utf8');
  console.log('Successfully generated robots.txt.');
}

generateSEO();
