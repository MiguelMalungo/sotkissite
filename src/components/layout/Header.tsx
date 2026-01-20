import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import whiteLogo from '../../assets/sotkisbranco.webp';
import coloredLogo from '../../assets/SotKis.webp';
import './Header.css';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { language, setLanguage } = useLanguage();
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
    {
      label: 'Hardware',
      dropdown: [
        { path: '/level', label: 'Level' },
        { path: '/access', label: 'Access' },
        { path: '/drs', label: 'DRS' },
      ],
    },
    { path: '/platform', label: 'Software' },
    { path: '/trash4goods', label: 'App Cidadão' },
    { path: '/paylt', label: 'P(L)ayt' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleLanguageDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLangDropdownOpen(!isLangDropdownOpen);
  };

  const handleLanguageChange = (lang: 'pt' | 'en' | 'es' | 'fr') => {
    setLanguage(lang);
    setIsLangDropdownOpen(false);
  };

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const handleDropdownItemClick = () => {
    setOpenDropdown(null);
    setIsMobileMenuOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setIsLangDropdownOpen(false);
      setOpenDropdown(null);
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const isVideoHeroPage =
    location.pathname === '/' ||
    location.pathname === '/platform' ||
    location.pathname === '/paylt' ||
    location.pathname === '/level' ||
    location.pathname === '/access' ||
    location.pathname === '/drs' ||
    location.pathname === '/paylt' ||
    location.pathname === '/trash4goods' ||
    location.pathname === '/contact';

  // Use white logo initially on pages with hero backgrounds, otherwise use colored logo
  const logoSrc =
    !isScrolled && isVideoHeroPage ? whiteLogo : coloredLogo;

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
            {language === 'pt' ? 'Fale connosco' : 'Enquire now'}
          </Link>

          <button
            className={`header__mobile-toggle ${isMobileMenuOpen ? 'header__mobile-toggle--open' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
          <nav className={`header__nav ${isMobileMenuOpen ? 'header__nav--open' : ''}`} onClick={(e) => e.stopPropagation()}>
            <ul className="header__nav-list">
              {navItems.map((item, index) => {
                const hasDropdown = 'dropdown' in item;
                const isDropdownOpen = openDropdown === item.label;
                const isActive = hasDropdown
                  ? item.dropdown?.some((subItem) => location.pathname === subItem.path)
                  : location.pathname === item.path;

                return (
                  <li key={index} className={`header__nav-item ${hasDropdown ? 'header__nav-item--dropdown' : ''}`}>
                    {hasDropdown ? (
                      <div className="header__nav-dropdown-wrapper">
                        <button
                          className={`header__nav-link header__nav-link--dropdown ${isActive ? 'header__nav-link--active' : ''} ${isDropdownOpen ? 'header__nav-link--open' : ''}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleDropdown(item.label);
                          }}
                          aria-expanded={isDropdownOpen}
                        >
                          {item.label}
                        </button>
                        <div className={`header__nav-dropdown ${isDropdownOpen ? 'header__nav-dropdown--open' : ''}`}>
                          {item.dropdown?.map((subItem) => (
                            <Link
                              key={subItem.path}
                              to={subItem.path}
                              className={`header__nav-dropdown-link ${location.pathname === subItem.path ? 'header__nav-dropdown-link--active' : ''}`}
                              onClick={handleDropdownItemClick}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        to={item.path!}
                        className={`header__nav-link ${isActive ? 'header__nav-link--active' : ''}`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                );
              })}
              {/* Mobile language toggle - inside menu */}
              <li className="header__nav-item header__nav-item--lang-mobile">
                <div className="header__lang-wrapper-mobile">
                  <button
                    onClick={toggleLanguageDropdown}
                    className="header__lang-link"
                    aria-label="Select language"
                  >
                    {language.toUpperCase()}
                    <svg
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`header__lang-arrow ${isLangDropdownOpen ? 'header__lang-arrow--open' : ''}`}
                    >
                      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <div className={`header__lang-dropdown-mobile ${isLangDropdownOpen ? 'header__lang-dropdown-mobile--open' : ''}`}>
                    {['pt', 'en', 'es', 'fr'].filter(l => l !== language).map((lang) => (
                      <button
                        key={lang}
                        onClick={() => handleLanguageChange(lang as any)}
                        className="header__lang-option-mobile"
                      >
                        {lang.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </div>
              </li>
            </ul>
          </nav>

          {/* Desktop CTA Button and Language - After nav */}
          <div className="header__nav-desktop-cta">
            {/* Desktop language toggle - beside CTA button */}
            <div className="header__lang-wrapper">
              <button
                onClick={toggleLanguageDropdown}
                className={`header__lang-link header__lang-link--desktop ${isLangDropdownOpen ? 'header__lang-link--active' : ''}`}
                aria-label="Select language"
                aria-expanded={isLangDropdownOpen}
              >
                {language.toUpperCase()}
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`header__lang-arrow ${isLangDropdownOpen ? 'header__lang-arrow--open' : ''}`}
                >
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <div className={`header__lang-dropdown ${isLangDropdownOpen ? 'header__lang-dropdown--open' : ''}`}>
                {['pt', 'en', 'es', 'fr'].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => handleLanguageChange(lang as any)}
                    className={`header__lang-option ${language === lang ? 'header__lang-option--active' : ''}`}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
            <Link to="/contact" className="header__enquire-btn">
              {language === 'pt' ? 'Fale connosco' : 'Enquire now'}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
