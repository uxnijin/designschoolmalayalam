// ============================================================
//  ARTICLE: Sticky Headers
// ============================================================

ARTICLE_REGISTRY["sticky-headers-ux"] = {
  id: "sticky-headers-ux",
  thumbnail: "assets/thumbnails/sticky-headers-ux.svg",
  subcategoryId: "web-ui",
  categoryId: "ui-design",
  title: "Sticky Headers: UX Best Practices and Implementation",
  description: "Explore the UX benefits and drawbacks of sticky headers. Learn when to make your website navigation persistent and how to design it gracefully.",
  date: "2026-06-22",
  
  tags: ["ui design", "navigation", "web design", "ux best practices", "sticky header"],
  content: `
    <p style="margin-bottom: 15px;">As users scroll down a web page, the navigation header typically disappears off the top of the screen. To navigate to another page, they must scroll all the way back to the top. A popular solution to this is the <strong>sticky header</strong> (or persistent header), which remains fixed at the top of the viewport.</p>
    <p style="margin-bottom: 15px;">While sticky headers provide quick access to navigation, they also consume valuable screen real estate. Designing them correctly requires finding a balance between navigation access and reading space.</p>

    <h3>The Pros of Sticky Headers</h3>
    <ul>
      <li><p style="margin-bottom: 10px;"><strong>Faster Navigation:</strong> According to usability studies, sticky headers decrease the time it takes to navigate a website by roughly 22%, as users don't have to scroll back up.</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Constant Brand Presence:</strong> The logo remains visible at all times, reinforcing branding throughout the user's reading experience.</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Permanent Call-to-Actions (CTAs):</strong> For e-commerce or SaaS landing pages, keeping the "Sign Up" or "Buy Now" button visible in the header increases conversion rates.</p></li>
    </ul>

    <h3>The Cons of Sticky Headers</h3>
    <ul>
      <li><p style="margin-bottom: 10px;"><strong>Visual Clutter and Obstruction:</strong> Sticky headers take up vertical screen space. This is especially problematic on mobile devices in landscape mode, where the viewport height is extremely limited.</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Distraction:</strong> A heavy, brightly colored header floating over content draws attention away from the article the user is trying to read.</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Coding Complications:</strong> Sticky headers can cause anchor links to scroll too far, hiding page headings behind the sticky bar unless offset values are carefully coded.</p></li>
    </ul>

    <h3>UX Best Practices for Designing Sticky Headers</h3>
    
    <h4>1. Make it Compact</h4>
    <p style="margin-bottom: 15px;">A sticky header should be significantly smaller in height than your initial hero header. Avoid multi-row menus. Keep logo assets and navigation padding minimal to preserve reading space.</p>

    <h4>2. Shrink on Scroll (Dynamic Headers)</h4>
    <p style="margin-bottom: 15px;">Start with a generous, tall header when the user is at the top of the page. As they scroll down, animate the header to shrink (decrease padding, hide secondary links, or scale down the logo). This gives users a premium first impression while staying out of the way later.</p>

    <h4>3. Use the "Smart" Sticky Pattern (Scroll-Up Reveal)</h4>
    <p style="margin-bottom: 15px;">One of the best modern UX solutions is the **partially persistent** or **smart sticky** header. When the user scrolls down, the header hides to maximize reading space. If the user scrolls *up* even a tiny bit, it instantly slides down. This aligns with user intent: scrolling up is a strong signal that they are looking to navigate elsewhere.</p>

    <h4>4. Ensure Contrast and Opacity</h4>
    <p style="margin-bottom: 15px;">Make sure the sticky header has a solid background (or a heavily blurred glassmorphic background) with high contrast text. If the header is transparent, scrolled page text will blend behind it, creating unreadable visual overlaps.</p>

    <table style="width: 100%; border-collapse: collapse; margin: 20px 0; border: 1px solid var(--border); font-size: 0.9rem;">
      <thead>
        <tr style="background-color: var(--border); text-align: left;">
          <th style="padding: 12px; border: 1px solid var(--border); width: 25%;">Viewport Size</th>
          <th style="padding: 12px; border: 1px solid var(--border); width: 45%;">Recommended Sticky Behavior</th>
          <th style="padding: 12px; border: 1px solid var(--border);">Design Reason</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">Desktop Web</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Always sticky or smart scroll-up reveal (Height &lt; 70px)</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Abundant vertical space; helps quick browsing.</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">Mobile Portrait</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Smart scroll-up reveal or sticky bottom tab bar</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Saves vertical space; keeps primary controls in thumb reach.</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">Mobile Landscape</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Never sticky (completely hidden on scroll)</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Vertical height is extremely cramped; sticky headers break readability.</td>
        </tr>
      </tbody>
    </table>

    <h3>Conclusion</h3>
    <p style="margin-bottom: 15px;">Sticky headers are a powerful accessibility tool when designed thoughtfully. By keeping them compact, introducing smart scroll-up reveals, and disabling them in space-restricted landscape orientations, you can deliver an efficient navigation flow without compromising reading comfort.</p>
  `
};
