import React, { useState, useEffect } from 'react';
import { Button } from '../components/common/Button';
import { AnimateOnScroll } from '../components/ui/AnimateOnScroll';
import { Tabs } from '../components/ui/Tabs';
import { useLanguage } from '../contexts/LanguageContext';
import { platformTranslations } from '../translations/platform';
import { homeTranslations } from '../translations/home';
import image1 from '../assets/1.webp';
import image2 from '../assets/2Informacoes.webp';
import image3 from '../assets/3Planeamento.webp';
import image4 from '../assets/4Acesso.webp';
import image5 from '../assets/5Verificacao.webp';
import image6 from '../assets/6Implementacao.webp';
import image7 from '../assets/7Gestao.webp';
import image8 from '../assets/8Comunicacao.webp';
import image1M from '../assets/1M.webp';
import image2M from '../assets/2InformacoesM.webp';
import image3M from '../assets/3PlaneamentoM.webp';
import image4M from '../assets/4AcessoM.webp';
import image5M from '../assets/5VerificacaoM.webp';
import image6M from '../assets/6ImplementacaoM.webp';
import image7M from '../assets/7GestaoM.webp';
import image8M from '../assets/8ComunicacaoM.webp';
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
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const [activeTabDescription, setActiveTabDescription] = useState<string>(t.tabs.items[0].description);
  const [activeModuleDescription, setActiveModuleDescription] = useState<string>(language === 'pt' ? "Solução Inteligente de Monitorização de Nível de Enchimento" : "Intelligent Fill Level Monitoring Solution");
  const [displayedImageIndex, setDisplayedImageIndex] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVideoMuted, setIsVideoMuted] = useState(false);
  const [autoAnimating, setAutoAnimating] = useState(true);
  const [animatingIndex, setAnimatingIndex] = useState<number>(0);
  const [mobileSelectedIndex, setMobileSelectedIndex] = useState<number>(0);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const appVideoRef = React.useRef<HTMLVideoElement>(null);
  const animationTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const transitionTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const features = t.features.items;

  const imageMapDesktop = [
    image1,  // index 0 - Aplicação
    image2,  // index 1 - Informações
    image3,  // index 2 - Planeamento
    image4,  // index 3 - Acesso
    image5,  // index 4 - Verificação
    image6,  // index 5 - Implementação
    image7,  // index 6 - Gestão
    image8   // index 7 - Comunicação
  ];

  const imageMapMobile = [
    image1M,  // index 0 - Aplicação
    image2M,  // index 1 - Informações
    image3M,  // index 2 - Planeamento
    image4M,  // index 3 - Acesso
    image5M,  // index 4 - Verificação
    image6M,  // index 5 - Implementação
    image7M,  // index 6 - Gestão
    image8M   // index 7 - Comunicação
  ];

  // Get the appropriate image map based on screen size
  const imageMap = isMobile ? imageMapMobile : imageMapDesktop;

  // Detect mobile screen size and sync mobile index
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);

      // Sync mobile selected index with displayed image index when switching to mobile
      if (mobile) {
        setMobileSelectedIndex(displayedImageIndex);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, [displayedImageIndex]);

  // Preload all images
  useEffect(() => {
    [...imageMapDesktop, ...imageMapMobile].forEach((img) => {
      const image = new Image();
      image.src = img;
    });
  }, []);

  // Auto-animation effect (desktop only)
  useEffect(() => {
    if (!autoAnimating || isMobile) return;

    const cycleAnimation = () => {
      setAnimatingIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % features.length;
        return nextIndex;
      });
    };

    // Each item expands for 2 seconds then collapses for 2 seconds (4 seconds total per item)
    animationTimeoutRef.current = setTimeout(cycleAnimation, 4000);

    return () => {
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current);
      }
    };
  }, [animatingIndex, autoAnimating, features.length, isMobile]);

  // Update image when animatingIndex changes during auto-animation (desktop only)
  useEffect(() => {
    if (!autoAnimating || isMobile) return;
    if (animatingIndex === displayedImageIndex) return;

    // Clear any pending transition
    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current);
    }

    setIsTransitioning(true);

    // Update displayed image after transition starts
    transitionTimeoutRef.current = setTimeout(() => {
      setDisplayedImageIndex(animatingIndex);
      requestAnimationFrame(() => {
        setIsTransitioning(false);
      });
    }, 1500); // Match CSS transition duration

    return () => {
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, [animatingIndex, autoAnimating, isMobile, displayedImageIndex]);

  // Handle mobile navigation dot clicks - trigger image transition
  useEffect(() => {
    if (!isMobile) return;
    if (mobileSelectedIndex === displayedImageIndex) return;

    // Clear any pending transition
    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current);
    }

    setIsTransitioning(true);

    // Update displayed image after transition completes
    transitionTimeoutRef.current = setTimeout(() => {
      setDisplayedImageIndex(mobileSelectedIndex);
      requestAnimationFrame(() => {
        setIsTransitioning(false);
      });
    }, 1500); // Match CSS transition duration

    return () => {
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, [mobileSelectedIndex, isMobile, displayedImageIndex]);

  const toggleFeature = (index: number) => {
    // Stop auto-animation when user clicks
    setAutoAnimating(false);

    const targetIndex = activeFeature === index ? 0 : index;
    const newActiveFeature = activeFeature === index ? null : index;

    // Sync animating index with user selection
    setAnimatingIndex(targetIndex);

    if (targetIndex !== displayedImageIndex) {
      // Start transition - update activeFeature first so getNextImage() returns the target
      setActiveFeature(newActiveFeature);
      setIsTransitioning(true);

      // Update displayed image after transition completes
      setTimeout(() => {
        // Update the displayed index first
        setDisplayedImageIndex(targetIndex);
        // Use requestAnimationFrame to ensure DOM updates before ending transition
        requestAnimationFrame(() => {
          setIsTransitioning(false);
        });
      }, 1500); // Match CSS transition duration
    } else {
      setActiveFeature(newActiveFeature);
    }
  };

  const getCurrentImage = () => {
    return imageMap[displayedImageIndex] || (isMobile ? image1M : image1);
  };

  const getNextImage = () => {
    if (isTransitioning) {
      // During transition, show the target image
      let targetIndex;
      if (isMobile) {
        targetIndex = mobileSelectedIndex;
      } else {
        // For desktop: use animatingIndex during auto-animation, otherwise use activeFeature
        targetIndex = autoAnimating ? animatingIndex : (activeFeature === null ? 0 : activeFeature);
      }
      return imageMap[targetIndex] || (isMobile ? image1M : image1);
    } else {
      // When not transitioning, keep next image in sync with current
      return imageMap[displayedImageIndex] || (isMobile ? image1M : image1);
    }
  };

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
            <AnimateOnScroll animation="fadeSlideUp" delay={450} duration={0.8}>
              <p className="platform__intro-text">
                {t.intro.text3}
              </p>
            </AnimateOnScroll>
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

      {/* Modules Section */}
      <section className="platform__tabs section platform__modules-section">
        <div className="container">
          <div className="platform__tabs-header">
            <AnimateOnScroll animation="fadeSlideUp" delay={0} duration={0.8}>
              <h2 className="platform__tabs-title">Módulos da Plataforma</h2>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeSlideUp" delay={100} duration={0.8}>
              <p className="platform__tabs-subtitle">{activeModuleDescription}</p>
            </AnimateOnScroll>
          </div>
          <div className="platform__tabs-wrapper">
            <Tabs
              onTabChange={(tab) => setActiveModuleDescription(tab.description || '')}
              tabs={[
                {
                  title: "Level",
                  value: "level",
                  description: language === 'pt' ? "Solução Inteligente de Monitorização de Nível de Enchimento" : "Intelligent Fill Level Monitoring Solution",
                  content: (
                    <div className="platform__tab-content">
                      <img
                        src={moduloLevel}
                        alt="Level Module"
                        className="platform__tab-content-image"
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
                    <div className="platform__tab-content">
                      <img
                        src={moduloAccess}
                        alt="Access Module"
                        className="platform__tab-content-image"
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
                    <div className="platform__tab-content">
                      <img
                        src={moduloDRS}
                        alt="DRS Module"
                        className="platform__tab-content-image"
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
                    <div className="platform__tab-content">
                      <img
                        src={moduloSotcare}
                        alt="Sotcare Module"
                        className="platform__tab-content-image"
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
                    <div className="platform__tab-content">
                      <img
                        src={moduloPlayt}
                        alt="Playt Module"
                        className="platform__tab-content-image"
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
                    <div className="platform__tab-content">
                      <img
                        src={moduloRoutes}
                        alt="Routes Module"
                        className="platform__tab-content-image"
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
