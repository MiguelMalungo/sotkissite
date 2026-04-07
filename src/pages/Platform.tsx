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
import screenshot1 from '../assets/Screenshot1.webp';
import screenshot2 from '../assets/Screenshot2.webp';
import screenshot3 from '../assets/Screenshot3.webp';
import screenshot4 from '../assets/Screenshot4.webp';
import screenshot5 from '../assets/Screenshot5.webp';
import screenshot6 from '../assets/Screenshot6.webp';
import screenshot7 from '../assets/Screenshot7.webp';
import screenshot8 from '../assets/Screenshot8.webp';
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
        return (
          <section className="platform__funcionalidades section">
            <div className="container">
              <AnimateOnScroll animation="fadeSlideUp" delay={0} duration={0.8}>
                <h2 className="platform__funcionalidades-title">{funcData.title}</h2>
              </AnimateOnScroll>
              <div className="platform__funcionalidades-grid">
                {funcData.items.map((item: { title: string; description: string }, index: number) => (
                  <AnimateOnScroll key={index} animation="fadeSlideUp" delay={index * 150} duration={0.8}>
                    <div className="platform__funcionalidades-card">
                      <div className="platform__funcionalidades-card-image-wrapper">
                        <img
                          src={funcImages[index]}
                          alt={item.title}
                          className="platform__funcionalidades-card-image"
                        />
                      </div>
                      <div className="platform__funcionalidades-card-body">
                        <h3 className="platform__funcionalidades-card-title">{item.title}</h3>
                        <p className="platform__funcionalidades-card-description">{item.description}</p>
                      </div>
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
