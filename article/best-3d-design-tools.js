(() => {
// ============================================================
//  ARTICLE: Best 3D Design Tools & Resource Sites for Web & UI
// ============================================================

const toolsData = {
  "3d-editors": [
    {
      "title": "Spline",
      "link": "https://spline.design/",
      "desc": "A free, web-based 3D design tool to easily create interactive 3D experiences. Features real-time collaboration and physics.",
      "price": "Freemium"
    },
    {
      "title": "Vectary",
      "link": "https://www.vectary.com/",
      "desc": "Create, customize, and share interactive 3D and AR designs directly in your web browser. Perfect for product displays.",
      "price": "Paid"
    },
    {
      "title": "Womp",
      "link": "https://womp.com/",
      "desc": "A revolutionary, easy-to-use browser-based 3D modeling tool built on signed distance fields (SDFs) for organic shapes.",
      "price": "Freemium"
    },
    {
      "title": "Blender",
      "link": "https://www.blender.org/",
      "desc": "The open-source, industry-standard 3D creation suite supporting modeling, rigging, animation, rendering, and compositing.",
      "price": "Free"
    }
  ],
  "3d-asset-libraries": [
    {
      "title": "Shapefest",
      "link": "https://www.shapefest.com/",
      "desc": "A massive library of free and high-quality 3D shapes in PNG format with different angles and materials.",
      "price": "Free + Paid"
    },
    {
      "title": "3dicons",
      "link": "https://3dicons.co/",
      "desc": "Open-source, beautiful 3D icons created in Blender. Highly customizable and free for commercial projects.",
      "price": "Free"
    },
    {
      "title": "Sketchfab",
      "link": "https://sketchfab.com/",
      "desc": "The leading platform to buy, sell, and discover the best 3D models on the web, supporting all major file formats.",
      "price": "Free + Paid"
    },
    {
      "title": "Three.js Editor",
      "link": "https://threejs.org/editor/",
      "desc": "A simple online 3D editor to compose WebGL scenes and export code snippets using the Three.js library.",
      "price": "Free"
    }
  ]
};

const categories = {
  "3d-editors": {
    title: "3D Visual Editors",
    desc: "Intuitive web-based and desktop 3D software built for designers to compose scenes, model graphics, and animate shapes without CAD complexity."
  },
  "3d-asset-libraries": {
    title: "3D Asset & Icon Libraries",
    desc: "Curated collections of ready-made, high-resolution 3D models and icons that can be imported directly into design projects."
  }
};

let htmlContent = `
  <p style="font-size: 1.05rem; margin-bottom: 25px; line-height: 1.85;">
    Adding 3D elements is one of the most powerful design trends of recent years. Moving beyond flat vectors, modern web and mobile applications use real-time interactive 3D models and high-quality 3D renders to capture user attention and tell engaging product stories.
  </p>
  <p style="font-size: 1.05rem; margin-bottom: 35px; line-height: 1.85;">
    Here is a curated catalog of the best <strong>8 3D design tools and asset libraries</strong>. Use these resources to design, render, and animate 3D experiences directly in the browser or import premium assets into your layouts.
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

ARTICLE_REGISTRY["best-3d-design-tools"] = {
  id: "best-3d-design-tools",
  subcategoryId: ["design-utilities", "ai-utilities"],
  categoryId: ["tools", "ui-design"],
  title: "Best 3D Design Tools & Resource Sites for Web & UI",
  description: "Discover the best 3D visual editors, modeling platforms, and ready-to-use 3D asset libraries for modern web and mobile UI design.",
  date: "2026-06-22",
  thumbnail: "assets/thumbnails/best-3d-design-tools.svg",
  youtubeUrl: "",
  tags: ["ui design", "3d design", "rendering", "spline", "resources", "tools"],
  content: htmlContent
};
})();
