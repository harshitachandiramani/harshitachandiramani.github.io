// =============================================================================
// WEBSITE CONTENT — Edit this file to update the website
// =============================================================================
//
// HOW TO USE:
//   - Change any text value between the quotes " " to update that text on the site.
//   - For images: place your image file in the "public/images/" folder,
//     then update the filename here (e.g. "/images/my-photo.jpg").
//   - After editing, the website needs to be rebuilt to show changes.
//     Run: yarn build
//
// =============================================================================

export const siteContent = {

  // ---------------------------------------------------------------------------
  // SITE-WIDE
  // ---------------------------------------------------------------------------
  name: 'Harshita Chandiramani',


  // ---------------------------------------------------------------------------
  // NAVIGATION
  // ---------------------------------------------------------------------------
  nav: {
    links: [
      { name: 'About Me', path: '/about' },
      { name: 'Why Me',   path: '/why-me' },
      { name: 'The Work', path: '/work' },
      { name: 'Contact',  path: '/contact' },
    ],
  },


  // ---------------------------------------------------------------------------
  // HOME PAGE
  // ---------------------------------------------------------------------------
  home: {
    title: 'My Portfolio',
    bio: "Hi! I'm Harshita, a Dubai-based brand & marketing executive working across luxury, FMCG, and tech brands.",
    ctaButton: 'View Selected Work',

    // Image: replace hero.jpg in public/images/ with your own photo
    heroImage: '/images/hero.jpg',
    heroImageAlt: 'Harshita Chandiramani',
  },


  // ---------------------------------------------------------------------------
  // ABOUT PAGE
  // ---------------------------------------------------------------------------
  about: {
    title: 'ABOUT ME',
    paragraphs: [
      // Paragraph 1 — the word "ikigai" is rendered in italic; keep it as-is or change it
      { text: 'A financial analyst turned marketer, I found my {ikigai} in reading between the lines of consumer behaviour. What started with numbers evolved into storytelling; with global exposure across UAE & Australia.', italic: 'ikigai' },
      // Paragraph 2 — bold brand names are listed in "boldWords"
      { text: 'From brand experiential to social & influencer-led work for brands like {PepsiCo} and {BVLGARI}. Today, I bring that same lens to regional events and communications at {IBM Middle East}.', boldWords: ['PepsiCo', 'BVLGARI', 'IBM Middle East'] },
    ],
    pageNumber: 'Page | 02',

    // Ikigai diagram labels (the four circles)
    ikigai: {
      top:    'Passion',
      bottom: 'Impact',
      left:   'Skills',
      right:  'Career',
      center: 'IKIGAI',
    },
  },


  // ---------------------------------------------------------------------------
  // WHY ME PAGE
  // ---------------------------------------------------------------------------
  whyMe: {
    title: 'But why should you care?',
    pageNumber: 'Page | 03',

    strengths: [
      'Strategy-to-execution operator',
      'Fluent across HQ, retail, agencies & partners',
      'Commercial + data-driven',
      'Multi-sector Experience',
      'International Perspective',
    ],

    award: {
      // Image: replace award.jpg in public/images/ with your certificate/award photo
      image: '/images/award.jpg',
      imageAlt: 'Award Certificate',
      label: 'Miami Ad School 2012',
    },

    // Brand grid — 4 images shown in a 2x2 grid
    // Replace image filenames in public/images/ with your own brand photos
    brands: [
      { name: 'GB',              image: '/images/brand-gb.jpg',     imageAlt: 'Chocolate Brand - GB' },
      { name: 'PEPSI',           image: '/images/brand-pepsi.jpg',  imageAlt: 'PEPSI Brand' },
      { name: 'BVLGARI',         image: '/images/brand-bvlgari.jpg', imageAlt: 'Luxury Jewelry - BVLGARI' },
      { name: 'Miss L BY LAZURD', image: '/images/brand-missl.jpg', imageAlt: 'Miss L by Lazurd' },
    ],

    // Social media stat cards shown below the brand grid
    socialCards: [
      { username: 'redrockdeli_aus', category: 'Food & Drink',           followers: '15.2K' },
      { username: 'yoursharjah',     category: 'Your Gateway to Sharjah', followers: '89.5K' },
    ],
  },


  // ---------------------------------------------------------------------------
  // WORK PAGE
  // ---------------------------------------------------------------------------
  work: {
    title: 'The Work',
    subtitle: 'A collection of projects across enterprise communications, events, social media, and brand strategy.',
    pageNumber: 'Page | 04',

    // Filter buttons at the top of the Work page
    categories: [
      { id: 'all',        name: 'All Work' },
      { id: 'enterprise', name: 'Enterprise Comms' },
      { id: 'events',     name: 'Events & Activations' },
      { id: 'social',     name: 'Social Media' },
      { id: 'influencer', name: 'Influencer' },
      { id: 'strategy',   name: 'Brand Strategy' },
      { id: 'paid',       name: 'Paid Social' },
    ],

    workItems: [
      {
        id: 'enterprise',
        title: 'Enterprise Comms & Thought Leadership',
        icon: 'Megaphone',
        skills: [
          "External Communications: Brand partnerships (L'Oreal x IBM, Al Futtaim x IBM, Dubai Future Foundation)",
          'Content planning, media interviews, shadow-writing for leaders',
          'Awards submissions',
          'Internal Communications: Amplification, announcements, leadership blogs',
        ],
        brands: ['IBM'],
        images: [
          { src: '/images/work-enterprise-1.jpg', alt: 'Enterprise Communications example 1' },
          { src: '/images/work-enterprise-2.jpg', alt: 'Enterprise Communications example 2' },
        ],
      },
      {
        id: 'events',
        title: 'Events & Activations',
        icon: 'Calendar',
        descriptions: [
          "Led IBM's flagship GITEX theatre sessions, delivering 50+ AI narratives over 5 days. Coordinated agencies, speakers, and tech teams to drive strong audience flow, engagement, and data capture.",
          "Delivered across a range of external & internal events, including Dubai AI Week, AI Everything, and MEA training workshops; spanning creative concepts, booth layouts, and session programming.",
          "Part of the event operations team for large-scale experiential concepts, including Akcelo's 'Stranger Things S4' beach pop-up.",
        ],
        brands: ['IBM', 'Akcelo'],
        images: [
          { src: '/images/work-events-1.jpg', alt: 'Events & Activations example 1' },
          { src: '/images/work-events-2.jpg', alt: 'Events & Activations example 2' },
          { src: '/images/work-events-3.jpg', alt: 'Events & Activations example 3' },
        ],
      },
      {
        id: 'social',
        title: 'Social Media Management',
        icon: 'Users',
        skills: [
          'Content Strategy & Calendar Management',
          'Collaboration & Leadership',
          'Community Management',
          'Performance Reporting',
          'Hands-on expertise with tools (Business Manager, Sprinklr, Hootsuite)',
        ],
        brands: ['Hadara Magazine', 'IBM', 'PepsiCo Brands'],
        images: [
          { src: '/images/work-social-1.jpg', alt: 'Social Media Management example 1' },
          { src: '/images/work-social-2.jpg', alt: 'Social Media Management example 2' },
          { src: '/images/work-social-3.jpg', alt: 'Social Media Management example 3' },
        ],
      },
      {
        id: 'influencer',
        title: 'Influencer Management',
        icon: 'Target',
        descriptions: [
          "Developed a brand-aligned influencer database for BVLGARI's Ramadan 2025 campaign.",
          "Headed the full influencer lifecycle: from sourcing and negotiating with influencers, to crafting briefs for the Red Rock Deli Mystery Box Challenge.",
          "Managed collaboration with over 100 micro-creators during the holiday season, positioning Simply Snacks as a healthier alternative for festive indulgence.",
        ],
        brands: ['BVLGARI', 'Red Rock Deli', 'Simply Snacks', 'PepsiCo Brands'],
        images: [
          { src: '/images/work-influencer-1.jpg', alt: 'Influencer Management example 1' },
          { src: '/images/work-influencer-2.jpg', alt: 'Influencer Management example 2' },
          { src: '/images/work-influencer-3.jpg', alt: 'Influencer Management example 3' },
        ],
      },
      {
        id: 'strategy',
        title: 'Brand & Social Strategy',
        icon: 'TrendingUp',
        brands: ['yoursharjah', 'PepsiCo Brands', 'Monash University'],
        caseStudies: [
          {
            name: 'yoursharjah',
            challenge: "Creating a standout city brand is complex. Unlike product brands, cities have multiple strengths, many of which overlap with neighboring cities. The question is: How do you create a cohesive brand that highlights these strengths while standing out under one unified umbrella?",
            insight: "A city's true essence lies in its people, the community, and the emotional stories they share. It's not just about infrastructure or landmarks—it's about the connection between the people and their city.",
            strategy: "To bring this insight to life, we used storytelling at every stage of the campaign—from video production to the captions on social media. The content went beyond the tangible strengths of the city. Each post was designed to tell a story that resonates emotionally, bringing the city's identity to the forefront in a meaningful way.",
            image: '/images/work-strategy-yoursharjah.jpg',
          },
          {
            name: 'redrockdeli_aus',
            challenge: "How can a chip brand transcend from a premium positioning to a luxury brand, and how can this new brand value be communicated authentically on social media?",
            insight: "Food is an experiential product that engages all five senses. It's not just about taste—it's about how the experience resonates with the consumer emotionally and sensorially.",
            strategy: "To elevate the brand's positioning, we moved beyond traditional product placement and focused on creating a sensorial experience through social media. This included developing the brand's Tone of Voice (TOV) to reflect its new luxury identity and crafting content that highlighted the brand's unique experiences.",
            image: '/images/work-strategy-redrockdeli.jpg',
          },
          {
            name: 'monash_uni',
            challenge: "Monash University was launching on TikTok, but the challenge was how to reinvent their social communications on this young platform while staying true to their legacy brand.",
            insight: "Any successful university channel owns their unique space on social media, beyond the typical education content. Competitors like Deakin own their pop culture space, while UNSW emphasizes wildlife & research.",
            strategy: "Monash University is known for its diverse student body and vibrant campus events. The strategy was to use infotainment content to highlight these strengths, bringing Monash's unique campus life and community to TikTok in a way that resonates with students.",
            image: '/images/work-strategy-monash.jpg',
          },
        ],
      },
      {
        id: 'paid',
        title: 'Paid Social Management',
        icon: 'BarChart3',
        skills: [
          'Experienced in paid social media strategies (budgeting, interest targeting, optimization on META & LinkedIn)',
          'Proficient in tools (Business Manager)',
        ],
        brands: ['Royal Australian Mint', 'AEC Australian Electoral Commission'],
        images: [
          { src: '/images/work-paid-1.jpg', alt: 'Paid Social Management example 1' },
          { src: '/images/work-paid-2.jpg', alt: 'Paid Social Management example 2' },
        ],
      },
    ],

    // "High-Performance Examples" and "Additional Examples" sections
    additionalWork: [
      {
        title: 'High-Performance Examples',
        items: [
          { account: '@yoursharjah',     text: "Rather than focusing solely on showcasing the city's main tourist attractions, posts highlighting the untold stories of Sharjah's people performed exceptionally well organically compared to paid campaigns.", metric: '8,321 likes' },
          { account: '@redrockdeli_aus', text: "The campaign strategy was successful through a balanced mix of organic and paid content, generating significant engagement and conversation on each post.", metric: '9M views' },
          { account: '@monash_uni',      text: "Combining platform trends with campus focused, student life content proved to be the most hit. The new account consistently outperformed benchmark KPIs.", metric: '7,469 likes' },
        ],
      },
      {
        title: 'Additional Examples',
        items: [
          { account: '@smithschipsaus', text: "Return of Gobbledok strategy on social proved a lot of buzz, with launch videos garnering on average a million views." },
          { account: '@zayedu',         text: "Assisted in live event video coverage, by leading the production team to create polished reels with a same-day turnaround." },
          { account: 'Own Account',     text: "Achieved high organic views and video results on my own Instagram page within a month of launch." },
        ],
      },
    ],

    // Bottom two cards: Pitch Decks & Trends Forecaster
    trendsAndPitch: [
      {
        title: 'Pitch Deck Examples',
        icon: 'Zap',
        skills: [
          'Market Research Expertise (4Cs, Persona Development, ATL/BTL audits, Landscape Analysis)',
          'Familiarity with Industry Tools (Roy Morgan)',
        ],
        brands: ['McCafe', 'YouTube'],
      },
      {
        title: 'Trends Forecaster',
        icon: 'Mail',
        skills: [
          'Round the clock expertise (trend reports on marketing, luxury, social media; bi-weekly newsletter)',
          'Tools expertise (Mailchimp, Marketo, DAM & Scala)',
        ],
      },
    ],
  },


  // ---------------------------------------------------------------------------
  // CONTACT PAGE
  // ---------------------------------------------------------------------------
  contact: {
    title: 'Contact',
    ctaText: "Let's create something amazing together!",
    ctaButton: 'Send an Email',
    pageNumber: 'Page | 16',

    phone:           '+971552061234',
    email:           'harshita.c@hotmail.com',
    linkedin:        'https://www.linkedin.com/in/harshitachandiramani',
    linkedinDisplay: 'linkedin.com/harshitachandiramani',
    location:        'Dubai',
  },
};
