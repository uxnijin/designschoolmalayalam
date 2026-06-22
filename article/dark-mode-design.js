// ============================================================
//  ARTICLE: Dark Mode Design
// ============================================================

ARTICLE_REGISTRY["dark-mode-design"] = {
  id: "dark-mode-design",
  thumbnail: "assets/thumbnails/dark-mode-design.svg",
  subcategoryId: "color-theory",
  categoryId: "ui-design",
  title: "Designing for Dark Mode: Principles and Best Practices",
  description: "Learn how to design accessible and premium dark mode interfaces by understanding contrast rules, desaturated accent colors, and depth through elevation.",
  date: "2026-06-22",
  
  tags: ["ui design", "dark mode", "color theory", "contrast", "accessibility"],
  content: `
    <p style="margin-bottom: 15px;">Dark mode has transitioned from a developer feature to an industry expectation. Major operating systems, desktop applications, and websites all offer a dark toggle. While it looks sleek, designing a dark theme involves more than just swapping a white background to black.</p>
    <p style="margin-bottom: 15px;">Designing for dark mode requires careful adjustments to color theory, contrast ratios, accessibility guidelines, and spatial hierarchy to keep content legible and satisfying to read.</p>

    <h3>1. Never Use Pure Black (#000000) for Backgrounds</h3>
    <p style="margin-bottom: 15px;">Pure black background with pure white text creates an intense, vibrating contrast (called **halation**) that causes eye strain. In nature, pure dark shadows are rare; there are always ambient highlights.</p>
    <p style="margin-bottom: 15px;"><strong>Best practice:</strong> Use a dark grey or deep, desaturated blue/grey (like <code>#121212</code>, <code>#0F172A</code>, or <code>#1E1E1E</code>) as your primary canvas. Dark grey backgrounds allow you to express a wider range of shadows, elevation, and depth compared to pure black.</p>

    <h3>2. Desaturate Your Accent Colors</h3>
    <p style="margin-bottom: 15px;">Vibrant, highly saturated colors look amazing on light backgrounds, but they "vibrate" and look blurry against dark panels, hurting visual comfort. Furthermore, high-saturation colors on dark themes can fail WCAG accessibility contrast requirements.</p>
    <p style="margin-bottom: 15px;"><strong>Best practice:</strong> Desaturate (lighten and wash out) your brand colors for the dark version. Choose lighter pastel hues (e.g., instead of using a deep primary blue, shift to a softer sky blue tint) to retain readability and brand representation.</p>

    <h3>3. Communicate Depth and Elevation</h3>
    <p style="margin-bottom: 15px;">In light mode, we represent elevation (cards floating above the background) using drop shadows. In dark mode, shadows are almost invisible. How do we communicate hierarchy and layers in the dark?</p>
    <p style="margin-bottom: 15px;"><strong>Best practice:</strong> Use **light source elevation**. Elements closer to the user (floating cards, dialog boxes, menus) should have **lighter background fills** than the main canvas. This follows the natural behavior of light: objects closer to a light source look lighter.</p>

    <blockquote style="border-left: 4px solid var(--accent); padding-left: 16px; margin: 20px 0; color: var(--text-2); font-style: italic;">
      "The higher the elevation of a surface in dark mode, the lighter its color fill should be."
    </blockquote>

    <h3>4. Accessibility and Contrast Ratios</h3>
    <p style="margin-bottom: 15px;">Always test text contrast using WCAG standards. The minimum contrast ratio for body text is **4.5:1** (or **3:1** for large heading text). Make sure your grey text labels don't get too dark and blend into the page canvas.</p>

    <table style="width: 100%; border-collapse: collapse; margin: 20px 0; border: 1px solid var(--border); font-size: 0.9rem;">
      <thead>
        <tr style="background-color: var(--border); text-align: left;">
          <th style="padding: 12px; border: 1px solid var(--border); width: 30%;">Dark Design Rule</th>
          <th style="padding: 12px; border: 1px solid var(--border); width: 40%;">What to Avoid</th>
          <th style="padding: 12px; border: 1px solid var(--border);">What to Do Instead</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">Canvas Color</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;"><code>#000000</code> (pure pitch black)</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;"><code>#121212</code> or custom dark slate <code>#0f172a</code></td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">Accent Styling</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Highly saturated neon colors</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Desaturated tones (softer pastel versions)</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">Elevation & Depth</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Darker panels for overlay cards</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Lighter panel fills for closer elements</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">Contrast</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Dark grey text on dark background</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">WCAG compliant light grey/off-white text (4.5:1)</td>
        </tr>
      </tbody>
    </table>

    <h3>Conclusion</h3>
    <p style="margin-bottom: 15px;">Designing for dark mode is not just a copy-paste job. By avoiding pure black canvases, desaturating accent highlights, using progressive lighter shades for elevation, and double-checking contrast margins, you can craft beautiful, accessible dark mode interfaces that offer premium usability day and night.</p>
  `
};
