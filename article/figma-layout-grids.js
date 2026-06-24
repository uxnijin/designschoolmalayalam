// ============================================================
//  ARTICLE: Mastering Figma Layout Grids - Responsive UI Layout Systems
// ============================================================

ARTICLE_REGISTRY["figma-layout-grids"] = {
  id: "figma-layout-grids",
  thumbnail: "assets/thumbnails/figma-layout-grids.svg",
  subcategoryId: "figma-basics",
  categoryId: "figma",
  title: "Mastering Figma Layout Grids - Responsive UI Layout Systems",
  description: "A guide to setting up column grids, baseline grids, and modular grids in Figma for responsive digital design.",
  date: "2026-06-24",
  tags: ["figma", "ui design", "layout grids", "responsive design", "design tools"],
  content: `
    <p style="font-size: 1.05rem; margin-bottom: 25px;">
      How do you ensure that your design elements align perfectly, and scale fluidly when moving from a desktop screen to a mobile screen? You don't guess—you use a grid.
    </p>
    <p style="font-size: 1.05rem; margin-bottom: 35px;">
      In Figma, <strong>Layout Grids</strong> let you structure and align content while maintaining responsive spacing guidelines. Let's study how columns, gutters, and constraints work to build bulletproof web layouts.
    </p>

    <h3>1. The 12-Column Desktop Grid</h3>
    <p style="margin-bottom: 15px;">
      The 12-column grid is the industry standard for web desktop design. Why 12? Because 12 is highly divisible: it can be divided into halves (two 6-column blocks), thirds (three 4-column blocks), quarters (four 3-column blocks), or sixths (six 2-column blocks).
    </p>
    <p style="margin-bottom: 25px;">
      To set up a responsive 12-column grid in Figma: Add a Layout Grid, change the type to <strong>Columns</strong>, set Count to 12, Type to <strong>Stretch</strong>, and set Gutter (the space between columns) to 16px or 24px.
    </p>

    <h3>2. Columns, Gutters, and Margins</h3>
    <p style="margin-bottom: 15px;">
      Understanding these three variables is key to setting up clean grid systems:
    </p>
    <ul style="margin-bottom: 25px; padding-left: 20px;">
      <li style="margin-bottom: 8px;"><strong>Columns:</strong> The vertical tracks where you place content blocks and modules.</li>
      <li style="margin-bottom: 8px;"><strong>Gutter:</strong> The horizontal spacing between columns. Keep this consistent (e.g. 8px, 16px, or 24px) to establish visual rhythm.</li>
      <li style="margin-bottom: 8px;"><strong>Margin:</strong> The empty space on the outer left and right edges of the frame. For desktop, margins can be large (e.g., 80px to 120px), while for mobile, they should be small (e.g., 16px or 20px) to maximize readable area.</li>
    </ul>

    <h3>3. Constraints & Grids: The Responsive Secret</h3>
    <p style="margin-bottom: 15px;">
      To make components stretch and scale along with your grid columns when resizing frames:
    </p>
    <ol style="margin-bottom: 25px; padding-left: 20px;">
      <li style="margin-bottom: 8px;">Place your component (e.g., a card UI block) inside a frame that has a layout grid active.</li>
      <li style="margin-bottom: 8px;">Snap the edges of your component card to the grid columns.</li>
      <li style="margin-bottom: 8px;">Set the horizontal constraints of the card to <strong>Left & Right</strong> (or scale). Now, when you resize the desktop frame, the card will stretch dynamically, maintaining perfect column alignments.</li>
    </ol>

    <hr style="border: 0; border-top: 1px solid var(--border); margin: 40px 0;" />
    
    <p style="font-size: 0.85rem; color: var(--text-3); line-height: 1.5;">
      Grid spacing should adhere to a strict coordinate system, such as the <strong>8pt grid rule</strong>. Setting all margins, paddings, gutters, and heights to multiples of 8 (8, 16, 24, 32, 48, 64) ensures visual consistency and speeds up developer handoff.
    </p>
  `
};
