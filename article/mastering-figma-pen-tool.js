// ============================================================
//  ARTICLE: Mastering the Figma Pen Tool and Vector Networks
// ============================================================

ARTICLE_REGISTRY["mastering-figma-pen-tool"] = {
  id: "mastering-figma-pen-tool",
  thumbnail: "assets/thumbnails/mastering-figma-pen-tool.svg",
  subcategoryId: "figma-basics",
  categoryId: "figma",
  title: "Mastering the Figma Pen Tool and Vector Networks",
  description: "Learn how vector networks differ from traditional paths and how to use the Figma Pen tool to draw icons and shapes.",
  date: "2026-06-23",
  tags: ["figma", "figma basics", "pen tool", "vector networks", "icon design"],
  content: `
<p style="font-size: 1.05rem; margin-bottom: 25px;">
        For many designers, the Pen tool is a source of frustration. Clicking to draw lines, dragging to create curves, and ending up with chaotic shapes that are hard to edit is a common experience.
      </p>
      <p style="font-size: 1.05rem; margin-bottom: 35px;">
        However, Figma changed vector editing by introducing a unique technology called <strong>Vector Networks</strong>. Unlike traditional design tools, Vector Networks make drawing and modifying paths incredibly intuitive once you understand how they work. Let's break it down.
      </p>

      <h3>What is a Vector Network?</h3>
      <p style="margin-bottom: 15px;">
        In traditional vector software (like Adobe Illustrator or Sketch), paths are linear loops or lines. Every point (node) can connect to at most two other points (one before, one after).
      </p>
      <p style="margin-bottom: 15px;">
        In Figma, a node can have <strong>any number</strong> of lines branching off from it. This forms a web-like network of paths. For example, drawing a simple three-pronged star, a cube, or a complex icon is much easier because paths can merge and branch off a single central node naturally.
      </p>

      <h3>Key Pen Tool Shortcuts and Interactions</h3>
      <ul style="margin-bottom: 25px; padding-left: 20px;">
        <li style="margin-bottom: 8px;"><strong>Click vs. Drag:</strong> Click once to draw straight lines. Click and drag to create a curved path with bezier handles.</li>
        <li style="margin-bottom: 8px;"><strong>The Bend Tool (Cmd/Ctrl):</strong> Hold Cmd/Ctrl while hovering over a line or node to bend it instantly, turning straight lines into curves without messing with bezier handles manually.</li>
        <li style="margin-bottom: 8px;"><strong>Add Node:</strong> Hover over an existing path line and click to add a node anywhere.</li>
        <li style="margin-bottom: 8px;"><strong>Paint Bucket Tool (B):</strong> Fill enclosed regions of a vector network with color instantly. Since paths can form multiple closed loops inside a single network, you can paint different parts of a complex shape individually.</li>
      </ul>

      <h3>A Step-by-Step Exercise for Icon Drawing</h3>
      <ol style="margin-bottom: 25px; padding-left: 20px;">
        <li style="margin-bottom: 8px;"><strong>Draw a simple cross:</strong> Use the Pen tool to draw a vertical line, press Esc to pause drawing, hover over the middle of the vertical line, click to add a node, and draw a horizontal line branching off. In traditional tools, this requires drawing two separate lines. In Figma, it is one single, unified shape.</li>
        <li style="margin-bottom: 8px;"><strong>Bake and Adjust:</strong> Press Enter to enter Vector Edit mode at any time, click nodes, drag handles, or slide paths to adjust your icons on the fly.</li>
      </ol>

      <hr style="border: 0; border-top: 1px solid var(--border); margin: 40px 0;" />
      
      <p style="font-size: 0.85rem; color: var(--text-3); line-height: 1.5;">
        Vector networks are one of Figma's greatest superpowers. Once you master the Pen tool and understand branching nodes, drawing custom icons and illustrations will feel like second nature.
      </p>
  `
};
