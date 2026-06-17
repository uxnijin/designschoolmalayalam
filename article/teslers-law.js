// ============================================================
//  ARTICLE: Tesler's Law - The Conservation of Complexity
// ============================================================

ARTICLE_REGISTRY["teslers-law"] = {
  id: "teslers-law",
  thumbnail: "assets/thumbnails/teslers-law.svg", // add custom image path here (e.g. assets/my-image.png) to replace
  subcategoryId: "ux-laws",
  categoryId: "ux-design",
  title: "Tesler's Law - The Conservation of Complexity",
  description: "Understand Tesler's Law (Conservation of Complexity) in system design. Learn how to assume complexity on the system side.",
  date: "2026-06-17",
  
  
  tags: ["ux design","ux laws","usability","teslers law","system design"],
  content: `
<p style="font-size: 1.05rem; margin-bottom: 25px;">
        Every process has a core of inherent difficulty that cannot be designed away. The real question is: who should carry that burden—your code or your users?
      </p>
      <p style="font-size: 1.05rem; margin-bottom: 35px;">
        This balancing act is governed by <strong>Tesler's Law</strong> (also known as the Law of Conservation of Complexity). It states that for any system, there is a certain amount of complexity that cannot be reduced. As designers, we must lift this burden from users by assuming it on the system side.
      </p>

      <h3>What is Tesler's Law?</h3>
      <p style="margin-bottom: 15px;">
        Tesler's Law asserts that there is a baseline level of complexity inherent in any function (like booking a flight or sending money). You cannot eliminate this complexity; you can only transfer it. If you make the interface extremely simple for the user, the underlying code and design logic must assume the work. Conversely, if you don't build that logic, users will have to navigate a complex set of manual decisions.
      </p>

      <h3>Key Takeaways for Designers</h3>
      <ul style="margin-bottom: 25px; padding-left: 20px;">
        <li style="margin-bottom: 8px;"><strong>Assume System Burden:</strong> Spend extra development effort building features like autofill, smart defaults, and integrations to make tasks easy for users.</li>
        <li style="margin-bottom: 8px;"><strong>Don't Over-Simplify:</strong> Avoid simplifying interfaces to the point of abstract confusion where users lose control or lack critical feedback.</li>
        <li style="margin-bottom: 8px;"><strong>Design for the Inherent Core:</strong> Identify the core decisions users must make, and streamline the rest.</li>
      </ul>

      <h3>Origins and Larry Tesler</h3>
      <p style="margin-bottom: 15px;">
        The law was formulated in the mid-1980s by computer scientist <strong>Larry Tesler</strong> while working at Xerox PARC.
      </p>
      <p style="margin-bottom: 15px;">
        Tesler argued that a designer's job is to make software easier to use by shifting complexity from the user to the developer. He believed that spending a week of engineering time to shave off a single second of interaction complexity is always worth it when scaled across millions of global users. Larry Tesler is also famous for introducing copy, cut, and paste commands to computing.
      </p>

      <h3>How to Apply Tesler's Law in UI/UX</h3>
      <p style="margin-bottom: 15px;">
        You can design simpler user experiences by moving complex operations to the backend:
      </p>
      <ol style="margin-bottom: 25px; padding-left: 20px;">
        <li style="margin-bottom: 8px;"><strong>Streamline Search Queries:</strong> Instead of asking users to choose sorting filters beforehand, let them type natural queries and sorting automatically.</li>
        <li style="margin-bottom: 8px;"><strong>Pre-fill forms:</strong> Use IP lookups to select the country, or automatically search address coordinates as the user types their street address.</li>
        <li style="margin-bottom: 8px;"><strong>Handle payment types:</strong> Automatically identify the credit card brand (Visa, Mastercard) from the first few digits typed rather than forcing users to click card icons.</li>
      </ol>

      <hr style="border: 0; border-top: 1px solid var(--border); margin: 40px 0;" />
      
      <p style="font-size: 0.85rem; color: var(--text-3); line-height: 1.5;">
        This article is based on Tesler's Law, a foundational law of design. 
        Learn more and explore the full catalog at <a href="https://lawsofux.com/teslers-law/" target="_blank" rel="noopener" style="color: var(--accent); text-decoration: underline;">Laws of UX by Jon Yablonski</a>. All rights reserved.
      </p>
  `
};
