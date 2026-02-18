import React from 'react';
import { Phone, Linkedin, Mail, MapPin } from 'lucide-react';

const ContactPage = () => {
  const contactInfo = [
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: '+971552061234',
      href: 'tel:+971552061234',
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      value: 'linkedin.com/harshitachandiramani',
      href: 'https://www.linkedin.com/in/harshitachandiramani',
    },
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'harshita.c@hotmail.com',
      href: 'mailto:harshita.c@hotmail.com',
    },
    {
      icon: <MapPin size={24} />,
      label: 'Location',
      value: 'Dubai',
      href: null,
    },
  ];

  return (
    <div 
      className="min-h-screen pt-20"
      style={{ backgroundColor: '#F5EBD7' }}
      data-testid="contact-page"
    >
      <div className="container-portfolio py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[60vh]">
          {/* Left - Contact Info */}
          <div className="slide-in-left">
            <h1 
              className="font-sans text-4xl md:text-5xl font-bold mb-8"
              style={{ color: '#3D3A36' }}
              data-testid="contact-title"
            >
              Contact
            </h1>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  data-testid={`contact-${item.label.toLowerCase()}`}
                >
                  <div 
                    className="p-3 rounded-lg"
                    style={{ backgroundColor: '#E5DED0', color: '#4A4642' }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p 
                      className="text-sm font-medium uppercase tracking-wider"
                      style={{ color: '#8A847D' }}
                    >
                      {item.label}
                    </p>
                    {item.href ? (
                      <a 
                        href={item.href}
                        target={item.label === 'LinkedIn' ? '_blank' : undefined}
                        rel={item.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                        className="text-lg font-medium hover:underline"
                        style={{ color: '#3D3A36' }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p 
                        className="text-lg font-medium"
                        style={{ color: '#3D3A36' }}
                      >
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12">
              <p 
                className="text-lg mb-4"
                style={{ color: '#6B6560' }}
              >
                Let's create something amazing together!
              </p>
              <a
                href="mailto:harshita.c@hotmail.com"
                className="inline-flex items-center gap-2 px-8 py-4 rounded font-medium text-white transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg"
                style={{ backgroundColor: '#4A4642' }}
                data-testid="send-email-btn"
              >
                <Mail size={18} />
                Send an Email
              </a>
            </div>
          </div>

          {/* Right - Emoji Illustration */}
          <div className="slide-in-right flex justify-center items-center">
            <div 
              className="relative"
              data-testid="contact-illustration"
            >
              {/* Large Emoji */}
              <div className="text-[200px] md:text-[280px] leading-none select-none animate-bounce">
                😎
              </div>
              
              {/* Decorative elements */}
              <div 
                className="absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-20"
                style={{ backgroundColor: '#FFD93D' }}
              />
              <div 
                className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full opacity-20"
                style={{ backgroundColor: '#4A4642' }}
              />
            </div>
          </div>
        </div>

        {/* Page Number */}
        <div 
          className="text-right mt-16 text-sm"
          style={{ color: '#8A847D' }}
        >
          Page | 16
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
