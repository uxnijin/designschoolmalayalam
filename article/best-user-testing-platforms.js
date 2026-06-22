(() => {
// ============================================================
//  ARTICLE: Best User Testing Platforms for UX Research & Validation
// ============================================================

const toolsData = {
  "unmoderated-testing": [
    {
      "title": "Maze",
      "link": "https://maze.design/",
      "desc": "A continuous product discovery platform. Import prototypes from Figma, Adobe XD, or Sketch to gather quantitative usability metrics.",
      "price": "Freemium"
    },
    {
      "title": "Useberry",
      "link": "https://www.useberry.com/",
      "desc": "Get rich user insights through codeless prototype testing, heatmaps, card sorting, and tree testing metrics.",
      "price": "Paid"
    },
    {
      "title": "UXtweak",
      "link": "https://www.uxtweak.com/",
      "desc": "An all-in-one UX research tool containing card sorting, tree testing, prototype testing, and website session recordings.",
      "price": "Freemium"
    },
    {
      "title": "Userbrain",
      "link": "https://userbrain.net/",
      "desc": "Automate user testing. Order video recordings of real testers navigating your website or software interface.",
      "price": "Free Trial"
    }
  ],
  "research-panels": [
    {
      "title": "UserTesting",
      "link": "https://www.usertesting.com/",
      "desc": "The leading video-first customer insights platform to watch real users engage with your digital products, apps, or physical experiences.",
      "price": "Free Trial"
    },
    {
      "title": "Lyssna",
      "link": "https://www.lyssna.com/",
      "desc": "Formerly UsabilityHub. Conduct 5-second tests, first-click tests, preference surveys, and card sorting with a fast user panel.",
      "price": "Freemium"
    },
    {
      "title": "Lookback",
      "link": "https://lookback.io/",
      "desc": "A dedicated remote research platform for live moderated interviews and unmoderated session recordings with high-fidelity audio/video.",
      "price": "Paid"
    },
    {
      "title": "Dovetail",
      "link": "https://dovetailapp.com/",
      "desc": "Import research data, analyze qualitative interview transcripts with AI, and structure a centralized customer research library.",
      "price": "Freemium"
    }
  ]
};

const categories = {
  "unmoderated-testing": {
    title: "Unmoderated Usability Testing",
    desc: "Set up task scenarios and automatically record heatmaps, click streams, and task completion metrics on your interactive prototypes."
  },
  "research-panels": {
    title: "Research Recruitment & Insights",
    desc: "Hire target user panels, conduct live moderated interviews, and organize customer feedback transcripts into repositories."
  }
};

let htmlContent = `
  <p style="font-size: 1.05rem; margin-bottom: 25px; line-height: 1.85;">
    Designing without user research is like shooting in the dark. Usability testing ensures that your assumptions are correct, highlights where users face friction, and validates that your interface is intuitive before committing expensive engineering resources.
  </p>
  <p style="font-size: 1.05rem; margin-bottom: 35px; line-height: 1.85;">
    Here is a curated catalog of the best <strong>8 user testing platforms and research tools</strong>. Use these engines to run first-click tests, moderate remote interviews, and track quantitative usability metrics on Figma prototypes.
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

ARTICLE_REGISTRY["best-user-testing-platforms"] = {
  id: "best-user-testing-platforms",
  subcategoryId: ["ux-utilities", "user-research"],
  categoryId: ["tools", "ux-design"],
  title: "Best User Testing Platforms for UX Research & Validation",
  description: "A comprehensive guide to the top user testing tools, card sorting systems, and feedback platforms to validate your designs with real users.",
  date: "2026-06-22",
  thumbnail: "assets/thumbnails/best-user-testing-platforms.svg",
  youtubeUrl: "",
  tags: ["ux design", "usability testing", "ux research", "maze", "resources", "tools"],
  content: htmlContent
};
})();
