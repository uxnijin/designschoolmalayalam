import json

# Load parsed UX tools
with open("scratch/ux_tools_by_category.json", "r", encoding="utf-8") as f:
    tools_data = json.load(f)

# Clean data (filter out empty description / curate items)
cleaned_data = {}
total_items = 0
for cat_id, items in tools_data.items():
    cleaned_items = []
    for item in items:
        title = item.get("title", "").strip()
        desc = item.get("desc", "").strip()
        if not title or not desc:
            continue
        if "curate" in title.lower() or "how these" in title.lower():
            continue
        cleaned_items.append(item)
    if cleaned_items:
        cleaned_data[cat_id] = cleaned_items
        total_items += len(cleaned_items)

print(f"Total cleaned UX tools: {total_items}")

# JavaScript template
js_content = """(() => {
// ============================================================
//  ARTICLE: Best UX Tools for Research, Flows & Prototyping | TOOOLS.design
// ============================================================

const toolsData = """ + json.dumps(cleaned_data, indent=2) + """;

const categories = {
  "ux-research": {
    title: "UX Research Platforms",
    desc: "Repository databases, interview managers, and qualitative synthesis tools to compile, search, and analyze user feedback."
  },
  "flows-charts-diagrams": {
    title: "Flows, Charts & Diagrams",
    desc: "Visual mapping and flowchart builders to document user journeys, map application logic, and build visual sitemaps."
  },
  "wireframing-tools": {
    title: "Wireframing Tools",
    desc: "Low-fidelity builders, digital sketchpads, and printable templates to quickly draft screen layouts and map interaction structures."
  },
  "prototyping-tools": {
    title: "Prototyping Tools",
    desc: "Interactive design platforms ranging from simple click-through systems to high-fidelity, advanced logic-driven simulation suites."
  },
  "ux-collaboration-workshops": {
    title: "UX Collaboration & Workshops",
    desc: "Digital whiteboards, structured facilitation templates, and visual planning hubs built to connect cross-functional teams."
  },
  "user-testing-feedback": {
    title: "User Testing & Feedback",
    desc: "Remote unmoderated testing, prototype validation tools, user feedback widgets, and interactive survey builders."
  },
  "behavior-analytics": {
    title: "Behavior Analytics",
    desc: "Visual heatmaps, session recording, product funnels, and event-based tracking platforms to analyze how users navigate your product."
  },
  "ux-copy-dummy-content": {
    title: "UX Copy & Dummy Content",
    desc: "Placeholder generation platforms, name generators, logo placeholders, dummy profiles, and skeleton UI builders for visual mockups."
  }
};

let htmlContent = `
  <p style="font-size: 1.05rem; margin-bottom: 25px; line-height: 1.85;">
    Equipping yourself with the right user experience tools is vital for creating intuitive and conversion-friendly interfaces. From conducting deep user research to designing interactive prototypes and measuring live visitor behavior, the modern UX practitioner relies on a wide array of specialized software.
  </p>
  <p style="font-size: 1.05rem; margin-bottom: 35px; line-height: 1.85;">
    Here is a curated catalog of the best <strong>""" + str(total_items) + """ UX tools</strong> categorized by function. Use these platforms to accelerate your user research, wireframing, diagramming, user testing, and behavioral analytics workflows.
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

ARTICLE_REGISTRY["best-ux-tools"] = {
  id: "best-ux-tools",
  subcategoryId: ["ux-utilities", "prototyping"],
  categoryId: ["tools", "ux-design"],
  title: "Best UX Tools for Research, Flows & Prototyping",
  description: "Curated catalog of """ + str(total_items) + """ UX design tools covering research platforms, user testing, behavior analytics, wireframing, flowcharts, prototyping, and collaboration.",
  date: "2026-06-17",
  thumbnail: "", // empty to use document fallback icon
  youtubeUrl: "", // no video
  tags: ["ux design", "ux tools", "user research", "usability testing", "prototyping", "wireframing", "resources"],
  content: htmlContent
};
})();
"""

# Write Javascript file
output_file = "article/best-ux-tools.js"
with open(output_file, "w", encoding="utf-8") as f:
    f.write(js_content)

print(f"Successfully compiled {output_file}")
