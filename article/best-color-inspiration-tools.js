(() => {
// ============================================================
//  ARTICLE: Best Color Inspiration & Palette Tools | TOOOLS.design
// ============================================================

const toolsData = {
  "color-inspiration": [
    {
      "title": "Color Hunt",
      "link": "https://colorhunt.co/",
      "desc": "Free and open platform for color inspiration with thousands of trendy hand-picked color palettes.",
      "price": "Free"
    },
    {
      "title": "Picular",
      "link": "https://picular.co",
      "desc": "Works like google but the results are colors.",
      "price": "Free"
    },
    {
      "title": "Color Leap",
      "link": "https://colorleap.app",
      "desc": "Take a leap through time and see the colors of history.",
      "price": "Free"
    },
    {
      "title": "ColorDrop",
      "link": "https://colordrop.io/",
      "desc": "Color palette inspiration for creatives.",
      "price": "Free"
    },
    {
      "title": "Hi Hues (Design Seeds)",
      "link": "https://www.hihues.com/design-seeds-archive",
      "desc": "For all who love colors.",
      "price": "Free"
    },
    {
      "title": "Tone",
      "link": "https://t-o-n-e.com/",
      "desc": "A source of inspiration for creating color palettes rooted in nature.",
      "price": "Free"
    },
    {
      "title": "SchemeColor",
      "link": "https://www.schemecolor.com/",
      "desc": "Discover thousands of beautiful color schemes made by professionals.",
      "price": "Free"
    },
    {
      "title": "Duo",
      "link": "https://duo.alexpate.uk/",
      "desc": "Collection of color combinations to inspire your next design.",
      "price": "Free"
    },
    {
      "title": "Colorsinspo",
      "link": "https://colorsinspo.com/",
      "desc": "All in one resource for finding everything about colors.",
      "price": "Free"
    },
    {
      "title": "Colors.lol",
      "link": "https://colors.lol/",
      "desc": "Overly descriptive color palettes.",
      "price": "Free"
    },
    {
      "title": "Color Controversy",
      "link": "https://colorcontroversy.com/",
      "desc": "Judge colors.",
      "price": "Free"
    },
    {
      "title": "Color Selector",
      "link": "https://www.color-selector.com/",
      "desc": "A database of colors and images for trend forecaster and designers.",
      "price": "Free"
    },
    {
      "title": "Palitra",
      "link": "https://palitra.app/",
      "desc": "Just google your color palette.",
      "price": "Free"
    },
    {
      "title": "RandomA11y",
      "link": "https://randoma11y.com/",
      "desc": "Discover random, accessible color combinations on a real-time color playground.",
      "price": "Free"
    },
    {
      "title": "Meditations in Color",
      "link": "https://meditationsincolor.com/",
      "desc": "Curated archive of artists color palettes across history.",
      "price": "Free"
    }
  ],
  "color-palette-generators": [
    {
      "title": "Coolors",
      "link": "https://coolors.co/?ref=695d003584d32e000f896759",
      "desc": "Create the perfect palette or get inspired by thousands of beautiful color schemes.",
      "price": "Free + Paid"
    },
    {
      "title": "Adobe Color",
      "link": "https://color.adobe.com",
      "desc": "Create color themes, explore color inspiration and find color trends.",
      "price": "Free"
    },
    {
      "title": "Pantone Connect",
      "link": "https://www.pantone.com/pantone-connect",
      "desc": "Design with 15,000 Pantone\u00ae colors. Convert to Pantone codes. Create and save custom palettes.",
      "price": "Free Trial"
    },
    {
      "title": "Khroma",
      "link": "http://khroma.co/",
      "desc": "Discover, search, and save color combos and palettes powered by AI.",
      "price": "Free"
    },
    {
      "title": "Paletter",
      "link": "https://www.paletter.app/",
      "desc": "Your shortcut to consistently perfect colors.",
      "price": "Free + Paid"
    },
    {
      "title": "Colormind",
      "link": "http://colormind.io/",
      "desc": "AI powered color combinations based on your preferences.",
      "price": "Free"
    },
    {
      "title": "ColorSpace",
      "link": "https://mycolor.space/",
      "desc": "Generate nice color palettes.",
      "price": "Free"
    },
    {
      "title": "Paletton",
      "link": "https://paletton.com/",
      "desc": "A color scheme designer.",
      "price": "Free"
    },
    {
      "title": "Subcolor",
      "link": "https://subcolor.github.io/",
      "desc": "Subcolor is a tool to generate colors between two colors.",
      "price": "Free"
    },
    {
      "title": "Muzli Colors",
      "link": "https://colors.muz.li/",
      "desc": "Create beautiful color schemes that works.",
      "price": "Free"
    },
    {
      "title": "Palette App",
      "link": "https://palettte.app/",
      "desc": "Palette editing and remapping tool.",
      "price": "Free"
    },
    {
      "title": "ColorKit",
      "link": "https://colorkit.io/",
      "desc": "Blends colors and generates a color's shades and tints.",
      "price": "Free"
    },
    {
      "title": "Spectrum",
      "link": "https://colorspectrum.design/",
      "desc": "Generate color palettes and apply instantly to anything.",
      "price": "Paid"
    },
    {
      "title": "Poline",
      "link": "https://meodai.github.io/poline/",
      "desc": "An enigmatic color palette generator, that harnesses the mystical witchcraft of polar coordinates.",
      "price": "Free"
    },
    {
      "title": "Palette Hunt",
      "link": "https://apps.apple.com/us/app/id6449098473",
      "desc": "A quintessential ally for designers and color enthusiasts alike.",
      "price": "Free"
    },
    {
      "title": "Color Fuse AI",
      "link": "https://colorfuseai.com/",
      "desc": "Let AI decide the right colors for your design projects.",
      "price": "Free + Paid"
    }
  ],
  "color-libraries-systems": [
    {
      "title": "ColorBox",
      "link": "http://www.colorbox.io/",
      "desc": "Open-source color tool to produce various color sets using algorithms.",
      "price": "Free"
    },
    {
      "title": "Material Design Color System",
      "link": "https://m2.material.io/design/color/the-color-system.html",
      "desc": "Create accessible, personal color schemes communicating your product's hierarchy, state, and brand.",
      "price": "Free"
    },
    {
      "title": "Harmonizer",
      "link": "https://harmonizer.evilmartians.com/",
      "desc": "Color palette generator for UI.",
      "price": "Free"
    },
    {
      "title": "Scale",
      "link": "https://hihayk.github.io/scale",
      "desc": "A generative way to create color scales.",
      "price": "Free"
    },
    {
      "title": "Open Color",
      "link": "https://yeun.github.io/open-color",
      "desc": "Open-source color scheme optimized for UI elements.",
      "price": "Free"
    },
    {
      "title": "Huey",
      "link": "https://huey.design/",
      "desc": "Rapid color palettes across the rainbow.",
      "price": "Free"
    },
    {
      "title": "Goodpalette",
      "link": "https://goodpalette.io/",
      "desc": "Make beautiful color palettes for UI.",
      "price": "Free"
    },
    {
      "title": "Atmos",
      "link": "https://atmos.style/",
      "desc": "Create better UI color palettes with ease.",
      "price": "Free Trial"
    },
    {
      "title": "Supa Palette",
      "link": "https://www.supa-palette.com/",
      "desc": "The ultimate color palette generator for Figma.",
      "price": "Paid"
    },
    {
      "title": "Hue.tools",
      "link": "https://hue.tools/",
      "desc": "An open source toolbox for colors.",
      "price": "Free"
    },
    {
      "title": "InclusiveColors",
      "link": "https://www.inclusivecolors.com/",
      "desc": "Creates custom Tailwind-style color palettes with WCAG accessibility built-in.",
      "price": "Free"
    },
    {
      "title": "Leonardo",
      "link": "https://leonardocolor.io/",
      "desc": "A one-of-a-kind tool for creating, managing, and sharing accessible color systems.",
      "price": "Free"
    },
    {
      "title": "Supa Colors",
      "link": "https://supacolors.studio/",
      "desc": "Professional color system builder with WCAG accessibility checks.",
      "price": "Freemium"
    },
    {
      "title": "Alphredo",
      "link": "https://alphredo.app/",
      "desc": "Generate translucent (alpha) colors looking the same as their opaque counterparts.",
      "price": "Free"
    },
    {
      "title": "Colorca",
      "link": "https://colorca.org/",
      "desc": "Design an accessible color palette for digital products in HSLuv color space.",
      "price": "Free"
    },
    {
      "title": "Kolors",
      "link": "https://www.kolors.dev",
      "desc": "Color palette generator for design systems.",
      "price": "Free"
    },
    {
      "title": "Color Designer",
      "link": "https://colordesigner.io/",
      "desc": "A comprehensive color tools platform.",
      "price": "Free + Paid"
    },
    {
      "title": "Color Pal",
      "link": "https://color-pal.com/",
      "desc": "A tool for selecting color palettes for design systems.",
      "price": "Free"
    },
    {
      "title": "Colorspace",
      "link": "https://www.colorspace.dev/",
      "desc": "A tool for generating consistent and predictable color swatches.",
      "price": "Free"
    },
    {
      "title": "Color Ramp",
      "link": "https://color-ramp.com/",
      "desc": "Create accessible color ramps in less than 5 seconds, no BS.",
      "price": "Free"
    },
    {
      "title": "Volume",
      "link": "https://www.volumecolor.io/",
      "desc": "A professional 3D OKLCH color picker and procedural palette generator",
      "price": "Free"
    },
    {
      "title": "Kigen Color Generator",
      "link": "https://kigen.design/color",
      "desc": "Create shades for your next design system with style.",
      "price": "Free"
    }
  ],
  "colors-in-context": [
    {
      "title": "Happy Hues",
      "link": "https://www.happyhues.co/",
      "desc": "Curated colors in context.",
      "price": "Free"
    },
    {
      "title": "Realtime Colors",
      "link": "https://realtimecolors.com/",
      "desc": "Visualize your color choices on a real website.",
      "price": "Free"
    },
    {
      "title": "UI Colors",
      "link": "https://uicolors.app/",
      "desc": "Create and visualize Tailwind colors on all sorts of components, gradients, charts and logos.",
      "price": "Free + Paid"
    },
    {
      "title": "Huemint",
      "link": "https://huemint.com/",
      "desc": "Use machine learning to create unique color schemes for your brand, website or graphic.",
      "price": "Free"
    },
    {
      "title": "Palettemaker",
      "link": "https://palettemaker.com/app",
      "desc": "Create and test drive color palettes on real design examples.",
      "price": "Free"
    }
  ],
  "gradient-inspiration": [
    {
      "title": "Grabient",
      "link": "https://www.grabient.com/",
      "desc": "Beautiful gradient inspiration.",
      "price": "Free"
    },
    {
      "title": "CoolHue 2.0",
      "link": "https://webkul.github.io/coolhue/",
      "desc": "Cool color gradients to copy and paste. Also available as a sketch plugin.",
      "price": "Free"
    },
    {
      "title": "Gradient Hunt",
      "link": "https://gradienthunt.com/",
      "desc": "A free and open platform for color inspiration.",
      "price": "Free"
    },
    {
      "title": "Design Gradients",
      "link": "https://www.designgradients.com/",
      "desc": "Free gradients curated by designers to use anywhere you want.",
      "price": "Free"
    },
    {
      "title": "WebGradients",
      "link": "https://webgradients.com/",
      "desc": "A free collection of 180 linear gradients.",
      "price": "Free"
    },
    {
      "title": "CSS Gradient",
      "link": "https://cssgradient.io/",
      "desc": "Free css gradient generator tool, that lets you create colorful gradient backgrounds.",
      "price": "Free"
    },
    {
      "title": "Ingradients",
      "link": "https://ingradients.net/",
      "desc": "Hand-picked mesh gradients for your next design project.",
      "price": "Free + Paid"
    },
    {
      "title": "Gradientos",
      "link": "https://www.gradientos.app/editor",
      "desc": "Hand-picked CSS gradients on UI elements.",
      "price": "Free"
    }
  ],
  "color-picker": [
    {
      "title": "System Color Picker",
      "link": "https://sindresorhus.com/system-color-picker",
      "desc": "The familiar color picker supercharged.",
      "price": "Free"
    },
    {
      "title": "ColorSlurp",
      "link": "https://colorslurp.com/",
      "desc": "The ultimate color picker for Mac users.",
      "price": "Freemium"
    },
    {
      "title": "Sip",
      "link": "https://sipapp.io",
      "desc": "A professional color picker which allows you to collect, organize, edit and share colors on mac.",
      "price": "Free Trial"
    },
    {
      "title": "Roy",
      "link": "https://www.useroy.com/",
      "desc": "A tiny & delightful color picker for designers.",
      "price": "Paid"
    },
    {
      "title": "ColorZilla",
      "link": "https://www.colorzilla.com/chrome/",
      "desc": "A browser extension assisting web devs and graphic designers with color related tasks.",
      "price": "Free"
    },
    {
      "title": "Pika",
      "link": "https://superhighfives.com/pika",
      "desc": "An open-source colour picker app for macOS.",
      "price": "Free"
    },
    {
      "title": "Colorway",
      "link": "https://chroma.dev/",
      "desc": "Seriously epic browser color tools.",
      "price": "Free"
    },
    {
      "title": "Color Pocket",
      "link": "https://www.colorpocket.app/",
      "desc": "An effortless color picker for Google Chrome.",
      "price": "Free"
    },
    {
      "title": "Litur",
      "link": "https://litur.app/",
      "desc": "A color picker for the real world.",
      "price": "Free Trial"
    },
    {
      "title": "Just Color Picker",
      "link": "https://annystudio.com/software/colorpicker/",
      "desc": "Free offline color picker and color editor for Windows.",
      "price": "Free"
    }
  ],
  "color-converter": [
    {
      "title": "ColorHexa",
      "link": "https://www.colorhexa.com/",
      "desc": "A free color converter.",
      "price": "Free"
    },
    {
      "title": "OKLCH Color Picker",
      "link": "https://oklch.com/",
      "desc": "A new way of working with color.",
      "price": "Free"
    },
    {
      "title": "Colorizer",
      "link": "https://colorizer.org/",
      "desc": "Color converter and generator with high precision and contrast test.",
      "price": "Free"
    },
    {
      "title": "rgb.to",
      "link": "https://rgb.to/",
      "desc": "Convert colors between HEX, RGB, CMYK, Pantone, RAL, HSL, HSB, and more.",
      "price": "Free"
    }
  ],
  "color-contrast-checker": [
    {
      "title": "Who Can Use",
      "link": "https://whocanuse.com/",
      "desc": "Understand how color contrast can affect different people with visual impairments.",
      "price": "Free"
    },
    {
      "title": "Contrast",
      "link": "https://usecontrast.com/",
      "desc": "A Figma plugin and macOS app for quick access to WCAG color contrast ratios.",
      "price": "Free + Paid"
    },
    {
      "title": "Stark",
      "link": "https://www.getstark.co/",
      "desc": "Connects the tools you and your team already use in a streamlined end-to-end accessibility workflow.",
      "price": "Freemium"
    },
    {
      "title": "Accessible Brand Colors",
      "link": "https://abc.useallfive.com/",
      "desc": "A tool that shows you how ADA compliant your colors are in relation to each other.",
      "price": "Free"
    },
    {
      "title": "Button Buddy",
      "link": "https://buttonbuddy.dev/",
      "desc": "Ensuring accessible contrast for buttons.",
      "price": "Free"
    },
    {
      "title": "Contrast Grid",
      "link": "https://contrast-grid.eightshapes.com/",
      "desc": "Test many color combos for compliance with WCAG 2.0 minimum contrast.",
      "price": "Free"
    },
    {
      "title": "Colour Contrast Checker",
      "link": "https://colourcontrast.cc/",
      "desc": "Check the contrast between different colour combinations against WCAG standards.",
      "price": "Free"
    },
    {
      "title": "Color Review",
      "link": "https://color.review/",
      "desc": "A tool for exploring and finding accessible colors.",
      "price": "Free"
    },
    {
      "title": "Colour Contrast Analyser",
      "link": "https://www.tpgi.com/color-contrast-checker/",
      "desc": "Free color contrast checker tool to easily determine the contrast ratio of two colors.",
      "price": "Free"
    },
    {
      "title": "Sim Daltonism",
      "link": "https://apps.apple.com/ca/app/sim-daltonism/id693112260?en",
      "desc": "Visualize colors as they are perceived with various types of color blindness.",
      "price": "Free"
    },
    {
      "title": "Accessible Color Matrix",
      "link": "https://toolness.github.io/accessible-color-matrix/",
      "desc": "A tool to help designers build color palettes with combinations that conform with accessibility standards.",
      "price": "Free"
    },
    {
      "title": "Contrast Plugin",
      "link": "https://www.figma.com/community/plugin/748533339900865323/Contrast",
      "desc": "Check the contrast ratios of colors as you work in Figma.",
      "price": "Free"
    },
    {
      "title": "Accented",
      "link": "https://accented.dev/",
      "desc": "A frontend library for continuous accessibility testing and issue highlighting.",
      "price": "Free"
    },
    {
      "title": "Polypane",
      "link": "https://polypane.app/",
      "desc": "A browser for developing responsive & accessible websites.",
      "price": "Paid"
    },
    {
      "title": "OddContrast",
      "link": "https://www.oddcontrast.com/",
      "desc": "A color contrast checker with Oklch, Oklab, P3, and more.",
      "price": "Free"
    },
    {
      "title": "DevAlly",
      "link": "https://devally.com/",
      "desc": "AI-powered platform for product accessibility compliance.",
      "price": "Freemium"
    },
    {
      "title": "Omi A11Y",
      "link": "https://omi-a11y.pages.dev/",
      "desc": "Free Chrome extension for instant WCAG accessibility scanning.",
      "price": "Free"
    }
  ],
  "color-books": [
    {
      "title": "The Complete Color Harmony, Pantone Edition: Expert Color Information for Professional Results",
      "link": "https://amzn.to/4qF4ewC",
      "desc": "Leatrice Eiseman",
      "price": "Paid"
    },
    {
      "title": "Color and Meaning: Art, Science, and Symbolism",
      "link": "https://amzn.to/4qDtljr",
      "desc": "John Gage",
      "price": "Paid"
    },
    {
      "title": "Interaction of Color",
      "link": "https://amzn.to/4a5bk8U",
      "desc": "Josef Albers",
      "price": "Paid"
    },
    {
      "title": "Palette Perfect for Graphic Designers and Illustrators: Colour Combinations, Meanings and Cultural References",
      "link": "https://amzn.to/4rJvUlx",
      "desc": "Sara Caldas",
      "price": "Paid"
    }
  ]
};

const categories = {
  "color-inspiration": {
    title: "Color Inspiration Platforms",
    desc: "Curated collections, daily palettes, and trending designs to spark your color combinations."
  },
  "color-palette-generators": {
    title: "Color Palette Generators",
    desc: "AI generators and interactive builders to instantly create cohesive color palettes and schemes."
  },
  "color-libraries-systems": {
    title: "Color Libraries & Systems",
    desc: "Standardized color frameworks, design system token systems, and color palette directories."
  },
  "colors-in-context": {
    title: "Colors in Context & Visualizers",
    desc: "Visualization tools to preview how color combinations look on layouts, illustrations, and user interfaces."
  },
  "gradient-inspiration": {
    title: "Gradient Inspiration & Editors",
    desc: "Handpicked linear and radial gradients, custom editors, and CSS transition builders."
  },
  "color-picker": {
    title: "Color Pickers & Samplers",
    desc: "Browser extensions, color pipettes, and eyedropper utilities to capture colors from any screen."
  },
  "color-converter": {
    title: "Color Converters & Formatters",
    desc: "Translation utilities to convert color units between HEX, RGB, HSL, LCH, and OKLCH."
  },
  "color-contrast-checker": {
    title: "Color Contrast & Accessibility Checkers",
    desc: "Accessibility tests and contrast ratios built to check if your colors satisfy WCAG compliance standards."
  },
  "color-books": {
    title: "Color Books & Literature",
    desc: "Essential books, literature, and documentation to study color physics and psychology."
  }
};

let htmlContent = `
  <p style="font-size: 1.05rem; margin-bottom: 25px; line-height: 1.85;">
    Mastering color theory and contrast is one of the most important aspects of visual UI design. Having cohesive palette builders, color converters, and contrast checkers in your toolkit can elevate the look and accessibility of your layouts.
  </p>
  <p style="font-size: 1.05rem; margin-bottom: 35px; line-height: 1.85;">
    Here is a curated directory of the best <strong>101 color tools</strong>. Use these resources to generate palettes, find gradient schemes, convert formats, and ensure accessibility standards.
  </p>
`;

for (const [key, catInfo] of Object.entries(categories)) {
  const catItems = toolsData[key];
  if (!catItems || catItems.length === 0) continue;
  
  htmlContent += `
    <h2 style="font-size: 1.55rem; border-bottom: 1.5px solid var(--border); padding-bottom: 8px; margin-top: 48px; margin-bottom: 12px; font-weight: 700;">${catInfo.title}</h2>
    <p style="font-size: 0.95rem; color: var(--text-3); margin-bottom: 24px; line-height: 1.6;">${catInfo.desc}</p>
    
    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; margin-bottom: 32px;">
  `;
  
  catItems.forEach(item => {
    let badgeColor = "#FF6F2C"; // fallback orange
    let bgOpacity = "rgba(255, 111, 44, 0.1)";
    if (item.price.toLowerCase() === "free") {
      badgeColor = "#10B981"; // green
      bgOpacity = "rgba(16, 185, 129, 0.1)";
    } else if (item.price.toLowerCase().includes("paid")) {
      badgeColor = "#3B82F6"; // blue
      bgOpacity = "rgba(59, 130, 246, 0.1)";
    } else if (item.price.toLowerCase().includes("attribution")) {
      badgeColor = "#F59E0B"; // yellow
      bgOpacity = "rgba(245, 158, 11, 0.1)";
    } else if (item.price.toLowerCase().includes("freemium") || item.price.toLowerCase().includes("beta") || item.price.toLowerCase().includes("trial")) {
      badgeColor = "#8B5CF6"; // purple
      bgOpacity = "rgba(139, 92, 246, 0.1)";
    }

    htmlContent += `
      <div style="background: var(--bg-2); border: 1px solid var(--border); padding: 18px; border-radius: 12px; display: flex; flex-direction: column; justify-content: space-between; transition: transform 0.2s, border-color 0.2s; box-shadow: 0 2px 8px rgba(0,0,0,0.02);">
        <div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
            <div style="margin: 0; font-size: 1.05rem; font-weight: 700; color: var(--text);">${item.title}</div>
            <span style="font-size: 10px; font-weight: 700; color: #FFFFFF; background: ${badgeColor}; padding: 3px 10px; border-radius: 99px; text-transform: uppercase; letter-spacing: 0.03em;">${item.price}</span>
          </div>
          <p style="font-size: 0.9rem; color: var(--text-2); margin-top: 0; margin-bottom: 16px; line-height: 1.6;">${item.desc}</p>
        </div>
        <div>
          <a href="${item.link}" target="_blank" style="display: inline-block; color: #FFFFFF; background-color: #FF6F2C; padding: 7px 16px; border-radius: var(--radius-sm); font-weight: 700; text-decoration: none; font-size: 0.8rem; transition: background 0.2s; box-shadow: 0 2px 4px rgba(255, 111, 44, 0.2); letter-spacing: 0.2px;">Explore ${item.title}</a>
        </div>
      </div>
    `;
  });
  
  htmlContent += `</div>`;
}

ARTICLE_REGISTRY["best-color-inspiration-tools"] = {
  id: "best-color-inspiration-tools",
  subcategoryId: ["color-palettes", "color-theory"],
  categoryId: ["tools", "ui-design"],
  title: "Best Color Inspiration & Palette Tools",
  description: "Curated catalog of 101 color tools covering palette generators, contrast accessibility tests, conversion platforms, and gradients.",
  date: "2026-06-17",
  thumbnail: "", // empty to use document fallback icon
  youtubeUrl: "", // no video
  tags: ["ui design", "color theory", "palettes", "contrast", "gradients", "resources"],
  content: htmlContent
};
})();
