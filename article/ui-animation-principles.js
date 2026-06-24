// ============================================================
//  ARTICLE: UI Animation Principles - Designing Motion for User Interfaces
// ============================================================

ARTICLE_REGISTRY["ui-animation-principles"] = {
  id: "ui-animation-principles",
  thumbnail: "assets/thumbnails/ui-animation-principles.svg",
  subcategoryId: "basics",
  categoryId: "ui-design",
  title: "UI Animation Principles - Designing Motion for User Interfaces",
  description: "Learn the key rules of UI animation, including easing curves, durations, and how motion enhances usability.",
  date: "2026-06-24",
  tags: ["ui design", "animation", "motion design", "interaction design", "usability"],
  content: `
    <p style="font-size: 1.05rem; margin-bottom: 25px;">
      Animation in UI design is often misunderstood. Some treat it as a decoration, adding bouncing elements, spins, and long transitions that slow down user tasks.
    </p>
    <p style="font-size: 1.05rem; margin-bottom: 35px;">
      Effective UI motion serves a functional purpose: it guides user attention, explains page relationships, and provides feedback. Let's study the core rules of functional <strong>UI Animation</strong>.
    </p>

    <h3>Rule 1: Easing Curves (Never Use Linear Motion)</h3>
    <p style="margin-bottom: 15px;">
      In the physical world, objects do not start and stop instantly. They accelerate and decelerate due to friction and momentum. To feel natural, UI animations must use easing curves:
    </p>
    <ul style="margin-bottom: 25px; padding-left: 20px;">
      <li style="margin-bottom: 12px;"><strong>Ease-Out (Deceleration):</strong> The element starts quickly and slows down at the end. Use this for elements entering the screen (e.g., a modal slide-in). It mimics an object coming to a stop.</li>
      <li style="margin-bottom: 12px;"><strong>Ease-In (Acceleration):</strong> The element starts slowly and accelerates as it exits. Use this for elements leaving the screen (e.g., a dismissed drawer sliding away).</li>
      <li style="margin-bottom: 12px;"><strong>Ease-In-Out:</strong> The element starts slowly, speeds up in the middle, and slows down at the end. Best for elements transitioning within the screen boundaries.</li>
    </ul>

    <h3>Rule 2: Speed and Duration (Keep It Fast)</h3>
    <p style="margin-bottom: 15px;">
      An animation should be fast enough to avoid making users wait, yet slow enough for the eye to track the transition. Follow these standard duration ranges:
    </p>
    <ul style="margin-bottom: 25px; padding-left: 20px;">
      <li style="margin-bottom: 8px;"><strong>Small elements (buttons, hover states):</strong> 100ms – 150ms</li>
      <li style="margin-bottom: 8px;"><strong>Medium elements (expandable cards, dropdowns):</strong> 200ms – 250ms</li>
      <li style="margin-bottom: 8px;"><strong>Large elements (page transitions, slide-out drawers):</strong> 300ms – 400ms</li>
    </ul>

    <h3>Rule 3: Maintain Spatial Consistency</h3>
    <p style="margin-bottom: 15px;">
      Animation should explain the spatial relationship between elements. If a user clicks a card and it expands to fill the screen, the modal should expand outward from that specific card, not fade in randomly. This establishes a clear spatial mental model, reducing cognitive load.
    </p>

    <hr style="border: 0; border-top: 1px solid var(--border); margin: 40px 0;" />
    
    <p style="font-size: 0.85rem; color: var(--text-3); line-height: 1.5;">
      Always respect user preferences for motion. Some users experience motion sickness from scaling or parallax effects. Implement CSS media queries such as <code>@media (prefers-reduced-motion: reduce)</code> to automatically disable animations for users who request reduced motion.
    </p>
  `
};
