// ============================================================
//  ARTICLE: Jakob's Law - Designing for Pre-Existing Mental Models
// ============================================================

ARTICLE_REGISTRY["jakobs-law"] = {
  id: "jakobs-law",
  thumbnail: "assets/thumbnails/jakobs-law.svg", // add custom image path here (e.g. assets/my-image.png) to replace
  subcategoryId: "ux-laws",
  categoryId: "ux-design",
  title: "Jakob's Law - Designing for Pre-Existing Mental Models",
  description: "Learn Jakob's Law and the power of user familiarity. Leverage common UI patterns and mental models to minimize the learning curve.",
  date: "2026-06-17",
  
  
  tags: ["ux design","ux laws","usability","jakobs law","mental models"],
  content: `
<p style="font-size: 1.05rem; margin-bottom: 25px;">
        When you visit a new e-commerce website, you automatically look for the shopping cart icon in the top right corner. You expect a magnifying glass icon to mean search, and a gear icon to open settings.
      </p>
      <p style="font-size: 1.05rem; margin-bottom: 35px;">
        This expectation is governed by <strong>Jakob's Law</strong>. It states that users spend most of their time on other websites, meaning they prefer your site to work the same way as all the other sites they already know. Designing with familiarity helps users focus on their tasks rather than learning a new UI.
      </p>

      <h3>What is Jakob's Law?</h3>
      <p style="margin-bottom: 15px;">
        Jakob's Law is all about mental models. A mental model is what a user believes they know about a system. When a product aligns with their existing expectations, the cognitive effort to use it drops to near zero. Deviating from these standards causes confusion, frustration, and high bounce rates.
      </p>

      <h3>Key Takeaways for Designers</h3>
      <ul style="margin-bottom: 25px; padding-left: 20px;">
        <li style="margin-bottom: 8px;"><strong>Leverage Existing Mental Models:</strong> Design layouts and interactions that mirror common industry conventions to reduce the user's learning curve.</li>
        <li style="margin-bottom: 8px;"><strong>Prioritize Task Completion:</strong> Keep layouts predictable so users can focus on their goals (e.g., buying or reading) rather than navigating a confusing interface.</li>
        <li style="margin-bottom: 8px;"><strong>Manage Design Transitions Carefully:</strong> If you must redesign your platform, introduce changes slowly or provide toggles so users can adapt at their own pace.</li>
      </ul>

      <h3>Origins and Jakob Nielsen</h3>
      <p style="margin-bottom: 15px;">
        Jakob's Law was coined in 2000 by usability pioneer <strong>Jakob Nielsen</strong>, co-founder of the Nielsen Norman Group. Nielsen established that because users form their expectations on dominant platforms (like Google, Amazon, or social networks), smaller websites must respect these patterns to remain usable.
      </p>
      <p style="margin-bottom: 15px;">
        Nielsen's work emphasized that creativity in UX design should be focused on the content and unique value proposition of the product, not on reinventing standard navigation schemes or interaction guidelines.
      </p>

      <h3>How to Apply Jakob's Law in Your Layouts</h3>
      <p style="margin-bottom: 15px;">
        You can build intuitive, familiar experiences by implementing standard patterns:
      </p>
      <ol style="margin-bottom: 25px; padding-left: 20px;">
        <li style="margin-bottom: 8px;"><strong>Use standard icons:</strong> Stick to universal icons (e.g., a magnifying glass for search, a house for home) rather than designing abstract indicators.</li>
        <li style="margin-bottom: 8px;"><strong>Follow established navigation structures:</strong> Place navigation bars at the top or left of desktop sites, and tab bars at the bottom of mobile apps.</li>
        <li style="margin-bottom: 8px;"><strong>Adopt standard purchase flows:</strong> Keep cart review, shipping entry, and payment authorization steps in the sequential order that users expect from modern retail platforms.</li>
      </ol>

      <hr style="border: 0; border-top: 1px solid var(--border); margin: 40px 0;" />
      
      <p style="font-size: 0.85rem; color: var(--text-3); line-height: 1.5;">
        This article is based on Jakob's Law, a foundational law of design. 
        Learn more and explore the full catalog at <a href="https://lawsofux.com/jakobs-law/" target="_blank" rel="noopener" style="color: var(--accent); text-decoration: underline;">Laws of UX by Jon Yablonski</a>. All rights reserved.
      </p>
  `
};
