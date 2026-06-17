// ============================================================
//  ARTICLE: Doherty Threshold - The 400ms Rule for Responsiveness
// ============================================================

ARTICLE_REGISTRY["doherty-threshold"] = {
  id: "doherty-threshold",
  thumbnail: "assets/thumbnails/doherty-threshold.svg", // add custom image path here (e.g. assets/my-image.png) to replace
  subcategoryId: "ux-laws",
  categoryId: "ux-design",
  title: "Doherty Threshold - The 400ms Rule for Responsiveness",
  description: "Discover why system feedback under 400 milliseconds is essential for keeping users productive and engaged. Learn how to manage perceived performance.",
  date: "2026-06-17",
  
  
  tags: ["ux design","ux laws","usability","doherty threshold","performance"],
  content: `
<p style="font-size: 1.05rem; margin-bottom: 25px;">
        Have you ever clicked a button on a website, only to wait in complete silence, wondering if the page froze or if your click didn't register? That split-second delay feels incredibly frustrating. In human-computer interaction, speed isn't just a technical specification—it is a core component of usability.
      </p>
      <p style="font-size: 1.05rem; margin-bottom: 35px;">
        This expectation of instantaneous feedback is governed by a principle called the <strong>Doherty Threshold</strong>. It states that productivity soars when a computer and its users interact at a pace of less than 400 milliseconds. Let's see how speed dictates the user experience.
      </p>

      <h3>What is the Doherty Threshold?</h3>
      <p style="margin-bottom: 15px;">
        The Doherty Threshold asserts that keeping a system's response time under 400 milliseconds ensures a seamless, continuous flow of interaction. At this pace, neither the user nor the computer is waiting for the other. When response times exceed this threshold, the user's attention drifts, their productivity drops, and cognitive friction increases.
      </p>

      <h3>Key Takeaways for Designers</h3>
      <ul style="margin-bottom: 25px; padding-left: 20px;">
        <li style="margin-bottom: 8px;"><strong>Provide Rapid Feedback:</strong> Ensure the system responds to user interactions (clicks, taps, inputs) with visual feedback or state changes within 400ms to maintain user engagement.</li>
        <li style="margin-bottom: 8px;"><strong>Manage Perceived Performance:</strong> Use skeleton screens, progress bars, or micro-animations to make unavoidable wait times feel shorter and improve the perception of responsiveness.</li>
        <li style="margin-bottom: 8px;"><strong>Use Strategic Delays:</strong> Sometimes, purposefully delaying a response can build trust or increase the perceived value of a process (e.g., a security scan or calculation).</li>
        <li style="margin-bottom: 8px;"><strong>Prevent Disruption:</strong> Avoid sudden UI layout shifts or delayed alerts that disrupt the user's continuous flow of thought.</li>
      </ul>

      <h3>Origins and History</h3>
      <p style="margin-bottom: 15px;">
        The threshold is named after <strong>Walter J. Doherty</strong> and <strong>Ahrvind J. Thadani</strong>, who published a groundbreaking research paper in the <em>IBM Systems Journal</em> in 1982.
      </p>
      <p style="margin-bottom: 15px;">
        Prior to their study, the industry standard for response times was 2,000 milliseconds (2 seconds). Doherty and Thadani proved that reducing response times below 400ms caused users to interact much faster, completing more work in less time. In fact, keeping the feedback loop under 400ms kept users deeply engaged—creating a sense of direct manipulation and control.
      </p>

      <h3>How to Apply the Doherty Threshold in UX</h3>
      <p style="margin-bottom: 15px;">
        You can build highly responsive flows by implementing these performance-centric design patterns:
      </p>
      <ol style="margin-bottom: 25px; padding-left: 20px;">
        <li style="margin-bottom: 8px;"><strong>Implement Skeleton Loaders:</strong> Replace blank screens and spinner indicators with shimmer skeletons to show the page structure immediately while data is loading.</li>
        <li style="margin-bottom: 8px;"><strong>Optimistic UI Updates:</strong> Update the UI state instantly (e.g., liking a post or adding an item to a cart) before receiving the server confirmation, correcting it only in the rare case of failure.</li>
        <li style="margin-bottom: 8px;"><strong>Add Active States:</strong> Build instant CSS <code>:hover</code> and <code>:active</code> states on buttons so users feel an immediate mechanical response to their taps and clicks.</li>
      </ol>

      <hr style="border: 0; border-top: 1px solid var(--border); margin: 40px 0;" />
      
      <p style="font-size: 0.85rem; color: var(--text-3); line-height: 1.5;">
        This article is based on Doherty Threshold, a foundational law of design. 
        Learn more and explore the full catalog at <a href="https://lawsofux.com/doherty-threshold/" target="_blank" rel="noopener" style="color: var(--accent); text-decoration: underline;">Laws of UX by Jon Yablonski</a>. All rights reserved.
      </p>
  `
};
