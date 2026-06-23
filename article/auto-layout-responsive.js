// ============================================================
//  ARTICLE: Mastering Figma Auto Layout
// ============================================================

ARTICLE_REGISTRY["auto-layout-responsive"] = {
  id: "auto-layout-responsive",
  thumbnail: "assets/thumbnails/auto-layout-responsive.svg",
  subcategoryId: "auto-layout",
  categoryId: "figma",
  title: "Mastering Figma Auto Layout: A Step-by-Step Guide to Responsive Layouts",
  description: "Learn how to use nested frames, resizing constraints (Hug, Fixed, Fill), padding, wrapping, and absolute positioning in Figma Auto Layout to build fluid interfaces.",
  date: "2026-06-23",
  tags: ["Figma", "Auto Layout", "Responsive Design", "UI Design", "Layout Grid"],
  content: `
    <p style="font-size: 1.05rem; margin-bottom: 25px;">
      In the early days of interface design, components were constructed using static coordinates and boxes. If text lengths changed or screens resized, the elements would overlap and break. Figma **Auto Layout** changed the game, introducing CSS Flexbox-like behaviors directly into the design canvas.
    </p>
    <p style="margin-bottom: 25px;">
      Auto Layout allows you to create dynamic, responsive designs that adjust automatically to content length, screen scale, and localization demands. Let's explore the advanced mechanics needed to master Auto Layout.
    </p>

    <h3>1. Resizing Rules: Hug, Fixed, and Fill</h3>
    <p style="margin-bottom: 15px;">
      Understanding how parents and children resize is the key to mastering Auto Layout:
    </p>
    <ul style="margin-bottom: 20px; padding-left: 20px; list-style-type: disc;">
      <li style="margin-bottom: 8px;"><strong>Fixed Width/Height:</strong> The element keeps its exact, specified dimensions regardless of content changes or container resizing.</li>
      <li style="margin-bottom: 8px;"><strong>Hug Contents:</strong> The parent frame shrinks or expands to fit its children, plus its padding values (e.g., a button hug-fitting its text label).</li>
      <li style="margin-bottom: 8px;"><strong>Fill Container:</strong> The child element stretches to occupy whatever width or height is available within its parent Auto Layout container.</li>
    </ul>

    <h3>2. Nested Auto Layout Structures</h3>
    <p style="margin-bottom: 15px;">
      Do not try to build complex components within a single Auto Layout frame. Instead, nest smaller Auto Layout structures to build complex modules.
    </p>
    <p style="margin-bottom: 15px;">
      For example, when building a product card:
    </p>
    <ol style="margin-bottom: 20px; padding-left: 20px; list-style-type: decimal;">
      <li style="margin-bottom: 8px;">Create a horizontal Auto Layout frame for the badge tag and date.</li>
      <li style="margin-bottom: 8px;">Create a vertical Auto Layout frame for the card title, price, and description.</li>
      <li style="margin-bottom: 8px;">Combine the tag frame, title frame, and product image into a third, master vertical Auto Layout frame.</li>
    </ol>

    <blockquote style="border-left: 4px solid var(--accent); padding-left: 16px; margin: 25px 0; color: var(--text-2); font-style: italic;">
      "Nesting structures allows you to apply different layout directions (horizontal for rows, vertical for columns) and distinct spacing settings across sub-elements."
    </blockquote>

    <h3>3. Utilizing Wrap and Min/Max Dimensions</h3>
    <p style="margin-bottom: 15px;">
      Figma's **Wrap** option allows items to flow onto a new line if they exceed the width of the parent container—similar to CSS flex-wrap. This is ideal for tag clouds, photo galleries, or building responsive grid arrays without creating separate mobile and desktop variants.
    </p>
    <p style="margin-bottom: 15px;">
      Combine wrapping with **Min and Max width/height** bounds. For instance, you can set a sidebar width to fill the container but add a min-width of 240px and a max-width of 360px. This prevents layout breaking on extremely small or large screen resolutions.
    </p>

    <h3>4. Absolute Positioning in Auto Layout</h3>
    <p style="margin-bottom: 15px;">
      Sometimes, you want an element (like a close button on a modal, or a notification badge on an icon) to sit on top of other elements without conforming to the strict vertical or horizontal Auto Layout flow.
    </p>
    <p style="margin-bottom: 15px;">
      To do this, select the child element, click the **Absolute Position** icon in the right sidebar (it looks like a small square with crosshairs next to coordinates). This releases the element from the Auto Layout flow, allowing you to position it anywhere using standard alignment constraints.
    </p>

    <h3>Conclusion</h3>
    <p style="margin-bottom: 15px;">
      Auto Layout shifts your mindset from static page drawing to systemic fluid layouts. By nesting frames, choosing resizing rules intelligently, using wrap options, and leveraging absolute positioning, you create high-fidelity prototypes that mimic real code behaviors.
    </p>
  `
};
