// ============================================================
//  ARTICLE: The Ultimate Design Handoff Checklist
// ============================================================

ARTICLE_REGISTRY["ux-design-handoff-checklist"] = {
  id: "ux-design-handoff-checklist",
  thumbnail: "assets/thumbnails/ux-design-handoff-checklist.svg",
  subcategoryId: "wireframing",
  categoryId: "ux-design",
  title: "The Ultimate Design Handoff Checklist for UI/UX Designers",
  description: "Avoid communication gaps and ensure your designs are built exactly as intended with this step-by-step developer handoff checklist.",
  date: "2026-07-05",
  youtubeUrl: "",
  
  tags: ["design handoff", "ux process", "developer collaboration", "wireframing", "specifications", "figma"],
  content: `
    <p style="font-size: 1.05rem; margin-bottom: 25px;">
      One of the biggest friction points in product development is the handoff from design to development. A design that looks perfect in Figma can easily fall apart during coding if details are missing.
    </p>
    <p style="margin-bottom: 25px;">
      A successful handoff is not just about sending a Figma link. It requires structuring files so developers can find specs, assets, and states without guessing. Here is the ultimate design handoff checklist.
    </p>

    <h3>1. Define States and Edge Cases</h3>
    <p style="margin-bottom: 15px;">
      Developers need to know how layouts behave in different scenarios. Make sure you design and document:
    </p>
    <ul style="margin-bottom: 25px; padding-left: 20px;">
      <li style="margin-bottom: 8px;"><strong>Interactive states:</strong> Default, hover, active, focus, disabled, and loading states for all buttons and inputs.</li>
      <li style="margin-bottom: 8px;"><strong>Empty states:</strong> What does the screen look like when there is no data yet? (e.g. empty shopping cart or search results).</li>
      <li style="margin-bottom: 8px;"><strong>Error states:</strong> Form validation failures, network timeouts, and 404 page alerts.</li>
    </ul>

    <h3>2. Structure Responsive Specs</h3>
    <p style="margin-bottom: 15px;">
      Don't leave breakpoints open to interpretation. Make sure to:
    </p>
    <ul style="margin-bottom: 25px; padding-left: 20px;">
      <li style="margin-bottom: 8px;">Provide layouts for standard breakpoints: Mobile (375px), Tablet (768px), and Desktop (1440px).</li>
      <li style="margin-bottom: 8px;">Use Auto Layout rules in Figma so developers can resize the canvas to observe flexing and wrapping behavior.</li>
    </ul>

    <blockquote style="border-left: 4px solid var(--accent); padding-left: 16px; margin: 25px 0; color: var(--text-2); font-style: italic;">
      "A mockup shows what a screen looks like. Responsive specs show how the screen behaves."
    </blockquote>

    <h3>3. Prepare Exportable Assets</h3>
    <p style="margin-bottom: 15px;">
      Save developers time by setting up assets:
    </p>
    <ul style="margin-bottom: 25px; padding-left: 20px;">
      <li style="margin-bottom: 8px;">Mark icons and illustrations as "Exportable" in Figma (prefer SVG for vectors, PNG @2x/@3x for photos).</li>
      <li style="margin-bottom: 8px;">Organize assets into a single page or frame, or use a shared asset delivery folder.</li>
    </ul>

    <h3>4. Deliver Design System Tokens</h3>
    <p style="margin-bottom: 15px;">
      Instead of using hardcoded color codes (like <code>#FF6F2C</code>), hand over designs using token names (like <code>var(--accent)</code> or <code>color-brand-primary</code>). This ensures visual consistency and makes future rebranding simple.
    </p>

    <h3>Conclusion</h3>
    <p style="margin-bottom: 15px;">
      A great handoff is built on collaboration. Before releasing a final spec, set up a 15-minute sync meeting with your developers. Walk them through the flow, explain complex transitions, and ask if they foresee any technical limitations.
    </p>
  `
};
