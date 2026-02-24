import React, { useState } from 'react';
import { ChevronRight, ExternalLink, Users, Calendar, TrendingUp, Megaphone, Target, BarChart3, Mail, Zap } from 'lucide-react';
import { siteContent } from '../content';

const { work } = siteContent;

const ICONS = { Megaphone, Calendar, Users, Target, TrendingUp, BarChart3, Zap, Mail, ExternalLink };

const WorkPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredWork = activeCategory === 'all'
    ? work.workItems
    : work.workItems.filter(item => item.id === activeCategory);

  return (
    <div
      className="min-h-screen pt-20"
      style={{ backgroundColor: '#F5EBD7' }}
      data-testid="work-page"
    >
      <div className="container-portfolio py-12 md:py-20">
        <h1
          className="font-sans text-4xl md:text-5xl font-bold mb-4 fade-in"
          style={{ color: '#3D3A36' }}
          data-testid="work-title"
        >
          {work.title}
        </h1>
        <p className="text-lg mb-8" style={{ color: '#6B6560' }}>
          {work.subtitle}
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-12" data-testid="category-filter">
          {work.categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              data-testid={`filter-${cat.id}`}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.id ? 'text-white' : 'hover:opacity-80'
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
          {filteredWork.map((item, index) => {
            const IconComponent = ICONS[item.icon];
            return (
              <div
                key={item.id}
                className="fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                data-testid={`work-item-${item.id}`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-lg" style={{ backgroundColor: '#E5DED0', color: '#4A4642' }}>
                    {IconComponent && <IconComponent size={24} />}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold" style={{ color: '#3D3A36' }}>
                    {item.title}
                  </h2>
                </div>

                {/* Skills List */}
                {item.skills && (
                  <div className="mb-6">
                    <h3 className="text-sm font-bold uppercase tracking-wider mb-3" style={{ color: '#3D3A36' }}>
                      Core Skills:
                    </h3>
                    <ul className="space-y-2">
                      {item.skills.map((skill, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm" style={{ color: '#6B6560' }}>
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
                        <p className="text-sm leading-relaxed" style={{ color: '#6B6560' }}>{desc}</p>
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
                          <h3 className="text-xl font-bold mb-4" style={{ color: '#3D3A36' }}>
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
                          src={img.src}
                          alt={img.alt}
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
                      <span key={i} className="work-tag">{brand}</span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional Work Sections */}
        {activeCategory === 'all' && (
          <>
            <div className="mt-20 space-y-12">
              {work.additionalWork.map((section, sIndex) => (
                <div key={sIndex}>
                  <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#3D3A36' }}>
                    {section.title}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {section.items.map((item, i) => (
                      <div key={i} className="card">
                        <p className="font-semibold mb-2" style={{ color: '#3D3A36' }}>{item.account}</p>
                        <p className="text-sm leading-relaxed mb-2" style={{ color: '#6B6560' }}>{item.text}</p>
                        {item.metric && (
                          <p className="text-sm font-semibold" style={{ color: '#4A4642' }}>{item.metric}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Pitch Decks & Trends */}
            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
              {work.trendsAndPitch.map((section, i) => {
                const IconComponent = ICONS[section.icon];
                return (
                  <div key={i} className="p-6 rounded-lg" style={{ backgroundColor: '#FAF5EB' }}>
                    <div className="flex items-center gap-3 mb-4">
                      {IconComponent && <IconComponent size={24} style={{ color: '#4A4642' }} />}
                      <h3 className="text-xl font-bold" style={{ color: '#3D3A36' }}>{section.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {section.skills.map((skill, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm" style={{ color: '#6B6560' }}>
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
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default WorkPage;
