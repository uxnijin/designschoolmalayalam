// ============================================================
//  ARTICLE: Von Restorff Effect - Grouping and Isolation
// ============================================================

ARTICLE_REGISTRY["von-restorff-effect"] = {
  id: "von-restorff-effect",
  thumbnail: "assets/thumbnails/von-restorff-effect.svg", // add custom image path here (e.g. assets/my-image.png) to replace
  subcategoryId: "ux-laws",
  categoryId: "ux-design",
  title: "Von Restorff Effect - Grouping and Isolation",
  description: "Understand the Von Restorff Effect (Isolation Effect) in visual layouts. Learn to design high-contrast actions and highlight critical details.",
  date: "2026-06-17",
  
  
  tags: ["ux design","ux laws","usability","von restorff effect","visual hierarchy"],
  content: `
<p style="font-size: 1.05rem; margin-bottom: 25px;">
        When you look at a row of identical grey squares and see one bright red circle, that circle is the only thing you will remember. Our visual system is highly tuned to notice differences in similarity.
      </p>
      <p style="font-size: 1.05rem; margin-bottom: 35px;">
        This attention-grabbing effect is driven by the <strong>Von Restorff Effect</strong> (also known as the Isolation Effect). It predicts that when multiple similar objects are present, the one that differs from the rest is most likely to be remembered. Designing with contrast helps focus users on primary actions.
      </p>

      <h3>What is the Von Restorff Effect?</h3>
      <p style="margin-bottom: 15px;">
        The Von Restorff Effect states that items that stand out from their peers are recalled with much higher accuracy. In user interfaces, we use visual characteristics—like color, size, shape, or motion—to create distinction. This isolation guides the user's attention, making complex screens easier to evaluate.
      </p>

      <h3>Key Takeaways for Designers</h3>
      <ul style="margin-bottom: 25px; padding-left: 20px;">
        <li style="margin-bottom: 8px;"><strong>Highlight Core Actions:</strong> Use visual contrast to draw attention to call-to-action buttons or notices.</li>
        <li style="margin-bottom: 8px;"><strong>Use Restraint:</strong> Do not make too many elements stand out, as this creates visual clutter and neutralizes the isolation effect.</li>
        <li style="margin-bottom: 8px;"><strong>Design Accessibly:</strong> Ensure contrast differences do not rely on color alone, supporting users with visual deficiencies.</li>
      </ul>

      <h3>Origins and Hedwig von Restorff</h3>
      <p style="margin-bottom: 15px;">
        The isolation effect was discovered in 1933 by German psychiatrist and pediatrician <strong>Hedwig von Restorff</strong>.
      </p>
      <p style="margin-bottom: 15px;">
        In her research, von Restorff presented participants with lists of similar items (such as three-digit numbers) containing one isolated, different element (such as a syllable). Her findings proved that participants remembered the isolated item far better than the surrounding similar items, establishing visual contrast as a key driver of human memory.
      </p>

      <h3>How to Apply the Von Restorff Effect</h3>
      <p style="margin-bottom: 15px;">
        You can draw immediate user attention to important areas by introducing these design patterns:
      </p>
      <ol style="margin-bottom: 25px; padding-left: 20px;">
        <li style="margin-bottom: 8px;"><strong>Vary Pricing Columns:</strong> Highlight the "Popular" pricing tier by scaling the card slightly larger and adding a colored badge.</li>
        <li style="margin-bottom: 8px;"><strong>Build High-Contrast Buttons:</strong> Use solid, brand-colored backgrounds for primary buttons, keeping secondary actions in outline or text link styles.</li>
        <li style="margin-bottom: 8px;"><strong>Use Badges on Icons:</strong> Display small, bright red notification badges over cart or message icons to indicate unread status.</li>
      </ol>

      <hr style="border: 0; border-top: 1px solid var(--border); margin: 40px 0;" />
      
      <p style="font-size: 0.85rem; color: var(--text-3); line-height: 1.5;">
        This article is based on Von Restorff Effect, a foundational law of design. 
        Learn more and explore the full catalog at <a href="https://lawsofux.com/von-restorff-effect/" target="_blank" rel="noopener" style="color: var(--accent); text-decoration: underline;">Laws of UX by Jon Yablonski</a>. All rights reserved.
      </p>
  `
};
