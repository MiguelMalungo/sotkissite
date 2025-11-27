import React, { useState } from 'react';
import { Carousel } from '../components/ui/Carousel';
import { useLanguage } from '../contexts/LanguageContext';
import { accessTranslations } from '../translations/access';
import accessHeroImage from '../assets/ACCESS.webp';
import access1Image from '../assets/access1.webp';
import screenImage from '../assets/screen.webp';
import systemsImage from '../assets/systems.webp';
import payltTecnoImage from '../assets/paylt_tecno.webp';
import './Access.css';

export const Access: React.FC = () => {
  const { language } = useLanguage();
  const t = accessTranslations[language];
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const openVideoModal = () => {
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
  };

  const images = [access1Image, screenImage, payltTecnoImage];

  const carouselItems = t.carousel.map((item, index) => ({
    id: String(index + 1),
    title: item.title,
    description: item.description,
    image: images[index]
  }));

  return (
    <div className="access">
      <section className="access__hero">
        <img
          src={accessHeroImage}
          alt="SOTKIS Access"
          className="access__hero-image"
        />
        <div className="access__hero-overlay"></div>
        <div className="access__hero-content container">
          <div className="access__hero-text-content">
            <h2 className="access__hero-title">{t.hero.title}</h2>
            <p className="access__hero-subtitle">{t.hero.description}</p>
            <button className="access__hero-button" onClick={openVideoModal}>
              <span>{t.hero.button}</span>
              <div className="access__hero-button-icon">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </section>

      <section className="access__intro section">
        <div className="container">
          <div className="access__intro-content">
            <h2>{t.intro.title}</h2>
            <p>
              {t.intro.text1}
            </p>
            <p>
              {t.intro.text2}
            </p>
            {t.intro.text3 && (
              <p>
                {t.intro.text3}
              </p>
            )}
          </div>
        </div>
      </section>

      <Carousel items={carouselItems} />

      <section className="access__content section">
        <div className="container">
          <div className="access__text-content">
            <h2>{t.compatibility.title}</h2>
            <img src={systemsImage} alt="Sistemas de resíduos compatíveis" />
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="access__video-modal" onClick={closeVideoModal}>
          <div className="access__video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="access__video-modal-close" onClick={closeVideoModal} aria-label="Close video">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="access__video-modal-iframe-wrapper">
              <iframe
                width="853"
                height="480"
                src="https://www.youtube.com/embed/M0Gr6pVUz4E"
                title="SOTKON Intelligent Systems - We present Sotkis"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="access__video-modal-iframe"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
