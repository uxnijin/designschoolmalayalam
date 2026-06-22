// ============================================================
//  ARTICLE: Focus Groups in UX Research
// ============================================================

ARTICLE_REGISTRY["focus-groups-ux"] = {
  id: "focus-groups-ux",
  thumbnail: "assets/thumbnails/focus-groups-ux.svg",
  subcategoryId: "user-research",
  categoryId: "ux-design",
  title: "Focus Groups in UX Research: Pros, Cons, and Best Practices",
  description: "Learn the fundamentals of using focus groups in user experience research. Explore their strengths, limitations compared to 1-on-1 interviews, and how to avoid groupthink.",
  date: "2026-06-22",
  
  tags: ["ux design", "user research", "focus groups", "usability testing", "ux methods"],
  content: `
    <p style="margin-bottom: 15px;">In market research, the <strong>focus group</strong> is a staple method. Bringing a group of 6 to 9 target users together in a room to discuss a brand, advertisement, or concept can yield rapid insights. However, in the field of User Experience (UX) design, focus groups are often met with skepticism.</p>
    <p style="margin-bottom: 15px;">While focus groups are great for understanding opinions and high-level desires, they are notoriously poor at revealing actual user behavior. Let's explore how to use focus groups effectively in UX without falling into common research traps.</p>

    <h3>What is a Focus Group?</h3>
    <p style="margin-bottom: 15px;">A focus group is a moderated discussion with a small group of target participants. The goal is to collect qualitative feedback, feelings, and beliefs about a proposed concept, brand direction, or product feature set.</p>

    <h3>Focus Groups vs. User Interviews: The Crucial Difference</h3>
    <p style="margin-bottom: 15px;">The biggest trap in UX research is using focus groups as a substitute for usability testing or individual user interviews. They serve entirely different purposes:</p>
    <ul>
      <li><p style="margin-bottom: 10px;"><strong>What people say vs. What people do:</strong> Focus groups evaluate **verbalized opinions**. They capture what people *claim* they would do. Usability testing evaluates **actual interaction behavior**. Users are notoriously bad at predicting their own behavior or recalling exactly how they navigated an interface.</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Groupthink Bias:</strong> In a group setting, dominant participants often dictate the conversation. Quieter participants will conform to the majority opinion to avoid conflict, hiding critical individual pain points.</p></li>
    </ul>

    <table style="width: 100%; border-collapse: collapse; margin: 20px 0; border: 1px solid var(--border); font-size: 0.9rem;">
      <thead>
        <tr style="background-color: var(--border); text-align: left;">
          <th style="padding: 12px; border: 1px solid var(--border); width: 25%;">UX Method</th>
          <th style="padding: 12px; border: 1px solid var(--border); width: 40%;">What it Measures Best</th>
          <th style="padding: 12px; border: 1px solid var(--border);">When to Use It</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">Focus Group</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Brand perception, emotional reactions, feature desires, high-level reactions.</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Early discovery phase; brainstorming concepts; branding reviews.</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">1-on-1 Interview</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Individual workflows, deep motivations, personal history, habits.</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Creating user personas; detailed journey mapping; private workflows.</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">Usability Test</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Actual user interactions, interface friction, click paths, error rates.</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Evaluating active prototypes; auditing existing live applications.</td>
        </tr>
      </tbody>
    </table>

    <h3>When Focus Groups Work in UX</h3>
    <p style="margin-bottom: 15px;">Despite their limitations, focus groups are highly effective when applied to the right tasks:</p>
    <ol style="margin-bottom: 20px; padding-left: 20px;">
      <li><p style="margin-bottom: 10px;"><strong>Concept Validation (Early Phase):</strong> Showing multiple mockups or storyboard directions to a group to gauge immediate emotional reactions and brand preferences.</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Requirement Gathering:</strong> Discussing current systems and collecting shared frustrations with existing tools to build a baseline list of problems to solve.</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Understanding Shared Language:</strong> Listening to how participants talk about a topic. This helps copywriters use the exact vocabulary, slang, or phrases users naturally use, improving the UI microcopy.</p></li>
    </ol>

    <h3>Best Practices for Moderating Focus Groups</h3>
    <ul>
      <li><p style="margin-bottom: 10px;"><strong>Ask participants to write answers first:</strong> Before opening a topic for group discussion, have participants write their initial thoughts on a sticky note. This prevents "anchoring bias," where the first spoken opinion shapes everyone else's response.</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Actively manage dominant speakers:</strong> If one participant takes over, redirect the conversation: "Thanks, Sarah. I’d love to hear what John thinks about that."</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Focus on past actions, not future predictions:</strong> Instead of asking "Would you use this feature?", ask "How do you solve this problem today? What tools did you use last week?"</p></li>
    </ul>

    <h3>Conclusion</h3>
    <p style="margin-bottom: 15px;">In UX, focus groups are a diagnostic discover tool, not a validation mechanism. Use them to discover what users value and how they articulate problems, but always validate those opinions with individual usability testing and behavioral analytics before writing final production code.</p>
  `
};
