// ============================================================
//  ARTICLE: Figma Auto Layout Tips
// ============================================================

ARTICLE_REGISTRY["figma-auto-layout-tips"] = {
  id: "figma-auto-layout-tips",
  thumbnail: "assets/thumbnails/figma-auto-layout-tips.svg",
  subcategoryId: "auto-layout",
  categoryId: "figma",
  title: "Advanced Figma Auto Layout Tips & Tricks",
  description: "Master Figma Auto Layout like a pro. Learn absolute positioning, wrap layouts, min/max dimensions, and nested responsive grids.",
  date: "2026-06-22",
  
  tags: ["figma", "auto layout", "ui design", "components", "responsive design"],
  content: `
    <p style="margin-bottom: 15px;">If you use Figma, you are likely familiar with **Auto Layout**—the tool that lets you create dynamic, resizing buttons, lists, and pages. However, many designers limit themselves to basic vertical and horizontal stacks, struggling to build complex structures or responsive layouts.</p>
    <p style="margin-bottom: 15px;">Figma has added several powerful features that make Auto Layout almost as flexible as CSS Flexbox. Let's look at key advanced tricks to master the tool.</p>

    <h3>1. Absolute Positioning Within Auto Layout</h3>
    <p style="margin-bottom: 15px;">By default, everything inside an Auto Layout frame must sit in a linear sequence (horizontal or vertical). But what if you want to place a notification badge in the top-right corner of a button, or an "X" close button in the corner of a modal?</p>
    <p style="margin-bottom: 15px;"><strong>The trick:</strong> Select the child element inside your Auto Layout frame, and click the **Absolute Position** icon in the right-hand design sidebar (a small target icon in the frame section). Once activated, the element is excluded from the Auto Layout flow. You can drag and position it anywhere inside the frame while keeping it nested!</p>

    <h3>2. Wrapping Elements (Auto Layout Wrap)</h3>
    <p style="margin-bottom: 15px;">When designing tag grids, search filters, or photo galleries, a single horizontal line of items will quickly spill off the screen on smaller devices.</p>
    <p style="margin-bottom: 15px;"><strong>The trick:</strong> Choose **Wrap** in the Auto Layout direction settings (the curved arrow icon next to the horizontal and vertical arrow buttons). Now, if the parent frame is resized smaller, children that don't fit will automatically wrap to the next line—exactly like CSS <code>flex-wrap</code>!</p>

    <h3>3. Min and Max Dimensions</h3>
    <p style="margin-bottom: 15px;">When designing responsive cards or pages, you might want your layout to expand on desktop but not get ridiculously wide, or contract on mobile but not shrink to the point of breaking content.</p>
    <p style="margin-bottom: 15px;"><strong>The trick:</strong> Click the drop-down arrow next to your frame's width or height input in the design panel, and select **Add min width** or **Add max width**. You can specify strict boundaries (e.g., Min Width: 320px, Max Width: 1200px) so your layouts adapt gracefully within safe ranges.</p>

    <h3>4. Text Truncation and Resizing</h3>
    <p style="margin-bottom: 15px;">If your card components contain text boxes, the entire layout can break when content changes. If a text string is too long, it pushes elements down or clips layout boxes.</p>
    <p style="margin-bottom: 15px;"><strong>The trick:</strong> Set your text layer's width to **Fill container** and height to **Hug contents**. If you want to limit the text to a specific number of lines, select the text layer, click the Type Settings (three dots), and set **Truncate text** along with a max line limit. Figma will add ellipses (<code>...</code>) automatically when the text exceeds boundaries!</p>

    <table style="width: 100%; border-collapse: collapse; margin: 20px 0; border: 1px solid var(--border); font-size: 0.9rem;">
      <thead>
        <tr style="background-color: var(--border); text-align: left;">
          <th style="padding: 12px; border: 1px solid var(--border); width: 25%;">Feature</th>
          <th style="padding: 12px; border: 1px solid var(--border); width: 45%;">Figma Setting Location</th>
          <th style="padding: 12px; border: 1px solid var(--border);">Design Result</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">Absolute Position</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Target icon on selected child in the right sidebar.</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Allows elements to float freely over layout stacks.</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">Wrap</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Curved arrow direction icon in Auto Layout menu.</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Wraps elements to a new row when space runs out.</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">Min / Max Limits</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Width/Height input dropdown in the top-right panel.</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Restricts frame resizing to keep layouts from breaking.</td>
        </tr>
      </tbody>
    </table>

    <h3>Conclusion</h3>
    <p style="margin-bottom: 15px;">Figma's Auto Layout is an engineering-aligned design environment. Mastering absolute positioning, wrapping, min/max dimensions, and truncation settings moves your mockups closer to production-ready front-end code, making responsive design handover effortless.</p>
  `
};
