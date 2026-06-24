// ============================================================
//  ARTICLE: Designing Bottom Sheets - Best Practices for Mobile UI Layouts
// ============================================================

ARTICLE_REGISTRY["bottom-sheets-ux"] = {
  id: "bottom-sheets-ux",
  thumbnail: "assets/thumbnails/bottom-sheets-ux.svg",
  subcategoryId: "mobile-ui",
  categoryId: "ui-design",
  title: "Designing Bottom Sheets - Best Practices for Mobile UI Layouts",
  description: "Explore when and how to implement bottom sheets in mobile applications, including design patterns and accessibility rules.",
  date: "2026-06-24",
  tags: ["ui design", "mobile ui", "ux design", "bottom sheets", "interaction design"],
  content: `
    <p style="font-size: 1.05rem; margin-bottom: 25px;">
      Mobile interfaces face a critical constraint: limited screen real estate. To surface contextual options, filters, or sub-tasks without forcing the user to navigate to a new page, designers rely on <strong>Bottom Sheets</strong>.
    </p>
    <p style="font-size: 1.05rem; margin-bottom: 35px;">
      Originally popularized by mobile operating systems like iOS and Android, bottom sheets have become a standard UI pattern. Let's study the types of bottom sheets, when to use them, and how to design them for optimal usability.
    </p>

    <h3>Standard vs. Modal Bottom Sheets</h3>
    <ul style="margin-bottom: 25px; padding-left: 20px;">
      <li style="margin-bottom: 12px;"><strong>Modal Bottom Sheets:</strong> These block interaction with the underlying page and require an overlay scrim (darkened background). The user must either complete the action inside the sheet or dismiss it by tapping the scrim or sliding it down. Ideal for filters, sharing panels, or choosing options.</li>
      <li style="margin-bottom: 12px;"><strong>Standard (Non-modal) Bottom Sheets:</strong> These display alongside primary screen content, allowing users to interact with both the sheet and the background screen. Best used in maps (showing location details while letting users zoom/pan the map in the background) or audio players.</li>
    </ul>

    <h3>Best Practices for Bottom Sheet Design</h3>
    <ol style="margin-bottom: 25px; padding-left: 20px;">
      <li style="margin-bottom: 8px;"><strong>Use a Visual Handle:</strong> Include a small horizontal bar (drag handle) at the top of the sheet. This tells the user that the sheet can be swiped up to expand or down to dismiss.</li>
      <li style="margin-bottom: 8px;"><strong>Support Tap to Dismiss:</strong> In modal sheets, tapping the background overlay scrim must dismiss the sheet immediately. Don't force users to click a tiny close button in the corner.</li>
      <li style="margin-bottom: 8px;"><strong>Place Actions within Easy Reach:</strong> Place key action buttons (like "Save" or "Apply") at the bottom of the sheet, making them easily reachable by the user's thumb (within the "natural thumb zone").</li>
      <li style="margin-bottom: 8px;"><strong>Never Nest Scrollable Content:</strong> Avoid putting scrollable lists inside a sheet that also relies on vertical swiping to expand or collapse. This causes gesture conflict, creating a highly frustrating experience.</li>
    </ol>

    <hr style="border: 0; border-top: 1px solid var(--border); margin: 40px 0;" />
    
    <p style="font-size: 0.85rem; color: var(--text-3); line-height: 1.5;">
      A bottom sheet should feel like a fluid extension of the page, not a jarring popup. Animate its transition with a smooth slide-up ease-out curve, lasting between 250ms and 300ms, to mimic natural material behavior.
    </p>
  `
};
