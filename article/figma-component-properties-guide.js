// ============================================================
//  ARTICLE: Figma Component Properties
// ============================================================

ARTICLE_REGISTRY["figma-component-properties-guide"] = {
  id: "figma-component-properties-guide",
  thumbnail: "assets/thumbnails/figma-component-properties-guide.svg",
  subcategoryId: "components",
  categoryId: "figma",
  title: "Figma Component Properties: Building Cleaner Libraries",
  description: "Learn how to use Boolean, Instance Swap, and Text properties to reduce variant clutter in Figma design systems.",
  date: "2026-07-05",
  youtubeUrl: "",
  
  tags: ["figma", "components", "component properties", "variants", "design system", "ui design"],
  content: `
    <p style="font-size: 1.05rem; margin-bottom: 25px;">
      Before Figma introduced Component Properties, building a simple button library was a nightmare. You had to create separate variants for buttons with left icons, buttons with right icons, buttons with no icons, and so on—resulting in hundreds of redundant variants.
    </p>
    <p style="margin-bottom: 25px;">
      With <strong>Component Properties</strong>, you can attach controls directly to layers within a single component. This article explains the three main property types and how they help you build clean, lightweight design systems.
    </p>

    <h3>What are Component Properties?</h3>
    <p style="margin-bottom: 15px;">
      Component Properties allow you to expose controls on the parent component container. Instead of swapping between variant frames, designers can toggle icons on/off, rewrite text, or swap sub-components directly from the right-hand properties sidebar.
    </p>

    <h3>1. Boolean Properties (Show/Hide Layers)</h3>
    <p style="margin-bottom: 15px;">
      Use Boolean properties to toggle the visibility of specific layers (like close buttons, notification dots, or icons).
    </p>
    <ul style="margin-bottom: 25px; padding-left: 20px;">
      <li style="margin-bottom: 8px;">Select the layer you want to show/hide inside your component.</li>
      <li style="margin-bottom: 8px;">Go to the **Layer** section in the right panel and click the small "Apply property" arrow icon.</li>
      <li style="margin-bottom: 8px;">Create a new property named <code>Show Icon</code> and set its default to <code>True</code>. Now you have an on/off toggle switch!</li>
    </ul>

    <blockquote style="border-left: 4px solid var(--accent); padding-left: 16px; margin: 25px 0; color: var(--text-2); font-style: italic;">
      "By using Boolean properties to toggle optional icons, you can reduce the total variant count of a button component by up to 75%!"
    </blockquote>

    <h3>2. Instance Swap Properties (Change Icons)</h3>
    <p style="margin-bottom: 15px;">
      Instead of double-clicking deep inside a component to swap an icon instance, you can surface the swap menu to the top level.
    </p>
    <ul style="margin-bottom: 25px; padding-left: 20px;">
      <li style="margin-bottom: 8px;">Select an icon instance inside your component.</li>
      <li style="margin-bottom: 8px;">In the **Main component** swap dropdown on the right panel, click the "Apply instance swap property" icon.</li>
      <li style="margin-bottom: 8px;">Create a property named <code>Icon Choice</code>. Now, designers can change the icon directly from the component's main properties panel.</li>
    </ul>

    <h3>3. Text Properties (Edit Content Safely)</h3>
    <p style="margin-bottom: 15px;">
      Text properties allow you to change label texts without double-clicking text boxes, which prevents designers from accidentally breaking layout bindings or overrides.
    </p>
    <ul style="margin-bottom: 25px; padding-left: 20px;">
      <li style="margin-bottom: 8px;">Select the text layer.</li>
      <li style="margin-bottom: 8px;">In the **Content** section of the Text properties on the right, click the "Apply text property" icon.</li>
      <li style="margin-bottom: 8px;">Create a property named <code>Button Label</code>. Designers can now rewrite button text in a dedicated text field.</li>
    </ul>

    <h3>Conclusion</h3>
    <p style="margin-bottom: 15px;">
      Combining variants and component properties is the secret to a great Figma library. Use **Variants** for structural changes (like States: Default, Hover, Active, or Sizes: Small, Medium, Large), and use **Properties** for content changes (like toggling elements or editing texts).
    </p>
  `
};
