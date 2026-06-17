// ============================================================
//  ARTICLE: Postel's Law - The Robustness Principle
// ============================================================

ARTICLE_REGISTRY["postels-law"] = {
  id: "postels-law",
  thumbnail: "assets/thumbnails/postels-law.svg", // add custom image path here (e.g. assets/my-image.png) to replace
  subcategoryId: "ux-laws",
  categoryId: "ux-design",
  title: "Postel's Law - The Robustness Principle",
  description: "Understand Postel's Law (Robustness Principle) in UX design. Learn to design flexible inputs and tolerant interfaces.",
  date: "2026-06-17",
  
  
  tags: ["ux design","ux laws","usability","postels law","accessibility"],
  content: `
<p style="font-size: 1.05rem; margin-bottom: 25px;">
        Why should a website throw a red error screen just because you added a space in your phone number or entered a lowercase letter in a postal code? Good design accommodates human variance instead of forcing machine rigidity.
      </p>
      <p style="font-size: 1.05rem; margin-bottom: 35px;">
        This guideline is governed by <strong>Postel's Law</strong> (often called the Robustness Principle). It states: "Be conservative in what you do, be liberal in what you accept from others." In product design, this means we must accept variable user inputs while presenting clean, predictable outputs.
      </p>

      <h3>What is Postel's Law?</h3>
      <p style="margin-bottom: 15px;">
        Postel's Law began as a programming standard but is now a cornerstone of usability. It asks designers and engineers to build systems that are tolerant of the different ways humans input data. Rather than demanding that users format their inputs perfectly, the system should parse and format the data behind the scenes.
      </p>

      <h3>Key Takeaways for Designers</h3>
      <ul style="margin-bottom: 25px; padding-left: 20px;">
        <li style="margin-bottom: 8px;"><strong>Be Tolerant of User Action:</strong> Anticipate the different actions users might take (e.g., paste formats, extra spaces) and handle them gracefully.</li>
        <li style="margin-bottom: 8px;"><strong>Accept Variable Input:</strong> Translate variable user formats to meet system requirements behind the scenes.</li>
        <li style="margin-bottom: 8px;"><strong>Provide Clear, Empathetic Guidance:</strong> Define input limits cleanly while offering helpful feedback if something goes wrong.</li>
      </ul>

      <h3>Origins and Jon Postel</h3>
      <p style="margin-bottom: 15px;">
        The law was formulated in 1980 by internet pioneer <strong>Jon Postel</strong>. In RFC 760 (the early specifications for the Internet Protocol), Postel established this principle to ensure that early computers could communicate reliably.
      </p>
      <p style="margin-bottom: 15px;">
        Postel argued that a computer sending data should strictly follow standards (be conservative), but a computer receiving data should accept slightly non-standard inputs as long as the meaning is clear (be liberal). When applied to UX, this translates to designing system interfaces that assume the burden of machine logic.
      </p>

      <h3>How to Apply Postel's Law in UI Layouts</h3>
      <p style="margin-bottom: 15px;">
        You can build tolerant systems by simplifying input structures:
      </p>
      <ol style="margin-bottom: 25px; padding-left: 20px;">
        <li style="margin-bottom: 8px;"><strong>Relax Form Formats:</strong> Allow users to type phone numbers or credit cards with or without spaces, dashes, or parentheses, stripping them out automatically.</li>
        <li style="margin-bottom: 8px;"><strong>Design Smart Search:</strong> Implement search bars that handle typos, alternative spellings, and synonyms, displaying what the user intended to find.</li>
        <li style="margin-bottom: 8px;"><strong>Enable Drag-and-Drop:</strong> Support multiple upload formats (e.g., dragging files or pasting screenshots) rather than forcing users to browse folders.</li>
      </ol>

      <hr style="border: 0; border-top: 1px solid var(--border); margin: 40px 0;" />
      
      <p style="font-size: 0.85rem; color: var(--text-3); line-height: 1.5;">
        This article is based on Postel's Law, a foundational law of design. 
        Learn more and explore the full catalog at <a href="https://lawsofux.com/postels-law/" target="_blank" rel="noopener" style="color: var(--accent); text-decoration: underline;">Laws of UX by Jon Yablonski</a>. All rights reserved.
      </p>
  `
};
