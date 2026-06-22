// ============================================================
//  ARTICLE: Nav Drawer vs Bottom Nav
// ============================================================

ARTICLE_REGISTRY["nav-drawer-vs-bottom-nav"] = {
  id: "nav-drawer-vs-bottom-nav",
  thumbnail: "assets/thumbnails/nav-drawer-vs-bottom-nav.svg",
  subcategoryId: "mobile-ui",
  categoryId: "ui-design",
  title: "Navigation Drawer vs. Bottom Navigation: Mobile UI Choices",
  description: "Compare two of the most popular mobile navigation patterns. Learn when to use a slide-out navigation drawer versus a persistent bottom navigation bar.",
  date: "2026-06-22",
  
  tags: ["ui design", "mobile ui", "navigation", "android", "ios", "ux design"],
  content: `
    <p style="margin-bottom: 15px;">Designing menus for mobile screens is a major challenge. With limited screen space, designers must decide what navigation options to keep visible and what to tuck away. The two most common design systems for this are the <strong>Navigation Drawer</strong> (hamburger menu) and the <strong>Bottom Navigation Bar</strong>.</p>
    <p style="margin-bottom: 15px;">Choosing the wrong pattern can hide critical features, increase user navigation time, or clutter the workspace. Let's compare their characteristics and target use cases.</p>

    <h3>Bottom Navigation Bar: Visibility and Reach</h3>
    <p style="margin-bottom: 15px;">A bottom navigation bar sits permanently at the very bottom of the screen, typically containing between 3 and 5 top-level destinations represented by icons with short text labels.</p>
    <ul>
      <li><p style="margin-bottom: 10px;"><strong>Pros:</strong> Excellent discoverability (options are always visible) and high physical accessibility (situated directly within comfortable reach of the user's thumb, i.e., the "thumb zone").</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Cons:</strong> Limited capacity (strictly caps at 5 items) and consumes persistent screen height at all times.</p></li>
    </ul>

    <h3>Navigation Drawer: Capacity and Cleanliness</h3>
    <p style="margin-bottom: 15px;">A navigation drawer (or side drawer) is a slide-out panel that remains completely hidden until the user taps a trigger icon (usually a hamburger menu in the top-left or top-right corner).</p>
    <ul>
      <li><p style="margin-bottom: 10px;"><strong>Pros:</strong> Massive capacity (can house lists of 10+ links, submenus, user profile cards, and settings) and keeps the main interface clean and focused.</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Cons:</strong> Poor discoverability ("out of sight, out of mind") and poor physical accessibility (requires reaching to the top corners, which is difficult on modern tall phones).</p></li>
    </ul>

    <table style="width: 100%; border-collapse: collapse; margin: 20px 0; border: 1px solid var(--border); font-size: 0.9rem;">
      <thead>
        <tr style="background-color: var(--border); text-align: left;">
          <th style="padding: 12px; border: 1px solid var(--border); width: 25%;">UX Attribute</th>
          <th style="padding: 12px; border: 1px solid var(--border); width: 38%;">Bottom Navigation Bar</th>
          <th style="padding: 12px; border: 1px solid var(--border);">Navigation Drawer</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">Discoverability</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; color: var(--accent);">High (Always visible)</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Low (Hidden behind trigger)</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">Physical Reach</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; color: var(--accent);">Easy (Comfortable thumb reach)</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Difficult (Requires stretching to top corners)</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">Capacity</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Low (Strict limit of 3–5 options)</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; color: var(--accent);">High (Supports complex list items &amp; headers)</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">User Path Focus</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Best for switching between co-equal, primary sections</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Best for utility, account tools, and secondary options</td>
        </tr>
      </tbody>
    </table>

    <h3>When to Use Which?</h3>
    
    <h4>Use Bottom Navigation if:</h4>
    <ol style="margin-bottom: 20px; padding-left: 20px;">
      <li><p style="margin-bottom: 10px;">Your application has 5 or fewer co-equal, top-level primary views (e.g., Home, Search, Library, Profile).</p></li>
      <li><p style="margin-bottom: 10px;">Users need to switch frequently between these primary views while using the app.</p></li>
      <li><p style="margin-bottom: 10px;">You want to guide users toward key features instantly when they open your product.</p></li>
    </ol>

    <h4>Use a Navigation Drawer if:</h4>
    <ol style="margin-bottom: 20px; padding-left: 20px;">
      <li><p style="margin-bottom: 10px;">Your application contains a large volume of destinations, settings, or secondary tools (e.g., file managers, admin dashboards).</p></li>
      <li><p style="margin-bottom: 10px;">Users rarely need to switch categories; they stay focused on one main workspace view for the majority of their session.</p></li>
    </ol>

    <h3>The Combo Pattern</h3>
    <p style="margin-bottom: 15px;">Many successful mobile products (like YouTube or Spotify) combine both systems. They place the 3-4 most critical daily actions in the persistent Bottom Navigation Bar and tuck secondary destinations (Settings, Help, Account Details) away inside a profile menu or side drawer. This ensures core features stay discoverable while keeping clutter out of the workspace.</p>

    <h3>Conclusion</h3>
    <p style="margin-bottom: 15px;">Mobile navigation is not one-size-fits-all. Prioritize Bottom Navigation for high-frequency, core user paths to ensure quick reach and discoverability. Save the Navigation Drawer for secondary utility lists, setting panels, and administrative directories where capacity is more important than speed.</p>
  `
};
