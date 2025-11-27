import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { trash4goodsTranslations } from '../translations/trash4goods';
import trash4goodsHeroImage from '../assets/trash4goods.webp';
import trash4goodsGrafImage from '../assets/trash4goodsgraf.webp';
import appCidadaoImage from '../assets/appcidadao.webp';
import appleImage from '../assets/apple.webp';
import googleImage from '../assets/google.webp';
import './Trash4Goods.css';

export const Trash4Goods: React.FC = () => {
    const { language } = useLanguage();
    const t = trash4goodsTranslations[language];
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

    const openVideoModal = () => {
        setIsVideoModalOpen(true);
    };

    const closeVideoModal = () => {
        setIsVideoModalOpen(false);
    };

    return (
        <div className="trash4goods">
            <section className="trash4goods__hero">
                <img
                    src={trash4goodsHeroImage}
                    alt="Trash4Goods"
                    className="trash4goods__hero-image"
                />
                <div className="trash4goods__hero-overlay"></div>
                <div className="trash4goods__hero-content container">
                    <div className="trash4goods__hero-text-content">
                        <h1 className="trash4goods__hero-title">{t.hero.title}</h1>
                        <p className="trash4goods__hero-subtitle">{t.hero.subtitle}</p>
                        <button className="trash4goods__hero-button" onClick={openVideoModal}>
                            <span>{t.hero.button}</span>
                            <div className="trash4goods__hero-button-icon">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>
            </section>

            <section className="trash4goods__intro section">
                <div className="container">
                    <div className="trash4goods__intro-content">
                        <h2>{t.intro.title}</h2>
                        <p>{t.intro.text}</p>
                        <img
                            src={trash4goodsGrafImage}
                            alt="Trash4Goods Info"
                            className="trash4goods__intro-image"
                        />
                    </div>
                </div>
            </section>

            {/* App Download Section */}
            <section className="trash4goods__app-section">
                <div className="trash4goods__app-hero">
                    <img
                        src={appCidadaoImage}
                        alt="SOTKIS mobile app interface"
                        className="trash4goods__app-background"
                    />
                    <div className="trash4goods__app-overlay">
                        <div className="trash4goods__app-content">
                            <div className="trash4goods__app-badges">
                                <a href="#" className="trash4goods__app-badge">
                                    <img src={appleImage} alt="Download on App Store" />
                                </a>
                                <a href="#" className="trash4goods__app-badge">
                                    <img src={googleImage} alt="Get it on Google Play" />
                                </a>
                            </div>
                            <h2 className="trash4goods__app-title">TRASH<span style={{ color: 'black' }}>4</span>GOODS</h2>
                            <p className="trash4goods__app-description">
                                Recicle, ganhe pontos e troque-os pelos seu premios favoritos
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Modal */}
            {isVideoModalOpen && (
                <div className="trash4goods__video-modal" onClick={closeVideoModal}>
                    <div className="trash4goods__video-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="trash4goods__video-modal-close" onClick={closeVideoModal} aria-label="Close video">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <div className="trash4goods__video-modal-iframe-wrapper">
                            {/* Placeholder video ID, replace with actual ID if known */}
                            <iframe
                                width="853"
                                height="480"
                                src="https://www.youtube.com/embed/M0Gr6pVUz4E"
                                title="Trash4Goods Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                className="trash4goods__video-modal-iframe"
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
