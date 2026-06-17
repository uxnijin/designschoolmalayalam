// ============================================================
//  ARTICLE: Fitts's Law - Designing for Touch Targets and Distance
// ============================================================

ARTICLE_REGISTRY["fittss-law"] = {
  id: "fittss-law",
  thumbnail: "assets/thumbnails/fittss-law.svg", // add custom image path here (e.g. assets/my-image.png) to replace
  subcategoryId: "ux-laws",
  categoryId: "ux-design",
  title: "Fitts's Law - Designing for Touch Targets and Distance",
  description: "Understand Fitts's Law and the relationship between target size, distance, and action speed. Learn design patterns for touch screen inputs.",
  date: "2026-06-17",
  
  
  tags: ["ux design","ux laws","usability","fittss law","ergonomics"],
  content: `
<p style="font-size: 1.05rem; margin-bottom: 25px;">
        Have you ever tried to tap a tiny "X" button to close a popup on your mobile phone, only to accidentally click the ad instead? That frustrating experience is a direct violation of one of the most fundamental principles in digital ergonomics: Fitts's Law.
      </p>
      <p style="font-size: 1.05rem; margin-bottom: 35px;">
        Fitts's Law governs how we interact with physical and digital interfaces. It states that the time required to acquire a target is a function of the distance to and size of that target. Let's look at how button placement and size determine user speed and accuracy.
      </p>

      <h3>What is Fitts's Law?</h3>
      <p style="margin-bottom: 15px;">
        Fitts's Law models human movement to predict how long it takes to move a cursor or finger to a target button. The rule is simple: targets that are smaller and farther away take longer to select, while targets that are larger and closer can be acquired much faster. Additionally, forcing rapid movements toward tiny targets increases error rates due to the speed-accuracy trade-off.
      </p>

      <h3>Key Takeaways for Designers</h3>
      <ul style="margin-bottom: 25px; padding-left: 20px;">
        <li style="margin-bottom: 8px;"><strong>Optimize Target Size:</strong> Make clickable elements large enough so that users can select them easily and accurately without frustration.</li>
        <li style="margin-bottom: 8px;"><strong>Use Ample Spacing:</strong> Leave generous space between interactive elements (like buttons or navigation items) to prevent accidental click errors.</li>
        <li style="margin-bottom: 8px;"><strong>Minimize Travel Distance:</strong> Position critical buttons close to the user's focus of attention or primary task area to reduce user movement effort.</li>
        <li style="margin-bottom: 8px;"><strong>Position for Reachability:</strong> Place core interactive actions (like navigation bars or purchase buttons) in areas of the interface that are most natural to access.</li>
      </ul>

      <h3>Origins and Paul Fitts</h3>
      <p style="margin-bottom: 15px;">
        Fitts's Law was proposed in 1954 by psychologist <strong>Paul Fitts</strong>. Through his experiments examining the human motor system, Fitts developed a mathematical formula (known as the Index of Difficulty) to measure the relationship between target width, distance, and execution speed.
      </p>
      <p style="margin-bottom: 15px;">
        Although originally created to analyze physical human tasks (like sorting pins or moving levers), the law was later adapted to human-computer interaction (HCI) in the 1970s. It was famously used to justify the introduction of the computer mouse and remains a core design law in modern touchscreen and mobile interfaces.
      </p>

      <h3>How to Apply Fitts's Law in UI/UX Design</h3>
      <p style="margin-bottom: 15px;">
        You can optimize your layouts for easier interaction by applying these standard sizing and spacing patterns:
      </p>
      <ol style="margin-bottom: 25px; padding-left: 20px;">
        <li style="margin-bottom: 8px;"><strong>Meet Touch Target Standards:</strong> Ensure all interactive mobile buttons are at least 44x44 pixels (Apple standard) or 48x48 density pixels (Google standard) to accommodate average human fingertips.</li>
        <li style="margin-bottom: 8px;"><strong>Design for the Thumb Zone:</strong> On mobile screens, place primary action buttons (like checkout or submit) within the lower third of the screen, which is easiest for users to reach with their thumbs.</li>
        <li style="margin-bottom: 8px;"><strong>Maximize Edge & Corner Accuracies:</strong> Corner elements are theoretically infinite in size because a user can fling their mouse pointer to the edge of the screen without overshooting (known as pinning). Leverage this for global menus or close icons.</li>
      </ol>

      <hr style="border: 0; border-top: 1px solid var(--border); margin: 40px 0;" />
      
      <p style="font-size: 0.85rem; color: var(--text-3); line-height: 1.5;">
        This article is based on Fitts's Law, a foundational law of design. 
        Learn more and explore the full catalog at <a href="https://lawsofux.com/fittss-law/" target="_blank" rel="noopener" style="color: var(--accent); text-decoration: underline;">Laws of UX by Jon Yablonski</a>. All rights reserved.
      </p>
  `
};
