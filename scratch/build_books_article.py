import json

# Load parsed books
with open("scratch/books_by_category.json", "r", encoding="utf-8") as f:
    books_data = json.load(f)

# JavaScript template
js_content = """(() => {
// ============================================================
//  ARTICLE: Best Books for Designers | TOOOLS.design
// ============================================================

const booksData = """ + json.dumps(books_data, indent=2) + """;

const categories = {
  "gen-ai-design": {
    title: "Prompt Engineering & Gen AI",
    desc: "Books exploring how generative AI tools and prompt engineering influence creative workflows and future design practices."
  },
  "branding-logo-identity-design": {
    title: "Brand, Logo & Identity Design",
    desc: "Books that explore how to create memorable brands, strong visual identities, and enduring logo systems."
  },
  "visual-graphic-design": {
    title: "Visual & Graphic Design",
    desc: "Titles covering typography, layout, composition, color, and visual storytelling foundations."
  },
  "ui-digital-product-design": {
    title: "UI & Digital Product Design",
    desc: "Essential reads covering digital product strategy, atomic systems, mobile patterns, and interface design."
  },
  "ux-design-behavior-psychology": {
    title: "UX, Behavior & Psychology",
    desc: "Books analyzing cognitive psychology, behavioral triggers, empathy, and intuitive usability strategies."
  },
  "web-design": {
    title: "Web Design",
    desc: "Resources and guides to bridge the gap between design software and interactive web code."
  },
  "creativity-ideation-design-thinking": {
    title: "Creativity & Design Thinking",
    desc: "Books exploring design thinking methodology, brainstorming, and unlocking creative confidence."
  },
  "drawing-illustration": {
    title: "Drawing & Illustration",
    desc: "Guides and visual catalogs to learn illustration techniques, figure drawing, and iPad design."
  },
  "motion-storytelling": {
    title: "Motion & Storytelling",
    desc: "Titles dissecting key principles of animation, motion graphics, visual story structures, and comic formats."
  },
  "marketing-personal-branding": {
    title: "Marketing & Personal Branding",
    desc: "Books covering audience positioning, StoryBrand message-building, and portfolio presentation skills."
  },
  "advertising-copywriting-communication-design": {
    title: "Advertising & Copywriting",
    desc: "Classic guides to master creative advertising, headline writing, and selling ideas."
  },
  "ethical-inclusive-sustainable-design": {
    title: "Ethical & Inclusive Design",
    desc: "Resources explaining digital accessibility, inclusive design practices, and responsible company ethics."
  }
};

let htmlContent = `
  <p style="font-size: 1.05rem; margin-bottom: 25px; line-height: 1.85;">
    Expanding your design knowledge goes far beyond checking screenshots or browsing short UI tutorials. Deeply understanding psychology, branding structure, atomic systems, and visual history requires sitting down with foundational design texts.
  </p>
  <p style="font-size: 1.05rem; margin-bottom: 35px; line-height: 1.85;">
    Here is a curated shelf of the best <strong>116 books for designers</strong> covering generative AI engineering, visual identity, interaction patterns, UX research, creative storytelling, and design career growth.
  </p>
`;

for (const [key, catInfo] of Object.entries(categories)) {
  const catItems = booksData[key];
  
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
          <p style="font-size: 0.9rem; color: var(--text-2); margin-top: 0; margin-bottom: 16px; line-height: 1.6;">By ${item.desc}</p>
        </div>
        <div>
          <a href="${item.link}" target="_blank" style="display: inline-block; color: #FFFFFF; background-color: #FF6F2C; padding: 7px 16px; border-radius: var(--radius-sm); font-weight: 700; text-decoration: none; font-size: 0.8rem; transition: background 0.2s; box-shadow: 0 2px 4px rgba(255, 111, 44, 0.2); letter-spacing: 0.2px;">Get Book</a>
        </div>
      </div>
    `;
  });
  
  htmlContent += `</div>`;
}

ARTICLE_REGISTRY["books-for-designers"] = {
  id: "books-for-designers",
  subcategoryId: ["learning-education", "basics", "user-research"],
  categoryId: ["tools", "ui-design", "ux-design"],
  title: "Best Books for Designers",
  description: "Curated collection of 116 design books covering AI prompt engineering, visual branding, UX psychology, digital interface patterns, and design thinking.",
  date: "2026-06-17",
  thumbnail: "", // empty to use document fallback icon
  youtubeUrl: "", // no video
  tags: ["ui design", "books", "basics", "resources", "tools", "ux design", "branding"],
  content: htmlContent
};
})();
"""

# Write Javascript file
output_file = "article/books-for-designers.js"
with open(output_file, "w", encoding="utf-8") as f:
    f.write(js_content)

print("Successfully compiled article/books-for-designers.js")
