import React from 'react';
import { Phone, Linkedin, Mail, MapPin } from 'lucide-react';
import { siteContent } from '../content';

const { contact } = siteContent;

const ContactPage = () => {
  const contactInfo = [
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: contact.phone,
      href: `tel:${contact.phone}`,
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      value: contact.linkedinDisplay,
      href: contact.linkedin,
    },
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
    {
      icon: <MapPin size={24} />,
      label: 'Location',
      value: contact.location,
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
              {contact.title}
            </h1>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  data-testid={`contact-${item.label.toLowerCase()}`}
                >
                  <div className="p-3 rounded-lg" style={{ backgroundColor: '#E5DED0', color: '#4A4642' }}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm font-medium uppercase tracking-wider" style={{ color: '#8A847D' }}>
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
                      <p className="text-lg font-medium" style={{ color: '#3D3A36' }}>
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <p className="text-lg mb-4" style={{ color: '#6B6560' }}>
                {contact.ctaText}
              </p>
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2 px-8 py-4 rounded font-medium text-white transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg"
                style={{ backgroundColor: '#4A4642' }}
                data-testid="send-email-btn"
              >
                <Mail size={18} />
                {contact.ctaButton}
              </a>
            </div>
          </div>

          {/* Right - Emoji Illustration */}
          <div className="slide-in-right flex justify-center items-center">
            <div className="relative" data-testid="contact-illustration">
              <div className="text-[200px] md:text-[280px] leading-none select-none animate-bounce">
                😎
              </div>
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

        <div className="text-right mt-16 text-sm" style={{ color: '#8A847D' }}>
          {contact.pageNumber}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
