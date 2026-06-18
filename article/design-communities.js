(() => {
// ============================================================
//  ARTICLE: Best Design Communities & Job Boards | TOOOLS.design
// ============================================================

const toolsData = {
  "design-communities": [
    {
      "title": "Design Buddies",
      "link": "https://www.designbuddies.community/",
      "desc": "Improve your design craft, land jobs, and make friends.",
      "price": "Free"
    },
    {
      "title": "Designer Slack Communities",
      "link": "https://www.designerslack.community/",
      "desc": "A collection of Slack communities for designers around the world.",
      "price": "Free"
    },
    {
      "title": "Designed",
      "link": "https://www.designed.org/",
      "desc": "A diverse design community and platform of educational tools and mentoring.",
      "price": "Free"
    },
    {
      "title": "Reddit",
      "link": "https://www.reddit.com/search/?q=digital+design&amp;type=communities",
      "desc": "Explore various design communities on Reddit.",
      "price": "Free"
    },
    {
      "title": "DesignX",
      "link": "https://designx.community/",
      "desc": "A Community for designers by designers.",
      "price": "Free + Paid"
    },
    {
      "title": "Muzli Me",
      "link": "https://me.muz.li/",
      "desc": "A place to showcase your identity, share your work, and gain the recognition you deserve.",
      "price": "Free"
    },
    {
      "title": "10x Designers",
      "link": "https://10x.framer.website/",
      "desc": "Expand your design skillset.",
      "price": "Paid"
    },
    {
      "title": "Thousand Faces Club",
      "link": "https://www.thousandfaces.club/",
      "desc": "A community to empower creators to make a living out of their passion.",
      "price": "Free + Paid"
    },
    {
      "title": "Glass",
      "link": "https://glass.photo/",
      "desc": "Photo sharing app and community for professionals and amateurs alike.",
      "price": "Free"
    },
    {
      "title": "todays.design",
      "link": "https://todays.design/",
      "desc": "A space where designers can showcase their work, engage in conversations, and connect with their peers.",
      "price": "Free"
    },
    {
      "title": "Graphic Design Forum",
      "link": "https://www.graphicdesignforum.com/",
      "desc": "A place for graphic designers to discuss work and life.",
      "price": "Free"
    },
    {
      "title": "Drr.",
      "link": "https://drawerrr.com/",
      "desc": "Community to develop innovative solutions that enable companies and governments to adopt sustainable practices.",
      "price": "Free"
    },
    {
      "title": "Meet Your Legend",
      "link": "https://meetyourlegend.com/",
      "desc": "Expert mentorship and consulting in VFX, Animation and video game.",
      "price": "Free + Paid"
    },
    {
      "title": "Designshot",
      "link": "https://www.designshot.co/",
      "desc": "A (not so) secret society of design-driven transformation.",
      "price": "Free + Paid"
    },
    {
      "title": "CreativePro",
      "link": "https://creativepro.com/",
      "desc": "A trusted resource for graphic design professionals.",
      "price": "Free"
    },
    {
      "title": "MakerThrive",
      "link": "https://makerthrive.com/",
      "desc": "A vibrant community for creators & makers to connect, share projects, and grow together.",
      "price": "Free"
    },
    {
      "title": "ArtNetwork",
      "link": "https://artnetwork.io/",
      "desc": "Leading social network for artists and art collectors.",
      "price": "Free"
    }
  ],
  "design-meetups": [
    {
      "title": "Creative Mornings",
      "link": "https://creativemornings.com/",
      "desc": "The world\u2019s largest face-to-face creative community.",
      "price": "Free"
    },
    {
      "title": "IxDF Community Meetups",
      "link": "https://ixdf.org/community?ep=tooolsdesign",
      "desc": "A community with heart and soul, so you never have to face the job market alone.",
      "price": "Free"
    },
    {
      "title": "Creative Lunch Club",
      "link": "https://www.creativelunchclub.com/",
      "desc": "Meet other creatives for lunch.",
      "price": "Free"
    },
    {
      "title": "Meetup",
      "link": "https://www.meetup.com/topics/designers/all/",
      "desc": "All designers groups on Meetup.",
      "price": "Free"
    }
  ],
  "design-conferences-events": [
    {
      "title": "Neon Moir\u00e9",
      "link": "https://www.neonmoire.com/",
      "desc": "The best online design conferences and events on our digitalized world.",
      "price": "Free"
    },
    {
      "title": "Design Events Guide",
      "link": "https://designevents.guide/",
      "desc": "The best UX/UI, motion, and graphic design events around the world.",
      "price": "Free"
    },
    {
      "title": "Dezeen Events Guide",
      "link": "https://www.dezeen.com/eventsguide/type/conferences/",
      "desc": "The leading architecture, interior and design events around the world.",
      "price": "Free"
    },
    {
      "title": "Berlin Design Conferences",
      "link": "https://berlin-design-network.org/events/conferences",
      "desc": "A non-profit association and Design unity to create a shared culture for exchange and collaboration.",
      "price": "Free"
    }
  ],
  "design-awards": [
    {
      "title": "iF Design Award",
      "link": "https://ifdesign.com/",
      "desc": "One of the most important and prestigious design awards in the world.",
      "price": "Paid"
    },
    {
      "title": "Red Dot Award",
      "link": "https://www.red-dot.org/",
      "desc": "An international design competition for product design, communication design and design concepts.",
      "price": "Paid"
    },
    {
      "title": "The Webby Awards",
      "link": "https://www.webbyawards.com/",
      "desc": "Honoring the best of the internet since \u00a91997.",
      "price": "Paid"
    },
    {
      "title": "Awwwards",
      "link": "https://www.awwwards.com/websites/",
      "desc": "Recognizing the talent and effort of the best designers, web developers and digital agencies.",
      "price": "Paid"
    },
    {
      "title": "European Design Awards",
      "link": "https://europeandesign.org/",
      "desc": "Celebrating design: A european community of excellence.",
      "price": "Paid"
    },
    {
      "title": "The FWA Awards",
      "link": "https://thefwa.com/",
      "desc": "Showcasing web innovation every day since 2000.",
      "price": "Paid"
    }
  ],
  "job-boards": [
    {
      "title": "Dribbble Job Board",
      "link": "https://dribbble.com/jobs",
      "desc": "The #1 job board for graphic design jobs.",
      "price": "Free + Paid"
    },
    {
      "title": "Design Jobs Board",
      "link": "https://www.designjobsboard.com/",
      "desc": "Connecting the best creative talent with the most respected agencies.",
      "price": "Free + Paid"
    },
    {
      "title": "Behance Creative Jobs",
      "link": "https://www.behance.net/joblist",
      "desc": "Browse and discover your next opportunity.",
      "price": "Free + Paid"
    },
    {
      "title": "AIGA Design Jobs",
      "link": "https://designjobs.aiga.org/",
      "desc": "The first place AIGA members turn to find their next job.",
      "price": "Free + Paid"
    },
    {
      "title": "If You Could Jobs",
      "link": "https://www.ifyoucouldjobs.com/",
      "desc": "The place to find jobs in the creative industry.",
      "price": "Free + Paid"
    },
    {
      "title": "Authentic Jobs",
      "link": "https://authenticjobs.com/",
      "desc": "The leading job board for designers, developers, and creative pros.",
      "price": "Free + Paid"
    },
    {
      "title": "UI/UX Jobs Board",
      "link": "https://uiuxjobsboard.com/",
      "desc": "Find design jobs at startups and large companies.",
      "price": "Free + Paid"
    },
    {
      "title": "Open Doors",
      "link": "https://www.opendoorscareers.com/",
      "desc": "Discover the best entry-level design jobs all in one place.",
      "price": "Free"
    },
    {
      "title": "UI & UX Designer Jobs",
      "link": "https://uiuxdesignerjobs.com/",
      "desc": "Browse hand-picked designer job listings lead straight to the company website.",
      "price": "Free"
    },
    {
      "title": "Design Jobs",
      "link": "https://designjobs.careers/",
      "desc": "Find your dream design job and browse thousands of opportunities.",
      "price": "Free"
    },
    {
      "title": "WeLoveProduct",
      "link": "https://weloveproduct.co/",
      "desc": "Find your next dream job in product.",
      "price": "Free"
    },
    {
      "title": "Mockin",
      "link": "https://mockin.work/",
      "desc": "An AI toolkit helping designers get clarity, feedback, and interview confidence.",
      "price": "Freemium"
    },
    {
      "title": "Design Engineer IO",
      "link": "https://designengineer.io/",
      "desc": "Job board dedicated to design engineering positions.",
      "price": "Free"
    },
    {
      "title": "UX Gigs",
      "link": "https://uxgigs.co",
      "desc": "UK-focused job board for UX, UI, and product design roles.",
      "price": "Free"
    }
  ],
  "professional-networks": [
    {
      "title": "LinkedIn",
      "link": "https://www.linkedin.com/",
      "desc": "Manage your professional identity.",
      "price": "Freemium"
    },
    {
      "title": "Dribbble",
      "link": "https://dribbble.com/for-designers",
      "desc": "Build your brand, grow your skills, and land your dream projects.",
      "price": "Free + Paid"
    },
    {
      "title": "Fiverr",
      "link": "https://pro.fiverr.com/cp/pro-freelancers",
      "desc": "Professional freelancer platform.",
      "price": "Paid"
    },
    {
      "title": "Behance",
      "link": "https://www.behance.net/joblist",
      "desc": "A comprehensive community to share work and connect with one another.",
      "price": "Free + Paid"
    },
    {
      "title": "99designs",
      "link": "https://99designs.com/designers",
      "desc": "Find awesome clients and become a part of a global community of talented designers.",
      "price": "Free + Paid"
    },
    {
      "title": "Upwork",
      "link": "https://www.upwork.com/i/how-it-works/freelancer/",
      "desc": "Find the right work for you, with great clients, at the world\u2019s work marketplace.",
      "price": "Free + Paid"
    },
    {
      "title": "Freelancer",
      "link": "https://www.freelancer.com/",
      "desc": "Find freelance jobs online.",
      "price": "Free + Paid"
    },
    {
      "title": "Malt",
      "link": "https://www.malt.com/",
      "desc": "Everything you need to run your freelance business.",
      "price": "Free + Paid"
    },
    {
      "title": "Contra",
      "link": "https://www.contra.com/",
      "desc": "A new professional network for your independent journey.",
      "price": "Free"
    },
    {
      "title": "Academy",
      "link": "https://www.academyux.com/careers",
      "desc": "A UX talent network for flexible work, amazing freelance and full-time job opportunities and free UX resources.",
      "price": "Free"
    }
  ]
};

const categories = {
  "design-communities": {
    title: "Online Design Communities",
    desc: "Slack groups, Discord servers, and forums where designers share work, ask for feedback, and network."
  },
  "design-meetups": {
    title: "Local Design Meetups",
    desc: "Platforms to find local design meetups, UX chapter meetings, and design talks in your area."
  },
  "design-conferences-events": {
    title: "Design Conferences & Events",
    desc: "Global events, design festivals, and visual design summits to learn from industry leaders."
  },
  "design-awards": {
    title: "Design Awards & Showcases",
    desc: "Prestigious awards platforms and visual showcases featuring state-of-the-art web designs and products."
  },
  "job-boards": {
    title: "Design Job Boards",
    desc: "Specialized job boards to find remote UX/UI roles, freelance visual design contracts, and product design careers."
  },
  "professional-networks": {
    title: "Professional Design Networks",
    desc: "Platforms to build your visual portfolio, network with creative professionals, and get hired."
  }
};

let htmlContent = `
  <p style="font-size: 1.05rem; margin-bottom: 25px; line-height: 1.85;">
    Connecting with fellow designers and finding the right career opportunities can significantly boost your professional growth. Whether you are looking to network, ask for feedback on your designs, attend events, or search for job opportunities, joining active creative circles is essential.
  </p>
  <p style="font-size: 1.05rem; margin-bottom: 35px; line-height: 1.85;">
    Here is a curated directory of the best <strong>55 design communities, meetups, award platforms, and job boards</strong>. Join these spaces to stay connected with the design world and land your next role.
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

ARTICLE_REGISTRY["design-communities"] = {
  id: "design-communities",
  subcategoryId: ["communities-jobs", "basics", "user-research"],
  categoryId: ["tools", "ui-design", "ux-design"],
  title: "Best Design Communities & Job Boards",
  description: "Curated catalog of 55 design spaces, including online communities, local meetups, global events, showcases, and job boards.",
  date: "2026-06-17",
  thumbnail: "assets/thumbnails/design-communities.png", // empty to use document fallback icon
  youtubeUrl: "", // no video
  tags: ["ui design", "design communities", "job boards", "conferences", "meetups", "resources"],
  content: htmlContent
};
})();
