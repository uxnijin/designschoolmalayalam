// ============================================================
//  ARTICLE: Cognitive Psychology in UX
// ============================================================

ARTICLE_REGISTRY["ux-laws-in-practice"] = {
  id: "ux-laws-in-practice",
  thumbnail: "assets/thumbnails/ux-laws-in-practice.svg",
  subcategoryId: "ux-laws",
  categoryId: "ux-design",
  title: "Cognitive Psychology in UX: How to Apply Foundational Laws to Digital Interfaces",
  description: "Explore the practical application of Hick's Law, Fitts's Law, Miller's Law, Jakob's Law, and the Peak-End Rule to design intuitive interfaces that users love.",
  date: "2026-06-23",
  tags: ["UX Design", "UX Laws", "Cognitive Psychology", "Interaction Design", "Usability"],
  content: `
    <p style="font-size: 1.05rem; margin-bottom: 25px;">
      Great user experience design is not built on random aesthetic choices. It is rooted in human psychology—understanding how users perceive, process, and react to visual stimuli. By aligning interfaces with cognitive mental habits, designers can reduce friction, prevent errors, and increase user satisfaction.
    </p>
    <p style="margin-bottom: 25px;">
      Several core psychological laws have become the foundation of modern interaction design. Let's analyze how to apply five critical UX laws to digital products.
    </p>

    <h3>1. Hick's Law: Simplify the Choice</h3>
    <p style="margin-bottom: 15px;">
      <strong>The Law:</strong> The time it takes to make a decision increases with the number and complexity of choices.
    </p>
    <p style="margin-bottom: 15px;">
      In design practice, presenting too many options leads to "choice paralysis" or abandonment. To apply Hick's Law:
    </p>
    <ul style="margin-bottom: 20px; padding-left: 20px; list-style-type: disc;">
      <li style="margin-bottom: 8px;"><strong>Chunking:</strong> Group long lists into clear categories (e.g., e-commerce menus categorized by department).</li>
      <li style="margin-bottom: 8px;"><strong>Progressive Disclosure:</strong> Hide complex or secondary settings behind an "Advanced" tab, showing only essential controls first.</li>
      <li style="margin-bottom: 8px;"><strong>Multi-Step Wizards:</strong> Break long forms (like checkout or onboarding) into small, digestible steps.</li>
    </ul>

    <h3>2. Fitts's Law: Target Size & Proximity</h3>
    <p style="margin-bottom: 15px;">
      <strong>The Law:</strong> The time to acquire a target is a function of the distance to and size of the target.
    </p>
    <p style="margin-bottom: 15px;">
      Elements that users click frequently must be easy to target. To apply Fitts's Law:
    </p>
    <ul style="margin-bottom: 20px; padding-left: 20px; list-style-type: disc;">
      <li style="margin-bottom: 8px;"><strong>Large Touch Targets:</strong> Make mobile buttons at least 44x44 pt (iOS) or 48x48 dp (Android) so fingers can tap them easily.</li>
      <li style="margin-bottom: 8px;"><strong>Strategic Placement:</strong> Put primary actions in regions that are comfortable to reach (e.g., placing search or primary navigation tabs near the bottom of mobile screens).</li>
    </ul>

    <blockquote style="border-left: 4px solid var(--accent); padding-left: 16px; margin: 25px 0; color: var(--text-2); font-style: italic;">
      "If a button is too small or placed in a hard-to-reach corner, the user's brain has to work harder and take more physical action, increasing cognitive friction."
    </blockquote>

    <h3>3. Miller's Law: Working Memory Limits</h3>
    <p style="margin-bottom: 15px;">
      <strong>The Law:</strong> The average person can only keep 7 (plus or minus 2) items in their working memory.
    </p>
    <p style="margin-bottom: 15px;">
      This does not mean you must limit menus to exactly seven items. Instead, it means you should chunk information to prevent cognitive overload. For example, break phone numbers into blocks (e.g., <code>+1-555-019-2834</code> instead of <code>15550192834</code>) and limit dashboard metric cards to key visual categories.
    </p>

    <h3>4. Jakob's Law: Leverage Familiarity</h3>
    <p style="margin-bottom: 15px;">
      <strong>The Law:</strong> Users spend most of their time on other sites. This means they expect your site to work the same way as all the others they already know.
    </p>
    <p style="margin-bottom: 15px;">
      Avoid the temptation to redesign common patterns. A shopping cart icon should look like a cart, search bars should be at the top, and navigation headers should function predictably. By adhering to established patterns, users can focus on your content rather than learning how to navigate your interface.
    </p>

    <h3>5. Peak-End Rule: Focus on the Climax & Conclusion</h3>
    <p style="margin-bottom: 15px;">
      <strong>The Law:</strong> People judge an experience largely based on how they felt at its peak (the most intense point) and at its end, rather than the average of every moment.
    </p>
    <p style="margin-bottom: 15px;">
      To make a product memorable, design delightful moments at transition peaks (e.g., a celebratory illustration when a user completes a project) and make the final step (e.g., checkout or account creation) feel smooth, fast, and satisfying.
    </p>

    <h3>Conclusion</h3>
    <p style="margin-bottom: 15px;">
      Applying cognitive psychology to UX design isn't about manipulating user behavior; it is about building layouts that align with natural human limits. By keeping choices simple, targets large, structure familiar, and endings pleasant, you design interfaces that users adopt effortlessly.
    </p>
  `
};
