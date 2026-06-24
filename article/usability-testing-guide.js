// ============================================================
//  ARTICLE: Usability Testing Guide - How to Run Effective User Sessions
// ============================================================

ARTICLE_REGISTRY["usability-testing-guide"] = {
  id: "usability-testing-guide",
  thumbnail: "assets/thumbnails/usability-testing-guide.svg",
  subcategoryId: "user-research",
  categoryId: "ux-design",
  title: "Usability Testing Guide - How to Run Effective User Sessions",
  description: "A practical guide to planning, executing, and analyzing usability tests to identify friction and validate design interfaces.",
  date: "2026-06-24",
  tags: ["ux design", "user experience", "usability testing", "user research", "product design"],
  content: `
    <p style="font-size: 1.05rem; margin-bottom: 25px;">
      You've spent weeks wireframing, designing, and polishing a new feature. You think it's incredibly simple to use. But when a real user sits down to try it, they get stuck on the first step. They click the wrong button, look in the wrong place, and end up frustrated.
    </p>
    <p style="font-size: 1.05rem; margin-bottom: 35px;">
      This is the classic gap between a designer's mental model and a user's mental model. The best way to bridge this gap is through <strong>Usability Testing</strong>. Let's explore how to prepare, run, and analyze a usability test that yields actionable insights.
    </p>

    <h3>What is Usability Testing?</h3>
    <p style="margin-bottom: 15px;">
      Usability testing is a qualitative user research method where you observe real people attempting to complete tasks on your website, app, or prototype. The primary goal is to find where users get confused, make mistakes, or experience friction, allowing you to iterate on the design before writing final production code.
    </p>
    <p style="margin-bottom: 25px;">
      Unlike surveys or focus groups which capture what users <em>say</em> they do, usability testing lets you see exactly what they <em>actually do</em>.
    </p>

    <h3>Step 1: Define Your Goals and Tasks</h3>
    <p style="margin-bottom: 15px;">
      Don't just hand the user a prototype and say, "Tell me what you think." Instead, write specific, realistic task scenarios.
    </p>
    <ul style="margin-bottom: 25px; padding-left: 20px;">
      <li style="margin-bottom: 8px;"><strong>Poor Task:</strong> "Find a product and buy it." (Too broad)</li>
      <li style="margin-bottom: 8px;"><strong>Effective Task Scenario:</strong> "Imagine you are hosting a dinner party next Friday and want to buy a box of organic green tea. Walk me through how you would find and purchase it on this store."</li>
    </ul>

    <h3>Step 2: Facilitating the Session</h3>
    <p style="margin-bottom: 15px;">
      During the test, your role is to observe, listen, and take notes. Follow these crucial facilitation rules:
    </p>
    <ol style="margin-bottom: 25px; padding-left: 20px;">
      <li style="margin-bottom: 8px;"><strong>Ask for "Think Aloud":</strong> Encourage users to speak their thoughts, emotions, and decisions out loud as they navigate. Ask: <em>"What are you looking at right now? What are you expecting to happen if you click that?"</em></li>
      <li style="margin-bottom: 8px;"><strong>Don't Lead or Help:</strong> If a user gets stuck, resist the urge to help them. Silence is your best tool. Ask: <em>"What would you do if I wasn't here in the room?"</em></li>
      <li style="margin-bottom: 8px;"><strong>Observe Behavior:</strong> Watch for sighs, hesitations, furrowed brows, or mouse hover circles. These are non-verbal cues indicating cognitive strain.</li>
    </ol>

    <h3>Step 3: Analyze the Results</h3>
    <p style="margin-bottom: 15px;">
      After running 5 sessions (which is typically enough to uncover 85% of core usability issues), compile your notes. Group recurring issues into themes:
    </p>
    <ul style="margin-bottom: 25px; padding-left: 20px;">
      <li style="margin-bottom: 8px;"><strong>Critical Barriers:</strong> Issues that completely stopped a user from completing a task. (Needs immediate fix)</li>
      <li style="margin-bottom: 8px;"><strong>Minor Annoyances:</strong> Issues that caused hesitation but didn't block completion. (Refine in next design pass)</li>
    </ul>

    <hr style="border: 0; border-top: 1px solid var(--border); margin: 40px 0;" />
    
    <p style="font-size: 0.85rem; color: var(--text-3); line-height: 1.5;">
      Usability testing is not a one-time event. It is an iterative cycle: Test, design, prototype, and test again. By integrating testing early, you prevent costly design revisions later in the development lifecycle.
    </p>
  `
};
