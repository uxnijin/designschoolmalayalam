// ============================================================
//  ARTICLE: Color Psychology in UX
// ============================================================

ARTICLE_REGISTRY["color-psychology-in-ux"] = {
  id: "color-psychology-in-ux",
  thumbnail: "assets/thumbnails/color-psychology-in-ux.svg",
  subcategoryId: "color-theory",
  categoryId: "ui-design",
  title: "Color Psychology in UX: How Color Shapes User Behavior",
  description: "Discover how color influences perception, emotion, and decision-making in digital products. Learn the psychological impact of each color, cultural considerations, and how to choose palettes that drive engagement.",
  date: "2026-06-22",
  
  tags: ["ui design", "color theory", "color psychology", "visual design", "user behavior"],
  content: `
    <p style="margin-bottom: 15px;">Color is one of the most powerful — and most underestimated — tools in a designer's toolkit. Research suggests that people make subconscious judgments about a product within <strong>90 seconds</strong> of initial viewing, and up to <strong>90% of that assessment</strong> is based on color alone (Institute for Color Research). Color doesn't just make interfaces look good — it shapes how users <em>feel</em>, what they <em>trust</em>, and how they <em>act</em>.</p>

    <h3>Why Color Matters in UX</h3>
    <p style="margin-bottom: 15px;">Color serves multiple critical functions in interface design:</p>
    <ul>
      <li><p style="margin-bottom: 10px;"><strong>Communication:</strong> Color conveys meaning instantly. Red means error or danger. Green means success or "go." Users don't need to read a label to understand these signals.</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Hierarchy:</strong> Color creates visual hierarchy, guiding the eye to primary actions (a blue "Submit" button) over secondary elements (a gray "Cancel" link).</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Emotion:</strong> Color triggers emotional responses that influence decision-making. Warm colors create urgency; cool colors create calm.</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Brand identity:</strong> Color is the most recognizable brand element. Studies show that a signature color increases brand recognition by up to 80%.</p></li>
    </ul>

    <h3>The Psychology of Individual Colors</h3>

    <table style="width: 100%; border-collapse: collapse; margin: 20px 0; border: 1px solid var(--border); font-size: 0.9rem;">
      <thead>
        <tr style="background-color: var(--border); text-align: left;">
          <th style="padding: 12px; border: 1px solid var(--border); width: 15%;">Color</th>
          <th style="padding: 12px; border: 1px solid var(--border); width: 30%;">Emotional Associations</th>
          <th style="padding: 12px; border: 1px solid var(--border);">Common UX Usage</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">🔴 Red</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Urgency, passion, danger, excitement, energy</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Error states, destructive actions (delete), sale badges, notifications</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">🔵 Blue</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Trust, stability, calm, professionalism, security</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Primary CTAs, links, fintech/healthcare apps, corporate identity</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">🟢 Green</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Success, nature, growth, health, permission</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Success messages, confirmation, eco-friendly brands, positive metrics</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">🟡 Yellow</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Optimism, warmth, caution, attention</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Warnings, highlights, rating stars, attention-grabbing accents</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">🟠 Orange</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Creativity, enthusiasm, friendliness, affordability</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">CTAs, free trial badges, playful/creative brands</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">🟣 Purple</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Luxury, wisdom, creativity, mystery, royalty</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Premium tiers, creative tools, meditation/wellness apps</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">⚫ Black</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Sophistication, power, elegance, authority</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Luxury brands, dark mode backgrounds, premium products</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">⚪ White</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Simplicity, cleanliness, space, minimalism</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Backgrounds, negative space, clean layouts, Apple-style minimalism</td>
        </tr>
      </tbody>
    </table>

    <h3>Cultural Considerations</h3>
    <p style="margin-bottom: 15px;">Color meaning is not universal — it varies dramatically across cultures. Designers building products for global audiences must be aware of these differences:</p>
    <ul>
      <li><p style="margin-bottom: 10px;"><strong>White</strong> symbolizes purity in Western cultures but is the color of mourning in many East Asian countries (China, Japan, Korea).</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Red</strong> signals danger in the West but represents prosperity, luck, and celebration in Chinese and Indian cultures.</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Green</strong> is associated with nature globally, but in some Middle Eastern countries, it carries sacred religious significance.</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Yellow</strong> represents warmth and happiness in many cultures but can signify cowardice or caution in others.</p></li>
    </ul>
    <p style="margin-bottom: 15px;">The lesson is clear: always research your target audience's cultural context before finalizing a color palette. What feels trustworthy in one market might feel alarming in another.</p>

    <h3>Color and Accessibility</h3>
    <p style="margin-bottom: 15px;">Approximately <strong>8% of men</strong> and <strong>0.5% of women</strong> worldwide have some form of color vision deficiency (color blindness). This means your color choices must account for accessibility:</p>
    <ul>
      <li><p style="margin-bottom: 10px;"><strong>Never use color alone to convey meaning.</strong> Pair color with icons, labels, patterns, or text. A red error message should also have an error icon and descriptive text.</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Meet WCAG contrast ratios:</strong> Normal text needs at least a 4.5:1 contrast ratio against its background. Large text (18px+) needs at least 3:1.</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Test with color blindness simulators:</strong> Tools like Stark (Figma plugin), Color Oracle, or Chrome DevTools can simulate how your palette looks to users with protanopia, deuteranopia, or tritanopia.</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Avoid problematic pairs:</strong> Red/green is the most common issue. Use blue/orange or blue/red as accessible alternatives for data visualization and status indicators.</p></li>
    </ul>

    <h3>Choosing a Color Palette for Your Product</h3>
    <p style="margin-bottom: 15px;">A practical product color palette typically consists of:</p>
    <ol style="margin-bottom: 20px; padding-left: 20px;">
      <li><p style="margin-bottom: 10px;"><strong>Primary color (1):</strong> Your brand's signature color. Used for primary buttons, links, and key interactive elements.</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Secondary color (1):</strong> A complementary color for secondary actions and accent elements.</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Semantic colors (3–4):</strong> Success (green), warning (yellow/amber), error (red), and info (blue). These should be consistent across your entire product.</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Neutral scale (5–10):</strong> A range of grays for text, borders, backgrounds, and disabled states. This is the backbone of your interface.</p></li>
    </ol>
    <p style="margin-bottom: 15px;"><strong>Pro tip:</strong> Start with your primary brand color, then use tools like <em>Coolors</em>, <em>Adobe Color</em>, or <em>Huemint</em> to generate harmonious palettes. Always test your palette in both light mode and dark mode.</p>

    <h3>Color in Action: How Top Products Use It</h3>
    <ul>
      <li><p style="margin-bottom: 10px;"><strong>Spotify</strong> uses a vibrant green on a dark background to create energy and draw attention to play/subscribe actions while keeping the content (album art) as the visual hero.</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Stripe</strong> uses a gradient of blue-to-purple to communicate trust (blue) and innovation (purple) — perfect positioning for a fintech product.</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Headspace</strong> uses warm oranges and soft pastels to create a sense of calm and approachability, matching its meditation-focused brand.</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Notion</strong> uses a near-monochrome palette with strategic black-and-white contrast, letting user content take center stage while maintaining a clean, professional identity.</p></li>
    </ul>

    <h3>Conclusion</h3>
    <p style="margin-bottom: 15px;">Color is never "just decoration." Every hue, shade, and contrast ratio in your product is silently communicating with your users — building trust, creating urgency, signaling errors, and shaping emotions. Understanding color psychology gives you the power to design interfaces that don't just look beautiful, but actively guide users toward better experiences.</p>

    <hr style="border: 0; border-top: 1px solid var(--border); margin: 40px 0;" />
    
    <p style="font-size: 0.85rem; color: var(--text-3); line-height: 1.5;">
      This article draws on research from the 
      <a href="https://www.colorpsychology.org/" target="_blank" rel="noopener" style="color: var(--accent); text-decoration: underline;">Institute for Color Research</a> and the 
      <a href="https://www.nngroup.com/articles/color-enhance-design/" target="_blank" rel="noopener" style="color: var(--accent); text-decoration: underline;">Nielsen Norman Group</a>.
    </p>
  `
};
