// ============================================================
//  ARTICLE: Sitemaps Planning
// ============================================================

ARTICLE_REGISTRY["sitemaps-planning"] = {
  id: "sitemaps-planning",
  thumbnail: "assets/thumbnails/sitemaps-planning.svg",
  subcategoryId: "information-architecture",
  categoryId: "ux-design",
  title: "Sitemaps: How to Plan Website Structure",
  description: "Learn how to create visual UX sitemaps to plan website navigation, organize pages logically, and set the foundation for your content strategy.",
  date: "2026-06-22",
  
  tags: ["ux design", "information architecture", "sitemaps", "navigation", "layout"],
  content: `
    <p style="margin-bottom: 15px;">Before an architect draws the details of a house’s windows or doors, they create a blueprint showing how rooms connect. In website design, that blueprint is the <strong>Sitemap</strong>. Creating wireframes or mockup pages without a sitemap is like building walls without knowing where the hallways go.</p>
    <p style="margin-bottom: 15px;">A sitemap is a visual diagram showing the hierarchical structure of a website’s pages and how they link together. It serves as the foundation for your product's **Information Architecture (IA)** and navigation systems.</p>

    <h3>Why Visual Sitemaps Matter</h3>
    <ul>
      <li><p style="margin-bottom: 10px;"><strong>Eliminates Navigation Confusion:</strong> Mapping pages visually ensures that content sits in logical categories, matching user expectations.</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Establishes Content Scope:</strong> It acts as a checklist for copywriters and designers, clarifying exactly how many unique pages and templates must be created.</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Enhances Team Alignment:</strong> Gives developers, client stakeholders, and designers a bird's-eye view of the entire website hierarchy, avoiding late-stage restructuring.</p></li>
    </ul>

    <h3>The Key Elements of a Sitemap Diagram</h3>
    <p style="margin-bottom: 15px;">When drafting a sitemap (using tools like FigJam, Miro, or whimsical), we use a structured hierarchy. Here are the components:</p>

    <h4>1. Homepage (Level 0)</h4>
    <p style="margin-bottom: 15px;">The entry point of the site, sitting at the very top of the diagram. All main navigation branches grow from here.</p>

    <h4>2. Primary Navigation / Category Pages (Level 1)</h4>
    <p style="margin-bottom: 15px;">These represent the main sections visible in your desktop header navigation (e.g., Shop, Services, About Us, Blog, Contact).</p>

    <h4>3. Subcategories & Subpages (Level 2)</h4>
    <p style="margin-bottom: 15px;">Detailed pages nested under Level 1 categories (e.g., under "Shop", you might have "Men's Clothing", "Women's Clothing", and "Accessories").</p>

    <h4>4. Utility Pages</h4>
    <p style="margin-bottom: 15px;">Secondary, necessary pages typically nested in the footer or account menus (e.g., Privacy Policy, Terms of Service, Return Center, User Settings).</p>

    <table style="width: 100%; border-collapse: collapse; margin: 20px 0; border: 1px solid var(--border); font-size: 0.9rem;">
      <thead>
        <tr style="background-color: var(--border); text-align: left;">
          <th style="padding: 12px; border: 1px solid var(--border); width: 25%;">Hierarchy Level</th>
          <th style="padding: 12px; border: 1px solid var(--border); width: 40%;">E-Commerce Example</th>
          <th style="padding: 12px; border: 1px solid var(--border);">Navigation Placement</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">Level 0 (Root)</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Homepage</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Root Domain URL</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">Level 1 (Categories)</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Products, Blog, Support, About Us</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Primary Header Navigation Menu</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">Level 2 (Subpages)</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Shoes, Shirts, Help Center Articles, Core Values</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Dropdown menus, sidebar lists, category grids</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">Utility</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Privacy Policy, Search Results, Terms of Service</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Footer navigation link block</td>
        </tr>
      </tbody>
    </table>

    <h3>Step-by-Step: How to Plan Your Sitemap</h3>
    <ol style="margin-bottom: 20px; padding-left: 20px;">
      <li><p style="margin-bottom: 10px;"><strong>Start with Content Inventory:</strong> List all existing and planned content. If you are doing a website redesign, extract all URLs and audit what needs to be kept, merged, or deleted.</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Group Related Items (Card Sorting):</strong> Group the content items logically. Use card sorting research to let users tell you what items belong under which category labels.</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Sketch the Diagram:</strong> Place the Homepage box at the top, and branch down. Keep relationships clean—avoid multi-nested page links unless absolutely necessary (try to keep pages within a 3-click depth from the homepage).</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Define Page States:</strong> In your diagram, use color keys to represent page states (e.g., Blue = Completed, Yellow = Under Construction, Purple = Future Phase) to help project management.</p></li>
    </ol>

    <h3>Conclusion</h3>
    <p style="margin-bottom: 15px;">Sitemaps are the structural foundation of digital spaces. By taking the time to map your pages visually before designing layouts, you ensure a clear user path, design cleaner navigation systems, and save massive redevelopment time down the road.</p>
  `
};
