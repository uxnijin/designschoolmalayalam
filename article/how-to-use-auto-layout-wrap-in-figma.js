// ============================================================
//  ARTICLE: How to Use Auto Layout Wrap in Figma
// ============================================================

ARTICLE_REGISTRY["how-to-use-auto-layout-wrap-in-figma"] = {
  id: "how-to-use-auto-layout-wrap-in-figma",
  thumbnail: "assets/thumbnails/how-to-use-auto-layout-wrap-in-figma.svg",
  subcategoryId: "auto-layout",
  categoryId: "figma",
  title: "How to Use Auto Layout Wrap in Figma",
  description: "Learn how to build responsive grids, tag lists, and content blocks in Figma using the native Auto Layout Wrap feature.",
  date: "2026-07-05",
  youtubeUrl: "",
  
  tags: ["figma", "auto layout", "wrap", "responsive design", "grids", "ui design"],
  content: `
    <p style="font-size: 1.05rem; margin-bottom: 25px;">
      For years, Figma designers had to choose between manual positioning or complex nested containers to build responsive wrapping grids (like tag lists or photo galleries). With the introduction of <strong>Auto Layout Wrap</strong>, Figma solved this problem natively.
    </p>
    <p style="margin-bottom: 25px;">
      Auto Layout Wrap allows child elements within a container to flow onto a new line automatically when the parent container's width is shrunk. This tutorial walks you through how to use it, configure limits, and build highly responsive components.
    </p>

    <h3>What is Auto Layout Wrap?</h3>
    <p style="margin-bottom: 15px;">
      Unlike the traditional <strong>Horizontal (→)</strong> and <strong>Vertical (↓)</strong> layouts, <strong>Wrap (↩)</strong> acts like a reflowing grid. If you have 6 cards inside a horizontal container and the container is too narrow to hold them all, the cards that don't fit will automatically wrap down to form a second row.
    </p>

    <h3>Step 1: Apply Auto Layout and Select Wrap</h3>
    <p style="margin-bottom: 15px;">
      Select the elements you want to wrap (for example, a list of textual pill tags) and press <kbd style="background:#eee; padding:2px 6px; border-radius:4px; font-size:0.9em;">Shift + A</kbd> to apply Auto Layout.
    </p>
    <p style="margin-bottom: 15px;">
      In the Auto Layout settings panel on the right sidebar, click the third icon next to the direction arrows (it looks like a curved arrow pointing down-left, representing <strong>Wrap</strong>).
    </p>

    <blockquote style="border-left: 4px solid var(--accent); padding-left: 16px; margin: 25px 0; color: var(--text-2); font-style: italic;">
      "Wrap is the key to creating realistic tag clouds, responsive grid systems, and multi-line card layouts that adjust exactly like real CSS Flexbox."
    </blockquote>

    <h3>Step 2: Setting Min and Max Widths</h3>
    <p style="margin-bottom: 15px;">
      To make wrapping look professional, you should specify size limits on the child elements. For example, if you have card components, you don't want them to shrink to 50px wide before wrapping.
    </p>
    <ul style="margin-bottom: 25px; padding-left: 20px;">
      <li style="margin-bottom: 8px;">Select a child card within the wrapped container.</li>
      <li style="margin-bottom: 8px;">In the width settings drop-down, select <strong>Add min width</strong> and set it to a realistic value (e.g., <code>250px</code>).</li>
      <li style="margin-bottom: 8px;">Now, when you resize the parent container, the cards will shrink down to 250px, and instead of shrinking further, they will wrap to the next row.</li>
    </ul>

    <h3>Step 3: Aligning Wrapped Content</h3>
    <p style="margin-bottom: 15px;">
      When elements wrap, you can control their alignment. In the Auto Layout panel, you can align elements to the top-left, top-center, or stretch them to fill the container:
    </p>
    <ul style="margin-bottom: 25px; padding-left: 20px;">
      <li style="margin-bottom: 8px;"><strong>Fill Container (width):</strong> When combined with wrapping, children will expand to fill the extra empty space in a row before wrapping.</li>
      <li style="margin-bottom: 8px;"><strong>Gap settings:</strong> You can set independent horizontal and vertical gap spaces between wrapped items.</li>
    </ul>

    <h3>Conclusion</h3>
    <p style="margin-bottom: 15px;">
      Figma's Wrap feature brings visual design tools closer to how web browsers behave. By combining Auto Layout Wrap with Min and Max widths, you can create prototypes that behave exactly like front-end production code.
    </p>
  `
};
