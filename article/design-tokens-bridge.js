// ============================================================
//  ARTICLE: Design Tokens
// ============================================================

ARTICLE_REGISTRY["design-tokens-bridge"] = {
  id: "design-tokens-bridge",
  thumbnail: "assets/thumbnails/design-tokens-bridge.svg",
  subcategoryId: "variables",
  categoryId: "figma",
  title: "Design Tokens: The Bridge Between Design and Development",
  description: "Learn how design tokens establish a single source of truth for your UI properties, bridging the gap between designers and developers, and how to configure them in Figma using variables.",
  date: "2026-06-22",
  
  tags: ["figma", "design systems", "design tokens", "variables", "design to code"],
  content: `
    <p style="margin-bottom: 15px;">In the world of product design, one of the greatest friction points is the translation of visual designs into production code. Designers choose hex values like <code>#FF6F2C</code> and spacing values like <code>16px</code>. Developers then hardcode these values across multiple platforms—iOS, Android, and Web.</p>
    <p style="margin-bottom: 15px;">When a brand refresh occurs, updating these values becomes a manual, error-prone scavenger hunt. Enter <strong>Design Tokens</strong>: the single source of truth that bridges design and code.</p>

    <h3>What are Design Tokens?</h3>
    <p style="margin-bottom: 15px;">First introduced by Jina Anne at Salesforce, design tokens are <strong>visual decisions stored as platform-agnostic data</strong> (typically JSON or YAML). Instead of hardcoding static values, designers and developers use token names to represent style properties such as colors, typography, spacing, border radii, and transitions.</p>

    <blockquote style="border-left: 4px solid var(--accent); padding-left: 16px; margin: 20px 0; color: var(--text-2); font-style: italic;">
      "Design tokens are the atomic building blocks of a design system. They are the variables that define the visual brand."
    </blockquote>

    <h3>The Three Tiers of Design Tokens</h3>
    <p style="margin-bottom: 15px;">To build a scalable and flexible design system, tokens are organized into three hierarchical levels:</p>

    <h4>1. Global Tokens (Primitive or Reference Tokens)</h4>
    <p style="margin-bottom: 15px;">These are the raw, absolute values in your system. They represent the complete palette of color, spacing, and sizing options. They do not carry semantic meaning.</p>
    <p style="margin-bottom: 15px;"><em>Example:</em> <code>color.orange.500 = #FF6F2C</code> or <code>spacing.scale.16 = 16px</code>.</p>

    <h4>2. Alias Tokens (Semantic Tokens)</h4>
    <p style="margin-bottom: 15px;">These tokens reference global tokens to assign **semantic meaning** or purpose. They define <em>how</em> or <em>when</em> a value should be used.</p>
    <p style="margin-bottom: 15px;"><em>Example:</em> <code>color.brand.primary = color.orange.500</code> or <code>color.background.error = color.red.100</code>.</p>

    <h4>3. Component Tokens</h4>
    <p style="margin-bottom: 15px;">These are specific to a single component and override or alias semantic tokens. They isolate changes to a specific UI element without affecting the rest of the application.</p>
    <p style="margin-bottom: 15px;"><em>Example:</em> <code>button.primary.background = color.brand.primary</code>.</p>

    <table style="width: 100%; border-collapse: collapse; margin: 20px 0; border: 1px solid var(--border); font-size: 0.9rem;">
      <thead>
        <tr style="background-color: var(--border); text-align: left;">
          <th style="padding: 12px; border: 1px solid var(--border); width: 25%;">Token Level</th>
          <th style="padding: 12px; border: 1px solid var(--border); width: 35%;">Token Name</th>
          <th style="padding: 12px; border: 1px solid var(--border);">Assigned Value / Reference</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">Global (Primitive)</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;"><code>color.blue.500</code></td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;"><code>#3182CE</code></td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">Alias (Semantic)</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;"><code>color.action.primary</code></td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;"><code>color.blue.500</code></td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">Component</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;"><code>button.primary.background</code></td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;"><code>color.action.primary</code></td>
        </tr>
      </tbody>
    </table>

    <h3>Setting Up Tokens in Figma Using Variables</h3>
    <p style="margin-bottom: 15px;">With the introduction of **Variables** in Figma, native token support is now built directly into the design canvas. Here's a brief workflow for configuring them:</p>
    <ol style="margin-bottom: 20px; padding-left: 20px;">
      <li><p style="margin-bottom: 10px;"><strong>Open the Local Variables panel:</strong> In the right sidebar on your Figma draft, click the settings gear next to "Local variables".</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Create a Primitive Collection:</strong> Create variables for your raw colors (e.g., <code>neutral-100</code>, <code>orange-500</code>) and raw spacing metrics.</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Create a Semantic Collection:</strong> Create variables that reference your primitives. For color, instead of a hex code, link it to the primitive variable (e.g., set <code>bg-primary</code> to reference <code>neutral-100</code>).</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Add Modes for Dark Mode and Screen Sizes:</strong> Create columns for different modes (e.g., "Light" and "Dark"). Change the mapped primitive color for each mode. When you toggle light/dark modes on your frame, all semantic variables will switch automatically!</p></li>
    </ol>

    <h3>Why Should You Care?</h3>
    <ul>
      <li><p style="margin-bottom: 10px;"><strong>Efficiency:</strong> Branding changes take seconds instead of weeks. Update a token, and it propagates across all design drafts and repositories.</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Consistency:</strong> Ensures that identical design choices look the same on Android, iOS, and Web, preventing visual discrepancies.</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Collaboration:</strong> Establishes a shared visual language between designers and developers. You both talk about <code>color.brand.primary</code> instead of hex codes.</p></li>
    </ul>

    <h3>Conclusion</h3>
    <p style="margin-bottom: 15px;">Design tokens are not just variables; they are a shift in design philosophy. By treating design decisions as data, you remove the guesswork from handoffs, enforce cross-platform consistency, and set the foundation for a truly automated, modern design system.</p>
  `
};
