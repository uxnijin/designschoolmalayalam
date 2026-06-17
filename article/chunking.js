// ============================================================
//  ARTICLE: Chunking - Grouping Information for Better Usability
// ============================================================

ARTICLE_REGISTRY["chunking"] = {
  id: "chunking",
  thumbnail: "assets/thumbnails/chunking.svg", // add custom image path here (e.g. assets/my-image.png) to replace
  subcategoryId: "ux-laws",
  categoryId: "ux-design",
  title: "Chunking - Grouping Information for Better Usability",
  description: "Learn how chunking helps users scan, process, and memorize information more easily by grouping related content.",
  date: "2026-06-17",
  
  
  tags: ["ux design","ux laws","usability","psychology","chunking","millers-law"],
  content: `
<p style="font-size: 1.05rem; margin-bottom: 25px;">
        Try to memorize this sequence of numbers: <strong>9048123956</strong>. It feels pretty difficult, right? Now try to memorize this instead: <strong>904-812-3956</strong>. Suddenly, it becomes much easier to read, remember, and speak aloud.
      </p>
      <p style="font-size: 1.05rem; margin-bottom: 35px;">
        This simple technique is called <strong>Chunking</strong>. In user experience design, chunking is a foundational method for breaking down complex information into smaller, visually distinct groups to help users digest content effortlessly. Let's see how it works. 
      </p>

      <h3>What is Chunking?</h3>
      <p style="margin-bottom: 15px;">
        Chunking is the process of taking individual pieces of information and grouping them together into a meaningful whole. Because the human brain has a limited working memory capacity, presenting a wall of unstructured text or numbers triggers cognitive overload. Grouping related content into "chunks" reduces cognitive friction and aligns with how our brains naturally organize data.
      </p>

      <h3>Key Takeaways for Designers</h3>
      <ul style="margin-bottom: 25px; padding-left: 20px;">
        <li style="margin-bottom: 8px;"><strong>Easier Scanning:</strong> Chunking allows users to quickly scan content and identify information that matches their immediate goals.</li>
        <li style="margin-bottom: 8px;"><strong>Faster Processing:</strong> Grouping content into visually distinct blocks with clear styling helps users process information and complete tasks faster.</li>
        <li style="margin-bottom: 8px;"><strong>Better Recall:</strong> Designing information in small, structured units helps users understand, memorize, and recall key details.</li>
        <li style="margin-bottom: 8px;"><strong>Do Not Abuse "Miller's Law":</strong> Avoid using the "magical number seven" to justify arbitrary layout constraints, as memory capacity varies depending on prior knowledge and context.</li>
      </ul>

      <h3>Origins and Miller's Law</h3>
      <p style="margin-bottom: 15px;">
        The concept of chunking was introduced in 1956 by cognitive psychologist <strong>George A. Miller</strong> in his landmark research paper, <em>"The Magical Number Seven, Plus or Minus Two: Some Limits on Our Capacity for Processing Information."</em>
      </p>
      <p style="margin-bottom: 15px;">
        Miller discovered that the average human short-term memory can only hold about 7 (plus or minus 2) bits of information at one time. To overcome this limitation, our brains naturally group separate elements into single units (or "chunks"). For example, we remember a credit card number as four blocks of four digits rather than one long 16-digit string.
      </p>

      <h3>How to Apply Chunking in UI/UX Design</h3>
      <p style="margin-bottom: 15px;">
        You can apply chunking across your layouts to make them feel cleaner and more approachable:
      </p>
      <ol style="margin-bottom: 25px; padding-left: 20px;">
        <li style="margin-bottom: 8px;"><strong>Format inputs cleanly:</strong> Automatically group credit cards, phone numbers, and dates using spaces or dashes as the user types.</li>
        <li style="margin-bottom: 8px;"><strong>Use cards and whitespace:</strong> Separate unrelated blocks of content using cards, borders, or generous padding, establishing clear visual modules.</li>
        <li style="margin-bottom: 8px;"><strong>Shorten paragraphs:</strong> Break long blocks of text into smaller 2–3 sentence paragraphs with clear headings and bullet lists.</li>
      </ol>

      <hr style="border: 0; border-top: 1px solid var(--border); margin: 40px 0;" />
      
      <p style="font-size: 0.85rem; color: var(--text-3); line-height: 1.5;">
        This article is based on Chunking, a foundational law of design. 
        Learn more and explore the full catalog at <a href="https://lawsofux.com/chunking/" target="_blank" rel="noopener" style="color: var(--accent); text-decoration: underline;">Laws of UX by Jon Yablonski</a>. All rights reserved.
      </p>
  `
};
