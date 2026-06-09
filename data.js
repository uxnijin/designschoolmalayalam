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
      { id: "plugins", title: "Plugins", description: "Save time and energy at every stage of the design process" },
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
    title: "How to Stretch and Distort Text in Figma",
    description: "Are you having trouble creating beautiful typography designs by custom stretching text in Figma?",
    date: "2026-06-09",
    youtubeUrl: "https://youtu.be/kydnAwt-yvg?si=u8-1wXmuGHjsOwlm",
    tags: ["figma", "text", "design "],
    content: `
      <p>Have you tried stretching a text box in Figma, but only the box gets bigger while the text stays the same? By default, Figma doesn't let you distort text proportions. Here is the quick trick to fix that!</p>

    <h2>Flatten Your Text</h2>
    <p>To stretch text freely, you need to turn the letters into a vector shape. Follow these 3 easy steps:</p>
    
    <ol>
      <li><strong>Type your text:</strong> Use the Text tool (T) to type your word.</li>
      <li><strong>Flatten it:</strong> Right-click on your text and select <strong>Flatten</strong> (or press <strong>Ctrl + E</strong> on Windows / <strong>Cmd + E</strong> on Mac).</li>
      <li><strong>Stretch it:</strong> Now, just click and drag the outer edges of your text box. You can pull it horizontally or vertically to stretch it however you want!</li>
    </ol>
    <p><strong>Important Tip:</strong> Once you flatten text, you cannot type or change the words anymore.</p>

    <h2>Watch the Video Tutorial</h2>
    <p>Want to see exactly how it is done? Watch this tutorial video:</p>
    `,
  },
  {
    id: "iconify-plugin",
    subcategoryId: "plugins",
    categoryId: "figma",
    title: "Iconify Plugin",
    description: "Easily bring thousands of free vector icons directly into your design using the best plugin in Figma",
    date: "2026-09-01",
    youtubeUrl: "https://youtu.be/jWylMx5fyrI?si=0QH4W_dhCvnOmKY1",
    tags: ["figma", "icons", "plugin", "design "],
    content: `
      <p>Icons are an essential part of any UI/UX design project. If you are looking for a quick, free, and efficient way to add vector icons directly into your Figma canvas without leaving the app, the <strong>Iconify</strong> plugin is your best solution.</p>

    <p>In this quick tutorial, we will walk through how to install and use Iconify to speed up your design workflow.</p>

    <h2>Step 1: Open the Iconify Plugin</h2>
    <p>First, navigate to the actions panel in Figma. Go to the <strong>Plugins & Widgets</strong> section and search for <strong>"Iconify"</strong>. Select the very first result to open the plugin window.</p>

    <h2>Step 2: Browse or Search for Icons</h2>
    <p>Once the Iconify window opens, you will see a massive library of icons categorized by sets and menus. You can browse through them or use the search bar to find exactly what you need.</p>
    <ul>
      <li>For example, searching for <strong>"Home"</strong> brings up various styles, including filled and outlined variations.</li>
      <li>Searching for <strong>"Search"</strong> provides multiple unique visual styles to match your design system.</li>
    </ul>

    <h2>Step 3: Customize Icon Settings</h2>
    <p>Before adding an icon to your workspace, Iconify allows you to tweak its properties directly within the plugin panel:</p>
    <ul>
      <li><strong>Size:</strong> Adjust the width and height instantly.</li>
      <li><strong>Color:</strong> Change the hex code to match your active color palette.</li>
    </ul>

    <h2>Step 4: Import to Your Canvas</h2>
    <p>There are two quick ways to bring the icon into your file:</p>
    <ol>
      <li><strong>Drag and Drop:</strong> Simply click and hold the icon, then drag it directly onto your active artboard.</li>
      <li><strong>Import as Frame or Component:</strong> You can choose to import the icon natively as a standard <strong>Frame</strong> or directly as a reusable <strong>Component</strong>. If imported as a component, it will automatically show up clean and ready under your <strong>Assets</strong> panel.</li>
    </ol>
    <h2>Watch the Video Tutorial</h2>
    <p>Want to see exactly how it is done? Watch this tutorial video:</p>
    `,
  },
    {
    id: "displace-plugin",
    subcategoryId: "plugins",
    categoryId: "figma",
    title: "Displace Plugin",
    description: "Create stunning frosted glass and displacement effects in Figma using this powerful plugin. Generate unique patterns and textures instantly.",
    date: "2026-09-01",
    youtubeUrl: "https://youtu.be/-c1RT2nEo1M?si=i4kcVjar8anHe8D5",
    tags: ["figma", "displace", "plugin", "design ", "glass effect", "Pattern Glass", "frosted glass"],
    content: `
      <p>Creating complex textures like a pattern glass or frosted glass displacement effect usually requires dedicated photo editing software. However, with the right plugin, you can achieve this striking visual effect directly inside Figma with just a single click.</p>

    <p>In this guide, we will break down how to turn any standard image into a beautiful pattern glass graphic using the <strong>Displace</strong> plugin.</p>

    <h2>Step 1: Choose Your Base Image</h2>
    <p>Start by selecting the image on your Figma canvas that you want to apply the glass texture to. Ensure the layer is active before opening the plugin tool.</p>

    <h2>Step 2: Launch the Displace Plugin</h2>
    <p>Navigate to the actions panel at the bottom of your Figma workspace. Go into the <strong>Plugins</strong> section and search for <strong>"Displace"</strong>. Click on the plugin from the results list to initialize its settings interface.</p>

    <h2>Step 3: Generate or Customize the Glass Texture</h2>
    <p>When the Displace control panel opens, you have full control over how the visual refraction behaves:</p>
    <ul>
      <li><strong>The Random Button:</strong> If you want a fast, automated option, click the <strong>"Random"</strong> button. This will instantly shuffle and apply pre-made displacement maps, providing different variations of glass textures dynamically.</li>
      <li><strong>X & Y Shift:</strong> Manually adjust the horizontal (X Shift) and vertical (Y Shift) offsets to distort the underlying graphic precisely to your liking.</li>
      <li><strong>Scale:</strong> Modify the scaling slider underneath the shift controls to fine-tune the frequency and intensity of the patterned ridges.</li>
    </ul>

    <h2>Step 4: Bake the Displacement Effect</h2>
    <p>Once you are happy with the preview distribution inside the plugin window, simply click <strong>"Apply Effect"</strong>. The plugin will immediately render a brand new high-resolution version of your graphic directly onto your canvas.</p>

    <h2>Watch the Video Tutorial</h2>
    <p>See the Displace plugin in real-time action by following along with our quick workflow video guide below:</p>
    `,
  },
      {
    id: "icons8-background-remover-plugin",
    subcategoryId: "plugins",
    categoryId: "figma",
    title: "Icons8 Background Remover",
    description: "How to Remove Background in Figma for FREE (No API Key & No Limits)",
    date: "2026-09-01",
    youtubeUrl: "https://youtu.be/JstDIg--_kw?si=Dnw102Pw7FPd8oAJ",
    tags: ["figma", "background remover", "icons8", "design "],
    content: `
      <p>Figma recently introduced a native background removal tool, but it is locked behind their professional paid plans. If you are using a free Figma account, you don't need to purchase a premium subscription or deal with setting up third-party API keys just to clear out an image backdrop.</p>

    <p>In this quick tutorial, we will show you how to bypass the paid limitations and remove any image background flawlessly using a powerful, free plugin.</p>

    <h2>The Problem with Figma's Native Tool</h2>
    <p>When you select an image in Figma and see the built-in "Remove background" option at the bottom, clicking it will prompt you with a payment paywall stating it is exclusive to the Professional Plan. Fortunately, we can close that out and use an entirely free alternative.</p>

    <h2>Step 1: Locate the Right Free Plugin</h2>
    <p>Head over to the actions panel at the bottom of your Figma canvas. Navigate into the <strong>Plugins & Widgets</strong> section and search for <strong>"Icons8 Background Remover"</strong>. Once it pops up in the search results, click to launch it.</p>

    <h2>Step 2: Remove the Background in One Click</h2>
    <p>The interface is incredibly straightforward. To run the extraction, follow these quick steps:</p>
    <ol>
      <li>Select the target image layer on your active artboard.</li>
      <li>Open the plugin and click the single <strong>"Remove background"</strong> button.</li>
    </ol>

    <h2>Step 3: Let the Process Complete</h2>
    <p>A small loading progress indicator will appear at the bottom of your workspace. Give it a few seconds to analyze the subject boundaries. Once finished, the background will cleanly disappear, leaving your subject fully isolated!</p>
    <h2>Watch the Video Tutorial</h2>
    <p>See the Icons8 Background Remover plugin in real-time action by following along with our quick workflow video guide below:</p>
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
