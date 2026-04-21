import React, { useState } from 'react';
import { FeatureCarousel } from '../components/ui/FeatureCarousel';
import { AnimateOnScroll } from '../components/ui/AnimateOnScroll';
import { useLanguage } from '../contexts/LanguageContext';
import { payltTranslations } from '../translations/paylt';
import payltHeroImage from '../assets/SFS06471-copy.webp';

import logoPlayt from '../assets/logo-playtW.png';
import playtCompleto from '../assets/playt_competo.webp';
import playtCompletoEn from '../assets/Software_PLAYT_EN.webp';

import softDashImg from '../assets/Software_DashboardsInterativos.mp4';
import softAppImg from '../assets/Software_AplicaçãoCidadão.webp';
import softMarketImg from '../assets/Software_marketplace-video.mp4';
import hardIotImg from '../assets/Hardware_sensoresnivel.mp4';
import hardAccessImg from '../assets/Hardware_controlosAcesso2.webp';
import hardRestrictorImg from '../assets/Hardware_retritorVolume.webp';
import hardDrsImg from '../assets/Hardware_sensoresDeteção.webp';
import techPolicyImg from '../assets/Software_PLAYT.webp';
import benefitMunicipioImg from '../assets/summer.webp';
import benefitCidadaoImg from '../assets/Cidadão_Beneficios.webp';
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

  // Software Carousel Features — order: Cidadão (image), Dashboard (video), Marketplace (video), PAYT (photo)
  const softwareFeatures = [
    { id: '1', label: tAny.software.features[1].label, description: tAny.software.features[1].description, image: softAppImg, isVideo: false },
    { id: '2', label: tAny.software.features[0].label, description: tAny.software.features[0].description, image: softDashImg, isVideo: true },
    { id: '3', label: tAny.software.features[2].label, description: tAny.software.features[2].description, image: softMarketImg, isVideo: true },
    { id: '4', label: tAny.software.features[3].label, description: tAny.software.features[3].description, image: techPolicyImg, isVideo: false },
  ];

  // Hardware Carousel Features
  const hardwareImages = [hardIotImg, hardAccessImg, hardRestrictorImg, hardDrsImg];
  const hardwareFeatures = tAny.hardware.features.map((f: { label: string; description: string }, i: number) => ({
    id: String(i + 1),
    label: f.label,
    description: f.description,
    image: hardwareImages[i],
    isVideo: i === 0
  }));

  // Benefits Features — independent imports so changes to software/dashboards don't leak here
  const benefitsImages = [benefitMunicipioImg, benefitCidadaoImg];
  const benefitsFeatures = tAny.benefits.features.map((f: { label: string; description: string }, i: number) => ({
    id: String(i + 1),
    label: f.label,
    description: f.description,
    image: benefitsImages[i]
  }));

  return (
    <div className="paylt">
      <section className="paylt__hero paylt__hero--simple">
        <img
          src={payltHeroImage}
          alt="SOTKIS Paylt"
          className="paylt__hero-image"
        />
        <div className="paylt__hero-overlay"></div>
        <div className="paylt__hero-content container">
          <div className="paylt__hero-text-content">
            <div className="paylt__hero-scheme" aria-label="SOTKIS ecosystem">
              <div className="paylt__hero-scheme-items">
                <div className="paylt__hero-scheme-pill">Hardware</div>
                <span className="paylt__hero-scheme-plus">+</span>
                <div className="paylt__hero-scheme-pill">Software</div>
                <span className="paylt__hero-scheme-plus">+</span>
                <div className="paylt__hero-scheme-pill paylt__hero-scheme-pill--dark">App Cidadão</div>
              </div>
              <div className="paylt__hero-scheme-arrow">
                <svg width="40" height="2" viewBox="0 0 40 2" fill="none">
                  <line x1="0" y1="1" x2="40" y2="1" stroke="#94C11F" strokeWidth="2" />
                </svg>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M0 0L10 5L0 10V0Z" fill="#94C11F" />
                </svg>
              </div>
              <div className="paylt__hero-scheme-logo">
                <img src={logoPlayt} alt="P(L)AYT" />
              </div>
            </div>
            <h2 className="paylt__scheme-heading paylt__scheme-heading--hero">
              Todas as soluções <span className="paylt__scheme-heading-pill">SOTKIS</span> num único ecossistema
            </h2>
            <button className="paylt__hero-button" onClick={() => setIsVideoModalOpen(true)}>
              <span>{tAny.video?.button || 'Play Video'}</span>
              <div className="paylt__hero-button-icon">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </button>
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


      {/* Como Funciona Section */}
      <section className="paylt__how-it-works-section section">
        <div className="container">
          <AnimateOnScroll animation="fadeSlideUp" delay={0} duration={0.8}>
            <h2 className="paylt__section-title">Uma solução para todo o tipo de contentores!</h2>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fadeBlur" delay={200} duration={1}>
            <img
              src={language === 'pt' ? playtCompleto : playtCompletoEn}
              alt="P(L)AYT Como Funciona"
              className="paylt__how-it-works-image"
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
