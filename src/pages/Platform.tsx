import React, { useState, useEffect } from 'react';
import { AnimateOnScroll } from '../components/ui/AnimateOnScroll';
import { AnimatedHeroTitle } from '../components/ui/AnimatedHeroTitle';
import { Tabs } from '../components/ui/Tabs';
import { useLanguage } from '../contexts/LanguageContext';
import { platformTranslations } from '../translations/platform';
import { homeTranslations } from '../translations/home';
import platformHeroImage from '../assets/Mockup-Desktop+Mobile-Sotkis-PT.webp';
import seloImage from '../assets/selo.webp';
import dashboardsImage from '../assets/PLATAFORMA-Dashboards.webp';
import niveisImage from '../assets/PLATAFORMA-Niveis-Enchimento-.webp';
import sotcareImage from '../assets/PLATAFORMA-Manutenções-Sotcare.webp';
import gamificacaoImage from '../assets/PLATAFORMA-Gamificação.webp';
const videoplatVideo = new URL('../assets/videoplat.mp4', import.meta.url).href;
import appleImage from '../assets/apple.webp';
import googleImage from '../assets/google.webp';
const videoApp = new URL('../assets/app_video.mp4', import.meta.url).href;
import moduloLevel from '../assets/ModuloSotkisLevel.webp';
import moduloAccess from '../assets/ModuloSotkisAccess.webp';
import moduloDRS from '../assets/ModuloSotkisDRS.webp';
import moduloSotcare from '../assets/ModuloSotcare.webp';
import moduloPlayt from '../assets/ModuloSotkisPLAYT.webp';
import moduloRoutes from '../assets/ModuloSotkisRoutes.webp';
import './Platform.css';
import './Home.css';

export const Platform: React.FC = () => {
  const { language } = useLanguage();
  const t = platformTranslations[language];
  const homeT = homeTranslations[language];
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVideoMuted, setIsVideoMuted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const appVideoRef = React.useRef<HTMLVideoElement>(null);

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);




  const openVideoModal = () => {
    setIsVideoModalOpen(true);
    setIsVideoPlaying(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
    setIsVideoPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isVideoMuted;
      setIsVideoMuted(!isVideoMuted);
    }
  };

  // Ensure app background video plays
  useEffect(() => {
    const appVideo = appVideoRef.current;
    if (appVideo) {
      const handleCanPlay = () => {
        appVideo.play().catch(err => {
          console.error('App video play error:', err);
        });
      };

      const handleError = (e: Event) => {
        console.error('App video error:', e);
      };

      appVideo.addEventListener('canplay', handleCanPlay);
      appVideo.addEventListener('error', handleError);

      // Try to play immediately
      appVideo.play().catch(err => {
        console.error('App video play error:', err);
      });

      return () => {
        appVideo.removeEventListener('canplay', handleCanPlay);
        appVideo.removeEventListener('error', handleError);
      };
    }
  }, []);


  return (
    <div className="platform">
      <div id="platform-page-hero" className="platform-hero-root">
        <div className="platform-hero-root__bg-container">
          <img
            src={platformHeroImage}
            alt="SOTKIS Platform"
            className="platform-hero-root__image"
          />
          <div className="platform-hero-root__overlay"></div>
        </div>
        <div className="platform-hero-root__content container">
          <div className="platform-hero-root__text-content">
            <AnimatedHeroTitle text="SOTKIS Software" className="platform-hero-root__title" delay={0} />
            <p className="platform-hero-root__subtitle">
              {language === 'pt' ? (
                <>
                  {'Acesso através de '}
                  <a href="https://sotkis.com/login" className="platform-hero-root__link" target="_blank" rel="noopener noreferrer">
                    https://sotkis.com/login
                  </a>
                  {' ou através da app Sotkis.'}
                </>
              ) : t.access.text}
            </p>
            <p className="platform-hero-root__tagline">
              {language === 'pt' ? 'Uma solução para todo o tipo de contentores' : 'A solution for all types of containers'}
            </p>
            <button className="platform-hero-root__cta" onClick={openVideoModal}>
              <span>{t.access.buttonText}</span>
              <div className="platform-hero-root__cta-icon">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </button>
          </div>
        </div>
        <img src={seloImage} alt="Selo SOTKIS" className="platform-hero-root__selo" />
      </div>

      {/* Intro Section */}
      <section className="platform__intro section">
        <div className="container">
          <div className="platform__intro-content">
            <AnimateOnScroll animation="fadeSlideUp" delay={0} duration={0.8}>
              <h2 className="platform__intro-title">{t.intro.title}</h2>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeSlideUp" delay={150} duration={0.8}>
              <p className="platform__intro-text">
                {t.intro.text1}
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeSlideUp" delay={300} duration={0.8}>
              <p className="platform__intro-text">
                {t.intro.text2}
              </p>
            </AnimateOnScroll>
            {(() => {
              const intro = t.intro as { title: string; text1: string; text2: string; text3?: string };
              return intro.text3 ? (
                <AnimateOnScroll animation="fadeSlideUp" delay={450} duration={0.8}>
                  <p className="platform__intro-text">
                    {intro.text3}
                  </p>
                </AnimateOnScroll>
              ) : null;
            })()}
          </div>
        </div>
      </section>

      {/* Funcionalidades Section */}
      {(() => {
        const funcData = (t as any).funcionalidades;
        if (!funcData) return null;
        const funcImages = [dashboardsImage, niveisImage, sotcareImage, gamificacaoImage];
        const funcIcons = [
          // Bar chart icon - Dashboards
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="6" y="28" width="7" height="14" rx="1.5" fill="#6B8F3C"/>
            <rect x="16" y="20" width="7" height="22" rx="1.5" fill="#6B8F3C"/>
            <rect x="26" y="12" width="7" height="30" rx="1.5" fill="#6B8F3C"/>
            <rect x="36" y="6" width="7" height="36" rx="1.5" fill="#6B8F3C"/>
            <path d="M6 8L10 16L20 10L30 14L42 6" stroke="#6B8F3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>,
          // Map/routes icon - Gestão de rotas
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 4C17.4 4 12 9.4 12 16C12 26 24 40 24 40C24 40 36 26 36 16C36 9.4 30.6 4 24 4Z" stroke="#6B8F3C" strokeWidth="2.5" fill="none"/>
            <circle cx="24" cy="16" r="5" fill="#6B8F3C"/>
            <path d="M8 32L16 28L24 32L32 28L40 32V44L32 40L24 44L16 40L8 44V32Z" stroke="#6B8F3C" strokeWidth="2" fill="none"/>
          </svg>,
          // Wrench/gear icon - Manutenções
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="16" stroke="#6B8F3C" strokeWidth="2.5" fill="none"/>
            <circle cx="24" cy="24" r="6" stroke="#6B8F3C" strokeWidth="2.5" fill="none"/>
            <path d="M24 4V10M24 38V44M4 24H10M38 24H44M10 10L14.5 14.5M33.5 33.5L38 38M38 10L33.5 14.5M14.5 33.5L10 38" stroke="#6B8F3C" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>,
          // Puzzle/gamification icon
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 8C16 8 18 4 24 4C30 4 32 8 32 8" stroke="#6B8F3C" strokeWidth="2.5" strokeLinecap="round"/>
            <path d="M12 16H8C6 16 4 18 4 20V36C4 38 6 40 8 40H16" stroke="#6B8F3C" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
            <path d="M36 16H40C42 16 44 18 44 20V36C44 38 42 40 40 40H32" stroke="#6B8F3C" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
            <path d="M16 40V44H32V40" stroke="#6B8F3C" strokeWidth="2.5" strokeLinecap="round"/>
            <circle cx="24" cy="24" r="8" stroke="#6B8F3C" strokeWidth="2.5" fill="none"/>
            <path d="M20 24L23 27L28 21" stroke="#6B8F3C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ];
        return (
          <section className="platform__funcionalidades section">
            <div className="container">
              <AnimateOnScroll animation="fadeSlideUp" delay={0} duration={0.8}>
                <h2 className="platform__funcionalidades-title">{funcData.title}</h2>
              </AnimateOnScroll>
              <div className="platform__funcionalidades-text-row">
                {funcData.items.map((item: { title: string; description: string }, index: number) => (
                  <AnimateOnScroll key={index} animation="fadeSlideUp" delay={index * 100} duration={0.8}>
                    <div className="platform__funcionalidades-text-col">
                      <div className="platform__funcionalidades-icon">
                        {funcIcons[index]}
                      </div>
                      <h3 className="platform__funcionalidades-col-title">{item.title}</h3>
                      <p className="platform__funcionalidades-col-description">{item.description}</p>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>
              <div className="platform__funcionalidades-images-row">
                {funcImages.map((img, index) => (
                  <AnimateOnScroll key={index} animation="fadeSlideUp" delay={index * 100 + 200} duration={0.8}>
                    <div className="platform__funcionalidades-image-card">
                      <img
                        src={img}
                        alt={funcData.items[index]?.title || ''}
                        className="platform__funcionalidades-image"
                      />
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>
          </section>
        );
      })()}

      {/* Platform Modules Section */}
      <section className="platform__modules section">
        <div className="container">
          <AnimateOnScroll animation="fadeSlideUp" delay={0} duration={0.8}>
            <h2 className="platform__modules-title">{language === 'pt' ? 'Módulos da Plataforma' : 'Platform Modules'}</h2>
          </AnimateOnScroll>
          <div className="platform__modules-wrapper">
            <Tabs
              tabs={[
                {
                  title: "Level",
                  value: "level",
                  description: language === 'pt' ? "Solução Inteligente de Monitorização de Nível de Enchimento" : "Intelligent Fill Level Monitoring Solution",
                  content: (
                    <div className="platform__module-content">
                      <img
                        src={moduloLevel}
                        alt="Level Module"
                        className="platform__module-image"
                        style={{ width: '100%', borderRadius: '8px' }}
                      />
                    </div>
                  )
                },
                {
                  title: "Access",
                  value: "access",
                  description: language === 'pt' ? "Sistema Inteligente de Controlo de Acesso" : "Smart Access Control System",
                  content: (
                    <div className="platform__module-content">
                      <img
                        src={moduloAccess}
                        alt="Access Module"
                        className="platform__module-image"
                        style={{ width: '100%', borderRadius: '8px' }}
                      />
                    </div>
                  )
                },
                {
                  title: "DRS",
                  value: "drs",
                  description: language === 'pt' ? "Solução de Sistema de Depósito e Retorno" : "Deposit Return System Solution",
                  content: (
                    <div className="platform__module-content">
                      <img
                        src={moduloDRS}
                        alt="DRS Module"
                        className="platform__module-image"
                        style={{ width: '100%', borderRadius: '8px' }}
                      />
                    </div>
                  )
                },
                {
                  title: "Sotcare",
                  value: "sotcare",
                  description: language === 'pt' ? "Gestão Completa de Manutenção" : "Comprehensive Maintenance Management",
                  content: (
                    <div className="platform__module-content">
                      <img
                        src={moduloSotcare}
                        alt="Sotcare Module"
                        className="platform__module-image"
                        style={{ width: '100%', borderRadius: '8px' }}
                      />
                    </div>
                  )
                },
                {
                  title: "P(L)ayt",
                  value: "playt",
                  description: language === 'pt' ? "Sistema de Gestão Pay-As-You-Throw" : "Pay-As-You-Throw Management System",
                  content: (
                    <div className="platform__module-content">
                      <img
                        src={moduloPlayt}
                        alt="Playt Module"
                        className="platform__module-image"
                        style={{ width: '100%', borderRadius: '8px' }}
                      />
                    </div>
                  )
                },
                {
                  title: "Routes",
                  value: "routes",
                  description: language === 'pt' ? "Sistema Otimizado de Planeamento de Rotas" : "Optimized Route Planning System",
                  content: (
                    <div className="platform__module-content">
                      <img
                        src={moduloRoutes}
                        alt="Routes Module"
                        className="platform__module-image"
                        style={{ width: '100%', borderRadius: '8px' }}
                      />
                    </div>
                  )
                }
              ]}
            />
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="platform__video-modal" onClick={closeVideoModal}>
          <div className="platform__video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="platform__video-modal-close" onClick={closeVideoModal} aria-label="Close video">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <video
              ref={videoRef}
              className="platform__video-modal-video"
              autoPlay
              controls
              onClick={togglePlayPause}
            >
              <source src={videoplatVideo} type="video/mp4" />
            </video>
            <div className="platform__video-modal-controls">
              <button onClick={togglePlayPause} aria-label={isVideoPlaying ? "Pause" : "Play"}>
                {isVideoPlaying ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 4H6V20H10V4Z" fill="currentColor" />
                    <path d="M18 4H14V20H18V4Z" fill="currentColor" />
                  </svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
                  </svg>
                )}
              </button>
              <button onClick={toggleMute} aria-label={isVideoMuted ? "Unmute" : "Mute"}>
                {isVideoMuted ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 5L6 9H2V15H6L11 19V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M23 9L17 15M17 9L23 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 5L6 9H2V15H6L11 19V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15.54 8.46C16.4774 9.39764 17.0039 10.6692 17.0039 11.995C17.0039 13.3208 16.4774 14.5924 15.54 15.53" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M19.07 4.93C20.9447 6.80528 21.9979 9.34836 21.9979 12C21.9979 14.6516 20.9447 17.1947 19.07 19.07" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* App Download Section */}
      <section className="home__app-section platform__app-section-fullwidth">
        <div className="home__app-hero">
          <div className="home__app-video-container">
            <video
              ref={appVideoRef}
              className="home__app-background-video"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            >
              <source src={videoApp} type="video/mp4" />
            </video>
          </div>
          <div className="home__app-overlay"></div>
          <div className="home__app-container">
            <div className="home__app-content">
              <AnimateOnScroll animation="fadeSlideUp" delay={0} duration={0.8}>
                <div className="home__app-badges">
                  <a href="#" className="home__app-badge">
                    <img src={appleImage} alt="Download on App Store" />
                  </a>
                  <a href="#" className="home__app-badge">
                    <img src={googleImage} alt="Get it on Google Play" />
                  </a>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fadeSlideUp" delay={150} duration={0.8}>
                <h2 className="home__app-title" style={{ whiteSpace: 'pre-line' }}>
                  {isMobile && language === 'pt' ? 'FAÇA DOWNLOAD\nDA APP SOTKIS' : homeT.app.title}
                </h2>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fadeSlideUp" delay={300} duration={0.8}>
                <p className="home__app-description" style={{ whiteSpace: 'pre-line' }}>
                  {isMobile && language === 'pt' ? 'Ligue-se facilmente\naos serviços de\ngestão de resíduos\ndo seu município!' : homeT.app.description}
                </p>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
