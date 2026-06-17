// ============================================================
//  ARTICLE: Law of Similarity - Grouping by Visual Attributes
// ============================================================

ARTICLE_REGISTRY["law-of-similarity"] = {
  id: "law-of-similarity",
  thumbnail: "assets/thumbnails/law-of-similarity.png", // add custom image path here (e.g. assets/my-image.png) to replace
  subcategoryId: "ux-laws",
  categoryId: "ux-design",
  title: "Law of Similarity - Grouping by Visual Attributes",
  description: "Learn the Law of Similarity and how colors, shapes, and sizes communicate function. Design cohesive interfaces using similarity cues.",
  date: "2026-06-17",
  
  
  tags: ["ux design","ux laws","usability","gestalt","visual hierarchy"],
  content: `
<p style="font-size: 1.05rem; margin-bottom: 25px;">
        Why do we instantly know which items in a list are links and which are regular text, even if they are far apart? We use visual attributes to categorize elements automatically.
      </p>
      <p style="font-size: 1.05rem; margin-bottom: 35px;">
        This organization is governed by the <strong>Law of Similarity</strong>. It states that elements that are visually similar will be perceived as related. Aligning color, size, shape, and orientation across similar functions allows users to navigate our designs intuitively.
      </p>

      <h3>What is the Law of Similarity?</h3>
      <p style="margin-bottom: 15px;">
        The Law of Similarity is a Gestalt grouping principle. It states that when elements share visual characteristics, the mind perceives them as belonging to the same group or performing the same function. Similarity can be established using:
      </p>
      <ul style="margin-bottom: 25px; padding-left: 20px;">
        <li style="margin-bottom: 8px;"><strong>Color:</strong> The strongest cue for grouping (e.g., all interactive buttons share a primary brand color).</li>
        <li style="margin-bottom: 8px;"><strong>Shape:</strong> Grouping by structure (e.g., all settings icons share a circular frame).</li>
        <li style="margin-bottom: 8px;"><strong>Size:</strong> Grouping by importance or type (e.g., matching header sizes).</li>
      </ul>

      <h3>Key Takeaways for Designers</h3>
      <ul style="margin-bottom: 25px; padding-left: 20px;">
        <li style="margin-bottom: 8px;"><strong>Maintain Component Consistency:</strong> Ensure all links, buttons, and form inputs look consistent across the entire platform.</li>
        <li style="margin-bottom: 8px;"><strong>Highlight Differences:</strong> Change the visual attributes of items to signal a different status or function (e.g., a destructive warning button in red).</li>
        <li style="margin-bottom: 8px;"><strong>Avoid Design Confusion:</strong> Do not make static design labels look identical to clickable elements.</li>
      </ul>

      <h3>Origins and Gestalt Theory</h3>
      <p style="margin-bottom: 15px;">
        The Law of Similarity is one of the original Gestalt principles formulated by Max Wertheimer in Germany. His studies on human perception demonstrated that our eyes group items that look alike to create an organized view of the world, minimizing the brain's parsing effort.
      </p>

      <h3>How to Apply Similarity in UI Layouts</h3>
      <p style="margin-bottom: 15px;">
        You can build predictable, learnable interfaces by unifying visual styles:
      </p>
      <ol style="margin-bottom: 25px; padding-left: 20px;">
        <li style="margin-bottom: 8px;"><strong>Standardize Links:</strong> Style all text hyperlinks with the same accent color and underline to differentiate them from standard body copy.</li>
        <li style="margin-bottom: 8px;"><strong>Categorize Tabs and Cards:</strong> Use consistent background colors and shapes for card modules belonging to the same category.</li>
        <li style="margin-bottom: 8px;"><strong>Differentiate Actions:</strong> Set primary buttons with solid backgrounds and secondary buttons with outlines to clarify the action hierarchy.</li>
      </ol>

      <hr style="border: 0; border-top: 1px solid var(--border); margin: 40px 0;" />
      
      <p style="font-size: 0.85rem; color: var(--text-3); line-height: 1.5;">
        This article is based on Law of Similarity, a foundational law of design. 
        Learn more and explore the full catalog at <a href="https://lawsofux.com/law-of-similarity/" target="_blank" rel="noopener" style="color: var(--accent); text-decoration: underline;">Laws of UX by Jon Yablonski</a>. All rights reserved.
      </p>
  `
};
