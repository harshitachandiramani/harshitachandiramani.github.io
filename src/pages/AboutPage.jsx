import React from 'react';

const AboutPage = () => {
  return (
    <div 
      className="min-h-screen pt-20"
      style={{ backgroundColor: '#F5EBD7' }}
      data-testid="about-page"
    >
      <div className="container-portfolio py-12 md:py-20">
        {/* Section Title */}
        <h1 
          className="font-sans text-4xl md:text-5xl font-bold mb-12 fade-in"
          style={{ color: '#3D3A36' }}
          data-testid="about-title"
        >
          ABOUT ME
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text Content */}
          <div className="slide-in-left">
            <p 
              className="text-lg leading-relaxed mb-6"
              style={{ color: '#6B6560' }}
              data-testid="about-text"
            >
              A financial analyst turned marketer, I found my <span className="font-semibold italic">ikigai</span> in reading between the lines of consumer behaviour. What started with numbers evolved into storytelling; with global exposure across UAE & Australia.
            </p>
            <p 
              className="text-lg leading-relaxed mb-6"
              style={{ color: '#6B6560' }}
            >
              From brand experiential to social & influencer-led work for brands like <span className="font-semibold">PepsiCo</span> and <span className="font-semibold">BVLGARI</span>. Today, I bring that same lens to regional events and communications at <span className="font-semibold">IBM Middle East</span>.
            </p>
          </div>

          {/* Right - Ikigai Diagram */}
          <div className="slide-in-right flex justify-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96" data-testid="ikigai-diagram">
              {/* Outer Circles */}
              <div 
                className="absolute w-40 h-40 md:w-48 md:h-48 rounded-full border-2 border-dashed"
                style={{ 
                  top: '0', 
                  left: '50%', 
                  transform: 'translateX(-50%)',
                  borderColor: '#7EC8E3'
                }}
              >
                <span 
                  className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-sm font-semibold uppercase tracking-wider"
                  style={{ color: '#6B6560' }}
                >
                  Passion
                </span>
              </div>
              
              <div 
                className="absolute w-40 h-40 md:w-48 md:h-48 rounded-full border-2 border-dashed"
                style={{ 
                  bottom: '0', 
                  left: '50%', 
                  transform: 'translateX(-50%)',
                  borderColor: '#F8B4B4'
                }}
              >
                <span 
                  className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-sm font-semibold uppercase tracking-wider"
                  style={{ color: '#6B6560' }}
                >
                  Impact
                </span>
              </div>
              
              <div 
                className="absolute w-40 h-40 md:w-48 md:h-48 rounded-full border-2 border-dashed"
                style={{ 
                  top: '50%', 
                  left: '0', 
                  transform: 'translateY(-50%)',
                  borderColor: '#B5E48C'
                }}
              >
                <span 
                  className="absolute top-1/2 -left-12 md:-left-14 transform -translate-y-1/2 -rotate-90 text-sm font-semibold uppercase tracking-wider"
                  style={{ color: '#6B6560' }}
                >
                  Skills
                </span>
              </div>
              
              <div 
                className="absolute w-40 h-40 md:w-48 md:h-48 rounded-full border-2 border-dashed"
                style={{ 
                  top: '50%', 
                  right: '0', 
                  transform: 'translateY(-50%)',
                  borderColor: '#FFE066'
                }}
              >
                <span 
                  className="absolute top-1/2 -right-12 md:-right-14 transform -translate-y-1/2 rotate-90 text-sm font-semibold uppercase tracking-wider"
                  style={{ color: '#6B6560' }}
                >
                  Career
                </span>
              </div>

              {/* Center Star/Ikigai */}
              <div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <polygon 
                    points="50,5 61,40 95,40 67,62 78,97 50,75 22,97 33,62 5,40 39,40" 
                    fill="#FFD93D"
                    stroke="#E6B800"
                    strokeWidth="2"
                  />
                </svg>
                <span 
                  className="absolute text-xs md:text-sm font-bold uppercase tracking-wider"
                  style={{ color: '#3D3A36' }}
                >
                  IKIGAI
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Page Number */}
        <div 
          className="text-right mt-16 text-sm"
          style={{ color: '#8A847D' }}
        >
          Page | 02
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
