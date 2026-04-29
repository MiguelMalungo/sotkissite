import React, { useState } from 'react';
import { SEO } from '../components/common/SEO';
import { seoConfig } from '../utils/seoConfig';
import { AnimateOnScroll } from '../components/ui/AnimateOnScroll';
import { AnimatedHeroTitle } from '../components/ui/AnimatedHeroTitle';
import { MobileCarousel } from '../components/ui/MobileCarousel';
import { useLanguage } from '../contexts/LanguageContext';
import { levelTranslations } from '../translations/level';
import level2Image from '../assets/level2.webp';
import levelSondaImage from '../assets/LEVEL-SondaREEN2-1.webp';
import sotkisAppImage from '../assets/Sotkis-APP-DSC08537-new.webp';
import sotkisLevel1 from '../assets/sotkis-level-1.webp';
import sotkisLevel2 from '../assets/sotkis-level-2.webp';
import sotkisLevel3 from '../assets/sotkis-level-3.webp';
import sotkisLevel from '../assets/sotkis-level.webp';
import './Level.css';

export const Level: React.FC = () => {
  const { language } = useLanguage();
  const t = levelTranslations[language];
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const openVideoModal = () => setIsVideoModalOpen(true);
  const closeVideoModal = () => setIsVideoModalOpen(false);

  return (
    <div className="level">
      <SEO {...seoConfig.level} lang={language === 'pt' ? 'pt' : 'en'} />
      <section className="level__hero">
        <img
          src={level2Image}
          alt="SOTKIS Level"
          className="level__hero-image"
        />
        <div className="level__hero-overlay"></div>
        <div className="level__hero-content container">
          <div className="level__hero-text-content">
            <AnimatedHeroTitle text={t.hero.title} className="level__hero-title" delay={0} />
            <button className="level__hero-button" onClick={openVideoModal}>
              <span>{t.hero.button}</span>
              <div className="level__hero-button-icon">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </section>

      <section className="level__intro section">
        <div className="container">
          <div className="level__intro-content">
            <AnimateOnScroll animation="fadeSlideUp" delay={0} duration={0.8}>
              <h2>{t.intro.title}</h2>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeSlideUp" delay={150} duration={0.8}>
              <p>
                {t.intro.description}
              </p>
              {('description2' in t.intro) && (t.intro as any).description2 && (
                <p style={{ marginTop: '1rem' }}>
                  {(t.intro as any).description2}
                </p>
              )}
            </AnimateOnScroll>
          </div>
          <div className="level__intro-images">
            <AnimateOnScroll animation="fadeSlideLeft" delay={0} duration={0.9} className="level__intro-wrapper--left">
              <img
                src={sotkisAppImage}
                alt="Sotkis APP"
                className="level__intro-image"
              />
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeSlideRight" delay={200} duration={0.9} className="level__intro-wrapper--right">
              <img
                src={levelSondaImage}
                alt="Level SondaREEN"
                className="level__intro-image"
              />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <section className="level__sensor-section section">
        <div className="container">
          <AnimateOnScroll animation="fadeSlideUp" delay={0} duration={0.8}>
            <h2 className="level__sensor-title">{t.sensor.title}</h2>
            {('description' in t.sensor) && (t.sensor as any).description && (
              <p className="level__sensor-description">{(t.sensor as any).description}</p>
            )}
          </AnimateOnScroll>
          <div className="level__sensor-layout">
            <AnimateOnScroll animation="fadeSlideUp" delay={150} duration={0.8} className="level__sensor-specs level__sensor-specs--left">
              <div>
                <h4>{t.specs.sensorTech.label}</h4>
                <p>{t.specs.sensorTech.value}</p>
                <h4>{t.specs.connectivity.label}</h4>
                <p>LTE Cat M1 (4G)</p>
                <p>GSM-fallback (2G)</p>
                <h4>{t.specs.power.label}</h4>
                <p>{t.specs.power.value}</p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="scaleUp" delay={200} duration={0.9} className="level__sensor-image-wrapper">
              <img src={levelSondaImage} alt="SOTKIS Level Sensor" className="level__sensor-image" />
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeSlideUp" delay={300} duration={0.8} className="level__sensor-specs level__sensor-specs--right">
              <div>
                <h4>{t.specs.protection.label}</h4>
                <p>{t.specs.protection.value}</p>
                <h4>{t.specs.material.label}</h4>
                <p>{t.specs.material.value}</p>
                <h4>{t.specs.workTemp.label}</h4>
                <p>{t.specs.workTemp.value}</p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <section className="level__stages-section">
        <div className="container">
          <AnimateOnScroll animation="fadeSlideUp" delay={0} duration={0.8}>
            <h2 className="level__stages-title">{t.stages.title}</h2>
          </AnimateOnScroll>

          {/* Desktop layout: timeline text + images grid */}
          <div className="level__stages-desktop">
            {/* Timeline row */}
            <div className="level__stages-timeline">
              {t.stageItems.map((text, i) => (
                <AnimateOnScroll key={i} animation="fadeSlideUp" delay={i * 150} duration={0.8} className="level__timeline-step">
                  <div className="level__timeline-dot-row">
                    <div className="level__timeline-dot"></div>
                  </div>
                  <p className="level__stage-item-text">{text}</p>
                </AnimateOnScroll>
              ))}
            </div>

            {/* Images row */}
            <div className="level__stages-grid">
              <AnimateOnScroll animation="fadeSlideUp" delay={0} duration={0.8} className="level__stage-item">
                <img src={sotkisLevel3} alt="Monitorização de enchimento" className="level__stage-item-image" />
              </AnimateOnScroll>
              <AnimateOnScroll animation="fadeSlideUp" delay={150} duration={0.8} className="level__stage-item">
                <img src={sotkisLevel2} alt="Cálculo de rotas" className="level__stage-item-image" />
              </AnimateOnScroll>
              <AnimateOnScroll animation="fadeSlideUp" delay={300} duration={0.8} className="level__stage-item">
                <img src={sotkisLevel1} alt="Estatísticas e análise" className="level__stage-item-image" />
              </AnimateOnScroll>
              <AnimateOnScroll animation="fadeSlideUp" delay={450} duration={0.8} className="level__stage-item">
                <img src={sotkisLevel} alt="Navegação eficiente" className="level__stage-item-image" />
              </AnimateOnScroll>
            </div>
          </div>

          {/* Mobile carousel: each slide has text + image together */}
          <div className="level__stages-mobile">
            <MobileCarousel>
              {[sotkisLevel3, sotkisLevel2, sotkisLevel1, sotkisLevel].map((img, i) => (
                <div key={i} className="level__stage-slide">
                  <p className="level__stage-slide-text">{t.stageItems[i]}</p>
                  <img src={img} alt={t.stageItems[i]} className="level__stage-slide-image" />
                </div>
              ))}
            </MobileCarousel>
          </div>
        </div>
      </section>

      

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="level__video-modal" onClick={closeVideoModal}>
          <div className="level__video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="level__video-modal-close" onClick={closeVideoModal} aria-label="Close video">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="level__video-modal-iframe-wrapper">
              <iframe
                width="853"
                height="480"
                src="https://www.youtube.com/embed/RShrgmn1j0U"
                title="SOTKIS Level"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="level__video-modal-iframe"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
