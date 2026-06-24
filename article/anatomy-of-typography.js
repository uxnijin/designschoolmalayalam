// ============================================================
//  ARTICLE: Anatomy of Typography - Understanding Type Elements and Terms
// ============================================================

ARTICLE_REGISTRY["anatomy-of-typography"] = {
  id: "anatomy-of-typography",
  thumbnail: "assets/thumbnails/anatomy-of-typography.svg",
  subcategoryId: "typography",
  categoryId: "ui-design",
  title: "Anatomy of Typography - Understanding Type Elements and Terms",
  description: "Dive into the structural details of fonts, from ascenders and descenders to x-height and counter spaces.",
  date: "2026-06-24",
  tags: ["ui design", "typography", "graphic design", "type anatomy", "visual design"],
  content: `
    <p style="font-size: 1.05rem; margin-bottom: 25px;">
      Typography is more than just choosing a clean font. It is an art form rooted in structural terminology. To work effectively with typography, a UI designer needs to understand how letterforms are constructed.
    </p>
    <p style="font-size: 1.05rem; margin-bottom: 35px;">
      By understanding the <strong>anatomy of typography</strong>, you can make informed decisions about font legibility, pairing, and hierarchy. Let's explore the key anatomical terms of typefaces.
    </p>

    <h3>Primary Typographic Lines</h3>
    <ul style="margin-bottom: 25px; padding-left: 20px;">
      <li style="margin-bottom: 8px;"><strong>Baseline:</strong> The invisible horizontal line upon which all capital and lowercase letterforms rest.</li>
      <li style="margin-bottom: 8px;"><strong>Cap Height:</strong> The height of capital letters measured from the baseline (e.g., the top of letter 'H' or 'T').</li>
      <li style="margin-bottom: 8px;"><strong>x-Height:</strong> The height of lowercase letters, specifically matching the lowercase letter 'x', excluding ascenders and descenders. x-height plays a massive role in readability; fonts with large x-heights remain legible at smaller sizes.</li>
    </ul>

    <h3>Structural Parts of Letterforms</h3>
    <p style="margin-bottom: 15px;">
      Just like human anatomy, letterforms have distinct limbs, joints, and spaces:
    </p>
    <ol style="margin-bottom: 25px; padding-left: 20px;">
      <li style="margin-bottom: 8px;"><strong>Ascender:</strong> The part of a lowercase letter that extends above the x-height line (e.g., the vertical stems of 'h', 'd', 'b').</li>
      <li style="margin-bottom: 8px;"><strong>Descender:</strong> The part of a lowercase letter that drops below the baseline (e.g., the stems of 'p', 'y', 'g').</li>
      <li style="margin-bottom: 8px;"><strong>Counter:</strong> The fully or partially enclosed negative space within a letter (e.g., the circle inside 'o', 'd', or 'a'). Large, open counters improve legibility.</li>
      <li style="margin-bottom: 8px;"><strong>Serif:</strong> The small decorative stroke or "foot" attached to the ends of letters. Sans-serif fonts ("without serifs") lack these feet, resulting in a cleaner, modern digital appearance.</li>
      <li style="margin-bottom: 8px;"><strong>Bowl:</strong> The curved, closed stroke that encapsulates a counter space (e.g., the circular path of 'b' or 'p').</li>
    </ol>

    <hr style="border: 0; border-top: 1px solid var(--border); margin: 40px 0;" />
    
    <p style="font-size: 0.85rem; color: var(--text-3); line-height: 1.5;">
      An anatomy-first approach to type selection is vital. When pairing a header and body copy font, select typefaces that have comparable x-heights or matching stem widths to keep layout proportions visually harmonious.
    </p>
  `
};
