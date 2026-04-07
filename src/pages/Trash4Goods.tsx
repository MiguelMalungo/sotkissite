import React, { useState } from 'react';
import { AnimateOnScroll } from '../components/ui/AnimateOnScroll';
import { AnimatedHeroTitle } from '../components/ui/AnimatedHeroTitle';
import { Button } from '../components/common/Button';
import { useLanguage } from '../contexts/LanguageContext';
import { trash4goodsTranslations } from '../translations/trash4goods';
import trash4goodsHeroImage from '../assets/SFS06451.webp';
import trash4goodsGrafImage from '../assets/trash4goodsgraf.webp';
import appCidadaoImage from '../assets/appcidadao.webp';
import appleImage from '../assets/apple.webp';
import googleImage from '../assets/google.webp';
import t4gHomepage from '../assets/T4G-homepage-pt.webp';
import t4gMap from '../assets/T4G-map-pt.webp';
import t4gRecycling from '../assets/T4G-recycling-location-pt.webp';
import t4gDrs from '../assets/T4G-drs-recycle-success-pt.webp';
import t4gMarketplace from '../assets/T4G-marketplace-pt.webp';
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
                        <AnimatedHeroTitle text={t.hero.title} className="trash4goods__hero-title" delay={0} />
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
                        <AnimateOnScroll animation="fadeSlideUp" delay={0} duration={0.8}>
                            <h2>{t.intro.title}</h2>
                        </AnimateOnScroll>
                        <AnimateOnScroll animation="fadeSlideUp" delay={150} duration={0.8}>
                            <p>{'text1' in t.intro ? t.intro.text1 : t.intro.text}</p>
                        </AnimateOnScroll>
                        {'text2' in t.intro && (
                          <AnimateOnScroll animation="fadeSlideUp" delay={300} duration={0.8}>
                              <p>{t.intro.text2}</p>
                          </AnimateOnScroll>
                        )}
                        <AnimateOnScroll animation="scaleUp" delay={450} duration={1}>
                            <img
                                src={trash4goodsGrafImage}
                                alt="Trash4Goods Info"
                                className="trash4goods__intro-image"
                            />
                        </AnimateOnScroll>
                    </div>
                </div>
            </section>

            {/* Como funciona? Section */}
            <section className="trash4goods__how-it-works section">
                <div className="container">
                    <AnimateOnScroll animation="fadeSlideUp" delay={0} duration={0.8}>
                        <h2 className="trash4goods__how-it-works-title">Como funciona?</h2>
                    </AnimateOnScroll>
                    <div className="trash4goods__how-it-works-steps">
                        <AnimateOnScroll animation="fadeSlideUp" delay={100} duration={0.8}>
                            <div className="trash4goods__step">
                                <div className="trash4goods__step-phone">
                                    <img src={t4gHomepage} alt="T4G Homepage" />
                                </div>
                                <p className="trash4goods__step-text">Efetue o login na app, passando a ter acesso aos pontos de reciclagem perto de si</p>
                            </div>
                        </AnimateOnScroll>
                        <AnimateOnScroll animation="fadeSlideUp" delay={200} duration={0.8}>
                            <div className="trash4goods__step">
                                <div className="trash4goods__step-phone">
                                    <img src={t4gMap} alt="T4G Map" />
                                </div>
                                <p className="trash4goods__step-text">Verifique no mapa todos os contentores próximos</p>
                            </div>
                        </AnimateOnScroll>
                        <AnimateOnScroll animation="fadeSlideUp" delay={300} duration={0.8}>
                            <div className="trash4goods__step">
                                <div className="trash4goods__step-phone">
                                    <img src={t4gRecycling} alt="T4G Recycling Location" />
                                </div>
                                <p className="trash4goods__step-text">Selecione o ponto de reciclagem e conecte ao contentor por Bluetooth</p>
                            </div>
                        </AnimateOnScroll>
                        <AnimateOnScroll animation="fadeSlideUp" delay={400} duration={0.8}>
                            <div className="trash4goods__step">
                                <div className="trash4goods__step-phone">
                                    <img src={t4gDrs} alt="T4G DRS Recycle Success" />
                                </div>
                                <p className="trash4goods__step-text">Efetue a deposição e receba pontos</p>
                            </div>
                        </AnimateOnScroll>
                        <AnimateOnScroll animation="fadeSlideUp" delay={500} duration={0.8}>
                            <div className="trash4goods__step">
                                <div className="trash4goods__step-phone">
                                    <img src={t4gMarketplace} alt="T4G Marketplace" />
                                </div>
                                <p className="trash4goods__step-text">Troque os pontos acumulados no marketplace</p>
                            </div>
                        </AnimateOnScroll>
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
                            <AnimateOnScroll animation="fadeSlideUp" delay={0} duration={0.8}>
                                <div className="trash4goods__app-badges">
                                    <a href="#" className="trash4goods__app-badge">
                                        <img src={appleImage} alt="Download on App Store" />
                                    </a>
                                    <a href="#" className="trash4goods__app-badge">
                                        <img src={googleImage} alt="Get it on Google Play" />
                                    </a>
                                </div>
                            </AnimateOnScroll>
                            <AnimateOnScroll animation="fadeSlideUp" delay={150} duration={0.8}>
                                <h2 className="trash4goods__app-title">TRASH<span style={{ color: 'black' }}>4</span>GOODS</h2>
                            </AnimateOnScroll>
                            <AnimateOnScroll animation="fadeSlideUp" delay={300} duration={0.8}>
                                <p className="trash4goods__app-description">
                                    Recicle, ganhe pontos e troque-os pelos seus prémios favoritos.
                                </p>
                            </AnimateOnScroll>
                            <AnimateOnScroll animation="fadeSlideUp" delay={450} duration={0.8}>
                                <Button 
                                    href="https://www.trash4goods.com/" 
                                    variant="primary" 
                                    size="sm"
                                    className="trash4goods__cta-button"
                                >
                                    Conhecer a Trash4Goods
                                </Button>
                            </AnimateOnScroll>
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
