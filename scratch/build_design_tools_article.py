import json

# Load parsed design tools
with open("scratch/design_tools_by_category.json", "r", encoding="utf-8") as f:
    tools_data = json.load(f)

# JavaScript template
js_content = """(() => {
// ============================================================
//  ARTICLE: Best Design Tools Across Disciplines | TOOOLS.design
// ============================================================

const toolsData = """ + json.dumps(tools_data, indent=2) + """;

const categories = {
  "design-prototyping": {
    title: "Design & Prototyping",
    desc: "Powerful cloud-based and desktop platforms built to design, prototype, and collaborate on user interfaces."
  },
  "design-system-styleguide-tools": {
    title: "Design System & Styleguides",
    desc: "Tools to compile component code documentation, maintain design tokens, and sync visual assets with product codebases."
  },
  "brand-platforms": {
    title: "Brand Management",
    desc: "Digital hubs to centralize brand style guides, marketing assets, logo formats, and design standards."
  },
  "vector-tools": {
    title: "Vector Design & Illustration",
    desc: "Professional drawing, sketching, and procedural vector editing software for illustrators and graphic artists."
  },
  "photo-image-editing": {
    title: "Photo & Image Editing",
    desc: "Image manipulation, background removal, photo retouching, and painting tools powered by GPU rendering and AI."
  },
  "desktop-publishing": {
    title: "Desktop Publishing (DTP)",
    desc: "Page layout and publishing software for typesetting magazines, multi-page print collateral, and books."
  },
  "motion-animation-tools": {
    title: "Motion & Animation",
    desc: "2D physics animators, Lottie exporters, SVG transition builders, and interactive web timeline tools."
  },
  "video-tools": {
    title: "Video Editing & Production",
    desc: "Non-linear video editors, screen recording tools, transcoding utilities, and visual review workflow platforms."
  },
  "3d-design": {
    title: "3D Design & Modeling",
    desc: "Modeling, rendering, lighting, and simulation suites to create photorealistic 3D assets and animated sequences."
  },
  "architecture-interior-design": {
    title: "Architecture & Interior Design",
    desc: "CAD systems, spatial planners, and interior design visualizers for engineering and blueprints."
  },
  "presentation-tools": {
    title: "Presentation & Slide Decks",
    desc: "Interactive deck builders, narrative tools, and template suites to convey business ideas visually."
  },
  "design-hand-off-measuring-tools": {
    title: "Design Handoff",
    desc: "Specifications, asset inspectors, and measuring systems to translate design mockups into code."
  },
  "version-control": {
    title: "Version Control",
    desc: "File history tracking and branching tools for designers to collaborate without losing assets."
  },
  "image-optimization-tools": {
    title: "Image Optimization",
    desc: "Web image compressions, SVG minifiers, and file format optimization utilities to speed up page loads."
  },
  "generative-experimental": {
    title: "Generative & Experimental Design",
    desc: "Procedural layout systems, creative generative code, and artistic design templates."
  },
  "useful-design-helper": {
    title: "Useful Helpers & Utilities",
    desc: "Color color-pickers, screen capture extensions, asset finders, and other mini utility tools."
  }
};

let htmlContent = `
  <p style="font-size: 1.05rem; margin-bottom: 25px; line-height: 1.85;">
    Selecting the right tool for the job can dramatically accelerate a designer's workflow. Whether you are building complex UI screens, animating interactive vectors, managing design systems, or typesetting layouts, there is a specialized platform built for your exact needs.
  </p>
  <p style="font-size: 1.05rem; margin-bottom: 35px; line-height: 1.85;">
    Here is a curated directory of the best <strong>241 design tools</strong> across disciplines covering visual design, prototyping, brand platforms, motion, publishing, and code handoff.
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

ARTICLE_REGISTRY["best-design-tools"] = {
  id: "best-design-tools",
  subcategoryId: ["design-utilities", "basics"],
  categoryId: ["tools", "ui-design"],
  title: "Best Design Tools Across Disciplines",
  description: "Curated catalog of 241 design tools covering prototyping, brand management, vector graphics, motion animation, DTP, presentation, and image scaling.",
  date: "2026-06-17",
  thumbnail: "", // empty to use document fallback icon
  youtubeUrl: "", // no video
  tags: ["ui design", "design tools", "prototyping", "figma", "vector", "motion", "resources"],
  content: htmlContent
};
})();
"""

# Write Javascript file
output_file = "article/best-design-tools.js"
with open(output_file, "w", encoding="utf-8") as f:
    f.write(js_content)

print("Successfully compiled article/best-design-tools.js")
