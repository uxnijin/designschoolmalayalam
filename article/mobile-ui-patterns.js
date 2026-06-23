// ============================================================
//  ARTICLE: iOS vs. Android UI Design Patterns
// ============================================================

ARTICLE_REGISTRY["mobile-ui-patterns"] = {
  id: "mobile-ui-patterns",
  thumbnail: "assets/thumbnails/mobile-ui-patterns.svg",
  subcategoryId: "mobile-ui",
  categoryId: "ui-design",
  title: "iOS vs. Android UI Design Patterns: The Definitive Guide to Cross-Platform Standards",
  description: "Understand the core UI differences between Apple iOS Human Interface Guidelines (HIG) and Google Material Design to build professional cross-platform applications.",
  date: "2026-06-23",
  tags: ["Mobile UI", "UI Design", "Material Design", "Human Interface Guidelines", "iOS", "Android"],
  content: `
    <p style="font-size: 1.05rem; margin-bottom: 25px;">
      Designing applications that look natural on both Apple iOS and Google Android requires more than simply copying and pasting layouts. Each platform has its own design language, navigation history, and user expectations. 
    </p>
    <p style="margin-bottom: 25px;">
      Apple's <strong>Human Interface Guidelines (HIG)</strong> and Google's <strong>Material Design</strong> define how interfaces behave, scale, and interact on their respective platforms. Let's explore the critical differences designers must master when building mobile applications.
    </p>

    <h3>1. Navigation Hierarchy & Structures</h3>
    <p style="margin-bottom: 15px;">
      How users move through an app is the most fundamental difference between the platforms:
    </p>
    <ul style="margin-bottom: 20px; padding-left: 20px; list-style-type: disc;">
      <li style="margin-bottom: 8px;"><strong>iOS Navigation:</strong> iOS relies heavily on a bottom <strong>Tab Bar</strong> for primary destination switching. To go back, users tap a back button on the top-left navigation bar or swipe from the left edge of the screen.</li>
      <li style="margin-bottom: 8px;"><strong>Android Navigation:</strong> Material Design utilizes a <strong>Bottom Navigation Bar</strong>, a navigation drawer (hamburger menu), or top tabs. Android devices feature a system-level back button (either physical or gesture-based), so apps don't strictly require top-left back buttons.</li>
    </ul>

    <h3>2. Action Buttons & Placement</h3>
    <p style="margin-bottom: 15px;">
      Google and Apple handle primary user actions differently. Material Design introduces the <strong>Floating Action Button (FAB)</strong>—a circular button that floats above the content, representing the primary action of the screen (e.g., composing an email, adding a task).
    </p>
    <p style="margin-bottom: 15px;">
      iOS, on the other hand, avoids floating buttons. Primary actions are typically placed in the top-right corner of the navigation bar (e.g., "Done" or "Compose") or at the bottom center of a sheet overlay.
    </p>

    <blockquote style="border-left: 4px solid var(--accent); padding-left: 16px; margin: 25px 0; color: var(--text-2); font-style: italic;">
      "Putting a Material-style FAB into an iOS interface or a default iOS-style navigation header on Android can make the app feel cheap and foreign to the user."
    </blockquote>

    <h3>3. Visual Style and Depth</h3>
    <p style="margin-bottom: 15px;">
      The underlying visual metaphors differ:
    </p>
    <ul style="margin-bottom: 20px; padding-left: 20px; list-style-type: disc;">
      <li style="margin-bottom: 8px;"><strong>Material Design:</strong> Built on physical metaphors of paper and ink. It utilizes dynamic shadows and elevation levels (z-index) to represent component layering. Shadows change dynamically as elements slide, scale, or open.</li>
      <li style="margin-bottom: 8px;"><strong>iOS HIG:</strong> Prioritizes clarity, deference, and depth. Depth is communicated using blurred, semi-transparent overlays (acrylic materials), thin borders, and subtle color shades rather than heavy drop shadows.</li>
    </ul>

    <h3>4. Typography and Units</h3>
    <p style="margin-bottom: 15px;">
      The typography rules and measurement units differ:
    </p>
    <ul style="margin-bottom: 20px; padding-left: 20px; list-style-type: disc;">
      <li style="margin-bottom: 8px;"><strong>Units:</strong> iOS uses **Points (pt)** for visual spacing and scaling, while Android uses **Density-Independent Pixels (dp)**. Both scale similarly on high-res displays, but asset export configurations should be set accordingly (1x pt corresponds to 1x dp, exported at @2x/@3x for iOS and mdpi/hdpi/xhdpi/etc. for Android).</li>
      <li style="margin-bottom: 8px;"><strong>Fonts:</strong> The native system font on iOS is **San Francisco (SF Pro)**. Android's native font is **Roboto** (or Product Sans/Noto for specific regions). Designers should use system fonts to match platform aesthetics.</li>
    </ul>

    <h3>Conclusion</h3>
    <p style="margin-bottom: 15px;">
      While many modern brands opt for a unified, custom layout across both platforms, respecting platform-specific navigation and component standards ensures your app feels native and accessible. By tailoring your typography, navigation bars, and click controls to iOS and Android expectations, you deliver a friction-free user experience.
    </p>
  `
};
