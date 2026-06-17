// ============================================================
//  DESIGN SCHOOL MALAYALAM — DATA FILE
//  Edit EVERYTHING here. app.js and style.css need no changes.
// ============================================================

// ── SITE META ────────────────────────────────────────────────
const SITE = {
  name: "Design School",
  tagline: "UI/UX ഡിസൈൻ മലയാളത്തിൽ പഠിക്കാം",
  description: "Learn UI/UX Design, Figma, Design Systems, and more",
  youtubeChannelId: "UCcBtRTuTjRU5krJoJBw7cAA",  // used to build subscribe + channel URLs
  youtubeChannel: "https://www.youtube.com/channel/UCcBtRTuTjRU5krJoJBw7cAA",
  whatsapp: "916238417389",                         // country code + number, no +
  whatsappMessage: "Hi! I'm interested in personal training from Design School Malayalam.",
  logo: "assets/logo.png",                          // path to logo image
  accentColor: "#FF6F2C",                           // used as CSS --accent
};

// ── HOME PAGE ────────────────────────────────────────────────
// Controls text/stats shown in the channel banner on the home page
const HOME = {
  stats: [
    { label: "Articles", valueKey: "articleCount" }, // dynamic from ARTICLES.length
    { label: "Topics", valueKey: "categoryCount" }, // dynamic from CATEGORIES.length
    // { label: "Price", value: "Free" },
  ],
  latestArticlesCount: 8,   // how many articles to show in "Latest Articles"
  browseSectionTitle: "Browse Topics",
  latestSectionTitle: "Latest Articles",
};

// ── NAV ──────────────────────────────────────────────────────
const NAV = {
  showCategoryLinks: true,  // show category names in the nav bar on desktop
  ytButtonLabel: "YouTube", // label on the top-right button
};

// ── CATEGORIES & SUBCATEGORIES ───────────────────────────────
const CATEGORIES = [
  {
    id: "ui-design",
    title: "UI Design",
    description: "Visual design principles for digital products",
    subcategories: [
      { id: "typography", title: "Typography", description: "Type hierarchy, font pairing, readability" },
      { id: "color-theory", title: "Color Theory", description: "Color psychology, palettes, contrast" },
      { id: "layout-design", title: "Layout Design", description: "Grid systems, spacing, composition" },
      { id: "mobile-ui", title: "Mobile UI", description: "iOS & Android UI patterns" },
      { id: "web-ui", title: "Web UI", description: "Web design patterns and components" },
      { id: "basics", title: "Basics", description: "Foundational UI/UX concepts and principles" },
    ],
  },
  {
    id: "ux-design",
    title: "UX Design",
    description: "User experience research and strategy",
    subcategories: [{ id: "user-research", title: "User Research", description: "Interviews, surveys, usability testing" },
      { id: "information-architecture", title: "Information Architecture", description: "Sitemaps, navigation, content structure" },
      { id: "wireframing", title: "Wireframing", description: "Low-fi wireframes and user flows" },
      { id: "prototyping", title: "Prototyping", description: "Interactive prototypes and testing" },
      { id: "ux-laws", title: "UX Laws", description: "Foundational laws and cognitive psychology" },
      { id: "ux-writing", title: "UX Writing", description: "Writing microcopy, error messages, and user guidance" },
      { id: "accessibility", title: "Accessibility", description: "Designing inclusive products for people of all abilities" }],
  },
  {
    id: "figma",
    title: "Figma",
    description: "Master the industry-standard design tool",
    subcategories: [
      { id: "figma-basics", title: "Figma Basics", description: "Interface, tools, shortcuts" },
      { id: "plugins", title: "Plugins", description: "Save time and energy at every stage of the design process" },
      { id: "components", title: "Components", description: "Building reusable component libraries" },
      { id: "auto-layout", title: "Auto Layout", description: "Responsive design with Auto Layout" },
      { id: "prototyping-figma", title: "Prototyping in Figma", description: "Animations, interactions, flows" },
      { id: "variables", title: "Variables & Tokens", description: "Design tokens and theming" },
    ],
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    description: "The art of visual communication",
    subcategories: [
      { id: "trends", title: "Trends", description: "Latest Design Trends" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Resources",
    description: "Curated catalogs of design tools, assets, books, and resources",
    subcategories: [
      { id: "design-utilities", title: "Design Tools", description: "Visual editors, vector tools, and prototyping platforms" },
      { id: "ux-utilities", title: "UX Tools", description: "UX research, testing, user flows, and dummy content" },
      { id: "ai-utilities", title: "AI Design Tools", description: "Generative AI, image generation, and design helpers" },
      { id: "website-builders", title: "Web Builders", description: "No-code site builders, CMS tools, and web app creators" },
      { id: "typography-fonts", title: "Typography", description: "Font libraries, pairings, foundries, and font managers" },
      { id: "color-palettes", title: "Color Tools", description: "Palette generators, contrast checkers, and color systems" },
      { id: "design-inspiration", title: "Inspiration", description: "UI design galleries, landing page showcases, and design vibes" },
      { id: "mockups-assets", title: "Mockups & Assets", description: "Mockup generators, UI kits, templates, and libraries" },
      { id: "icons-illustrations", title: "Icons & Graphics", description: "Free icon sets, graphics, and visual elements" },
      { id: "stock-media", title: "Stock Media", description: "Free stock photography, video libraries, and audio clips" },
      { id: "learning-education", title: "Learning", description: "Design courses, books, tutorials, and guidelines" },
      { id: "communities-jobs", title: "Community & Jobs", description: "Job boards, conferences, meetups, and designer networks" },
      { id: "podcasts-blogs", title: "Podcasts & Blogs", description: "Design podcasts, magazines, blogs, and creator content" },
      { id: "productivity-teams", title: "Productivity", description: "Workplace tools, task trackers, and collaboration helpers" }
    ],
  },
];

// ── ARTICLES ─────────────────────────────────────────────────
// ── ARTICLES REGISTRY & LOADING ──────────────────────────────
const ARTICLE_REGISTRY = {};
const ARTICLES = [];
const ARTICLE_IDS = [
  "best-no-code-website-builders",
  "best-color-inspiration-tools",
  "productivity-tools-for-design-and-product-teams",
  "best-design-podcasts",
  "best-design-blogs-and-magazines",
  "design-communities",
  "learn-ui-ux-design",
  "ui-web-design-inspiration-websites",
  "ai-design-tools",
  "best-ux-tools",
  "best-design-tools",
  "font-library-and-inspiration",
  "books-for-designers",
  "free-stock-images-videos",
  "best-mockup-sites",
  "free-open-source-icon-libraries",
  "best-3-malayalam-fonts",
  "every-ui-ux-concept-explained",
  "2026-graphic-design-trends",
  "best-free-fonts-commercial-use",
  "stretch-text-figma",
  "iconify-plugin",
  "displace-plugin",
  "icons8-background-remover-plugin",
  "text-on-path",
  "aesthetic-usability-effect",
  "choice-overload",
  "chunking",
  "cognitive-bias",
  "cognitive-load",
  "doherty-threshold",
  "fittss-law",
  "flow",
  "goal-gradient-effect",
  "hicks-law",
  "jakobs-law",
  "law-of-common-region",
  "law-of-proximity",
  "law-of-pragnanz",
  "law-of-similarity",
  "law-of-uniform-connectedness",
  "mental-model",
  "millers-law",
  "occams-razor",
  "paradox-of-the-active-user",
  "pareto-principle",
  "parkinsons-law",
  "peak-end-rule",
  "postels-law",
  "selective-attention",
  "serial-position-effect",
  "teslers-law",
  "von-restorff-effect",
  "working-memory",
  "zeigarnik-effect",
  "ikea-effect",
  "inclusive-design",
  "material-design",
  "qualitative-research",
  "quantitative-research",
  "responsive-design",
  "rule-of-thirds",
  "rapid-prototyping",
  "surveys",
  "typography",
  "user-interviews",
  "user-research-methods",
  "user-behavior",
  "ux-writing",
  "visual-cues",
  "adaptive-design",
  "accessibility",
  "behavioral-economics-for-ux",
  "serial-task-switching"
];

// ── PERSONAL TRAINING CARD ───────────────────────────────────
// Shown at the bottom of every article page
const TRAINING = {
  badge: "Personal Training",           // small label above the title
  title: "Learn UI/UX 1 on 1",
  description: "1 on 1 mentorship in UI/UX Design, Figma, and portfolio building. Learn at your own pace in Malayalam.",
  features: [
    "1 on 1 classes in Malayalam",
    "UX, UI, Figma & Portfolio",
    "Job ready curriculum",
    "Flexible timing"
  ],
  useWhatsapp: true,     // true = WhatsApp button | false = contact form
  formFields: ["name", "phone", "message"],  // "message" is optional; remove to hide
};
