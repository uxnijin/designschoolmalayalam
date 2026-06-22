// ============================================================
//  ARTICLE: The Golden Ratio in Design
// ============================================================

ARTICLE_REGISTRY["golden-ratio-design"] = {
  id: "golden-ratio-design",
  thumbnail: "assets/thumbnails/golden-ratio-design.svg",
  subcategoryId: "layout",
  categoryId: "graphic-design",
  title: "The Golden Ratio: How to Use It in Layout Composition",
  description: "Explore the mathematics of the Golden Ratio (1:1.618) and learn how to apply it to grids, layout proportions, logo symbols, and typography scales.",
  date: "2026-06-22",
  
  tags: ["graphic design", "golden ratio", "composition", "layout", "math in design"],
  content: `
    <p style="font-size: 1.05rem; margin-bottom: 25px;">
      The <strong>Golden Ratio</strong> (also known as the Golden Mean, Golden Section, or the Greek letter <i>Phi</i>) is a mathematical ratio approximately equal to <strong>1:1.618</strong>. 
    </p>
    <p style="margin-bottom: 25px;">
      This specific ratio has been used for thousands of years in art, architecture, and design—from the Parthenon in Athens to Da Vinci's Mona Lisa. In modern graphic design, the Golden Ratio acts as a tool to create organic, naturally balanced, and visually satisfying layouts. Let’s look at how to apply it.
    </p>

    <h3>1. What is the Golden Spiral?</h3>
    <p style="margin-bottom: 15px;">
      The Golden Ratio can be visualized by creating a square and drawing another square next to it whose width matches the Golden Ratio (1.618 times larger). If you repeat this process recursively, you get a nested set of boxes (the Golden Rectangle). Drawing an arc connecting the opposite corners of these squares creates the famous <strong>Golden Spiral</strong>.
    </p>
    <p style="margin-bottom: 15px;">
      This spiral is found everywhere in nature: in hurricanes, seashells, flower petals, and pinecones. The human eye is naturally trained to recognize and appreciate this proportion as balanced and organic.
    </p>

    <h3>2. Applying the Golden Ratio to Layouts</h3>
    <p style="margin-bottom: 15px;">
      Instead of using arbitrary grid column widths, you can use 1:1.618 to divide your canvas space. For example, if your layout width is 960 pixels, you can divide it by 1.618 to get a primary column width of <strong>593 pixels</strong> and a secondary sidebar width of <strong>367 pixels</strong>.
    </p>
    <p style="margin-bottom: 15px;">
      This asymmetric division (roughly 60% main content area and 40% sidebar area) creates a natural focal weight that instantly feels balanced without looking rigid.
    </p>

    <blockquote style="border-left: 4px solid var(--accent); padding-left: 16px; margin: 25px 0; color: var(--text-2); font-style: italic;">
      "The Golden Ratio provides a mathematical blueprint for dividing space in a way that feels organic rather than artificial."
    </blockquote>

    <h3>3. Defining Typographic Scale</h3>
    <p style="margin-bottom: 15px;">
      You can build your typography scale using the multiplier 1.618. For instance, if your body text is 16 pixels, you can calculate your heading sizes by multiplying by 1.618:
    </p>
    <ul style="margin-bottom: 25px; padding-left: 20px;">
      <li style="margin-bottom: 8px;"><strong>Body copy:</strong> 16px</li>
      <li style="margin-bottom: 8px;"><strong>Sub-headline (H3):</strong> 16 &times; 1.618 &approx; 26px</li>
      <li style="margin-bottom: 8px;"><strong>Headline (H2):</strong> 26 &times; 1.618 &approx; 42px</li>
      <li style="margin-bottom: 8px;"><strong>Hero title (H1):</strong> 42 &times; 1.618 &approx; 68px</li>
    </ul>

    <h3>4. Logo Design and Shape Composition</h3>
    <p style="margin-bottom: 15px;">
      Many designers use Golden Ratio circles to construct logo geometries. By drawing circles with diameters matching the Fibonacci sequence (1, 2, 3, 5, 8, 13, 21), you can intersect these curves to create perfectly balanced logo paths. The iconic Apple logo and the Twitter bird logo were famously structured using these geometric circle dimensions.
    </p>

    <h3>Conclusion</h3>
    <p style="margin-bottom: 15px;">
      The Golden Ratio is not a strict rule that you must force into every layout, but it is an incredibly useful framework when you feel a design looks lopsided or lacks focal harmony. Use it to structure your columns, calculate your text scaling, and curve your logo vectors to align your designs with the natural proportions of the physical world.
    </p>
  `
};
