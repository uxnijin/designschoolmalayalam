// ============================================================
//  ARTICLE: Design Systems
// ============================================================

ARTICLE_REGISTRY["design-systems"] = {
  id: "design-systems",
  thumbnail: "assets/thumbnails/design-systems.svg",
  subcategoryId: "basics",
  categoryId: "ui-design",
  title: "Design Systems: The Complete Guide to Building Scalable UI",
  description: "Learn what design systems are, why every product team needs one, and how to build a scalable system of reusable components, tokens, and documentation that keeps your product consistent.",
  date: "2026-06-22",
  
  tags: ["ui design", "design systems", "components", "design tokens", "scalability"],
  content: `
    <p style="margin-bottom: 15px;">A <strong>design system</strong> is a comprehensive collection of reusable components, guided by clear standards and documentation, that can be assembled to build any number of products and features. It's more than a UI kit — it's the single source of truth that bridges design and development, ensuring visual and functional consistency across an entire product ecosystem.</p>
    <p style="margin-bottom: 15px;">Companies like Google (Material Design), Apple (Human Interface Guidelines), IBM (Carbon), and Atlassian have invested heavily in design systems because they fundamentally transform how teams build products — faster, more consistently, and at scale.</p>

    <h3>Why Design Systems Matter</h3>
    <p style="margin-bottom: 15px;">Without a design system, teams face a growing list of problems as products scale:</p>
    <ul>
      <li><p style="margin-bottom: 10px;"><strong>Inconsistency:</strong> Different designers create different button styles, spacing values, and color shades. The product looks like it was designed by ten different teams (because it was).</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Duplicated effort:</strong> Engineers rebuild the same modal, dropdown, or card component from scratch across features, wasting hundreds of engineering hours.</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Slow onboarding:</strong> New team members have no reference point. They reverse-engineer existing screens to understand patterns, often introducing new inconsistencies.</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Design debt:</strong> Over time, the gap between intended design and shipped product widens, leading to an increasingly fragmented user experience.</p></li>
    </ul>
    <p style="margin-bottom: 15px;">A well-maintained design system solves all of these problems by providing a shared vocabulary, reusable building blocks, and living documentation.</p>

    <h3>Anatomy of a Design System</h3>
    <p style="margin-bottom: 15px;">A mature design system typically consists of these layers:</p>

    <h4>1. Design Tokens</h4>
    <p style="margin-bottom: 15px;">Design tokens are the atomic values that define your visual identity — colors, typography scales, spacing units, border radii, shadows, and animation durations. They are platform-agnostic and can be exported to CSS variables, Swift constants, Kotlin values, or any format your engineering team needs.</p>

    <table style="width: 100%; border-collapse: collapse; margin: 20px 0; border: 1px solid var(--border); font-size: 0.9rem;">
      <thead>
        <tr style="background-color: var(--border); text-align: left;">
          <th style="padding: 12px; border: 1px solid var(--border); width: 30%;">Token Category</th>
          <th style="padding: 12px; border: 1px solid var(--border);">Examples</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">Color</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;"><code>--color-primary: #2563EB</code>, <code>--color-error: #DC2626</code></td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">Typography</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;"><code>--font-size-sm: 0.875rem</code>, <code>--font-weight-bold: 700</code></td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">Spacing</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;"><code>--space-4: 16px</code>, <code>--space-8: 32px</code></td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">Elevation</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;"><code>--shadow-md: 0 4px 6px rgba(0,0,0,0.1)</code></td>
        </tr>
      </tbody>
    </table>

    <h4>2. Core Components</h4>
    <p style="margin-bottom: 15px;">These are the reusable UI building blocks — buttons, inputs, checkboxes, tooltips, modals, cards, avatars, badges, and more. Each component should be:</p>
    <ul>
      <li><p style="margin-bottom: 10px;"><strong>Self-contained:</strong> It works independently and doesn't rely on external context.</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Configurable:</strong> It supports variants (primary, secondary, destructive), sizes (small, medium, large), and states (default, hover, active, disabled, error).</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Accessible:</strong> It meets WCAG 2.2 AA standards by default — proper contrast ratios, keyboard navigation, focus indicators, and ARIA labels.</p></li>
    </ul>

    <h4>3. Patterns</h4>
    <p style="margin-bottom: 15px;">Patterns are recurring combinations of components that solve common design problems — forms, navigation bars, data tables, search experiences, onboarding flows, and empty states. Patterns provide guidance on <em>when</em> and <em>how</em> to use components together, not just what they look like individually.</p>

    <h4>4. Documentation</h4>
    <p style="margin-bottom: 15px;">The most critical (and often neglected) part of a design system. Documentation should include:</p>
    <ul>
      <li><p style="margin-bottom: 10px;">Usage guidelines (when to use a component vs. when not to)</p></li>
      <li><p style="margin-bottom: 10px;">Code examples and API references</p></li>
      <li><p style="margin-bottom: 10px;">Do's and don'ts with visual examples</p></li>
      <li><p style="margin-bottom: 10px;">Accessibility requirements for each component</p></li>
      <li><p style="margin-bottom: 10px;">Changelog and versioning history</p></li>
    </ul>

    <h3>Building a Design System: Step by Step</h3>
    <ol style="margin-bottom: 20px; padding-left: 20px;">
      <li><p style="margin-bottom: 10px;"><strong>Audit the existing product:</strong> Screenshot every unique UI element across your product. Group duplicates, identify inconsistencies, and catalog what exists. This is your visual inventory.</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Define your design tokens:</strong> Establish the foundational values — color palette, type scale, spacing grid, and elevation system. These tokens become the DNA of every component.</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Build core components:</strong> Start with the most frequently used elements (buttons, inputs, typography, cards). Build them in both design tools (Figma) and code (React, Vue, Web Components).</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Document everything:</strong> Write clear usage guidelines, accessibility requirements, and code snippets for each component. If it's not documented, it doesn't exist.</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Create a governance model:</strong> Define who owns the design system, how contributions are reviewed, and how changes are versioned and communicated. Without governance, design systems decay.</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Iterate and evolve:</strong> A design system is never "done." Treat it as a living product with its own roadmap, backlog, and user feedback loops.</p></li>
    </ol>

    <h3>Lessons from Industry-Leading Design Systems</h3>

    <table style="width: 100%; border-collapse: collapse; margin: 20px 0; border: 1px solid var(--border); font-size: 0.9rem;">
      <thead>
        <tr style="background-color: var(--border); text-align: left;">
          <th style="padding: 12px; border: 1px solid var(--border); width: 20%;">System</th>
          <th style="padding: 12px; border: 1px solid var(--border); width: 20%;">Company</th>
          <th style="padding: 12px; border: 1px solid var(--border);">Key Strength</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">Material Design</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Google</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Cross-platform consistency with deep theming via Material You and dynamic color</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">Carbon</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">IBM</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Enterprise-grade accessibility and comprehensive data visualization patterns</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">Polaris</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Shopify</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Clear content guidelines and merchant-focused patterns</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">Lightning</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Salesforce</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Massive component library with deep CRM-specific patterns</td>
        </tr>
      </tbody>
    </table>

    <h3>Common Pitfalls to Avoid</h3>
    <ul>
      <li><p style="margin-bottom: 10px;"><strong>Building too much too soon:</strong> Don't try to design every possible component upfront. Start with the 20% of components that cover 80% of your product's needs.</p></li>
      <li><p style="margin-bottom: 10px;"><strong>No dedicated ownership:</strong> A design system without a dedicated team (or at minimum, a designated maintainer) will stagnate within months.</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Design-only or code-only:</strong> A design system must exist in both Figma (or your design tool) and production code. If they're out of sync, the system fails.</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Ignoring accessibility:</strong> Accessibility cannot be bolted on later. Bake it into every component from day one.</p></li>
    </ul>

    <h3>Conclusion</h3>
    <p style="margin-bottom: 15px;">A design system is one of the highest-leverage investments a product team can make. It reduces redundancy, accelerates development, ensures accessibility, and creates a consistent experience that users trust. Whether you're a solo designer or part of a large organization, thinking in systems will fundamentally improve the quality and speed of everything you build.</p>

    <hr style="border: 0; border-top: 1px solid var(--border); margin: 40px 0;" />
    
    <p style="font-size: 0.85rem; color: var(--text-3); line-height: 1.5;">
      Further reading: 
      <a href="https://m3.material.io/" target="_blank" rel="noopener" style="color: var(--accent); text-decoration: underline;">Material Design 3</a>, 
      <a href="https://carbondesignsystem.com/" target="_blank" rel="noopener" style="color: var(--accent); text-decoration: underline;">IBM Carbon</a>, and 
      <a href="https://polaris.shopify.com/" target="_blank" rel="noopener" style="color: var(--accent); text-decoration: underline;">Shopify Polaris</a>.
    </p>
  `
};
