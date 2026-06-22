// ============================================================
//  ARTICLE: Vector vs. Raster Graphics
// ============================================================

ARTICLE_REGISTRY["vector-vs-raster"] = {
  id: "vector-vs-raster",
  thumbnail: "assets/thumbnails/vector-vs-raster.svg",
  subcategoryId: "layout",
  categoryId: "graphic-design",
  title: "Vector vs. Raster: The Ultimate Guide to Graphic Formats",
  description: "Learn the critical differences between vector and raster files, their mathematical foundations, file extensions, and when to use each format.",
  date: "2026-06-22",
  
  tags: ["graphic design", "vector", "raster", "file formats", "basics"],
  content: `
    <p style="font-size: 1.05rem; margin-bottom: 25px;">
      One of the first decisions a graphic designer makes is choosing whether to create a graphic using vector or raster technology. 
    </p>
    <p style="margin-bottom: 25px;">
      Choosing the wrong format can lead to pixelated, blurry logos or massive file sizes that slow down loading speeds. Let’s break down the technical differences and establish rules on when to use each.
    </p>

    <h3>1. What are Raster Graphics?</h3>
    <p style="margin-bottom: 15px;">
      Raster graphics (also called bitmap images) are made of a grid of tiny square pixels. Each pixel is assigned a specific color. When thousands of pixels are viewed together, they form a continuous image.
    </p>
    <p style="margin-bottom: 15px;">
      Because raster files are based on a fixed grid of pixels, they have a set resolution. If you scale a raster image up, the pixels stretch, causing the image to look blurry, jagged, or "pixelated."
    </p>
    <p style="margin-bottom: 15px;">
      <strong>Common extensions:</strong> <code>.png</code>, <code>.jpg</code> (or <code>.jpeg</code>), <code>.gif</code>, <code>.webp</code>, <code>.tiff</code>, <code>.psd</code>.
    </p>

    <h3>2. What are Vector Graphics?</h3>
    <p style="margin-bottom: 15px;">
      Vector graphics are based on mathematical formulas, not pixels. They use coordinates on a grid to draw points, lines, curves, shapes, and paths. 
    </p>
    <p style="margin-bottom: 15px;">
      Because they rely on math, vectors can be scaled infinitely—from the size of a tiny favicon to a massive space rocket wrap—without losing a single drop of quality. The file size of a vector is based on complexity, not physical dimensions.
    </p>
    <p style="margin-bottom: 15px;">
      <strong>Common extensions:</strong> <code>.svg</code>, <code>.eps</code>, <code>.ai</code>, <code>.pdf</code>.
    </p>

    <blockquote style="border-left: 4px solid var(--accent); padding-left: 16px; margin: 25px 0; color: var(--text-2); font-style: italic;">
      "Vectors are crisp mathematical calculations, while rasters are static pixel snapshots."
    </blockquote>

    <h3>Vector vs. Raster Comparison</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 25px 0; border: 1px solid var(--border); font-size: 0.95rem;">
      <thead>
        <tr style="background-color: var(--border); text-align: left;">
          <th style="padding: 12px; border: 1px solid var(--border); width: 25%;">Feature</th>
          <th style="padding: 12px; border: 1px solid var(--border); width: 37%;">Raster</th>
          <th style="padding: 12px; border: 1px solid var(--border); width: 38%;">Vector</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">Built from</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Pixels (grid units)</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Mathematical paths</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">Scalability</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Loses quality when scaled up</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Scales infinitely (100% crisp)</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">File Size</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Large (depends on resolution)</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Small (depends on vector details)</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">Primary Source</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Photography, paint apps</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Illustrations, logos, layout designs</td>
        </tr>
      </tbody>
    </table>

    <h3>When to Use Vector</h3>
    <ul style="margin-bottom: 25px; padding-left: 20px;">
      <li style="margin-bottom: 8px;"><strong>Logos & Icons:</strong> Needs to scale across print and digital media cleanly.</li>
      <li style="margin-bottom: 8px;"><strong>Brand Assets:</strong> Packaging layouts, illustrations, and print signage designs.</li>
      <li style="margin-bottom: 8px;"><strong>Typography:</strong> Custom font families and text headings.</li>
    </ul>

    <h3>When to Use Raster</h3>
    <ul style="margin-bottom: 25px; padding-left: 20px;">
      <li style="margin-bottom: 8px;"><strong>Photography:</strong> Photos contain millions of complex, blending organic colors that math formulas cannot reproduce efficiently.</li>
      <li style="margin-bottom: 8px;"><strong>Digital Painting:</strong> Custom illustrations with heavy airbrush details, textures, and brush strokes.</li>
    </ul>

    <h3>Conclusion</h3>
    <p style="margin-bottom: 15px;">
      Understanding this core distinction ensures you choose the right tool for the job. Use vector design tools (like Adobe Illustrator or Figma) for logos, typography, and clean graphic elements, and raster tools (like Photoshop or Lightroom) for photo editing and textured painting.
    </p>
  `
};
