import json

# Load parsed design inspiration websites
with open("scratch/inspiration_websites_by_category.json", "r", encoding="utf-8") as f:
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
        # Allow items with empty descriptions if they are highly self-explanatory, 
        # but let's provide a default placeholder if description is empty just in case.
        if not desc:
            desc = f"Curated design inspiration showcase for {title}."
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

print(f"Total cleaned design inspiration websites: {total_items}")

# JavaScript template
js_content = """(() => {
// ============================================================
//  ARTICLE: Best UI & Web Design Inspiration Websites | TOOOLS.design
// ============================================================

const toolsData = """ + json.dumps(cleaned_data, indent=2) + """;

const categories = {
  "ui": {
    title: "UI Design Inspiration",
    desc: "Curated galleries showcasing interface design components, layouts, and interactive design patterns."
  },
  "web": {
    title: "Web Design Inspiration",
    desc: "Websites and showreels featuring award-winning designs, creative layouts, and immersive interactions."
  },
  "vibe-coding": {
    title: "Vibe Coding & Interactive Inspo",
    desc: "Creative code showcases, interactive UI prototypes, and experimental frontend animations."
  },
  "portfolio": {
    title: "Creative Portfolios",
    desc: "Exceptional design and developer portfolios featuring visual layouts and narrative case studies."
  },
  "saas": {
    title: "SaaS & App Layouts",
    desc: "Real-world examples of SaaS web apps, pricing matrices, onboarding flows, and customer dashboards."
  },
  "lp": {
    title: "Landing Pages",
    desc: "Galleries dedicated to high-converting landing pages, structured layout conversions, and SaaS homepages."
  },
  "mobile": {
    title: "Mobile UI & App Flows",
    desc: "Screen flows, transition states, and interface patterns compiled from top iOS and Android apps."
  },
  "product-startup": {
    title: "Product & Startup Design",
    desc: "Showcases highlighting beautiful startup landing pages, product interactions, and hardware showcases."
  },
  "ecommerce-ad": {
    title: "E-Commerce & Advertising",
    desc: "Visual inspiration for e-commerce checkouts, product listings, and digital advertising layouts."
  },
  "email-inspo": {
    title: "Email Marketing Inspiration",
    desc: "Exceptional design examples of onboarding sequences, newsletters, and transactional emails."
  },
  "photography": {
    title: "Photography Inspiration",
    desc: "Stunning photographic portfolios, editorial style frames, and visual lookbooks."
  },
  "video": {
    title: "Video & Motion Inspiration",
    desc: "Cinematic videos, 3D motion design showreels, and UI micro-animations."
  },
  "logo": {
    title: "Logo & Brand Mark Inspo",
    desc: "Curated vector logos, clean logotypes, and icon marks from top visual designers."
  },
  "branding": {
    title: "Branding & Identity Showcases",
    desc: "Comprehensive brand identity packages, physical packaging designs, and typography guidelines."
  },
  "graphic-design": {
    title: "Graphic Design Inspiration",
    desc: "Print layout design, posters, editorial typesetting, and conceptual packaging."
  },
  "illustration": {
    title: "Illustration Inspiration",
    desc: "Beautiful digital paintings, vector artwork, character design, and 2D compositions."
  },
  "data-visualization": {
    title: "Data Visualization & Infographics",
    desc: "Creative data plots, map-based designs, and complex interactive diagrams."
  },
  "inspiration-search-and-organization": {
    title: "Inspiration Search & Organization Tools",
    desc: "Search engines, browser extensions, and mood-boarding tools to organize your visual swipe file."
  }
};

let htmlContent = `
  <p style="font-size: 1.05rem; margin-bottom: 25px; line-height: 1.85;">
    Developing a strong visual library is key to becoming a top-tier designer. Rather than designing from a blank canvas, studying real-world UI design layouts, award-winning SaaS websites, startup portfolios, and brand guides can inspire your next creative breakthrough.
  </p>
  <p style="font-size: 1.05rem; margin-bottom: 35px; line-height: 1.85;">
    Here is a curated directory of the best <strong>""" + str(total_items) + """ design inspiration websites</strong> categorized by discipline. Discover landing page galleries, mobile design pattern search engines, interactive portfolio showcases, and typography databases.
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

ARTICLE_REGISTRY["ui-web-design-inspiration-websites"] = {
  id: "ui-web-design-inspiration-websites",
  subcategoryId: ["design-inspiration", "web-ui"],
  categoryId: ["tools", "ui-design"],
  title: "Best UI & Web Design Inspiration Websites",
  description: "Curated catalog of """ + str(total_items) + """ design inspiration websites covering landing pages, mobile flows, portfolio showcases, branding, illustration, and graphic layouts.",
  date: "2026-06-17",
  thumbnail: "", // empty to use document fallback icon
  youtubeUrl: "", // no video
  tags: ["ui design", "web design", "inspiration", "portfolio", "branding", "resources", "layouts"],
  content: htmlContent
};
})();
"""

# Write Javascript file
output_file = "article/ui-web-design-inspiration-websites.js"
with open(output_file, "w", encoding="utf-8") as f:
    f.write(js_content)

print(f"Successfully compiled {output_file}")
