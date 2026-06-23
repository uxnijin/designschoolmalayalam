// ============================================================
//  ARTICLE: Nested Components in Figma - Best Practices for Reusable UI
// ============================================================

ARTICLE_REGISTRY["nested-components-figma"] = {
  id: "nested-components-figma",
  thumbnail: "assets/thumbnails/nested-components-figma.svg",
  subcategoryId: "components",
  categoryId: "figma",
  title: "Nested Components in Figma - Best Practices for Reusable UI",
  description: "Discover how to build complex, scalable UI components in Figma by nesting simpler sub-components and linking properties.",
  date: "2026-06-23",
  tags: ["figma", "components", "design systems", "variants", "nesting"],
  content: `
<p style="font-size: 1.05rem; margin-bottom: 25px;">
        When building a design system in Figma, variant inflation is a real threat. If you create a button component with 5 states, 3 sizes, and 2 icon configurations (left, right, or none), you quickly end up with dozens of variants to maintain.
      </p>
      <p style="font-size: 1.05rem; margin-bottom: 35px;">
        The secret to managing complex design systems without losing control is **nesting components**. Let's learn how to build modular UI components by nesting smaller sub-components and why it is a best practice.
      </p>

      <h3>What is a Nested Component?</h3>
      <p style="margin-bottom: 15px;">
        Nesting components means placing an instance of one component (a child) inside another component (a parent). For example, a "Card" component might contain nested instances of a "Button" component, an "Icon" component, and an "Avatar" component.
      </p>
      <p style="margin-bottom: 15px;">
        By breaking complex UI elements down into modular, atomic building blocks, you make your design system highly scalable and extremely easy to update.
      </p>

      <h3>The Main Benefits of Nesting</h3>
      <ul style="margin-bottom: 25px; padding-left: 20px;">
        <li style="margin-bottom: 8px;"><strong>Single Source of Truth:</strong> If you need to update the padding or corner radius of your buttons, you only change the main button component. The change instantly cascades to all card, modal, and header components that have the button nested inside them.</li>
        <li style="margin-bottom: 8px;"><strong>Expose Properties:</strong> Figma allows you to "expose nested instances." This means when a designer clicks on the parent Card component, they can customize the nested button's state or text directly from the sidebar without double-clicking into layers.</li>
        <li style="margin-bottom: 8px;"><strong>Reduces Variant Count:</strong> Instead of building variants for every combination of text, icon, and button in a card, build one card containing nested components. Designers can then swap nested assets dynamically.</li>
      </ul>

      <h3>Best Practices for Nesting</h3>
      <ol style="margin-bottom: 25px; padding-left: 20px;">
        <li style="margin-bottom: 8px;"><strong>Follow Atomic Design:</strong> Start with small, indivisible elements (atoms) like icons, input text, and indicators. Use these to build larger molecules (buttons, input fields) and compile those into complex templates (forms, headers, cards).</li>
        <li style="margin-bottom: 8px;"><strong>Set Constraints & Auto Layout:</strong> Always apply Auto Layout to the parent component and set nested child components to "Fill Container" or "Hug Contents" so they resize dynamically when layout dimensions change.</li>
      </ol>

      <hr style="border: 0; border-top: 1px solid var(--border); margin: 40px 0;" />
      
      <p style="font-size: 0.85rem; color: var(--text-3); line-height: 1.5;">
        Nesting components is key to transitioning from a collection of static screens to a living, breathing design system. Master this technique to build clean, maintainable, and developer-friendly Figma libraries.
      </p>
  `
};
