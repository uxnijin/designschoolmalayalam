// ============================================================
//  ARTICLE: Touch Targets
// ============================================================

ARTICLE_REGISTRY["touch-targets-design"] = {
  id: "touch-targets-design",
  thumbnail: "assets/thumbnails/touch-targets-design.svg",
  subcategoryId: "mobile-ui",
  categoryId: "ui-design",
  title: "Touch Targets: Designing for Fingers and Thumbs",
  description: "Learn the essential sizing rules and physical ergonomics of touch target design in mobile interfaces to prevent user frustration and misclicks.",
  date: "2026-06-22",
  
  tags: ["ui design", "mobile ui", "touch targets", "ergonomics", "accessibility", "ios", "android"],
  content: `
    <p style="margin-bottom: 15px;">When designing interfaces on desktop, users navigate with a precise cursor (typically a 1x1 pixel arrow pointer). In mobile UI, however, the primary pointer is a human finger—usually a thumb. Fingers are wide, opaque, and inherently imprecise.</p>
    <p style="margin-bottom: 15px;">If interactive buttons are too small or placed too close together, users will struggle to click them or will tap the wrong action accidentally. To prevent this friction, you must design with proper <strong>Touch Targets</strong>.</p>

    <h3>What is a Touch Target?</h3>
    <p style="margin-bottom: 15px;">A touch target is the entire **tappable area** of an interactive element. It includes the visible graphic (e.g., a 24x24 pixel icon) plus any surrounding invisible padding that registers user clicks. The user does not see the entire touch target, but they experience its responsiveness.</p>

    <h3>Standard Touch Target Sizes (The Rules)</h3>
    <p style="margin-bottom: 15px;">Major operating systems and accessibility guidelines enforce strict minimum sizes for touch targets:</p>
    <ul>
      <li><p style="margin-bottom: 10px;"><strong>Apple iOS Human Interface Guidelines (HIG):</strong> Recommends a minimum touch target size of **44 × 44 pt**.</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Google Android Material Design Guidelines:</strong> Recommends a minimum touch target size of **48 × 48 dp**.</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Web Content Accessibility Guidelines (WCAG 2.2):</strong> Enforces a minimum target size of **24 × 24 CSS pixels** (Success Criterion 2.5.8 - Target Size Minimum), but strongly encourages **48 × 48 CSS pixels** for premium usability.</p></li>
    </ul>

    <table style="width: 100%; border-collapse: collapse; margin: 20px 0; border: 1px solid var(--border); font-size: 0.9rem;">
      <thead>
        <tr style="background-color: var(--border); text-align: left;">
          <th style="padding: 12px; border: 1px solid var(--border); width: 25%;">Guideline Standard</th>
          <th style="padding: 12px; border: 1px solid var(--border); width: 35%;">Minimum Target Sizing</th>
          <th style="padding: 12px; border: 1px solid var(--border);">Design Context</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">Google Material</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;"><code>48 &times; 48 dp</code></td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Corresponds to roughly 9mm of physical screen size (the average width of a finger pad).</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">Apple iOS HIG</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;"><code>44 &times; 44 pt</code></td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Optimized for rapid one-handed scrolling and tapping.</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">WCAG (A11y standard)</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;"><code>24 &times; 24 px</code> (Minimum)</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Ensures users with motor impairments can click elements without errors.</td>
        </tr>
      </tbody>
    </table>

    <h3>Spacing Matters: Prevent Accidental Cliks</h3>
    <p style="margin-bottom: 15px;">Even if your buttons meet the 48px rule, placing them immediately adjacent to other active elements will still cause errors. Users tapping with the flat of their finger will bridge both elements.</p>
    <p style="margin-bottom: 15px;"><strong>Best practice:</strong> Maintain at least **8px of empty space (margin)** between touch targets. If you have a primary button next to a secondary cancel link, add padding to ensure their active zones do not overlap.</p>

    <h3>The Thumb Zone (Ergonomic Placement)</h3>
    <p style="margin-bottom: 15px;">First detailed by Steven Hoober in his research *How Users Hold Devices*, over **75% of users navigate mobile screens with only one thumb**. This thumb has a limited, comfortable range of motion called the **Thumb Zone**.</p>
    <ul>
      <li><p style="margin-bottom: 10px;"><strong>Natural Zone (Bottom &amp; Center):</strong> The easiest area to reach. Place primary actions (CTAs, bottom navs, main feeds) here.</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Stretch Zone (Sides &amp; Mid-screen):</strong> Requires adjusting the hand position slightly. Place secondary filters here.</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Ouch Zone (Top corners):</strong> Extremely difficult to reach one-handed. Users must stretch or use a second hand. Place low-frequency commands (Settings, Help, Profile logout) here to prevent accidental triggers.</p></li>
    </ul>

    <h3>Conclusion</h3>
    <p style="margin-bottom: 15px;">Designing for mobile is designing for human hands. By keeping your active touch areas above 48px, maintaining spacing margins of at least 8px, and placing primary conversion targets within the natural thumb zone, you eliminate user frustration and make your mobile interfaces feel responsive, accessible, and effortless to control.</p>
  `
};
