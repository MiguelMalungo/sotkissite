import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { WaveCanvas } from '../components/ui/WaveCanvas';
import { useLanguage } from '../contexts/LanguageContext';
import sotkisLogo from '../assets/Logo.png';
import googleBadge from '../assets/google.webp';
import appleBadge from '../assets/apple.webp';
import flagPt from '../assets/pt.png';
import flagEn from '../assets/en.png';
import flagFr from '../assets/fr.png';
import flagEs from '../assets/sp.png';
import flagGr from '../assets/gr.png';
import flagCr from '../assets/cr.png';
import './Landing.css';

// Landing page translations
const landingTranslations = {
  pt: {
    visitWebsite: 'Visite o Website',
    visitDescription: 'Descubra como transformamos a gestão de resíduos com tecnologia inteligente',
    exploreButton: 'Explorar o Sotkis',
    accessPlatform: 'Aceder à Plataforma',
    accessDescription: 'Faça login na plataforma SOTKIS para gerir as suas operações',
    loginButton: 'Efectuar Login',
    downloadApp: 'Faça download da APP',
  },
  en: {
    visitWebsite: 'Visit the Website',
    visitDescription: 'Discover how we transform waste management with intelligent technology',
    exploreButton: 'Explore Sotkis',
    accessPlatform: 'Access the Platform',
    accessDescription: 'Log in to the SOTKIS platform to manage your operations',
    loginButton: 'Log In',
    downloadApp: 'Download the APP',
  },
  fr: {
    visitWebsite: 'Visitez le Site Web',
    visitDescription: 'Découvrez comment nous transformons la gestion des déchets avec une technologie intelligente',
    exploreButton: 'Explorer Sotkis',
    accessPlatform: 'Accéder à la Plateforme',
    accessDescription: 'Connectez-vous à la plateforme SOTKIS pour gérer vos opérations',
    loginButton: 'Se Connecter',
    downloadApp: 'Télécharger l\'APP',
  },
  es: {
    visitWebsite: 'Visite el Sitio Web',
    visitDescription: 'Descubra cómo transformamos la gestión de residuos con tecnología inteligente',
    exploreButton: 'Explorar Sotkis',
    accessPlatform: 'Acceder a la Plataforma',
    accessDescription: 'Inicie sesión en la plataforma SOTKIS para gestionar sus operaciones',
    loginButton: 'Iniciar Sesión',
    downloadApp: 'Descarga la APP',
  },
  gr: {
    visitWebsite: 'Επισκεφθείτε τον Ιστότοπο',
    visitDescription: 'Ανακαλύψτε πώς μετασχηματίζουμε τη διαχείριση αποβλήτων με έξυπνη τεχνολογία',
    exploreButton: 'Εξερευνήστε το Sotkis',
    accessPlatform: 'Πρόσβαση στην Πλατφόρμα',
    accessDescription: 'Συνδεθείτε στην πλατφόρμα SOTKIS για να διαχειριστείτε τις λειτουργίες σας',
    loginButton: 'Σύνδεση',
    downloadApp: 'Κατεβάστε την εφαρμογή',
  },
  cr: {
    visitWebsite: 'Posjetite Web Stranicu',
    visitDescription: 'Otkrijte kako transformiramo upravljanje otpadom s inteligentnom tehnologijom',
    exploreButton: 'Istražite Sotkis',
    accessPlatform: 'Pristupite Platformi',
    accessDescription: 'Prijavite se na SOTKIS platformu za upravljanje vašim operacijama',
    loginButton: 'Prijava',
    downloadApp: 'Preuzmite APP',
  },
};

// Diagonal arrow icon
const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="7" y1="17" x2="17" y2="7" strokeLinecap="round" strokeLinejoin="round" />
    <polyline points="7 7 17 7 17 17" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Landing: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = landingTranslations[language];

  const flags = [
    { code: 'pt' as const, src: flagPt, alt: 'Português' },
    { code: 'en' as const, src: flagEn, alt: 'English' },
    { code: 'fr' as const, src: flagFr, alt: 'Français' },
    { code: 'es' as const, src: flagEs, alt: 'Español' },
    { code: 'gr' as const, src: flagGr, alt: 'Ελληνικά' },
    { code: 'cr' as const, src: flagCr, alt: 'Hrvatski' },
  ];

  useEffect(() => {
    // Trigger entrance animations after mount
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="landing">
      <WaveCanvas />

      {/* Language flags - upper right corner (desktop) / below cards (mobile) */}
      <div className="landing__flags landing__flags--top">
        {flags.map((flag) => (
          <button
            key={flag.code}
            className={`landing__flag ${language === flag.code ? 'landing__flag--selected' : ''}`}
            onClick={() => setLanguage(flag.code)}
            aria-label={flag.alt}
          >
            <img src={flag.src} alt={flag.alt} />
          </button>
        ))}
      </div>

      {/* Logo - Centered above cards */}
      <div className={`landing__logo-container ${isLoaded ? 'landing__logo-container--visible' : ''}`}>
        <img
          src={sotkisLogo}
          alt="SOTKIS - Intelligent Systems"
          className="landing__logo"
        />
      </div>

      {/* Cards Section */}
      <div className={`landing__cards ${isLoaded ? 'landing__cards--visible' : ''}`}>

        {/* Card 1: Visit Website */}
        <Link
          to="/home"
          className="landing__card landing__card--website"
          style={{ '--card-delay': '0.2s' } as React.CSSProperties}
        >
          <div className="landing__card-bg" />
          <div className="landing__card-expand" />
          <div className="landing__card-border" />
          <div className="landing__card-content">
            <div className="landing__card-text">
              <h2 className="landing__card-title">{t.visitWebsite}</h2>
              <p className="landing__card-description">
                {t.visitDescription}
              </p>
            </div>
          </div>
          <div className="landing__card-arrow">
            <span className="landing__card-arrow-label">{t.exploreButton}</span>
            <ArrowIcon />
          </div>
          <div className="landing__card-shine" />
        </Link>

        {/* Card 2: Platform Login */}
        <a
          href="https://miguelmalungo.github.io/sotkis/"
          target="_blank"
          rel="noopener noreferrer"
          className="landing__card landing__card--platform"
          style={{ '--card-delay': '0.4s' } as React.CSSProperties}
        >
          <div className="landing__card-bg" />
          <div className="landing__card-expand" />
          <div className="landing__card-border" />
          <div className="landing__card-content">
            <div className="landing__card-text">
              <h2 className="landing__card-title">{t.accessPlatform}</h2>
              <p className="landing__card-description">
                {t.accessDescription}
              </p>
            </div>
          </div>
          <div className="landing__card-arrow">
            <span className="landing__card-arrow-label">{t.loginButton}</span>
            <ArrowIcon />
          </div>
          <div className="landing__card-shine" />
        </a>

        {/* Card 3: Download App - Title and badges inline */}
        <div
          className="landing__card landing__card--app"
          style={{ '--card-delay': '0.6s' } as React.CSSProperties}
        >
          <div className="landing__card-bg" />
          <div className="landing__card-border" />
          <div className="landing__card-content">
            <div className="landing__card-text">
              <h2 className="landing__card-title">{t.downloadApp}</h2>
            </div>
            <div className="landing__card-badges">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="landing__badge"
              >
                <img src={googleBadge} alt="Google Play" />
              </a>
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="landing__badge"
              >
                <img src={appleBadge} alt="App Store" />
              </a>
            </div>
          </div>
          <div className="landing__card-shine" />
        </div>
      </div>

      {/* Language flags - below cards (mobile only) */}
      <div className="landing__flags landing__flags--bottom">
        {flags.map((flag) => (
          <button
            key={flag.code}
            className={`landing__flag ${language === flag.code ? 'landing__flag--selected' : ''}`}
            onClick={() => setLanguage(flag.code)}
            aria-label={flag.alt}
          >
            <img src={flag.src} alt={flag.alt} />
          </button>
        ))}
      </div>
    </div>
  );
};
