(() => {
// ============================================================
//  ARTICLE: Best AI Design Tools | TOOOLS.design
// ============================================================

const toolsData = {
  "generative-ai": [
    {
      "title": "Midjourney",
      "link": "https://www.midjourney.com/explore",
      "desc": "AI-powered platform for creating stunning digital art.",
      "price": "Free + Paid"
    },
    {
      "title": "Adobe Firefly",
      "link": "https://firefly.adobe.com/",
      "desc": "A suite of generative AI models and tools by Adobe.",
      "price": "Free + Paid"
    },
    {
      "title": "Gemini (Nano Banana)",
      "link": "https://gemini.google/us/overview/image-generation/?hl=en",
      "desc": "Unlock multimodal creativity for the next generation of visual apps.",
      "price": "Free + Paid"
    },
    {
      "title": "DALL\u00b7E",
      "link": "https://openai.com/index/dall-e-3/",
      "desc": "Easily translate your ideas into exceptionally accurate images.",
      "price": "Free + Paid"
    },
    {
      "title": "Stability AI",
      "link": "https://stability.ai/",
      "desc": "Unlocking the power of open-source generative AI to expand human creativity.",
      "price": "Free Trial"
    },
    {
      "title": "Recraft",
      "link": "https://www.recraft.ai/",
      "desc": "Generate stunning vector art, illustrations and 3D images.",
      "price": "Freemium"
    },
    {
      "title": "Krea",
      "link": "https://www.krea.ai",
      "desc": "An easy way to generate images, video and sound with AI.",
      "price": "Freemium"
    },
    {
      "title": "ComfyUI",
      "link": "https://www.comfy.org/",
      "desc": "Powerful tool for generative AI, and it's open sourced.",
      "price": "Free"
    },
    {
      "title": "Leonardo",
      "link": "https://leonardo.ai/",
      "desc": "A unique suite of tools to leverage generative AI.",
      "price": "Free + Paid"
    },
    {
      "title": "Ideogram",
      "link": "https://ideogram.ai/",
      "desc": "Turn your ideas into creative graphic designs, in a matter of seconds.",
      "price": "Freemium"
    },
    {
      "title": "Topaz Labs",
      "link": "https://www.topazlabs.com/",
      "desc": "Professional-grade photo and video editing powered by AI.",
      "price": "Paid"
    },
    {
      "title": "Kittl",
      "link": "https://kittl.pxf.io/4GJg09",
      "desc": "AI design platform for graphics, vectors, and typography.",
      "price": "Freemium"
    },
    {
      "title": "Visual Electric",
      "link": "https://visualelectric.com/",
      "desc": "An image generator built for designers.",
      "price": "Freemium"
    },
    {
      "title": "Hedra",
      "link": "https://hedra.link/toools-design",
      "desc": "The visual creation platform for AI video, audio, and imagery.",
      "price": "Freemium"
    },
    {
      "title": "OpenArt",
      "link": "https://openart.ai/home/?via=toools",
      "desc": "Turns imagination into visual stories\u2014from idea to final frame.",
      "price": "Free Trial"
    },
    {
      "title": "Picsart",
      "link": "https://imp.i326929.net/c/3704448/841431/11703",
      "desc": "All-in-one creative platform with a wide selection of free AI design tools.",
      "price": "Freemium"
    },
    {
      "title": "Playground",
      "link": "https://playgroundai.com/",
      "desc": "Create and edit images like a pro with the help of AI.",
      "price": "Freemium"
    },
    {
      "title": "Luma Agents",
      "link": "https://lumalabs.ai/app",
      "desc": "AI creative agents for generating and refining images, video, and audio.",
      "price": "Freemium"
    },
    {
      "title": "Freepik",
      "link": "https://www.freepik.com/",
      "desc": "All-in-one AI creative suite.",
      "price": "Free + Paid"
    },
    {
      "title": "FLUX Playground",
      "link": "https://playground.bfl.ai/image/generate",
      "desc": "Try out the best FLUX models in your browser.",
      "price": "Free"
    },
    {
      "title": "Lexica",
      "link": "https://lexica.art/",
      "desc": "Turn your imagination into reality.",
      "price": "Paid"
    },
    {
      "title": "Reve",
      "link": "https://www.reve.com/",
      "desc": "Reimagine reality.",
      "price": "Freemium"
    },
    {
      "title": "Prompt Hunt",
      "link": "https://www.prompthunt.com/",
      "desc": "Create AI art in seconds using templates and a custom model.",
      "price": "Free + Paid"
    },
    {
      "title": "Modyfi",
      "link": "https://www.modyfi.com/",
      "desc": "AI design platform built for multidisciplinary designers.",
      "price": "Free + Paid"
    },
    {
      "title": "PromeAI",
      "link": "https://www.promeai.pro/",
      "desc": "The ultimate AI art generator.",
      "price": "Free + Paid"
    },
    {
      "title": "FLORA",
      "link": "https://www.florafauna.ai/",
      "desc": "An intelligent canvas for creative projects.",
      "price": "Freemium"
    },
    {
      "title": "Raphael AI",
      "link": "https://raphael.app/",
      "desc": "Create stunning AI-generated images in seconds.",
      "price": "Freemium"
    },
    {
      "title": "Dzine",
      "link": "https://www.dzine.ai/",
      "desc": "Controllable AI image editing and design tool.",
      "price": "Freemium"
    },
    {
      "title": "Idyllic",
      "link": "https://idyllic.app/",
      "desc": "Generative AI platform to transform your creative visions into stunning visuals.",
      "price": "Freemium"
    },
    {
      "title": "Playform",
      "link": "https://www.playform.io/",
      "desc": "The AI swiss army knife for professional artists.",
      "price": "Freemium"
    },
    {
      "title": "Tila",
      "link": "https://tila.ai/",
      "desc": "An infinite AI canvas.",
      "price": "Freemium"
    },
    {
      "title": "Mitte",
      "link": "https://mitte.ai/",
      "desc": "AI creative suite build for precision.",
      "price": "Freemium"
    },
    {
      "title": "PixelBin",
      "link": "https://www.pixelbin.io/",
      "desc": "AI photo editor.",
      "price": "Freemium"
    },
    {
      "title": "Kira",
      "link": "https://kira.art/",
      "desc": "AI Photo editor to design without distractions.",
      "price": "Free Trial"
    },
    {
      "title": "Weavy",
      "link": "https://www.weavy.ai/",
      "desc": "A new way to create with AI.",
      "price": "Freemium"
    },
    {
      "title": "Moda",
      "link": "https://moda.app/",
      "desc": "AI design tool that generates fully editable visual assets.",
      "price": "Freemium"
    },
    {
      "title": "Pixlio AI",
      "link": "https://pixlio.net/",
      "desc": "All-in-one AI image editor.",
      "price": "Paid"
    },
    {
      "title": "Veeso AI",
      "link": "https://veeso.ai/",
      "desc": "AI design tool that turns raw copy into production-ready visuals.",
      "price": "Freemium"
    },
    {
      "title": "Kodo",
      "link": "https://www.usekodo.ai/",
      "desc": "AI-powered design tool for creating posters, presentations and menus.",
      "price": "Free Trial"
    },
    {
      "title": "Floyo",
      "link": "https://www.floyo.ai/",
      "desc": "Discover and run ComfyUI workflows faster.",
      "price": "Freemium"
    },
    {
      "title": "Tinker",
      "link": "https://www.tinker.com/",
      "desc": "A free AI creative app for generating images, videos, 3D models, and more.",
      "price": "Free"
    },
    {
      "title": "WM Studio",
      "link": "https://wmstudio.io/",
      "desc": "AI creative studio for generating and editing images, videos and voiceovers.",
      "price": "Paid"
    }
  ],
  "ui-generation": [
    {
      "title": "Figma AI",
      "link": "https://www.figma.com/ai/",
      "desc": "Figma's built-in AI features for faster design workflows.",
      "price": "Freemium"
    },
    {
      "title": "Uizard Autodesigner",
      "link": "https://uizard.io/autodesigner/",
      "desc": "Generate multi screen mockups for apps and websites from simple text prompts.",
      "price": "Paid"
    },
    {
      "title": "Visily",
      "link": "https://www.visily.ai/ai-ui-design-generator/",
      "desc": "Generate UI designs for apps and websites.",
      "price": "Freemium"
    },
    {
      "title": "Magic Patterns",
      "link": "https://magicpatterns.com?via=toools",
      "desc": "The AI design tool for product teams.",
      "price": "Paid"
    },
    {
      "title": "Motiff",
      "link": "https://www.motiff.com/",
      "desc": "AI-powered professional UI design tool.",
      "price": "Free + Paid"
    },
    {
      "title": "Banani",
      "link": "https://getbanani.link/toools",
      "desc": "Design stunning UIs with AI.",
      "price": "Freemium"
    },
    {
      "title": "UX Pilot",
      "link": "https://uxpilot.ai/",
      "desc": "Generate UI designs, wireframes and flows in Figma or on the Web.",
      "price": "Free + Paid"
    },
    {
      "title": "Flowstep",
      "link": "https://link.flowstep.ai/toools",
      "desc": "Get real UI designs from simple text prompts.",
      "price": "Freemium"
    },
    {
      "title": "Komposo",
      "link": "https://komposo.ai/?ref=toools",
      "desc": "UI design tool built for the age of AI.",
      "price": "Freemium"
    },
    {
      "title": "Stitch 2.0",
      "link": "https://stitch.withgoogle.com/",
      "desc": "Google's AI-native canvas for creating UI designs from text prompts.",
      "price": "Beta"
    },
    {
      "title": "Prototyper",
      "link": "https://www.getaprototype.com/",
      "desc": "AI design engineer for product teams.",
      "price": "Paid"
    },
    {
      "title": "Claude Design",
      "link": "https://claude.ai/design",
      "desc": "Generate prototypes, slides, and mockups by chatting with Claude.",
      "price": "Beta"
    },
    {
      "title": "Figr",
      "link": "https://figr.design/",
      "desc": "Your best designer and product team - in one AI.",
      "price": "Freemium"
    },
    {
      "title": "Reweb",
      "link": "https://www.reweb.so/",
      "desc": "Generate, edit and explore designs with AI.",
      "price": "Freemium"
    },
    {
      "title": "MagicPath 2.0",
      "link": "https://www.magicpath.ai/",
      "desc": "AI design tool that turns prompts into editable app and website UI on a canvas.",
      "price": "Freemium"
    },
    {
      "title": "HeroUI",
      "link": "https://heroui.chat/",
      "desc": "Generate beautiful apps regardless of your design experience.",
      "price": "Freemium"
    },
    {
      "title": "Superdesign",
      "link": "https://app.superdesign.dev/",
      "desc": "Context-aware AI product designer.",
      "price": "Freemium"
    },
    {
      "title": "SiteForge",
      "link": "https://siteforge.io/",
      "desc": "AI wireframe generator.",
      "price": "Free + Paid"
    },
    {
      "title": "UXMagic",
      "link": "https://uxmagic.ai/?via=toools",
      "desc": "AI-powered wireframe and UI design generator with Figma export.",
      "price": "Free Trial"
    },
    {
      "title": "Wonder",
      "link": "https://wonder.design/",
      "desc": "AI design tool that generates production-ready code on canvas.",
      "price": "Freemium"
    },
    {
      "title": "Moonchild",
      "link": "https://moonchild.ai/",
      "desc": "AI chat tool for product designers to ideate and prototype.",
      "price": "Paid"
    },
    {
      "title": "AIDesigner",
      "link": "https://aidesigner.ai/?via=toools",
      "desc": "Generate beautiful UI designs from text prompts on an infinite canvas.",
      "price": "Freemium"
    },
    {
      "title": "Lunagraph",
      "link": "https://lunagraph.com/",
      "desc": "A design canvas that writes real code, powered by Claude Code.",
      "price": "Beta"
    },
    {
      "title": "Variant",
      "link": "https://variant.com/",
      "desc": "Generate endless UI design variations by scrolling, no prompting needed.",
      "price": "Freemium"
    }
  ],
  "vibe-coding": [
    {
      "title": "Figma Make",
      "link": "https://www.figma.com/community/make",
      "desc": "Build an app, test an interaction, or bring an idea to life with a simple prompt.",
      "price": "Freemium"
    },
    {
      "title": "Lovable",
      "link": "https://lovablelabs.pxf.io/4aoVMo",
      "desc": "Create apps and websites by chatting with AI.",
      "price": "Freemium"
    },
    {
      "title": "Bolt",
      "link": "https://bolt.new/",
      "desc": "Create stunning apps and websites by chatting with AI.",
      "price": "Freemium"
    },
    {
      "title": "v0",
      "link": "https://v0.app/",
      "desc": "Vercel's AI to build agents, apps, and websites from prompts.",
      "price": "Freemium"
    },
    {
      "title": "Replit",
      "link": "https://replit.com/",
      "desc": "Build apps and websites with AI.",
      "price": "Freemium"
    },
    {
      "title": "Cursor",
      "link": "https://cursor.com/",
      "desc": "AI-powered code editor built for extraordinary productivity.",
      "price": "Freemium"
    },
    {
      "title": "Base44",
      "link": "https://base44.pxf.io/c/3704448/3786433/25619?trafcat=competitors",
      "desc": "AI platform to build fully functional apps using natural language.",
      "price": "Freemium"
    },
    {
      "title": "Emergent",
      "link": "https://get.emergent.sh/via-toools",
      "desc": "Create production-ready applications from natural language, no developers required.",
      "price": "Freemium"
    },
    {
      "title": "Atoms",
      "link": "https://atoms.dev/?utm_source=affiliate&amp;via=toools",
      "desc": "AI no-code app builder powered by a multi-agent team.",
      "price": "Freemium"
    },
    {
      "title": "Dreamflow",
      "link": "https://dreamflow.app/",
      "desc": "Visual AI builder for production mobile apps.",
      "price": "Freemium"
    },
    {
      "title": "Blink",
      "link": "https://blink.new/?aff=toools",
      "desc": "Build websites, SaaS, and mobile apps in minutes by chatting with AI.",
      "price": "Freemium"
    },
    {
      "title": "Capacity",
      "link": "https://capacity.so/?via=toools",
      "desc": "Refine your idea, plan and build apps or websites with AI.",
      "price": "Paid"
    },
    {
      "title": "Wegic",
      "link": "https://wegic.ai/",
      "desc": "Just chat, and create custom websites in seconds.",
      "price": "Freemium"
    },
    {
      "title": "Anything",
      "link": "https://anything.link/toools",
      "desc": "Turn your words into mobile apps, sites, tools, and products.",
      "price": "Freemium"
    },
    {
      "title": "YouWare",
      "link": "https://www.youware.com/?via=toools",
      "desc": "Transform ideas into projects.",
      "price": "Freemium"
    },
    {
      "title": "Same",
      "link": "https://same.new/",
      "desc": "Design, build, and deploy beautiful fullstack web apps on autopilot.",
      "price": "Freemium"
    },
    {
      "title": "Taskade",
      "link": "https://www.taskade.com/",
      "desc": "Vibe code AI apps, deploy agents, and automate workflows from one prompt.",
      "price": "Freemium"
    },
    {
      "title": "Vybe",
      "link": "https://www.vybe.build/",
      "desc": "Build secure internal apps 10X faster with AI assistance.",
      "price": "Freemium"
    },
    {
      "title": "Embeddable",
      "link": "https://embeddable.co/",
      "desc": "Create stunning widgets and landing pages by chatting with AI.",
      "price": "Freemium"
    },
    {
      "title": "Trickle",
      "link": "https://trickle.so/",
      "desc": "Turn your ideas into live apps and websites with AI.",
      "price": "Freemium"
    },
    {
      "title": "Vibecode",
      "link": "https://www.vibecodeapp.com/",
      "desc": "Describe what you want to build and watch it come to life.",
      "price": "Freemium"
    },
    {
      "title": "Sketchflow",
      "link": "https://www.sketchflow.ai/",
      "desc": "AI web app generator with no code required.",
      "price": "Free Trial"
    },
    {
      "title": "VibeFlow",
      "link": "https://app.vibeflow.ai/",
      "desc": "Make full-stack web apps from prompts with visual workflows for the backend.",
      "price": "Free Trial"
    },
    {
      "title": "Mocha",
      "link": "https://getmocha.com/",
      "desc": "AI-powered no\u2011code app builder for entrepreneurs.",
      "price": "Freemium"
    },
    {
      "title": "Orchids",
      "link": "https://www.orchids.app/",
      "desc": "The AI Fullstack Engineer to build prototypes, apps, and websites.",
      "price": "Freemium"
    },
    {
      "title": "Solid",
      "link": "https://trysolid.com/",
      "desc": "Build real web apps with AI, not lovable toys.",
      "price": "Free Trial"
    },
    {
      "title": "Dyad",
      "link": "https://www.dyad.sh/",
      "desc": "Flexible, local, open-source AI app builder.",
      "price": "Free + Paid"
    },
    {
      "title": "Imagine",
      "link": "https://imagine.dev/",
      "desc": "AI coding tool that builds real apps with backend included.",
      "price": "Freemium"
    },
    {
      "title": "Floot",
      "link": "https://floot.com/",
      "desc": "The easiest way for entrepreneurs to build web apps.",
      "price": "Freemium"
    },
    {
      "title": "HeyBoss.AI",
      "link": "https://heyboss.ai/",
      "desc": "Build custom website in minutes with AI.",
      "price": "Freemium"
    },
    {
      "title": "Dualite",
      "link": "https://dualite.dev/",
      "desc": "Go from idea to live in minutes.",
      "price": "Freemium"
    },
    {
      "title": "Rocket",
      "link": "https://www.rocket.new/",
      "desc": "Think It. Type It. Launch It.",
      "price": "Freemium"
    },
    {
      "title": "Dazl",
      "link": "https://dazl.dev/",
      "desc": "Your next build generated by AI, driven by you.",
      "price": "Freemium"
    },
    {
      "title": "Modelence",
      "link": "https://modelence.com/",
      "desc": "Full-stack platform to build production-ready apps with built-in auth and database.",
      "price": "Freemium"
    },
    {
      "title": "Macaly",
      "link": "https://www.macaly.com/",
      "desc": "Describe your app. Macaly makes it real.",
      "price": "Freemium"
    },
    {
      "title": "typeui.sh",
      "link": "https://www.typeui.sh/",
      "desc": "A CLI coding tool that applies a consistent, beautiful design layer on top of AI-generated code.",
      "price": "Free + Paid"
    },
    {
      "title": "CreateOS",
      "link": "https://nodeops.network/createos",
      "desc": "Unified AI workspace to build, deploy, and monetize apps in one place.",
      "price": "Freemium"
    },
    {
      "title": "Astrio",
      "link": "https://www.astrio.app/",
      "desc": "AI agent that modernizes outdated websites to modern stacks.",
      "price": "Freemium"
    },
    {
      "title": "Omma",
      "link": "https://omma.build/",
      "desc": "AI studio to build 3D scenes, websites, and apps from prompts.",
      "price": "Freemium"
    },
    {
      "title": "Newly",
      "link": "https://newly.app/",
      "desc": "An AI platform for building native iOS and Android apps from text prompts.",
      "price": "Paid"
    },
    {
      "title": "FigPrompt",
      "link": "https://figprompt.com/",
      "desc": "Build Figma plugins using natural language prompts.",
      "price": "Free"
    },
    {
      "title": "Onlook",
      "link": "https://www.onlook.com/",
      "desc": "The open-source Cursor for Designers, create websites with code, fast.",
      "price": "Freemium"
    },
    {
      "title": "Glue",
      "link": "https://www.buildwithglue.com/",
      "desc": "Collaborate with your agent on a single design space backed by code.",
      "price": "Beta"
    },
    {
      "title": "AutonomyAI",
      "link": "https://autonomyai.io/",
      "desc": "Fei Studio turns prompts, screenshots, and Figma designs into production frontend code.",
      "price": "Free Trial"
    },
    {
      "title": "Impeccable",
      "link": "https://impeccable.style/",
      "desc": "Open-source skill that gives AI coding agents a design vocabulary and frontend anti-patterns.",
      "price": "Free"
    },
    {
      "title": "Brik",
      "link": "https://brik.space/",
      "desc": "AI platform for building and remixing custom design tools.",
      "price": "Freemium"
    }
  ],
  "ai-website-builders": [
    {
      "title": "Webflow AI",
      "link": "https://try.webflow.com/ai-features",
      "desc": "Build websites even faster with Webflow's new AI tools.",
      "price": "Freemium"
    },
    {
      "title": "Framer AI",
      "link": "https://framer.link/ai-features_via_toools",
      "desc": "Design websites faster with intelligent tools.",
      "price": "Freemium"
    },
    {
      "title": "Relume",
      "link": "https://www.relume.io/",
      "desc": "Websites designed and built faster with AI.",
      "price": "Freemium"
    },
    {
      "title": "Dorik",
      "link": "https://dorik.com?ref=pascal30",
      "desc": "Create beautiful websites from just a prompt.",
      "price": "Paid"
    },
    {
      "title": "Dora",
      "link": "https://www.dora.run/",
      "desc": "Ship 3D animated sites with zero code and AI.",
      "price": "Free Trial"
    },
    {
      "title": "Loki",
      "link": "https://loki.build/?via=toools",
      "desc": "Create landing pages so good no one believes they're AI\u2011made.",
      "price": "Freemium"
    },
    {
      "title": "Typedream",
      "link": "https://typedream.com/",
      "desc": "Let AI turn your ideas into a website in minutes.",
      "price": "Freemium"
    },
    {
      "title": "Mixo",
      "link": "https://www.mixo.io/?via=toools",
      "desc": "AI website builder for small buiness.",
      "price": "Free Trial"
    },
    {
      "title": "Butternut AI",
      "link": "https://butternut.ai/",
      "desc": "Build your dream website in 20 seconds with AI.",
      "price": "Paid"
    },
    {
      "title": "Loopple",
      "link": "https://www.loopple.com",
      "desc": "Build & launch websites with AI.",
      "price": "Freemium"
    },
    {
      "title": "Lumi",
      "link": "https://lumi.new/?via=toools",
      "desc": "Create amazing websites by chatting with AI.",
      "price": "Freemium"
    },
    {
      "title": "Gamma",
      "link": "https://try.gamma.app/websites-via-toools",
      "desc": "Turn your ideas into beautiful AI-generated websites.",
      "price": "Freemium"
    },
    {
      "title": "Webjourney",
      "link": "https://app.webjourney.pro/",
      "desc": "Vibe-code your landing page on Framer-quality templates.",
      "price": "Freemium"
    },
    {
      "title": "Fimo",
      "link": "https://fimo.ai/",
      "desc": "AI builder for beautiful, content-rich, multi-page websites with a built-in CMS.",
      "price": "Freemium"
    },
    {
      "title": "WebWave",
      "link": "https://webwave.me/",
      "desc": "Generate, customize and publish websites in minutes with AI.",
      "price": "Freemium"
    },
    {
      "title": "Readdy",
      "link": "https://readdy.ai/",
      "desc": "Build your dream websites by talking with AI.",
      "price": "Freemium"
    },
    {
      "title": "Durable",
      "link": "https://durableai.link/toools",
      "desc": "AI that builds a business for you.",
      "price": "Paid"
    },
    {
      "title": "10Web",
      "link": "https://10web.io/?_from=toools",
      "desc": "Build your website in 1 minute with AI.",
      "price": "Paid"
    },
    {
      "title": "Hostinger",
      "link": "https://www.hostinger.com/website-builder?utm_medium=affiliate&amp;utm_source=aff127950&amp;utm_campaign=6&amp;session=1021831203c9b27bf60a2800eadc07",
      "desc": "Create your website in minutes with AI.",
      "price": "Paid"
    },
    {
      "title": "Hocoos",
      "link": "https://hocoos.com/",
      "desc": "Create a website in 5 minutes with AI.",
      "price": "Freemium"
    },
    {
      "title": "CodeDesign.ai",
      "link": "https://codedesign.ai/",
      "desc": "AI website builder to build, host and export decent-looking websites.",
      "price": "Paid"
    },
    {
      "title": "Nordcraft",
      "link": "https://nordcraft.com/",
      "desc": "Visual website builder combining an AI agent with full creative control for studios.",
      "price": "Freemium"
    },
    {
      "title": "Lokuma",
      "link": "https://lokuma.ai/website-builder",
      "desc": "AI website builder that generates structure, copy, and visuals from a business description.",
      "price": "Freemium"
    }
  ],
  "logo-maker": [
    {
      "title": "Looka",
      "link": "https://looka.grsm.io/toools",
      "desc": "AI-powered platform to design a logo and brand you love.",
      "price": "Free + Paid"
    },
    {
      "title": "Brandmark",
      "link": "https://brandmark.io/",
      "desc": "An advanced AI logo maker.",
      "price": "Free Trial"
    },
    {
      "title": "Logome",
      "link": "https://logomeai.partnerlinks.io/toools",
      "desc": "Design your stunning brand logo with AI.",
      "price": "Free Trial"
    },
    {
      "title": "Branda",
      "link": "https://branda.co/",
      "desc": "AI studio that turns a one-sentence idea into a full brand kit.",
      "price": "Freemium"
    }
  ],
  "branded-content-product-photos": [
    {
      "title": "Flair",
      "link": "https://flair.ai/",
      "desc": "AI design tool and mockup generator for branded content.",
      "price": "Freemium"
    },
    {
      "title": "Exactly",
      "link": "https://exactly.ai/",
      "desc": "Bespoke AI models, built for your brand.",
      "price": "Free + Paid"
    },
    {
      "title": "Pebblely",
      "link": "https://pebblely.com/",
      "desc": "Create AI product photos that help you sell more.",
      "price": "Freemium"
    },
    {
      "title": "Lovart",
      "link": "https://www.lovart.ai/",
      "desc": "Your AI design partner for branded photos and videos.",
      "price": "Paid"
    },
    {
      "title": "Mokker AI",
      "link": "https://mokker.ai/",
      "desc": "Professional photos of your product - made with AI.",
      "price": "Paid"
    },
    {
      "title": "Blend",
      "link": "https://www.blendnow.com/",
      "desc": "Just upload your product photo and Blend does the rest.",
      "price": "Freemium"
    },
    {
      "title": "Packify.AI",
      "link": "https://www.packify.ai/",
      "desc": "Best packaging designed with AI. Start for free",
      "price": "Freemium"
    },
    {
      "title": "Better Studio",
      "link": "https://www.betterstudio.io/",
      "desc": "Turn regular images of your fashion clothing into studio quality photography.",
      "price": "Freemium"
    },
    {
      "title": "Masonry",
      "link": "https://masonry.so/",
      "desc": "Collaborate on campaigns, remix prompts, and ship visuals with the best AI models.",
      "price": "Freemium"
    },
    {
      "title": "Bloom",
      "link": "https://www.trybloom.ai/",
      "desc": "AI brand asset generator for consistent on-brand visuals.",
      "price": "Freemium"
    },
    {
      "title": "Kive",
      "link": "https://kive.ai/",
      "desc": "An AI library, lightning-fast search, teamwork and time-saving tool.",
      "price": "Freemium"
    },
    {
      "title": "Zawa",
      "link": "https://zawa.ai/",
      "desc": "A creative Al agent for branding.",
      "price": "Freemium"
    },
    {
      "title": "Adject",
      "link": "https://www.adject.ai/",
      "desc": "AI studio for realistic product visuals.",
      "price": "Free Trial"
    },
    {
      "title": "Bacon",
      "link": "https://www.trybacon.ai/",
      "desc": "Generate studio-quality images and videos in minutes.",
      "price": "Paid"
    },
    {
      "title": "Jector",
      "link": "https://jector.ai/",
      "desc": "AI tool for stunning product photos.",
      "price": "Freemium"
    },
    {
      "title": "PatternedAI",
      "link": "https://www.patterned.ai/",
      "desc": "Generate unique patterns for your product using AI.",
      "price": "Freemium"
    },
    {
      "title": "Mocku",
      "link": "https://mocku.co/",
      "desc": "Create stunning logos, brand identities, mockups, and social media designs with AI.",
      "price": "Paid"
    },
    {
      "title": "Arcade",
      "link": "https://www.arcade.ai/",
      "desc": "If you can dream it you can make it.",
      "price": "Paid"
    },
    {
      "title": "graficai",
      "link": "https://graficai.co/",
      "desc": "Improve your product image workflow with AI.",
      "price": "Freemium"
    },
    {
      "title": "Rainfrog",
      "link": "https://rainfrog.ai/",
      "desc": "AI tool for campaign-level product visuals without prompting.",
      "price": "Free Trial"
    }
  ],
  "ai-illustration-drawing": [
    {
      "title": "AI Illustration Generator",
      "link": "https://icons8.com/illustration-generator",
      "desc": "Generate series of consistent illustrations in unique art styles.",
      "price": "Paid"
    },
    {
      "title": "Illustroke",
      "link": "https://illustroke.com/",
      "desc": "An advanced tool to design and publish brand guidelines.",
      "price": "Free + Paid"
    },
    {
      "title": "Ilus AI",
      "link": "https://ilus.ai/",
      "desc": "Get beautiful, stylistically consistent AI generated illustrations in minutes.",
      "price": "Paid"
    },
    {
      "title": "Drawww",
      "link": "https://www.drawww.app/",
      "desc": "A fast and secure real-time AI drawing app for Mac and iPad.",
      "price": "Free + Paid"
    },
    {
      "title": "Pictographic",
      "link": "https://pictographic.io/",
      "desc": "AI generated illustration library.",
      "price": "Free + Paid"
    },
    {
      "title": "AI Line Art",
      "link": "https://ailineart.com/",
      "desc": "Create great AI-generated line art images in seconds.",
      "price": "Freemium"
    }
  ],
  "3d-tools": [
    {
      "title": "Spline AI",
      "link": "https://spline.design/ai",
      "desc": "Generate objects, animations, and textures using prompts.",
      "price": "Freemium"
    },
    {
      "title": "Meshy AI",
      "link": "https://www.meshy.ai?via=toools",
      "desc": "The most popular and intuitive AI 3D model generator.",
      "price": "Freemium"
    },
    {
      "title": "Autodesk Flow Studio",
      "link": "https://www.autodesk.com/products/flow-studio/overview",
      "desc": "Generate 3D models from text and images.",
      "price": "Paid"
    },
    {
      "title": "Vizcom",
      "link": "https://www.vizcom.ai/",
      "desc": "Transform your sketches into renders and 3d models in seconds.",
      "price": "Freemium"
    },
    {
      "title": "Vibe3D",
      "link": "https://vibe3d.ai/",
      "desc": "Create photorealistic renders in seconds with AI.",
      "price": "Paid"
    },
    {
      "title": "Supercraft",
      "link": "https://supercraft.ai/",
      "desc": "Design and visualize physical products with natural language.",
      "price": "Freemium"
    },
    {
      "title": "Tripo",
      "link": "https://www.tripo3d.ai/",
      "desc": "Generate 3D models and animation powered by AI in seconds.",
      "price": "Freemium"
    },
    {
      "title": "Imagen3D",
      "link": "https://imagen3d.org/",
      "desc": "Instantly convert images to 3D models.",
      "price": "Paid"
    },
    {
      "title": "Rodin AI",
      "link": "https://hyper3d.ai/",
      "desc": "Free AI 3D model generator for everyone.",
      "price": "Free + Paid"
    },
    {
      "title": "Nitrode",
      "link": "https://www.nitrode.com/",
      "desc": "All in one AI-native game engine.",
      "price": "Free"
    },
    {
      "title": "Secret Sauce 3D",
      "link": "https://secretsauce3d.com/",
      "desc": "AI-powered 3D mesh generation tool built for professional 3D artists.",
      "price": "Free Trial"
    },
    {
      "title": "Glossi",
      "link": "https://www.glossi.io/",
      "desc": "Real-time 3D studio for automated product visual creation at scale.",
      "price": "Freemium"
    },
    {
      "title": "Solaya",
      "link": "https://www.solaya.ai/",
      "desc": "AI-powered mobile 3D scanning for product content creation.",
      "price": "Free Trial"
    },
    {
      "title": "Whisker",
      "link": "https://whisker.spatialkittens.com/",
      "desc": "AI-powered parametric CAD that generates models from text.",
      "price": "Freemium"
    }
  ],
  "animation-storytelling": [
    {
      "title": "Hera",
      "link": "https://hera.cello.so/jZ39Hrsb8tB",
      "desc": "Create awesome motion graphics by chatting with Hera.",
      "price": "Freemium"
    },
    {
      "title": "AnimateAI",
      "link": "https://animateai.pro/",
      "desc": "All-in-one AI video generator with consistent story characters.",
      "price": "Freemium"
    },
    {
      "title": "Magic Animator",
      "link": "https://magicanimator.com/",
      "desc": "Animate your Figma designs in seconds with AI.",
      "price": "Free"
    },
    {
      "title": "Motionvid",
      "link": "https://motionvid.ai/?atp=toools",
      "desc": "Create AI-powered motion graphics and video animations from text prompts.",
      "price": "Freemium"
    },
    {
      "title": "Morphic",
      "link": "https://www.morphic.com/",
      "desc": "Transforming the future of storytelling using breakthrough technologies.",
      "price": "Freemium"
    },
    {
      "title": "Gomotion",
      "link": "https://www.gomotion.io/",
      "desc": "AI-powered motion graphics generation for creators and marketers.",
      "price": "Free Trial"
    },
    {
      "title": "Storyblocker",
      "link": "https://www.storyblocker.com/",
      "desc": "Visualize movie stories from concept to production with AI.",
      "price": "Free + Paid"
    },
    {
      "title": "Viggle",
      "link": "https://viggle.ai/",
      "desc": "Make any character move as you want.",
      "price": "Freemium"
    },
    {
      "title": "Motn",
      "link": "https://motn.ai/",
      "desc": "An AI canvas for creating motion graphics from text prompts.",
      "price": "Free Trial"
    },
    {
      "title": "Motion",
      "link": "https://motion.so/",
      "desc": "AI motion graphics studio to create and iterate on animations.",
      "price": "Paid"
    }
  ],
  "video-generation": [
    {
      "title": "Runway",
      "link": "https://runwayml.com/",
      "desc": "Building AI to simulate the world.",
      "price": "Freemium"
    },
    {
      "title": "Sora",
      "link": "https://sora.com",
      "desc": "OpenAI's AI video model generating hyperreal videos with sound.",
      "price": "Freemium"
    },
    {
      "title": "Kling AI",
      "link": "https://klingai.com",
      "desc": "AI video generator with cinematic quality and realistic motion.",
      "price": "Freemium"
    },
    {
      "title": "Pika",
      "link": "https://pika.art",
      "desc": "AI video platform turning text, images, and video into animations.",
      "price": "Freemium"
    },
    {
      "title": "Hailuo AI",
      "link": "https://hailuoai.video/",
      "desc": "AI video generator from text and image.",
      "price": "Free Trial"
    },
    {
      "title": "Descript",
      "link": "https://get.descript.com/os9eucsjt4dv",
      "desc": "An AI-powered, fully featured, end-to-end video editor.",
      "price": "Freemium"
    },
    {
      "title": "Invideo AI",
      "link": "https://invideo.sjv.io/c/3704448/2132469/12258",
      "desc": "Create publish-worthy videos on day one.",
      "price": "Freemium"
    },
    {
      "title": "LTX Studio",
      "link": "https://ltx.studio/",
      "desc": "Enterprise-grade AI studio for video production workflows.",
      "price": "Freemium"
    },
    {
      "title": "Artlist",
      "link": "https://artlist.io/",
      "desc": "Create any video you can imagine.",
      "price": "Free Trial"
    },
    {
      "title": "Higgsfield AI",
      "link": "https://higgsfield.ai/",
      "desc": "The ultimate AI-powered camera control for filmmakers and creators.",
      "price": "Paid"
    },
    {
      "title": "Fliki",
      "link": "https://fliki.ai/?via=toools",
      "desc": "Turn text into engaging videos with professional AI voices.",
      "price": "Freemium"
    },
    {
      "title": "Decart",
      "link": "https://decart.ai/",
      "desc": "An advanced realtime video AI platform.",
      "price": "Freemium"
    },
    {
      "title": "Elai",
      "link": "https://elai.io/",
      "desc": "Create AI Videos with a presenter from text.",
      "price": "Freemium"
    },
    {
      "title": "Lunair",
      "link": "https://www.lunair.ai/",
      "desc": "AI video generator that turns prompts into studio-quality explainer videos.",
      "price": "Freemium"
    },
    {
      "title": "JoggAI",
      "link": "https://www.jogg.ai/",
      "desc": "Transform ideas into stunning AI avatar videos in minutes.",
      "price": "Freemium"
    },
    {
      "title": "Synthesia",
      "link": "https://www.synthesia.io/",
      "desc": "Create studio-quality videos with AI avatars and voiceovers in 130+ languages.",
      "price": "Freemium"
    },
    {
      "title": "Pollo.ai",
      "link": "https://pollo.ai/",
      "desc": "One-stop AI image and video creation platform.",
      "price": "Freemium"
    },
    {
      "title": "Humva",
      "link": "https://humva.com/",
      "desc": "Generating a full video from your idea all in one click.",
      "price": "Free + Paid"
    },
    {
      "title": "Crevas",
      "link": "https://crevas.ai/",
      "desc": "Generate videos in one canvas.",
      "price": "Free Trial"
    },
    {
      "title": "Vidfly",
      "link": "https://vidfly.ai/",
      "desc": "Create videos in seconds with AI.",
      "price": "Freemium"
    },
    {
      "title": "Everlyn",
      "link": "https://everlyn.ai/",
      "desc": "The fastest video generation speed in the world.",
      "price": "Paid"
    },
    {
      "title": "Flixier",
      "link": "https://flixier.com/",
      "desc": "AI video generation, inside the timeline.",
      "price": "Freemium"
    },
    {
      "title": "Creati AI",
      "link": "https://www.creati.studio/",
      "desc": "Viral AI video generator for URL, image or text to video.",
      "price": "Paid"
    },
    {
      "title": "VidAvatar",
      "link": "https://www.vidavatar.ai/",
      "desc": "Make any photo alive and amaze your friends.",
      "price": "Freemium"
    },
    {
      "title": "HeyGen",
      "link": "https://www.heygen.com",
      "desc": "AI video generator with realistic avatars and voice cloning.",
      "price": "Freemium"
    },
    {
      "title": "Visla",
      "link": "https://www.visla.us/",
      "desc": "Leverage the power of technology to tell your stories through video.",
      "price": "Freemium"
    },
    {
      "title": "Veed",
      "link": "https://www.veed.io/",
      "desc": "Create pro level videos in the blink of AI.",
      "price": "Free Trial"
    },
    {
      "title": "Odyssey",
      "link": "https://odyssey.world/",
      "desc": "AI lab building general-purpose world models for interactive video simulations.",
      "price": "Beta"
    },
    {
      "title": "Ava Studio",
      "link": "https://www.avastudio.com/",
      "desc": "AI creative studio that turns prompts, briefs, and templates into short-form ads.",
      "price": "Freemium"
    }
  ],
  "audio-voice-chat": [
    {
      "title": "Adobe Podcast",
      "link": "https://podcast.adobe.com/",
      "desc": "AI-powered audio recording and editing, all in the web.",
      "price": "Freemium"
    },
    {
      "title": "Voiceflow",
      "link": "https://www.voiceflow.com/",
      "desc": "Chat and voice AI agents platform.",
      "price": "Freemium"
    },
    {
      "title": "LOVO",
      "link": "https://lovo.ai/",
      "desc": "Hyper realistic AI voice generator that captivates your audience.",
      "price": "Freemium"
    },
    {
      "title": "Murf",
      "link": "https://get.murf.ai/8sinergeb96l",
      "desc": "AI voice solution suite.",
      "price": "Freemium"
    },
    {
      "title": "Tiledesk",
      "link": "https://tiledesk.com/",
      "desc": "Design, test and launch conversation flows for chatbots and apps.",
      "price": "Freemium"
    },
    {
      "title": "Stable Audio",
      "link": "https://stableaudio.com/",
      "desc": "Generative AI for music and sound fx.",
      "price": "Free Trial"
    },
    {
      "title": "Suno",
      "link": "https://suno.com/",
      "desc": "AI music generator and editor.",
      "price": "Freemium"
    },
    {
      "title": "Soundraw",
      "link": "https://soundraw.io",
      "desc": "AI-powered music generator for creating royalty-free custom tracks.",
      "price": "Free Trial"
    },
    {
      "title": "Mozart AI",
      "link": "https://mozartai.com/",
      "desc": "AI music generator that turns prompts into studio-quality tracks and music videos.",
      "price": "Free Trial"
    }
  ],
  "ai-assistants": [
    {
      "title": "Claude",
      "link": "https://claude.ai/",
      "desc": "The AI for problem solvers.",
      "price": "Freemium"
    },
    {
      "title": "ChatGPT",
      "link": "https://chatgpt.com/",
      "desc": "Chat with an advanced AI to explore ideas, solve problems, and learn faster.",
      "price": "Freemium"
    },
    {
      "title": "Gemini",
      "link": "https://gemini.google.com/",
      "desc": "Chat to start writing, planning, learning and more with Google AI.",
      "price": "Freemium"
    },
    {
      "title": "Perplexity",
      "link": "https://www.perplexity.ai/",
      "desc": "An AI-powered answer engine that provides accurate, trusted, and real-time answers to any question.",
      "price": "Freemium"
    },
    {
      "title": "Kimi",
      "link": "https://www.kimi.com/",
      "desc": "Visual coding AI assistant with agent swarm capabilities.",
      "price": "Free + Paid"
    },
    {
      "title": "Grok",
      "link": "https://grok.com/",
      "desc": "A free AI assistant to maximize truth and objectivity.",
      "price": "Free + Paid"
    },
    {
      "title": "Microsoft Copilot",
      "link": "https://copilot.microsoft.com/",
      "desc": "An AI companion to inform, entertain and inspire.",
      "price": "Freemium"
    },
    {
      "title": "Pi",
      "link": "https://pi.ai/discover",
      "desc": "Your personal AI.",
      "price": "Free"
    },
    {
      "title": "Meta AI",
      "link": "https://www.meta.ai/",
      "desc": "AI assistant to get things done, create AI-generated images for free, and get answers to any of your questions.",
      "price": "Free"
    },
    {
      "title": "Le Chat",
      "link": "https://mistral.ai/products/le-chat",
      "desc": "Enterprise AI assistant from Mistral AI.",
      "price": "Freemium"
    },
    {
      "title": "Chance",
      "link": "https://www.chance.vision/",
      "desc": "A visual agent to get meaning out of camera snap shots.",
      "price": "Free"
    }
  ],
  "prompt-management": [
    {
      "title": "PromptBase",
      "link": "https://promptbase.com/?via=TOOOLS",
      "desc": "Search 260,000+ AI prompts from the world's best AI creators.",
      "price": "Free"
    },
    {
      "title": "AIPRM",
      "link": "https://www.aiprm.com/",
      "desc": "A prompt management tool and community-driven prompt library.",
      "price": "Paid"
    },
    {
      "title": "PromptHub",
      "link": "https://www.prompthub.us/",
      "desc": "AI prompt management for teams.",
      "price": "Freemium"
    },
    {
      "title": "Promptefy",
      "link": "https://www.promptefy.online/",
      "desc": "Create detailed video prompts, optionally with image references.",
      "price": "Free"
    },
    {
      "title": "PromptBox",
      "link": "https://www.promptbox.ai/?via=toools",
      "desc": "The most beautiful way to organize & paste text.",
      "price": "Paid"
    },
    {
      "title": "Prompt Board",
      "link": "https://promptboard.app/",
      "desc": "A powerful, management tool to manage your AI prompts.",
      "price": "Paid"
    },
    {
      "title": "Imagifly",
      "link": "https://imagifly.co/",
      "desc": "Simplify AI image generation with customizable prompt libraries.",
      "price": "Free + Paid"
    },
    {
      "title": "Promptsref",
      "link": "https://midjourneysref.com/?via=toools",
      "desc": "Midjourney SREF codes library with prompts and guides.",
      "price": "Freemium"
    },
    {
      "title": "SpacePrompts",
      "link": "https://www.spaceprompts.com",
      "desc": "Prompt manager to organize and reuse AI image prompts across tools.",
      "price": "Freemium"
    }
  ],
  "ai-best-practices": [
    {
      "title": "Shape of AI",
      "link": "https://www.shapeof.ai/",
      "desc": "Exploring how UX will evolve with the growth of Artificial Intelligence.",
      "price": "Free"
    },
    {
      "title": "Google AI",
      "link": "https://ai.google/",
      "desc": "Learn from Google how to make AI helpful for everyone.",
      "price": "Free"
    },
    {
      "title": "People + AI Guidebook",
      "link": "https://pair.withgoogle.com/guidebook/",
      "desc": "A set of methods, best practices and examples for designing with AI.",
      "price": "Free"
    },
    {
      "title": "AI UX Playground",
      "link": "https://www.aiuxplayground.com/",
      "desc": "A comprehensive collection of AI interface design patterns with interactive demos.",
      "price": "Free"
    },
    {
      "title": "Design Systems Repo AI",
      "link": "https://designsystemsrepo.ai/",
      "desc": "A human-curated collection of resources exploring how AI reshapes design systems.",
      "price": "Free"
    },
    {
      "title": "AI Design Field Guide",
      "link": "https://www.aidesignfieldguide.com/",
      "desc": "A living record of learnings, tips, fears, dreams, curiosities, and hot takes on AI.",
      "price": "Free"
    },
    {
      "title": "Machine Learning + Design",
      "link": "https://machinelearning.design/",
      "desc": "Collection of resources for intersection of design, user experience, machine learning and artificial intelligence.",
      "price": "Free"
    },
    {
      "title": "The UX of AI",
      "link": "https://uxofai.com/",
      "desc": "A collection of core design principles for designing personal AIs that empower us.",
      "price": "Free"
    },
    {
      "title": "Design Arena",
      "link": "https://www.designarena.ai/",
      "desc": "Discover which AI is the best at design.",
      "price": "Free"
    },
    {
      "title": "AI Interaction Atlas",
      "link": "https://ai-interaction.com/atlas",
      "desc": "A comprehensive library of interaction patterns for designing human-centered AI systems.",
      "price": "Free"
    },
    {
      "title": "getdesign.md",
      "link": "https://getdesign.md/",
      "desc": "Collection of DESIGN.md files modeled on popular brands for AI coding agents.",
      "price": "Free + Paid"
    },
    {
      "title": "Nudges.fyi",
      "link": "https://www.nudges.fyi/",
      "desc": "Interactive field cards covering nudges, biases, and heuristics for the age of AI.",
      "price": "Free"
    },
    {
      "title": "State of AI in Design",
      "link": "https://stateofaidesign.com/",
      "desc": "2026 report on how designers use AI across teams and craft.",
      "price": "Free"
    },
    {
      "title": "Taste Lab",
      "link": "https://www.tastelab.xyz/",
      "desc": "Extracts any website's design tokens and the reasoning behind them for AI design tools.",
      "price": "Free"
    },
    {
      "title": "UI Skills",
      "link": "https://www.ui-skills.com/",
      "desc": "A curated directory of UI skills that guide AI tools toward better interface design.",
      "price": "Free"
    }
  ]
};

const categories = {
  "generative-ai": {
    title: "Generative AI & Image Tools",
    desc: "Powerful AI generators to create realistic photography, style concepts, vector art, and modify pixel layouts."
  },
  "ui-generation": {
    title: "UI Generation & Design",
    desc: "Platforms that leverage AI to draft user interface mockups, wireframes, and design components directly from text prompts."
  },
  "vibe-coding": {
    title: "Vibe Coding & Frontend Builders",
    desc: "AI-assisted coding environments, visual workspace compilers, and prompt-to-app code generation tools."
  },
  "ai-website-builders": {
    title: "AI Website Builders",
    desc: "Next-generation landing page and website platforms that generate styled, responsive sites in seconds."
  },
  "logo-maker": {
    title: "AI Logo Makers",
    desc: "Specialized tools to instantly produce vector logos, brand marks, and style kits using generative inputs."
  },
  "branded-content-product-photos": {
    title: "AI Branded Content & Product Photos",
    desc: "E-commerce and marketing tools to generate clean background replacements, model swaps, and ad layouts."
  },
  "ai-illustration-drawing": {
    title: "AI Illustration & Drawing",
    desc: "Interactive canvases and sketching tools that turn rough hand-drawn strokes into beautiful finished artwork."
  },
  "3d-tools": {
    title: "AI 3D Tools",
    desc: "Generative 3D modeling platforms, texture generators, and NeRF builders that convert text or 2D images to 3D meshes."
  },
  "animation-storytelling": {
    title: "AI Animation & Storytelling",
    desc: "Generative storyboarding, vector animators, and prompt-to-video timeline editors."
  },
  "video-generation": {
    title: "AI Video Generation",
    desc: "Prompt-to-video models, avatars, and video synthesis tools to generate high-fidelity cinematic and marketing clips."
  },
  "audio-voice-chat": {
    title: "AI Audio, Voice & Chat",
    desc: "Speech synthesis, voice cloning, audio cleaning, and transcription assistants."
  },
  "ai-assistants": {
    title: "AI Assistants",
    desc: "Interactive search hubs, design copilots, and productivity extensions built into your creative workflow."
  },
  "prompt-management": {
    title: "AI Prompt Management",
    desc: "Libraries, builders, and optimization databases to structure, refine, and store text prompts for creative models."
  },
  "ai-best-practices": {
    title: "AI Best Practices",
    desc: "Directories, guides, and learning resources to master generative workflows and apply AI ethically in design."
  }
};

let htmlContent = `
  <p style="font-size: 1.05rem; margin-bottom: 25px; line-height: 1.85;">
    Artificial intelligence is reshaping the creative landscape. Modern designers are using generative AI tools to generate stunning imagery, draft UI screens, compose frontend layouts, build websites, and animate concepts faster than ever.
  </p>
  <p style="font-size: 1.05rem; margin-bottom: 35px; line-height: 1.85;">
    Here is a curated directory of the best <strong>262 AI design tools</strong> categorized by function. Use these platforms to augment your creative workflow, build high-fidelity visuals, and automate repetitive tasks.
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

ARTICLE_REGISTRY["ai-design-tools"] = {
  id: "ai-design-tools",
  subcategoryId: ["ai-utilities", "basics", "prototyping"],
  categoryId: ["tools", "ui-design", "ux-design"],
  title: "Best AI Design Tools for Modern Workflows",
  description: "Curated catalog of 262 AI design tools covering image generators, UI mockup platforms, vibe coding, website builders, 3D, animation, and video.",
  date: "2026-06-17",
  thumbnail: "", // empty to use document fallback icon
  youtubeUrl: "", // no video
  tags: ["ui design", "ai design", "design tools", "image generation", "artificial intelligence", "resources"],
  content: htmlContent
};
})();
