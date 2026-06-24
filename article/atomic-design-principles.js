// ============================================================
//  ARTICLE: Atomic Design Principles - Building Modular UI Systems
// ============================================================

ARTICLE_REGISTRY["atomic-design-principles"] = {
  id: "atomic-design-principles",
  thumbnail: "assets/thumbnails/atomic-design-principles.svg",
  subcategoryId: "basics",
  categoryId: "ui-design",
  title: "Atomic Design Principles - Building Modular UI Systems",
  description: "Understand the Atomic Design methodology by Brad Frost and learn how to structure UI components from atoms to pages.",
  date: "2026-06-24",
  tags: ["ui design", "design systems", "atomic design", "components", "figma"],
  content: `
    <p style="font-size: 1.05rem; margin-bottom: 25px;">
      In the early days of web design, pages were designed as unique, separate entities. As the web evolved, designers realized this approach leads to inconsistencies, design drift, and massive maintenance overhead.
    </p>
    <p style="font-size: 1.05rem; margin-bottom: 35px;">
      To build scalable digital products, we need to think of interfaces as hierarchical networks of modular elements. This is the core philosophy of <strong>Atomic Design</strong>, a methodology introduced by Brad Frost. Let's break down its five distinct stages.
    </p>

    <h3>The Five Tiers of Atomic Design</h3>
    
    <h4 style="margin-top: 20px; margin-bottom: 10px;">1. Atoms</h4>
    <p style="margin-bottom: 15px;">
      Atoms are the basic building blocks of matter. In a UI design system, atoms are basic, indivisible elements that cannot be broken down further without losing their functional purpose. Examples include buttons, input tags, form labels, and color blocks.
    </p>

    <h4 style="margin-top: 20px; margin-bottom: 10px;">2. Molecules</h4>
    <p style="margin-bottom: 15px;">
      Molecules are groups of atoms bonded together. In UI, they represent small, simple combinations of components that function together as a unit. For instance, pairing a Label atom, an Input field atom, and a Button atom creates a <strong>Search Bar Molecule</strong>.
    </p>

    <h4 style="margin-top: 20px; margin-bottom: 10px;">3. Organisms</h4>
    <p style="margin-bottom: 15px;">
      Organisms are complex UI components composed of molecules and/or atoms. They form a distinct section of an interface. E.g., combining a Logo atom, a Menu links molecule, and a Search Bar molecule creates a <strong>Header Organism</strong>.
    </p>

    <h4 style="margin-top: 20px; margin-bottom: 10px;">4. Templates</h4>
    <p style="margin-bottom: 15px;">
      Templates shift focus from chemistry to system layout structure. A template is a page-level layout that places organisms, molecules, and atoms into content placeholders. It displays how components fit together visually without real data.
    </p>

    <h4 style="margin-top: 20px; margin-bottom: 10px;">5. Pages</h4>
    <p style="margin-bottom: 15px;">
      Pages are specific instances of templates that show what the design looks like with real text, images, and content. It is the final view the end user interacts with, serving as the ultimate validation point of the design system.
    </p>

    <hr style="border: 0; border-top: 1px solid var(--border); margin: 40px 0;" />
    
    <p style="font-size: 0.85rem; color: var(--text-3); line-height: 1.5;">
      Using Atomic Design principles helps bridges the gap between design mockups and frontend code. Developers think of code modularly (e.g. React components), and by building your Figma files with matching atomic hierarchies, you ensure seamless team collaboration.
    </p>
  `
};
