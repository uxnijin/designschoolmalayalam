// ============================================================
//  ARTICLE: UI Card Design: Spacing, Layouts, and Hierarchy
// ============================================================

ARTICLE_REGISTRY["ui-card-design-principles"] = {
  id: "ui-card-design-principles",
  thumbnail: "assets/thumbnails/ui-card-design-principles.svg",
  subcategoryId: "layout-design",
  categoryId: "ui-design",
  title: "UI Card Design: Spacing, Layouts, and Visual Hierarchy",
  description: "A comprehensive guide to designing perfect card components with clean padding, text hierarchy, and subtle shadow styles.",
  date: "2026-07-05",
  youtubeUrl: "",
  
  tags: ["card design", "ui design", "spacing", "layout", "visual hierarchy", "components"],
  content: `
    <p style="font-size: 1.05rem; margin-bottom: 25px;">
      Cards are the most common component in modern UI design. They group related information together in a single container, making complex layouts clean and easy to scan.
    </p>
    <p style="margin-bottom: 25px;">
      However, designing a "simple" card is harder than it looks. Poor spacing, bad text contrast, or harsh shadows can quickly make a layout look messy and unprofessional. Here is a step-by-step guide to mastering UI card design.
    </p>

    <h3>1. Establish Clean Padding (Internal Spacing)</h3>
    <p style="margin-bottom: 15px;">
      Padding is the space between the content of the card and its outer border.
    </p>
    <ul style="margin-bottom: 25px; padding-left: 20px;">
      <li style="margin-bottom: 8px;"><strong>Use proportional padding:</strong> For web cards, a padding of <code>24px</code> is standard. For compact mobile screens, use <code>16px</code>.</li>
      <li style="margin-bottom: 8px;"><strong>Avoid tight padding:</strong> If your text is too close to the card edge, it feels cramped and reduces readability. Give content room to breathe.</li>
    </ul>

    <h3>2. Structure Typography Hierarchy</h3>
    <p style="margin-bottom: 15px;">
      A typical card contains a category tag, title, body snippet, and metadata (like a date or author). Guide the viewer's eye:
    </p>
    <ul style="margin-bottom: 25px; padding-left: 20px;">
      <li style="margin-bottom: 8px;"><strong>The Title:</strong> Bold, dark (high contrast), and reasonably large (18px - 20px).</li>
      <li style="margin-bottom: 8px;"><strong>The Category/Tag:</strong> Small (11px - 12px), uppercase, and colored (e.g. your primary accent color).</li>
      <li style="margin-bottom: 8px;"><strong>The Body Snippet:</strong> Regular weight, medium grey (lower contrast), and smaller size (14px - 15px).</li>
    </ul>

    <blockquote style="border-left: 4px solid var(--accent); padding-left: 16px; margin: 25px 0; color: var(--text-2); font-style: italic;">
      "A card should read like a tiny newspaper article: Category first, Big Headline next, small teaser paragraph last."
    </blockquote>

    <h3>3. Keep Shadows Subtle and Realistic</h3>
    <p style="margin-bottom: 15px;">
      Harsh, dark, black shadows instantly ruin a UI. To make cards look premium and modern:
    </p>
    <ul style="margin-bottom: 25px; padding-left: 20px;">
      <li style="margin-bottom: 8px;">Use a very low opacity for your shadow color (between 4% and 8%).</li>
      <li style="margin-bottom: 8px;">Instead of pure black shadow (<code>rgba(0,0,0,0.1)</code>), mix in a tiny bit of your background hue (e.g., a dark navy shadow if your background has bluish tones).</li>
      <li style="margin-bottom: 8px;">Increase the blur radius to make the shadow soft and diffused. An offset of <code>y: 4px, blur: 16px</code> is a great starting point.</li>
    </ul>

    <h3>4. Group Actions Logically</h3>
    <p style="margin-bottom: 15px;">
      If the card is clickable, make it obvious. You can make the entire card a link, or add a distinct text link like "Read More →" or an arrow icon in the bottom corner.
    </p>

    <h3>Conclusion</h3>
    <p style="margin-bottom: 15px;">
      A great card component uses layout consistency. By using a strict spacing scale (e.g., multiples of 8px), styling hierarchy with weight and color rather than just size, and keeping card borders and shadows soft, you can create a beautiful grid interface.
    </p>
  `
};
