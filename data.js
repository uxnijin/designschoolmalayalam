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
const ARTICLES = [
  {
    id: "best-3-malayalam-fonts",
    subcategoryId: "typography",
    categoryId: "ui-design",
    title: "The 3 Best Free Malayalam Fonts Every Designer Should Know ",
    description: "Because life is too short to stick to default system fonts",
    date: "2026-06-10",
    thumbnail: "assets/thumb1.png",
    tags: ["ui design", "typography", "basics", "malayalam", "fonts", "free"],
    content: `
      <p style="font-size: 1.05rem; margin-bottom: 25px;">
        Let’s be real for a second. Finding a Malayalam font that doesn't look like it was pulled straight out of a 1990s government circular is a whole sport. If you’re a designer, content creator, or just someone trying to make a cool poster for your friend’s wedding, you know the struggle is real. 
    </p>
    <p style="font-size: 1.05rem; margin-bottom: 35px;">
        Thankfully, the typographic gods have blessed us with some incredible open-source gems. Today, we’re breaking down the <strong>top 3 free Malayalam fonts</strong> that are absolute game-changers. Let's dive in!
    </p>


    <h3>
        1. Anek Malayalam <span style="font-size: 1rem; font-weight: normal; "></span>
    </h3>
    <img src="assets/anek.png" alt="Anek Malayalam Font Preview" />
    <p style="margin-bottom: 15px;">
            If adaptability had a name, it would be <strong>Anek</strong>. "Anek" literally means many, and boy, does it live up to it. This font is a variable superfamily, which means it stretches from incredibly compressed, thin styles all the way to ultra-bold, extra-expanded beasts. 
        </p>
        <p style="margin-bottom: 15px;">
            <strong>Pro-Tip:</strong> Use the super-bold weights for punchy Instagram headers, and the regular weights for clean, highly readable body text. It scales flawlessly!
        </p>

        <a href="https://ektype.in/anek-malayalam.html" target="_blank" style="display: inline-block; color: #FFFFFF; background-color: #FF6F2C; padding: 10px 20px; border-radius: 6px; font-weight: 600; text-decoration: none; font-size: 0.9rem; transition: background 0.2s;">Get Anek Malayalam </a>



    <h3>
        2. Baloo Chettan <span style="font-size: 1rem; font-weight: normal; "></span>
    </h3>
        <img src="assets/baloo.png" alt="Baloo Chettan Font Preview" />
    <p style="margin-bottom: 15px;">
            Need something that feels warm, fuzzy, and approachable? Enter <strong> Baloo Chettan </strong>. It’s a rounded, chunky font that screams personality. It doesn't take itself too seriously, making it absolutely perfect for branding, casual graphics, or adding a vibrant local context.
        </p>
        <p style="margin-bottom: 15px;">
            <strong>Best Used For:</strong> YouTube thumbnails, catchy sticker designs, or UI elements where you want to add a friendly, welcoming touch to your Malayalam layout.
        </p>

        <a href="https://ektype.in/baloo-chettan.html" target="_blank" style="display: inline-block; color: #FFFFFF; background-color: #FF6F2C; padding: 10px 20px; border-radius: 6px; font-weight: 600; text-decoration: none; font-size: 0.9rem; transition: background 0.2s;">Get Baloo Chettan </a>
        


      <h3>
        3. Sama Malayalam <span style="font-size: 1rem; font-weight: normal; "></span>
    </h3>
        <img src="assets/sama.png" alt="Sama Malayalam Font Preview" />
    <p style="margin-bottom: 15px;">
            
        If you want your design to look sophisticated, sleek, and premium, <strong>Sama</strong> is your go-to. It strikes a beautiful balance between traditional Malayalam letterforms and modern design sensibilities. It’s clean, extremely well-balanced, and highly legible even at smaller sizes.        </p>
        <p style="margin-bottom: 15px;">
            <strong>Fun Fact:</strong> It's engineered specifically to handle complex scripts and text layouts beautifully, making it an excellent choice for websites, editorial layouts, or digital publications.
        </p>
        <a href="https://ektype.in/sama-malayalam.html" target="_blank" style="display: inline-block; color: #FFFFFF; background-color: #FF6F2C; padding: 10px 20px; border-radius: 6px; font-weight: 600; text-decoration: none; font-size: 0.9rem; transition: background 0.2s;">Get Sama Malayalam </a>
  <p></p>
    <p style="margin-bottom: 15px;">
            All of these beauties are crafted by the brilliant team at <strong>Ek Type</strong> and are open-source. Go swap out those boring system fonts and make your next Malayalam project pop!
    `,
  },



{
  "id": "best-free-fonts-commercial-use",
  "subcategoryId": "typography",
  "categoryId": "ui-design",
  "title": "10 Places to Find the Best Free Fonts for Commercial Use",
  "description": "Stop settling for boring typefaces. Here is the ultimate hookup for killer, commercial-ready fonts that won't cost you a dime.",
  "date": "2026-06-11",
  "thumbnail": "assets/thumb2.png",
  "tags": ["ui design", "typography", "basics", "fonts", "free", "commercial use"],
  "content": `
    <p style="font-size: 1.05rem; margin-bottom: 25px;">
      Finding incredible, high-quality fonts that are completely <strong>free for commercial use</strong> is a massive headache. You want something with personality, but you also don't want to break the law or get hit with a nasty licensing lawsuit from a client project. 
    </p>
    <p style="font-size: 1.05rem; margin-bottom: 35px;">
      Don't worry, I got you covered. Today, we are breaking down <strong>10 absolute best places</strong> to grab premium commercial-use fonts for free, ordered from the least known secrets to the massive industry giants. Plus, I’ve got two juicy bonuses at the end you definitely don't want to miss. Let's dive right into it!
    </p>

    <h3>1. Brandon Nickerson Studio (BMNIX)</h3>
    <img src="assets/bnicks.png" alt="bnicks" />
    <p style="margin-bottom: 15px;">
      First up is Brandon Nickerson Studio, and honestly, this guy is being super generous. He releases some of the most unique, punchy display faces you’ve ever seen. Here’s the secret: before he starts selling a font for actual money, he lists it on his site completely for free for a limited time. 
    </p>
    <p style="margin-bottom: 15px;">
      <strong>Pro Tip:</strong> Do what I do, set a weekly reminder to go check out his website, scroll all the way to the bottom, and look at his catalog. If you see a free one like <em>Nokio</em>, just add it to your cart and grab it immediately before the window closes!
    </p>
    <a href="https://www.bnicks.com/shop" target="_blank" style="display: inline-block; color: #FFFFFF; background-color: #FF6F2C; padding: 10px 20px; border-radius: 6px; font-weight: 600; text-decoration: none; font-size: 0.9rem; transition: background 0.2s; margin-bottom: 25px;">Check Out BMNIX Studio</a>

    <h3>2. Kern Club</h3>
    <img src="assets/kernclub.png" alt="kernclub" />
    <p style="margin-bottom: 15px;">
      Next up is Kern Club. Now, this one can be a little bit hit-or-miss on which exact fonts are going to be free, but they always have some incredible gems available. They have a ton of super cool, affordable display stuff, but let me give you a quick life hack for their site.
    </p>
    <p style="margin-bottom: 15px;">
      <strong>The Secret Search:</strong> Head over to their fonts section, press <em>Command + F</em> (or Ctrl + F) on your keyboard, and type in the word <strong>"sale"</strong>. Usually, all the ones marked on sale are marked down to zero bucks. Go snag fonts like <em>Bubble Shack</em> or <em>Weasel Face</em>, they are high quality and add so much flavor to a layout.
    </p>
    <a href="https://kernclub.com/shop?category=Fonts" target="_blank" style="display: inline-block; color: #FFFFFF; background-color: #FF6F2C; padding: 10px 20px; border-radius: 6px; font-weight: 600; text-decoration: none; font-size: 0.9rem; transition: background 0.2s; margin-bottom: 25px;">Explore Kern Club</a>

    <h3>3. Velvetyne Type Foundry</h3>
        <img src="assets/velvetyne.png" alt="velvetyne" />
    <p style="margin-bottom: 15px;">
      Number three is an absolute favorite of mine. A French foundry called Velvetyne. Everything on this site is open-source, beautifully designed, and 100% free for commercial use. If you need something funky, experimental, and loaded with artistic vibe, you need to book mark this immediately.
    </p>
    <p style="margin-bottom: 15px;">
      You've probably seen their ultra-popular font <em>Pillow Lava</em> floating around the internet because it's insanely unique. I also absolutely love <em>Outward</em>, it’s a chunky, condensed bold face that fits my design style perfectly. Go browse their site for some serious design inspiration.
    </p>
    <a href="https://velvetyne.fr/" target="_blank" style="display: inline-block; color: #FFFFFF; background-color: #FF6F2C; padding: 10px 20px; border-radius: 6px; font-weight: 600; text-decoration: none; font-size: 0.9rem; transition: background 0.2s; margin-bottom: 25px;">Get Velvetyne Fonts</a>

    <h3>4. The League of Moveable Type</h3>
    <img src="assets/The-League-of-Moveable-Type.png" alt="The-League-of-Moveable-Type" />
    <p style="margin-bottom: 15px;">
      These guys are legends because they are actually the first original open-source font foundry on the web. If you look at their catalog, they’ve got a highly diverse, incredibly well-designed array of robust fonts. 
    </p>
    <p style="margin-bottom: 15px;">
      I really love <em>Neue Black</em>, the ligatures on it are just super clean and usable. They also host classics like <em>Raleway</em>, which has saved my life before when clients forgot to send me their official brand fonts. Oh, and if you love rounded display faces like me, check out <em>Sniglet</em>!
    </p>
    <a href="https://www.theleagueofmoveabletype.com/" target="_blank" style="display: inline-block; color: #FFFFFF; background-color: #FF6F2C; padding: 10px 20px; border-radius: 6px; font-weight: 600; text-decoration: none; font-size: 0.9rem; transition: background 0.2s; margin-bottom: 25px;">Visit The League</a>

    <h3>5. Fontshare</h3>
    <img src="assets/fontshare.png" alt="fontshare" />
    <p style="margin-bottom: 15px;">
      Now, Fontshare is a little different. It's not a single type foundry. Instead, it’s a massive collection platform loaded with fonts designed by various foundries that are completely free for commercial use. 
    </p>
    <p style="margin-bottom: 15px;">
      A huge chunk of the early ones you see are designed by the brilliant Indian Type Foundry (ITF). I love me a good font with personality, so definitely check out <em>Clash Display</em>. If you want beautiful, wide typography, look at <em>Panchayan</em>, it even comes with a variable font version so you can tweak it exactly how you want. 
    </p>
    <a href="https://www.fontshare.com/" target="_blank" style="display: inline-block; color: #FFFFFF; background-color: #FF6F2C; padding: 10px 20px; border-radius: 6px; font-weight: 600; text-decoration: none; font-size: 0.9rem; transition: background 0.2s; margin-bottom: 25px;">Go to Fontshare</a>

    <h3>6. Font Fabric</h3>
    <img src="assets/font-fabric.png" alt="fontfabric" />
    <p style="margin-bottom: 15px;">
      Moving along to number six! Font Fabric doesn’t *exclusively* make free fonts, they sell a lot of premium stuff. BUT, they have a dedicated "Free Fonts" section hidden right on their website where everything is fair game. 
    </p>
    <p style="margin-bottom: 15px;">
      Some of my favorites from them include <em>Gwen</em> (which gives you 14 styles for free including a variable version) and <em>Code Next</em>. Trust me, these are highly professional, real-world assets.
    </p>
    <a href="https://www.fontfabric.com/free-fonts/" target="_blank" style="display: inline-block; color: #FFFFFF; background-color: #FF6F2C; padding: 10px 20px; border-radius: 6px; font-weight: 600; text-decoration: none; font-size: 0.9rem; transition: background 0.2s; margin-bottom: 25px;">Browse Font Fabric Freebies</a>

    <h3>7. TypeType (Free Fonts Project)</h3>
    <img src="assets/type-type.png" alt="typetype" />
    <p style="margin-bottom: 15px;">
      TypeType has an awesome initiative running called the Free Fonts Project. They offer a ton of variety here. Now, keep in mind, a lot of these might only give you a single style or weight for free, but you can still find an absolute ton of use for them, especially since they cost nothing! 
    </p>
    <p style="margin-bottom: 15px;">
      If you pair the right client or the right creative project with fonts like <em>Days</em> or <em>Nixie</em>, it looks incredibly premium. Go look through their list and see what catches your eye.
    </p>
    <a href="https://typetype.org/" target="_blank" style="display: inline-block; color: #FFFFFF; background-color: #FF6F2C; padding: 10px 20px; border-radius: 6px; font-weight: 600; text-decoration: none; font-size: 0.9rem; transition: background 0.2s; margin-bottom: 25px;">Check Out TypeType</a>

    <h3>8. Open Foundry</h3>
    <img src="assets/open-foundry.png" alt="open-foundry" />
    <p style="margin-bottom: 15px;">
      Ah, the legendary Open Foundry. There are a ton of fonts hosted here that are already super popular, and for good reason. It's a goldmine for reliable workhorses. 
    </p>
    <p style="margin-bottom: 15px;">
      You can grab <em>Inter</em> here, which is arguably one of the cleanest, most perfect sans-serifs ever made for digital layout UI. I also love <em>Bagnard Regular</em> (and its sans version) for a bit more flair, and <em>Poppins Medium</em>—a super popular, beautifully round choice for clean logotypes.
    </p>
    <a href="https://open-foundry.com/" target="_blank" style="display: inline-block; color: #FFFFFF; background-color: #FF6F2C; padding: 10px 20px; border-radius: 6px; font-weight: 600; text-decoration: none; font-size: 0.9rem; transition: background 0.2s; margin-bottom: 25px;">Open up Open Foundry</a>

    <h3>9. Google Fonts</h3>
    <img src="assets/google-fonts.png" alt="google-fonts" />
    <p style="margin-bottom: 15px;">
      Alright, number nine is the biggest "secret" on the list... okay, it's not a secret at all, it's Google Fonts! Look, you’ve seen these everywhere. <em>Roboto</em>, <em>Open Sans</em>, <em>Lato</em>, <em>Montserrat</em>, they all get a ton of love from me. 
    </p>
    <p style="margin-bottom: 15px;">
      But here is why you shouldn't overlook it: when you design something beautiful for a client and they tell you they have absolutely zero budget to buy font licenses, Google Fonts is your absolute safest, most budget-friendly, and usable option. It has flawless web integration and massive language support.
    </p>
    <a href="https://fonts.google.com/" target="_blank" style="display: inline-block; color: #FFFFFF; background-color: #FF6F2C; padding: 10px 20px; border-radius: 6px; font-weight: 600; text-decoration: none; font-size: 0.9rem; transition: background 0.2s; margin-bottom: 25px;">Go to Google Fonts</a>

    <h3>10. Use & Modify</h3>
    <img src="assets/usemodify.png" alt="use-and-modify" />
    <p style="margin-bottom: 15px;">
      Last but certainly not least on the main list is Use & Modify. They have over 25 pages of fonts for you to just go crazy exploring. If you like wacky, deeply unique display typefaces to make your posters or graphics stand out, this is it.
    </p>
    <p style="margin-bottom: 15px;">
      Check out <em>Heal the Web</em> for a totally alternative vibe, or <em>Ferrite Core</em> which is super popular right now. But the coolest one here is <strong>Redaction</strong>. It starts as a beautiful, regular serif typeface, but as you scroll down the styles, it gets progressively more pixelated and redacted. It makes for some insanely cool graphic effects!
    </p>
    <a href="https://usemodify.com/" target="_blank" style="display: inline-block; color: #FFFFFF; background-color: #FF6F2C; padding: 10px 20px; border-radius: 6px; font-weight: 600; text-decoration: none; font-size: 0.9rem; transition: background 0.2s; margin-bottom: 25px;">Explore Use & Modify</a>

    <hr style="border: 0; border-top: 1px solid #eee; margin: 40px 0;" />

    <h3>🎁 The 2 Bonus Spots (Watch the Licenses!)</h3>
    <p style="margin-bottom: 15px;">
      Before you jump off, I have two bonus resources that are a mix of personal and commercial use. For these, you’ll want to double-check the individual file descriptions so you don't accidentally break the law, my friends!
    </p>
    <p style="margin-bottom: 15px;">
      <strong>Bonus 1: Abduzeedo (Abdz.do)</strong> – They have an incredible free font collection featuring hyper-styled, modern typography curated from designers all over the world. A lot of times, a font might be free for personal use, but the commercial license is ridiculously cheap anyway.
    </p>
    <p style="margin-bottom: 15px;">
      <strong>Bonus 2: Behance</strong> – Yes, the portfolio platform! Just go to the link or type "Free Font" in the search bar. Typographers are constantly releasing single weights or demo versions of their premium fonts completely free on Behance just to get some love and appreciation clicks on their projects. 
    </p>

    <p style="margin-top: 30px; margin-bottom: 15px;">
      That is everything! Go bookmark these sites, swap out your boring default fonts, and make your next creative project look absolutely custom. Catch you later, peace!
    </p>
  `,
},




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
  {
    id: "text-on-path",
    subcategoryId: "figma-basics",
    categoryId: "figma",
    title: "How to Bend Text in Figma",
    description: "Figma's latest native features to type and wrap text along any vector path or shape",
    date: "2026-06-10",
    youtubeUrl: "https://youtu.be/m1hpxDCom2E?si=wc3WfPs9lvYMFANj",
    tags: ["figma", "text on path", "curve text", "design ", "bend text"],
    content: `
      <p>Until recently, if you wanted to curve or bend text along an arc in Figma, you had to rely on third-party plugins. However, Figma has now introduced a highly anticipated, native <strong>Text on Path</strong> feature that makes wrapping text along a curve incredibly easy and fully editable.</p>

    <p>In this quick tutorial, we will show you how to use this new native tool to curve your typography without needing any plugins.</p>

    <h2>The Advantage of Native Text on Path vs. Plugins</h2>
    <p>When using old plugin-based methods to curve text, the typography would often convert into vector shapes, meaning you couldn't easily rewrite or fix a typo afterward. With Figma’s new built-in feature, the text remains entirely live and editable at any time!</p>

    <h2>Step 1: Activate the Text on Path Tool</h2>
    <p>Look over at your Figma toolbar at the top left. Click on the small dropdown arrow right next to the standard <strong>Text (T)</strong> tool icon. From the menu that expands, select the new <strong>"Text on path"</strong> option.</p>

    <h2>Step 2: Draw Your Arc or Curve Path</h2>
    <p>Once selected, your cursor will change, prompting you to define the curve geometry:</p>
    <ul>
      <li>Click and drag on your canvas to draw out a circle or an arc.</li>
      <li>The size and curvature of this path will directly dictate how severely your text bends. Adjust the circle shape until it matches the sweep you want for your design header or badge.</li>
    </ul>

    <h2>Step 3: Type and Edit Your Custom Text</h2>
    <p>Now, simply start typing your phrase directly onto the path template. You will see your characters instantly align and follow the boundaries of the curved shape seamlessly.</p>
    <h2>Watch the Video Tutorial</h2>
    <p>Want to see exactly how it is done? Watch this tutorial video:</p>
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
