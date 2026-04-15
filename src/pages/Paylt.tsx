import React, { useState } from 'react';
import { FeatureCarousel } from '../components/ui/FeatureCarousel';
import { AnimateOnScroll } from '../components/ui/AnimateOnScroll';
import { useLanguage } from '../contexts/LanguageContext';
import { payltTranslations } from '../translations/paylt';
import payltHeroImage from '../assets/SFS06471-copy.webp';

import logoPlayt from '../assets/logo-playtW.png';
import playtContentores from '../assets/playt-contentores.webp';
import playtRainbow from '../assets/playt-rainbow.webp';

import softDashImg from '../assets/data.webp';
import softAppImg from '../assets/paylt_software_mobile_app.png';
import softMarketImg from '../assets/paylt_software_marketplace.png';
import hardIotImg from '../assets/newAccess.webp';
import hardAccessImg from '../assets/paylt_hardware_access.png';
import techPolicyImg from '../assets/paylt_tech_policies.png';
import './Paylt.css';

export const Paylt: React.FC = () => {
  const { language } = useLanguage();
  const t = payltTranslations[language];
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
  };

  const tAny = t as any;

  // Software Carousel Features
  const softwareImages = [softDashImg, softAppImg, softMarketImg, techPolicyImg];
  const softwareFeatures = tAny.software.features.map((f: { label: string; description: string }, i: number) => ({
    id: String(i + 1),
    label: f.label,
    description: f.description,
    image: softwareImages[i]
  }));

  // Hardware Carousel Features
  const hardwareImages = [hardIotImg, hardAccessImg, hardIotImg, hardAccessImg];
  const hardwareFeatures = tAny.hardware.features.map((f: { label: string; description: string }, i: number) => ({
    id: String(i + 1),
    label: f.label,
    description: f.description,
    image: hardwareImages[i]
  }));

  // Benefits Features
  const benefitsImages = [softDashImg, softAppImg];
  const benefitsFeatures = tAny.benefits.features.map((f: { label: string; description: string }, i: number) => ({
    id: String(i + 1),
    label: f.label,
    description: f.description,
    image: benefitsImages[i]
  }));

  return (
    <div className="paylt">
      <section className="paylt__hero">
        <img
          src={payltHeroImage}
          alt="SOTKIS Paylt"
          className="paylt__hero-image"
        />
        <div className="paylt__hero-overlay"></div>
        <div className="paylt__hero-content container">
          <div className="paylt__hero-text-content">
            <img src={logoPlayt} alt="P(L)AYT Logo" className="paylt__hero-logo" />
            <p className="paylt__hero-subtitle">{t.hero.subtitle}</p>
          </div>
        </div>
      </section>

      <section className="paylt__intro section">
        <div className="container">
          <div className="paylt__intro-content">
            <AnimateOnScroll animation="fadeSlideUp" delay={0} duration={0.8}>
              <h2>{t.intro.title}</h2>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeSlideUp" delay={150} duration={0.8}>
              <p>
                {t.intro.text1}
              </p>
            </AnimateOnScroll>
            {t.intro.text2 && (
              <AnimateOnScroll animation="fadeSlideUp" delay={300} duration={0.8}>
                <p>{t.intro.text2}</p>
              </AnimateOnScroll>
            )}
            <AnimateOnScroll animation="fadeSlideUp" delay={450} duration={0.8}>
              <p>
                {t.intro.text3}
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* PAYT Scheme Section - Contentores */}
      <section className="paylt__contentores-section section">
        <div className="container">
          <AnimateOnScroll animation="fadeSlideUp" delay={0} duration={0.8}>
            <h2 className="paylt__section-title">{t.contentores.title}</h2>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fadeBlur" delay={200} duration={1}>
            <img
              src={playtContentores}
              alt="Contentores PAYT"
              className="paylt__contentores-image"
            />
          </AnimateOnScroll>
        </div>
      </section>

      {/* Billing / Points Scheme Section */}
      <section className="paylt__scheme-section section">
        <div className="container">
          <AnimateOnScroll animation="fadeSlideUp" delay={0} duration={0.8}>
            <div className="paylt__scheme-grid">
              {/* Column 1 - Billing */}
              <div className="paylt__scheme-card paylt__scheme-card--billing">
                <div className="paylt__scheme-card-header">
                  <h3>{t.scheme.billingTitle}</h3>
                </div>
                <div className="paylt__scheme-card-highlight">
                  <span>{t.scheme.billingHighlight}</span>
                </div>
                <div className="paylt__scheme-card-detail">
                  <p>{t.scheme.billingDetail}</p>
                </div>
              </div>

              {/* Column 2 - Points (Packaging) */}
              <div className="paylt__scheme-card paylt__scheme-card--points">
                <div className="paylt__scheme-card-header">
                  <h3>{t.scheme.pointsTitle}</h3>
                </div>
                <div className="paylt__scheme-card-highlight">
                  <span>{t.scheme.pointsHighlight}</span>
                </div>
                <div className="paylt__scheme-card-detail">
                  <p>{t.scheme.pointsDetail1}</p>
                  <p>{t.scheme.pointsDetail2}</p>
                </div>
              </div>

              {/* Column 3 - Points (Opening) */}
              <div className="paylt__scheme-card paylt__scheme-card--points-open">
                <div className="paylt__scheme-card-highlight">
                  <span>{t.scheme.openingHighlight}</span>
                </div>
                <div className="paylt__scheme-card-detail">
                  <p>{t.scheme.openingDetail1}</p>
                  <p>{t.scheme.openingDetail2}</p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fadeBlur" delay={300} duration={1}>
            <img
              src={playtRainbow}
              alt="PAYT Scheme"
              className="paylt__rainbow-image"
            />
          </AnimateOnScroll>
        </div>
      </section>

      {/* Componentes da Solução Section */}
      <section className="paylt__componentes-section">
        <div className="container">
          {tAny.componentesTitle && (
            <AnimateOnScroll animation="fadeSlideUp" delay={0} duration={0.8}>
              <h2 className="paylt__section-title">{tAny.componentesTitle}</h2>
            </AnimateOnScroll>
          )}
        </div>

        {/* Benefits Carousel */}
        <FeatureCarousel
          title={tAny.benefits.title}
          features={benefitsFeatures}
          imagePosition="right"
          backgroundColor="#F4FBFC"
          variant="full-background"
        />

        {/* Hardware Carousel */}
        <FeatureCarousel
          title={tAny.hardware.title}
          subtitle={tAny.hardware.subtitle}
          features={hardwareFeatures}
          imagePosition="left"
          backgroundColor="#F4FBFC"
          variant="full-background"
        />

        {/* Software Carousel */}
        <FeatureCarousel
          title={tAny.software.title}
          subtitle={tAny.software.subtitle}
          features={softwareFeatures}
          imagePosition="right"
          backgroundColor="#F4FBFC"
          variant="full-background"
        />
      </section>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="paylt__video-modal" onClick={closeVideoModal}>
          <div className="paylt__video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="paylt__video-modal-close" onClick={closeVideoModal} aria-label="Close video">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="paylt__video-modal-iframe-wrapper">
              <iframe
                width="853"
                height="480"
                src="https://www.youtube.com/embed/M0Gr6pVUz4E?controls=1&rel=0&modestbranding=1"
                title="SOTKON Intelligent Systems - We present Sotkis"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="paylt__video-modal-iframe"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
