// ============================================================
//  ARTICLE: Hick's Law - Reducing the Complexity of Choices
// ============================================================

ARTICLE_REGISTRY["hicks-law"] = {
  id: "hicks-law",
  thumbnail: "assets/thumbnails/hicks-law.svg", // add custom image path here (e.g. assets/my-image.png) to replace
  subcategoryId: "ux-laws",
  categoryId: "ux-design",
  title: "Hick's Law - Reducing the Complexity of Choices",
  description: "Learn Hick's Law and how choice counts affect decision time. Simplify interfaces, design smart defaults, and prevent choice paralysis.",
  date: "2026-06-17",
  
  
  tags: ["ux design","ux laws","usability","hicks law","decision making"],
  content: `
<p style="font-size: 1.05rem; margin-bottom: 25px;">
        Have you ever picked up an old TV remote with fifty different buttons and struggled to find the simple volume controls? Having to scan dozens of choices before taking action creates immediate frustration.
      </p>
      <p style="font-size: 1.05rem; margin-bottom: 35px;">
        This delay in decision-making is governed by <strong>Hick's Law</strong>. It states that the time it takes to make a decision increases logarithmically with the number and complexity of choices. To build clean user interfaces, we must design to reduce this cognitive friction.
      </p>

      <h3>What is Hick's Law?</h3>
      <p style="margin-bottom: 15px;">
        Hick's Law (sometimes called the Hick-Hyman Law) models the relationship between choice count and decision speed. In digital design, presenting users with a flat list of too many choices leads to decision paralysis. Reducing options or structuring them into stages allows users to process information much faster.
      </p>

      <h3>Key Takeaways for Designers</h3>
      <ul style="margin-bottom: 25px; padding-left: 20px;">
        <li style="margin-bottom: 8px;"><strong>Minimize Decision Points:</strong> Reduce the number of actions a user can take at any single critical step.</li>
        <li style="margin-bottom: 8px;"><strong>Break Down Complex Tasks:</strong> Simplify complex checkout or sign-up flows by dividing them into multi-step wizards with fewer inputs per step.</li>
        <li style="margin-bottom: 8px;"><strong>Surface Recommendations:</strong> Highlight a single "Recommended" or "Best Value" choice to guide users and reduce decision effort.</li>
        <li style="margin-bottom: 8px;"><strong>Avoid Over-Simplification:</strong> Do not simplify interfaces to the point of complete abstraction where icons and labels lose their meaning.</li>
      </ul>

      <h3>Origins and History</h3>
      <p style="margin-bottom: 15px;">
        The law is named after psychologists <strong>William Edmund Hick</strong> and <strong>Ray Hyman</strong>. In 1952, they conducted experiments to measure human reaction time based on the number of stimulus options available.
      </p>
      <p style="margin-bottom: 15px;">
        They established that reaction time is logarithmic: as choices double, the mental time to make a decision increases at a steady rate. This research became a cornerstone of human-computer interaction, helping early developers design clean menus, landing pages, and inputs.
      </p>

      <h3>How to Apply Hick's Law in UI Layouts</h3>
      <p style="margin-bottom: 15px;">
        You can streamline user decisions by introducing these structured layouts:
      </p>
      <ol style="margin-bottom: 25px; padding-left: 20px;">
        <li style="margin-bottom: 8px;"><strong>Implement Progressive Onboarding:</strong> Rather than forcing new users to learn a full interface immediately, introduce features one by one as they interact with the app.</li>
        <li style="margin-bottom: 8px;"><strong>Use Collapsible Menus and Categorization:</strong> Group lists of items (like settings) into distinct categories under accordions or submenus instead of displaying one massive layout.</li>
        <li style="margin-bottom: 8px;"><strong>Create Minimalist Landing Pages:</strong> Follow Google's search layout—hide auxiliary options and display a single, clear call-to-action on the screen.</li>
      </ol>

      <hr style="border: 0; border-top: 1px solid var(--border); margin: 40px 0;" />
      
      <p style="font-size: 0.85rem; color: var(--text-3); line-height: 1.5;">
        This article is based on Hick's Law, a foundational law of design. 
        Learn more and explore the full catalog at <a href="https://lawsofux.com/hicks-law/" target="_blank" rel="noopener" style="color: var(--accent); text-decoration: underline;">Laws of UX by Jon Yablonski</a>. All rights reserved.
      </p>
  `
};
