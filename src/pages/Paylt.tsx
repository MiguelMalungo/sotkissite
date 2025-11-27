import React, { useState } from 'react';
import { Carousel } from '../components/ui/Carousel';
import { useLanguage } from '../contexts/LanguageContext';
import { payltTranslations } from '../translations/paylt';
import payltHeroImage from '../assets/Beyond Recycling.jpg';
import screenImage from '../assets/screen.webp';
import payltSystemsImage from '../assets/payltsystems.webp';
import contPayltImage from '../assets/cont_paylt.webp';
import cardImage from '../assets/card.webp';
import keyImage from '../assets/key.webp';
import payltTecnoImage from '../assets/paylt_tecno.webp';
import playtInfoImage from '../assets/playtinfo.webp';
import './Paylt.css';

export const Paylt: React.FC = () => {
  const { language } = useLanguage();
  const t = payltTranslations[language];
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const openVideoModal = () => {
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
  };
  const images = [contPayltImage, cardImage, keyImage, payltTecnoImage];

  const carouselItems = t.carousel.map((item, index) => ({
    id: String(index + 1),
    title: item.title,
    description: item.description,
    image: images[index]
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
            <h2 className="paylt__hero-title" style={{ whiteSpace: 'pre-line' }}>{t.video.title}</h2>
            <button className="paylt__hero-button" onClick={openVideoModal}>
              <span>{t.video.button}</span>
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
            <h2>{t.intro.title}</h2>
            <p>
              {t.intro.text1}
            </p>
            <p>
              {t.intro.text2}
            </p>
            <p>
              {t.intro.text3}
            </p>
            <p>
              {t.intro.text4}
            </p>
            {t.intro.text5 && (
              <p>
                {t.intro.text5}
              </p>
            )}
            <img
              src={playtInfoImage}
              alt="SOTKIS Paylt Info"
              className="paylt__intro-image"
            />
          </div>
        </div>
      </section>

      <Carousel items={carouselItems} />

      <section className="paylt__content section">
        <div className="container">
          <div className="paylt__content-grid">
            <div className="paylt__content-image">
              <img
                src={screenImage}
                alt="Dados obtidos"
                className="paylt__data-image"
              />
            </div>
            <div className="paylt__text-content">
              <h2>{t.data.title}</h2>
              <p>
                {t.data.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="paylt__compatibility section">
        <div className="container">
          <div className="paylt__compatibility-content">
            <h2 className="paylt__compatibility-title">{t.compatibility.title}</h2>
            <p className="paylt__compatibility-text">
              {t.compatibility.text}
            </p>
            <img
              src={payltSystemsImage}
              alt="Sistemas compatíveis"
              className="paylt__systems-image"
            />
          </div>
        </div>
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
                src="https://www.youtube.com/embed/M0Gr6pVUz4E"
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

