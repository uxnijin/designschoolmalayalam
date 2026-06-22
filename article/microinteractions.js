// ============================================================
//  ARTICLE: Microinteractions
// ============================================================

ARTICLE_REGISTRY["microinteractions"] = {
  id: "microinteractions",
  thumbnail: "assets/thumbnails/microinteractions.svg",
  subcategoryId: "web-ui",
  categoryId: "ui-design",
  title: "Microinteractions: The Tiny Details That Make Great Products",
  description: "Learn how microinteractions — subtle animations, feedback loops, and delightful moments — transform ordinary interfaces into engaging, human-centered experiences that users love.",
  date: "2026-06-22",
  
  tags: ["ui design", "microinteractions", "animation", "interaction design", "user experience"],
  content: `
    <p style="margin-bottom: 15px;">Every time you pull down to refresh a feed, toggle a switch, "like" a post and see a heart animation burst, or hear a subtle chime when a payment succeeds — you're experiencing a <strong>microinteraction</strong>. These tiny, often invisible design moments are what separate good products from <em>great</em> ones.</p>
    <p style="margin-bottom: 15px;">Dan Saffer, who literally wrote the book on the subject (<em>Microinteractions: Designing with Details</em>, 2013), defines them as <strong>"contained product moments that revolve around a single use case."</strong> They are the small details that make technology feel alive, responsive, and human.</p>

    <h3>Why Microinteractions Matter</h3>
    <p style="margin-bottom: 15px;">Most of a user's experience with a digital product consists of microinteractions — not grand features. Consider your daily phone usage: adjusting volume, toggling Wi-Fi, swiping notifications, entering a password. Each of these is a microinteraction, and their quality directly shapes your perception of the entire product.</p>
    <ul>
      <li><p style="margin-bottom: 10px;"><strong>They provide feedback:</strong> Users need confirmation that their actions have been registered. A button that subtly depresses on tap, a loading spinner, or a checkmark animation all reassure the user that the system is responding.</p></li>
      <li><p style="margin-bottom: 10px;"><strong>They prevent errors:</strong> A form field that changes its border to red as the user types an invalid email prevents a frustrating submission failure later.</p></li>
      <li><p style="margin-bottom: 10px;"><strong>They guide navigation:</strong> Swipe hints, tooltip reveals, and animated transitions help users understand spatial relationships and discover features.</p></li>
      <li><p style="margin-bottom: 10px;"><strong>They create delight:</strong> The confetti burst when you complete a task in Asana, the "bounce" when you reach the bottom of a scroll view, or Slack's loading messages — these moments create emotional connection.</p></li>
    </ul>

    <h3>The Anatomy of a Microinteraction</h3>
    <p style="margin-bottom: 15px;">Dan Saffer breaks every microinteraction into four structural parts:</p>

    <h4>1. Trigger</h4>
    <p style="margin-bottom: 15px;">The event that initiates the microinteraction. Triggers can be <strong>user-initiated</strong> (tapping a button, hovering over an element, swiping) or <strong>system-initiated</strong> (a notification arriving, a timer expiring, an upload completing).</p>

    <h4>2. Rules</h4>
    <p style="margin-bottom: 15px;">The logic that determines what happens once the trigger fires. Rules define the behavior: "When the user toggles this switch, change the state from OFF to ON, update the icon, and save the preference." Users never see the rules directly, but they experience them through the response.</p>

    <h4>3. Feedback</h4>
    <p style="margin-bottom: 15px;">The sensory response that communicates the result of the interaction — visual (animation, color change), auditory (a click sound, a chime), or haptic (a vibration). Feedback is what makes the microinteraction feel "alive."</p>

    <h4>4. Loops & Modes</h4>
    <p style="margin-bottom: 15px;">What happens over time or in edge cases. Does the animation repeat? Does the behavior change if the user performs the action multiple times? What happens when the system is offline? Loops and modes handle the lifecycle and long-term behavior of the microinteraction.</p>

    <table style="width: 100%; border-collapse: collapse; margin: 20px 0; border: 1px solid var(--border); font-size: 0.9rem;">
      <thead>
        <tr style="background-color: var(--border); text-align: left;">
          <th style="padding: 12px; border: 1px solid var(--border); width: 18%;">Part</th>
          <th style="padding: 12px; border: 1px solid var(--border); width: 40%;">Example (Instagram "Like")</th>
          <th style="padding: 12px; border: 1px solid var(--border);">Design Consideration</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">Trigger</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">User double-taps a photo</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">The gesture should be natural and discoverable</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">Rules</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Toggle the like state; send API request; increment counter</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Optimistic updates — show the like instantly, sync in background</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">Feedback</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">A white heart scales up with a bounce animation, then fades</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">The animation should be fast (200–400ms) and satisfying</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">Loops</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Double-tapping again does not "unlike" (unlike the heart icon)</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Edge cases define the polish level of the product</td>
        </tr>
      </tbody>
    </table>

    <h3>Great Microinteractions in the Wild</h3>
    <ul>
      <li><p style="margin-bottom: 10px;"><strong>Stripe's payment form:</strong> As you type a credit card number, the card icon in the corner dynamically changes to show the detected card brand (Visa, Mastercard, Amex). This tiny detail reduces friction and builds confidence.</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Gmail's "Undo Send":</strong> After sending an email, a toast notification appears with an "Undo" option. This microinteraction prevents errors and gives users peace of mind, converting a potentially stressful moment into a forgiving one.</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Apple's Face ID unlock:</strong> The padlock icon on the iPhone lock screen shifts from locked to unlocked with a subtle animation. No text needed — the visual metaphor communicates success instantly.</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Slack's loading messages:</strong> Instead of a generic spinner, Slack shows witty, human-sounding messages like "Herding cats..." or "Reticulating splines..." during load. This transforms a frustrating wait into a moment of delight.</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Twitter/X's pull-to-refresh:</strong> The custom spinner animation at the top of the feed provides satisfying visual feedback that new content is loading, keeping users engaged during the brief wait.</p></li>
    </ul>

    <h3>Best Practices for Designing Microinteractions</h3>
    <ol style="margin-bottom: 20px; padding-left: 20px;">
      <li><p style="margin-bottom: 10px;"><strong>Keep them fast:</strong> Most microinteractions should complete in 100–400 milliseconds. Anything longer starts feeling sluggish. The Doherty Threshold (400ms) is your upper bound for maintaining perceived responsiveness.</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Use easing curves, not linear motion:</strong> Natural motion uses acceleration and deceleration (ease-in-out). Linear animations feel robotic. Use CSS <code>cubic-bezier</code> or platform-native spring animations for lifelike movement.</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Don't overdo it:</strong> A few well-placed microinteractions create delight. Animating everything creates distraction and fatigue. Be selective — use microinteractions at key decision points and feedback moments.</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Respect reduced motion preferences:</strong> Some users experience motion sickness or vestibular disorders. Always honor the <code>prefers-reduced-motion</code> CSS media query and provide static alternatives.</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Make feedback feel proportional:</strong> Small actions deserve subtle responses. A toggle switch needs a smooth slide, not an explosion. Save dramatic animations for significant events (completing a purchase, achieving a milestone).</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Test on real devices:</strong> Animations that look smooth in Figma prototypes may stutter on low-end Android devices. Always test performance on target hardware.</p></li>
    </ol>

    <h3>Common Mistakes</h3>
    <ul>
      <li><p style="margin-bottom: 10px;"><strong>No feedback at all:</strong> A button that doesn't visually respond to a tap leaves users wondering, "Did it work?" Always provide immediate visual acknowledgment.</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Animations that block interaction:</strong> If a 2-second animation plays before the user can take their next action, it stops being delightful and starts being annoying. Never block user flow with mandatory animations.</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Inconsistent behavior:</strong> If swiping left deletes an item in one screen but opens a menu in another, users lose trust in the system's predictability.</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Ignoring error states:</strong> Designers often polish happy-path microinteractions and forget error states. What happens when the network request fails after the user tapped "Save"? Design for failure too.</p></li>
    </ul>

    <h3>Conclusion</h3>
    <p style="margin-bottom: 15px;">Microinteractions are the invisible glue that holds a user experience together. They transform functional interfaces into <em>human</em> interfaces — responsive, forgiving, and occasionally delightful. The best products aren't defined by their feature lists; they're defined by how they <em>feel</em> to use. And that feeling lives in the details.</p>
    <p style="margin-bottom: 15px;">As designer Charles Eames famously said: <em>"The details are not the details. They make the design."</em></p>

    <hr style="border: 0; border-top: 1px solid var(--border); margin: 40px 0;" />
    
    <p style="font-size: 0.85rem; color: var(--text-3); line-height: 1.5;">
      Recommended reading: 
      <a href="https://www.oreilly.com/library/view/microinteractions-designing-with/9781491945957/" target="_blank" rel="noopener" style="color: var(--accent); text-decoration: underline;">Microinteractions: Designing with Details</a> by Dan Saffer, and 
      <a href="https://www.nngroup.com/articles/microinteractions/" target="_blank" rel="noopener" style="color: var(--accent); text-decoration: underline;">NN/g on Microinteractions</a>.
    </p>
  `
};
