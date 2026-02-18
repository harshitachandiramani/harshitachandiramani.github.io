import React from 'react';
import { Check, Award } from 'lucide-react';

const WhyMePage = () => {
  const strengths = [
    'Strategy-to-execution operator',
    'Fluent across HQ, retail, agencies & partners',
    'Commercial + data-driven',
    'Multi-sector Experience',
    'International Perspective',
  ];

  return (
    <div 
      className="min-h-screen pt-20"
      style={{ backgroundColor: '#F5EBD7' }}
      data-testid="why-me-page"
    >
      <div className="container-portfolio py-12 md:py-20">
        {/* Section Title */}
        <h1 
          className="font-sans text-3xl md:text-5xl lg:text-6xl font-extrabold mb-12 fade-in"
          style={{ color: '#3D3A36' }}
          data-testid="why-me-title"
        >
          But why should you care?
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Strengths */}
          <div className="slide-in-left">
            <ul className="space-y-4">
              {strengths.map((strength, index) => (
                <li 
                  key={index}
                  className="flex items-center gap-3 text-lg"
                  style={{ color: '#6B6560' }}
                  data-testid={`strength-${index}`}
                >
                  <Check 
                    size={20} 
                    className="flex-shrink-0"
                    style={{ color: '#4A4642' }}
                  />
                  {strength}
                </li>
              ))}
            </ul>

            {/* Award Image */}
            <div className="mt-12">
              <div 
                className="rounded-lg overflow-hidden shadow-lg img-hover max-w-sm"
                style={{ backgroundColor: '#E8DCC8' }}
              >
                <img
                  src="https://images.unsplash.com/photo-1579208575657-c595a05383b7?w=400&h=300&fit=crop"
                  alt="Award Certificate"
                  className="w-full h-auto"
                  data-testid="award-image"
                />
                <div className="p-4 flex items-center gap-2">
                  <Award size={18} style={{ color: '#4A4642' }} />
                  <span className="text-sm font-medium" style={{ color: '#6B6560' }}>
                    Miami Ad School 2012
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Brand Collage */}
          <div className="slide-in-right">
            <div className="grid grid-cols-2 gap-4">
              {/* Brand Images */}
              <div 
                className="rounded-lg overflow-hidden shadow-lg img-hover"
                style={{ backgroundColor: '#E8DCC8' }}
              >
                <img
                  src="https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=300&h=200&fit=crop"
                  alt="Chocolate Brand - GB"
                  className="w-full h-32 object-cover"
                />
                <div className="p-2 text-center">
                  <span className="text-sm font-semibold" style={{ color: '#3D3A36' }}>GB</span>
                </div>
              </div>

              <div 
                className="rounded-lg overflow-hidden shadow-lg img-hover"
                style={{ backgroundColor: '#E8DCC8' }}
              >
                <img
                  src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=300&h=200&fit=crop"
                  alt="PEPSI Brand"
                  className="w-full h-32 object-cover"
                />
                <div className="p-2 text-center">
                  <span className="text-sm font-semibold" style={{ color: '#3D3A36' }}>PEPSI</span>
                </div>
              </div>

              <div 
                className="rounded-lg overflow-hidden shadow-lg img-hover"
                style={{ backgroundColor: '#E8DCC8' }}
              >
                <img
                  src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=200&fit=crop"
                  alt="Luxury Jewelry - BVLGARI"
                  className="w-full h-32 object-cover"
                />
                <div className="p-2 text-center">
                  <span className="text-sm font-semibold" style={{ color: '#3D3A36' }}>BVLGARI</span>
                </div>
              </div>

              <div 
                className="rounded-lg overflow-hidden shadow-lg img-hover"
                style={{ backgroundColor: '#E8DCC8' }}
              >
                <img
                  src="https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=300&h=200&fit=crop"
                  alt="Miss L by Lazurd"
                  className="w-full h-32 object-cover"
                />
                <div className="p-2 text-center">
                  <span className="text-sm font-semibold" style={{ color: '#3D3A36' }}>Miss L BY LAZURD</span>
                </div>
              </div>
            </div>

            {/* Social Media Mockups */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-3 shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500"></div>
                  <div>
                    <p className="text-xs font-semibold" style={{ color: '#3D3A36' }}>redrockdeli_aus</p>
                    <p className="text-xs" style={{ color: '#8A847D' }}>Food & Drink</p>
                  </div>
                </div>
                <div className="flex gap-4 text-xs" style={{ color: '#6B6560' }}>
                  <span><strong>15.2K</strong> followers</span>
                </div>
              </div>

              <div className="bg-white rounded-xl p-3 shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500"></div>
                  <div>
                    <p className="text-xs font-semibold" style={{ color: '#3D3A36' }}>yoursharjah</p>
                    <p className="text-xs" style={{ color: '#8A847D' }}>Your Gateway to Sharjah</p>
                  </div>
                </div>
                <div className="flex gap-4 text-xs" style={{ color: '#6B6560' }}>
                  <span><strong>89.5K</strong> followers</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page Number */}
        <div 
          className="text-right mt-16 text-sm"
          style={{ color: '#8A847D' }}
        >
          Page | 03
        </div>
      </div>
    </div>
  );
};

export default WhyMePage;
