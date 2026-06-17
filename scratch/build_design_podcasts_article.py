import json

# Load parsed design podcasts
with open("scratch/design_podcasts_by_category.json", "r", encoding="utf-8") as f:
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
            desc = f"Listen and learn design with {title}."
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

print(f"Total cleaned design podcasts: {total_items}")

# JavaScript template
js_content = """(() => {
// ============================================================
//  ARTICLE: Best Design Podcasts | TOOOLS.design
// ============================================================

const toolsData = """ + json.dumps(cleaned_data, indent=2) + """;

const categories = {
  "design-creative-podcasts": {
    title: "Design & Creativity Podcasts",
    desc: "Inspirational design conversations detailing creative psychology, visual art trends, and design philosophy."
  },
  "product-design-podcasts": {
    title: "Product Design Podcasts",
    desc: "Industry chats analyzing interface systems, design operations, product management, and startup execution."
  },
  "ux-design-podcasts": {
    title: "UX Design Podcasts",
    desc: "Podcasts exploring qualitative research protocols, cognitive human behaviors, and user testing strategies."
  },
  "branding-podcasts": {
    title: "Branding & Logo Podcasts",
    desc: "Audio catalogs dedicated to typography development, visual logo marks, and corporate brand positioning."
  },
  "graphic-design-podcasts": {
    title: "Graphic Design Podcasts",
    desc: "Discussions detailing poster designs, print layout typesetting, and editorial graphic design history."
  },
  "web-design-podcasts": {
    title: "Web Design & Dev Podcasts",
    desc: "Frontend developer conversations, creative CSS tricks, and award-winning browser animation design."
  },
  "motion-design": {
    title: "Motion Design Podcasts",
    desc: "Podcasts focused on 3D animations, Lottie transition mechanics, and micro-interactive visual physics."
  }
};

let htmlContent = `
  <p style="font-size: 1.05rem; margin-bottom: 25px; line-height: 1.85;">
    Tuning into design podcasts is a fantastic way to consume industry knowledge, learn from design leaders, and understand product workflows during your daily commute or design sessions.
  </p>
  <p style="font-size: 1.05rem; margin-bottom: 35px; line-height: 1.85;">
    Here is a curated directory of the best <strong>""" + str(total_items) + """ design podcasts</strong>. Discover podcasts covering creative philosophy, product layout engineering, brand identities, and vector illustrations.
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

ARTICLE_REGISTRY["best-design-podcasts"] = {
  id: "best-design-podcasts",
  subcategoryId: ["podcasts-blogs", "basics", "user-research"],
  categoryId: ["tools", "ui-design", "ux-design"],
  title: "Best Design Podcasts to Listen",
  description: "Curated catalog of """ + str(total_items) + """ design podcasts covering product design, user experience, branding, illustration, and creative code.",
  date: "2026-06-17",
  thumbnail: "", // empty to use document fallback icon
  youtubeUrl: "", // no video
  tags: ["ui design", "podcasts", "audio", "ux design", "branding", "resources"],
  content: htmlContent
};
})();
"""

# Write Javascript file
output_file = "article/best-design-podcasts.js"
with open(output_file, "w", encoding="utf-8") as f:
    f.write(js_content)

print(f"Successfully compiled {output_file}")
