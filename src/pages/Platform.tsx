import React, { useState, useEffect } from 'react';
import { AnimateOnScroll } from '../components/ui/AnimateOnScroll';
import { Tabs } from '../components/ui/Tabs';
import { useLanguage } from '../contexts/LanguageContext';
import { platformTranslations } from '../translations/platform';
import { homeTranslations } from '../translations/home';
import platformHeroImage from '../assets/platformhero.webp';
const videoplatVideo = new URL('../assets/videoplat.mp4', import.meta.url).href;
import appleImage from '../assets/apple.webp';
import googleImage from '../assets/google.webp';
const videoApp = new URL('../assets/app_video.mp4', import.meta.url).href;
import screenshot1 from '../assets/Screenshot1.png';
import screenshot2 from '../assets/Screenshot2.png';
import screenshot3 from '../assets/Screenshot3.jpeg';
import screenshot4 from '../assets/Screenshot4.jpeg';
import screenshot5 from '../assets/Screenshot5.jpeg';
import screenshot6 from '../assets/Screenshot6.jpeg';
import screenshot7 from '../assets/Screenshot7.jpeg';
import screenshot8 from '../assets/Screenshot8.jpeg';
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
  const [activeTabDescription, setActiveTabDescription] = useState<string>(t.tabs.items[0].description);
  const [activeModuleDescription, setActiveModuleDescription] = useState<string>(language === 'pt' ? "Solução Inteligente de Monitorização de Nível de Enchimento" : "Intelligent Fill Level Monitoring Solution");
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
      <section className="platform__hero">
        <img
          src={platformHeroImage}
          alt="SOTKIS Platform"
          className="platform__hero-image"
        />
        <div className="platform__hero-overlay"></div>
        <div className="platform__hero-content container">
          <div className="platform__hero-text-content">
            <p className="platform__hero-text">
              {t.access.text} <a href="https://miguelmalungo.github.io/sotkis/" target="_blank" rel="noopener noreferrer" className="platform__hero-link">www.sotkis.com</a> {language === 'pt' ? 'ou através da app Sotkis.' : 'or through the Sotkis app.'}
            </p>
            <button className="platform__hero-button" onClick={openVideoModal}>
              <span>{t.access.buttonText}</span>
              <div className="platform__hero-button-icon">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </section>

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

      {/* Tabs Section */}
      <section className="platform__tabs section">
        <div className="container">
          <div className="platform__tabs-header">
            <AnimateOnScroll animation="fadeSlideUp" delay={0} duration={0.8}>
              <h2 className="platform__tabs-title">{t.tabs.title}</h2>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeSlideUp" delay={100} duration={0.8}>
              <p className="platform__tabs-subtitle">{activeTabDescription}</p>
            </AnimateOnScroll>
          </div>
          <div className="platform__tabs-wrapper">
            <Tabs
              onTabChange={(tab) => setActiveTabDescription(tab.description || '')}
              tabs={t.tabs.items.map((item, index) => ({
                title: item.title,
                value: item.value,
                description: item.description,
                content: (
                  <div className="platform__tab-content">
                    {index === 0 && (
                      <img
                        src={screenshot1}
                        alt="Platform screenshot"
                        className="platform__tab-content-image"
                        style={{ width: '100%', borderRadius: '8px' }}
                      />
                    )}
                    {index === 1 && (
                      <img
                        src={screenshot2}
                        alt="Platform screenshot"
                        className="platform__tab-content-image"
                        style={{ width: '100%', borderRadius: '8px' }}
                      />
                    )}
                    {index === 2 && (
                      <img
                        src={screenshot3}
                        alt="Platform screenshot"
                        className="platform__tab-content-image"
                        style={{ width: '100%', borderRadius: '8px' }}
                      />
                    )}
                    {index === 3 && (
                      <img
                        src={screenshot4}
                        alt="Platform screenshot"
                        className="platform__tab-content-image"
                        style={{ width: '100%', borderRadius: '8px' }}
                      />
                    )}
                    {index === 4 && (
                      <img
                        src={screenshot5}
                        alt="Platform screenshot"
                        className="platform__tab-content-image"
                        style={{ width: '100%', borderRadius: '8px' }}
                      />
                    )}
                    {index === 5 && (
                      <img
                        src={screenshot6}
                        alt="Platform screenshot"
                        className="platform__tab-content-image"
                        style={{ width: '100%', borderRadius: '8px' }}
                      />
                    )}
                    {index === 6 && (
                      <img
                        src={screenshot7}
                        alt="Platform screenshot"
                        className="platform__tab-content-image"
                        style={{ width: '100%', borderRadius: '8px' }}
                      />
                    )}
                    {index === 7 && (
                      <img
                        src={screenshot8}
                        alt="Platform screenshot"
                        className="platform__tab-content-image"
                        style={{ width: '100%', borderRadius: '8px' }}
                      />
                    )}
                  </div>
                )
              }))}
            />
          </div>
        </div>
      </section>

      {/* Platform Modules Section */}
      <section className="platform__modules section">
        <div className="container">
          <div className="platform__modules-header">
            <AnimateOnScroll animation="fadeSlideUp" delay={0} duration={0.8}>
              <h2 className="platform__modules-title">Módulos da Plataforma</h2>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeSlideUp" delay={100} duration={0.8}>
              <p className="platform__modules-subtitle">{activeModuleDescription}</p>
            </AnimateOnScroll>
          </div>
          <div className="platform__modules-wrapper">
            <Tabs
              onTabChange={(tab) => setActiveModuleDescription(tab.description || '')}
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
