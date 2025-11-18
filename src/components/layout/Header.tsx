import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/platform', label: 'Platform' },
    { path: '/level', label: 'Level' },
    { path: '/access', label: 'Access' },
    { path: '/drs', label: 'DRS' },
    { path: '/paylt', label: 'P(L)ayt' },
    { path: '/trash4goods', label: 'Trash4Goods' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isVideoHeroPage =
    location.pathname === '/' ||
    location.pathname === '/platform' ||
    location.pathname === '/paylt' ||
    location.pathname === '/level' ||
    location.pathname === '/access' ||
    location.pathname === '/drs' ||
    location.pathname === '/contact';

  const whiteLogoSrc = "/src/assets/sotkisbranco.webp";
  const coloredLogoSrc = "/src/assets/sotkis.webp";

  // Use white logo initially on pages with hero backgrounds, otherwise use colored logo
  const logoSrc =
    !isScrolled && isVideoHeroPage ? whiteLogoSrc : coloredLogoSrc;

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''} ${isVideoHeroPage ? 'header--video-hero' : ''}`}>
      <div className="header__container container">
        <Link to="/" className="header__logo">
          <img 
            src={logoSrc}
            alt="SOTKIS - Intelligent Systems" 
            className="header__logo-image"
          />
        </Link>

        {/* Mobile actions container */}
        <div className={`header__actions ${isMobileMenuOpen ? 'header__actions--expanded' : ''}`}>
          <Link to="/contact" className="header__enquire-btn">
            Enquire now
          </Link>

          <button
            className={`header__mobile-toggle ${isMobileMenuOpen ? 'header__mobile-toggle--open' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <>
                <span className="header__mobile-toggle-line"></span>
                <span className="header__mobile-toggle-line"></span>
                <span className="header__mobile-toggle-line"></span>
              </>
            )}
          </button>
        </div>

        <div className="header__nav-wrapper" onClick={closeMobileMenu}>
          {/* Desktop CTA Button - 30px gap from nav */}
          <div className="header__nav-desktop-cta">
            <Link to="/contact" className="header__enquire-btn">
              Enquire now
            </Link>
          </div>

          <nav className={`header__nav ${isMobileMenuOpen ? 'header__nav--open' : ''}`} onClick={(e) => e.stopPropagation()}>
            <ul className="header__nav-list">
              {navItems.map((item) => (
                <li key={item.path} className="header__nav-item">
                  <Link
                    to={item.path}
                    className={`header__nav-link ${
                      location.pathname === item.path ? 'header__nav-link--active' : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
