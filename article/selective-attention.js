// ============================================================
//  ARTICLE: Selective Attention - Guiding User Focus
// ============================================================

ARTICLE_REGISTRY["selective-attention"] = {
  id: "selective-attention",
  thumbnail: "assets/thumbnails/selective-attention.svg", // add custom image path here (e.g. assets/my-image.png) to replace
  subcategoryId: "ux-laws",
  categoryId: "ux-design",
  title: "Selective Attention - Guiding User Focus",
  description: "Understand Selective Attention and cognitive filters. Learn design patterns that guide user attention and prevent distractions.",
  date: "2026-06-17",
  
  
  tags: ["ux design","ux laws","psychology","selective attention","usability"],
  content: `
<p style="font-size: 1.05rem; margin-bottom: 25px;">
        We interact with the world through a thick filter of attention. At any given second, our brains are bombarded with sights, sounds, and inputs, and we actively ignore almost all of them to stay focused.
      </p>
      <p style="font-size: 1.05rem; margin-bottom: 35px;">
        This filtering process is governed by <strong>Selective Attention</strong>. It states that users focus their attention on only a subset of stimuli in their environment—typically those that align with their goals. Designers must construct clean layouts that support this focus while preventing distractions.
      </p>

      <h3>What is Selective Attention?</h3>
      <p style="margin-bottom: 15px;">
        Selective attention is the cognitive process of focusing on a single task or object while ignoring other distracting stimuli. In user interface design, users block out layout elements that they believe are irrelevant to their primary task. This filtering leads to visual phenomena like:
      </p>
      <ul style="margin-bottom: 25px; padding-left: 20px;">
        <li style="margin-bottom: 8px;"><strong>Banner Blindness:</strong> The tendency for users to ignore ads, banners, or any page elements that look like promotions.</li>
        <li style="margin-bottom: 8px;"><strong>Change Blindness:</strong> When users fail to notice significant layout changes because their attention is focused elsewhere on the screen.</li>
      </ul>

      <h3>Key Takeaways for Designers</h3>
      <ul style="margin-bottom: 25px; padding-left: 20px;">
        <li style="margin-bottom: 8px;"><strong>Align with User Goals:</strong> Place important information directly in the user's primary path of execution.</li>
        <li style="margin-bottom: 8px;"><strong>Eliminate Visual Noise:</strong> Remove flashing icons, side-banners, and clutter that compete for the user's limited attention.</li>
        <li style="margin-bottom: 8px;"><strong>Highlight Important Changes:</strong> Use clear visual cues (like popovers, badges, or color shifts) to ensure users notice critical state changes.</li>
      </ul>

      <h3>Origins and Psychological Roots</h3>
      <p style="margin-bottom: 15px;">
        Selective attention research emerged in cognitive psychology during the mid-20th century. Key studies include:
      </p>
      <ul style="margin-bottom: 25px; padding-left: 20px;">
        <li style="margin-bottom: 8px;"><strong>The Cocktail Party Effect (1953):</strong> Colin Cherry demonstrated how we can focus on one voice in a crowded room while filtering out background conversation.</li>
        <li style="margin-bottom: 8px;"><strong>Broadbent's Filter Model (1958):</strong> Donald Broadbent modeled the brain as an information channel with a bottleneck, proving that we block out unattended inputs early in cognitive processing.</li>
      </ul>

      <h3>How to Apply Selective Attention in UX</h3>
      <p style="margin-bottom: 15px;">
        You can design clean, focused layouts that direct user attention:
      </p>
      <ol style="margin-bottom: 25px; padding-left: 20px;">
        <li style="margin-bottom: 8px;"><strong>Emphasize Primary Actions:</strong> Use size, contrast, and color to make call-to-action buttons (like "Get Started") visually dominant.</li>
        <li style="margin-bottom: 8px;"><strong>Differentiate Alert States:</strong> When a form validation fails, change the border color of the specific input and display text alerts immediately beneath it.</li>
        <li style="margin-bottom: 8px;"><strong>Minimize Secondary Content:</strong> Use collapsible sections or tab structures to hide auxiliary links, keeping the main page focused on one action.</li>
      </ol>

      <hr style="border: 0; border-top: 1px solid var(--border); margin: 40px 0;" />
      
      <p style="font-size: 0.85rem; color: var(--text-3); line-height: 1.5;">
        This article is based on Selective Attention, a foundational law of design. 
        Learn more and explore the full catalog at <a href="https://lawsofux.com/selective-attention/" target="_blank" rel="noopener" style="color: var(--accent); text-decoration: underline;">Laws of UX by Jon Yablonski</a>. All rights reserved.
      </p>
  `
};
