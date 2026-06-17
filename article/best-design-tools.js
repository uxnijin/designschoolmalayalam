(() => {
// ============================================================
//  ARTICLE: Best Design Tools Across Disciplines | TOOOLS.design
// ============================================================

const toolsData = {
  "design-prototyping": [
    {
      "title": "Figma",
      "link": "https://www.figma.com",
      "desc": "Powerful cloud based design tool to design, prototype and collaborate.",
      "price": "Freemium"
    },
    {
      "title": "Framer Design",
      "link": "https://framer.link/design_via_toools",
      "desc": "A free design tool that brings your ideas to the web.",
      "price": "Free"
    },
    {
      "title": "Sketch",
      "link": "https://www.sketch.com/",
      "desc": "All the tools you need for a truly collaborative design process.",
      "price": "Paid"
    },
    {
      "title": "Paper",
      "link": "https://paper.design/",
      "desc": "Connects your teams, agents, code, and data on a design canvas built on web standards.",
      "price": "Freemium"
    },
    {
      "title": "Penpot",
      "link": "https://penpot.app/",
      "desc": "Open Source design and prototyping tool for Product teams.",
      "price": "Free"
    },
    {
      "title": "Play",
      "link": "https://www.createwithplay.com/",
      "desc": "Native iOS design tool built for creating mobile products.",
      "price": "Free"
    },
    {
      "title": "Uizard",
      "link": "https://uizard.io",
      "desc": "An easy-to-use design and ideation tool - powered by AI.",
      "price": "Freemium"
    },
    {
      "title": "Visily",
      "link": "https://www.visily.ai/",
      "desc": "AI-powered design software for non-designers.",
      "price": "Freemium"
    },
    {
      "title": "Moio",
      "link": "https://moioapp.com/",
      "desc": "Create fully interactive prototypes without coding.",
      "price": "Beta"
    },
    {
      "title": "Mockplus",
      "link": "https://www.mockplus.com/mockplus-rp",
      "desc": "An online collaborative design tool ideal for quickly creating realistic, high-fidelity prototypes and animations.",
      "price": "Freemium"
    },
    {
      "title": "Lunacy",
      "link": "https://icons8.com/lunacy",
      "desc": "Free design software that keeps your flow with AI tools and built-in graphics.",
      "price": "Free"
    },
    {
      "title": "Efecto",
      "link": "https://efecto.app/",
      "desc": "AI-native design tool where humans and agents design together in real time.",
      "price": "Free"
    },
    {
      "title": "Modulz",
      "link": "https://www.modulz.app/",
      "desc": "Design in the target medium. Prototype with real components. Handoff production code.",
      "price": "Beta"
    },
    {
      "title": "Vecti",
      "link": "https://vecti.com/",
      "desc": "Collaborative browser-based UX design tool for teams.",
      "price": "Freemium"
    },
    {
      "title": "OpenPencil",
      "link": "https://openpencil.dev/",
      "desc": "Open-source, AI-native design editor and Figma alternative.",
      "price": "Free"
    },
    {
      "title": "Pixso",
      "link": "https://pixso.net/",
      "desc": "One-stop tool to prototype, design, program and deliver.",
      "price": "Freemium"
    },
    {
      "title": "TUI Studio",
      "link": "https://tui.studio/",
      "desc": "Visual editor for designing terminal user interfaces.",
      "price": "Beta"
    }
  ],
  "design-system-styleguide-tools": [
    {
      "title": "Storybook",
      "link": "https://storybook.js.org/",
      "desc": "Open source tool for developing UI components in isolation.",
      "price": "Free"
    },
    {
      "title": "Zeroheight",
      "link": "https://zeroheight.com/",
      "desc": "Document, deliver, measure, and manage your design system all in one place.",
      "price": "Freemium"
    },
    {
      "title": "Tokens Studio",
      "link": "https://tokens.studio/studio",
      "desc": "A completely new way to manage your design system.",
      "price": "Free + Paid"
    },
    {
      "title": "Design Systems for Figma",
      "link": "https://www.designsystemsforfigma.com/",
      "desc": "Collection of open source design systems.",
      "price": "Free"
    },
    {
      "title": "Design System Concierge",
      "link": "https://www.kickstartds.com/concierge/",
      "desc": "Ask anything about design systems and get pointed the right way.",
      "price": "Free"
    },
    {
      "title": "Supernova",
      "link": "https://www.supernova.io/",
      "desc": "Design system platform straight from the future.",
      "price": "Freemium"
    },
    {
      "title": "Componly",
      "link": "https://componly.co/",
      "desc": "Track our design system adopion.",
      "price": "Paid"
    },
    {
      "title": "Design Systems Surf",
      "link": "https://designsystems.surf/",
      "desc": "Best-in-class Design Systems with components and foundations references.",
      "price": "Free"
    },
    {
      "title": "Huevy",
      "link": "https://www.huevy.app/",
      "desc": "Instant colors, typescale, and spacing.",
      "price": "Free + Paid"
    },
    {
      "title": "Adele",
      "link": "https://adele.uxpin.com/",
      "desc": "Public design systems and pattern libraries repository.",
      "price": "Free"
    },
    {
      "title": "Superposition",
      "link": "https://superposition.design/",
      "desc": "Extract design tokens from websites and use them in code and in your design tool.",
      "price": "Free"
    },
    {
      "title": "Scales",
      "link": "https://jeromantik.de/scales",
      "desc": "A design tokens starter set.",
      "price": "Free"
    },
    {
      "title": "story.to.design",
      "link": "https://story.to.design/",
      "desc": "Generate and sync a full Figma library from Storybook.",
      "price": "Paid"
    },
    {
      "title": "Dembrandt",
      "link": "https://www.dembrandt.com/",
      "desc": "Open-source tool that extracts design tokens from any website.",
      "price": "Free"
    },
    {
      "title": "Uiverse Design",
      "link": "https://uiverse.io/design/",
      "desc": "Portable design systems your AI coding agent can build from.",
      "price": "Free + Paid"
    }
  ],
  "brand-platforms": [
    {
      "title": "Frontify",
      "link": "https://www.frontify.com",
      "desc": "A platform that connects everything important to the growth of your brand.",
      "price": "Freemium"
    },
    {
      "title": "Brandpad",
      "link": "https://brandpad.io/",
      "desc": "Brand platform to standardize brand deliveries.",
      "price": "Freemium"
    },
    {
      "title": "Corebook",
      "link": "https://www.corebook.io/",
      "desc": "An online brand guidelines platform for branding teams.",
      "price": "Paid"
    },
    {
      "title": "Bynder",
      "link": "https://www.bynder.com",
      "desc": "Enterprise digital asset management platform for brands.",
      "price": "Paid"
    },
    {
      "title": "Standards",
      "link": "https://standards.site/",
      "desc": "An advanced tool to design and publish brand guidelines.",
      "price": "Freemium"
    },
    {
      "title": "Brandy",
      "link": "https://brandyhq.com/",
      "desc": "AI digital brand guidelines platform.",
      "price": "Freemium"
    },
    {
      "title": "Niice",
      "link": "https://niice.co/",
      "desc": "Bring your guidelines, libraries, projects and people together in one brand hub.",
      "price": "Paid"
    },
    {
      "title": "Lingo",
      "link": "https://www.lingoapp.com/",
      "desc": "Digital asset management built for brand growth.",
      "price": "Free Trial"
    },
    {
      "title": "Brandfolder",
      "link": "https://brandfolder.com/",
      "desc": "Digital asset management platform for marketers and creatives.",
      "price": "Paid"
    },
    {
      "title": "Ethos",
      "link": "https://www.yourethos.io/",
      "desc": "Build, share, and grow your iconic brand with an AI-powered creative brand showroom.",
      "price": "Paid"
    },
    {
      "title": "brand.ai",
      "link": "https://brand.ai/",
      "desc": "A brand OS powered by AI for brand builders, agencies, and the Fortune 500.",
      "price": "Beta"
    },
    {
      "title": "Sesame",
      "link": "https://sesame.design/",
      "desc": "A creative tool purpose-built for brand expression.",
      "price": "Beta"
    },
    {
      "title": "Akrivi Guideit",
      "link": "https://www.akrivi.io/guideit",
      "desc": "Brand guidelines generator for Adobe Illustrator.",
      "price": "Free Trial"
    },
    {
      "title": "Bravemark",
      "link": "https://www.bravemark.co/",
      "desc": "No-code builder for responsive online brand guidelines.",
      "price": "Freemium"
    }
  ],
  "vector-tools": [
    {
      "title": "Adobe Illustrator",
      "link": "https://www.adobe.com/products/illustrator.html",
      "desc": "The state of the art of illustration.",
      "price": "Paid"
    },
    {
      "title": "Affinity Vector",
      "link": "https://www.affinity.studio/graphic-design-software",
      "desc": "Advanced graphic design software that's free to use.",
      "price": "Free"
    },
    {
      "title": "Inkscape",
      "link": "https://inkscape.org/",
      "desc": "A Free and open source vector graphics editor.",
      "price": "Free"
    },
    {
      "title": "Linearity Curve",
      "link": "https://www.linearity.io/curve/",
      "desc": "Fast and intuitive vector design for bold, precise creativity.",
      "price": "Freemium"
    },
    {
      "title": "Corel Draw",
      "link": "https://www.coreldraw.com/",
      "desc": "Graphic design software for hobbyists and aspiring pros.",
      "price": "Free Trial"
    },
    {
      "title": "Vectormaker",
      "link": "https://vectormaker.co/",
      "desc": "Convert images into colored SVG vector files.",
      "price": "Free"
    },
    {
      "title": "Amadine",
      "link": "https://amadine.com/",
      "desc": "Vector graphics software for Mac, iPad and iPhone.",
      "price": "Free Trial"
    },
    {
      "title": "Vectr",
      "link": "https://vectr.com/",
      "desc": "AI vector graphics editor.",
      "price": "Freemium"
    },
    {
      "title": "Grafeum",
      "link": "https://grafeum.com/",
      "desc": "Color automation tool that recolors Lottie and SVG assets to match any brand palette.",
      "price": "Freemium"
    },
    {
      "title": "Graphite",
      "link": "https://graphite.art/",
      "desc": "Free, open source vector graphics editor with a node-based procedural workflow.",
      "price": "Free"
    },
    {
      "title": "Figma Draw",
      "link": "https://www.figma.com/draw/",
      "desc": "Vector editing and illustration tool built into Figma Design.",
      "price": "Freemium"
    }
  ],
  "photo-image-editing": [
    {
      "title": "Adobe Photoshop",
      "link": "https://www.adobe.com/products/photoshop.html",
      "desc": "The ultimate image editing and design app.",
      "price": "Free Trial"
    },
    {
      "title": "Gimp",
      "link": "https://www.gimp.org/",
      "desc": "A free image editor for photo retouching, image composition and image authoring.",
      "price": "Free"
    },
    {
      "title": "Procreate",
      "link": "https://procreate.com/procreate",
      "desc": "Sketch. Paint. Create. On iPad.",
      "price": "Paid"
    },
    {
      "title": "Photomator",
      "link": "https://www.pixelmator.com/photomator/",
      "desc": "A powerful yet easy-to-use photo editor for Mac, iPhone, and iPad.",
      "price": "Free + Paid"
    },
    {
      "title": "Corel PHOTO-PAINT",
      "link": "https://www.coreldraw.com/en/pages/photo-paint/",
      "desc": "Professional photo editing at your fingertips.",
      "price": "Free Trial"
    },
    {
      "title": "ClipDrop",
      "link": "https://clipdrop.co/",
      "desc": "Create stunning visuals in seconds.",
      "price": "Freemium"
    },
    {
      "title": "Aiarty",
      "link": "https://www.aiarty.com/",
      "desc": "Image enhancement software powered by AI.",
      "price": "Paid"
    },
    {
      "title": "Affinity Photo Editing",
      "link": "https://www.affinity.studio/photo-editing-software",
      "desc": "Advanced photo editing tools.",
      "price": "Free"
    },
    {
      "title": "Erase.bg",
      "link": "https://www.erase.bg/",
      "desc": "Remove background from images and download high-resolution images for free.",
      "price": "Free"
    },
    {
      "title": "Magic Eraser",
      "link": "https://www.magiceraser.io/",
      "desc": "Remove unwanted things from images in seconds.",
      "price": "Free"
    },
    {
      "title": "Depix",
      "link": "https://depix.ai/",
      "desc": "An AI-powered online image editing platform.",
      "price": "Freemium"
    },
    {
      "title": "Watermark Remover",
      "link": "https://www.watermarkremover.io/",
      "desc": "Remove watermarks from your images for free.",
      "price": "Free"
    },
    {
      "title": "GoProd",
      "link": "https://icons8.com/goprod",
      "desc": "Remove backgrounds and upscale images with a no-brainer desktop app.",
      "price": "Paid"
    },
    {
      "title": "MiNi PhotoEditor",
      "link": "https://mini2-photo-editor.netlify.app/",
      "desc": "Online webgl photo editor with effects, filters and cropping.",
      "price": "Free"
    },
    {
      "title": "Grainrad",
      "link": "https://grainrad.com/",
      "desc": "Free WebGPU-powered ASCII, dithering, and retro visual effects tool.",
      "price": "Free"
    },
    {
      "title": "Feather",
      "link": "https://www.feather-editor.it/",
      "desc": "A photo editor where the AI runs entirely on your device.",
      "price": "Free + Paid"
    },
    {
      "title": "Airbrush Studio",
      "link": "https://airbrush.com/airbrush-studio",
      "desc": "An AI desktop photo editor for portrait retouching and batch edits.",
      "price": "Freemium"
    }
  ],
  "desktop-publishing": [
    {
      "title": "Adobe InDesign",
      "link": "https://www.adobe.com/products/indesign.html",
      "desc": "The next page in layout design.",
      "price": "Free Trial"
    },
    {
      "title": "QuarkXPress",
      "link": "https://www.quark.com/products/quarkxpress",
      "desc": "Desktop publishing and page layout software.",
      "price": "Free Trial"
    },
    {
      "title": "Affinity Page Layout",
      "link": "https://www.affinity.studio/page-layout-software",
      "desc": "Create complex docs, all in one seamless space.",
      "price": "Free"
    },
    {
      "title": "Scribus",
      "link": "https://wiki.scribus.net/canvas/Scribus",
      "desc": "An open source DTP (Desktop Publishing) application for Linux.",
      "price": "Free"
    },
    {
      "title": "Swift Publisher",
      "link": "https://www.swiftpublisher.com/",
      "desc": "Page layout and desktop publishing app for Mac.",
      "price": "Free Trial"
    },
    {
      "title": "Joomag",
      "link": "https://www.joomag.com/",
      "desc": "Digital publishing and content experience platform.",
      "price": "Paid"
    }
  ],
  "motion-animation-tools": [
    {
      "title": "After Effects",
      "link": "https://www.adobe.com/products/aftereffects.html",
      "desc": "The industry-standard motion graphics and visual effects software.",
      "price": "Paid"
    },
    {
      "title": "Cavalry",
      "link": "https://cavalry.scenegroup.co/",
      "desc": "Powerful 2D animation software for Mac and Windows.",
      "price": "Freemium"
    },
    {
      "title": "Rive",
      "link": "https://rive.app/",
      "desc": "Create and ship beautiful animations to any platform collaboratively.",
      "price": "Freemium"
    },
    {
      "title": "LottieFiles",
      "link": "https://lottiefiles.com/",
      "desc": "Create, manage and implement lightweight animations across websites and apps.",
      "price": "Free"
    },
    {
      "title": "Jitter",
      "link": "https://jitter.video/",
      "desc": "A design tool for motion.",
      "price": "Freemium"
    },
    {
      "title": "Procreate Dreams",
      "link": "https://procreate.com/dreams",
      "desc": "An all-new animation app packed with powerful tools that anyone can use.",
      "price": "Paid"
    },
    {
      "title": "Haiku Animator",
      "link": "https://www.haikuanimator.com/",
      "desc": "Create engaging animations for any app or website.",
      "price": "Freemium"
    },
    {
      "title": "Linearity Move",
      "link": "https://www.linearity.io/move/",
      "desc": "Fast and intuitive motion design for dynamic, effortless animation.",
      "price": "Freemium"
    },
    {
      "title": "Flow",
      "link": "https://createwithflow.com/",
      "desc": "UX animation for designers. Animate Figma, Sketch or SVGs.",
      "price": "Paid"
    },
    {
      "title": "SVGator",
      "link": "https://www.svgator.com/",
      "desc": "SVG Animation Creator.",
      "price": "Freemium"
    },
    {
      "title": "Figma To Video",
      "link": "https://figma.video/",
      "desc": "Animate Figma designs and convert it to MP4 video.",
      "price": "Free"
    },
    {
      "title": "Easings",
      "link": "https://easings.net/",
      "desc": "Quick overview of all kinds of different easing functions easily visualized.",
      "price": "Free"
    },
    {
      "title": "Spirit",
      "link": "https://spiritapp.io",
      "desc": "Create high-quality animations directly in the browser.",
      "price": "Paid"
    },
    {
      "title": "Float",
      "link": "https://galshir.com/float",
      "desc": "Animate layers and present your art in a whole new dimension.",
      "price": "Paid"
    },
    {
      "title": "Moko",
      "link": "https://moko-app.com/",
      "desc": "Studio-grade animations that help you get attention.",
      "price": "Freemium"
    },
    {
      "title": "LottieLab",
      "link": "https://www.lottielab.com/",
      "desc": "The motion design tool for product teams.",
      "price": "Freemium"
    },
    {
      "title": "Artboard Studio",
      "link": "https://artboard.studio/",
      "desc": "Design and animate like never before.",
      "price": "Freemium"
    },
    {
      "title": "Motionity",
      "link": "https://www.motionity.app/",
      "desc": "Web-based motion graphics editor for everyone.",
      "price": "Free"
    },
    {
      "title": "Easing Wizard",
      "link": "https://easingwizard.com/",
      "desc": "CSS easing functions made easy.",
      "price": "Free"
    },
    {
      "title": "Motion",
      "link": "https://motion.dev/",
      "desc": "A production-grade animation library for the web.",
      "price": "Free + Paid"
    },
    {
      "title": "Polygonjs",
      "link": "https://polygonjs.com/",
      "desc": "Node-based design and animation tool for the web.",
      "price": "Freemium"
    },
    {
      "title": "Animejs",
      "link": "https://animejs.com/",
      "desc": "A fast and versatile JavaScript library to animate HTML.",
      "price": "Free"
    },
    {
      "title": "FrameZero",
      "link": "https://www.framezero.app/",
      "desc": "Create motion in minutes. All in your browser, no sign-up.",
      "price": "Beta"
    },
    {
      "title": "Hana",
      "link": "https://blog.spline.design/introducing-hana",
      "desc": "A new canvas for interactive design.",
      "price": "Freemium"
    },
    {
      "title": "Stroke",
      "link": "https://stroke.abhii.space/",
      "desc": "Hand-drawn SVG animations for logos and illustrations.",
      "price": "Free"
    },
    {
      "title": "Blockies Animate",
      "link": "https://animate.blockiesui.com/",
      "desc": "Drop-in animations for modern devs.",
      "price": "Paid"
    },
    {
      "title": "FliiipBook",
      "link": "https://www.fliiipbook.com/",
      "desc": "A simple gif animation app for the web.",
      "price": "Free"
    },
    {
      "title": "Unicorn Studio",
      "link": "https://www.unicorn.studio/",
      "desc": "Create interactive WebGL effects and motion for websites without code.",
      "price": "Freemium"
    },
    {
      "title": "Autograph",
      "link": "https://www.autograph.video",
      "desc": "Free 2D and 3D motion design and compositing tool for animations and VFX.",
      "price": "Free Trial"
    }
  ],
  "video-tools": [
    {
      "title": "Adobe Premiere Pro",
      "link": "https://www.adobe.com/products/premiere.html",
      "desc": "Leading video editing software for creating incredible videos fast.",
      "price": "Paid"
    },
    {
      "title": "DaVinci Resolve",
      "link": "https://www.blackmagicdesign.com/products/davinciresolve",
      "desc": "Professional video editing, color, effects and audio post production.",
      "price": "Free + Paid"
    },
    {
      "title": "Final Cut Pro",
      "link": "https://www.apple.com/final-cut-pro/",
      "desc": "Professional post-production and video editing.",
      "price": "Paid"
    },
    {
      "title": "Frame.io",
      "link": "https://frame.io/",
      "desc": "A centralized platform for all your video production files, feedback, and people.",
      "price": "Freemium"
    },
    {
      "title": "CapCut",
      "link": "https://www.capcut.com/tools/desktop-video-editor",
      "desc": "Experience the future of video editing with massive AI features.",
      "price": "Free + Paid"
    },
    {
      "title": "Shutter Encoder",
      "link": "https://www.shutterencoder.com/",
      "desc": "A free video converter and encoder with batch processing, built on FFmpeg.",
      "price": "Free"
    },
    {
      "title": "VEGAS Pro",
      "link": "https://www.vegascreativesoftware.com/",
      "desc": "Video editing software for social content, ads or feature films.",
      "price": "Free Trial"
    },
    {
      "title": "HandBrake",
      "link": "https://handbrake.fr/",
      "desc": "An open-source tool for converting video to a selection of modern, widely supported codecs.",
      "price": "Free"
    },
    {
      "title": "InShot",
      "link": "https://inshot.com/",
      "desc": "Powerful all-in-one video editor with professional features.",
      "price": "Free + Paid"
    },
    {
      "title": "Lightworks",
      "link": "https://lwks.com/",
      "desc": "From first edit to hollywood pro.",
      "price": "Freemium"
    },
    {
      "title": "Screen Studio",
      "link": "https://screenstudio.lemonsqueezy.com?aff=kzPjR",
      "desc": "A professional screen recorder for macOS.",
      "price": "Paid"
    },
    {
      "title": "iMovie",
      "link": "https://apps.apple.com/at/app/imovie/id377298193",
      "desc": "Turn videos into movie magic.",
      "price": "Free"
    },
    {
      "title": "Kdenlive",
      "link": "https://kdenlive.org/",
      "desc": "Free and open source video editor.",
      "price": "Free"
    },
    {
      "title": "Nuke",
      "link": "https://www.foundry.com/products/nuke-family/nuke",
      "desc": "A node-based VFX and film editing sotware.",
      "price": "Free Trial"
    },
    {
      "title": "OpenShot",
      "link": "https://www.openshot.org/",
      "desc": "Free and open-source video editor.",
      "price": "Free"
    },
    {
      "title": "Vyond",
      "link": "https://vyond.grsm.io/toools",
      "desc": "Create engaging videos without the long lead times, expense or even \u201cproducing\u201d.",
      "price": "Paid"
    },
    {
      "title": "Peech",
      "link": "https://www.peech-ai.com/",
      "desc": "Automatically transcribe, edit, repurpose, and brand your video content.",
      "price": "Paid"
    },
    {
      "title": "Motionbox",
      "link": "https://motionbox.io/",
      "desc": "Simple collaborative video editing for creatives.",
      "price": "Freemium"
    },
    {
      "title": "Vokal",
      "link": "https://vokal.co/",
      "desc": "Simple video creator for podcasts, radio, and music.",
      "price": "Freemium"
    },
    {
      "title": "Wideframe",
      "link": "https://try.wideframe.com/",
      "desc": "AI coworker for video editors that automates footage prep work.",
      "price": "Free Trial"
    }
  ],
  "3d-design": [
    {
      "title": "Cinema 4D",
      "link": "https://www.maxon.net/cinema-4d",
      "desc": "A professional 3D animation, modeling, simulation and rendering software solution.",
      "price": "Free Trial"
    },
    {
      "title": "Blender",
      "link": "https://www.blender.org/",
      "desc": "Free and open 3D creation software.",
      "price": "Free"
    },
    {
      "title": "Spline",
      "link": "https://spline.design/",
      "desc": "A place to design and collaborate in 3D.",
      "price": "Freemium"
    },
    {
      "title": "Womp",
      "link": "https://www.womp.com/",
      "desc": "Easiest, goopiest 3D software of your dreams.",
      "price": "Freemium"
    },
    {
      "title": "Vectary",
      "link": "https://www.vectary.com/",
      "desc": "No-code, high-quality, real-time 3D experiences for the web.",
      "price": "Freemium"
    },
    {
      "title": "Virtuall",
      "link": "https://virtuall.pro/",
      "desc": "Your 3D team\u2019s AI-powered creative OS.",
      "price": "Freemium"
    },
    {
      "title": "Endless Tools",
      "link": "https://endlesstools.io",
      "desc": "An easy to use online tool for creating visual photo effects and 3D Designs.",
      "price": "Freemium"
    },
    {
      "title": "Houdini",
      "link": "https://www.sidefx.com/products/houdini/",
      "desc": "3D content creation tools for artists creating film, TV, gamedev and more.",
      "price": "Free Trial"
    },
    {
      "title": "Autodesk 3ds Max",
      "link": "https://www.dpbolvw.net/click-101193407-12161257",
      "desc": "3D modeling and animation software to create immersive worlds and high-quality designs.",
      "price": "Free Trial"
    },
    {
      "title": "Unreal Engine",
      "link": "https://www.unrealengine.com/",
      "desc": "A powerful real-time 3D creation tool.",
      "price": "Freemium"
    },
    {
      "title": "Animate Anything",
      "link": "https://app.anything.world/animation-rigging",
      "desc": "Let AI rig & animate your 3D models in moments.",
      "price": "Freemium"
    },
    {
      "title": "Redshift",
      "link": "https://www.maxon.net/en/redshift",
      "desc": "A powerful 3D rendering software.",
      "price": "Free Trial"
    },
    {
      "title": "Bezi",
      "link": "https://www.bezi.com/",
      "desc": "Design 3D apps and games faster than ever together.",
      "price": "Freemium"
    },
    {
      "title": "OctaneRender",
      "link": "https://home.otoy.com/render/octane-render/",
      "desc": "The world\u2019s first and fastest unbiased, spectrally correct GPU render engine.",
      "price": "Free Trial"
    },
    {
      "title": "Beautiful Things",
      "link": "https://www.beautifulthings.xyz/",
      "desc": "Large collection of 3D objects for Apple Vision Pro.",
      "price": "Free + Paid"
    },
    {
      "title": "Greyscalegorilla",
      "link": "https://greyscalegorilla.com",
      "desc": "Premium plugins, materials, and HDRIs.",
      "price": "Free Trial"
    },
    {
      "title": "Morflax Studio",
      "link": "https://morflax.com/studio",
      "desc": "Browser-based 3D mockup and motion graphics platform with 200+ elements.",
      "price": "Freemium"
    },
    {
      "title": "Autodesk Fusion",
      "link": "https://www.jdoqocy.com/click-101193407-15204139",
      "desc": "A cloud-based 3D modeling, CAD, CAM, CAE, PCB, and data mangement software platform.",
      "price": "Free Trial"
    },
    {
      "title": "Formia",
      "link": "https://www.formia.so/",
      "desc": "Convert 2D vector graphics to 3D in seconds.",
      "price": "Free + Paid"
    },
    {
      "title": "Vecto3d",
      "link": "https://www.vecto3d.xyz/",
      "desc": "Transform your vectors in a new dimension.",
      "price": "Free"
    },
    {
      "title": "ReactVision Studio",
      "link": "https://reactvision.xyz/studio",
      "desc": "Visual scene editor for designing and shipping AR and VR apps without code.",
      "price": "Beta"
    },
    {
      "title": "RadianceKit",
      "link": "https://www.radiancekit.de",
      "desc": "Native Mac app that turns photos into 3D Gaussian splats.",
      "price": "Free Trial"
    }
  ],
  "architecture-interior-design": [
    {
      "title": "SketchUp",
      "link": "https://sketchup.trimble.com/",
      "desc": "Turn creative ideas into buildable 3D models with intuitive, professional-grade design software.",
      "price": "Paid"
    },
    {
      "title": "AutoCAD",
      "link": "https://www.jdoqocy.com/click-101193407-13365389",
      "desc": "Design and drafting software trusted by millions.",
      "price": "Free Trial"
    },
    {
      "title": "Arcol",
      "link": "https://arcol.io/",
      "desc": "A design and documentation tool that helps AEC teams create better buildings, faster.",
      "price": "Freemium"
    },
    {
      "title": "Chili3D",
      "link": "https://chili3d.com/",
      "desc": "Web-based 3D CAD application.",
      "price": "Free"
    },
    {
      "title": "Rendera AI",
      "link": "https://www.rendera.ai/",
      "desc": "Redesign interiors with AI, in seconds.",
      "price": "Free Trial"
    },
    {
      "title": "Live Home 3D",
      "link": "https://www.livehome3d.com/",
      "desc": "Home and interior design software for all your devices.",
      "price": "Free Trial"
    },
    {
      "title": "ArchRender",
      "link": "https://www.archrender.ai/",
      "desc": "Photorealistic AI rendering for architects and designers.",
      "price": "Paid"
    },
    {
      "title": "Decofy",
      "link": "https://www.decofy.ai/",
      "desc": "World first shoppable AI home design planner.",
      "price": "Free + Paid"
    }
  ],
  "presentation-tools": [
    {
      "title": "Pitch",
      "link": "https://pitch.com/",
      "desc": "Uncompromisingly good presentation software. Purpose-built for teams.",
      "price": "Freemium"
    },
    {
      "title": "Figma Slides",
      "link": "https://www.figma.com/slides/",
      "desc": "Presentation tool built for designers and their teams.",
      "price": "Freemium"
    },
    {
      "title": "Gamma",
      "link": "https://try.gamma.app/via-toools",
      "desc": "Effortless AI design for presentations, websites, and more.",
      "price": "Freemium"
    },
    {
      "title": "Chronicle",
      "link": "https://chr.so/toools",
      "desc": "A modern format of storytelling.",
      "price": "Freemium"
    },
    {
      "title": "Ludos",
      "link": "https://ludus.one/",
      "desc": "Collaborative presentations for creative teams.",
      "price": "Paid"
    },
    {
      "title": "Journey",
      "link": "https://www.journey.io/",
      "desc": "A presentation tool that people love to receive.",
      "price": "Freemium"
    },
    {
      "title": "Overflow Stories",
      "link": "https://overflow.io/stories/",
      "desc": "A presentation tool to create interactive, self-guided tours of your designs.",
      "price": "Paid"
    },
    {
      "title": "iA Presenter",
      "link": "https://ia.net/presenter",
      "desc": "Text-based interface that puts the story at the center of your presentation.",
      "price": "Free Trial"
    },
    {
      "title": "GlimmerAI",
      "link": "https://glimmerai.tech/",
      "desc": "AI-powered presentation magic.",
      "price": "Beta"
    },
    {
      "title": "PageOn",
      "link": "https://www.pageon.ai/",
      "desc": "An AI native visual communication tool.",
      "price": "Freemium"
    },
    {
      "title": "Presenton",
      "link": "https://presenton.ai/",
      "desc": "Open-source AI presentation generator.",
      "price": "Freemium"
    },
    {
      "title": "Bento|Craft",
      "link": "https://thatvirtualboy.com/bentocraft",
      "desc": "Make Apple style bento graphics, exclusively for iPad and Apple Vision Pro.",
      "price": "Free + Paid"
    },
    {
      "title": "Pi - Presentation Intelligence",
      "link": "https://www.pi.inc/",
      "desc": "AI-powered presentation generator.",
      "price": "Freemium"
    },
    {
      "title": "FlashDocs",
      "link": "https://www.flashdocs.com/",
      "desc": "Generate and manage dynamic PowerPoints and Google Slides with an API.",
      "price": "Paid"
    },
    {
      "title": "Arcade",
      "link": "https://www.arcade.software/",
      "desc": "Build AI-powered interactive demos in minutes.",
      "price": "Freemium"
    },
    {
      "title": "Ghost",
      "link": "https://www.useghost.io/",
      "desc": "An AI-native slide editor that helps you go from idea to deck in minutes.",
      "price": "Freemium"
    },
    {
      "title": "Visual",
      "link": "https://visual.app/",
      "desc": "Design agents for marketing teams.",
      "price": "Beta"
    },
    {
      "title": "VoxDeck",
      "link": "https://www.voxdeck.ai/",
      "desc": "Next-gen AI presentation maker, that lets you ditch generic slides.",
      "price": "Freemium"
    },
    {
      "title": "DeckSpeed",
      "link": "https://www.deckspeed.com/",
      "desc": "Create professional, personalized slides based on your conversations, without templates.",
      "price": "Free Trial"
    },
    {
      "title": "WorkPPT",
      "link": "https://ppt.softtooler.com/",
      "desc": "Generate AI presentations in seconds.",
      "price": "Paid"
    },
    {
      "title": "Animant",
      "link": "https://animant.co/",
      "desc": "A platform that uses AI to deliver immersive 3D presentations.",
      "price": "Freemium"
    },
    {
      "title": "Dokie",
      "link": "https://dokie.ai/",
      "desc": "AI presentation maker that generates polished slides fast.",
      "price": "Freemium"
    },
    {
      "title": "Maglr",
      "link": "https://www.maglr.com/",
      "desc": "A no-code design platform to create interactive stories, reports, presentations, and more.",
      "price": "Paid"
    }
  ],
  "design-hand-off-measuring-tools": [
    {
      "title": "Zeplin",
      "link": "https://zeplin.io/",
      "desc": "Share, organize and collaborate on designs \u2013 built with developers in mind.",
      "price": "Freemium"
    },
    {
      "title": "DesignQA",
      "link": "https://designqa.com/",
      "desc": "Fix UI bugs with AI in seconds. No dev handoff required.",
      "price": "Freemium"
    },
    {
      "title": "Handoff Helpers",
      "link": "https://www.figma.com/community/file/1266273609100229437/Handoff-Helpers-2.0",
      "desc": "Free Figma component library to help communicate more effectively.",
      "price": "Free"
    },
    {
      "title": "PixelSnap 2",
      "link": "https://getpixelsnap.com/",
      "desc": "The fastest tool for measuring anything on your screen.",
      "price": "Paid"
    }
  ],
  "version-control": [
    {
      "title": "Bindr",
      "link": "https://bindr.cc/",
      "desc": "Github for designers.",
      "price": "Beta"
    },
    {
      "title": "Brief",
      "link": "https://usebrief.com/",
      "desc": "End version chaos for the files that matter most.",
      "price": "Free Trial"
    },
    {
      "title": "Kactus",
      "link": "https://kactus.io/",
      "desc": "Git based design version control without changing your tools.",
      "price": "Freemium"
    },
    {
      "title": "Specify",
      "link": "https://specifyapp.com/",
      "desc": "Sync your Figma files with GitHub repositories in minutes.",
      "price": "Paid"
    }
  ],
  "image-optimization-tools": [
    {
      "title": "Image Optim",
      "link": "https://imageoptim.com/",
      "desc": "A free app that makes images load faster and take less disk space, without sacrificing quality.",
      "price": "Free"
    },
    {
      "title": "Tiny PNG",
      "link": "https://tinypng.com/",
      "desc": "Compress WebP, PNG and JPEG images intelligently.",
      "price": "Freemium"
    },
    {
      "title": "Optimole",
      "link": "https://optimole.com/",
      "desc": "Optimal image: storage, compression, delivery.",
      "price": "Paid"
    },
    {
      "title": "OptimizeImages",
      "link": "https://www.optimizeimages.com/",
      "desc": "Convert & compress images up to 90%, webp & AVIF supported.",
      "price": "Freemium"
    },
    {
      "title": "Image Compressor",
      "link": "https://imagecompressor.com/",
      "desc": "Free browser-based tool to compress JPEG, PNG, WebP, GIF, and SVG images.",
      "price": "Free"
    },
    {
      "title": "Upscale.media",
      "link": "https://www.upscale.media/",
      "desc": "Free AI tool to increase image resolution up to 4x.",
      "price": "Free"
    },
    {
      "title": "Smart Upscaler",
      "link": "https://icons8.com/upscaler",
      "desc": "Enhance image resolution automatically with AI.",
      "price": "Free"
    },
    {
      "title": "Palette",
      "link": "https://palette.fm/",
      "desc": "A vibrant AI colorizer app. Think instagram filters, but more intelligent.",
      "price": "Free"
    },
    {
      "title": "JPEG Compress",
      "link": "https://jpegcompress.com/",
      "desc": "Resize and optimize the images including GIFs, JPEG, PNG, JPG, SVG, and WEBP.",
      "price": "Free"
    },
    {
      "title": "SlimImg",
      "link": "https://slimimg.tools/",
      "desc": "Compress JPG, PNG and WebP images locally in your browser.",
      "price": "Free"
    },
    {
      "title": "SupaRes",
      "link": "https://supares.com/",
      "desc": "A blazingly fast engine for automatic AI image enhancement.",
      "price": "Freemium"
    },
    {
      "title": "Pixotter",
      "link": "https://pixotter.com",
      "desc": "Free in-browser image compressor, resizer, and converter.",
      "price": "Freemium"
    }
  ],
  "generative-experimental": [
    {
      "title": "Space Type Generator",
      "link": "https://spacetypegenerator.com/",
      "desc": "A browser-based tool for creating kinetic and generative typography.",
      "price": "Free"
    },
    {
      "title": "Antlii",
      "link": "https://antlii.work/",
      "desc": "A collection of web-based generative art and design tools.",
      "price": "Free"
    },
    {
      "title": "DIA Tools",
      "link": "https://tools.dia.tv/",
      "desc": "Interactive generative design tools by DIA Studio.",
      "price": "Free"
    },
    {
      "title": "Afterimage Tools",
      "link": "https://afterimage.cc/tools/",
      "desc": "Browser-based tools for drawing with gradients and marbling effects.",
      "price": "Free"
    },
    {
      "title": "Halftone Generator",
      "link": "https://www.toolandtea.com/tools/halftone-generator",
      "desc": "A browser-based tool for generating halftone patterns from images.",
      "price": "Free"
    },
    {
      "title": "Typeflow",
      "link": "https://typeflow.tools/",
      "desc": "A free tool for creating typographic animations in the browser.",
      "price": "Free"
    },
    {
      "title": "Synthymental",
      "link": "https://synthymental.com/",
      "desc": "A collection of creative coding tools for motion and visual experiments.",
      "price": "Free"
    },
    {
      "title": "Constraint Systems",
      "link": "https://constraint.systems/",
      "desc": "Experimental browser-based tools for editing images and text.",
      "price": "Free"
    },
    {
      "title": "Bubbleshift",
      "link": "https://bubbleshift.xyz/",
      "desc": "A kinetic typography tool with liquid bubble distortion effects.",
      "price": "Free"
    },
    {
      "title": "Topograph",
      "link": "https://topograph.app/",
      "desc": "Design tool for generating topographic maps and contour art from elevation data.",
      "price": "Paid"
    },
    {
      "title": "DASCA",
      "link": "https://dasca.studio/",
      "desc": "Lightweight desktop app for real-time visual effects on images, video, and 3D.",
      "price": "Paid"
    },
    {
      "title": "Bitgrain",
      "link": "https://bitgrain.diptanshumahish.in/",
      "desc": "Browser tool to dither, texture, and stylize images and posters.",
      "price": "Freemium"
    },
    {
      "title": "Letterbox",
      "link": "https://www.letterbox.sh/",
      "desc": "A typography experiment that builds letters out of smaller letters.",
      "price": "Free"
    },
    {
      "title": "Shaders",
      "link": "https://shaders.com/",
      "desc": "Component library for creative WebGPU effects in the browser.",
      "price": "Freemium"
    }
  ],
  "useful-design-helper": [
    {
      "title": "Shortcuts.design",
      "link": "https://shortcuts.design/",
      "desc": "Every shortcut for designers, centralized and searchable.",
      "price": "Free"
    },
    {
      "title": "SVG Gobbler",
      "link": "https://www.svggobbler.com/",
      "desc": "A browser extension that finds vector content to download.",
      "price": "Free"
    },
    {
      "title": "Paper Sizes",
      "link": "https://papersizes.io/",
      "desc": "A comprehensive resource listing all paper sizes, dimensions and formats.",
      "price": "Free"
    },
    {
      "title": "SketchKeys",
      "link": "https://sketchkeys.com/",
      "desc": "Accelerate your workflow with beautiful keyboard stickers.",
      "price": "Paid"
    },
    {
      "title": "Omatsuri",
      "link": "https://omatsuri.app/",
      "desc": "Open source browser tools for everyday use.",
      "price": "Free"
    },
    {
      "title": "Screen Sizes",
      "link": "https://www.screensizes.app/",
      "desc": "A complete guide for Apple displays.",
      "price": "Free"
    },
    {
      "title": "Design Sidekick",
      "link": "https://designsidekick.io/",
      "desc": "Discover, save, and copy colors, fonts, and styles used on any web page.",
      "price": "Free"
    },
    {
      "title": "UI Skeleton Gallery",
      "link": "https://www.brandbird.app/tools/ui-skeleton-gallery?via=pascal",
      "desc": "A free customizable collection of SVG skeleton loader UI elements.",
      "price": "Free"
    },
    {
      "title": "GuideGuide",
      "link": "https://guideguide.me/",
      "desc": "Powerful grids and guides in your favorite design tools.",
      "price": "Paid"
    },
    {
      "title": "Jony Eye",
      "link": "https://www.figma.com/community/plugin/1279068498175312295/jony-eye-figma-design-assistant",
      "desc": "A Figma plugin helping to make your designs flawless and eye-catching.",
      "price": "Free"
    },
    {
      "title": "Bueno",
      "link": "https://www.bueno.art/",
      "desc": "No-Code Tools for NFT Creators.",
      "price": "Paid"
    },
    {
      "title": "tldraw",
      "link": "https://www.tldraw.com/",
      "desc": "A tiny little drawing app.",
      "price": "Free"
    },
    {
      "title": "Shaper",
      "link": "https://shaper.design/",
      "desc": "A generative UI design tool to explore numerous design variations.",
      "price": "Free"
    },
    {
      "title": "Proportio",
      "link": "https://proportio.app/",
      "desc": "Create proportional scales for fonts, icons, spacing, and components.",
      "price": "Free"
    },
    {
      "title": "Design Buddy",
      "link": "https://designbuddy.net/",
      "desc": "Ensure your designs are polished and stakeholder-ready every time.",
      "price": "Paid"
    },
    {
      "title": "SVGViewer",
      "link": "https://www.svgviewer.dev/",
      "desc": "An online tool to view, edit and optimize SVGs.",
      "price": "Free"
    },
    {
      "title": "Cursor",
      "link": "https://cursor.design/",
      "desc": "Copy macOS cursors with ease.",
      "price": "Free"
    },
    {
      "title": "Token Master",
      "link": "https://www.token-master.com/",
      "desc": "Design token manager to edit styles and quickly create new color modes.",
      "price": "Free"
    },
    {
      "title": "True Size",
      "link": "https://www.truesize.io/",
      "desc": "Discover the true size of digital and printable mediums.",
      "price": "Free"
    },
    {
      "title": "World in Dots",
      "link": "https://www.worldindots.com/",
      "desc": "Create vector dotted maps with custom options and download them as SVG or PNG files.",
      "price": "Free"
    },
    {
      "title": "MiroMiro",
      "link": "https://miromiro.app/",
      "desc": "Inspect websites and export design assets to code instantly.",
      "price": "Freemium"
    },
    {
      "title": "MiroMiro",
      "link": "https://miromiro.app/",
      "desc": "Chrome extension to edit and copy design tokens from any website.",
      "price": "Free Trial"
    },
    {
      "title": "uicorn",
      "link": "https://uicorn.com",
      "desc": "Free CSS, color, and typography tools for designers.",
      "price": "Free"
    },
    {
      "title": "Lumen Tool",
      "link": "https://lumentool.com",
      "desc": "Browser-based portrait lighting simulator for photographers.",
      "price": "Free"
    },
    {
      "title": "How These Design Tools Are Curated",
      "link": "/productivity-tools-for-design-and-poduct-teams",
      "desc": "",
      "price": "Free"
    }
  ]
};

const categories = {
  "design-prototyping": {
    title: "Design & Prototyping",
    desc: "Powerful cloud-based and desktop platforms built to design, prototype, and collaborate on user interfaces."
  },
  "design-system-styleguide-tools": {
    title: "Design System & Styleguides",
    desc: "Tools to compile component code documentation, maintain design tokens, and sync visual assets with product codebases."
  },
  "brand-platforms": {
    title: "Brand Management",
    desc: "Digital hubs to centralize brand style guides, marketing assets, logo formats, and design standards."
  },
  "vector-tools": {
    title: "Vector Design & Illustration",
    desc: "Professional drawing, sketching, and procedural vector editing software for illustrators and graphic artists."
  },
  "photo-image-editing": {
    title: "Photo & Image Editing",
    desc: "Image manipulation, background removal, photo retouching, and painting tools powered by GPU rendering and AI."
  },
  "desktop-publishing": {
    title: "Desktop Publishing (DTP)",
    desc: "Page layout and publishing software for typesetting magazines, multi-page print collateral, and books."
  },
  "motion-animation-tools": {
    title: "Motion & Animation",
    desc: "2D physics animators, Lottie exporters, SVG transition builders, and interactive web timeline tools."
  },
  "video-tools": {
    title: "Video Editing & Production",
    desc: "Non-linear video editors, screen recording tools, transcoding utilities, and visual review workflow platforms."
  },
  "3d-design": {
    title: "3D Design & Modeling",
    desc: "Modeling, rendering, lighting, and simulation suites to create photorealistic 3D assets and animated sequences."
  },
  "architecture-interior-design": {
    title: "Architecture & Interior Design",
    desc: "CAD systems, spatial planners, and interior design visualizers for engineering and blueprints."
  },
  "presentation-tools": {
    title: "Presentation & Slide Decks",
    desc: "Interactive deck builders, narrative tools, and template suites to convey business ideas visually."
  },
  "design-hand-off-measuring-tools": {
    title: "Design Handoff",
    desc: "Specifications, asset inspectors, and measuring systems to translate design mockups into code."
  },
  "version-control": {
    title: "Version Control",
    desc: "File history tracking and branching tools for designers to collaborate without losing assets."
  },
  "image-optimization-tools": {
    title: "Image Optimization",
    desc: "Web image compressions, SVG minifiers, and file format optimization utilities to speed up page loads."
  },
  "generative-experimental": {
    title: "Generative & Experimental Design",
    desc: "Procedural layout systems, creative generative code, and artistic design templates."
  },
  "useful-design-helper": {
    title: "Useful Helpers & Utilities",
    desc: "Color color-pickers, screen capture extensions, asset finders, and other mini utility tools."
  }
};

let htmlContent = `
  <p style="font-size: 1.05rem; margin-bottom: 25px; line-height: 1.85;">
    Selecting the right tool for the job can dramatically accelerate a designer's workflow. Whether you are building complex UI screens, animating interactive vectors, managing design systems, or typesetting layouts, there is a specialized platform built for your exact needs.
  </p>
  <p style="font-size: 1.05rem; margin-bottom: 35px; line-height: 1.85;">
    Here is a curated directory of the best <strong>241 design tools</strong> across disciplines covering visual design, prototyping, brand platforms, motion, publishing, and code handoff.
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

ARTICLE_REGISTRY["best-design-tools"] = {
  id: "best-design-tools",
  subcategoryId: ["design-utilities", "basics"],
  categoryId: ["tools", "ui-design"],
  title: "Best Design Tools Across Disciplines",
  description: "Curated catalog of 241 design tools covering prototyping, brand management, vector graphics, motion animation, DTP, presentation, and image scaling.",
  date: "2026-06-17",
  thumbnail: "", // empty to use document fallback icon
  youtubeUrl: "", // no video
  tags: ["ui design", "design tools", "prototyping", "figma", "vector", "motion", "resources"],
  content: htmlContent
};
})();
