// ============================================================
//  ARTICLE: Figma Component Properties
// ============================================================

ARTICLE_REGISTRY["figma-component-properties"] = {
  id: "figma-component-properties",
  thumbnail: "assets/thumbnails/figma-component-properties.svg",
  subcategoryId: "components",
  categoryId: "figma",
  title: "Figma Component Properties: Reduce Variant Clutter",
  description: "Learn how to use Figma Component Properties (boolean, instance swap, text, and nested properties) to build clean component libraries with minimal variant inflation.",
  date: "2026-06-22",
  
  tags: ["figma", "components", "design system", "ui design", "component properties"],
  content: `
    <p style="margin-bottom: 15px;">When Figma introduced **Variants**, it revolutionized component building. Instead of managing hundreds of individual components, designers could bundle different states (e.g., hover, default, disabled) into a single component set.</p>
    <p style="margin-bottom: 15px;">However, variants had a major flaw: **exponential growth (variant inflation)**. If a button component had 3 sizes, 5 types (primary, secondary, etc.), 4 states, and toggles for left/right icons, you would need to create <code>3 × 5 × 4 × 2 × 2 = 240</code> individual variants. This cluttered libraries, decreased performance, and became a nightmare to maintain.</p>
    <p style="margin-bottom: 15px;">To solve this, Figma introduced <strong>Component Properties</strong>. By binding variables directly to layers, you can build identical configurations with a fraction of the variants.</p>

    <h3>What are Component Properties?</h3>
    <p style="margin-bottom: 15px;">Component properties are definitions assigned to layers within a main component that allow designers to modify settings (like hiding layers, swapping icons, or changing text strings) directly in the right sidebar without needing separate visual variants.</p>

    <h3>The Four Types of Component Properties</h3>
    <p style="margin-bottom: 15px;">By combining these four properties, you can reduce button variant sets from 240 options to just 15 (representing only the core sizes and types):</p>

    <h4>1. Boolean Property (Toggle Visibility)</h4>
    <p style="margin-bottom: 15px;">Allows you to toggle the visibility of a layer ON or OFF using a simple checkbox switch in the sidebar.</p>
    <p style="margin-bottom: 15px;"><em>UI Application:</em> Toggling a "Left Icon" or a "Discount Badge" layer in a card.</p>
    <p style="margin-bottom: 15px;"><em>Setting up:</em> Select the layer inside your component, go to the "Layer" section in the right sidebar, click the arrow icon (Apply boolean property), and name your property (e.g., <code>Show Left Icon</code>).</p>

    <h4>2. Instance Swap Property</h4>
    <p style="margin-bottom: 15px;">Assigns a specific nested component (like an icon) as swappable, creating a drop-down menu in the sidebar to change the icon instantly without double-clicking into layers.</p>
    <p style="margin-bottom: 15px;"><em>UI Application:</em> Swapping arrow icons, search icons, or social media logos inside components.</p>
    <p style="margin-bottom: 15px;"><em>Setting up:</em> Select the nested component instance inside your main component, go to the "Instance" row in the right sidebar, click the target-like icon (Apply instance swap property), and select the preferred library folder of options.</p>

    <h4>3. Text Property</h4>
    <p style="margin-bottom: 15px;">Exposes a text field in the right sidebar, letting designers edit the button or title text directly without double-clicking and accidentally moving nested text layers.</p>
    <p style="margin-bottom: 15px;"><em>UI Application:</em> Modifying button labels, card titles, or table cells.</p>
    <p style="margin-bottom: 15px;"><em>Setting up:</em> Select the text layer, locate the "Content" section in the right sidebar, click the link icon (Apply text property), and set a name (e.g., <code>Button Label</code>).</p>

    <h4>4. Nested Instances Property</h4>
    <p style="margin-bottom: 15px;">Exposes the properties of nested components (like a badge inside a header) onto the top-level parent component's sidebar, saving designers from having to click deep into layers to edit nested values.</p>
    <p style="margin-bottom: 15px;"><em>Setting up:</em> Select the main component frame, locate the Properties panel, click the plus icon (+), choose "Nested instances", and check the sub-components whose properties you want to bubble up.</p>

    <table style="width: 100%; border-collapse: collapse; margin: 20px 0; border: 1px solid var(--border); font-size: 0.9rem;">
      <thead>
        <tr style="background-color: var(--border); text-align: left;">
          <th style="padding: 12px; border: 1px solid var(--border); width: 25%;">Property Type</th>
          <th style="padding: 12px; border: 1px solid var(--border); width: 45%;">Design Application</th>
          <th style="padding: 12px; border: 1px solid var(--border);">Sidebar Control</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">Boolean</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Showing or hiding a close button, tag badge, or helper text.</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Checkbox switch (True / False)</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">Instance Swap</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Changing the icon inside buttons, menu items, or input fields.</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Dropdown list of icon components</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">Text</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Editing the copy within a button, header, or body placeholder.</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Plain text input field</td>
        </tr>
      </tbody>
    </table>

    <h3>Rule of Thumb: When to Use Variants vs. Properties</h3>
    <p style="margin-bottom: 15px;">To keep components light, ask yourself: **Does this change require visual redesign or structural layout shifts?**</p>
    <ul>
      <li><p style="margin-bottom: 10px;"><strong>Use Variants for:</strong> Changes in size, type (primary vs. secondary outline), theme modes, or interactive states (hover, focus, disabled) where the background fills and borders actually change.</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Use Component Properties for:</strong> Swapping content (text edits, swapping icon graphics) or toggling elements (showing/hiding items) where the basic container style remains identical.</p></li>
    </ul>

    <h3>Conclusion</h3>
    <p style="margin-bottom: 15px;">Component Properties are the secret weapon of design systems. By shifting content edits and layer visibility out of variants and into side properties, you shrink your library file sizes, speed up Figma performance, and make component assets vastly easier for your team to use.</p>
  `
};
