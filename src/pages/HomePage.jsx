import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { siteContent } from '../content';

const { home } = siteContent;

const HomePage = () => {
  return (
    <div
      className="min-h-screen pt-20"
      style={{ backgroundColor: '#F5EBD7' }}
      data-testid="home-page"
    >
      <div className="container-portfolio py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Left - Image */}
          <div className="order-2 lg:order-1 fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div
                className="w-full max-w-md mx-auto aspect-[3/4] rounded-lg overflow-hidden shadow-xl"
                style={{ backgroundColor: '#E8DCC8' }}
              >
                <img
                  src={home.heroImage}
                  alt={home.heroImageAlt}
                  className="w-full h-full object-cover"
                  data-testid="hero-image"
                />
              </div>
              <div
                className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full opacity-30"
                style={{ backgroundColor: '#C4B59D' }}
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h1
              className="font-sans text-5xl md:text-6xl lg:text-7xl font-bold mb-6 fade-in"
              style={{ color: '#3D3A36' }}
              data-testid="hero-title"
            >
              {home.title}
            </h1>

            <p
              className="text-lg md:text-xl mb-8 leading-relaxed fade-in"
              style={{ color: '#6B6560', animationDelay: '0.3s' }}
              data-testid="hero-bio"
            >
              {home.bio}
            </p>

            <Link
              to="/work"
              className="inline-flex items-center gap-2 px-8 py-4 rounded font-medium text-white transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg fade-in"
              style={{ backgroundColor: '#4A4642', animationDelay: '0.4s' }}
              data-testid="view-work-btn"
            >
              {home.ctaButton}
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
