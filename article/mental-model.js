// ============================================================
//  ARTICLE: Mental Model - Designing for User Expectations
// ============================================================

ARTICLE_REGISTRY["mental-model"] = {
  id: "mental-model",
  thumbnail: "assets/thumbnails/mental-model.svg", // add custom image path here (e.g. assets/my-image.png) to replace
  subcategoryId: "ux-laws",
  categoryId: "ux-design",
  title: "Mental Model - Designing for User Expectations",
  description: "Understand how mental models shape user experiences. Learn design strategies that align with pre-existing expectations.",
  date: "2026-06-17",
  
  
  tags: ["ux design","ux laws","psychology","mental model","usability"],
  content: `
<p style="font-size: 1.05rem; margin-bottom: 25px;">
        How do users know how to interact with your app before they even open it? They carry a library of expectations based on every digital product they have used in the past.
      </p>
      <p style="font-size: 1.05rem; margin-bottom: 35px;">
        This cognitive library is known as a <strong>Mental Model</strong>. In UX design, aligning your product layouts with these pre-existing models ensures that users can interact with your system naturally, without requiring tutorials or onboarding manuals.
      </p>

      <h3>What is a Mental Model?</h3>
      <p style="margin-bottom: 15px;">
        A mental model is what a user believes they know about a system (such as a website or app). These models are not objective truths; they are mental simplifications formed through past experiences. When your interface behaves exactly as users expect, they experience high usability. When it deviates, they experience severe cognitive friction.
      </p>

      <h3>Key Takeaways for Designers</h3>
      <ul style="margin-bottom: 25px; padding-left: 20px;">
        <li style="margin-bottom: 8px;"><strong>Respect User Habits:</strong> Design your app's core navigation, search, and checkout patterns to match standard conventions.</li>
        <li style="margin-bottom: 8px;"><strong>Allow Knowledge Transfer:</strong> Enable users to transfer their knowledge from dominant platforms (like Google or Amazon) directly to your product.</li>
        <li style="margin-bottom: 8px;"><strong>Minimize Friction:</strong> Keep interactions simple so users can focus on achieving their goals rather than learning how to navigate the UI.</li>
      </ul>

      <h3>Origins and History</h3>
      <p style="margin-bottom: 15px;">
        The concept of mental models was first suggested by philosopher <strong>Kenneth Craik</strong> in his 1943 book, <em>The Nature of Explanation</em>. He proposed that the human brain constructs "small-scale models" of reality to anticipate and react to events.
      </p>
      <p style="margin-bottom: 15px;">
        The theory was later adapted to technology and human-computer interaction by researchers like Donald Norman. It remains a key pillar of usability research, forming the theoretical backing for Jakob's Law and standard design heuristics.
      </p>

      <h3>How to Align with User Mental Models</h3>
      <p style="margin-bottom: 15px;">
        You can build predictable, learnable interfaces by respecting these established user expectations:
      </p>
      <ol style="margin-bottom: 25px; padding-left: 20px;">
        <li style="margin-bottom: 8px;"><strong>Keep standard positions:</strong> Place cart icons in the top right, logos in the top left, and profile links in the top right or bottom tab bars.</li>
        <li style="margin-bottom: 8px;"><strong>Follow real-world metaphors:</strong> Design sliders to look like physical knobs and trash cans to represent item deletion.</li>
        <li style="margin-bottom: 8px;"><strong>Test design changes slowly:</strong> If you must change a core interface layout, provide interactive tips or options to toggle the old layout to ease the transition.</li>
      </ol>

      <hr style="border: 0; border-top: 1px solid var(--border); margin: 40px 0;" />
      
      <p style="font-size: 0.85rem; color: var(--text-3); line-height: 1.5;">
        This article is based on Mental Model, a foundational law of design. 
        Learn more and explore the full catalog at <a href="https://lawsofux.com/mental-model/" target="_blank" rel="noopener" style="color: var(--accent); text-decoration: underline;">Laws of UX by Jon Yablonski</a>. All rights reserved.
      </p>
  `
};
