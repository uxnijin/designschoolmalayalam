// ============================================================
//  ARTICLE: Miller's Law - The Magical Number Seven
// ============================================================

ARTICLE_REGISTRY["millers-law"] = {
  id: "millers-law",
  thumbnail: "assets/thumbnails/millers-law.svg", // add custom image path here (e.g. assets/my-image.png) to replace
  subcategoryId: "ux-laws",
  categoryId: "ux-design",
  title: "Miller's Law - The Magical Number Seven",
  description: "Understand Miller's Law and working memory limits. Learn design strategies like chunking to simplify complex data sets.",
  date: "2026-06-17",
  
  
  tags: ["ux design","ux laws","usability","psychology","millers law"],
  content: `
<p style="font-size: 1.05rem; margin-bottom: 25px;">
        Why do we struggle to remember a 10-digit number unless it is broken down with spaces or dashes? Our immediate working memory can only handle a very small amount of information at one time.
      </p>
      <p style="font-size: 1.05rem; margin-bottom: 35px;">
        This limitation is defined by <strong>Miller's Law</strong>. It states that the average person can only keep 7 (plus or minus 2) items in their working memory. Grouping separate elements into cohesive chunks helps users process and memorize information easily.
      </p>

      <h3>What is Miller's Law?</h3>
      <p style="margin-bottom: 15px;">
        Miller's Law highlights the limits of immediate memory capacity. Because our working memory can only process roughly 5 to 9 units at once, presenting a wall of unstructured items causes instant cognitive overload. Grouping related content into clear modules enables users to scan, evaluate, and recall information.
      </p>

      <h3>Key Takeaways for Designers</h3>
      <ul style="margin-bottom: 25px; padding-left: 20px;">
        <li style="margin-bottom: 8px;"><strong>Organize in Chunks:</strong> Break long lists of numbers, links, or text blocks into groups of 3 to 5 items.</li>
        <li style="margin-bottom: 8px;"><strong>Avoid Layout Overload:</strong> Keep menu lists, dashboard cards, and navigation paths simple to avoid exceeding working memory.</li>
        <li style="margin-bottom: 8px;"><strong>Use Miller's Law Safely:</strong> Do not use the "magical number seven" to justify arbitrary design constraints, as memory limits vary by individual context.</li>
      </ul>

      <h3>Origins and George Miller</h3>
      <p style="margin-bottom: 15px;">
        The law was coined in 1956 by cognitive psychologist <strong>George A. Miller</strong> in his paper, <em>"The Magical Number Seven, Plus or Minus Two: Some Limits on Our Capacity for Processing Information."</em>
      </p>
      <p style="margin-bottom: 15px;">
        Miller observed that while absolute human judgment was limited to roughly seven categories, short-term memory could be expanded significantly by organizing separate bits of data into unified chunks. This insight laid the groundwork for modern information design and computer interface layout.
      </p>

      <h3>How to Apply Miller's Law in UI Design</h3>
      <p style="margin-bottom: 15px;">
        You can structure information to match human memory limits:
      </p>
      <ol style="margin-bottom: 25px; padding-left: 20px;">
        <li style="margin-bottom: 8px;"><strong>Chunk Numeric Formats:</strong> Automatically format credit cards, phone numbers, and IBAN fields as grouped numbers.</li>
        <li style="margin-bottom: 8px;"><strong>Limit Main Navigation Choices:</strong> Keep header navigation links under 7 items, grouping other choices under clean dropdown lists.</li>
        <li style="margin-bottom: 8px;"><strong>Group Lists of Data:</strong> Use headers and horizontal lines to separate dashboard items into distinctive blocks.</li>
      </ol>

      <hr style="border: 0; border-top: 1px solid var(--border); margin: 40px 0;" />
      
      <p style="font-size: 0.85rem; color: var(--text-3); line-height: 1.5;">
        This article is based on Miller's Law, a foundational law of design. 
        Learn more and explore the full catalog at <a href="https://lawsofux.com/millers-law/" target="_blank" rel="noopener" style="color: var(--accent); text-decoration: underline;">Laws of UX by Jon Yablonski</a>. All rights reserved.
      </p>
  `
};
