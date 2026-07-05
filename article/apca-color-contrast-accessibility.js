// ============================================================
//  ARTICLE: Understanding APCA Contrast
// ============================================================

ARTICLE_REGISTRY["apca-color-contrast-accessibility"] = {
  id: "apca-color-contrast-accessibility",
  thumbnail: "assets/thumbnails/apca-color-contrast-accessibility.svg",
  subcategoryId: "accessibility",
  categoryId: "ux-design",
  title: "Understanding APCA Contrast: The Future of Color Accessibility",
  description: "Learn about the Advanced Perceptual Contrast Algorithm (APCA) and how it improves upon the old WCAG 2.0 contrast standards.",
  date: "2026-07-05",
  youtubeUrl: "",
  
  tags: ["accessibility", "color contrast", "apca", "wcag", "ui design", "inclusive design"],
  content: `
    <p style="font-size: 1.05rem; margin-bottom: 25px;">
      For years, designers have followed the WCAG 2.0 contrast formula (the famous 4.5:1 ratio) to ensure text is readable. However, the old formula has a major flaw: it does not match how the human eye actually perceives contrast on modern screens.
    </p>
    <p style="margin-bottom: 25px;">
      To fix this, the upcoming WCAG 3.0 guidelines are introducing the <strong>Advanced Perceptual Contrast Algorithm (APCA)</strong>. This article explains how APCA works and why it represents the future of digital color design.
    </p>

    <h3>The Problem with WCAG 2.0 (4.5:1 ratio)</h3>
    <p style="margin-bottom: 15px;">
      The old WCAG 2.0 math calculates contrast as a simple mathematical difference in brightness between two colors. This causes two main problems:
    </p>
    <ul style="margin-bottom: 25px; padding-left: 20px;">
      <li style="margin-bottom: 8px;"><strong>Dark mode issues:</strong> It often flags perfectly readable light text on dark backgrounds as "failing" (e.g. thin white text on black).</li>
      <li style="margin-bottom: 8px;"><strong>Light mode issues:</strong> It sometimes passes unreadable combinations, such as bright orange text on a white background, which is highly fatiguing for the eye.</li>
    </ul>

    <h3>What is APCA?</h3>
    <p style="margin-bottom: 15px;">
      APCA is a contrast algorithm based on modern vision science. It models the human eye's non-linear perception of contrast, taking into account:
    </p>
    <ul style="margin-bottom: 25px; padding-left: 20px;">
      <li style="margin-bottom: 8px;"><strong>Text Size and Weight:</strong> Larger, bolder text requires less color contrast to be read than tiny, thin text.</li>
      <li style="margin-bottom: 8px;"><strong>Context:</strong> Contrast is perceived differently in dark mode compared to light mode. Dark background colors absorb light, which changes how our eyes see bright letters.</li>
      <li style="margin-bottom: 8px;"><strong>Spatial Frequency:</strong> How close letters are packed together.</li>
    </ul>

    <blockquote style="border-left: 4px solid var(--accent); padding-left: 16px; margin: 25px 0; color: var(--text-2); font-style: italic;">
      "APCA does not output a simple ratio. Instead, it outputs a Lookup Value (Lc) from -108 to +108. The sign (+ or -) indicates whether it is light-on-dark or dark-on-light."
    </blockquote>

    <h3>How to read APCA Lc values</h3>
    <p style="margin-bottom: 15px;">
      Instead of aiming for "4.5:1", designers using APCA will aim for target **Lc (Lightness Contrast)** numbers depending on the purpose of the text:
    </p>
    <ul style="margin-bottom: 25px; padding-left: 20px;">
      <li style="margin-bottom: 8px;"><strong>Lc 75:</strong> The minimum level recommended for body text. Excellent readability.</li>
      <li style="margin-bottom: 8px;"><strong>Lc 60:</strong> Recommended for larger sub-headlines or bold UI elements.</li>
      <li style="margin-bottom: 8px;"><strong>Lc 45:</strong> Minimum for large headers, badges, or button labels.</li>
      <li style="margin-bottom: 8px;"><strong>Lc 30:</strong> Acceptable only for decorative text or disabled interface states.</li>
    </ul>

    <h3>Conclusion</h3>
    <p style="margin-bottom: 15px;">
      APCA is a huge step forward for visual accessibility. It gives designers more color flexibility in dark modes, while strictly enforcing readability for thin body text in light modes. There are already Figma plugins available (like "APCA Contrast Checker") that allow you to start testing your layouts today.
    </p>
  `
};
