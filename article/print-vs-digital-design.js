// ============================================================
//  ARTICLE: Print vs. Digital Design
// ============================================================

ARTICLE_REGISTRY["print-vs-digital-design"] = {
  id: "print-vs-digital-design",
  thumbnail: "assets/thumbnails/print-vs-digital-design.svg",
  subcategoryId: "layout",
  categoryId: "graphic-design",
  title: "Print vs. Digital Design: Color Spaces, Resolutions, and Layouts",
  description: "Learn the core technical differences between designing for physical print media (CMYK, 300 DPI, bleed lines) and digital screens (RGB, PPI, responsive layouts).",
  date: "2026-06-22",
  
  tags: ["graphic design", "print design", "digital design", "color space", "resolution"],
  content: `
    <p style="font-size: 1.05rem; margin-bottom: 25px;">
      Graphic designers must adapt their files depending on where their final designs will live. Designing a poster for paper printing requires a completely different set of technical coordinates than designing a landing page for mobile displays.
    </p>
    <p style="margin-bottom: 25px;">
      Confusing print standards with digital standards will result in dull color prints, blurry screens, or text elements getting cut off by printing blades. Let’s explore the critical technical differences.
    </p>

    <h3>1. Color Space (RGB vs. CMYK)</h3>
    <p style="margin-bottom: 15px;">
      This is the most important technical difference: screens emit light, while paper absorbs ink.
    </p>
    <ul style="margin-bottom: 25px; padding-left: 20px;">
      <li style="margin-bottom: 8px;"><strong>RGB (Red, Green, Blue):</strong> The color space for digital screens. It is an additive color model—combining red, green, and blue light at different strengths creates millions of vibrant, glowing colors.</li>
      <li style="margin-bottom: 8px;"><strong>CMYK (Cyan, Magenta, Yellow, Key/Black):</strong> The color space for print ink. It is a subtractive color model—mixing physical inks together blocks light reflections. Because ink cannot glow, printed colors look slightly duller than digital screen colors.</li>
    </ul>

    <blockquote style="border-left: 4px solid var(--accent); padding-left: 16px; margin: 25px 0; color: var(--text-2); font-style: italic;">
      "Never send an RGB file to a print shop. The printer will convert it to CMYK, causing vibrant blues and greens to shift to dull, muddy tones."
    </blockquote>

    <h3>2. Resolution (DPI vs. PPI)</h3>
    <p style="margin-bottom: 15px;">
      Resolution determines how crisp and sharp your visual design looks at different scales:
    </p>
    <ul style="margin-bottom: 25px; padding-left: 20px;">
      <li style="margin-bottom: 8px;"><strong>300 DPI (Dots Per Inch):</strong> The standard resolution for print media. High-density ink dots ensure that tiny text on physical booklets remains completely crisp.</li>
      <li style="margin-bottom: 8px;"><strong>72 to 144 PPI (Pixels Per Inch):</strong> The standard resolution range for digital monitors and web graphics. Vector assets scale dynamically, and screens render pixels natively.</li>
    </ul>

    <h3>3. Layout Boundaries (Bleed vs. Responsive Boundaries)</h3>
    <p style="margin-bottom: 15px;">
      In print, paper sheets are cut by mechanical blades after printing. Because blades can shift slightly, designers add a safety margin of extra background color called a <strong>bleed line</strong> (usually 3mm) to prevent thin white edges from appearing on final cuts. All text is kept inside a safe zone border.
    </p>
    <p style="margin-bottom: 15px;">
      In digital design, there are no fixed page boundaries. A web layout must adapt to fit tiny smartwatches, smartphones, tablets, and giant ultrawide desktop monitors, using fluid grids and responsive rules.
    </p>

    <h3>Print vs. Digital Comparison Table</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 25px 0; border: 1px solid var(--border); font-size: 0.95rem;">
      <thead>
        <tr style="background-color: var(--border); text-align: left;">
          <th style="padding: 12px; border: 1px solid var(--border); width: 25%;">Feature</th>
          <th style="padding: 12px; border: 1px solid var(--border); width: 37%;">Print Media</th>
          <th style="padding: 12px; border: 1px solid var(--border); width: 38%;">Digital Screens</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">Color Model</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">CMYK (Subtractive ink)</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">RGB (Additive light)</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">Resolution</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">300 DPI (High density)</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">72 - 144 PPI (Variable screens)</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">Dimensions</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Fixed paper sheets (A4, Letter)</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Fluid responsive percentages</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">Safety Margins</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Bleed lines, crop marks</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Flexbox containers, paddings</td>
        </tr>
      </tbody>
    </table>

    <h3>Conclusion</h3>
    <p style="margin-bottom: 15px;">
      Mastering this core distinction prevents production errors. Set your color mode to CMYK and resolution to 300 DPI when starting a print layout (like a book or business card). Choose RGB and coordinate in pixel dimensions when starting a digital design layout (like an app mock or social media template).
    </p>
  `
};
