import React from 'react';
import { siteContent } from '../content';

const { about } = siteContent;

// Renders a paragraph where {word} tokens become bold or italic spans
const RichParagraph = ({ text, italic, boldWords }) => {
  // Collect all tokens to highlight
  const highlights = [];
  if (italic) highlights.push({ word: italic, style: 'italic' });
  if (boldWords) boldWords.forEach(w => highlights.push({ word: w, style: 'bold' }));

  if (!highlights.length) return <>{text}</>;

  // Build a regex that matches any of the highlight tokens (wrapped in {})
  const pattern = highlights.map(h => `\\{${h.word}\\}`).join('|');
  const regex = new RegExp(`(${pattern})`, 'g');
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, i) => {
        const matched = highlights.find(h => part === `{${h.word}}`);
        if (!matched) return part;
        if (matched.style === 'italic') return <span key={i} className="font-semibold italic">{matched.word}</span>;
        return <span key={i} className="font-semibold">{matched.word}</span>;
      })}
    </>
  );
};

const AboutPage = () => {
  return (
    <div
      className="min-h-screen pt-20"
      style={{ backgroundColor: '#F5EBD7' }}
      data-testid="about-page"
    >
      <div className="container-portfolio py-12 md:py-20">
        <h1
          className="font-sans text-4xl md:text-5xl font-bold mb-12 fade-in"
          style={{ color: '#3D3A36' }}
          data-testid="about-title"
        >
          {about.title}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text Content */}
          <div className="slide-in-left">
            {about.paragraphs.map((para, i) => (
              <p
                key={i}
                className="text-lg leading-relaxed mb-6"
                style={{ color: '#6B6560' }}
                data-testid={i === 0 ? 'about-text' : undefined}
              >
                <RichParagraph text={para.text} italic={para.italic} boldWords={para.boldWords} />
              </p>
            ))}
          </div>

          {/* Right - Ikigai Diagram */}
          <div className="slide-in-right flex justify-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96" data-testid="ikigai-diagram">
              <div
                className="absolute w-40 h-40 md:w-48 md:h-48 rounded-full border-2 border-dashed"
                style={{ top: '0', left: '50%', transform: 'translateX(-50%)', borderColor: '#7EC8E3' }}
              >
                <span
                  className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-sm font-semibold uppercase tracking-wider"
                  style={{ color: '#6B6560' }}
                >
                  {about.ikigai.top}
                </span>
              </div>

              <div
                className="absolute w-40 h-40 md:w-48 md:h-48 rounded-full border-2 border-dashed"
                style={{ bottom: '0', left: '50%', transform: 'translateX(-50%)', borderColor: '#F8B4B4' }}
              >
                <span
                  className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-sm font-semibold uppercase tracking-wider"
                  style={{ color: '#6B6560' }}
                >
                  {about.ikigai.bottom}
                </span>
              </div>

              <div
                className="absolute w-40 h-40 md:w-48 md:h-48 rounded-full border-2 border-dashed"
                style={{ top: '50%', left: '0', transform: 'translateY(-50%)', borderColor: '#B5E48C' }}
              >
                <span
                  className="absolute top-1/2 -left-12 md:-left-14 transform -translate-y-1/2 -rotate-90 text-sm font-semibold uppercase tracking-wider"
                  style={{ color: '#6B6560' }}
                >
                  {about.ikigai.left}
                </span>
              </div>

              <div
                className="absolute w-40 h-40 md:w-48 md:h-48 rounded-full border-2 border-dashed"
                style={{ top: '50%', right: '0', transform: 'translateY(-50%)', borderColor: '#FFE066' }}
              >
                <span
                  className="absolute top-1/2 -right-12 md:-right-14 transform -translate-y-1/2 rotate-90 text-sm font-semibold uppercase tracking-wider"
                  style={{ color: '#6B6560' }}
                >
                  {about.ikigai.right}
                </span>
              </div>

              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
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
                  {about.ikigai.center}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-right mt-16 text-sm" style={{ color: '#8A847D' }}>
          {about.pageNumber}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
