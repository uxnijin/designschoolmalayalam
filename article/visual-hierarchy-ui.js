// ============================================================
//  ARTICLE: Visual Hierarchy
// ============================================================

ARTICLE_REGISTRY["visual-hierarchy-ui"] = {
  id: "visual-hierarchy-ui",
  thumbnail: "assets/thumbnails/visual-hierarchy-ui.svg",
  subcategoryId: "layout-design",
  categoryId: "ui-design",
  title: "Visual Hierarchy: The Blueprint of Great UI Design",
  description: "Understand the fundamental rules of visual hierarchy in UI design. Learn how to guide your user's eyes through an interface using size, weight, contrast, and spacing.",
  date: "2026-06-22",
  
  tags: ["ui design", "visual hierarchy", "layout", "composition", "typography"],
  content: `
    <p style="margin-bottom: 15px;">When you land on a webpage, you don't read every word from left to right, top to bottom. Instead, your eye scans the layout, landing on major headings, colorful buttons, and large images before consuming secondary copy. The order in which you perceive these elements is determined by the designer's use of <strong>Visual Hierarchy</strong>.</p>
    <p style="margin-bottom: 15px;">Visual hierarchy is the arrangement and styling of visual elements on a page to communicate their relative importance. A UI without clear hierarchy feels cluttered, overwhelming, and difficult to scan.</p>

    <h3>The Core Pillars of Visual Hierarchy</h3>
    <p style="margin-bottom: 15px;">To establish hierarchy, designers leverage several visual tools. Here are the primary pillars of UI visual structure:</p>

    <h4>1. Size and Scale</h4>
    <p style="margin-bottom: 15px;">It is the most basic rule: **larger elements attract the eye first**. A huge headline will instantly draw attention over a small block of body text. However, size is relative; a medium-sized button only looks large if the surrounding elements are small.</p>

    <h4>2. Color and Contrast</h4>
    <p style="margin-bottom: 15px;">Bright colors stand out against muted backgrounds. High contrast elements (like black text on white) command attention over low contrast ones (light grey text on white). Designers use contrast to highlight critical actions, like using a vibrant accent color for primary call-to-action (CTA) buttons.</p>

    <h4>3. Typography (Weight and Style)</h4>
    <p style="margin-bottom: 15px;">Using different font sizes, weights (bold, regular, light), and styles (all caps, italics) creates clear visual blocks. Bold text appears "heavier" and stands out, making it ideal for headings, whereas regular weight text is best for readable paragraphs.</p>

    <h4>4. Spacing and Proximity</h4>
    <p style="margin-bottom: 15px;">Generous whitespace (empty space) acts as visual breathing room. Surrounding an element with empty space makes it stand out, giving it premium importance. Proximity defines relationships: items grouped close together are seen as related, while isolated items represent distinct content blocks.</p>

    <h4>5. Alignment and Grids</h4>
    <p style="margin-bottom: 15px;">Aligning elements along a grid establishes a sense of order. When elements are misaligned intentionally, they stand out immediately, which can be useful for badges or urgent alerts.</p>

    <table style="width: 100%; border-collapse: collapse; margin: 20px 0; border: 1px solid var(--border); font-size: 0.9rem;">
      <thead>
        <tr style="background-color: var(--border); text-align: left;">
          <th style="padding: 12px; border: 1px solid var(--border); width: 25%;">Hierarchy Tool</th>
          <th style="padding: 12px; border: 1px solid var(--border); width: 45%;">UI Application Example</th>
          <th style="padding: 12px; border: 1px solid var(--border);">Design Goal</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">Size</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Large hero typography (e.g., 48px) for page introduction.</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Grabs user attention instantly when landing on a page.</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">Contrast</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Using a bright accent color for the primary CTA button.</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Directs focus toward conversion and primary actions.</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">Typography</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Heading styles (H1, H2, H3) using heavy font weights.</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Organizes text content into scannable chunks.</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">Spacing</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Leaving generous empty margins around secondary blocks.</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Reduces cognitive load and increases content readability.</td>
        </tr>
      </tbody>
    </table>

    <h3>Common Scanning Patterns</h3>
    <p style="margin-bottom: 15px;">Users usually scan screens in predictable paths. Designers layout hierarchy to match these patterns:</p>
    <ul>
      <li><p style="margin-bottom: 10px;"><strong>The F-Pattern:</strong> Common on text-heavy pages like articles. Users read the top line, then scan down the left side, looking at heading starts. Place critical information along the top and left margins.</p></li>
      <li><p style="margin-bottom: 10px;"><strong>The Z-Pattern:</strong> Common on landing pages. The eye moves from top-left to top-right, diagonal down to bottom-left, then across to bottom-right. Place logos top-left, CTAs top-right and bottom-right, matching this natural flow.</p></li>
    </ul>

    <h3>Conclusion</h3>
    <p style="margin-bottom: 15px;">Visual hierarchy is the invisible logic of interface design. By intentionally applying contrast, scale, typography, and spacing, you guide the user's attention exactly where it needs to go, making your products scannable, accessible, and effortless to navigate.</p>
  `
};
