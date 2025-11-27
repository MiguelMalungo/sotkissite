import React, { useState } from 'react';
import { Carousel } from '../components/ui/Carousel';
import { useLanguage } from '../contexts/LanguageContext';
import { drsTranslations } from '../translations/drs';
import drsHeroImage from '../assets/DRS.webp';
import drs1Image from '../assets/drs1.webp';
import drs2Image from '../assets/drs2.webp';
import drs3Image from '../assets/drs3.webp';
import drs4Image from '../assets/drs4.webp';
import './DRS.css';

export const DRS: React.FC = () => {
  const { language } = useLanguage();
  const t = drsTranslations[language];
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const openVideoModal = () => {
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
  };

  const images = [drs3Image, drs4Image];

  const carouselItems = t.carousel.map((item, index) => ({
    id: String(index + 1),
    title: item.title,
    description: item.description,
    image: images[index]
  }));

  return (
    <div className="drs">
      <section className="drs__hero">
        <img
          src={drsHeroImage}
          alt="SOTKIS DRS"
          className="drs__hero-image"
        />
        <div className="drs__hero-overlay"></div>
        <div className="drs__hero-content container">
          <div className="drs__hero-text-content">
            <h2 className="drs__hero-title" style={{ whiteSpace: 'pre-line' }}>{t.hero.title}</h2>
            <button className="drs__hero-button" onClick={openVideoModal}>
              <span>{t.hero.button}</span>
              <div className="drs__hero-button-icon">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </section>

      <section className="drs__content section">
        <div className="container">
          <div className="drs__text-content">
            <h2>{t.content.title}</h2>
            <p>
              {t.content.text1}
            </p>
            <p>
              {t.content.text2}
            </p>
            <p>
              {t.content.text3}
            </p>
          </div>
          <div className="drs__content-image">
            <img
              src={drs1Image}
              alt="DRS system"
              className="drs__image"
            />
          </div>
        </div>
      </section>

      <Carousel items={carouselItems} />

      <section className="drs__image-section drs__image-section--bottom">
        <div className="container">
          <img
            src={drs2Image}
            alt="DRS system"
            className="drs__image"
          />
        </div>
      </section>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="drs__video-modal" onClick={closeVideoModal}>
          <div className="drs__video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="drs__video-modal-close" onClick={closeVideoModal} aria-label="Close video">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="drs__video-modal-iframe-wrapper">
              <iframe
                width="853"
                height="480"
                src="https://www.youtube.com/embed/M0Gr6pVUz4E"
                title="SOTKON Intelligent Systems - We present Sotkis"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="drs__video-modal-iframe"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

