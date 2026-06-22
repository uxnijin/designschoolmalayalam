// ============================================================
//  ARTICLE: Smart Animate in Figma
// ============================================================

ARTICLE_REGISTRY["figma-smart-animate"] = {
  id: "figma-smart-animate",
  thumbnail: "assets/thumbnails/figma-smart-animate.svg",
  subcategoryId: "prototyping-figma",
  categoryId: "figma",
  title: "Smart Animate in Figma: Master Interactive Micro-Animations",
  description: "Learn how to use Smart Animate in Figma to build high-fidelity interactive prototypes, satisfying micro-interactions, and custom transitions.",
  date: "2026-06-22",
  
  tags: ["figma", "smart animate", "prototyping", "animation", "microinteractions"],
  content: `
    <p style="margin-bottom: 15px;">Static mockups tell developers *what* to build, but they don't capture *how it feels* to interact with the interface. To design intuitive navigation, satisfying buttons, and smooth modal slide-ins, you must animate your prototypes. In Figma, the primary tool for this is **Smart Animate**.</p>
    <p style="margin-bottom: 15px;">Smart Animate automatically looks for matching layers across different frames, calculates differences in position, size, color, opacity, or rotation, and renders a smooth transition between them.</p>

    <h3>How Smart Animate Works: The Core Rules</h3>
    <p style="margin-bottom: 15px;">For Smart Animate to function correctly, it must recognize which layers represent the same element. It determines this using two strict rules:</p>

    <h4>1. Identical Layer Names</h4>
    <p style="margin-bottom: 15px;">Figma maps transitions by matching the exact name of layers. If an image is named <code>Card Image</code> on Frame A, it **must** be named <code>Card Image</code> on Frame B. If you rename it to <code>Product Photo</code>, Figma will treat them as separate elements, fading one out and fading the other in, rather than sliding/resizing it.</p>

    <h4>2. Identical Layer Hierarchy</h4>
    <p style="margin-bottom: 15px;">The layers must reside inside the same structural nesting hierarchy. If an icon is placed inside a nested group on Frame A, but is placed directly on the main root canvas on Frame B, Figma will not smart-animate it.</p>

    <h3>What Properties Can You Smart Animate?</h3>
    <p style="margin-bottom: 15px;">Smart Animate handles almost any layer adjustment between frames:</p>
    <ul>
      <li><p style="margin-bottom: 10px;"><strong>Position:</strong> Element moves from coordinates <code>X: 50, Y: 100</code> to <code>X: 200, Y: 100</code> (creating slides, scrolls, and drag animations).</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Size:</strong> Element dimensions expand or shrink (creating card expansions, progress bars, and hover scaling).</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Color & Opacity:</strong> Solid background shifts color, or a container fades in from 0% opacity (creating button overlays, dropdown reveals, and modal dark fades).</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Rotation:</strong> Element pivots (creating spinner indicators, refresh arrows, and opening menus).</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Path Morphing:</strong> Vector paths (like icons) change shapes. Ensure they share the same number of vector points for smooth morphing transitions.</p></li>
    </ul>

    <h3>Tuning Your Easing Curves</h3>
    <p style="margin-bottom: 15px;">By default, animations use linear easing, which feels robotic. To make micro-interactions look organic, adjust your transition easing in the prototype settings:</p>
    <ul>
      <li><p style="margin-bottom: 10px;"><strong>Ease In:</strong> Starts slow and speeds up. Great for exits (elements leaving the screen).</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Ease Out:</strong> Starts fast and slows down. Perfect for entries (elements entering the screen, like dropdowns or cards).</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Ease In and Out:</strong> Starts slow, accelerates in the middle, and slows at the end. Best for continuous animations (carousel scrolls, page flips).</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Bouncy / Spring:</strong> Adds a slight overshoot at the end of the motion. Excellent for playful button pops and haptic micro-interactions (use durations between 150-300ms).</p></li>
    </ul>

    <table style="width: 100%; border-collapse: collapse; margin: 20px 0; border: 1px solid var(--border); font-size: 0.9rem;">
      <thead>
        <tr style="background-color: var(--border); text-align: left;">
          <th style="padding: 12px; border: 1px solid var(--border); width: 30%;">Animation Goal</th>
          <th style="padding: 12px; border: 1px solid var(--border); width: 40%;">Recommended Easing</th>
          <th style="padding: 12px; border: 1px solid var(--border);">Ideal Duration</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">Menu Slide-in</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Ease Out</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">250–350ms</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">Button Hover Pop</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Bouncy / Custom Spring</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">150–200ms</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">Page Carousel Slide</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Ease In and Out</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">300–450ms</td>
        </tr>
      </tbody>
    </table>

    <h3>Pro-Tip: Common Debugging Gotchas</h3>
    <p style="margin-bottom: 15px;">If your Smart Animate doesn't work and layers fade instead of animate, check this list:</p>
    <ol style="margin-bottom: 20px; padding-left: 20px;">
      <li><p style="margin-bottom: 10px;"><strong>Layer names:</strong> Double-check they match exactly (case-sensitive, spaces included).</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Grouping:</strong> Verify if a layer is grouped inside one frame but loose in the other.</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Hidden layers:</strong> To slide elements in, keep them on the canvas outside the visible frame boundary in Frame A (with 'Clip content' turned off so you can see them), and slide them inside Frame B. Do not hide/unhide layer visibility (toggle eye icon) as this forces a fade transition.</p></li>
    </ol>

    <h3>Conclusion</h3>
    <p style="margin-bottom: 15px;">Smart Animate is standard for modern prototyping in Figma. By structuring clean folders, naming layers consistently, and using professional easing settings, you can design highly expressive interactive drafts that demonstrate motion values directly to your engineering team.</p>
  `
};
