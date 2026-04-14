import React, { useState } from 'react';
import { AnimateOnScroll } from '../components/ui/AnimateOnScroll';
import { AnimatedHeroTitle } from '../components/ui/AnimatedHeroTitle';
import { MobileCarousel } from '../components/ui/MobileCarousel';
import { useLanguage } from '../contexts/LanguageContext';
import { drsTranslations } from '../translations/drs';
import drsHeroImage from '../assets/SFS06839.webp';
import dsc5571Image from '../assets/-DSC5571.webp';
import dsc6216Image from '../assets/-DSC6216.webp';
import sfs06884Image from '../assets/SFS06884.webp';
import drsExplodImage from '../assets/2101-100-020-m-EXPLOD.113.webp';
import conectarDrsImage from '../assets/conectar.webp';
import depositarIcon from '../assets/icon-2.webp';
import pontuarIcon from '../assets/prize.webp';
import trocarIcon from '../assets/DRS.webp';
import drsSc from '../assets/drsSc.png';
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

  const cardImages = [dsc5571Image, dsc6216Image, sfs06884Image];
  const cardItems = t.cards.map((card, i) => ({
    id: String(i + 1),
    image: cardImages[i],
    title: card.title,
    description: card.description,
  }));

  const stepImages = [conectarDrsImage, depositarIcon, pontuarIcon, trocarIcon];
  const howItWorksSteps = t.steps.map((step, i) => ({
    id: String(i + 1),
    number: String(i + 1).padStart(2, '0'),
    title: step.title,
    description: step.description,
    image: stepImages[i],
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
              <p>{t.content.text1}</p>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeSlideUp" delay={300} duration={0.8}>
              <p>{t.content.text2}</p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <section className="drs__cards section">
        {/* Desktop Grid */}
        <div className="drs__cards-grid drs__cards-grid--desktop">
          {cardItems.map((item, index) => (
            <AnimateOnScroll
              key={item.id}
              animation="fadeSlideUp"
              delay={index * 150}
              duration={0.8}
              className="drs__card"
            >
              <div className="drs__card-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="drs__card-content">
                <h3 className="drs__card-title">{item.title}</h3>
                <p className="drs__card-description">{item.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="drs__cards-carousel">
          <MobileCarousel>
            {cardItems.map((item) => (
              <div key={item.id} className="drs__card">
                <div className="drs__card-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="drs__card-content">
                  <h3 className="drs__card-title">{item.title}</h3>
                  <p className="drs__card-description">{item.description}</p>
                </div>
              </div>
            ))}
          </MobileCarousel>
        </div>
      </section>

      <section className="drs__tech-specs section">
        <div className="container">
          <AnimateOnScroll animation="fadeSlideUp" delay={0} duration={0.8}>
            <h2 className="drs__tech-specs-title">{t.technical.title}</h2>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fadeSlideUp" delay={150} duration={0.8}>
            <p className="drs__tech-specs-text">{t.technical.text}</p>
          </AnimateOnScroll>
          <div className="drs__tech-specs-layout">
            <AnimateOnScroll animation="fadeSlideUp" delay={250} duration={0.8} className="drs__tech-specs-item">
              <div>
                <h3>{t.technical.box.title}</h3>
                <p>{t.technical.box.description}</p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="scaleUp" delay={200} duration={0.9} className="drs__tech-specs-image-wrapper">
              <img src={drsExplodImage} alt="DRS Exploded View" className="drs__tech-specs-image" />
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeSlideUp" delay={350} duration={0.8} className="drs__tech-specs-item">
              <div>
                <h3>{t.technical.ring.title}</h3>
                <p>{t.technical.ring.description}</p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <section className="drs__how-it-works section">
        <div className="container">
          <AnimateOnScroll animation="fadeSlideUp" delay={0} duration={0.8}>
            <h2 className="drs__how-it-works-title">{t.howItWorks.title}</h2>
          </AnimateOnScroll>
          <div className="drs__how-it-works-grid">
            {howItWorksSteps.map((step, index) => (
              <AnimateOnScroll
                key={step.id}
                animation="fadeSlideUp"
                delay={index * 150}
                duration={0.8}
              >
                <div className="drs__how-it-works-step">
                  <span className="drs__how-it-works-number">{step.number}</span>
                  <h3 className="drs__how-it-works-step-title">{step.title}</h3>
                  <p className="drs__how-it-works-step-description">{step.description}</p>
                  {step.id === '3' && (
                    <img src={step.image} alt={step.title} className="drs__how-it-works-inline-icon" />
                  )}
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="drs__cycle-scheme section">
        <div className="container">
          <AnimateOnScroll animation="fadeSlideUp" delay={0} duration={0.8}>
            <h2 className="drs__cycle-scheme-title">{t.cycle.title}</h2>
          </AnimateOnScroll>
          <AnimateOnScroll animation="scaleUp" delay={150} duration={0.9}>
            <img src={drsSc} alt={t.cycle.title} className="drs__cycle-scheme-image" />
          </AnimateOnScroll>
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
