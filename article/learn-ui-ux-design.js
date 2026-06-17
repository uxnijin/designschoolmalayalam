(() => {
// ============================================================
//  ARTICLE: Best Resources to Learn UI/UX Design | TOOOLS.design
// ============================================================

const toolsData = {
  "courses": [
    {
      "title": "IxDF",
      "link": "https://ixdf.org/?ep=tooolsdesign",
      "desc": "Learn UX, AI, and digital design. Earn industry-recognized course certificates.",
      "price": "Free + Paid"
    },
    {
      "title": "Uxcel",
      "link": "https://uxcel.com/courses?ref=toools",
      "desc": "Learn UX design, Product Management & AI skills with interactive courses that are effective and fun.",
      "price": "Paid"
    },
    {
      "title": "Coursera",
      "link": "https://imp.i384100.net/xk4Xbv",
      "desc": "Online courses and certificates from leading companies like Google, IBM, Meta, and Adobe.",
      "price": "Paid"
    },
    {
      "title": "Designlab",
      "link": "https://designlab.pxf.io/QykQRx",
      "desc": "Award-winning online UI/UX bootcamp.",
      "price": "Paid"
    },
    {
      "title": "Memorisely",
      "link": "https://www.memorisely.com/",
      "desc": "Learn UX/UI online with live micro classes.",
      "price": "Paid"
    },
    {
      "title": "Technigo",
      "link": "https://www.technigo.io/",
      "desc": "Learn digital skills with creative people.",
      "price": "Paid"
    },
    {
      "title": "Design Champs",
      "link": "https://designchamps.io/",
      "desc": "Premium UI/UX training, expert guidance, and a thriving community.",
      "price": "Free + Paid"
    },
    {
      "title": "Shift Nudge",
      "link": "https://shiftnudge.com/",
      "desc": "Online learning experience for designing beautiful and functional interfaces.",
      "price": "Paid"
    },
    {
      "title": "Kickass UX",
      "link": "https://www.kickassux.com/",
      "desc": "Helping graphic/visual designers transition to UX.",
      "price": "Free + Paid"
    },
    {
      "title": "Product Strategy for Designers",
      "link": "https://femke.design/course",
      "desc": "Learn to build influence, get your ideas approved, and extend your impact beyond the canvas.",
      "price": "Paid"
    },
    {
      "title": "Figma Academy",
      "link": "https://www.figma.academy/",
      "desc": "Learn advanced design tactics directly in Figma.",
      "price": "Paid"
    },
    {
      "title": "Skillshare",
      "link": "https://www.skillshare.com/browse/design",
      "desc": "An online learning community with thousands of classes for creative and curious people.",
      "price": "Paid"
    },
    {
      "title": "DesignerUp",
      "link": "https://designerup.co/",
      "desc": "Learn UX/UI and Product Design on your own time with a community of students and mentors.",
      "price": "Paid"
    },
    {
      "title": "Design+Code",
      "link": "https://designcode.io/",
      "desc": "Learn design and code, by building real apps with React and Swift.",
      "price": "Freemium"
    },
    {
      "title": "Career Foundry",
      "link": "https://careerfoundry.com/",
      "desc": "Become a UX designer, UI designer, web developer, or data analyst from scratch.",
      "price": "Paid"
    },
    {
      "title": "IntoUX Design",
      "link": "https://intoux.design/",
      "desc": "Comprehensive UX design course with structured learning.",
      "price": "Paid"
    },
    {
      "title": "Figma Design for beginners",
      "link": "https://help.figma.com/hc/en-us/sections/30880632542743",
      "desc": "A hands-on course from Figma where you design a portfolio website from scratch.",
      "price": "Free"
    },
    {
      "title": "Future London Academy",
      "link": "https://futurelondonacademy.co.uk/",
      "desc": "Design and creative leadership courses taught online and in London.",
      "price": "Paid"
    },
    {
      "title": "Udacity",
      "link": "https://www.udacity.com/",
      "desc": "Learn the latest tech skills and advance your career.",
      "price": "Paid"
    },
    {
      "title": "Domestika",
      "link": "https://www.domestika.org/",
      "desc": "Online courses for creative professionals.",
      "price": "Paid"
    },
    {
      "title": "LinkedIn Learning",
      "link": "https://www.linkedin.com/learning/",
      "desc": "Online courses for creative, technology, and business skills.",
      "price": "Paid"
    },
    {
      "title": "Udemy",
      "link": "https://www.udemy.com/",
      "desc": "Large selection of courses with new additions published every month.",
      "price": "Paid"
    },
    {
      "title": "Design is a Party",
      "link": "https://courses.designisaparty.com/",
      "desc": "Design courses on prototyping, UI, and visual design by Elizabeth Lin.",
      "price": "Free + Paid"
    }
  ],
  "fundamentals-principles": [
    {
      "title": "Laws of UX",
      "link": "https://lawsofux.com/",
      "desc": "A collection of best practices that designers can consider when building UI's.",
      "price": "Free"
    },
    {
      "title": "Design Principles",
      "link": "https://principles.design/",
      "desc": "An open source collection of Design Principles and methods.",
      "price": "Free"
    },
    {
      "title": "Checklist Design",
      "link": "https://www.checklist.design/",
      "desc": "A collection of the best design practices.",
      "price": "Free"
    },
    {
      "title": "Psychology of Design",
      "link": "https://growth.design/psychology/",
      "desc": "100+ cognitive biases and principles that affect your UX.",
      "price": "Free"
    },
    {
      "title": "UX Tools",
      "link": "https://uxtools.co/",
      "desc": "Learn user-first design with practical skills and tools.",
      "price": "Free"
    },
    {
      "title": "Humane",
      "link": "https://humanebydesign.com/",
      "desc": "Guidance for designing ethically humane digital products.",
      "price": "Free"
    },
    {
      "title": "Built for Mars",
      "link": "https://builtformars.com/",
      "desc": "10,000+ hours of research packed into 47 case studies.",
      "price": "Free + Paid"
    },
    {
      "title": "Sustainable UX Playbook",
      "link": "https://suxnetwork.notion.site/",
      "desc": "Resources for sustainable and responsible UX and Design.",
      "price": "Free"
    },
    {
      "title": "uxtoast",
      "link": "https://www.uxtoast.com/",
      "desc": "Learn UX & UI Design, including design laws and principles, visual design, and design processes.",
      "price": "Free"
    },
    {
      "title": "Patttterns",
      "link": "https://patttterns.com/",
      "desc": "A catalog of 200+ interaction design patterns.",
      "price": "Free"
    },
    {
      "title": "UX Lex",
      "link": "https://www.curiositytank.com/ux-lexicon",
      "desc": "An evolving, interactive glossary of UX research terms.",
      "price": "Free"
    },
    {
      "title": "Dark Patterns Tip Line",
      "link": "https://darkpatternstipline.org/",
      "desc": "A platform to submit manipulative designs in everyday digital products.",
      "price": "Free"
    },
    {
      "title": "The Component Gallery",
      "link": "https://component.gallery/",
      "desc": "A reference for anyone building component-based user interfaces.",
      "price": "Free"
    },
    {
      "title": "Biased by Design",
      "link": "https://biasedbydesign.com/",
      "desc": "Cultivating awareness of cognitive biases in the design process.",
      "price": "Free"
    },
    {
      "title": "Ethical Design Resources",
      "link": "https://www.ethicaldesignresources.com/",
      "desc": "Guidance for designing ethically humane digital products.",
      "price": "Free"
    },
    {
      "title": "Service Design Tools",
      "link": "https://servicedesigntools.org/",
      "desc": "An open collection of tools that helps dealing with complex design challenges.",
      "price": "Free"
    },
    {
      "title": "Untools",
      "link": "https://untools.co/",
      "desc": "Collection of tools to help you solve problems, make decisions and understand systems.",
      "price": "Free"
    },
    {
      "title": "Inclusive Design Principles",
      "link": "https://inclusivedesignprinciples.info/",
      "desc": "How to design for the needs of people with disabilities.",
      "price": "Free"
    },
    {
      "title": "Platformabuse.org",
      "link": "https://platformabuse.org/",
      "desc": "A knowledge source of technological harms and mitigations to guide safer product development.",
      "price": "Free"
    },
    {
      "title": "The Ethical Design Handover Kit",
      "link": "https://kits.driftime.com/ethical-design-handover-kit/",
      "desc": "Protect the planet, serve your people and champion design!",
      "price": "Free"
    },
    {
      "title": "The history of UI",
      "link": "https://history.user-interface.io/",
      "desc": "A visual gallery of how user interfaces have evolved.",
      "price": "Free"
    },
    {
      "title": "Coglode",
      "link": "https://www.coglode.com/cookbook",
      "desc": "A unique compendium of behavioural insights to strengthen your ideas.",
      "price": "Free + Paid"
    },
    {
      "title": "Abovethefold.fyi",
      "link": "https://abovethefold.fyi/",
      "desc": "A novelty side project exploring the myth of the fold.",
      "price": "Free"
    },
    {
      "title": "Android Design Hub",
      "link": "https://developer.android.com/design/ui",
      "desc": "Design a beautiful user interface using Android best practices.",
      "price": "Free"
    },
    {
      "title": "Hall of Shame",
      "link": "https://hallofshame.design/",
      "desc": "A catalog of dark patterns and unethical designs with real world examples.",
      "price": "Free"
    },
    {
      "title": "The UX Cookbook",
      "link": "https://theuxcookbook.com/",
      "desc": "Handcrafted recipes to get you started with everything UX.",
      "price": "Free"
    },
    {
      "title": "Gestalt Principles",
      "link": "https://www.gestaltprinciples.com/",
      "desc": "Guidelines for how our brains make sense of what we see.",
      "price": "Free"
    },
    {
      "title": "Nokia Design Archive",
      "link": "https://nokiadesignarchive.aalto.fi/",
      "desc": "A graphic and interactive portal representing over 20 years of Nokia\u2019s design history.",
      "price": "Free"
    },
    {
      "title": "The Micropedia",
      "link": "https://www.themicropedia.org/",
      "desc": "A resource to learn more about microaggressions and their impact.",
      "price": "Free"
    },
    {
      "title": "Sneak Peak",
      "link": "https://www.sneakpeek.design/",
      "desc": "Look inside Figma files of top designers for free.",
      "price": "Free"
    },
    {
      "title": "Playbook for Universal Design",
      "link": "https://universaldesignguide.com/",
      "desc": "A collection of inclusive methods that can be used in any design process.",
      "price": "Free"
    },
    {
      "title": "UXSnaps",
      "link": "https://www.uxsnaps.com/",
      "desc": "Uncover the UI secrets behind apps used by millions.",
      "price": "Free"
    },
    {
      "title": "UX Hints",
      "link": "https://uxhints.com/",
      "desc": "Bite-sized hints and cheat sheets about UX Product Design.",
      "price": "Free"
    },
    {
      "title": "Cognitive Bias Index",
      "link": "https://cognitivebiasindex.com/",
      "desc": "Interactive index for identifying and mitigating cognitive biases.",
      "price": "Free"
    }
  ],
  "guides-tips": [
    {
      "title": "UX Trends",
      "link": "https://trends.uxdesign.cc/",
      "desc": "The annual state of UX by the UX Collective.",
      "price": "Free"
    },
    {
      "title": "How to start in UX",
      "link": "https://start.uxdesign.cc/",
      "desc": "The ultimate guide to become a fabulous design unicorn.",
      "price": "Free"
    },
    {
      "title": "Case Study Club",
      "link": "https://www.casestudy.club/",
      "desc": "Learn how people design digital products.",
      "price": "Free"
    },
    {
      "title": "Icon University",
      "link": "https://blog.streamlinehq.com/tag/icons/",
      "desc": "Learn the secrets of Streamline\u2019s icon designers, absolutely free.",
      "price": "Free"
    },
    {
      "title": "Ethical Design Guide",
      "link": "https://ethicaldesign.guide/",
      "desc": "Resources on how to create ethical products that don't cause harm.",
      "price": "Free"
    },
    {
      "title": "Designer.tips",
      "link": "https://www.designer.tips/",
      "desc": "Curated time saving designer tips for creatives.",
      "price": "Free + Paid"
    },
    {
      "title": "UI Tips",
      "link": "https://www.uidesign.tips/ui-tips",
      "desc": "Learn how to design better UI and make your users happier.",
      "price": "Free"
    },
    {
      "title": "Bitcoin Design",
      "link": "https://bitcoin.design/",
      "desc": "Open-source design guide for Bitcoin products.",
      "price": "Free"
    },
    {
      "title": "The Ultimate Guide to UX Research",
      "link": "https://maze.design/guides/ux-research",
      "desc": "Comprehensive guide including tips and best practices from leading industry experts.",
      "price": "Free"
    },
    {
      "title": "Steve Jobs Archive",
      "link": "https://stevejobsarchive.com/",
      "desc": "A set of core ideals motivated Steve throughout his life.",
      "price": "Free"
    },
    {
      "title": "The Design System Guide",
      "link": "https://thedesignsystem.guide/",
      "desc": "A step-by-step interactive handbook for setting up a design system.",
      "price": "Free"
    },
    {
      "title": "Lessons of Design",
      "link": "https://lessons.design/",
      "desc": "A designer on what he loves about design and learned along the way.",
      "price": "Free"
    },
    {
      "title": "CursorUp",
      "link": "https://cursorup.com/",
      "desc": "Learn product design with UX & UI tips, free courses, inspiration & more.",
      "price": "Free"
    },
    {
      "title": "Bring Out Your Design Dead",
      "link": "https://secondwavedive.notion.site/Bring-Out-Your-Design-Dead-1c3b5a0d3230802aa96eed6bb5e1861a",
      "desc": "A growing collection of articles, reports, and hot takes declaring the many deaths of design.",
      "price": "Free"
    },
    {
      "title": "Landing Pages Explained",
      "link": "https://landingpagesexplained.com",
      "desc": "A collection of leading SaaS and creator LP\u2019s with expert explanations.",
      "price": "Free"
    },
    {
      "title": "Product Design Roadmap",
      "link": "https://product-design-roadmap.com/",
      "desc": "A diagram highlighting topics and skills you need to know as a UX/UI Product designer in 2023.",
      "price": "Free"
    },
    {
      "title": "Redesigning Design Systems",
      "link": "https://redesigningdesign.systems/",
      "desc": "A space that makes learning about and evolving Design Systems fun.",
      "price": "Free"
    },
    {
      "title": "Motion Design Principles",
      "link": "https://motion.zajno.com/",
      "desc": "A website that showcases the power of UI/UX animation.",
      "price": "Free"
    },
    {
      "title": "Hey Design Systems",
      "link": "https://heydesign.systems/",
      "desc": "A space dedicated for all things design systems.",
      "price": "Free"
    },
    {
      "title": "Color & Contrast",
      "link": "https://colorandcontrast.com/",
      "desc": "An interactive guide to color & contrast.",
      "price": "Free"
    },
    {
      "title": "Interactive SVG Animations",
      "link": "https://www.svg-animations.how/",
      "desc": "A text-based mini-course on making whimsical, playful SVG animations.",
      "price": "Free"
    },
    {
      "title": "The UX Writing Library",
      "link": "https://www.uxwritinglibrary.com/",
      "desc": "Essential resources to guide you through UX writing and content design.",
      "price": "Free"
    },
    {
      "title": "Daily Designer",
      "link": "https://www.dailydesigner.net/",
      "desc": "A daily dose of quotes from legendary designers.",
      "price": "Free"
    },
    {
      "title": "SHRTCTS",
      "link": "https://shrtcts.click/",
      "desc": "An interactive 3D keyboard for learning any app's keyboard shortcuts.",
      "price": "Free"
    }
  ],
  "accessibility": [
    {
      "title": "Accessibility Not-Checklist",
      "link": "https://not-checklist.intopia.digital/",
      "desc": "Guide to make sure you haven\u2019t missed anything on accessibility.",
      "price": "Free"
    },
    {
      "title": "We are Colorblind",
      "link": "https://wearecolorblind.com/",
      "desc": "Resources, articles and examples to help making the world a better place for the colorblind.",
      "price": "Free"
    },
    {
      "title": "Access Guide",
      "link": "https://www.accessguide.io/",
      "desc": "A friendly introduction to digital accessibility.",
      "price": "Free"
    },
    {
      "title": "A11Y Project",
      "link": "https://www.a11yproject.com/",
      "desc": "A community-driven effort to make digital accessibility easier.",
      "price": "Free"
    },
    {
      "title": "Understanding Accessibility",
      "link": "https://www.understandingaccessibility.com/",
      "desc": "Based on the latest guidance and feedback from real designers and developers.",
      "price": "Free"
    },
    {
      "title": "Design Beyond Barriers",
      "link": "https://designbeyondbarriers.com/",
      "desc": "A guide to answers all your burning questions about accessibility.",
      "price": "Free"
    }
  ],
  "challenges-briefs": [
    {
      "title": "Daily UI",
      "link": "https://www.dailyui.co/",
      "desc": "A series of daily design challenges design inspiration and neat surprise rewards.",
      "price": "Free"
    },
    {
      "title": "FakeClients",
      "link": "https://fakeclients.com/",
      "desc": "Practice logo design using randomly generated client briefs.",
      "price": "Free"
    },
    {
      "title": "Briefbox",
      "link": "https://www.briefbox.me/",
      "desc": "Level up your design skills with industry standard practice briefs & short courses.",
      "price": "Paid"
    },
    {
      "title": "Good Briefs",
      "link": "https://goodbrief.io/",
      "desc": "A random generator for design briefs.",
      "price": "Free"
    },
    {
      "title": "UI Coach",
      "link": "https://uicoach.io/",
      "desc": "Improve your UI/UX Design skills by designing real-world projects.",
      "price": "Free"
    },
    {
      "title": "The Designer's Journey",
      "link": "https://www.thedesignersjourney.com/",
      "desc": "A growing list of 1000+ goals and achievements for designers.",
      "price": "Free"
    },
    {
      "title": "UX Challenges",
      "link": "https://uxtools.co/challenges",
      "desc": "Done reading about UX? Start doing it.",
      "price": "Free"
    },
    {
      "title": "The Design Quiz",
      "link": "https://thedesignquiz.com/",
      "desc": "Test your UX, UI and graphic design knowledge.",
      "price": "Free"
    },
    {
      "title": "uEye",
      "link": "https://designcourse.com/app/course/ueye",
      "desc": "A free & fun game to learn UI design.",
      "price": "Free"
    },
    {
      "title": "Sprint cards",
      "link": "https://sprint.cards/",
      "desc": "Generate random design challenges.",
      "price": "Free"
    },
    {
      "title": "UI Challenge",
      "link": "https://www.uichallenges.design/",
      "desc": "Master user interface design with challenges and shape your future in UI/UX.",
      "price": "Free"
    },
    {
      "title": "Monowi: Product Design Exercises",
      "link": "https://monowi.notion.site/Monowi-Product-Design-Exercises-1-1-99c913d7ec554164be0bbc785bccda97",
      "desc": "A collection of hands-on exercises for Product Designers.",
      "price": "Free"
    }
  ],
  "youtube-channels": [
    {
      "title": "The Futur",
      "link": "https://www.youtube.com/user/TheSkoolRocks",
      "desc": "Content, courses, and tools to help you build better design skills and better creative businesses.",
      "price": "Free"
    },
    {
      "title": "Flux",
      "link": "https://www.youtube.com/channel/UCN7dywl5wDxTu1RM3eJ_h9Q",
      "desc": "Ran Segall shares daily videos about his work and his process as a designer and a startup co-founder.",
      "price": "Free"
    },
    {
      "title": "AJ Smart",
      "link": "https://www.youtube.com/channel/UCeB_OpLspKJGiKv1CYkWFFw",
      "desc": "The #1 resource for UX/UI - design sprints - design thinking.",
      "price": "Free"
    },
    {
      "title": "femke",
      "link": "https://www.youtube.com/channel/UCWUGGwfTfJ0-2jUS3dZqOJA",
      "desc": "Femke is a product designer at a large tech company, sharing her learnings and experience.",
      "price": "Free"
    },
    {
      "title": "Charli Marie TV",
      "link": "https://www.youtube.com/channel/UCScRSwdX0t31gjk3MYXIuYQ",
      "desc": "A half-British, half-kiwi web and graphic designer posting design videos about her life as a designer.",
      "price": "Free"
    },
    {
      "title": "Tommy Geoco",
      "link": "https://www.youtube.com/@designertom",
      "desc": "Videos for people who love design and tech.",
      "price": "Free"
    },
    {
      "title": "Sketch Together",
      "link": "https://www.youtube.com/channel/UCZHkx_OyRXHb1D3XTqOidRw",
      "desc": "A channel dedicated to all things related to UX and UI design plus some stuff about illustration.",
      "price": "Free"
    },
    {
      "title": "Jesse Showalter",
      "link": "https://www.youtube.com/channel/UCvBGFeXbBrq3W9_0oNLJREQ",
      "desc": "A designer and front end developer living in sunny Honolulu Hawaii making videos about design, code & life.",
      "price": "Free"
    },
    {
      "title": "Hello, I'm Alexa",
      "link": "https://www.youtube.com/c/HelloImAlexa",
      "desc": "Design your design career with San Francisco based Product Designer Alexa.",
      "price": "Free"
    },
    {
      "title": "Chunbuns",
      "link": "https://www.youtube.com/user/imchunbuns",
      "desc": "A full-time Product Designer and content creator based in SF shares her experience and knowledge.",
      "price": "Free"
    },
    {
      "title": "Pimp my Type",
      "link": "https://www.youtube.com/c/pimpmytype",
      "desc": "Learn how to use the power of typography and show the full potential of web, app or digital product design.",
      "price": "Free"
    },
    {
      "title": "Mizko",
      "link": "https://www.youtube.com/channel/UCZJkZy008cQjqkJeKpJu8tA",
      "desc": "A designer and entrepreneur sharing his failures, successes and experiences.",
      "price": "Free"
    }
  ],
  "design-talks": [
    {
      "title": "Awwwards Conference Talks",
      "link": "https://www.awwwards.com/awwwards/collections/talks/",
      "desc": "Interesting talks about UX, UI, Design Systems, eCommerce and Accessibility from the awwwards conference.",
      "price": "Free"
    },
    {
      "title": "TED Talks",
      "link": "https://www.ted.com",
      "desc": "TED is a nonprofit devoted to spreading ideas, usually in the form of short, powerful talks.",
      "price": "Free"
    },
    {
      "title": "High Resolution",
      "link": "https://www.highresolution.design/",
      "desc": "Limited video series on product design and design thinking with people from Airbnb, Uber, Slack, Ebay, Spotify, and others.",
      "price": "Free"
    },
    {
      "title": "Rethink Talks",
      "link": "https://www.rethinkhq.com/videos",
      "desc": "Learn how to create unified design systems, how to level up your skills or how to achieve design leadership.",
      "price": "Free"
    }
  ]
};

const categories = {
  "courses": {
    title: "Courses & Bootcamps",
    desc: "Structured interactive programs, academic curriculums, and visual design bootcamps."
  },
  "fundamentals-principles": {
    title: "Fundamentals & Principles",
    desc: "Foundational UI/UX guidelines, grid mechanics, visual hierarchies, and interactive design rules."
  },
  "guides-tips": {
    title: "Guides & Reference Sheets",
    desc: "Cheat sheets, keyboard shortcuts, figma libraries, and checklist systems to optimize your design speed."
  },
  "accessibility": {
    title: "Accessibility Resources",
    desc: "WCAG guides, color contrast checkers, and screen reader testing templates."
  },
  "challenges-briefs": {
    title: "Design Challenges & Briefs",
    desc: "Interactive brief builders, copy generators, and design prompt challenges to build your portfolio."
  },
  "youtube-channels": {
    title: "YouTube Channels",
    desc: "Best YouTube channels detailing figma tutorials, visual design workflows, and case studies."
  },
  "design-talks": {
    title: "Design Talks & Conferences",
    desc: "Keynote talks, design systems lectures, and industry conferences to watch."
  }
};

let htmlContent = `
  <p style="font-size: 1.05rem; margin-bottom: 25px; line-height: 1.85;">
    Whether you are a beginner taking your first steps in visual design or an experienced professional looking to hone your product design skills, finding high-quality educational resources is crucial. 
  </p>
  <p style="font-size: 1.05rem; margin-bottom: 35px; line-height: 1.85;">
    Here is a curated directory of the best <strong>115 resources to learn UI/UX design</strong>. Discover courses, design guidelines, reference sheets, accessibility checklists, and portfolio brief generators.
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

ARTICLE_REGISTRY["learn-ui-ux-design"] = {
  id: "learn-ui-ux-design",
  subcategoryId: ["learning-education", "basics", "user-research"],
  categoryId: ["tools", "ui-design", "ux-design"],
  title: "Best Resources to Learn UI/UX Design",
  description: "Curated catalog of 115 educational platforms to learn UI/UX design, including courses, accessibility checklists, brief generators, and talks.",
  date: "2026-06-17",
  thumbnail: "", // empty to use document fallback icon
  youtubeUrl: "", // no video
  tags: ["ui design", "ux design", "learn ui ux", "courses", "tutorials", "resources"],
  content: htmlContent
};
})();
