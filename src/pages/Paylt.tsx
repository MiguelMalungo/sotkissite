import React, { useState } from 'react';
import { FeatureCarousel } from '../components/ui/FeatureCarousel';
import { AnimateOnScroll } from '../components/ui/AnimateOnScroll';
import { useLanguage } from '../contexts/LanguageContext';
import { payltTranslations } from '../translations/paylt';
import payltHeroImage from '../assets/SFS06471-copy.webp';

import logoPlayt from '../assets/logo-playtW.png';
import playtContentores from '../assets/playt-contentores.webp';

import softDashImg from '../assets/data.webp';
import softAppImg from '../assets/paylt_software_mobile_app.png';
import softMarketImg from '../assets/paylt_software_marketplace.png';
import hardIotImg from '../assets/newAccess.webp';
import hardAccessImg from '../assets/paylt_hardware_access.png';
import hardRestrictorImg from '../assets/access-com-restritor-volume.webp';
import hardDrsImg from '../assets/ModuloSotkisDRS.webp';
import techPolicyImg from '../assets/paylt_tech_policies.png';
import { CTASection } from '../components/common/CTASection';
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
  const hardwareImages = [hardIotImg, hardAccessImg, hardRestrictorImg, hardDrsImg];
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

            {/* Ecosystem scheme */}
            <div className="paylt__scheme" aria-label="SOTKIS ecosystem">
              <h2 className="paylt__scheme-heading">
                Todas as soluções <span className="paylt__scheme-heading-pill">SOTKIS</span> num único ecossistema
              </h2>
              <div className="paylt__scheme-flow">
                <div className="paylt__scheme-arrow" aria-hidden="true">
                  <svg width="48" height="2" viewBox="0 0 48 2" fill="none">
                    <line x1="0" y1="1" x2="48" y2="1" stroke="#94C11F" strokeWidth="2" />
                  </svg>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M0 0L10 5L0 10V0Z" fill="#94C11F" />
                  </svg>
                </div>
                <div className="paylt__scheme-items">
                  <div className="paylt__scheme-pill">Hardware</div>
                  <span className="paylt__scheme-plus" aria-hidden="true">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                  </span>
                  <div className="paylt__scheme-pill">Software</div>
                  <span className="paylt__scheme-plus" aria-hidden="true">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                  </span>
                  <div className="paylt__scheme-pill paylt__scheme-pill--dark">App Cidadão</div>
                </div>
              </div>
            </div>
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

      {/* Componentes da Solução Section */}
      <section className="paylt__componentes-section">
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

      <CTASection />

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
