import React, { useState } from 'react';
import { SEO } from '../components/common/SEO';
import { seoConfig } from '../utils/seoConfig';
import { useLanguage } from '../contexts/LanguageContext';
import './MobileApp.css';

export const MobileApp: React.FC = () => {
  const { language } = useLanguage();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const openVideoModal = () => setIsVideoModalOpen(true);
  const closeVideoModal = () => setIsVideoModalOpen(false);

  return (
    <div className="mobile-app">
      <SEO {...seoConfig['mobile-app']} lang={language === 'pt' ? 'pt' : 'en'} />
      <section className="mobile-app__hero">
        <div className="container">
          <h1 className="mobile-app__title">
            {language === 'pt' ? 'Aplicação Mobile' : 'Mobile Application'}
          </h1>
          <p className="mobile-app__subtitle">
            {language === 'pt'
              ? 'Esta página está em desenvolvimento. Em breve teremos mais informações.'
              : 'This page is under development. More information coming soon.'}
          </p>
          <button className="mobile-app__hero-button" onClick={openVideoModal}>
            <span>{language === 'pt' ? 'Ver vídeo' : 'Watch video'}</span>
            <div className="mobile-app__hero-button-icon">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </button>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="mobile-app__video-modal" onClick={closeVideoModal}>
          <div className="mobile-app__video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="mobile-app__video-modal-close" onClick={closeVideoModal} aria-label="Close video">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="mobile-app__video-modal-iframe-wrapper">
              <iframe
                width="853"
                height="480"
                src="https://www.youtube.com/embed/pv3ENJ8CYoY"
                title="App Cidadão"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="mobile-app__video-modal-iframe"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
