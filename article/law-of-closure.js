// ============================================================
//  ARTICLE: The Gestalt Law of Closure - Helping Users Complete the Picture
// ============================================================

ARTICLE_REGISTRY["law-of-closure"] = {
  id: "law-of-closure",
  thumbnail: "assets/thumbnails/law-of-closure.svg",
  subcategoryId: "ux-laws",
  categoryId: "ux-design",
  title: "The Gestalt Law of Closure - Helping Users Complete the Picture",
  description: "Learn about the Gestalt Law of Closure and how the human brain automatically perceives incomplete shapes as whole objects.",
  date: "2026-06-23",
  tags: ["ux design", "ux laws", "gestalt", "psychology", "cognition"],
  content: `
<p style="font-size: 1.05rem; margin-bottom: 25px;">
        Have you ever looked at the World Wildlife Fund (WWF) logo? It depicts a panda, but if you look closely, there is no outline around the panda's head or back. It is just a collection of black shapes on a white background. Yet, your brain instantly fills in the gaps to perceive a complete panda.
      </p>
      <p style="font-size: 1.05rem; margin-bottom: 35px;">
        This psychological phenomenon is known as the **Gestalt Law of Closure**. In user experience and visual design, understanding this law allows you to create simpler, cleaner interfaces by reducing unnecessary visual noise. Let's see how it works.
      </p>

      <h3>What is the Law of Closure?</h3>
      <p style="margin-bottom: 15px;">
        The Law of Closure is a principle of Gestalt psychology. It states that when human minds look at an incomplete or complex visual pattern, our brains automatically search for a recognizable pattern and fill in the missing pieces to perceive a single, closed shape.
      </p>
      <p style="margin-bottom: 15px;">
        Our brains do this because they hate ambiguity. They prefer complete, closed figures over disconnected lines or segments, so they work in the background to join the dots for us.
      </p>

      <h3>How Designers Apply the Law of Closure</h3>
      <ol style="margin-bottom: 25px; padding-left: 20px;">
        <li style="margin-bottom: 8px;"><strong>Icon Design:</strong> Most modern iconography relies on closure. Look at a simple "settings" gear icon, a "user" profile outline, or a "home" icon. They often use broken strokes or separate shapes, yet users recognize them immediately.</li>
        <li style="margin-bottom: 8px;"><strong>Loading Indicators:</strong> A circular progress indicator is often just a broken circle rotating on the screen. Because of closure, the user's eye follows the path and perceives the full circle's boundary.</li>
        <li style="margin-bottom: 8px;"><strong>Indicating Scrollable Content:</strong> If you have a horizontal carousel of cards, you don't need a scrollbar or explicit instructions. If you let the last card peek slightly off the edge of the screen, the user's brain notes the incomplete shape and automatically realizes there is more content to be revealed by scrolling.</li>
        <li style="margin-bottom: 8px;"><strong>Reducing Visual Clutter:</strong> You don't need heavy borders and boxes around every single card or list item. Alignment, whitespace, and closure are enough for the user to perceive group boundaries without adding heavy borders.</li>
      </ol>

      <hr style="border: 0; border-top: 1px solid var(--border); margin: 40px 0;" />
      
      <p style="font-size: 0.85rem; color: var(--text-3); line-height: 1.5;">
        By leveraging the Law of Closure, you can build interfaces that feel lighter, cleaner, and more spacious. Trust your users' brains to fill in the blanks—you don't always need to draw the full picture.
      </p>
  `
};
