import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'About Me', path: '/about' },
    { name: 'Why Me', path: '/why-me' },
    { name: 'The Work', path: '/work' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50"
      style={{ backgroundColor: '#4A4642' }}
      data-testid="navbar"
    >
      <div className="container-portfolio">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="font-serif text-xl md:text-2xl font-semibold text-white hover:opacity-80 transition-opacity"
            data-testid="nav-logo"
          >
            Harshita Chandiramani
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                data-testid={`nav-link-${link.name.toLowerCase().replace(' ', '-')}`}
                className={`text-sm font-medium tracking-wide transition-all duration-300 ${
                  isActive(link.path)
                    ? 'text-white border-b-2 border-white pb-1'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="mobile-menu-toggle"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div 
          className="md:hidden"
          style={{ backgroundColor: '#4A4642' }}
          data-testid="mobile-menu"
        >
          <div className="container-portfolio py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                data-testid={`mobile-nav-link-${link.name.toLowerCase().replace(' ', '-')}`}
                className={`block text-sm font-medium tracking-wide py-2 ${
                  isActive(link.path)
                    ? 'text-white'
                    : 'text-gray-300'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
