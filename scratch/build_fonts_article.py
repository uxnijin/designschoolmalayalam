import json

# Load parsed fonts
with open("scratch/fonts_by_category.json", "r", encoding="utf-8") as f:
    fonts_data = json.load(f)

# JavaScript template
js_content = """(() => {
// ============================================================
//  ARTICLE: Best Font Libraries & Inspiration | TOOOLS.design
// ============================================================

const fontsData = """ + json.dumps(fonts_data, indent=2) + """;

const categories = {
  "font-inspiration": {
    title: "Font Inspiration & Typography in Use",
    desc: "Inspirational galleries, type trends, and digitized archives displaying fonts in actual designs to spark typography ideas."
  },
  "free-fonts-libraries": {
    title: "Free Fonts & Libraries",
    desc: "Curated catalogues of free, open-source, and commercial-use typefaces to download for digital and print designs."
  },
  "font-pairings": {
    title: "Font Pairing & Combinations",
    desc: "Web tools and directories to find complementary sans-serif, serif, and display type combinations."
  },
  "pro-fonts-foundries": {
    title: "Pro Fonts & Foundries",
    desc: "Premium type design studios and marketplaces hosting retail typefaces and trial files for designers."
  },
  "font-editors": {
    title: "Font Editors",
    desc: "Mac applications, open-source utilities, and browser font editors to build or modify vector typefaces."
  },
  "font-managers": {
    title: "Font Managers",
    desc: "Lightning-fast desktop apps for macOS and Windows to organize, preview, and sync font libraries."
  },
  "font-finders": {
    title: "Font Finders & Identifiers",
    desc: "Image identifiers, browser inspectors, and search engines to detect specific fonts used on live web pages."
  },
  "type-scale-calculators": {
    title: "Type Scale Calculators",
    desc: "Mathematical scales, baseline grid line-height calculators, and design token generators."
  },
  "experiments-new-fonts": {
    title: "Experiments & Variable Fonts",
    desc: "Retro terminal glyphs, variable grotesques, color typefaces, and custom code-generated font projects."
  },
  "additional-typography-resources": {
    title: "Additional Typography Resources",
    desc: "Special character copiers, CSS type engines, branding font searches, and free digital courses."
  }
};

let htmlContent = `
  <p style="font-size: 1.05rem; margin-bottom: 25px; line-height: 1.85;">
    Typography is the foundation of any great digital product or visual identity. Selecting a cohesive family, choosing the right size hierarchy, and finding type combinations sets the tone and accessibility of your designs.
  </p>
  <p style="font-size: 1.05rem; margin-bottom: 35px; line-height: 1.85;">
    Here is a curated collection of the best <strong>124 font libraries, pairing tools, premium foundries, managers, and typography inspiration sites</strong> to elevate your digital and brand design workflows.
  </p>
`;

for (const [key, catInfo] of Object.entries(categories)) {
  const catItems = fontsData[key];
  if (!catItems || catItems.length === 0) continue;
  
  htmlContent += `
    <h2 style="font-size: 1.55rem; border-bottom: 1.5px solid var(--border); padding-bottom: 8px; margin-top: 48px; margin-bottom: 12px; font-weight: 700;">${catInfo.title}</h2>
    <p style="font-size: 0.95rem; color: var(--text-3); margin-bottom: 24px; line-height: 1.6;">${catInfo.desc}</p>
    
    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; margin-bottom: 32px;">
  `;
  
  catItems.forEach(item => {
    let badgeColor = "#FF6F2C"; // fallback orange
    let bgOpacity = "rgba(255, 111, 44, 0.1)";
    if (item.price.toLowerCase() === "free") {
      badgeColor = "#10B981"; // green
      bgOpacity = "rgba(16, 185, 129, 0.1)";
    } else if (item.price.toLowerCase().includes("paid")) {
      badgeColor = "#3B82F6"; // blue
      bgOpacity = "rgba(59, 130, 246, 0.1)";
    } else if (item.price.toLowerCase().includes("attribution")) {
      badgeColor = "#F59E0B"; // yellow
      bgOpacity = "rgba(245, 158, 11, 0.1)";
    } else if (item.price.toLowerCase().includes("freemium") || item.price.toLowerCase().includes("beta") || item.price.toLowerCase().includes("trial")) {
      badgeColor = "#8B5CF6"; // purple
      bgOpacity = "rgba(139, 92, 246, 0.1)";
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

ARTICLE_REGISTRY["font-library-and-inspiration"] = {
  id: "font-library-and-inspiration",
  subcategoryId: ["typography-fonts", "typography"],
  categoryId: ["tools", "ui-design"],
  title: "Best Font Libraries & Inspiration Sites",
  description: "Explore the ultimate collection of 124 free font libraries, pairing tools, pro foundries, desktop font managers, type editors, and font inspiration resources.",
  date: "2026-06-17",
  thumbnail: "", // empty to use document fallback icon
  youtubeUrl: "", // no video
  tags: ["ui design", "fonts", "typography", "inspiration", "tools", "resources"],
  content: htmlContent
};
})();
"""

# Write Javascript file
output_file = "article/font-library-and-inspiration.js"
with open(output_file, "w", encoding="utf-8") as f:
    f.write(js_content)

print("Successfully compiled article/font-library-and-inspiration.js")
