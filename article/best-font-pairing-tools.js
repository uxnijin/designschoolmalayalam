(() => {
// ============================================================
//  ARTICLE: Best Font Pairing Tools & Type Generators
// ============================================================

const toolsData = {
  "pairing-generators": [
    {
      "title": "Fontjoy",
      "link": "https://fontjoy.com/",
      "desc": "An AI font pairing generator that uses deep learning to select complementary typography styles. Generate pairings in one click.",
      "price": "Free"
    },
    {
      "title": "Fontpair.co",
      "link": "https://fontpair.co/",
      "desc": "A curated directory of beautiful Google Fonts pairings. Filter combinations by Sans-Serif, Serif, Monospace, and Display headings.",
      "price": "Free"
    },
    {
      "title": "Typewolf",
      "link": "https://www.typewolf.com/",
      "desc": "The ultimate typographic design resource. Reviews trending web fonts, showcases real-world pairings, and suggests alternatives.",
      "price": "Free"
    },
    {
      "title": "Google Fonts Knowledge",
      "link": "https://fonts.google.com/knowledge",
      "desc": "A library of guides and lessons on typography, detailing pairing strategies, font specifications, and accessibility basics.",
      "price": "Free"
    }
  ],
  "type-utilities": [
    {
      "title": "Typescale",
      "link": "https://typescale.com/",
      "desc": "A visual calculator to define responsive font-size hierarchies using mathematical scale ratios (e.g., Golden Ratio, Major Third).",
      "price": "Free"
    },
    {
      "title": "Archetype",
      "link": "https://archetypeapp.com/",
      "desc": "Create consistent digital typography systems. Set line heights, sizing scales, and font pairings in the browser, then export as CSS.",
      "price": "Freemium"
    },
    {
      "title": "Webfont Specimen",
      "link": "https://webfontspecimen.com/",
      "desc": "Preview web fonts on a realistic, content-heavy website layout to inspect reading comfort, headers, and microcopy sizes.",
      "price": "Free"
    },
    {
      "title": "Type Scale Calculator",
      "link": "https://www.typescale.io/",
      "desc": "A lightweight web utility to check typographic scales, typography contrast levels, and responsive layouts.",
      "price": "Free"
    }
  ]
};

const categories = {
  "pairing-generators": {
    title: "AI & Curated Pairing Generators",
    desc: "Visual comparison engines, font library pairings, and AI-driven matchers to select beautiful text typography combinations."
  },
  "type-utilities": {
    title: "Typographic Scales & Utilities",
    desc: "Calculators and tools to define line heights, check contrast legibility, and establish mathematical scale ratios for responsive interfaces."
  }
};

let htmlContent = `
  <p style="font-size: 1.05rem; margin-bottom: 25px; line-height: 1.85;">
    Typography does 95% of the work in web design. Selecting font pairs that balance emphasis and readability is vital to creating clean layouts. Setting mathematical scale sizes ensures your typography hierarchy feels balanced on desktop and mobile viewports.
  </p>
  <p style="font-size: 1.05rem; margin-bottom: 35px; line-height: 1.85;">
    Here is a curated catalog of the best <strong>8 font pairing tools and type scale calculators</strong>. Use these generators to discover typography pairs, check letter spacing contrast, and build structured type hierarchies.
  </p>
`;

for (const [key, catInfo] of Object.entries(categories)) {
  const catItems = toolsData[key];
  if (!catItems || catItems.length === 0) continue;
  
  htmlContent += `
    <h2 style="font-size: 1.55rem; border-bottom: 1.5px solid var(--border); padding-bottom: 8px; margin-top: 48px; margin-bottom: 12px; font-weight: 700;">${catInfo.title}</h2>
    <p style="font-size: 0.95rem; color: var(--text-3); margin-bottom: 24px; line-height: 1.6;">${catInfo.desc}</p>
    
    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; margin-bottom: 32px;">
  `;
  
  catItems.forEach(item => {
    let badgeColor = "#FF6F2C"; // fallback orange
    if (item.price.toLowerCase() === "free") {
      badgeColor = "#10B981"; // green
    } else if (item.price.toLowerCase().includes("paid")) {
      badgeColor = "#3B82F6"; // blue
    } else if (item.price.toLowerCase().includes("freemium") || item.price.toLowerCase().includes("trial")) {
      badgeColor = "#8B5CF6"; // purple
    }

    htmlContent += `
      <div style="background: var(--bg-2); border: 1px solid var(--border); padding: 18px; border-radius: 12px; display: flex; flex-direction: column; justify-content: space-between; transition: transform 0.2s, border-color 0.2s; box-shadow: 0 2px 8px rgba(0,0,0,0.02);">
        <div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
            <div style="margin: 0; font-size: 1.05rem; font-weight: 700; color: var(--text);">${item.title}</div>
            <span style="font-size: 10px; font-weight: 700; color: #FFFFFF; background: ${badgeColor}; padding: 3px 10px; border-radius: 99px; text-transform: uppercase; letter-spacing: 0.03em;">${item.price}</span>
          </div>
          <p style="font-size: 0.9rem; color: var(--text-2); margin-top: 0; margin-bottom: 16px; line-height: 1.6;">${item.desc}</p>
        </div>
        <div>
          <a href="${item.link}" target="_blank" style="display: inline-block; color: #FFFFFF; background-color: #FF6F2C; padding: 7px 16px; border-radius: var(--radius-sm); font-weight: 700; text-decoration: none; font-size: 0.8rem; transition: background 0.2s; box-shadow: 0 2px 4px rgba(255, 111, 44, 0.2); letter-spacing: 0.2px;">Explore ${item.title}</a>
        </div>
      </div>
    `;
  });
  
  htmlContent += `</div>`;
}

ARTICLE_REGISTRY["best-font-pairing-tools"] = {
  id: "best-font-pairing-tools",
  subcategoryId: ["typography-fonts", "typography"],
  categoryId: ["tools", "ui-design"],
  title: "Best Font Pairing Tools & Type Generators",
  description: "Find the perfect typography combinations for your layouts using these AI-powered font pairing generators and visual references.",
  date: "2026-06-22",
  thumbnail: "assets/thumbnails/best-font-pairing-tools.svg",
  youtubeUrl: "",
  tags: ["ui design", "typography", "font pairing", "typescale", "resources", "tools"],
  content: htmlContent
};
})();
