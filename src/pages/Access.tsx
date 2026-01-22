import React, { useState } from 'react';
import { AnimateOnScroll } from '../components/ui/AnimateOnScroll';
import { AnimatedHeroTitle } from '../components/ui/AnimatedHeroTitle';
import { MobileCarousel } from '../components/ui/MobileCarousel';
import { useLanguage } from '../contexts/LanguageContext';
import { accessTranslations } from '../translations/access';
import accessHeroImage from '../assets/newAccess.webp';
import access1Image from '../assets/access1.webp';
import dataImage from '../assets/data.webp';
import transferImage from '../assets/transfer.webp';
import accessNewImage from '../assets/accessnew.webp';

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

  const images = [access1Image, dataImage, transferImage];

  const cardItems = t.carousel.map((item, index) => ({
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
            <AnimatedHeroTitle text={t.hero.title} className="access__hero-title" delay={0} />
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
            <AnimateOnScroll animation="fadeSlideUp" delay={0} duration={0.8}>
              <h2>{t.intro.title}</h2>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeSlideUp" delay={150} duration={0.8}>
              <p>
                {t.intro.text1}
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeSlideUp" delay={300} duration={0.8}>
              <p>
                {t.intro.text2}
              </p>
            </AnimateOnScroll>
            {(() => {
              const intro = t.intro as { title: string; text1: string; text2: string; text3?: string };
              return intro.text3 ? (
                <AnimateOnScroll animation="fadeSlideUp" delay={450} duration={0.8}>
                  <p>
                    {intro.text3}
                  </p>
                </AnimateOnScroll>
              ) : null;
            })()}
          </div>
        </div>
      </section>

      <section className="access__cards section">
        {/* Desktop Grid */}
        <div className="access__cards-grid access__cards-grid--desktop">
          {cardItems.map((item, index) => (
            <AnimateOnScroll
              key={item.id}
              animation="fadeSlideUp"
              delay={index * 150}
              duration={0.8}
              className="access__card"
            >
              <div className="access__card-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="access__card-content">
                <h3 className="access__card-title">{item.title}</h3>
                <p className="access__card-description">{item.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="access__cards-carousel">
          <MobileCarousel>
            {cardItems.map((item) => (
              <div key={item.id} className="access__card">
                <div className="access__card-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="access__card-content">
                  <h3 className="access__card-title">{item.title}</h3>
                  <p className="access__card-description">{item.description}</p>
                </div>
              </div>
            ))}
          </MobileCarousel>
        </div>
      </section>

      <section className="access__content section">
        <div className="container">
          <div className="access__text-content">
            <AnimateOnScroll animation="fadeSlideUp" delay={0} duration={0.8}>
              <h2>{t.compatibility.title}</h2>
            </AnimateOnScroll>
            <AnimateOnScroll animation="scaleUp" delay={200} duration={0.9}>
              <img src={accessNewImage} alt="Sistemas de resíduos compatíveis" />
            </AnimateOnScroll>
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
