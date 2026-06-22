// ============================================================
//  DESIGN SCHOOL — DATA FILE
//  Edit EVERYTHING here. app.js and style.css need no changes.
// ============================================================

// ── SITE META ────────────────────────────────────────────────
const SITE = {
  name: "Design School",
  tagline: "Learn Design",
  description: "Learn UI/UX Design, Figma, Design Systems, and more",
  domain: "https://designschool.site/", // Change this to your custom domain if needed (e.g. https://designschoolmalayalam.com)
  youtubeChannelId: "UCcBtRTuTjRU5krJoJBw7cAA",  // used to build subscribe + channel URLs
  youtubeChannel: "https://www.youtube.com/channel/UCcBtRTuTjRU5krJoJBw7cAA",
  whatsapp: "916238417389",                         // country code + number, no +
  whatsappMessage: "Hi! I'm interested in personal training from Design School.",
  logo: "assets/logo.png",                          // path to logo image
  accentColor: "#FF6F2C",                           // used as CSS --accent
  cloudflareWorkerUrl: "https://design-school-visitors.nijuvenghat550649.workers.dev",  // Cloudflare Worker URL for live visitor stats
  adminEmail:"nijuvenghat550649@gmail.com"       // ← YOUR Google email. Only this account can post/edit/delete jobs.
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
      { id: "principles", title: "Principles", description: "Core rules of layout, balance, and visual hierarchy" },
      { id: "branding", title: "Branding", description: "Logo design, style guides, and visual identity systems" },
      { id: "typography-gd", title: "Typography", description: "Type selection, pairing, history, and layout styling" },
      { id: "layout", title: "Layout & Composition", description: "Grid systems, composition, page structures" }
    ],
  },
  {
    id: "podcasts",
    title: "Podcasts",
    description: "Listen to design conversations and stories",
    subcategories: [
      { id: "conversational-ui", title: "Conversational UI", description: "Design principles for voice, chat, and AI interaction" }
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
  "figma-shortcuts",
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
  "serial-task-switching",
  "conversational-design-and-ui",
  "getting-hired-in-ux",
  "product-design-wisdom",
  "design-process-is-dead",
  "design-education-and-careers",
  "improve-as-ux-designer",
  "from-zero-clients-to-global-brands",
  "cracking-ux-whiteboarding",
  "become-ux-designer-at-google",
  "ux-designer-google-salary-roadmap",
  "dark-patterns-in-ux",
  "design-systems",
  "color-psychology-in-ux",
  "gestalt-principles",
  "microinteractions",
  "design-tokens-bridge",
  "user-journey-mapping",
  "card-sorting-ia",
  "visual-hierarchy-ui",
  "heuristic-evaluation",
  "figma-auto-layout-tips",
  "dark-mode-design",
  "figma-smart-animate",
  "sticky-headers-ux",
  "nav-drawer-vs-bottom-nav",
  "focus-groups-ux",
  "sitemaps-planning",
  "figma-component-properties",
  "figma-variables-prototyping",
  "touch-targets-design",
  "accessible-forms-ux",
  "principles-of-graphic-design",
  "grid-systems-graphic-design",
  "logo-design-fundamentals",
  "history-of-bauhaus",
  "vector-vs-raster",
  "brand-style-guides",
  "swiss-design-style",
  "color-psychology-branding",
  "best-illustration-websites",
  "best-3d-design-tools",
  "best-chrome-extensions-designers",
  "best-design-portfolio-builders",
  "best-user-testing-platforms",
  "best-font-pairing-tools"
];

// ── PERSONAL TRAINING CARD ───────────────────────────────────
// Shown at the bottom of every article page
const TRAINING = {
  badge: "Personal Training",           // small label above the title
  title: "Learn UI/UX 1 on 1",
  description: "1 on 1 mentorship in UI/UX Design, Figma, and portfolio building. Learn at your own pace.",
  features: [
    "1 on 1 classes",
    "UX, UI, Figma & Portfolio",
    "Job ready curriculum",
    "Flexible timing"
  ],
  useWhatsapp: true,     // true = WhatsApp button | false = contact form
  formFields: ["name", "phone", "message"],  // "message" is optional; remove to hide
};

// ── QUIZZES ──────────────────────────────────────────────────
// Quick interactive quiz questions for articles (English only)
const QUIZZES = {
  "aesthetic-usability-effect": {
    question: "What is the core principle of the Aesthetic Usability Effect?",
    options: [
      "Users perceive aesthetically pleasing designs as designs that are more usable.",
      "Beautiful designs are always cheaper to produce.",
      "Aesthetics are secondary to technical code performance.",
      "Visual style does not impact user tolerance for usability issues."
    ],
    answerIndex: 0,
    explanation: "The Aesthetic Usability Effect states that users tend to believe attractive products work better and are easier to use, even if they contain minor usability flaws."
  },
  "fittss-law": {
    question: "According to Fitts's Law, how should primary interactive elements (like buttons) be designed?",
    options: [
      "They should be small and placed far away from each other to prevent accidental clicks.",
      "They should be large and positioned close to the user's expected cursor or finger location.",
      "They should always be colored red for maximum visibility.",
      "They should be hidden until the user hovers over the active screen zone."
    ],
    answerIndex: 1,
    explanation: "Fitts's Law dictates that the time to acquire a target is a function of the distance to and size of the target. Making targets large and near minimizes user effort."
  },
  "hicks-law": {
    question: "What does Hick's Law describe regarding user decision-making?",
    options: [
      "The time it takes to choose a font based on read times.",
      "The time it takes to make a decision increases with the number and complexity of choices.",
      "The density of images required on a landing page.",
      "The color contrast ratio necessary for accessibility."
    ],
    answerIndex: 1,
    explanation: "Hick's Law states that decision time increases logarithmically with the number of options presented. Reducing choices speeds up user tasks."
  },
  "jakobs-law": {
    question: "According to Jakob's Law, what kind of behavior do users expect from your website?",
    options: [
      "They expect it to work similarly to other websites they already know.",
      "They expect a highly experimental layout that breaks all common conventions.",
      "They expect the website to have no navigation options.",
      "They expect custom scrollbars and complex transitions on every click."
    ],
    answerIndex: 0,
    explanation: "Jakob's Law states that users spend most of their time on other sites, meaning they prefer your site to function in a familiar, conventional way."
  },
  "millers-law": {
    question: "According to Miller's Law, what is the capacity of an average person's working memory?",
    options: [
      "2 ± 1 items",
      "7 ± 2 items",
      "15 ± 3 items",
      "25 ± 5 items"
    ],
    answerIndex: 1,
    explanation: "Miller's Law suggests that the average human working memory can hold roughly 7 (plus or minus 2) chunks of information at any given time."
  },
  "cognitive-bias": {
    question: "What is a cognitive bias in the context of UX design?",
    options: [
      "A systematic pattern of deviation from norm or rationality in judgment.",
      "A coding error that affects website page speed.",
      "The color contrast preference of an individual user.",
      "A specific typography style chosen by the designer."
    ],
    answerIndex: 0,
    explanation: "Cognitive biases are mental shortcuts or systematic deviations in thinking that designers can understand to build more intuitive and supportive experiences."
  },
  "cognitive-load": {
    question: "How can designers reduce extraneous cognitive load for users?",
    options: [
      "By adding more design embellishments and multi-layered features.",
      "By using simple layouts, familiar icons, and eliminating unnecessary visual elements.",
      "By requiring users to read longer instructions before completing actions.",
      "By designing multi-step verification prompts on every action."
    ],
    answerIndex: 1,
    explanation: "Extraneous cognitive load is mental processing power wasted by poor layout, structure, or interface noise. Simplifying UI details keeps users focused on their goal."
  },
  "doherty-threshold": {
    question: "What does the Doherty Threshold law specify about system response times?",
    options: [
      "System response should happen within 400 milliseconds to keep user attention active.",
      "A website should always take at least 2 seconds to load so users can read the branding.",
      "Users prefer systems that have randomized response times.",
      "The ideal system response time is completely dependent on screen size."
    ],
    answerIndex: 0,
    explanation: "The Doherty Threshold dictates that productivity skyrockets when a computer and its users interact at a pace that ensures neither has to wait on the other (under 400ms)."
  },
  "ikea-effect": {
    question: "What does the IKEA Effect say about user relationship to products?",
    options: [
      "Users value products more highly if they played a role in building or customizing them.",
      "Users prefer products that look cheap and minimalist.",
      "Users prefer ready-made items over customizable solutions.",
      "Visual clutter makes a product feel more customized."
    ],
    answerIndex: 0,
    explanation: "The IKEA Effect is a cognitive bias in which consumers place a disproportionately high value on products they partially created or configured."
  },
  "accessibility": {
    question: "Which of the following is a primary rule for visual accessibility (A11y) in UX?",
    options: [
      "Using color as the *only* visual indicator for errors.",
      "Ensuring sufficient text-to-background color contrast (WCAG standards).",
      "Avoiding alt tags on decorative images.",
      "Using small, stylized fonts for all body copy."
    ],
    answerIndex: 1,
    explanation: "Ensuring proper contrast ratios (e.g. 4.5:1 for normal text) is a fundamental WCAG requirement for making web text readable by everyone."
  },
  "ux-writing": {
    question: "What is the primary goal of microcopy in UX writing?",
    options: [
      "To show off the brand's vocabulary and include lengthy paragraphs.",
      "To guide users, explain actions, and alleviate friction concisely.",
      "To optimize keywords purely for search engine algorithms.",
      "To fill up empty space on desktop screen dimensions."
    ],
    answerIndex: 1,
    explanation: "UX writing and microcopy should be clear, concise, and helpful, helping users understand errors, complete forms, and navigate interfaces smoothly."
  },
  "choice-overload": {
    question: "What happens when a user experiences Choice Overload?",
    options: [
      "They make a purchase decision much faster.",
      "They feel overwhelmed by too many options, leading to decision fatigue or inaction.",
      "They appreciate the freedom of having unlimited options.",
      "They choose the most expensive option on the screen."
    ],
    answerIndex: 1,
    explanation: "Choice Overload occurs when users are presented with too many options, making it harder to evaluate choices and leading to frustration or abandonment."
  },
  "chunking": {
    question: "Why do UX designers use 'chunking' for long content?",
    options: [
      "To break down information into smaller, digestible groups to improve memory retention.",
      "To make the website page load faster.",
      "To hide information from the user until they hover over it.",
      "To force the user to scroll through more pages."
    ],
    answerIndex: 0,
    explanation: "Chunking involves grouping separate pieces of information into manageable units, making it easier for users to process and retain data."
  },
  "goal-gradient-effect": {
    question: "What does the Goal-Gradient Effect state about user motivation?",
    options: [
      "Motivation increases as users get closer to reaching their goal.",
      "Users are most motivated when starting a task from scratch.",
      "Adding more steps to a process makes users more determined to finish.",
      "Motivation is completely random and unaffected by progress indicators."
    ],
    answerIndex: 0,
    explanation: "The Goal-Gradient Effect states that users accelerate their behavior and motivation as they approach their goal (e.g., progress bars, loyalty stamp cards)."
  },
  "mental-model": {
    question: "What is a 'mental model' in UX design?",
    options: [
      "A designer's internal plan for the codebase architecture.",
      "What a user believes they know about how a system or product works.",
      "A prototype designed inside virtual reality interfaces.",
      "A checklist of UI elements required for standard compliance."
    ],
    answerIndex: 1,
    explanation: "A mental model is the user's belief and understanding of how a product works based on their past experiences. Matching this model reduces learning curves."
  },
  "occams-razor": {
    question: "How does Occam's Razor apply to user interface design?",
    options: [
      "Choose the design with the most visual gradients and borders.",
      "Among competing designs that perform the same function, select the simplest one.",
      "Always design interfaces with sharp, razor-thin borders.",
      "Choose the design with the largest number of steps for security."
    ],
    answerIndex: 1,
    explanation: "Occam's Razor suggests that the simplest solution is usually the best. Minimizing elements reduces cognitive load and visual complexity."
  },
  "pareto-principle": {
    question: "How is the Pareto Principle (80/20 rule) applied in UX product design?",
    options: [
      "80% of users will use only 20% of the features; prioritize optimizing those core features.",
      "80% of the screen should be white space, and 20% should contain active visual content.",
      "UX designers should spend 80% of their time on UI design and 20% on user testing.",
      "Color palettes must consist of 80% dark tones and 20% accent colors."
    ],
    answerIndex: 0,
    explanation: "The Pareto Principle suggests focusing efforts on the 20% of features that generate 80% of the user value, keeping primary tasks prominent."
  },
  "parkinsons-law": {
    question: "What does Parkinson's Law state in relation to user tasks?",
    options: [
      "A task will expand to fill the time allocated for its completion.",
      "Users always prefer tasks that take longer to complete.",
      "Restricting time limits makes users abandon tasks immediately.",
      "People work best when they are given infinite flexibility to complete forms."
    ],
    answerIndex: 0,
    explanation: "Parkinson's Law explains that limiting the time to complete a task (like checkout times or form fills) can help users focus and complete tasks faster."
  },
  "peak-end-rule": {
    question: "According to the Peak-End Rule, how do users judge an experience?",
    options: [
      "Based on the average quality of every single moment of the experience.",
      "Largely based on how they felt at its peak (most intense point) and at its end.",
      "Based on the first 5 seconds of opening the landing page.",
      "Based entirely on the colors used at the top navigation bar."
    ],
    answerIndex: 1,
    explanation: "The Peak-End Rule is a cognitive bias where people judge an experience based on its peak emotional state and its ending, rather than the average of all parts."
  },
  "teslers-law": {
    question: "What does Tesler's Law (Law of Conservation of Complexity) state?",
    options: [
      "For any system, there is a certain amount of complexity that cannot be reduced.",
      "All complexity should be shifted onto the user instead of the system.",
      "Simple systems have absolutely no complex backend code.",
      "Visual interfaces must look complex to appear trustworthy to users."
    ],
    answerIndex: 0,
    explanation: "Tesler's Law states that every application has an inherent amount of complexity. The designer's job is to manage this complexity, moving it from the user to the system."
  },
  "von-restorff-effect": {
    question: "What is the primary takeaway of the Von Restorff Effect?",
    options: [
      "Similar objects should be grouped close together on the screen grid.",
      "When multiple similar objects are present, the one that differs from the rest is most likely to be remembered.",
      "Users ignore text that is styled differently from the surrounding elements.",
      "All buttons on a page should look exactly the same."
    ],
    answerIndex: 1,
    explanation: "Also known as the Isolation Effect, the Von Restorff Effect explains why we use call-to-action (CTA) buttons that stand out visually to draw user focus."
  },
  "zeigarnik-effect": {
    question: "What does the Zeigarnik Effect tell us about memory and tasks?",
    options: [
      "People remember completed tasks better than incomplete or interrupted ones.",
      "People remember incomplete or interrupted tasks better than completed ones.",
      "Users forget their password every time they interrupt the sign-up flow.",
      "Memory retention is completely unaffected by task progress states."
    ],
    answerIndex: 1,
    explanation: "The Zeigarnik Effect states that incomplete tasks create mental tension, making users more likely to remember them (often used in gamification or progress tracking)."
  },
  "qualitative-research": {
    question: "What is the main goal of qualitative UX research?",
    options: [
      "To gather numerical data and statistical metrics about conversion rates.",
      "To understand user motivations, behaviors, and feelings (the 'why' behind actions).",
      "To automatically verify code performance and load speeds.",
      "To generate automated user behavior charts using heatmaps."
    ],
    answerIndex: 1,
    explanation: "Qualitative research focuses on direct observations, interviews, and usability tests to gather insights about user feelings, pain points, and motivations."
  },
  "quantitative-research": {
    question: "Which of the following is a quantitative research method?",
    options: [
      "One-on-one user interview conversations.",
      "Focus group open discussions.",
      "Analyzing analytics data, click rates, and A/B test numbers.",
      "Observational diary studies."
    ],
    answerIndex: 2,
    explanation: "Quantitative research involves collecting and analyzing numerical data to answer questions like 'how many' or 'how much'."
  },
  "responsive-design": {
    question: "What is the primary objective of Responsive Web Design?",
    options: [
      "Ensuring the website looks and works great across different screen sizes and device viewports.",
      "Making sure the website responds to vocal commands.",
      "Allowing users to customize the color scheme of the web page.",
      "Forcing the website to look identical on desktop and mobile screens."
    ],
    answerIndex: 0,
    explanation: "Responsive design uses fluid grids, flexible images, and media queries to dynamically adjust layouts, providing an optimal reading and interactive experience on any device."
  },
  "rule-of-thirds": {
    question: "How is the Rule of Thirds applied in layout composition?",
    options: [
      "Placing focal elements along a 3x3 grid's lines and intersection points.",
      "Dividing the landing page layout into exactly three columns of equal width.",
      "Ensuring that only three colors are used across the design system.",
      "Giving users three choices for every interactive action."
    ],
    answerIndex: 0,
    explanation: "The Rule of Thirds is a compositional guideline that places key visual elements along grid lines and intersections, making layouts look balanced and engaging."
  },
  "rapid-prototyping": {
    question: "What is the main benefit of rapid prototyping in product workflows?",
    options: [
      "Writing final production code in the very first design sprint.",
      "Quickly validating ideas and gathering feedback before committing significant development resources.",
      "Eliminating the need to perform user testing sessions.",
      "Making high-fidelity designs look polished on day one."
    ],
    answerIndex: 1,
    explanation: "Rapid prototyping lets teams build, test, and iterate ideas quickly and cheaply, avoiding costly developmental mistakes early on."
  },
  "user-interviews": {
    question: "What is a best practice when conducting user interviews?",
    options: [
      "Asking leading questions to get the user to agree with your design choices.",
      "Asking open-ended questions and active listening to understand user habits.",
      "Explaining how the product works before the user starts their task.",
      "Correcting the user whenever they make a mistake during the test."
    ],
    answerIndex: 1,
    explanation: "User interviews should use open-ended, non-leading questions (e.g. 'Tell me about how you...' instead of 'Do you like our button?') to gather unbiased, authentic insights."
  },
  "design-tokens-bridge": {
    question: "What are the three common tiers of design tokens?",
    options: [
      "Global (Primitive), Alias (Semantic), and Component tokens.",
      "Primary, Secondary, and Tertiary developer codes.",
      "Local, Cloud, and Database variables.",
      "Text, Image, and Layout classes."
    ],
    answerIndex: 0,
    explanation: "Design tokens are structured in three tiers: Global (raw values), Alias/Semantic (purpose-driven), and Component (element-specific) to ensure scalability."
  },
  "user-journey-mapping": {
    question: "What is the primary purpose of mapping user journey phases and emotional states?",
    options: [
      "To document database structure constraints.",
      "To visualize step-by-step user interactions and identify pain points and opportunities.",
      "To optimize Google search algorithms for pages.",
      "To design high-fidelity components on day one."
    ],
    answerIndex: 1,
    explanation: "User journey mapping visualizes the user's workflow, emotions, and thoughts over time, making it easy to identify frustrations and discover design opportunities."
  },
  "card-sorting-ia": {
    question: "What is the key difference between Open and Closed Card Sorting?",
    options: [
      "Open sorting is done in public, while closed sorting is run in private research labs.",
      "Open card sorting lets participants create their own category names, while closed sorting uses pre-defined categories.",
      "Open sorting requires Figma, while closed sorting requires sticky notes.",
      "There is no difference; they are different names for the same method."
    ],
    answerIndex: 1,
    explanation: "In open card sorting, participants categorize cards and write their own category labels. In closed card sorting, they place cards into pre-defined categories."
  },
  "visual-hierarchy-ui": {
    question: "Which of the following is NOT a pillar of establishing visual hierarchy?",
    options: [
      "Using scale and size to emphasize headings.",
      "Using bright colors and contrast on target call-to-actions.",
      "Using identical sizes and weights for all copy elements to keep them standard.",
      "Using whitespace (margins and paddings) to isolate important elements."
    ],
    answerIndex: 2,
    explanation: "Establishing visual hierarchy requires variation in scale, contrast, typography, and spacing. Keeping all copy elements identical eliminates visual structure."
  },
  "heuristic-evaluation": {
    question: "According to Jakob Nielsen's visibility of system status, how should a UI respond when a user submits a form?",
    options: [
      "It should refresh the page instantly without confirmation to save load time.",
      "It should provide appropriate feedback, like a progress loader or success message.",
      "It should show a complex database error code (e.g. 0x8003f).",
      "It should lock the screen and freeze the cursor."
    ],
    answerIndex: 1,
    explanation: "Visibility of system status dictates that the UI should always keep users informed about what is happening, confirming inputs with indicators or messages."
  },
  "figma-auto-layout-tips": {
    question: "How do you position a badge floating in the top-right corner of a card without breaking the Auto Layout parent stack?",
    options: [
      "Group the badge with the card using basic Group Selection.",
      "Apply Absolute Position to the badge layer within the Auto Layout frame.",
      "Set the badge's width to Fill Container.",
      "Turn off the parent frame's Auto Layout."
    ],
    answerIndex: 1,
    explanation: "The Absolute Position setting in Figma excludes a layer from the parent Auto Layout stack, letting it float freely while remaining nested inside the frame."
  },
  "dark-mode-design": {
    question: "Why should designers avoid using pure pitch black (#000000) backgrounds for dark mode interfaces?",
    options: [
      "Because pure black takes longer to render on modern screens.",
      "Because high contrast between pure black and white text causes halation and eye strain.",
      "Because brand colors look more saturated on pure black.",
      "Because WCAG accessibility guidelines forbid pure black background colors."
    ],
    answerIndex: 1,
    explanation: "Pure black backgrounds create an intense contrast with white text, causing a blurry visual vibration (halation) that strains the eyes. Dark grey is softer and supports subtle elevation shadow levels."
  },
  "figma-smart-animate": {
    question: "What must match exactly between two frames for Figma Smart Animate to slide or resize a layer instead of fading it?",
    options: [
      "The width and height of the layer.",
      "The layer name and its nesting hierarchy.",
      "The color hex values and border radius settings.",
      "The opacity levels."
    ],
    answerIndex: 1,
    explanation: "Smart Animate identifies the same object across different frames by matching the exact layer name and checking that it sits inside the same structural nesting hierarchy."
  },
  "sticky-headers-ux": {
    question: "What is the primary UX benefit of the 'smart sticky' header (scroll-up reveal)?",
    options: [
      "It keeps brand presence visible 100% of the time.",
      "It hides when scrolling down to maximize reading space and reveals on scroll up for quick navigation.",
      "It disables horizontal scrolling on mobile screens.",
      "It works without requiring any CSS or Javascript."
    ],
    answerIndex: 1,
    explanation: "The scroll-up reveal pattern hides the header during active reading (scrolling down) but reveals it instantly when the user signals navigation intent (scrolling up)."
  },
  "nav-drawer-vs-bottom-nav": {
    question: "When is a bottom navigation bar preferred over a slide-out navigation drawer?",
    options: [
      "When the app has more than 10 complex nested submenus.",
      "When you have 3 to 5 primary views that users switch between frequently.",
      "When you want to keep navigation completely hidden to avoid clutter.",
      "When designing websites for desktop viewports only."
    ],
    answerIndex: 1,
    explanation: "Bottom navigation is best for 3 to 5 top-level views because it keeps them permanently visible and easy to reach with the user's thumb."
  },
  "focus-groups-ux": {
    question: "What is the primary risk of using focus groups to evaluate usability?",
    options: [
      "They are too expensive to set up compared to usability testing labs.",
      "They measure verbalized opinions and are susceptible to groupthink, rather than capturing actual interaction behavior.",
      "They cannot be run remotely using digital tools.",
      "They require participants to write code."
    ],
    answerIndex: 1,
    explanation: "Focus groups capture what people *claim* they do and are prone to dominant speaker influence (groupthink). To evaluate interface ease of use, direct usability testing is required."
  },
  "sitemaps-planning": {
    question: "What does Level 1 in a sitemap diagram represent?",
    options: [
      "The site's main entry homepage URL.",
      "Primary navigation categories (e.g., Shop, About, Blog).",
      "Utility legal text pages linked in the footer.",
      "Database tables holding content assets."
    ],
    answerIndex: 1,
    explanation: "Level 1 in a sitemap diagram represents the site's top-level navigation categories branching directly off the Homepage (Level 0)."
  },
  "figma-component-properties": {
    question: "How do Figma Component Properties help reduce variant inflation in design systems?",
    options: [
      "By converting all components into static images.",
      "By replacing structural variants with configurable sidebar controls (like boolean toggle or text swap).",
      "By forcing developers to write CSS directly inside Figma.",
      "By deleting unused icons automatically."
    ],
    answerIndex: 1,
    explanation: "Component properties allow setting options (like hiding icons or typing labels) directly on layer attributes, avoiding the need to create massive arrays of visual variant combinations."
  },
  "figma-variables-prototyping": {
    question: "Which prototyping feature in Figma allows setting actions that only fire if a variable condition is met?",
    options: [
      "Smart Animate transitions.",
      "Conditional Logic (If/Else statements).",
      "Absolute Positioning targets.",
      "Spring Easing Curves."
    ],
    answerIndex: 1,
    explanation: "Conditional Logic (if/else) lets prototype designers specify boundaries, validate input states, and execute distinct flows based on active variable values."
  },
  "touch-targets-design": {
    question: "What is the minimum touch target size recommended by Google Material Design for mobile screens?",
    options: [
      "24 &times; 24 dp",
      "48 &times; 48 dp",
      "80 &times; 80 dp",
      "120 &times; 120 dp"
    ],
    answerIndex: 1,
    explanation: "Google Material Design recommends a minimum touch target size of 48x48 dp, which matches the average physical width of a human finger pad (about 9mm) to prevent misclicks."
  },
  "accessible-forms-ux": {
    question: "Why is it an accessibility violation to use placeholder text as the only form label?",
    options: [
      "Because screen readers often ignore placeholder text, and it disappears when users start typing, straining memory.",
      "Because browsers prevent users from typing if placeholders are present.",
      "Because placeholder text must always be colored red.",
      "Because placeholders block keyboard focus indicators."
    ],
    answerIndex: 0,
    explanation: "Placeholder text disappears when content is entered (hurting cognitive recall), has poor contrast, and is often invisible to screen readers. Persistent visual labels are required."
  },
  "principles-of-graphic-design": {
    question: "Which graphic design principle refers to the distribution of visual weight in a composition?",
    options: [
      "Contrast",
      "Rhythm",
      "Balance",
      "Emphasis"
    ],
    answerIndex: 2,
    explanation: "Balance refers to how visual weight is distributed across a design. It can be symmetrical (equal weight on both sides), asymmetrical (contrasting elements balancing each other), or radial (radiating from a center point)."
  },
  "grid-systems-graphic-design": {
    question: "What type of grid is characterized by equal-sized modules arranged in columns and rows?",
    options: [
      "Hierarchical Grid",
      "Column Grid",
      "Modular Grid",
      "Manuscript Grid"
    ],
    answerIndex: 2,
    explanation: "Modular grids are made of columns and rows that intersect to form uniform modules. They provide highly structured and flexible layouts for catalogs, newspaper sheets, and complex schedules."
  },
  "logo-design-fundamentals": {
    question: "Why is versatility considered a fundamental rule of logo design?",
    options: [
      "It allows the logo to work across various mediums, sizes, and formats.",
      "It means the logo should use as many colors as possible.",
      "It ensures the logo is always abstract rather than a wordmark.",
      "It makes the logo cheaper to design."
    ],
    answerIndex: 0,
    explanation: "A versatile logo should be responsive and functional across all applications: it should work in a single color, scale down to a tiny 16x16px favicon, or scale up to a giant billboard without losing its identity."
  },
  "history-of-bauhaus": {
    question: "What core philosophy of Bauhaus dictates that an object's design should be directly based on its purpose?",
    options: [
      "Art for art's sake",
      "Form follows function",
      "Ornamentation is crime",
      "More is more"
    ],
    answerIndex: 1,
    explanation: "'Form follows function' is a foundational Bauhaus tenet, declaring that the aesthetic shape, material selection, and layout structure should prioritize the practical utility and functionality of the design."
  },
  "vector-vs-raster": {
    question: "Which file format is a vector format that is widely used for web graphics because it scales infinitely without losing quality?",
    options: [
      "JPEG",
      "PNG",
      "SVG",
      "TIFF"
    ],
    answerIndex: 2,
    explanation: "SVG (Scalable Vector Graphics) is an XML-based vector format natively supported by web browsers. It uses mathematical coordinates, rendering crisp details at any display scale or resolution."
  },
  "brand-style-guides": {
    question: "What is the primary purpose of a brand style guide?",
    options: [
      "To ensure visual and editorial consistency across all brand touchpoints.",
      "To serve as a user manual for design tools.",
      "To register trademarks and copyright licenses."
    ],
    answerIndex: 1,
    explanation: "A brand style guide acts as a single source of truth, dictating color, font, logo, and tone rules to maintain unified visual and voice standards across internal teams, marketing, and external vendors."
  },
  "swiss-design-style": {
    question: "Which famous sans-serif typeface was created during the height of the Swiss Design movement and remains highly popular today?",
    options: [
      "Futura",
      "Helvetica",
      "Times New Roman",
      "Garamond"
    ],
    answerIndex: 1,
    explanation: "Designed by Max Miedinger and Eduard Hoffmann in 1957, Helvetica (originally Neue Haas Grotesk) represents the Swiss Design ideals of neutrality, clarity, and grid-based structure."
  },
  "color-psychology-branding": {
    question: "In brand psychology, why is the color blue frequently chosen by financial institutes and tech corporations?",
    options: [
      "It stimulates hunger and appetite.",
      "It symbolizes urgency and excitement.",
      "It conveys trust, reliability, security, and stability.",
      "It is the cheapest pigment to print."
    ],
    answerIndex: 2,
    explanation: "Blue naturally triggers feelings of safety, dependability, logical thought, and calmness, which helps establish consumer trust and professional authority for banks, technology firms, and medical systems."
  }
};




