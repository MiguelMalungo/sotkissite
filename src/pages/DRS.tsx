import React, { useState } from 'react';
import { AnimateOnScroll } from '../components/ui/AnimateOnScroll';
import { AnimatedHeroTitle } from '../components/ui/AnimatedHeroTitle';
import { useLanguage } from '../contexts/LanguageContext';
import { drsTranslations } from '../translations/drs';
import drsHeroImage from '../assets/DRS.webp';
import infograficDRS2 from '../assets/infograficDRS2.webp';
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
            <AnimatedHeroTitle text={t.hero.title} className="drs__hero-title" delay={0} />
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
            <AnimateOnScroll animation="fadeSlideUp" delay={0} duration={0.8}>
              <h2>{t.content.title}</h2>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeSlideUp" delay={150} duration={0.8}>
              <p>
                {t.content.text1}
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <section className="drs__image-section">
        <div className="container">
          <AnimateOnScroll animation="fadeBlur" delay={0} duration={1}>
            <img
              src={infograficDRS2}
              alt="Infographic DRS 2"
              className="drs__image"
            />
          </AnimateOnScroll>
        </div>
      </section>

      <section className="drs__content section">
        <div className="container">
          <div className="drs__text-content">
            <AnimateOnScroll animation="fadeSlideUp" delay={0} duration={0.8}>
              <p>
                {t.content.text2}
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeSlideUp" delay={150} duration={0.8}>
              <p>
                {t.content.text3}
              </p>
            </AnimateOnScroll>
          </div>
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

