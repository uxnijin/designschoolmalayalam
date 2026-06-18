(() => {
// ============================================================
//  ARTICLE: Best Design Podcasts | TOOOLS.design
// ============================================================

const toolsData = {
  "design-creative-podcasts": [
    {
      "title": "Design Matters",
      "link": "https://designmattersmedia.com/",
      "desc": "20 years running podcast on how incredibly creative people design the arc of their lives.",
      "price": "Free"
    },
    {
      "title": "The Futur",
      "link": "https://www.thefutur.com/podcast",
      "desc": "A show that explores the interesting overlap between design, marketing, and business.",
      "price": "Free"
    },
    {
      "title": "Design Your Life",
      "link": "https://www.frostcollective.com/podcasts",
      "desc": "Listen in as creatives and visionaries discuss the role design has played in shaping their success.",
      "price": "Free"
    },
    {
      "title": "Creative Boom",
      "link": "https://www.creativeboom.com/podcast/",
      "desc": "Candid conversations with fellow creatives, packed with fresh insights and expert advice.",
      "price": "Free"
    },
    {
      "title": "Design Better",
      "link": "https://designbetterpodcast.com/podcast",
      "desc": "Uncover insights from the world\u2019s top design leaders.",
      "price": "Free"
    },
    {
      "title": "Designer & Designer",
      "link": "https://designer.fm/",
      "desc": "A podcast about design.",
      "price": "Free"
    },
    {
      "title": "Scratching the Surface",
      "link": "https://scratchingthesurface.fm/",
      "desc": "A podcast about design, theory, and creative practice.",
      "price": "Free"
    },
    {
      "title": "Design Life",
      "link": "https://www.designlife.fm/",
      "desc": "Two women in tech talk about design and side projects for motivated creators.",
      "price": "Free"
    },
    {
      "title": "Design Notes",
      "link": "https://designnotes.fm/",
      "desc": "A podcast about creative work and what it teaches us.",
      "price": "Free"
    },
    {
      "title": "Creative Pep Talk",
      "link": "https://www.creativepeptalk.com/",
      "desc": "Stories and strategies for building a thriving creative practice.",
      "price": "Free"
    },
    {
      "title": "99% Invisible",
      "link": "https://podcasts.apple.com/us/podcast/99-invisible/id394775318?mt=2",
      "desc": "A weekly exploration of the process and power of design and architecture.",
      "price": "Free"
    },
    {
      "title": "Revision Path",
      "link": "https://revisionpath.com/",
      "desc": "Weekly podcast of black designers, developers, and digital creatives from all over the world.",
      "price": "Free"
    },
    {
      "title": "Perspective Podcast",
      "link": "https://www.perspective-collective.com/perspectivepodcast",
      "desc": "Fuel for your mind & creative grind.",
      "price": "Free"
    },
    {
      "title": "Design Sphere",
      "link": "https://www.designsphere.xyz/",
      "desc": "A curated selection of design podcasts handpicked for you.",
      "price": "Free"
    },
    {
      "title": "The Creative Condition",
      "link": "https://www.thecreativecondition.com/pod",
      "desc": "An ongoing exploration of human creativity to help you understand and maximise yours.",
      "price": "Free"
    },
    {
      "title": "World-class Designer",
      "link": "https://anchor.fm/worldclass-designer",
      "desc": "Series of interviews with world-class designers.",
      "price": "Free"
    },
    {
      "title": "Layout",
      "link": "http://layout.fm/",
      "desc": "A weekly podcast about design, technology, programming and everything else.",
      "price": "Free"
    },
    {
      "title": "On Design",
      "link": "https://ondesignpodcast.com/",
      "desc": "Insightful conversations with design's most inspiring figures.",
      "price": "Free"
    },
    {
      "title": "Daily Creative",
      "link": "https://podcast.toddhenry.com/",
      "desc": "Helping you be brave, focused, and brilliant in your creative work and leadership.",
      "price": "Free"
    },
    {
      "title": "Being Freelance",
      "link": "https://www.beingfreelance.com/the-best-freelance-podcast",
      "desc": "How to make it as the owner of your own business by hearing other freelancers share their experience.",
      "price": "Free"
    }
  ],
  "product-design-podcasts": [
    {
      "title": "Dive",
      "link": "https://www.dive.club/",
      "desc": "Knowledge from designers and leaders at today\u2019s top teams.",
      "price": "Paid"
    },
    {
      "title": "Lenny's Podcast",
      "link": "https://www.lennysnewsletter.com/podcast",
      "desc": "World-class product leaders share advice on building, launching, and growing products.",
      "price": "Free"
    },
    {
      "title": "UI Breakfast",
      "link": "https://uibreakfast.com/category/podcast/",
      "desc": "Exciting conversations about UI/UX design, products, marketing, and so much more.",
      "price": "Free"
    },
    {
      "title": "Framework",
      "link": "https://spec.fm/podcasts/framework",
      "desc": "Podcast about the process of researching, planning and building that goes into bringing a product to market.",
      "price": "Free"
    },
    {
      "title": "Jake and Jonathan",
      "link": "https://productbreakfastclub.simplecast.com/",
      "desc": "Behind the scenes look at how some of the best companies in the world design their products.",
      "price": "Free"
    },
    {
      "title": "The Optimal Path",
      "link": "https://maze.co/podcast/",
      "desc": "A new podcast about product decision-making.",
      "price": "Free"
    },
    {
      "title": "Product Thinking",
      "link": "https://www.produxlabs.com/product-thinking",
      "desc": "Industry leading experts answer your most pressing questions about everything product.",
      "price": "Free"
    },
    {
      "title": "Yo! Podcast",
      "link": "https://robhope.com/yo/",
      "desc": "Spotlights incredible designers, developers, makers and entrepreneurs building their own future.",
      "price": "Free"
    },
    {
      "title": "The Prodcast",
      "link": "https://theprodcast.substack.com/",
      "desc": "A podcast featuring impactful technology & product stories.",
      "price": "Free"
    },
    {
      "title": "Design Details",
      "link": "https://designdetails.fm/",
      "desc": "A weekly conversation about design process and culture",
      "price": "Free"
    },
    {
      "title": "Now What?",
      "link": "https://www.wix.com/nowwhat",
      "desc": "A podcast about how technology is changing\u2026 everything.",
      "price": "Free"
    },
    {
      "title": "Masters of Scale",
      "link": "https://mastersofscale.com/episodes/",
      "desc": "Candid conversations with founders, CEOs, and innovators about the hard-won lessons of scaling.",
      "price": "Free"
    },
    {
      "title": "New Layer",
      "link": "https://podbay.fm/p/new-layer",
      "desc": "Tanner Christensen & Jasmine Friedl discussing design careers, tools, education, critique, and much more.",
      "price": "Free"
    },
    {
      "title": "How We Scaled It",
      "link": "https://podcasters.spotify.com/pod/show/how-we-scaled-it",
      "desc": "A journey through the arduous road to growing a successful design practice from 0-100.",
      "price": "Free"
    }
  ],
  "ux-design-podcasts": [
    {
      "title": "NN/G UX Podcast",
      "link": "https://www.youtube.com/playlist?list=PLJOFJ3Ok_idv78lCtzYaKUiO07CC_rU0A",
      "desc": "A podcast on user experience research, design, strategy, and professions.",
      "price": "Free"
    },
    {
      "title": "UX Research Geeks",
      "link": "https://www.uxtweak.com/podcast/",
      "desc": "Interviews with inspiring researchers from all around the world.",
      "price": "Free"
    },
    {
      "title": "Future of UX",
      "link": "https://open.spotify.com/show/7s2Cy6IIimjxE4zVES9wWs",
      "desc": "All about the Future of UX about AI & Future tech.",
      "price": "Free"
    },
    {
      "title": "Beyond UX Design",
      "link": "https://www.beyonduxdesign.com/episodes/",
      "desc": "Giving you the tools you need to be a truly effective UX designer.",
      "price": "Free"
    },
    {
      "title": "Honest UX Talks",
      "link": "https://creators.spotify.com/pod/profile/honestuxtalks/",
      "desc": "Honest weekly conversations about careers, challenges, portfolios, mental health, and all things UX.",
      "price": "Free"
    },
    {
      "title": "UX Podcast",
      "link": "https://uxpodcast.com/",
      "desc": "Sharing insights about business, technology and people since 2011.",
      "price": "Free"
    },
    {
      "title": "The UX Level-Up",
      "link": "https://www.ooux.com/podcast",
      "desc": "A dive into the weeds on UX systems, information architecture, human psychology, and simplifying complexity.",
      "price": "Free"
    },
    {
      "title": "UX of EdTech",
      "link": "https://podcasts.apple.com/us/podcast/ux-of-edtech/id1519644050",
      "desc": "A design studio cultivating learning, creativity, and play.",
      "price": "Free"
    },
    {
      "title": "Awkward Silences",
      "link": "https://www.userinterviews.com/podcast",
      "desc": "A user research podcast.",
      "price": "Free"
    },
    {
      "title": "UX Soup",
      "link": "https://open.spotify.com/show/0HGUOjPz0wqr2useHoSBDL",
      "desc": "The latest on user experience, whether in the car, at home, or on the go.",
      "price": "Free"
    },
    {
      "title": "Design Huddle",
      "link": "https://podtail.com/en/podcast/design-huddle/",
      "desc": "Podcast about UX, creative careers, and the Internet. They interview designers, founders, influencers and sometimes just their friends.",
      "price": "Free"
    },
    {
      "title": "Wireframe",
      "link": "https://xd.adobe.com/ideas/perspectives/wireframe-podcast/",
      "desc": "The stories behind user experience design and how it helps technology fit into our lives.",
      "price": "Free"
    },
    {
      "title": "What is Wrong with UX",
      "link": "https://www.usersknow.com/podcast",
      "desc": "Kate and Laura drink and fight about what is wrong with user experience design.",
      "price": "Free"
    },
    {
      "title": "UX & Growth Podcast",
      "link": "https://podcasts.apple.com/us/podcast/ux-growth-podcast/id1016143291?mt=2",
      "desc": "Austin Knight sits down with friends from around the world to discuss User Experience and Growth tactics.",
      "price": "Free"
    },
    {
      "title": "User Defenders",
      "link": "https://userdefenders.com/podcast/",
      "desc": "User Defenders: Podcast is an industry leading/celebrated UX podcast.",
      "price": "Free"
    }
  ],
  "branding-podcasts": [
    {
      "title": "On Brand",
      "link": "https://www.nickwestergaard.com/on-brand-podcast/",
      "desc": "The On Brand podcast helps you tell stronger stories and build better brands.",
      "price": "Free"
    },
    {
      "title": "A Change of Brand",
      "link": "https://www.achangeofbrand.com/",
      "desc": "Behind the scenes stories of rebrand glory, drama, or disaster.",
      "price": "Free"
    },
    {
      "title": "JUST Branding",
      "link": "https://pod.co/just-branding",
      "desc": "A podcast dedicated to helping designers and entrepreneurs grow brands.",
      "price": "Free"
    },
    {
      "title": "Let\u2019s talk branding",
      "link": "https://letstalkbranding.substack.com/podcast",
      "desc": "Brand-building in the new world of generative AI.",
      "price": "Free"
    },
    {
      "title": "Brand Master Podcast",
      "link": "https://brandmasteracademy.com/brand-master-podcast/",
      "desc": "Helping professional brand-builders and entrepreneurs, to build brands.",
      "price": "Free"
    },
    {
      "title": "How Brands Are Built",
      "link": "https://howbrandsarebuilt.com/podcast/",
      "desc": "Branding professionals get into the details of what they do and how they do it.",
      "price": "Free"
    },
    {
      "title": "Brands On Brands",
      "link": "https://www.podpage.com/brands-on-brands/",
      "desc": "Learn from the world's top personal branding and content marketing experts.",
      "price": "Free"
    },
    {
      "title": "Brand & Banter",
      "link": "https://carrylovedesigns.com/podcast",
      "desc": "Dive deep into the genius behind today\u2019s biggest branding wins.",
      "price": "Free"
    },
    {
      "title": "Building your Brand",
      "link": "https://buildingyourbrand.net/",
      "desc": "Small business owners to build businesses that you LOVE and feel confident about promoting.",
      "price": "Free"
    },
    {
      "title": "Branding Matters",
      "link": "https://www.brandingmatters.ca/",
      "desc": "Exclusive interviews with visionaries, game-changers, and industry titans.",
      "price": "Free"
    },
    {
      "title": "No BS Agency",
      "link": "https://www.nobsagencies.com/",
      "desc": "Ignore the crap that\u2019s holding you back and discover what it really takes to be the boss.",
      "price": "Free"
    },
    {
      "title": "Front and Center",
      "link": "https://open.spotify.com/show/5ctHqmo5L6PXremxqlXaSE",
      "desc": "Weekly discussion on branding, design, pop culture, and more.",
      "price": "Free"
    },
    {
      "title": "Focus On Brand",
      "link": "https://podcasts.apple.com/us/podcast/focus-on-brand/id1572659361",
      "desc": "A podcast from the team at Focus Lab, a global B2B brand agency building brands that lead and inspire.",
      "price": "Free"
    }
  ],
  "graphic-design-podcasts": [
    {
      "title": "The Angry Designer",
      "link": "https://theangrydesigner.com/",
      "desc": "No-Bull Graphic Design Podcast that cuts through industry jargon & nonsense, to help frustrated Graphic Designers survive and thrive.",
      "price": "Free"
    },
    {
      "title": "Adventures in Design",
      "link": "https://aid.network/",
      "desc": "A daily talk show and community for creatives.",
      "price": "Free"
    },
    {
      "title": "Ramblings of a Designer",
      "link": "https://roads.libsyn.com/",
      "desc": "A weekly podcast where we discuss the latest graphic design news from around the web.",
      "price": "Free"
    },
    {
      "title": "The Deeply Graphic Designcast",
      "link": "https://dgdc.carrd.co/",
      "desc": "Bold ideas, behind-the-scenes insights, and real-world advice to inspire designers, artists, and makers.",
      "price": "Free"
    },
    {
      "title": "Logo Geek",
      "link": "https://logogeek.uk/podcast/",
      "desc": "Learn from the experiences of successful graphic designers and entrepreneurs around the world.",
      "price": "Free"
    },
    {
      "title": "The Profitable Graphic Designer",
      "link": "https://aventiveacademy.com/podcast/",
      "desc": "A podcast to help graphic designers grow, get more clients, and hit $10k (and beyond) months.",
      "price": "Free"
    }
  ],
  "web-design-podcasts": [
    {
      "title": "ShopTalk",
      "link": "https://shoptalkshow.com/",
      "desc": "A weekly podcast about building websites.",
      "price": "Free"
    },
    {
      "title": "Syntax",
      "link": "https://shoptalkshow.com/",
      "desc": "A podcast about web development.",
      "price": "Free"
    },
    {
      "title": "Web Design Business",
      "link": "https://joshhall.co/podcast-playlists/",
      "desc": "A web design business podcast.",
      "price": "Free"
    },
    {
      "title": "Self-Made Web Designer",
      "link": "https://selfmadewebdesigner.com/",
      "desc": "A podcast show about growing a thriving web design business.",
      "price": "Free"
    }
  ],
  "motion-design": [
    {
      "title": "School of Motion Podcast",
      "link": "https://www.schoolofmotion.com/podcast",
      "desc": "Podcast covering motion design industry trends and career insights.",
      "price": "Free"
    },
    {
      "title": "Greyscalegorilla Podcast",
      "link": "https://greyscalegorilla.com/podcast",
      "desc": "Podcast exploring 3D design, Cinema 4D, and creative workflows.",
      "price": "Free"
    },
    {
      "title": "Motion Hatch Podcast",
      "link": "https://www.motionhatch.com/podcast",
      "desc": "Podcast about the business side of freelance motion design.",
      "price": "Free"
    },
    {
      "title": "The Collective Podcast",
      "link": "https://www.thecollectivepodcast.com",
      "desc": "Podcast with deep conversations featuring top creatives and directors.",
      "price": "Free"
    },
    {
      "title": "Mograph Podcast",
      "link": "https://www.mograph.com/podcast",
      "desc": "Weekly podcast on motion graphics tools, techniques, and industry talk.",
      "price": "Free"
    },
    {
      "title": "RevThink Podcast",
      "link": "https://revthink.com/podcast",
      "desc": "Podcast about running thriving creative agencies and studios.",
      "price": "Free"
    }
  ]
};

const categories = {
  "design-creative-podcasts": {
    title: "Design & Creativity Podcasts",
    desc: "Inspirational design conversations detailing creative psychology, visual art trends, and design philosophy."
  },
  "product-design-podcasts": {
    title: "Product Design Podcasts",
    desc: "Industry chats analyzing interface systems, design operations, product management, and startup execution."
  },
  "ux-design-podcasts": {
    title: "UX Design Podcasts",
    desc: "Podcasts exploring qualitative research protocols, cognitive human behaviors, and user testing strategies."
  },
  "branding-podcasts": {
    title: "Branding & Logo Podcasts",
    desc: "Audio catalogs dedicated to typography development, visual logo marks, and corporate brand positioning."
  },
  "graphic-design-podcasts": {
    title: "Graphic Design Podcasts",
    desc: "Discussions detailing poster designs, print layout typesetting, and editorial graphic design history."
  },
  "web-design-podcasts": {
    title: "Web Design & Dev Podcasts",
    desc: "Frontend developer conversations, creative CSS tricks, and award-winning browser animation design."
  },
  "motion-design": {
    title: "Motion Design Podcasts",
    desc: "Podcasts focused on 3D animations, Lottie transition mechanics, and micro-interactive visual physics."
  }
};

let htmlContent = `
  <p style="font-size: 1.05rem; margin-bottom: 25px; line-height: 1.85;">
    Tuning into design podcasts is a fantastic way to consume industry knowledge, learn from design leaders, and understand product workflows during your daily commute or design sessions.
  </p>
  <p style="font-size: 1.05rem; margin-bottom: 35px; line-height: 1.85;">
    Here is a curated directory of the best <strong>78 design podcasts</strong>. Discover podcasts covering creative philosophy, product layout engineering, brand identities, and vector illustrations.
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

ARTICLE_REGISTRY["best-design-podcasts"] = {
  id: "best-design-podcasts",
  subcategoryId: ["podcasts-blogs", "basics", "user-research"],
  categoryId: ["tools", "ui-design", "ux-design"],
  title: "Best Design Podcasts to Listen",
  description: "Curated catalog of 78 design podcasts covering product design, user experience, branding, illustration, and creative code.",
  date: "2026-06-17",
  thumbnail: "assets/thumbnails/best-design-podcasts.png", // empty to use document fallback icon
  youtubeUrl: "", // no video
  tags: ["ui design", "podcasts", "audio", "ux design", "branding", "resources"],
  content: htmlContent
};
})();
