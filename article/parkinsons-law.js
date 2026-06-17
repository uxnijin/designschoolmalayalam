// ============================================================
//  ARTICLE: Parkinson's Law - Designing for Time and Task Inflation
// ============================================================

ARTICLE_REGISTRY["parkinsons-law"] = {
  id: "parkinsons-law",
  thumbnail: "assets/thumbnails/parkinsons-law.svg", // add custom image path here (e.g. assets/my-image.png) to replace
  subcategoryId: "ux-laws",
  categoryId: "ux-design",
  title: "Parkinson's Law - Designing for Time and Task Inflation",
  description: "Understand Parkinson's Law and the relationship between time limit and productivity. Learn to build efficient interfaces that respect user time.",
  date: "2026-06-17",
  
  
  tags: ["ux design","ux laws","usability","parkinsons law","efficiency"],
  content: `
<p style="font-size: 1.05rem; margin-bottom: 25px;">
        If you give yourself a week to complete a simple two-hour task, the task will somehow end up taking the entire week. Time constraints are a major psychological driver of how we work and interact.
      </p>
      <p style="font-size: 1.05rem; margin-bottom: 35px;">
        This behavior is driven by <strong>Parkinson's Law</strong>. It states that work expands to fill the time available for its completion. In UX design, minimizing the actual duration of tasks compared to expectations greatly improves the overall user experience and drives productivity.
      </p>

      <h3>What is Parkinson's Law?</h3>
      <p style="margin-bottom: 15px;">
        Parkinson's Law asserts that tasks will inflate in complexity and time to fill whatever schedule has been allocated to them. In user interfaces, if you give users infinite time or open-ended inputs to complete a form, checkout, or task, they will take longer, make more errors, and experience higher frustration. Reducing the time limits and simplifying processes prevents this inflation.
      </p>

      <h3>Key Takeaways for Designers</h3>
      <ul style="margin-bottom: 25px; padding-left: 20px;">
        <li style="margin-bottom: 8px;"><strong>Respect User Time:</strong> Design experiences that allow users to complete their tasks in the shortest possible time.</li>
        <li style="margin-bottom: 8px;"><strong>Use Smart Defaults & Autofill:</strong> Save user time by pre-filling inputs based on their past actions or browser data.</li>
        <li style="margin-bottom: 8px;"><strong>Provide Clear Expectations:</strong> Inform users of how long a task is expected to take (e.g., "5-minute survey") to keep them focused.</li>
      </ul>

      <h3>Origins and History</h3>
      <p style="margin-bottom: 15px;">
        The law was coined in 1955 by British historian and author <strong>Cyril Northcote Parkinson</strong> in a humorous essay for <em>The Economist</em>.
      </p>
      <p style="margin-bottom: 15px;">
        Parkinson observed that the size of British civil service departments grew regardless of whether the volume of work increased. He argued that the expansion was driven by administrative bureaucracy rather than functional necessity. The law was later adapted as a cornerstone of time management, project scoping, and interaction design.
      </p>

      <h3>How to Apply Parkinson's Law in UI/UX</h3>
      <p style="margin-bottom: 15px;">
        You can optimize user speed by constraining the task boundaries:
      </p>
      <ol style="margin-bottom: 25px; padding-left: 20px;">
        <li style="margin-bottom: 8px;"><strong>Set Session Timeouts:</strong> Use reasonable, visible countdown timers during ticket purchases or checkout stages to nudge users to make decisions.</li>
        <li style="margin-bottom: 8px;"><strong>Build One-Click Actions:</strong> Implement features like Apple Pay or one-click registration to eliminate steps that drag out tasks.</li>
        <li style="margin-bottom: 8px;"><strong>Limit Input Lengths:</strong> Keep text fields to specific character counts to encourage concise inputs and prevent users from over-thinking their answers.</li>
      </ol>

      <hr style="border: 0; border-top: 1px solid var(--border); margin: 40px 0;" />
      
      <p style="font-size: 0.85rem; color: var(--text-3); line-height: 1.5;">
        This article is based on Parkinson's Law, a foundational law of design. 
        Learn more and explore the full catalog at <a href="https://lawsofux.com/parkinsons-law/" target="_blank" rel="noopener" style="color: var(--accent); text-decoration: underline;">Laws of UX by Jon Yablonski</a>. All rights reserved.
      </p>
  `
};
