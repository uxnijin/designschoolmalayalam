(() => {
// ============================================================
//  ARTICLE: Best Design Portfolio Builders to Showcase Your Work
// ============================================================

const toolsData = {
  "portfolio-builders": [
    {
      "title": "Uxfol.io",
      "link": "https://uxfol.io/",
      "desc": "A portfolio builder created specifically for UX/UI designers. Features intuitive case study layouts, mockup generators, and copywriting help.",
      "price": "Freemium"
    },
    {
      "title": "Framer",
      "link": "https://www.framer.com/",
      "desc": "Design and publish gorgeous, high-fidelity portfolios directly from your canvas. Features incredible scrolling effects, animations, and custom domains.",
      "price": "Freemium"
    },
    {
      "title": "Readymag",
      "link": "https://readymag.com/",
      "desc": "An in-browser design tool for creating microsites, portfolios, and magazines with complete layout freedom and complex typography control.",
      "price": "Freemium"
    },
    {
      "title": "Bento",
      "link": "https://bento.me/",
      "desc": "A beautiful, minimalist single-page link-in-bio portfolio builder that organizes your links and projects into a clean grid.",
      "price": "Free"
    },
    {
      "title": "Webflow",
      "link": "https://webflow.com/",
      "desc": "A powerful design-first web builder giving complete control over HTML, CSS, and Javascript. Perfect for fully customized portfolios.",
      "price": "Freemium"
    },
    {
      "title": "Adobe Portfolio",
      "link": "https://portfolio.adobe.com/",
      "desc": "Build a custom website to showcase your creative work. Free if you have an active Adobe Creative Cloud subscription.",
      "price": "Free with CC"
    }
  ],
  "social-showcase": [
    {
      "title": "Behance",
      "link": "https://www.behance.net/",
      "desc": "Adobe's massive showcase network where creative professionals upload comprehensive case studies, design projects, and get feedback.",
      "price": "Free"
    },
    {
      "title": "Dribbble",
      "link": "https://dribbble.com/",
      "desc": "The leading destination to find and showcase creative work. Designers upload quick, visual 'shots' of user interfaces and graphics.",
      "price": "Free"
    }
  ]
};

const categories = {
  "portfolio-builders": {
    title: "Specialized Portfolio Builders",
    desc: "Visual page editors, custom-case-study templates, and no-code hosting solutions built for designers to display their works."
  },
  "social-showcase": {
    title: "Social Showcase Networks",
    desc: "Large global designer communities to upload design snaps, build client authority, and discover job postings."
  }
};

let htmlContent = `
  <p style="font-size: 1.05rem; margin-bottom: 25px; line-height: 1.85;">
    A portfolio is a designer's most critical asset. It is the proof of your problem-solving skills, design aesthetics, and layout mastery. To secure hiring callbacks in UI/UX or graphic design, your portfolio needs to be responsive, well-formatted, and easy to read.
  </p>
  <p style="font-size: 1.05rem; margin-bottom: 35px; line-height: 1.85;">
    Here is a curated catalog of the best <strong>8 portfolio builders and showcase networks</strong>. Use these platforms to draft case studies, preview mockup layouts, and share your work with recruiters globally.
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
    } else if (item.price.toLowerCase().includes("paid") || item.price.toLowerCase().includes("cc")) {
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

ARTICLE_REGISTRY["best-design-portfolio-builders"] = {
  id: "best-design-portfolio-builders",
  subcategoryId: ["website-builders", "communities-jobs"],
  categoryId: ["tools", "ui-design"],
  title: "Best Design Portfolio Builders to Showcase Your Work",
  description: "A curated list of the best portfolio hosting platforms, no-code builders, and case study editors to build a professional UI/UX portfolio.",
  date: "2026-06-22",
  thumbnail: "assets/thumbnails/best-design-portfolio-builders.svg",
  youtubeUrl: "",
  tags: ["ui design", "ux design", "portfolio builder", "case study", "resources", "tools"],
  content: htmlContent
};
})();
