import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="py-8"
      style={{ backgroundColor: '#4A4642' }}
      data-testid="footer"
    >
      <div className="container-portfolio">
        <div className="flex flex-col md:flex-row items-center justify-between text-gray-300 text-sm">
          <div className="mb-4 md:mb-0">
            <Link 
              to="/" 
              className="font-serif text-lg text-white hover:opacity-80 transition-opacity"
              data-testid="footer-logo"
            >
              Harshita Chandiramani
            </Link>
          </div>
          
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <Link to="/about" className="hover:text-white transition-colors" data-testid="footer-about">About</Link>
            <Link to="/why-me" className="hover:text-white transition-colors" data-testid="footer-why-me">Why Me</Link>
            <Link to="/work" className="hover:text-white transition-colors" data-testid="footer-work">Work</Link>
            <Link to="/contact" className="hover:text-white transition-colors" data-testid="footer-contact">Contact</Link>
          </div>

          <div className="text-gray-400">
            © {currentYear} All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
