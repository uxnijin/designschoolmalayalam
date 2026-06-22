// ============================================================
//  ARTICLE: User Journey Mapping
// ============================================================

ARTICLE_REGISTRY["user-journey-mapping"] = {
  id: "user-journey-mapping",
  thumbnail: "assets/thumbnails/user-journey-mapping.svg",
  subcategoryId: "user-research",
  categoryId: "ux-design",
  title: "User Journey Mapping: A Practical Guide",
  description: "Learn how to build user journey maps to visualize user behavior, identify pain points, and design empathetic products.",
  date: "2026-06-22",
  
  tags: ["ux design", "user research", "journey mapping", "user experience", "ux strategy"],
  content: `
    <p style="margin-bottom: 15px;">When designing products, it is easy to focus on individual screens and lose sight of the end-to-end experience. A user doesn't just experience your interface; they experience a continuous process to achieve a goal. To design empathetic and effective products, you must map this path using a <strong>User Journey Map</strong>.</p>
    <p style="margin-bottom: 15px;">A user journey map is a visual timeline of a user's interactions with your product, brand, or service over time, plotted from their perspective. It helps product teams alignment, identifying friction points and highlighting opportunities for innovation.</p>

    <h3>The Anatomy of a User Journey Map</h3>
    <p style="margin-bottom: 15px;">While journey maps vary based on target audiences and goals, a standard map contains these key components:</p>

    <ol style="margin-bottom: 20px; padding-left: 20px;">
      <li><p style="margin-bottom: 10px;"><strong>Actor (Persona):</strong> Who is taking this journey? Your map must focus on a specific target user to be accurate and action-oriented.</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Scenario & Goals:</strong> The specific situation the actor is in and the ultimate objective they are trying to achieve (e.g., buying a train ticket or setting up an online store).</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Phases:</strong> High-level stages of the journey (e.g., Discovery, Research, Comparison, Purchase, Post-Purchase).</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Actions, Mindset, and Emotions:</strong> What is the user doing at each phase? What are they thinking? How do they feel? Usually visualized with an emotional curve chart (highs and lows).</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Pain Points:</strong> Friction, frustrations, and obstacles encountered along the way.</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Opportunities:</strong> Brainstormed design solutions and areas to improve the user experience based on the discovered pain points.</p></li>
    </ol>

    <table style="width: 100%; border-collapse: collapse; margin: 20px 0; border: 1px solid var(--border); font-size: 0.9rem;">
      <thead>
        <tr style="background-color: var(--border); text-align: left;">
          <th style="padding: 12px; border: 1px solid var(--border); width: 20%;">Phase</th>
          <th style="padding: 12px; border: 1px solid var(--border); width: 30%;">User Action</th>
          <th style="padding: 12px; border: 1px solid var(--border); width: 25%;">Pain Point</th>
          <th style="padding: 12px; border: 1px solid var(--border);">Design Opportunity</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">1. Awareness</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Searches for solutions online, reads articles, watches video ads.</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Confusing terminology, information overload.</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Simplify marketing copy, highlight primary benefits.</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">2. Onboarding</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Creates an account, fills out personal profile info.</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Too many input fields, intrusive permission requests.</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Use progressive disclosure, offer social sign-in.</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">3. Execution</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Uses the core feature to complete their main goal.</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Slow performance, confusing navigation steps.</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Optimize response speed, keep primary actions visible.</td>
        </tr>
      </tbody>
    </table>

    <h3>Step-by-Step: How to Map a Journey</h3>
    <ol style="margin-bottom: 20px; padding-left: 20px;">
      <li><p style="margin-bottom: 10px;"><strong>Define Your Scope:</strong> Clearly declare what scenario you are mapping and choose your target persona.</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Gather Data:</strong> Never build a journey map entirely on assumptions. Use real qualitative and quantitative research (e.g., user interviews, surveys, support tickets, and analytics).</p></li>
      <li><p style="margin-bottom: 10px;"><strong>List Touchpoints and Channels:</strong> Identify all channels where users interact with you (e.g., app, email, website, social media, customer service).</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Plot the Timeline:</strong> Group the user's actions into high-level phases and outline their thoughts and feelings at each step.</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Identify Opportunities:</strong> Bring your product, design, and engineering teams together to review pain points and brainstorm solutions.</p></li>
    </ol>

    <h3>Conclusion</h3>
    <p style="margin-bottom: 15px;">A user journey map is a powerful diagnostic tool. By visualising the complete lifecycle of a user action, you see past individual screens and align your team around a shared, user-centric vision. Stop looking at pixels in isolation—start mapping the experience.</p>
  `
};
