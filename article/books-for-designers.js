(() => {
// ============================================================
//  ARTICLE: Best Books for Designers | TOOOLS.design
// ============================================================

const booksData = {
  "gen-ai-design": [
    {
      "title": "Designing your Future with AI: A Practical Guide to Prompt Engineering and Generative AI for Creators, Innovators, and Real-World Impact",
      "link": "https://amzn.to/4qaUN8d",
      "desc": "Paul Orlander",
      "price": "Paid"
    },
    {
      "title": "Generative AI Essentials For Beginners: Boost Your Artificial Intelligence Skills With Innovative Tools To Write, Create, And Edit Content With Ease",
      "link": "https://amzn.to/4pH7O9K",
      "desc": "JS Collins",
      "price": "Paid"
    },
    {
      "title": "Prompt Engineering for UX - Mastering Generative AI for Design Excellence: Elevate your UX design skills to new heights",
      "link": "https://amzn.to/3Mzo6Tc",
      "desc": "Medavi",
      "price": "Paid"
    },
    {
      "title": "AI Prompt Engineering Bible: Beginner-to-Pro System to Master ChatGPT and Generative AI for Powerful Results and Real Income",
      "link": "https://amzn.to/4q3hElV",
      "desc": "Tomasz Dylik",
      "price": "Paid"
    },
    {
      "title": "Generative AI for Creators: Creating Content that converts: Unlocking the Power of AI-Driven Content Production",
      "link": "https://amzn.to/3Myd9kX",
      "desc": "James Adler",
      "price": "Paid"
    },
    {
      "title": "UX+AI DESIGN WITH PROMPTS: How to Create Exceptional Experiences with Generative AI",
      "link": "https://amzn.to/3KMZQMW",
      "desc": "Hegel Gonzalez",
      "price": "Paid"
    },
    {
      "title": "ADOBE PHOTOSHOP AI USER GUIDE 2025: Master Generative Fill, Content-Aware Tools, and New Creative Features",
      "link": "https://amzn.to/48ywYRF",
      "desc": "Blair DK. Morgan",
      "price": "Paid"
    },
    {
      "title": "Image Context Engineering: Master Creating Amazing Detailed Images Through Example Stories (Generative AI Mastery)",
      "link": "https://amzn.to/4aid5jb",
      "desc": "David Gillette",
      "price": "Paid"
    }
  ],
  "branding-logo-identity-design": [
    {
      "title": "Logos that Last: How to Create Iconic Visual Branding",
      "link": "https://amzn.to/44Kw566",
      "desc": "Allan Peters",
      "price": "Paid"
    },
    {
      "title": "Logo Design Love: A Guide to Creating Iconic Brand Identities",
      "link": "https://amzn.to/3MpyKfq",
      "desc": "David Airey",
      "price": "Paid"
    },
    {
      "title": "The Brand Gap: How to Bridge the Distance Between Business Strategy and Design",
      "link": "https://amzn.to/3XJ00aX",
      "desc": "Marty Neumeier",
      "price": "Paid"
    },
    {
      "title": "Identity Designed: The Definitive Guide to Visual Branding",
      "link": "https://amzn.to/3MpyUn2",
      "desc": "David Airey",
      "price": "Paid"
    },
    {
      "title": "Zag: The Number One Strategy of High-Performance Brands",
      "link": "https://amzn.to/4q0L5Fi",
      "desc": "Marty Neumeier",
      "price": "Paid"
    },
    {
      "title": "Designing Brand Identity: A Comprehensive Guide to the World of Brands and Branding",
      "link": "https://amzn.to/4qhgymT",
      "desc": "Alina Wheeler, Rob Meyerson",
      "price": "Paid"
    },
    {
      "title": "Branding: In Five and a Half Steps",
      "link": "https://amzn.to/4oDZ56R",
      "desc": "Michael Johnson",
      "price": "Paid"
    },
    {
      "title": "Logo Modernism",
      "link": "https://amzn.to/4a3uITz",
      "desc": "Jens M\u00fcller, Julius Wiedemann, R. Roger Remington",
      "price": "Paid"
    }
  ],
  "visual-graphic-design": [
    {
      "title": "Thinking with Type: A Critical Guide for Designers, Writers, Editors, and Students",
      "link": "https://amzn.to/4pqgrFv",
      "desc": "Ellen Lupton",
      "price": "Paid"
    },
    {
      "title": "Grid systems in graphic design: A visual communication manual",
      "link": "https://amzn.to/44Nlszr",
      "desc": "Josef M\u00fcller-Brockmann",
      "price": "Paid"
    },
    {
      "title": "Interaction of Color",
      "link": "https://amzn.to/4a5bk8U",
      "desc": "Josef Albers",
      "price": "Paid"
    },
    {
      "title": "The Elements of Typographic Style",
      "link": "https://amzn.to/48DCd1c",
      "desc": "Robert Bringhurst",
      "price": "Paid"
    },
    {
      "title": "Meggs' History of Graphic Design",
      "link": "https://amzn.to/4rAXlhc",
      "desc": "Philip B. Meggs, Alston W. Purvis",
      "price": "Paid"
    },
    {
      "title": "The Graphic Design Idea Book: Inspiration from 50 Masters",
      "link": "https://amzn.to/4oCjVTX",
      "desc": "Steven Heller, Gail Anderson",
      "price": "Paid"
    },
    {
      "title": "How to Use Graphic Design to Sell Things, Explain Things, Make Things Look Better, ...",
      "link": "https://amzn.to/3Kz8OgK",
      "desc": "Michael Bierut",
      "price": "Paid"
    },
    {
      "title": "The Visual History of Type: A visual survey of 320 typefaces",
      "link": "https://amzn.to/44L26uM",
      "desc": "Paul McNeil",
      "price": "Paid"
    },
    {
      "title": "100 Ideas that Changed Graphic Design",
      "link": "https://amzn.to/3MmJTgU",
      "desc": "Steven Heller, Veronique Vienne",
      "price": "Paid"
    },
    {
      "title": "Palette Perfect for Graphic Designers and Illustrators: Colour Combinations, Meanings and Cultural References",
      "link": "https://amzn.to/4rJvUlx",
      "desc": "Sara Caldas",
      "price": "Paid"
    },
    {
      "title": "Graphic Design For Everyone: Understand the Building Blocks so You can Do It Yourself",
      "link": "https://amzn.to/4p1hgUh",
      "desc": "Cath Caldwell",
      "price": "Paid"
    }
  ],
  "ui-digital-product-design": [
    {
      "title": "Don't Make Me Think: A Common Sense Approach to Web Usability",
      "link": "https://amzn.to/4oBKj0b",
      "desc": "Steve Krug",
      "price": "Paid"
    },
    {
      "title": "Designing Interfaces: Patterns for Effective Interaction Design",
      "link": "https://amzn.to/4pGyUNS",
      "desc": "Jenifer Tidwell, Charles Brewer, Aynne Valencia",
      "price": "Paid"
    },
    {
      "title": "Laws of UX: Using Psychology to Design Better Products & Services",
      "link": "https://amzn.to/4rKsoay",
      "desc": "Jon Yablonski",
      "price": "Paid"
    },
    {
      "title": "INSPIRED: How to Create Tech Products Customers Love",
      "link": "https://amzn.to/3KuCRWT",
      "desc": "Marty Cagan",
      "price": "Paid"
    },
    {
      "title": "The Best Interface Is No Interface: The simple path to brilliant technology",
      "link": "https://amzn.to/4ppES5X",
      "desc": "Golden Krishna",
      "price": "Paid"
    },
    {
      "title": "The Laws of Simplicity (Simplicity: Design, Technology, Business, Life)",
      "link": "https://amzn.to/4iInlDj",
      "desc": "John Maeda",
      "price": "Paid"
    },
    {
      "title": "Well-Designed: How to Use Empathy to Create Products People Love",
      "link": "https://amzn.to/3XCO5eS",
      "desc": "Jon Kolko",
      "price": "Paid"
    },
    {
      "title": "Designing Products People Love: How Great Designers Create Successful Products",
      "link": "https://amzn.to/48Fp4Gl",
      "desc": "Scott Hurff",
      "price": "Paid"
    },
    {
      "title": "Value Proposition Design: How to Create Products and Services Customers Want",
      "link": "https://amzn.to/4rKqIO7",
      "desc": "A. Osterwalder, Y. Pigneur, G. Bernarda, A. Smith",
      "price": "Paid"
    },
    {
      "title": "Atomic Design",
      "link": "https://amzn.to/3OFCpH0",
      "desc": "Brad Frost",
      "price": "Paid"
    },
    {
      "title": "The Path to Senior Product Designer: An Actionable Growth Plan for a UX Design Career",
      "link": "https://amzn.to/4iFCPrA",
      "desc": "Artiom Dashinsky",
      "price": "Paid"
    },
    {
      "title": "Solving Product Design Exercises: Questions & Answers",
      "link": "https://amzn.to/48qrAQA",
      "desc": "Artiom Dashinsky",
      "price": "Paid"
    },
    {
      "title": "Hooked: How to Build Habit-Forming Products",
      "link": "https://amzn.to/4rDv3CJ",
      "desc": "Nir Eyal",
      "price": "Paid"
    },
    {
      "title": "Wireframing for Everyone",
      "link": "https://amzn.to/4pIrryd",
      "desc": "Michael Angeles, Leon Barnard, and Billy Carlson",
      "price": "Paid"
    },
    {
      "title": "Generating Product Ideas: Actionable Techniques for Finding New Business Ideas",
      "link": "https://amzn.to/4oLlzTt",
      "desc": "Artiom Dashinsky",
      "price": "Paid"
    },
    {
      "title": "Hacking Growth: How Today's Fastest-Growing Companies Drive Breakout Success",
      "link": "https://amzn.to/48E2bS5",
      "desc": "Sean Ellis and Morgan Brown",
      "price": "Paid"
    }
  ],
  "ux-design-behavior-psychology": [
    {
      "title": "The Design of Everyday Things",
      "link": "https://amzn.to/4ppETa1",
      "desc": "Don Norman",
      "price": "Paid"
    },
    {
      "title": "User Friendly: How the Hidden Rules of Design Are Changing the Way We Live, Work, and Play",
      "link": "https://amzn.to/4ozDUCF",
      "desc": "Cliff Kuang, Robert Fabricant",
      "price": "Paid"
    },
    {
      "title": "How to design intuitive, user centered interfaces by focusing on effective communication",
      "link": "https://amzn.to/4iMLhpd",
      "desc": "Everett McKay",
      "price": "Paid"
    },
    {
      "title": "UX Strategy: How to Devise Innovative Digital Products that People Want",
      "link": "https://amzn.to/4q11EB3",
      "desc": "Jaime Levy",
      "price": "Paid"
    },
    {
      "title": "Thinking, Fast and Slow",
      "link": "https://amzn.to/48ntcdQ",
      "desc": "Daniel Kahneman",
      "price": "Paid"
    },
    {
      "title": "100 Things Every Designer Needs to Know About People",
      "link": "https://amzn.to/3KtnSwl",
      "desc": "Susan Weinschenk",
      "price": "Paid"
    },
    {
      "title": "Lean UX: Applying Lean Principles to Improve User Experience",
      "link": "https://amzn.to/4a2bptZ",
      "desc": "Jeff Gothelf, Josh Seiden",
      "price": "Paid"
    }
  ],
  "web-design": [
    {
      "title": "Vibe Coding for Designers: Turn Your Figma Mockups into Working Products Using AI",
      "link": "https://amzn.to/3Ois4R4",
      "desc": "Nova Impact",
      "price": "Paid"
    },
    {
      "title": "Design for Hackers: Reverse Engineering Beauty",
      "link": "https://amzn.to/4rjWUr0",
      "desc": "David Kadavy",
      "price": "Paid"
    },
    {
      "title": "The Principles of Beautiful Web Design",
      "link": "https://amzn.to/4ajrhrF",
      "desc": "Jason Beaird, Alex Walker, James George",
      "price": "Paid"
    },
    {
      "title": "HTML and CSS: Design and Build Websites",
      "link": "https://amzn.to/4qA7Csf",
      "desc": "Jon Duckett",
      "price": "Paid"
    }
  ],
  "creativity-ideation-design-thinking": [
    {
      "title": "The Creative Act: A Way of Being",
      "link": "https://amzn.to/3XEKXz8",
      "desc": "Rick Rubin",
      "price": "Paid"
    },
    {
      "title": "Change by Design: How Design Thinking Transforms Organizations and Inspires Innovation",
      "link": "https://amzn.to/48Hf9Pi",
      "desc": "Tim Brown",
      "price": "Paid"
    },
    {
      "title": "Creative Confidence: Unleashing the Creative Potential Within Us All",
      "link": "https://amzn.to/4rWfFlh",
      "desc": "Tom Kelley, David Kelley",
      "price": "Paid"
    },
    {
      "title": "The Art of Innovation: Lessons in Creativity from IDEO",
      "link": "https://amzn.to/48AFWwp",
      "desc": "Tom Kelley",
      "price": "Paid"
    },
    {
      "title": "Sprint: How to Solve Big Problems and Test New Ideas in Just Five Days",
      "link": "https://amzn.to/4pWU2zn",
      "desc": "Jake Knapp",
      "price": "Paid"
    },
    {
      "title": "Steal Like an Artist: 10 Things Nobody Told You About Being Creative",
      "link": "https://amzn.to/3YgPOGW",
      "desc": "Austin Kleon",
      "price": "Paid"
    },
    {
      "title": "The Creative Habit: Learn It and Use It for Life",
      "link": "https://amzn.to/4pBHXzY",
      "desc": "Twyla Tharp",
      "price": "Paid"
    },
    {
      "title": "Creative Acts for Curious People: How to Think, Create, and Lead in Unconventional Ways",
      "link": "https://amzn.to/48H9EzR",
      "desc": "Sarah Stein Greenberg, Stanford d.school",
      "price": "Paid"
    }
  ],
  "drawing-illustration": [
    {
      "title": "Illustration Now!",
      "link": "https://amzn.to/48KuO01",
      "desc": "Julius Wiedemann",
      "price": "Paid"
    },
    {
      "title": "Drawing on the Right Side of the Brain: The Definitive",
      "link": "https://amzn.to/3Ym5U1Z",
      "desc": "Betty Edwards",
      "price": "Paid"
    },
    {
      "title": "The Illustrator's Guide To Procreate: How to make digital art on your iPad",
      "link": "https://amzn.to/48zfGDV",
      "desc": "Ruth Burrows",
      "price": "Paid"
    },
    {
      "title": "Draw to Win: A Crash Course on How to Lead, Sell, and Innovate With Your Visual Mind",
      "link": "https://amzn.to/4rTX3lL",
      "desc": "Dan Roam",
      "price": "Paid"
    },
    {
      "title": "How to be an Illustrator",
      "link": "https://amzn.to/44S7Vqo",
      "desc": "Darrel Rees",
      "price": "Paid"
    },
    {
      "title": "Figure Drawing for All It's Worth",
      "link": "https://amzn.to/4oM6IIb",
      "desc": "Andrew Loomis",
      "price": "Paid"
    },
    {
      "title": "Creative Illustration",
      "link": "https://amzn.to/3MwqSbT",
      "desc": "Andrew Loomis",
      "price": "Paid"
    },
    {
      "title": "The Art of Whimsical Lettering",
      "link": "https://amzn.to/44lzOab",
      "desc": "Joanne Sharpe",
      "price": "Paid"
    }
  ],
  "motion-storytelling": [
    {
      "title": "The Animator's Survival Kit: A Manual of Methods, Principles and Formulas",
      "link": "https://amzn.to/3KI2Udi",
      "desc": "Richard Williams",
      "price": "Paid"
    },
    {
      "title": "The Illusion of Life: Disney Animation",
      "link": "https://amzn.to/4rPSlVz",
      "desc": "Ollie Johnston, Frank Thomas",
      "price": "Paid"
    },
    {
      "title": "Design for Motion: Fundamentals and Techniques of Motion Design",
      "link": "https://amzn.to/3KN2bYf",
      "desc": "Austin Shaw",
      "price": "Paid"
    },
    {
      "title": "Motion Design Toolkit: Principles, Practice, and Techniques",
      "link": "https://amzn.to/48AUjCm",
      "desc": "Austin Shaw, John Colette",
      "price": "Paid"
    },
    {
      "title": "Animated Storytelling: Simple Steps for Creating Animation & Motion Graphics",
      "link": "https://amzn.to/498HeA8",
      "desc": "Liz Blazer",
      "price": "Paid"
    },
    {
      "title": "Motion Graphics: Principles and Practices from the Ground Up",
      "link": "https://amzn.to/4sqTbIf",
      "desc": "Ian Crook, Peter Beare",
      "price": "Paid"
    },
    {
      "title": "The Visual Story: Creating the Visual Structure of Film, TV, and Digital Media",
      "link": "https://amzn.to/4rTmJyN",
      "desc": "Bruce Block",
      "price": "Paid"
    },
    {
      "title": "The Moving Image Workshop: Introducing animation, motion graphics and visual effects in 45 practical projects",
      "link": "https://amzn.to/4rVijqW",
      "desc": "Heather D. Freeman",
      "price": "Paid"
    },
    {
      "title": "Creativity, Inc.: Overcoming the Unseen Forces That Stand in the Way of True Inspiration",
      "link": "https://amzn.to/4rM9jnX",
      "desc": "Ed Catmull, Amy Wallace",
      "price": "Paid"
    },
    {
      "title": "Animation For Beginners: Getting Started with Animation Filmmaking",
      "link": "https://amzn.to/454UP9c",
      "desc": "Morr Meroz",
      "price": "Paid"
    },
    {
      "title": "Understanding Comics: The Invisible Art",
      "link": "https://amzn.to/4q19FFR",
      "desc": "Scott McCloud",
      "price": "Paid"
    }
  ],
  "marketing-personal-branding": [
    {
      "title": "The 1-Page Marketing Plan: Get New Customers, Make More Money, And Stand out From The Crowd",
      "link": "https://amzn.to/3KNbyXS",
      "desc": "Allan Dib",
      "price": "Paid"
    },
    {
      "title": "The Essential Guide to the Psychology of Influence and Persuasion in Everyday Life",
      "link": "https://amzn.to/4sIWUBj",
      "desc": "Robert B. Cialdini",
      "price": "Paid"
    },
    {
      "title": "The 22 Immutable Laws of Marketing: Violate Them at Your Own Risk!",
      "link": "https://amzn.to/4iMBxvc",
      "desc": "Al Ries, Jack Trout",
      "price": "Paid"
    },
    {
      "title": "Lean Marketing: More leads. More profit. Less marketing.",
      "link": "https://amzn.to/4pPvkRs",
      "desc": "Allan Dib",
      "price": "Paid"
    },
    {
      "title": "Wealthy and Well-Known: Build Your Personal Brand and Turn Your Reputation into Revenue",
      "link": "https://amzn.to/44VYeai",
      "desc": "Rory Vaden, AJ Vaden",
      "price": "Paid"
    },
    {
      "title": "Market Eminence: 22 Strategies to Build a Bold Personal Brand, Become a Business Celebrity, and Drive Unstoppable Growth",
      "link": "https://amzn.to/4psOiO0",
      "desc": "David Newman",
      "price": "Paid"
    },
    {
      "title": "Building a StoryBrand: Clarify Your Message So Customers Will Listen",
      "link": "https://amzn.to/4pkUDLe",
      "desc": "Donald Miller",
      "price": "Paid"
    },
    {
      "title": "Extremely Online: The Untold Story of Fame, Influence, and Power on the Internet",
      "link": "https://amzn.to/4iKBCQ3",
      "desc": "Taylor Lorenz",
      "price": "Paid"
    },
    {
      "title": "Influencer: Building Your Personal Brand in the Age of Social Media",
      "link": "https://amzn.to/4pXkAR5",
      "desc": "Brittany Hennessy",
      "price": "Paid"
    },
    {
      "title": "Positioning: The Battle for Your Mind",
      "link": "https://amzn.to/4lpWjCb",
      "desc": "Al Ries, Jack Trout",
      "price": "Paid"
    },
    {
      "title": "Crossing the Chasm: Marketing and Selling Disruptive Products to Mainstream Customers",
      "link": "https://amzn.to/4pP3p3S",
      "desc": "Geoffrey A. Moore",
      "price": "Paid"
    },
    {
      "title": "Start with Why: How Great Leaders Inspire Everyone to Take Action",
      "link": "https://amzn.to/3MNliSp",
      "desc": "Simon Sinek",
      "price": "Paid"
    },
    {
      "title": "This is Marketing: You Can\u2019t Be Seen Until You Learn To See",
      "link": "https://amzn.to/3XIy6vK",
      "desc": "Seth Godin",
      "price": "Paid"
    },
    {
      "title": "Loveworks: How the world's top marketers make emotional connections to win in the marketplace",
      "link": "https://amzn.to/4oH16yU",
      "desc": "Brian Sheehan",
      "price": "Paid"
    },
    {
      "title": "Contagious: Why Things Catch On",
      "link": "https://amzn.to/48ISIcg",
      "desc": "Jonah Berger",
      "price": "Paid"
    },
    {
      "title": "Made to Stick: Why Some Ideas Survive and Others Die",
      "link": "https://amzn.to/3KECh8P",
      "desc": "Chip Heath, Dan Heath",
      "price": "Paid"
    },
    {
      "title": "Click Here: The Art and Science of Digital Marketing and Advertising",
      "link": "https://amzn.to/4rL1hMl",
      "desc": "Alex Schultz",
      "price": "Paid"
    },
    {
      "title": "Product Design Portfolio Final Final: Make a product design portfolio that lands dream jobs",
      "link": "https://amzn.to/3MLkPA9",
      "desc": "Fedor Shkliarau",
      "price": "Paid"
    }
  ],
  "advertising-copywriting-communication-design": [
    {
      "title": "Copywriting: Successful Writing for Design, Advertising and Marketing",
      "link": "https://amzn.to/4aDiTDO",
      "desc": "Mark Shaw, Gyles Lingwood",
      "price": "Paid"
    },
    {
      "title": "Ogilvy on Advertising",
      "link": "https://amzn.to/4oOjPsx",
      "desc": "David Ogilvy",
      "price": "Paid"
    },
    {
      "title": "Advertising by Design: Generating and Designing Creative Ideas",
      "link": "https://amzn.to/4iItE9U",
      "desc": "Robin Landa",
      "price": "Paid"
    },
    {
      "title": "Cashvertising: How to Use More Than 100 Secrets of Ad-Agency Psychology",
      "link": "https://amzn.to/4brPkUN",
      "desc": "Drew Eric Whitman",
      "price": "Paid"
    },
    {
      "title": "Integrated Marketing Communication",
      "link": "https://amzn.to/3Mo8TEt",
      "desc": "Robyn Blakeman",
      "price": "Paid"
    },
    {
      "title": "Advertising Creative: Strategy, Copy, and Design",
      "link": "https://amzn.to/44bA0J6",
      "desc": "Tom Altstiel, Jean M. Grow, Dan Augustine, Joanna L. Jenkins",
      "price": "Paid"
    },
    {
      "title": "Hey Whipple, Squeeze This: The Classic Guide to Creating Great Advertising",
      "link": "https://amzn.to/48Mxr1y",
      "desc": "Luke Sullivan",
      "price": "Paid"
    },
    {
      "title": "The Copywriter's Handbook: A Step-by-Step Guide to Writing Copy That Sells",
      "link": "https://amzn.to/48FDQvh",
      "desc": "Robert W. Bly",
      "price": "Paid"
    },
    {
      "title": "Reality in Advertising",
      "link": "https://amzn.to/4pX1kmG",
      "desc": "Rosser Reeves",
      "price": "Paid"
    }
  ],
  "ethical-inclusive-sustainable-design": [
    {
      "title": "Design for Real Life",
      "link": "https://amzn.to/3Mm8i6m",
      "desc": "Eric A Meyer, Sara Wachter-Boettcher",
      "price": "Paid"
    },
    {
      "title": "Ruined by Design: How Designers Destroyed the World, and What We Can Do to Fix It",
      "link": "https://amzn.to/4rJk1vR",
      "desc": "Mike Monteiro",
      "price": "Paid"
    },
    {
      "title": "Technically Wrong: Sexist Apps, Biased Algorithms, and Other Threats of Toxic Tech",
      "link": "https://amzn.to/4aDLpVR",
      "desc": "Sara Wachter-Boettcher",
      "price": "Paid"
    },
    {
      "title": "Mismatch: How Inclusion Shapes Design (Simplicity: Design, Technology, Business, Life)",
      "link": "https://amzn.to/44gFCSq",
      "desc": "Kat Holmes",
      "price": "Paid"
    },
    {
      "title": "Inclusive Design for a Digital World: Designing with Accessibility in Mind",
      "link": "https://amzn.to/3Kp8e5f",
      "desc": "Regin\u00e9 M. Gilbert",
      "price": "Paid"
    },
    {
      "title": "Design Justice: Community-Led Practices to Build the Worlds We Need",
      "link": "https://amzn.to/48Zl8jD",
      "desc": "Sasha Costanza-Chock",
      "price": "Paid"
    },
    {
      "title": "The Future of the Responsible Company: What We've Learned from Patagonia's First 50 Years",
      "link": "https://amzn.to/4pYZJwH",
      "desc": "Vincent Stanley, Yvon Chouinard",
      "price": "Paid"
    },
    {
      "title": "Cradle to Cradle: Remaking the Way We Make Things",
      "link": "https://amzn.to/493vjDK",
      "desc": "William McDonough, Michael Braungart",
      "price": "Paid"
    }
  ]
};

const categories = {
  "gen-ai-design": {
    title: "Prompt Engineering & Gen AI",
    desc: "Books exploring how generative AI tools and prompt engineering influence creative workflows and future design practices."
  },
  "branding-logo-identity-design": {
    title: "Brand, Logo & Identity Design",
    desc: "Books that explore how to create memorable brands, strong visual identities, and enduring logo systems."
  },
  "visual-graphic-design": {
    title: "Visual & Graphic Design",
    desc: "Titles covering typography, layout, composition, color, and visual storytelling foundations."
  },
  "ui-digital-product-design": {
    title: "UI & Digital Product Design",
    desc: "Essential reads covering digital product strategy, atomic systems, mobile patterns, and interface design."
  },
  "ux-design-behavior-psychology": {
    title: "UX, Behavior & Psychology",
    desc: "Books analyzing cognitive psychology, behavioral triggers, empathy, and intuitive usability strategies."
  },
  "web-design": {
    title: "Web Design",
    desc: "Resources and guides to bridge the gap between design software and interactive web code."
  },
  "creativity-ideation-design-thinking": {
    title: "Creativity & Design Thinking",
    desc: "Books exploring design thinking methodology, brainstorming, and unlocking creative confidence."
  },
  "drawing-illustration": {
    title: "Drawing & Illustration",
    desc: "Guides and visual catalogs to learn illustration techniques, figure drawing, and iPad design."
  },
  "motion-storytelling": {
    title: "Motion & Storytelling",
    desc: "Titles dissecting key principles of animation, motion graphics, visual story structures, and comic formats."
  },
  "marketing-personal-branding": {
    title: "Marketing & Personal Branding",
    desc: "Books covering audience positioning, StoryBrand message-building, and portfolio presentation skills."
  },
  "advertising-copywriting-communication-design": {
    title: "Advertising & Copywriting",
    desc: "Classic guides to master creative advertising, headline writing, and selling ideas."
  },
  "ethical-inclusive-sustainable-design": {
    title: "Ethical & Inclusive Design",
    desc: "Resources explaining digital accessibility, inclusive design practices, and responsible company ethics."
  }
};

let htmlContent = `
  <p style="font-size: 1.05rem; margin-bottom: 25px; line-height: 1.85;">
    Expanding your design knowledge goes far beyond checking screenshots or browsing short UI tutorials. Deeply understanding psychology, branding structure, atomic systems, and visual history requires sitting down with foundational design texts.
  </p>
  <p style="font-size: 1.05rem; margin-bottom: 35px; line-height: 1.85;">
    Here is a curated shelf of the best <strong>116 books for designers</strong> covering generative AI engineering, visual identity, interaction patterns, UX research, creative storytelling, and design career growth.
  </p>
`;

for (const [key, catInfo] of Object.entries(categories)) {
  const catItems = booksData[key];
  
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
          <p style="font-size: 0.9rem; color: var(--text-2); margin-top: 0; margin-bottom: 16px; line-height: 1.6;">By ${item.desc}</p>
        </div>
        <div>
          <a href="${item.link}" target="_blank" style="display: inline-block; color: #FFFFFF; background-color: #FF6F2C; padding: 7px 16px; border-radius: var(--radius-sm); font-weight: 700; text-decoration: none; font-size: 0.8rem; transition: background 0.2s; box-shadow: 0 2px 4px rgba(255, 111, 44, 0.2); letter-spacing: 0.2px;">Get Book</a>
        </div>
      </div>
    `;
  });
  
  htmlContent += `</div>`;
}

ARTICLE_REGISTRY["books-for-designers"] = {
  id: "books-for-designers",
  subcategoryId: ["learning-education", "basics", "user-research"],
  categoryId: ["tools", "ui-design", "ux-design"],
  title: "Best Books for Designers",
  description: "Curated collection of 116 design books covering AI prompt engineering, visual branding, UX psychology, digital interface patterns, and design thinking.",
  date: "2026-06-17",
  thumbnail: "assets/thumbnails/books-for-designers.png", // empty to use document fallback icon
  youtubeUrl: "", // no video
  tags: ["ui design", "books", "basics", "resources", "tools", "ux design", "branding"],
  content: htmlContent
};
})();
