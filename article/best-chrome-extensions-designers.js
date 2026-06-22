(() => {
// ============================================================
//  ARTICLE: Best Chrome Extensions for UI/UX Designers
// ============================================================

const toolsData = {
  "inspector-extensions": [
    {
      "title": "CSS Peeper",
      "link": "https://csspeeper.com/",
      "desc": "A smart CSS inspector tailor-made for designers. Inspect the styles, colors, and assets of any element in a beautiful dashboard.",
      "price": "Free"
    },
    {
      "title": "WhatFont",
      "link": "https://chrome.google.com/webstore/detail/whatfont/jabianhicclmiejocfkebolmjmfnihon",
      "desc": "The easiest way to identify fonts on web pages. Hover over any text to see its font family, size, line height, and color.",
      "price": "Free"
    },
    {
      "title": "Pesticide",
      "link": "https://pesticide.io/",
      "desc": "Insert a simple CSS outline on every HTML element to quickly debug alignments, padding boundaries, and box-model overlaps.",
      "price": "Free"
    },
    {
      "title": "Fonts Ninja",
      "link": "https://www.fonts.ninja/",
      "desc": "Identify fonts, bookmark typefaces, and trial them directly in your design applications. Includes font family details.",
      "price": "Freemium"
    }
  ],
  "workflow-extensions": [
    {
      "title": "ColorZilla",
      "link": "https://www.colorzilla.com/",
      "desc": "Advanced eyedropper, color picker, gradient generator, and page color analyzer to grab color codes from any web page.",
      "price": "Free"
    },
    {
      "title": "SVG Grabber",
      "link": "https://svggrabber.com/",
      "desc": "A tool to quickly preview, download, and copy all SVG logos, icons, and vector files from any website in one click.",
      "price": "Free"
    },
    {
      "title": "Mobile Simulator",
      "link": "https://mobile-simulator.com/",
      "desc": "Test website responsiveness. Simulates popular smartphones and tablets with accurate device frames and screen viewports.",
      "price": "Freemium"
    },
    {
      "title": "Screenity",
      "link": "https://screenity.connorthedev.com/",
      "desc": "The most powerful screen recorder and annotation tool for Chrome. Record and annotate sitemaps, bugs, and user flows.",
      "price": "Free"
    }
  ]
};

const categories = {
  "inspector-extensions": {
    title: "Visual Inspector Extensions",
    desc: "Analyze styling, inspect CSS rules, identify fonts, and measure pixels directly on any live website in your browser."
  },
  "workflow-extensions": {
    title: "Workflow & Utility Extensions",
    desc: "Simplify daily tasks including color grabbing, screenshot taking, and simulating mobile viewports."
  }
};

let htmlContent = `
  <p style="font-size: 1.05rem; margin-bottom: 25px; line-height: 1.85;">
    The browser is the natural canvas of web design. For UI/UX designers, having the right browser extensions transforms Chrome into a powerful workspace where you can inspect styles, steal color codes, extract vector assets, and record design bugs instantly.
  </p>
  <p style="font-size: 1.05rem; margin-bottom: 35px; line-height: 1.85;">
    Here is a curated catalog of the best <strong>8 Chrome extensions for designers</strong>. Install these to debug layout grids, identify font typography, and test responsive viewports on live websites.
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

ARTICLE_REGISTRY["best-chrome-extensions-designers"] = {
  id: "best-chrome-extensions-designers",
  subcategoryId: ["design-utilities", "ux-utilities"],
  categoryId: ["tools", "ui-design"],
  title: "Best Chrome Extensions for UI/UX Designers",
  description: "Enhance your design workflow with these essential browser extensions for color grabbing, font identifying, screen measurements, and visual testing.",
  date: "2026-06-22",
  thumbnail: "assets/thumbnails/best-chrome-extensions-designers.svg",
  youtubeUrl: "",
  tags: ["ui design", "chrome extensions", "browser utilities", "css peeper", "resources", "tools"],
  content: htmlContent
};
})();
