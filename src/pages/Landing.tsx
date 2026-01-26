import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { WaveCanvas } from '../components/ui/WaveCanvas';
import sotkisLogo from '../assets/sotkisbranco.webp';
import googleBadge from '../assets/google.webp';
import appleBadge from '../assets/apple.webp';
import './Landing.css';

// Diagonal arrow icon
const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="7" y1="17" x2="17" y2="7" strokeLinecap="round" strokeLinejoin="round" />
    <polyline points="7 7 17 7 17 17" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Landing: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger entrance animations after mount
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="landing">
      <WaveCanvas />

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
          <div className="landing__card-border" />
          <div className="landing__card-content">
            <div className="landing__card-text">
              <h2 className="landing__card-title">Visite o Website</h2>
              <p className="landing__card-description">
                Descubra como transformamos a gestão de resíduos com tecnologia inteligente
              </p>
            </div>
          </div>
          <div className="landing__card-arrow">
            <ArrowIcon />
          </div>
          <div className="landing__card-shine" />
        </Link>

        {/* Card 2: Platform Login */}
        <a
          href="https://sotkis.sotkon.com"
          target="_blank"
          rel="noopener noreferrer"
          className="landing__card landing__card--platform"
          style={{ '--card-delay': '0.4s' } as React.CSSProperties}
        >
          <div className="landing__card-bg" />
          <div className="landing__card-border" />
          <div className="landing__card-content">
            <div className="landing__card-text">
              <h2 className="landing__card-title">Aceder à Plataforma</h2>
              <p className="landing__card-description">
                Faça login na plataforma SOTKIS para gerir as suas operações
              </p>
            </div>
          </div>
          <div className="landing__card-arrow">
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
              <h2 className="landing__card-title">Faça download da APP</h2>
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
    </div>
  );
};
