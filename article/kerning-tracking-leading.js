// ============================================================
//  ARTICLE: Kerning, Tracking, and Leading - Typography Spacing Explained
// ============================================================

ARTICLE_REGISTRY["kerning-tracking-leading"] = {
  id: "kerning-tracking-leading",
  thumbnail: "assets/thumbnails/kerning-tracking-leading.svg",
  subcategoryId: "typography-gd",
  categoryId: "graphic-design",
  title: "Kerning, Tracking, and Leading - Typography Spacing Explained",
  description: "Understand the visual differences between kerning, tracking, and leading, and how spacing affects typography readability.",
  date: "2026-06-23",
  tags: ["graphic design", "typography", "kerning", "tracking", "leading"],
  content: `
<p style="font-size: 1.05rem; margin-bottom: 25px;">
        Have you ever seen a billboard where the word "CLlNT" looked like a completely different word because the letters "L" and "I" were placed too close together? Bad typography spacing can alter the meaning of a word, ruin readability, and make professional branding look amateurish.
      </p>
      <p style="font-size: 1.05rem; margin-bottom: 35px;">
        To control typography layout, graphic and UI designers adjust three core spacing properties: <strong>kerning</strong>, <strong>tracking</strong>, and <strong>leading</strong>. Let's break down the differences and learn how to adjust them like a pro.
      </p>

      <h3>1. Kerning (Between Pairs)</h3>
      <p style="margin-bottom: 15px;">
        Kerning is the process of adjusting the spacing between a specific pair of letters. Font files have built-in spacing, but certain letter combinations (like <strong>AV</strong>, <strong>Wa</strong>, <strong>To</strong>, or <strong>Yo</strong>) naturally create awkward visual gaps due to their diagonal shapes.
      </p>
      <p style="margin-bottom: 15px;">
        As a designer, you manually adjust the kerning of large headlines to ensure the visual weight between letters feels balanced and uniform.
      </p>

      <h3>2. Tracking (The Whole Line)</h3>
      <p style="margin-bottom: 15px;">
        Unlike kerning, which targets specific pairs, tracking (or letter-spacing) adjusts the spacing uniformly across a whole range of characters or an entire block of text.
      </p>
      <ul style="margin-bottom: 25px; padding-left: 20px;">
        <li style="margin-bottom: 8px;"><strong>Uppercase Headers:</strong> Increasing tracking on all-caps titles makes them look elegant, premium, and easy to read.</li>
        <li style="margin-bottom: 8px;"><strong>Body Text:</strong> Avoid adding too much tracking to body copy paragraphs. Standard body copy reads best when tracking is set to zero or very slightly positive. Set tracking slightly negative on extremely large display text to keep it tight.</li>
      </ul>

      <h3>3. Leading (Vertical Line Height)</h3>
      <p style="margin-bottom: 15px;">
        Leading (pronounced <em>ledding</em>) is the vertical distance between adjacent baselines of text lines. In modern UI design tools, this is called <strong>Line Height</strong>.
      </p>
      <ul style="margin-bottom: 25px; padding-left: 20px;">
        <li style="margin-bottom: 8px;"><strong>Body Text:</strong> Set leading between 140% and 160% of the font size. If your font is 16px, the leading should be roughly 24px. This gives paragraphs breathing room.</li>
        <li style="margin-bottom: 8px;"><strong>Headlines:</strong> Large display headings require tighter leading (110% to 120%) because large letters naturally have more white space around them. If set to 150%, the heading lines will look disconnected.</li>
      </ul>

      <hr style="border: 0; border-top: 1px solid var(--border); margin: 40px 0;" />
      
      <p style="font-size: 0.85rem; color: var(--text-3); line-height: 1.5;">
        Remember: visual design is not about drawing shapes; it is about managing space. Knowing when and how to adjust kerning, tracking, and leading is key to crafting readable, beautiful layouts.
      </p>
  `
};
