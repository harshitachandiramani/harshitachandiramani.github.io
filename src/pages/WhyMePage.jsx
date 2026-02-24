import React from 'react';
import { Check, Award } from 'lucide-react';
import { siteContent } from '../content';

const { whyMe } = siteContent;

const WhyMePage = () => {
  return (
    <div
      className="min-h-screen pt-20"
      style={{ backgroundColor: '#F5EBD7' }}
      data-testid="why-me-page"
    >
      <div className="container-portfolio py-12 md:py-20">
        <h1
          className="font-sans text-3xl md:text-5xl lg:text-6xl font-extrabold mb-12 fade-in"
          style={{ color: '#3D3A36' }}
          data-testid="why-me-title"
        >
          {whyMe.title}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Strengths */}
          <div className="slide-in-left">
            <ul className="space-y-4">
              {whyMe.strengths.map((strength, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-lg"
                  style={{ color: '#6B6560' }}
                  data-testid={`strength-${index}`}
                >
                  <Check size={20} className="flex-shrink-0" style={{ color: '#4A4642' }} />
                  {strength}
                </li>
              ))}
            </ul>

            <div className="mt-12">
              <div
                className="rounded-lg overflow-hidden shadow-lg img-hover max-w-sm"
                style={{ backgroundColor: '#E8DCC8' }}
              >
                <img
                  src={whyMe.award.image}
                  alt={whyMe.award.imageAlt}
                  className="w-full h-auto"
                  data-testid="award-image"
                />
                <div className="p-4 flex items-center gap-2">
                  <Award size={18} style={{ color: '#4A4642' }} />
                  <span className="text-sm font-medium" style={{ color: '#6B6560' }}>
                    {whyMe.award.label}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Brand Collage */}
          <div className="slide-in-right">
            <div className="grid grid-cols-2 gap-4">
              {whyMe.brands.map((brand, index) => (
                <div
                  key={index}
                  className="rounded-lg overflow-hidden shadow-lg img-hover"
                  style={{ backgroundColor: '#E8DCC8' }}
                >
                  <img
                    src={brand.image}
                    alt={brand.imageAlt}
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-2 text-center">
                    <span className="text-sm font-semibold" style={{ color: '#3D3A36' }}>{brand.name}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media Stat Cards */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              {whyMe.socialCards.map((card, index) => (
                <div key={index} className="bg-white rounded-xl p-3 shadow-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${index === 0 ? 'from-purple-500 to-pink-500' : 'from-amber-400 to-orange-500'}`} />
                    <div>
                      <p className="text-xs font-semibold" style={{ color: '#3D3A36' }}>{card.username}</p>
                      <p className="text-xs" style={{ color: '#8A847D' }}>{card.category}</p>
                    </div>
                  </div>
                  <div className="flex gap-4 text-xs" style={{ color: '#6B6560' }}>
                    <span><strong>{card.followers}</strong> followers</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-right mt-16 text-sm" style={{ color: '#8A847D' }}>
          {whyMe.pageNumber}
        </div>
      </div>
    </div>
  );
};

export default WhyMePage;
