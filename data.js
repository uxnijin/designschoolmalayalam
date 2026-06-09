// ============================================================
//  DESIGN SCHOOL MALAYALAM — DATA FILE
//  Edit EVERYTHING here. app.js and style.css need no changes.
// ============================================================

// ── SITE META ────────────────────────────────────────────────
const SITE = {
  name: "Design School Malayalam",
  tagline: "UI/UX ഡിസൈൻ മലയാളത്തിൽ പഠിക്കാം",
  description: "Learn UI/UX Design, Figma, Design Systems, and more — completely in Malayalam.",
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
    { label: " ", value: "Malayalam" },
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
    ],
  },
  {
    id: "ux-design",
    title: "UX Design",
    description: "User experience research and strategy",
    subcategories: [
      { id: "user-research", title: "User Research", description: "Interviews, surveys, usability testing" },
      { id: "information-architecture", title: "Information Architecture", description: "Sitemaps, navigation, content structure" },
      { id: "wireframing", title: "Wireframing", description: "Low-fi wireframes and user flows" },
      { id: "prototyping", title: "Prototyping", description: "Interactive prototypes and testing" },
    ],
  },
  {
    id: "figma",
    title: "Figma",
    description: "Master the industry-standard design tool",
    subcategories: [
      { id: "figma-basics", title: "Figma Basics", description: "Interface, tools, shortcuts" },
      { id: "components", title: "Components", description: "Building reusable component libraries" },
      { id: "auto-layout", title: "Auto Layout", description: "Responsive design with Auto Layout" },
      { id: "prototyping-figma", title: "Prototyping in Figma", description: "Animations, interactions, flows" },
      { id: "variables", title: "Variables & Tokens", description: "Design tokens and theming" },
    ],
  },
];

// ── ARTICLES ─────────────────────────────────────────────────
// youtubeUrl  — paste full YouTube URL; thumbnail is auto-fetched
// content     — plain HTML; use <h2>, <h3>, <p>, <ul>, <ol>, <li>, <strong>, <code>
const ARTICLES = [
  {
    id: "stretch-text-figma",
    subcategoryId: "figma-basics",
    categoryId: "figma",
    title: "How to Stretch and Distort Text in Figma: A Beginner's Guide",
    description: "Are you having trouble creating beautiful typography designs by custom stretching text in Figma?",
    date: "2024-01-15",
    youtubeUrl: "https://youtu.be/kydnAwt-yvg?si=u8-1wXmuGHjsOwlm",
    tags: ["figma", "text", "design "],
    content: `
      <p>Have you ever tried to create a bold, stylized typography design in Figma by dragging the corners of a text box, only to realize that it just expands the bounding frame without actually changing the text size or shape?

If you are trying to stretch text horizontally or vertically for a trendy poster, a modern logo, or a unique UI section, you have likely run into this exact wall. By default, Figma keeps text responsive and editable, which prevents you from freely distorting its proportions.

In this quick tutorial, we will show you the exact, simple trick to bypass this limitation and stretch your text into any custom shape using the Flatten command.</p>

      <h2>Why Normal Text Won't Stretch in Figma</h2>
      <p>When you type something using the Text tool, Figma treats it as a text layer with distinct typography properties like font family, size, weight, and line height. </p>
      <p>Because of this structure, trying to click and drag the outer edges of the text box only scales the boundaries of the container. The characters themselves remain completely unchanged. To truly distort the shapes of your letters, you need to tell Figma to stop treating them as words and start treating them as custom shapes.</p>
      <h2>How to Stretch Text in Figma (Step-by-Step)</h2>
      <p>1.Create Your Text Layer:<br>Step 1.Select the Text tool (T), click anywhere on your canvas, and type out your word. Increase the font size and pick a bold font style so the stretching effect looks pronounced and intentional.2.Flatten the Text Layer:Step 2.Right-click directly onto your text layer. From the context menu that pops up, scroll down and click on Flatten (or use the keyboard shortcut Ctrl + E on Windows / Cmd + E on Mac).3.Stretch to Your Heart's Content:Step 3.Once flattened, click on the bounding box handles of your new shape. You can now pull the side handles to stretch it horizontally, or pull the top/bottom handles to distort it vertically without any restrictions.</p>
      <h2>The Golden Rule: Keeping a Backup</h2>
      <p>There is one massive catch you must keep in mind before using this trick: flattened text can no longer be edited.

Because Figma converts your text layers into a network of vector paths (points and lines), the software completely forgets what letters or words were originally there. You can change its colors, apply gradients, or tweak individual vector anchors, but you cannot type a new word into that layer if you change your mind later.

Pro SEO Tip: Always make a duplicate copy of your live text layer (press Alt or Option and drag) and hide it in your layers panel before you flatten it. If a client asks for a spelling fix later on, you won't have to rebuild your design from scratch! </p>
      <h2>Watch the Full Video Tutorial</h2>
      <p>Want to see this trick in action step-by-step? Watch our quick video breakdown below to master the flattening tool in under two minutes!</p>
    `,
  },
];

// ── PERSONAL TRAINING CARD ───────────────────────────────────
// Shown at the bottom of every article page
const TRAINING = {
  badge: "Personal Training",           // small label above the title
  title: "Learn UI/UX 1-on-1",
  description: "1-on-1 mentorship in UI/UX Design, Figma, and portfolio building. Learn at your own pace in Malayalam.",
  features: [
    "1-on-1 classes in Malayalam",
    "Figma + UX + Portfolio",
    "Job-ready curriculum",
    "Flexible timing",
  ],
  useWhatsapp: true,     // true = WhatsApp button | false = contact form
  formFields: ["name", "phone", "message"],  // "message" is optional; remove to hide
};
