import json

# Load parsed design color tools
with open("scratch/color_tools_by_category.json", "r", encoding="utf-8") as f:
    tools_data = json.load(f)

# Clean data
cleaned_data = {}
total_items = 0
for cat_id, items in tools_data.items():
    cleaned_items = []
    for item in items:
        title = item.get("title", "").strip()
        desc = item.get("desc", "").strip()
        if not title:
            continue
        if not desc:
            desc = f"Discover beautiful color patterns with {title}."
        if "curate" in title.lower() or "how these" in title.lower():
            continue
        cleaned_items.append({
            "title": title,
            "link": item.get("link"),
            "desc": desc,
            "price": item.get("price", "Free")
        })
    if cleaned_items:
        cleaned_data[cat_id] = cleaned_items
        total_items += len(cleaned_items)

print(f"Total cleaned design color tools: {total_items}")

# JavaScript template
js_content = """(() => {
// ============================================================
//  ARTICLE: Best Color Inspiration & Palette Tools | TOOOLS.design
// ============================================================

const toolsData = """ + json.dumps(cleaned_data, indent=2) + """;

const categories = {
  "color-inspiration": {
    title: "Color Inspiration Platforms",
    desc: "Curated collections, daily palettes, and trending designs to spark your color combinations."
  },
  "color-palette-generators": {
    title: "Color Palette Generators",
    desc: "AI generators and interactive builders to instantly create cohesive color palettes and schemes."
  },
  "color-libraries-systems": {
    title: "Color Libraries & Systems",
    desc: "Standardized color frameworks, design system token systems, and color palette directories."
  },
  "colors-in-context": {
    title: "Colors in Context & Visualizers",
    desc: "Visualization tools to preview how color combinations look on layouts, illustrations, and user interfaces."
  },
  "gradient-inspiration": {
    title: "Gradient Inspiration & Editors",
    desc: "Handpicked linear and radial gradients, custom editors, and CSS transition builders."
  },
  "color-picker": {
    title: "Color Pickers & Samplers",
    desc: "Browser extensions, color pipettes, and eyedropper utilities to capture colors from any screen."
  },
  "color-converter": {
    title: "Color Converters & Formatters",
    desc: "Translation utilities to convert color units between HEX, RGB, HSL, LCH, and OKLCH."
  },
  "color-contrast-checker": {
    title: "Color Contrast & Accessibility Checkers",
    desc: "Accessibility tests and contrast ratios built to check if your colors satisfy WCAG compliance standards."
  },
  "color-books": {
    title: "Color Books & Literature",
    desc: "Essential books, literature, and documentation to study color physics and psychology."
  }
};

let htmlContent = `
  <p style="font-size: 1.05rem; margin-bottom: 25px; line-height: 1.85;">
    Mastering color theory and contrast is one of the most important aspects of visual UI design. Having cohesive palette builders, color converters, and contrast checkers in your toolkit can elevate the look and accessibility of your layouts.
  </p>
  <p style="font-size: 1.05rem; margin-bottom: 35px; line-height: 1.85;">
    Here is a curated directory of the best <strong>""" + str(total_items) + """ color tools</strong>. Use these resources to generate palettes, find gradient schemes, convert formats, and ensure accessibility standards.
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

ARTICLE_REGISTRY["best-color-inspiration-tools"] = {
  id: "best-color-inspiration-tools",
  subcategoryId: ["color-palettes", "color-theory"],
  categoryId: ["tools", "ui-design"],
  title: "Best Color Inspiration & Palette Tools",
  description: "Curated catalog of """ + str(total_items) + """ color tools covering palette generators, contrast accessibility tests, conversion platforms, and gradients.",
  date: "2026-06-17",
  thumbnail: "", // empty to use document fallback icon
  youtubeUrl: "", // no video
  tags: ["ui design", "color theory", "palettes", "contrast", "gradients", "resources"],
  content: htmlContent
};
})();
"""

# Write Javascript file
output_file = "article/best-color-inspiration-tools.js"
with open(output_file, "w", encoding="utf-8") as f:
    f.write(js_content)

print(f"Successfully compiled {output_file}")
