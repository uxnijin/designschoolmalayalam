// ============================================================
//  ARTICLE: Zeigarnik Effect - Designing for Task Completion
// ============================================================

ARTICLE_REGISTRY["zeigarnik-effect"] = {
  id: "zeigarnik-effect",
  thumbnail: "assets/thumbnails/zeigarnik-effect.svg", // add custom image path here (e.g. assets/my-image.png) to replace
  subcategoryId: "ux-laws",
  categoryId: "ux-design",
  title: "Zeigarnik Effect - Designing for Task Completion",
  description: "Understand the Zeigarnik Effect and why users remember incomplete tasks. Learn to design checklists and progress bars that drive engagement.",
  date: "2026-06-17",
  
  
  tags: ["ux design","ux laws","psychology","zeigarnik effect","motivation"],
  content: `
<p style="font-size: 1.05rem; margin-bottom: 25px;">
        Why does an unfinished chore or an uncompleted checklist keep lingering in the back of your mind, refusing to let you relax? Our brains are wired to prioritize completion.
      </p>
      <p style="font-size: 1.05rem; margin-bottom: 35px;">
        This psychological phenomenon is called the <strong>Zeigarnik Effect</strong>. It states that people remember uncompleted or interrupted tasks better than completed ones. In product design, utilizing progress bars and checklists creates a productive tension that motivates users to finish flows.
      </p>

      <h3>What is the Zeigarnik Effect?</h3>
      <p style="margin-bottom: 15px;">
        The Zeigarnik Effect asserts that incomplete tasks generate a form of cognitive dissonance or "mental tension." This tension keeps the task active in our memory. Once a task is completed, this cognitive loop is closed, and the mind lets go of the information. In digital interfaces, we leverage this effect to encourage users to finish profile setups or onboarding tutorials.
      </p>

      <h3>Key Takeaways for Designers</h3>
      <ul style="margin-bottom: 25px; padding-left: 20px;">
        <li style="margin-bottom: 8px;"><strong>Use Checklists & Trackers:</strong> Display outstanding setup items to motivate users to complete their profile setup.</li>
        <li style="margin-bottom: 8px;"><strong>Indicate Progress:</strong> Provide clear visual indicators (like completion percentages or segmented bars) during multi-step registration paths.</li>
        <li style="margin-bottom: 8px;"><strong>Avoid Frustrating Interruptions:</strong> Ensure that system-level interruptions do not occur during active task execution, preventing negative friction.</li>
      </ul>

      <h3>Origins and Bluma Zeigarnik</h3>
      <p style="margin-bottom: 15px;">
        The effect is named after Soviet psychologist <strong>Bluma Wulfovna Zeigarnik</strong>.
      </p>
      <p style="margin-bottom: 15px;">
        In the 1920s, Zeigarnik's professor, Kurt Lewin, noticed that a restaurant waiter could easily remember complex, unpaid orders, but completely forgot them as soon as the bill was paid. Intrigued, Zeigarnik conducted laboratory experiments. She gave participants tasks (like solving puzzles) and interrupted them mid-way. The results were conclusive: participants remembered details of the interrupted tasks twice as well as those of completed ones.
      </p>

      <h3>How to Apply the Zeigarnik Effect</h3>
      <p style="margin-bottom: 15px;">
        You can encourage users to close active loops by implementing these completion patterns:
      </p>
      <ol style="margin-bottom: 25px; padding-left: 20px;">
        <li style="margin-bottom: 8px;"><strong>Implement Onboarding Checklists:</strong> Display a checklist showing outstanding steps (e.g., "Upload profile picture") to encourage users to achieve 100% completion.</li>
        <li style="margin-bottom: 8px;"><strong>Show Saved Draft indicators:</strong> If a user leaves a form or post incomplete, show a small badge reminding them of their draft when they return.</li>
        <li style="margin-bottom: 8px;"><strong>Build E-commerce Cart Notifications:</strong> Remind users of items left in their checkout cart using badges or email nudges, reminding them of their incomplete purchase.</li>
      </ol>

      <hr style="border: 0; border-top: 1px solid var(--border); margin: 40px 0;" />
      
      <p style="font-size: 0.85rem; color: var(--text-3); line-height: 1.5;">
        This article is based on Zeigarnik Effect, a foundational law of design. 
        Learn more and explore the full catalog at <a href="https://lawsofux.com/zeigarnik-effect/" target="_blank" rel="noopener" style="color: var(--accent); text-decoration: underline;">Laws of UX by Jon Yablonski</a>. All rights reserved.
      </p>
  `
};
