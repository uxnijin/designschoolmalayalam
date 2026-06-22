(() => {
// ============================================================
//  ARTICLE: Best Free Illustration Websites for UI Designers
// ============================================================

const toolsData = {
  "free-illustration-libraries": [
    {
      "title": "unDraw",
      "link": "https://undraw.co/",
      "desc": "A constantly updated collection of beautiful SVG images that you can use completely free and without attribution.",
      "price": "Free"
    },
    {
      "title": "Humaans",
      "link": "https://www.humaans.com/",
      "desc": "Mix-and-match illustrations of people with a design library. Rotate, position, and customize clothes, hair, and poses.",
      "price": "Free"
    },
    {
      "title": "DrawKit",
      "link": "https://www.drawkit.com/",
      "desc": "Free and premium vector illustrations, icons, and 3D illustrations. Fully customizable and royalty-free.",
      "price": "Freemium"
    },
    {
      "title": "Open Peeps",
      "link": "https://www.openpeeps.com/",
      "desc": "A hand-drawn illustration library to create scenes of people. Combine different expressions, clothing, and styles.",
      "price": "Free"
    },
    {
      "title": "ManyPixels",
      "link": "https://www.manypixels.co/gallery",
      "desc": "Search through 2,500+ royalty-free illustrations to power up your landing pages, blogs, and social media posts.",
      "price": "Free"
    },
    {
      "title": "ira Design",
      "link": "https://iradesign.io/",
      "desc": "Build your own custom illustrations using hand-drawn vector components, mixing gradients and shapes.",
      "price": "Free"
    },
    {
      "title": "Glaze",
      "link": "https://www.glazestock.com/",
      "desc": "Free vector illustrations for commercial use, featuring unique styles and illustrations from vetted designers.",
      "price": "Freemium"
    },
    {
      "title": "Storyset",
      "link": "https://storyset.com/",
      "desc": "Awesome free vector illustrations to customize and animate. Perfect for presentations, websites, or apps.",
      "price": "Free"
    }
  ],
  "premium-illustration-systems": [
    {
      "title": "Craftwork",
      "link": "https://craftwork.design/",
      "desc": "High-quality design assets, UX/UI kits, and premium illustration packages for professional creators.",
      "price": "Paid"
    },
    {
      "title": "LS Graphics",
      "link": "https://www.ls.graphics/",
      "desc": "Premium illustration libraries, mockups, and UI kits crafted with extreme care and detail.",
      "price": "Paid"
    },
    {
      "title": "Freepik illustrations",
      "link": "https://www.freepik.com/vectors/illustrations",
      "desc": "Massive library of vector graphics, visual resources, and premium illustration bundles.",
      "price": "Freemium"
    }
  ]
};

const categories = {
  "free-illustration-libraries": {
    title: "Free Illustration Libraries",
    desc: "High-quality vector illustrations and customizable characters available for free personal and commercial projects."
  },
  "premium-illustration-systems": {
    title: "Premium Illustration Systems",
    desc: "Comprehensive design assets and systems featuring modular, high-fidelity characters and scenes for brand representation."
  }
};

let htmlContent = `
  <p style="font-size: 1.05rem; margin-bottom: 25px; line-height: 1.85;">
    Finding high-quality vector illustrations is a great way to elevate website landing pages, onboarding screens, and presentations. Instead of using generic stock photos, custom illustrations add personality, visual branding, and clear storytelling to your interfaces.
  </p>
  <p style="font-size: 1.05rem; margin-bottom: 35px; line-height: 1.85;">
    Here is a curated catalog of the best <strong>11 illustration websites</strong> featuring free vector libraries, customizable modular character engines, and premium design systems to boost your visual layouts.
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

ARTICLE_REGISTRY["best-illustration-websites"] = {
  id: "best-illustration-websites",
  subcategoryId: ["icons-illustrations", "web-ui"],
  categoryId: ["tools", "ui-design"],
  title: "Best Free Illustration Websites for UI Designers",
  description: "Curated list of the best websites to find free, high-quality vector illustrations and customizable graphics for UI/UX projects.",
  date: "2026-06-22",
  thumbnail: "assets/thumbnails/best-illustration-websites.svg",
  youtubeUrl: "",
  tags: ["ui design", "illustrations", "vectors", "graphics", "resources", "tools"],
  content: htmlContent
};
})();
