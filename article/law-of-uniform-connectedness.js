// ============================================================
//  ARTICLE: Law of Uniform Connectedness - Visualizing Connections
// ============================================================

ARTICLE_REGISTRY["law-of-uniform-connectedness"] = {
  id: "law-of-uniform-connectedness",
  thumbnail: "assets/thumbnails/law-of-uniform-connectedness.svg", // add custom image path here (e.g. assets/my-image.png) to replace
  subcategoryId: "ux-laws",
  categoryId: "ux-design",
  title: "Law of Uniform Connectedness - Visualizing Connections",
  description: "Understand the Law of Uniform Connectedness and the power of visual links. Learn to connect elements using lines, backgrounds, and shapes.",
  date: "2026-06-17",
  
  
  tags: ["ux design","ux laws","usability","gestalt","visual hierarchy"],
  content: `
<p style="font-size: 1.05rem; margin-bottom: 25px;">
        When separate elements are visually connected by lines, colors, or frames, they appear much more related than items with no physical connection. Visual links establish the strongest grouping relationships.
      </p>
      <p style="font-size: 1.05rem; margin-bottom: 35px;">
        This grouping effect is driven by the <strong>Law of Uniform Connectedness</strong>. It states that elements that are visually connected are perceived as more related than elements with no connection. Connecting related items helps users parse complex workflows quickly.
      </p>

      <h3>What is Uniform Connectedness?</h3>
      <p style="margin-bottom: 15px;">
        The Law of Uniform Connectedness is a Gestalt grouping principle. It asserts that human perception naturally links elements that share a physical connection—such as a line, a common container, or a shared background band. This connection creates a strong visual unit, even if the elements inside have different shapes, sizes, or colors.
      </p>

      <h3>Key Takeaways for Designers</h3>
      <ul style="margin-bottom: 25px; padding-left: 20px;">
        <li style="margin-bottom: 8px;"><strong>Connect Flow Steps:</strong> Use physical lines or bands to show the sequence in multi-step wizard layouts.</li>
        <li style="margin-bottom: 8px;"><strong>Group Functional Areas:</strong> Bind inputs and controls together by placing them on a shared background color block.</li>
        <li style="margin-bottom: 8px;"><strong>Override Proximity Cues:</strong> Use connectedness to link elements that are separated by whitespace or other elements.</li>
      </ul>

      <h3>Origins and Gestalt Psychology</h3>
      <p style="margin-bottom: 15px;">
        While Gestalt psychologists like Max Wertheimer originally established proximity and similarity in the early 20th century, the Law of Uniform Connectedness was defined in later perceptual research. It was introduced to detail how physical links function as the most powerful visual grouping signals in complex designs.
      </p>

      <h3>How to Apply Connectedness in UI Design</h3>
      <p style="margin-bottom: 15px;">
        You can build clear structural associations by implementing these visual connectors:
      </p>
      <ol style="margin-bottom: 25px; padding-left: 20px;">
        <li style="margin-bottom: 8px;"><strong>Design Step Indicators:</strong> Connect sequential steps in progress bars with a solid line to show they belong to the same workflow.</li>
        <li style="margin-bottom: 8px;"><strong>Format Dropdown Menus:</strong> Link dropdown choices directly to their trigger buttons using border lines or continuous panel backgrounds.</li>
        <li style="margin-bottom: 8px;"><strong>Use Shared Header Tabs:</strong> Connect active tabs directly to their content panes using continuous borders, showing they are part of the same container.</li>
      </ol>

      <hr style="border: 0; border-top: 1px solid var(--border); margin: 40px 0;" />
      
      <p style="font-size: 0.85rem; color: var(--text-3); line-height: 1.5;">
        This article is based on Law of Uniform Connectedness, a foundational law of design. 
        Learn more and explore the full catalog at <a href="https://lawsofux.com/law-of-uniform-connectedness/" target="_blank" rel="noopener" style="color: var(--accent); text-decoration: underline;">Laws of UX by Jon Yablonski</a>. All rights reserved.
      </p>
  `
};
