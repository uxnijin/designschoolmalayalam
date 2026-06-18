(() => {
// ============================================================
//  ARTICLE: Best Free & Open Source Icon Libraries | TOOOLS.design
// ============================================================

const iconLibraries = [
  {
    title: "Material Symbols",
    link: "https://fonts.google.com/icons",
    desc: "Over 2,500 glyphs in a single font file with a wide range of design variants.",
    price: "Free",
    cat: "free"
  },
  {
    title: "Heroicons",
    link: "https://heroicons.com/",
    desc: "Beautiful hand-crafted SVG icons.",
    price: "Free",
    cat: "free"
  },
  {
    title: "Lucide",
    link: "https://lucide.dev/",
    desc: "Beautiful & consistent icon toolkit made by the community.",
    price: "Free",
    cat: "free"
  },
  {
    title: "Bootstrap Icons",
    link: "https://icons.getbootstrap.com/",
    desc: "Free, high quality, open source icon library.",
    price: "Free",
    cat: "free"
  },
  {
    title: "Eva Icons",
    link: "https://akveo.github.io/eva-icons",
    desc: "A pack of more than 480 beautifully crafted Open Source icons.",
    price: "Free",
    cat: "free"
  },
  {
    title: "Tabler Icons",
    link: "https://tabler-icons.io/",
    desc: "Over 3,450 pixel-perfect icons for your web designs.",
    price: "Free",
    cat: "free"
  },
  {
    title: "Phosphor Icons",
    link: "https://phosphoricons.com/",
    desc: "A flexible icon family for everyone with multiple stroke weights.",
    price: "Free",
    cat: "free"
  },
  {
    title: "Iconsvg",
    link: "https://iconsvg.xyz",
    desc: "Tool to simplify the process of finding and generating common icons for your project.",
    price: "Free",
    cat: "free"
  },
  {
    title: "Iconmonstr",
    link: "https://iconmonstr.com/",
    desc: "Free, monstrously big and continuously growing source of simple icons run by one creator.",
    price: "Free",
    cat: "free"
  },
  {
    title: "Basicons",
    link: "https://basicons.xyz/",
    desc: "Basic icons for product design & development.",
    price: "Free",
    cat: "free"
  },
  {
    title: "SVG Repo",
    link: "https://www.svgrepo.com/",
    desc: "Browse 300,000+ SVG vectors and icons free for commercial use.",
    price: "Free",
    cat: "free"
  },
  {
    title: "Pixelarticons",
    link: "https://pixelarticons.com",
    desc: "Pixel-art style icons, in one color and made with a 24px grid. Pro version with 1,422 icons!",
    price: "Free + Paid",
    cat: "free"
  },
  {
    title: "Majesticons",
    link: "https://www.majesticons.com",
    desc: "3,200+ Majestic line vector icons. Beautiful by default but easy to customize.",
    price: "Free + Paid",
    cat: "free"
  },
  {
    title: "Gradientify",
    link: "https://www.iconshock.com/svg-icons/",
    desc: "Free interactive SVG icon pack specially made for gradient lovers.",
    price: "With attribution",
    cat: "free"
  },
  {
    title: "Forge Icons",
    link: "https://icons.theforgesmith.com/",
    desc: "300+ right mix of SVG icons for your project.",
    price: "Free",
    cat: "free"
  },
  {
    title: "Line Awesome",
    link: "https://icons8.com/line-awesome",
    desc: "Swap Font Awesome for modern line icons in one line of code.",
    price: "Free",
    cat: "free"
  },
  {
    title: "Ionicons",
    link: "https://ionicons.com/",
    desc: "Beautifully crafted open source icons.",
    price: "Free",
    cat: "free"
  },
  {
    title: "CSS Icons",
    link: "https://css.gg/app",
    desc: "700+ CSS icons available in SVG Sprite, styled-components, NPM & API.",
    price: "Free",
    cat: "free"
  },
  {
    title: "Glyph Neue",
    link: "https://icons8.com/l/glyph/",
    desc: "1,500+ icons, available in SVG and PNG. Free for a link.",
    price: "With attribution",
    cat: "free"
  },
  {
    "title": "Streamline Freebies",
    "link": "https://streamlinehq.com/freebies",
    "desc": "5,600 Free for a link vector icons, illustrations, and emojis.",
    "price": "With attribution",
    cat: "free"
  },
  {
    "title": "Remix Icon",
    "link": "https://remixicon.com/",
    "desc": "Set of open-source neutral-style system symbols.",
    "price": "Free",
    cat: "free"
  },
  {
    "title": "Iconhub",
    "link": "https://iconhub.io/",
    "desc": "Practical stunning icons for everyone.",
    "price": "Free",
    cat: "free"
  },
  {
    "title": "Coolicons",
    "link": "https://coolicons.cool/",
    "desc": "Carefully designed icons for your next project.",
    "price": "Free + Paid",
    cat: "free"
  },
  {
    "title": "IconPark",
    "link": "http://iconpark.bytedance.com/official",
    "desc": "More than 1,200 high-quality customizable SVG icons.",
    "price": "Free",
    cat: "free"
  },
  {
    "title": "Vzy Icons",
    "link": "https://icons.vzy.co/",
    "desc": "SVG icons customizable in outline and solid styles.",
    "price": "Free + Paid",
    cat: "free"
  },
  {
    "title": "Flagpack",
    "link": "https://www.flagpack.xyz/",
    "desc": "Stunning flag icons for your digital product.",
    "price": "Free",
    cat: "free"
  },
  {
    "title": "Akar Icons",
    "link": "https://akaricons.com/",
    "desc": "Perfectly rounded icon library made for designers and developers.",
    "price": "Free",
    cat: "free"
  },
  {
    "title": "Supercons",
    "link": "https://supercons.vercel.app/",
    "desc": "A friendly, open source React iconset.",
    "price": "Free",
    cat: "free"
  },
  {
    "title": "Experience Japan",
    "link": "https://experience-japan.info/",
    "desc": "A novel set of visual symbols developed to enhance tourism experience in Japan.",
    "price": "Free",
    cat: "free"
  },
  {
    "title": "Feather",
    "link": "https://feathericons.com/",
    "desc": "Simply beautiful open source icons.",
    "price": "Free",
    cat: "free"
  },
  {
    "title": "Iconoir",
    "link": "https://iconoir.com/",
    "desc": "An open source icon library.",
    "price": "Free",
    cat: "free"
  },
  {
    "title": "Doodlicons",
    "link": "https://rahulbhadoriya.notion.site/Doodlicons-519314a92ed3474093a10e44946bbb72",
    "desc": "Carelessly designed doodle icons for your next project's wireframe.",
    "price": "Free",
    cat: "free"
  },
  {
    "title": "Unicode Arrows",
    "link": "https://unicodearrows.com/",
    "desc": "The best part of the unicode spec.",
    "price": "Free",
    cat: "free"
  },
  {
    "title": "Openmoji",
    "link": "https://openmoji.org/",
    "desc": "Open source emojis for designers, developers and everyone else.",
    "price": "Free",
    cat: "free"
  },
  {
    "title": "Doodle Icons",
    "link": "https://khushmeen.com/icons.html",
    "desc": "400+ handcrafted icons free for your next project.",
    "price": "Free",
    cat: "free"
  },
  {
    "title": "Circum",
    "link": "https://circumicons.com/icons",
    "desc": "A carefully curated collection of open-source icons.",
    "price": "Free + Paid",
    cat: "free"
  },
  {
    "title": "Humbleicons",
    "link": "https://humbleicons.com/",
    "desc": "A pack of simple, neutral, carefully crafted icons for free.",
    "price": "Free",
    cat: "free"
  },
  {
    "title": "MingCute Icons",
    "link": "https://www.mingcute.com/",
    "desc": "A set of simple and exquisite open-source icons.",
    "price": "Free",
    cat: "free"
  },
  {
    "title": "Icons.download",
    "link": "https://icons.download/",
    "desc": "Open-source vector icons in 16 styles for any project.",
    "price": "Free",
    cat: "free"
  },
  {
    "title": "Sargam Icons",
    "link": "https://sargamicons.com/",
    "desc": "A collection of open-source icons devoted to match your exquisite designs.",
    "price": "Free",
    cat: "free"
  },
  {
    "title": "Isocons",
    "link": "https://www.isocons.app/",
    "desc": "Carefully crafted isometric icons.",
    "price": "Free",
    cat: "free"
  },
  {
    "title": "Futicons",
    "link": "https://futicons.com/",
    "desc": "Icons for the future.",
    "price": "Free",
    cat: "free"
  },
  {
    "title": "Flowbite Icons",
    "link": "https://flowbite.com/icons/",
    "desc": "A collection of free and open-source SVG icons.",
    "price": "Free",
    cat: "free"
  },
  {
    "title": "Mage Icons",
    "link": "https://mageicons.com/",
    "desc": "A finely constructed open source icon system for web, desktop and apps.",
    "price": "Free",
    cat: "free"
  },
  {
    "title": "Glow UI Icons",
    "link": "https://www.glowui.com/icons",
    "desc": "Open source icons in 2 styles, made for interfaces.",
    "price": "Free",
    cat: "free"
  },
  {
    "title": "Smallbits",
    "link": "https://smallbits.design/",
    "desc": "Pack of 200+ pixelated icons designed on a tight 8 by 8 grid.",
    "price": "Free",
    cat: "free"
  },
  {
    "title": "theSVG",
    "link": "https://thesvg.org/",
    "desc": "Open source library of thousands of brand SVG icons for designers and developers.",
    "price": "Free",
    cat: "free"
  },
  // Pro Section
  {
    title: "Streamline Icons",
    link: "https://go.streamlinehq.com/tooolsdesignicons",
    desc: "All the icons you need, in every style you love. The world's largest UI set.",
    price: "Free + Paid",
    cat: "pro"
  },
  {
    title: "UICONS",
    link: "https://www.uicons.com/",
    desc: "Beautiful icons for the era of high-resolution UI.",
    price: "Free + Paid",
    cat: "pro"
  },
  {
    title: "Iconic",
    link: "https://iconic.lemonsqueezy.com/?aff=kzPjR",
    desc: "Free \"do wtf you want with\" pixel-perfect icons.",
    price: "Free + Paid",
    cat: "pro"
  },
  {
    title: "The Icon Of",
    link: "https://www.theiconof.com/",
    desc: "Over 1000+ pixel perfect icons in 21 categories.",
    price: "Free + Paid",
    cat: "pro"
  },
  {
    title: "Freepik Icons",
    link: "https://www.freepik.com/icons",
    desc: "Find matching icons quickly. Choose from solid, linear, and multi-color styles.",
    price: "Free + Paid",
    cat: "pro"
  },
  {
    title: "Boxicons",
    link: "https://boxicons.com/",
    desc: "Simply beautiful icons carefully crafted for designers and developers.",
    price: "Free + Paid",
    cat: "pro"
  },
  {
    title: "Iconsax",
    link: "https://iconsax.io/",
    desc: "An intuitive and effective icon library with 6 unique styles.",
    price: "Free + Paid",
    cat: "pro"
  },
  {
    title: "Pikaicons",
    link: "https://pikaicons.com/",
    desc: "A growing collection of charming icons, designed to stand out.",
    price: "Free + Paid",
    cat: "pro"
  },
  {
    title: "Griddy Icons",
    link: "https://griddyicons.com/",
    desc: "Free open-source icon family with a utilitarian vibe.",
    price: "Free + Paid",
    cat: "pro"
  },
  {
    "title": "Font Awesome",
    "link": "https://fontawesome.com/",
    "desc": "Extensive icon set insertable as a font into your designs or website.",
    "price": "Free + Paid",
    cat: "pro"
  },
  {
    "title": "Icons8",
    "link": "https://icons8.com/icons/",
    "desc": "Large icon packs of over 10k icons, so you can find consistent sets.",
    "price": "Free + Paid",
    cat: "pro"
  },
  {
    "title": "Noun Project",
    "link": "https://thenounproject.com/",
    "desc": "A highly diverse and extensive icon collection uploaded by creators worldwide.",
    "price": "Free + Paid",
    cat: "pro"
  },
  {
    "title": "Iconscout Icons",
    "link": "https://iconscout.com/icons",
    "desc": "Discover consistent icon packs for every industry.",
    "price": "Free + Paid",
    cat: "pro"
  },
  {
    "title": "Flaticon",
    "link": "https://www.flaticon.com/",
    "desc": "Over 2 million vector icons grouped in thousands of themed packs.",
    "price": "With attribution",
    cat: "pro"
  },
  {
    "title": "Nucleo",
    "link": "https://nucleoapp.com/",
    "desc": "30k icons for UIs, presentations, and print projects.",
    "price": "Paid",
    cat: "pro"
  },
  {
    "title": "Lineicons",
    "link": "https://lineicons.com/",
    "desc": "Handcrafted SVG icons tailored for designers and developers.",
    "price": "Free + Paid",
    cat: "pro"
  },
  {
    "title": "Iconshock",
    "link": "https://www.iconshock.com/",
    "desc": "Over 2 million icons in 400+ icon sets with over 30 styles.",
    "price": "Free + Paid",
    cat: "pro"
  },
  {
    "title": "Round Icons",
    "link": "https://roundicons.com",
    "desc": "45,000 icons – The world's biggest icon bundle.",
    "price": "Paid",
    cat: "pro"
  },
  // Animated
  {
    "title": "useAnimations",
    "link": "https://useanimations.com/",
    "desc": "Lottie-based animated icons, ready to drop into any app or website.",
    "price": "Free",
    cat: "animated"
  },
  {
    "title": "Loaf",
    "link": "https://getloaf.io/",
    "desc": "Free, simple animated SVG Icon editor.",
    "price": "Free + Paid",
    cat: "animated"
  },
  {
    "title": "Lordicon",
    "link": "https://lordicon.com/",
    "desc": "A growing library full of carefully crafted static and animated icons.",
    "price": "Free + Paid",
    cat: "animated"
  },
  {
    "title": "Unicorn Icons",
    "link": "https://unicornicons.com/",
    "desc": "Animated lottie icons for your next project.",
    "price": "With attribution",
    cat: "animated"
  },
  {
    "title": "Lottieflow",
    "link": "https://www.lottieflow.com/",
    "desc": "Downloadable Lottie files that work like magic in web applications.",
    "price": "Free",
    cat: "animated"
  },
  // Generators
  {
    "title": "IcoMoon",
    "link": "https://icomoon.io/app/",
    "desc": "Free and easy going icon font generator.",
    "price": "Free",
    cat: "generators"
  },
  {
    "title": "Webfont",
    "link": "https://webfontapp.com/",
    "desc": "Mac app to create and manage custom icon fonts.",
    "price": "Free + Paid",
    cat: "generators"
  },
  // Organizers
  {
    "title": "IconJar",
    "link": "https://geticonjar.com/",
    "desc": "Store all your icons in one place, just a click away.",
    "price": "Paid",
    cat: "organizers"
  },
  {
    "title": "SF Symbols",
    "link": "https://developer.apple.com/sf-symbols/",
    "desc": "Apple's system font of icons offering over 1,500 symbols optimized for iOS and Mac OS.",
    "price": "Free",
    cat: "organizers"
  },
  {
    "title": "Icônes",
    "link": "https://icones.js.org/",
    "desc": "Icon explorer with instant searching, powered by Iconify.",
    "price": "Free",
    cat: "organizers"
  },
  {
    "title": "Iconset",
    "link": "https://iconset.io/",
    "desc": "Organize SVG icons in one place.",
    "price": "Free",
    cat: "organizers"
  },
  {
    "title": "Iconscout Desktop App",
    "link": "https://iconscout.com/download",
    "desc": "Access over 2.2 million+ icons from your desktop toolbar.",
    "price": "Free + Paid",
    cat: "organizers"
  },
  {
    "title": "Icon Shelf",
    "link": "https://icon-shelf.github.io/",
    "desc": "All your icons in one place, easily copyable as code.",
    "price": "Free",
    cat: "organizers"
  },
  {
    "title": "Pichon",
    "link": "https://icons8.com/app/macos-pichon",
    "desc": "Best design graphics at your fingertips, just drag and drop.",
    "price": "Free + Paid",
    cat: "organizers"
  },
  {
    "title": "Iconbuddy",
    "link": "https://iconbuddy.app/",
    "desc": "Download, customize, and edit over 100k+ open source icons.",
    "price": "Free",
    cat: "organizers"
  }
];

const categories = {
  free: {
    title: "Free & Open Source Icons",
    desc: "Clean, pixel-perfect icon sets that are completely free to use in personal and commercial projects."
  },
  pro: {
    title: "Premium & Pro Icons",
    desc: "Professional icon systems designed to scale, offering massive libraries, cohesive families, and commercial support."
  },
  animated: {
    title: "Animated Icons",
    desc: "Bring life and delight to your user interfaces with ready-to-use Lottie and SVG animated icon packs."
  },
  generators: {
    title: "Icon Font Generators",
    desc: "Optimize site performance by packaging only the custom icons you need into high-performance web fonts."
  },
  organizers: {
    title: "Icon Explorers & Organizers",
    desc: "Desktop apps and custom search engines built to organize your SVG files and streamline your asset management."
  }
};

// Programmatically generate beautiful resource lists
let htmlContent = `
  <p style="font-size: 1.05rem; margin-bottom: 25px; line-height: 1.85;">
    Finding the perfect icon set can make or break a digital interface. Having cohesive, pixel-perfect visual elements ensures your UI/UX designs feel refined, accessible, and premium.
  </p>
  <p style="font-size: 1.05rem; margin-bottom: 35px; line-height: 1.85;">
    Rather than jumping between websites, this catalog brings together the best <strong>81 icon libraries, applications, and generators</strong>. Discover everything you need to speed up your design and development workflow.
  </p>
`;

for (const [key, catInfo] of Object.entries(categories)) {
  const catItems = iconLibraries.filter(item => item.cat === key);
  
  htmlContent += `
    <h2 style="font-size: 1.55rem; border-bottom: 1.5px solid var(--border); padding-bottom: 8px; margin-top: 48px; margin-bottom: 12px; font-weight: 700;">${catInfo.title}</h2>
    <p style="font-size: 0.95rem; color: var(--text-3); margin-bottom: 24px; line-height: 1.6;">${catInfo.desc}</p>
    
    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; margin-bottom: 32px;">
  `;
  
  catItems.forEach(item => {
    // color badge based on pricing tag
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

ARTICLE_REGISTRY["free-open-source-icon-libraries"] = {
  id: "free-open-source-icon-libraries",
  subcategoryId: ["icons-illustrations", "web-ui", "figma-basics"],
  categoryId: ["tools", "ui-design", "figma"],
  title: "Best Free & Open Source Icon Libraries",
  description: "Curated collection of 81 icon libraries, systems, animated icons, custom font compilers, and explorers for designers.",
  date: "2026-06-17",
  thumbnail: "assets/thumbnails/free-open-source-icon-libraries.png", // empty to use default video placeholder
  youtubeUrl: "", // no video for this article
  tags: ["ui design", "icons", "web ui", "free", "resources", "tools"],
  content: htmlContent
};
})();
