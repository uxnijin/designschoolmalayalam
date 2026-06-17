// ============================================================
//  ARTICLE: Law of Common Region - Grouping with Boundaries
// ============================================================

ARTICLE_REGISTRY["law-of-common-region"] = {
  id: "law-of-common-region",
  thumbnail: "assets/thumbnails/law-of-common-region.svg", // add custom image path here (e.g. assets/my-image.png) to replace
  subcategoryId: "ux-laws",
  categoryId: "ux-design",
  title: "Law of Common Region - Grouping with Boundaries",
  description: "Understand the Law of Common Region and how boundaries organize content. Learn to design cards and dividers that establish structure.",
  date: "2026-06-17",
  
  
  tags: ["ux design","ux laws","usability","gestalt","visual hierarchy"],
  content: `
<p style="font-size: 1.05rem; margin-bottom: 25px;">
        Why do we automatically group items together when they are enclosed inside a box or border? In visual design, boundaries are the fastest way to signal structure and relationships to the human eye.
      </p>
      <p style="font-size: 1.05rem; margin-bottom: 35px;">
        This behavior is driven by the <strong>Law of Common Region</strong>. It states that elements are perceived as belonging to the same group if they share an area with a clearly defined boundary. Using cards, containers, and shaded backgrounds helps users navigate complex UI structures easily.
      </p>

      <h3>What is the Law of Common Region?</h3>
      <p style="margin-bottom: 15px;">
        The Law of Common Region is a Gestalt principle of visual grouping. It asserts that when objects are contained within a defined boundary (such as a border, background color, or shadow), the mind naturally perceives them as a single related set. This grouping cue is so strong that it can easily override other visual relationships, like proximity or similarity.
      </p>

      <h3>Key Takeaways for Designers</h3>
      <ul style="margin-bottom: 25px; padding-left: 20px;">
        <li style="margin-bottom: 8px;"><strong>Use Clear Borders and Backgrounds:</strong> Group related elements by enclosing them in cards, panels, or blocks with distinct colors.</li>
        <li style="margin-bottom: 8px;"><strong>Define Content Sections:</strong> Establish a clear layout structure by using borders or background cards to separate high-level content modules.</li>
        <li style="margin-bottom: 8px;"><strong>Minimize Cognitive Effort:</strong> Helping users organize information visually reduces their mental effort and speeds up task comprehension.</li>
      </ul>

      <h3>Origins and Gestalt Psychology</h3>
      <p style="margin-bottom: 15px;">
        The Law of Common Region is rooted in <strong>Gestalt psychology</strong>, which emerged in Germany in the early 20th century. The Gestalt school—founded by Max Wertheimer, Wolfgang Köhler, and Kurt Koffka—focused on understanding how the human mind naturally organizes separate visual elements into unified structures.
      </p>
      <p style="margin-bottom: 15px;">
        While Gestalt psychologists originally identified laws like proximity and similarity, the Law of Common Region was formally added as a distinct principle of grouping in later design studies to describe the dominant grouping power of borders and containers.
      </p>

      <h3>How to Apply Common Region in UI Layouts</h3>
      <p style="margin-bottom: 15px;">
        You can build clean visual hierarchies by containing related interactive items:
      </p>
      <ol style="margin-bottom: 25px; padding-left: 20px;">
        <li style="margin-bottom: 8px;"><strong>Implement Card-Based Interfaces:</strong> Group product images, titles, descriptions, and buttons inside individual cards to show they belong to the same item.</li>
        <li style="margin-bottom: 8px;"><strong>Enclose Navigation Bars:</strong> Enclose top header bars or side navigation lists with a border or a distinct background fill to separate them from main body text.</li>
        <li style="margin-bottom: 8px;"><strong>Highlight Important Callouts:</strong> Wrap crucial notices or alerts in boxes with soft background tints to draw focus and indicate their distinct purpose.</li>
      </ol>

      <hr style="border: 0; border-top: 1px solid var(--border); margin: 40px 0;" />
      
      <p style="font-size: 0.85rem; color: var(--text-3); line-height: 1.5;">
        This article is based on Law of Common Region, a foundational law of design. 
        Learn more and explore the full catalog at <a href="https://lawsofux.com/law-of-common-region/" target="_blank" rel="noopener" style="color: var(--accent); text-decoration: underline;">Laws of UX by Jon Yablonski</a>. All rights reserved.
      </p>
  `
};
