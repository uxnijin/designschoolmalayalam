import json

# Load parsed design communities
with open("scratch/design_communities_by_category.json", "r", encoding="utf-8") as f:
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
            desc = f"Curated communities and networks for {title}."
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

print(f"Total cleaned design communities: {total_items}")

# JavaScript template
js_content = """(() => {
// ============================================================
//  ARTICLE: Best Design Communities & Job Boards | TOOOLS.design
// ============================================================

const toolsData = """ + json.dumps(cleaned_data, indent=2) + """;

const categories = {
  "design-communities": {
    title: "Online Design Communities",
    desc: "Slack groups, Discord servers, and forums where designers share work, ask for feedback, and network."
  },
  "design-meetups": {
    title: "Local Design Meetups",
    desc: "Platforms to find local design meetups, UX chapter meetings, and design talks in your area."
  },
  "design-conferences-events": {
    title: "Design Conferences & Events",
    desc: "Global events, design festivals, and visual design summits to learn from industry leaders."
  },
  "design-awards": {
    title: "Design Awards & Showcases",
    desc: "Prestigious awards platforms and visual showcases featuring state-of-the-art web designs and products."
  },
  "job-boards": {
    title: "Design Job Boards",
    desc: "Specialized job boards to find remote UX/UI roles, freelance visual design contracts, and product design careers."
  },
  "professional-networks": {
    title: "Professional Design Networks",
    desc: "Platforms to build your visual portfolio, network with creative professionals, and get hired."
  }
};

let htmlContent = `
  <p style="font-size: 1.05rem; margin-bottom: 25px; line-height: 1.85;">
    Connecting with fellow designers and finding the right career opportunities can significantly boost your professional growth. Whether you are looking to network, ask for feedback on your designs, attend events, or search for job opportunities, joining active creative circles is essential.
  </p>
  <p style="font-size: 1.05rem; margin-bottom: 35px; line-height: 1.85;">
    Here is a curated directory of the best <strong>""" + str(total_items) + """ design communities, meetups, award platforms, and job boards</strong>. Join these spaces to stay connected with the design world and land your next role.
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

ARTICLE_REGISTRY["design-communities"] = {
  id: "design-communities",
  subcategoryId: ["communities-jobs", "basics", "user-research"],
  categoryId: ["tools", "ui-design", "ux-design"],
  title: "Best Design Communities & Job Boards",
  description: "Curated catalog of """ + str(total_items) + """ design spaces, including online communities, local meetups, global events, showcases, and job boards.",
  date: "2026-06-17",
  thumbnail: "", // empty to use document fallback icon
  youtubeUrl: "", // no video
  tags: ["ui design", "design communities", "job boards", "conferences", "meetups", "resources"],
  content: htmlContent
};
})();
"""

# Write Javascript file
output_file = "article/design-communities.js"
with open(output_file, "w", encoding="utf-8") as f:
    f.write(js_content)

print(f"Successfully compiled {output_file}")
