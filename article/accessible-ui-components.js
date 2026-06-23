// ============================================================
//  ARTICLE: Designing Accessible UI Components
// ============================================================

ARTICLE_REGISTRY["accessible-ui-components"] = {
  id: "accessible-ui-components",
  thumbnail: "assets/thumbnails/accessible-ui-components.svg",
  subcategoryId: "accessibility",
  categoryId: "ux-design",
  title: "Designing for All: A Comprehensive Guide to Accessibility (A11y) and WCAG Compliance",
  description: "Learn how to build digital products that are inclusive and accessible to everyone by understanding WCAG 2.2 standards, contrast requirements, and keyboard layouts.",
  date: "2026-06-23",
  tags: ["UX Design", "Accessibility", "A11y", "WCAG", "Inclusive Design"],
  content: `
    <p style="font-size: 1.05rem; margin-bottom: 25px;">
      Designing digital products without considering accessibility is like building a public library without wheelchair ramps. In modern web development, accessibility (commonly abbreviated as **A11y**) is not a nice-to-have feature—it is a fundamental requirement that guarantees people of all abilities can search, navigate, and interact with the digital world.
    </p>
    <p style="margin-bottom: 25px;">
      By aligning designs with the **Web Content Accessibility Guidelines (WCAG)**, we build products that are cleaner, more structured, and highly usable for everyone, including those with temporary injuries or aging eyesight. Let's outline the core principles of accessible UI design.
    </p>

    <h3>1. The WCAG Core Principles (POUR)</h3>
    <p style="margin-bottom: 15px;">
      WCAG standards are structured around four fundamental principles:
    </p>
    <ul style="margin-bottom: 20px; padding-left: 20px; list-style-type: disc;">
      <li style="margin-bottom: 8px;"><strong>Perceivable:</strong> Users must be able to perceive information (e.g., text alternatives for images, high color contrast).</li>
      <li style="margin-bottom: 8px;"><strong>Operable:</strong> The interface must be functional (e.g., fully navigable via keyboard, giving users enough time to read).</li>
      <li style="margin-bottom: 8px;"><strong>Understandable:</strong> The layout and writing must be clear (e.g., consistent menus, readable form labels).</li>
      <li style="margin-bottom: 8px;"><strong>Robust:</strong> Content must work reliably across a wide range of browsers, platforms, and screen readers.</li>
    </ul>

    <h3>2. Mastering Color Contrast Rules</h3>
    <p style="margin-bottom: 15px;">
      Poor contrast is one of the most common accessibility violations. WCAG 2.2 AA standards dictate strict contrast ratios:
    </p>
    <ul style="margin-bottom: 20px; padding-left: 20px; list-style-type: disc;">
      <li style="margin-bottom: 8px;"><strong>Normal Text:</strong> Body copy (smaller than 18pt or 14pt bold) requires a contrast ratio of at least <strong>4.5:1</strong> against its background.</li>
      <li style="margin-bottom: 8px;"><strong>Large Text:</strong> Headings (18pt/24px or larger, or 14pt/18.5px bold) require a ratio of at least <strong>3.0:1</strong>.</li>
      <li style="margin-bottom: 8px;"><strong>UI Elements & Icons:</strong> Form borders, active icons, and focus outlines require a minimum contrast ratio of <strong>3.0:1</strong>.</li>
    </ul>

    <blockquote style="border-left: 4px solid var(--accent); padding-left: 16px; margin: 25px 0; color: var(--text-2); font-style: italic;">
      "Never rely on color alone to convey information. For example, do not indicate error states with just a red border; add warning text or an error icon to support colorblind users."
    </blockquote>

    <h3>3. Designing for Keyboard Navigation</h3>
    <p style="margin-bottom: 15px;">
      Many users navigate websites using only a keyboard or assistive switches rather than a mouse. To support them:
    </p>
    <ul style="margin-bottom: 20px; padding-left: 20px; list-style-type: disc;">
      <li style="margin-bottom: 8px;"><strong>Visible Focus Indicators:</strong> Never hide the browser outline style using <code>outline: none</code>. Ensure focused elements have a highly visible focus ring.</li>
      <li style="margin-bottom: 8px;"><strong>Logical Tab Order:</strong> Elements should receive keyboard focus in a logical, top-to-bottom, left-to-right reading order.</li>
      <li style="margin-bottom: 8px;"><strong>Interactive Components:</strong> Custom dropdowns, modals, and tabs must support keyboard trigger keys (like Enter, Space, Escape, and Arrow keys).</li>
    </ul>

    <h3>4. Form Fields & Screen Reader Support</h3>
    <p style="margin-bottom: 15px;">
      Screen readers need structured HTML to announce forms correctly. Always use persistent, visual label elements (e.g., <code>&lt;label&gt;</code>) instead of hiding them or relying entirely on grey placeholder text inside fields. 
    </p>
    <p style="margin-bottom: 15px;">
      Provide descriptive alt text for images (e.g., <code>alt="Chart showing weekly sales growth"</code> instead of <code>alt="image"</code> or leaving it empty). If an image is purely decorative, use <code>alt=""</code> or set <code>aria-hidden="true"</code> so screen readers ignore it.
    </p>

    <h3>Conclusion</h3>
    <p style="margin-bottom: 15px;">
      Accessibility should not be treated as a checklist item at the end of a project. By integrating high-contrast checks, keyboard tab structures, and descriptive labels into your early design stages, you create products that are truly usable by everyone, regardless of physical ability or device constraint.
    </p>
  `
};
