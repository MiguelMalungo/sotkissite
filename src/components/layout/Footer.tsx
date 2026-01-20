import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { footerTranslations } from '../../translations/footer';
import logoImage from '../../assets/logotipo-sotkon-neg-preto.webp';
import './Footer.css';

export const Footer: React.FC = () => {
  const { language } = useLanguage();
  const t = footerTranslations[language];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__content">
          {/* Left Column: Brand Section */}
          <div className="footer__section footer__section--brand">
            <a href="https://sotkon.com" target="_blank" rel="noopener noreferrer" className="footer__logo-link">
              <img
                src={logoImage}
                alt="Sotkon"
                className="footer__logo-image"
              />
            </a>
            <p className="footer__description">
              {t.description}
            </p>
            <div className="footer__social-icons">
              <a href="#" aria-label="Facebook" className="footer__social-icon footer__social-icon--facebook">
                <svg width="23.4" height="23.4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12C22 6.477 17.523 2 12 2S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898v-2.89h2.54V9.845c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12Z" fill="currentColor" />
                </svg>
              </a>
              <a href="#" aria-label="YouTube" className="footer__social-icon footer__social-icon--youtube">
                <svg width="23.4" height="23.4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.8 8.001a2.504 2.504 0 0 0-1.758-1.777C18.073 6 12 6 12 6s-6.073 0-8.042.224A2.504 2.504 0 0 0 2.2 8.001 26.135 26.135 0 0 0 2 12c-.003 1.33.124 2.659.374 3.978a2.504 2.504 0 0 0 1.758 1.777C5.927 18 12 18 12 18s6.073 0 8.042-.224a2.504 2.504 0 0 0 1.758-1.777c.25-1.319.377-2.648.374-3.978.003-1.33-.124-2.659-.374-3.978ZM10 14.5v-5l4.5 2.5-4.5 2.5Z" fill="currentColor" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="footer__social-icon footer__social-icon--linkedin">
                <svg width="23.4" height="23.4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667h-3.554V9h3.414v1.561h.048c.476-.898 1.637-1.85 3.37-1.85 3.601 0 4.266 2.372 4.266 5.456v6.285ZM5.337 7.433c-1.144 0-2.07-.926-2.07-2.07 0-1.143.926-2.07 2.07-2.07 1.142 0 2.068.927 2.068 2.07 0 1.144-.926 2.07-2.068 2.07ZM7.114 20.452H3.56V9h3.554v11.452Z" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>

          {/* Middle Column: Products */}
          <div className="footer__section footer__section--products">
            <h4 className="footer__title">{t.products.title}</h4>
            <ul className="footer__links">
              {t.products.links.map((link, index) => (
                <li key={index}><Link to={link.path} className="footer__link">{link.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Right Column: Newsletter */}
          <div className="footer__section footer__section--newsletter">
            <div className="footer__newsletter">
              <h4 className="footer__newsletter-title">{t.newsletter.title}</h4>
              <form className="footer__newsletter-form">
                <input
                  type="email"
                  placeholder={t.newsletter.placeholder}
                  className="footer__newsletter-input"
                />
                <button type="submit" className="footer__newsletter-button">
                  {t.newsletter.button}
                </button>
              </form>
              <p className="footer__newsletter-note">
                {t.newsletter.note}
              </p>
              <div className="footer__legal footer__legal--column">
                <a href={t.privacyPolicy.url} className="footer__link" target="_blank" rel="noopener noreferrer">
                  {t.privacyPolicy.label}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} {t.copyright} <a href="https://sotkon.com" className="footer__link" target="_blank" rel="noopener noreferrer" style={{ fontWeight: 400 }}>SOTKON</a>
          </p>
        </div>
      </div>
    </footer>
  );
};
