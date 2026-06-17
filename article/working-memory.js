// ============================================================
//  ARTICLE: Working Memory - Designing for Cognitive Limitations
// ============================================================

ARTICLE_REGISTRY["working-memory"] = {
  id: "working-memory",
  thumbnail: "assets/thumbnails/working-memory.svg", // add custom image path here (e.g. assets/my-image.png) to replace
  subcategoryId: "ux-laws",
  categoryId: "ux-design",
  title: "Working Memory - Designing for Cognitive Limitations",
  description: "Understand Working Memory and cognitive loads. Learn how to prevent memory overload through familiar layouts and chunking.",
  date: "2026-06-17",
  
  
  tags: ["ux design","ux laws","psychology","working memory","usability"],
  content: `
<p style="font-size: 1.05rem; margin-bottom: 25px;">
        Our brain is not a hard drive; it is more like RAM. We temporarily store and manipulate information to complete a task, and once the task is done, the data is completely wiped.
      </p>
      <p style="font-size: 1.05rem; margin-bottom: 35px;">
        This active scratchpad is called <strong>Working Memory</strong>. In UX design, recognizing that working memory has a very limited capacity is crucial. Overloading this cognitive system with excessive text, choices, or instructions leads users to slow down or abandon tasks entirely.
      </p>

      <h3>What is Working Memory?</h3>
      <p style="margin-bottom: 15px;">
        Working memory is the cognitive system responsible for temporarily holding and processing information in our minds. Unlike long-term memory, working memory has a very limited capacity and is highly vulnerable to distractions. If an app expects users to remember codes, steps, or instructions from one screen to the next, it risks cognitive overload.
      </p>

      <h3>Key Takeaways for Designers</h3>
      <ul style="margin-bottom: 25px; padding-left: 20px;">
        <li style="margin-bottom: 8px;"><strong>Minimize Cognitive Load:</strong> Remove non-essential text and visuals that compete for the user's active processing capacity.</li>
        <li style="margin-bottom: 8px;"><strong>Chunk Information:</strong> Structure content into small, visual modules to help users digest details.</li>
        <li style="margin-bottom: 8px;"><strong>Provide Contextual Support:</strong> Keep instructions visible on the screen where the task is happening, rather than hiding them on help pages.</li>
      </ul>

      <h3>Origins and Cognitive Theory</h3>
      <p style="margin-bottom: 15px;">
        Working memory theory was proposed in 1974 by psychologists <strong>Alan Baddeley</strong> and <strong>Graham Hitch</strong>, who modeled it as a multi-component system (comprising the central executive, phonological loop, and visuospatial sketchpad).
      </p>
      <p style="margin-bottom: 15px;">
        Their research proved that humans process auditory and visual inputs through separate channels, and both channels have strict processing bottlenecks. This model explains why complex, cluttered layouts cause instant mental fatigue.
      </p>

      <h3>How to Respect User Working Memory</h3>
      <p style="margin-bottom: 15px;">
        You can design layouts that support short-term memory constraints:
      </p>
      <ol style="margin-bottom: 25px; padding-left: 20px;">
        <li style="margin-bottom: 8px;"><strong>Keep Data Visible:</strong> During checkout, display the order summary and totals on the same screen where the user enters payment info.</li>
        <li style="margin-bottom: 8px;"><strong>Use Recognizable Icons:</strong> Stick to standard UI conventions so users don't have to spend mental effort identifying controls.</li>
        <li style="margin-bottom: 8px;"><strong>Format Multi-step Wizards:</strong> Remind users of their choices in previous steps (e.g., displaying selected plan details) during registration flows.</li>
      </ol>

      <hr style="border: 0; border-top: 1px solid var(--border); margin: 40px 0;" />
      
      <p style="font-size: 0.85rem; color: var(--text-3); line-height: 1.5;">
        This article is based on Working Memory, a foundational law of design. 
        Learn more and explore the full catalog at <a href="https://lawsofux.com/working-memory/" target="_blank" rel="noopener" style="color: var(--accent); text-decoration: underline;">Laws of UX by Jon Yablonski</a>. All rights reserved.
      </p>
  `
};
