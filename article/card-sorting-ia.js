// ============================================================
//  ARTICLE: Card Sorting
// ============================================================

ARTICLE_REGISTRY["card-sorting-ia"] = {
  id: "card-sorting-ia",
  thumbnail: "assets/thumbnails/card-sorting-ia.svg",
  subcategoryId: "information-architecture",
  categoryId: "ux-design",
  title: "Card Sorting: How to Design Information Architecture",
  description: "Master the card sorting method to organize website content, design intuitive menus, and align information architecture with your user's mental models.",
  date: "2026-06-22",
  
  tags: ["ux design", "information architecture", "card sorting", "ux research", "navigation"],
  content: `
    <p style="margin-bottom: 15px;">Have you ever visited a website and struggled to find what you were looking for because the navigation felt completely illogical? This happens when information architecture is designed around corporate structure or database limits rather than the user's mental model.</p>
    <p style="margin-bottom: 15px;">To build intuitive layouts and menus, UX researchers use a powerful, low-cost research method called <strong>Card Sorting</strong>.</p>

    <h3>What is Card Sorting?</h3>
    <p style="margin-bottom: 15px;">Card sorting is a UX research technique where participants are given a set of cards—each representing a specific piece of content, page, or category—and asked to group them in a way that makes sense to them. This helps designers understand how users categorize and label information mentally.</p>

    <h3>The Three Types of Card Sorting</h3>
    <p style="margin-bottom: 15px;">Depending on your project's phase and constraints, you can use one of three card-sorting formats:</p>

    <h4>1. Open Card Sorting</h4>
    <p style="margin-bottom: 15px;">Participants group the cards into categories they create themselves and assign a custom title to each category. This is ideal during the exploratory phase of a project to discover new patterns, label names, and structures from scratch.</p>

    <h4>2. Closed Card Sorting</h4>
    <p style="margin-bottom: 15px;">Participants are given a set of pre-defined category headers and must place the cards into these existing buckets. This is best used when you want to validate if a proposed navigation structure works well, or when adding new pages to a rigid, existing layout.</p>

    <h4>3. Hybrid Card Sorting</h4>
    <p style="margin-bottom: 15px;">A mixture of both. Participants are given a set of pre-defined categories but are also allowed to create new ones if the cards don't fit the existing groups. This provides a balance between validation and exploration.</p>

    <table style="width: 100%; border-collapse: collapse; margin: 20px 0; border: 1px solid var(--border); font-size: 0.9rem;">
      <thead>
        <tr style="background-color: var(--border); text-align: left;">
          <th style="padding: 12px; border: 1px solid var(--border); width: 25%;">Method</th>
          <th style="padding: 12px; border: 1px solid var(--border); width: 40%;">How it Works</th>
          <th style="padding: 12px; border: 1px solid var(--border);">Best Use Case</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">Open</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Participants group items and label the categories themselves.</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Generating new ideas for menus and finding user-centric label names.</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">Closed</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Participants sort items into a pre-defined set of categories.</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Testing if an existing category structure is clear and intuitive.</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">Hybrid</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Pre-defined categories are provided, but participants can add new ones.</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Refining existing architecture while allowing user flexibility.</td>
        </tr>
      </tbody>
    </table>

    <h3>How to Run a Card Sorting Session</h3>
    <ol style="margin-bottom: 20px; padding-left: 20px;">
      <li><p style="margin-bottom: 10px;"><strong>Choose Your Tool:</strong> You can run card sorting physically using index cards/sticky notes on a table, or digitally using remote testing platforms like Optimal Workshop, Miro, or FigJam.</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Select Your Cards:</strong> Aim for 30 to 60 cards. Representing every page on a huge site will overwhelm users. Focus on primary content areas and key user flows.</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Recruit Participants:</strong> Test with at least 15 to 20 users. This sample size is necessary to find statistically significant clusters and patterns.</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Analyze the Results:</strong> Look for consensus. If 80% of users put "Refund Policy" under "Support", that's where it belongs. Use visual reports like **dendrograms** (similarity trees) and **standardization matrices** to read the data.</p></li>
    </ol>

    <h3>Conclusion</h3>
    <p style="margin-bottom: 15px;">Card sorting is a simple yet scientific way to align your product's structures with your users' expectations. By involving users in the organization of your website, you remove personal bias and create navigation paths that require zero training to navigate.</p>
  `
};
