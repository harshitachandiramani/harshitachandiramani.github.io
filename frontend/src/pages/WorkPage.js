import React, { useState } from 'react';
import { ChevronRight, ExternalLink, Users, Calendar, TrendingUp, Megaphone, Target, BarChart3, Mail, Zap } from 'lucide-react';

const WorkPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'enterprise', name: 'Enterprise Comms' },
    { id: 'events', name: 'Events & Activations' },
    { id: 'social', name: 'Social Media' },
    { id: 'influencer', name: 'Influencer' },
    { id: 'strategy', name: 'Brand Strategy' },
    { id: 'paid', name: 'Paid Social' },
  ];

  const workItems = [
    {
      id: 'enterprise',
      title: 'Enterprise Comms & Thought Leadership',
      icon: <Megaphone size={24} />,
      skills: [
        'External Communications: Brand partnerships (L'Oréal x IBM, Al Futtaim x IBM, Dubai Future Foundation)',
        'Content planning, media interviews, shadow-writing for leaders',
        'Awards submissions',
        'Internal Communications: Amplification, announcements, leadership blogs',
      ],
      brands: ['IBM'],
      images: [
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=400&h=300&fit=crop',
      ],
    },
    {
      id: 'events',
      title: 'Events & Activations',
      icon: <Calendar size={24} />,
      descriptions: [
        "Led IBM's flagship GITEX theatre sessions, delivering 50+ AI narratives over 5 days. Coordinated agencies, speakers, and tech teams to drive strong audience flow, engagement, and data capture.",
        "Delivered across a range of external & internal events, including Dubai AI Week, AI Everything, and MEA training workshops; spanning creative concepts, booth layouts, and session programming.",
        "Part of the event operations team for large-scale experiential concepts, including Akcelo's 'Stranger Things S4' beach pop-up.",
      ],
      brands: ['IBM', 'Akcelo'],
      images: [
        'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=300&fit=crop',
      ],
    },
    {
      id: 'social',
      title: 'Social Media Management',
      icon: <Users size={24} />,
      skills: [
        'Content Strategy & Calendar Management',
        'Collaboration & Leadership',
        'Community Management',
        'Performance Reporting',
        'Hands-on expertise with tools (Business Manager, Sprinklr, Hootsuite)',
      ],
      brands: ['Hadara Magazine', 'IBM', 'PepsiCo Brands'],
      images: [
        'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=400&h=300&fit=crop',
      ],
    },
    {
      id: 'influencer',
      title: 'Influencer Management',
      icon: <Target size={24} />,
      descriptions: [
        "Developed a brand-aligned influencer database for BVLGARI's Ramadan 2025 campaign.",
        "Headed the full influencer lifecycle: from sourcing and negotiating with influencers, to crafting briefs for the Red Rock Deli Mystery Box Challenge.",
        "Managed collaboration with over 100 micro-creators during the holiday season, positioning Simply Snacks as a healthier alternative for festive indulgence.",
      ],
      brands: ['BVLGARI', 'Red Rock Deli', 'Simply Snacks', 'PepsiCo Brands'],
      images: [
        'https://images.unsplash.com/photo-1526510747491-58f928ec870f?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      ],
    },
    {
      id: 'strategy',
      title: 'Brand & Social Strategy',
      icon: <TrendingUp size={24} />,
      caseStudies: [
        {
          name: 'yoursharjah',
          challenge: "Creating a standout city brand is complex. Unlike product brands, cities have multiple strengths, many of which overlap with neighboring cities. The question is: How do you create a cohesive brand that highlights these strengths while standing out under one unified umbrella?",
          insight: "A city's true essence lies in its people, the community, and the emotional stories they share. It's not just about infrastructure or landmarks—it's about the connection between the people and their city.",
          strategy: "To bring this insight to life, we used storytelling at every stage of the campaign—from video production to the captions on social media. The content went beyond the tangible strengths of the city. Each post was designed to tell a story that resonates emotionally, bringing the city's identity to the forefront in a meaningful way.",
          image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=300&fit=crop',
        },
        {
          name: 'redrockdeli_aus',
          challenge: "How can a chip brand transcend from a premium positioning to a luxury brand, and how can this new brand value be communicated authentically on social media?",
          insight: "Food is an experiential product that engages all five senses. It's not just about taste—it's about how the experience resonates with the consumer emotionally and sensorially.",
          strategy: "To elevate the brand's positioning, we moved beyond traditional product placement and focused on creating a sensorial experience through social media. This included developing the brand's Tone of Voice (TOV) to reflect its new luxury identity and crafting content that highlighted the brand's unique experiences.",
          image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=400&h=300&fit=crop',
        },
        {
          name: 'monash_uni',
          challenge: "Monash University was launching on TikTok, but the challenge was how to reinvent their social communications on this young platform while staying true to their legacy brand.",
          insight: "Any successful university channel owns their unique space on social media, beyond the typical education content. Competitors like Deakin own their pop culture space, while UNSW emphasizes wildlife & research.",
          strategy: "Monash University is known for its diverse student body and vibrant campus events. The strategy was to use infotainment content to highlight these strengths, bringing Monash's unique campus life and community to TikTok in a way that resonates with students.",
          image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop',
        },
      ],
      brands: ['yoursharjah', 'PepsiCo Brands', 'Monash University'],
    },
    {
      id: 'paid',
      title: 'Paid Social Management',
      icon: <BarChart3 size={24} />,
      skills: [
        'Experienced in paid social media strategies (budgeting, interest targeting, optimization on META & LinkedIn)',
        'Proficient in tools (Business Manager)',
      ],
      brands: ['Royal Australian Mint', 'AEC Australian Electoral Commission'],
      images: [
        'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop',
      ],
    },
  ];

  const additionalWork = [
    {
      title: 'High-Performance Examples',
      items: [
        { account: '@yoursharjah', text: "Rather than focusing solely on showcasing the city's main tourist attractions, posts highlighting the untold stories of Sharjah's people performed exceptionally well organically compared to paid campaigns.", likes: '8,321' },
        { account: '@redrockdeli_aus', text: "The campaign strategy was successful through a balanced mix of organic and paid content, generating significant engagement and conversation on each post.", likes: '9M views' },
        { account: '@monash_uni', text: "Combining platform trends with campus focused, student life content proved to be the most hit. The new account consistently outperformed benchmark KPIs.", likes: '7,469' },
      ],
    },
    {
      title: 'Additional Examples',
      items: [
        { account: '@smithschipsaus', text: "Return of Gobbledok strategy on social proved a lot of buzz, with launch videos garnering on average a million views." },
        { account: '@zayedu', text: "Assisted in live event video coverage, by leading the production team to create polished reels with a same-day turnaround." },
        { account: 'Own Account', text: "Achieved high organic views and video results on my own Instagram page within a month of launch." },
      ],
    },
  ];

  const trendsAndPitch = [
    {
      title: 'Pitch Deck Examples',
      skills: ['Market Research Expertise (4Cs, Persona Development, ATL/BTL audits, Landscape Analysis)', 'Familiarity with Industry Tools (Roy Morgan)'],
      brands: ['McCafe', 'YouTube'],
    },
    {
      title: 'Trends Forecaster',
      skills: ['Round the clock expertise (trend reports on marketing, luxury, social media; bi-weekly newsletter)', 'Tools expertise (Mailchimp, Marketo, DAM & Scala)'],
    },
  ];

  const filteredWork = activeCategory === 'all' 
    ? workItems 
    : workItems.filter(item => item.id === activeCategory);

  return (
    <div 
      className="min-h-screen pt-20"
      style={{ backgroundColor: '#F5EBD7' }}
      data-testid="work-page"
    >
      <div className="container-portfolio py-12 md:py-20">
        {/* Section Title */}
        <h1 
          className="font-sans text-4xl md:text-5xl font-bold mb-4 fade-in"
          style={{ color: '#3D3A36' }}
          data-testid="work-title"
        >
          The Work
        </h1>
        <p 
          className="text-lg mb-8"
          style={{ color: '#6B6560' }}
        >
          A collection of projects across enterprise communications, events, social media, and brand strategy.
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-12" data-testid="category-filter">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              data-testid={`filter-${cat.id}`}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'text-white'
                  : 'hover:opacity-80'
              }`}
              style={{
                backgroundColor: activeCategory === cat.id ? '#4A4642' : '#E5DED0',
                color: activeCategory === cat.id ? 'white' : '#6B6560',
              }}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Work Items */}
        <div className="space-y-16">
          {filteredWork.map((item, index) => (
            <div 
              key={item.id} 
              className="fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              data-testid={`work-item-${item.id}`}
            >
              {/* Work Item Header */}
              <div className="flex items-center gap-3 mb-6">
                <div 
                  className="p-3 rounded-lg"
                  style={{ backgroundColor: '#E5DED0', color: '#4A4642' }}
                >
                  {item.icon}
                </div>
                <h2 
                  className="text-2xl md:text-3xl font-bold"
                  style={{ color: '#3D3A36' }}
                >
                  {item.title}
                </h2>
              </div>

              {/* Skills List */}
              {item.skills && (
                <div className="mb-6">
                  <h3 
                    className="text-sm font-bold uppercase tracking-wider mb-3"
                    style={{ color: '#3D3A36' }}
                  >
                    Core Skills:
                  </h3>
                  <ul className="space-y-2">
                    {item.skills.map((skill, i) => (
                      <li 
                        key={i}
                        className="flex items-start gap-2 text-sm"
                        style={{ color: '#6B6560' }}
                      >
                        <ChevronRight size={16} className="flex-shrink-0 mt-0.5" style={{ color: '#4A4642' }} />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Descriptions */}
              {item.descriptions && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  {item.descriptions.map((desc, i) => (
                    <div key={i} className="card">
                      <p className="text-sm leading-relaxed" style={{ color: '#6B6560' }}>
                        {desc}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Case Studies */}
              {item.caseStudies && (
                <div className="space-y-8">
                  {item.caseStudies.map((study, i) => (
                    <div 
                      key={i}
                      className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 rounded-lg"
                      style={{ backgroundColor: '#FAF5EB' }}
                    >
                      <div>
                        <h3 
                          className="text-xl font-bold mb-4"
                          style={{ color: '#3D3A36' }}
                        >
                          @{study.name}
                        </h3>
                        
                        <div className="space-y-4">
                          <div>
                            <p className="case-study-label">Challenge</p>
                            <p className="case-study-text">{study.challenge}</p>
                          </div>
                          <div>
                            <p className="case-study-label">Insight</p>
                            <p className="case-study-text">{study.insight}</p>
                          </div>
                          <div>
                            <p className="case-study-label">Strategy</p>
                            <p className="case-study-text">{study.strategy}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-center">
                        <div className="w-full max-w-sm rounded-xl overflow-hidden shadow-lg img-hover">
                          <img
                            src={study.image}
                            alt={study.name}
                            className="w-full h-64 object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Images Grid */}
              {item.images && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  {item.images.map((img, i) => (
                    <div key={i} className="rounded-lg overflow-hidden shadow-lg img-hover">
                      <img
                        src={img}
                        alt={`${item.title} example ${i + 1}`}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* Brands */}
              {item.brands && (
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="text-sm font-medium" style={{ color: '#8A847D' }}>Work Example:</span>
                  {item.brands.map((brand, i) => (
                    <span 
                      key={i}
                      className="work-tag"
                    >
                      {brand}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Work Sections */}
        {activeCategory === 'all' && (
          <>
            <div className="mt-20 space-y-12">
              {additionalWork.map((section, sIndex) => (
                <div key={sIndex}>
                  <h2 
                    className="text-2xl md:text-3xl font-bold mb-6"
                    style={{ color: '#3D3A36' }}
                  >
                    {section.title}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {section.items.map((item, i) => (
                      <div key={i} className="card">
                        <p 
                          className="font-semibold mb-2"
                          style={{ color: '#3D3A36' }}
                        >
                          {item.account}
                        </p>
                        <p 
                          className="text-sm leading-relaxed mb-2"
                          style={{ color: '#6B6560' }}
                        >
                          {item.text}
                        </p>
                        {item.likes && (
                          <p 
                            className="text-sm font-semibold"
                            style={{ color: '#4A4642' }}
                          >
                            {item.likes} likes
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Pitch Decks & Trends */}
            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
              {trendsAndPitch.map((section, i) => (
                <div 
                  key={i}
                  className="p-6 rounded-lg"
                  style={{ backgroundColor: '#FAF5EB' }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    {i === 0 ? <Zap size={24} style={{ color: '#4A4642' }} /> : <Mail size={24} style={{ color: '#4A4642' }} />}
                    <h3 
                      className="text-xl font-bold"
                      style={{ color: '#3D3A36' }}
                    >
                      {section.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {section.skills.map((skill, j) => (
                      <li 
                        key={j}
                        className="flex items-start gap-2 text-sm"
                        style={{ color: '#6B6560' }}
                      >
                        <ChevronRight size={16} className="flex-shrink-0 mt-0.5" style={{ color: '#4A4642' }} />
                        {skill}
                      </li>
                    ))}
                  </ul>
                  {section.brands && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {section.brands.map((brand, k) => (
                        <span key={k} className="work-tag">{brand}</span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default WorkPage;
