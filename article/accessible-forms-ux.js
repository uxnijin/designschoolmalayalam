// ============================================================
//  ARTICLE: Accessible Forms
// ============================================================

ARTICLE_REGISTRY["accessible-forms-ux"] = {
  id: "accessible-forms-ux",
  thumbnail: "assets/thumbnails/accessible-forms-ux.svg",
  subcategoryId: "accessibility",
  categoryId: "ux-design",
  title: "Designing Accessible Forms: UX Best Practices",
  description: "Learn the essential accessibility rules for form design. Understand label positioning, inline errors, keyboard focus states, and screen reader feedback.",
  date: "2026-06-22",
  
  tags: ["ux design", "accessibility", "forms", "wcag", "user experience", "a11y"],
  content: `
    <p style="margin-bottom: 15px;">Forms are the primary conversion points of the web—they are how users log in, buy products, register accounts, and contact support. If your forms are not accessible, a huge portion of your audience (including users with visual, motor, or cognitive impairments) will be completely blocked from using your services.</p>
    <p style="margin-bottom: 15px;">Building accessible forms requires designing for screen readers, keyboard navigation, and cognitive simplicity. Here are the core guidelines to comply with WCAG accessibility standards.</p>

    <h3>1. Never Rely Solely on Placeholder Text as Labels</h3>
    <p style="margin-bottom: 15px;">Placeholder text is the grey text that sits inside an input field before you start typing. It is highly tempting to use it in place of form labels to save vertical space. However, placeholders are a major accessibility barrier:</p>
    <ul>
      <li><p style="margin-bottom: 10px;"><strong>Cognitive Load:</strong> The moment a user clicks and starts typing, the placeholder text disappears. Users must rely on short-term memory to recall what label they are filling in.</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Poor Contrast:</strong> Placeholder text is typically styled light grey by browsers, failing minimum WCAG contrast standards (4.5:1).</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Screen Reader Blindness:</strong> Many older screen readers ignore placeholder text, leaving users with no idea what information is requested.</p></li>
    </ul>
    <p style="margin-bottom: 15px;"><strong>Best practice:</strong> Always provide a visible, persistent label (using the HTML <code>&lt;label&gt;</code> element) situated above or beside the input field.</p>

    <h3>2. Design High-Contrast Focus Indicators</h3>
    <p style="margin-bottom: 15px;">Users with motor disabilities often navigate websites using only a keyboard (pressing the **Tab** key to move between buttons and input fields). They rely on a visible boundary indicator to know which element is currently active.</p>
    <p style="margin-bottom: 15px;"><strong>Best practice:</strong> Never disable focus outlines in your CSS (e.g., avoid <code>outline: none;</code>). Instead, design a custom focus state using a thick, high-contrast border outline or shadow ring (contrast ratio at least 3:1 against the surrounding background).</p>

    <h3>3. Avoid Color-Only Error Messages</h3>
    <p style="margin-bottom: 15px;">If a user types an invalid email, simply turning the input border red is not enough. Colorblind users (affecting roughly 1 in 12 men) may not perceive the red border shift.</p>
    <p style="margin-bottom: 15px;"><strong>Best practice:</strong> Communicate error states using **color + text + icon**. Place a clear text message directly below the invalid input field, marked with an error icon, and link it using the HTML attribute <code>aria-describedby</code> so screen readers read it aloud automatically.</p>

    <table style="width: 100%; border-collapse: collapse; margin: 20px 0; border: 1px solid var(--border); font-size: 0.9rem;">
      <thead>
        <tr style="background-color: var(--border); text-align: left;">
          <th style="padding: 12px; border: 1px solid var(--border); width: 25%;">Form Element</th>
          <th style="padding: 12px; border: 1px solid var(--border); width: 45%;">Accessibility Check</th>
          <th style="padding: 12px; border: 1px solid var(--border);">WCAG Compliance Goal</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">Labels</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Persistent labels, always visible, contrast &gt; 4.5:1.</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Ensures cognitive clarity and screen reader compatibility.</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">Keyboard Focus</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Visible indicator outline when pressing the Tab key.</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Allows mouse-free navigation for motor-disabled users.</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">Error States</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Descriptive text error messages alongside color updates.</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Guarantees error discovery for colorblind and screen-reader users.</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">Form Layout</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Single column layout; group fields logically.</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Reduces scanning confusion for users with reading difficulties.</td>
        </tr>
      </tbody>
    </table>

    <h3>Conclusion</h3>
    <p style="margin-bottom: 15px;">Accessible form design is good UX design. By keeping labels visible, ensuring clear focus states, using multiple signals for errors, and keeping layouts in simple single-column hierarchies, you ensure that every single customer can complete their goals on your application without barriers.</p>
  `
};
