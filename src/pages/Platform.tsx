import React, { useState, useEffect } from 'react';
import { Button } from '../components/common/Button';
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
import videoplatVideo from '../assets/videoplat.mp4';
import './Platform.css';

export const Platform: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
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
  const animationTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const transitionTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const features = [
    { 
      title: 'Aplicação', 
      description: 'de tarifários PAYT;'
    },
    { 
      title: 'Informações', 
      description: 'sobre o nível de enchimento dos contentores;'
    },
    { 
      title: 'Planeamento', 
      description: 'de rotas de recolha mais eficientes;'
    },
    { 
      title: 'Acesso', 
      description: 'a frequências de deposição e tipo de resíduos depositados;'
    },
    { 
      title: 'Verificação', 
      description: 'de localizações e histórico de instalação;'
    },
    { 
      title: 'Implementação', 
      description: 'de sistemas de recompensas pela correta deposição de resíduos;'
    },
    { 
      title: 'Gestão', 
      description: 'das informações sobre operações de manutenção preventiva e/ou corretiva;'
    },
    { 
      title: 'Comunicação', 
      description: 'em tempo real de eventuais irregularidades nos equipamentos.'
    }
  ];

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
        targetIndex = activeFeature === null ? 0 : activeFeature;
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

  return (
    <div className="platform">
      <section className="platform__hero">
        <video 
          className="platform__hero-video" 
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src={videoplatVideo} type="video/mp4" />
        </video>
        <div className="platform__hero-overlay"></div>
        <div className="platform__hero-content container">
        </div>
      </section>

      {/* Intro Section */}
      <section className="platform__intro section">
        <div className="container">
          <div className="platform__intro-content">
            <h2 className="platform__intro-title">Plataforma Digital Sotkis</h2>
            <p className="platform__intro-text">
              O SOTKIS (Sotkon Intelligent Systems) consiste numa ferramenta digital que a Sotkon disponibiliza de forma gratuita, tratando-se de um sistema integrado de gestão que recolhe e trata informações sobre os diversos processos envolvidos na deposição e/ou recolha de resíduos.
            </p>
            <p className="platform__intro-text">
              Esta plataforma permite gerir online o seu parque de contentores enterrados Sotkon, onde através dos vários módulos de gestão de resíduos é possível otimizar a eficiência dos recursos alocados, aumentar a rentabilidade da operação, potenciar o aumento das taxas de reciclagem e melhorar a qualidade dos resíduos.
            </p>
            <p className="platform__intro-text">
              A plataforma SOTKIS permite uma gestão integrada e inteligente de todos os processos relacionados com a deposição e recolha de resíduos, proporcionando às entidades responsáveis ferramentas avançadas para otimizar operações e melhorar a sustentabilidade ambiental.
            </p>
          </div>
        </div>
      </section>
      
      <section className="platform__screenshot section">
        <div className="container">
          <div className="platform__screenshot-container">
            <div className="platform__screenshot-wrapper">
              <div className="platform__screenshot-images">
                <img 
                  src={getCurrentImage()} 
                  alt="SOTKIS platform dashboard" 
                  className={`platform__screenshot-image platform__screenshot-image--current ${isTransitioning ? 'platform__screenshot-image--fade-out' : 'platform__screenshot-image--visible'}`}
                />
                <img 
                  src={getNextImage()} 
                  alt="SOTKIS platform dashboard" 
                  className={`platform__screenshot-image platform__screenshot-image--next ${isTransitioning ? 'platform__screenshot-image--fade-in' : 'platform__screenshot-image--hidden'}`}
                />
              </div>
              <p className="platform__screenshot-intro-text">
                Através dos módulos existentes na plataforma SOTKIS a entidade responsável pela operação pode aceder de forma simples a várias funcionalidades:
              </p>
              <div className="platform__screenshot-overlay">
              {/* Mobile carousel navigation */}
              <div className="platform__features-mobile-nav">
                {features.map((_, index) => (
                  <button
                    key={index}
                    className={`platform__features-mobile-nav-dot ${mobileSelectedIndex === index ? 'platform__features-mobile-nav-dot--active' : ''}`}
                    onClick={() => setMobileSelectedIndex(index)}
                    aria-label={`View feature ${index + 1}`}
                  />
                ))}
              </div>
              {/* Mobile content - single feature displayed inline */}
              <div className="platform__features-mobile-content">
                <p className="platform__features-mobile-text">
                  <strong>{features[mobileSelectedIndex].title}</strong> {features[mobileSelectedIndex].description}
                </p>
              </div>
              <div className="platform__features-list">
                {features.map((feature, index) => {
                  const isActive = activeFeature === index;
                  const isAnimating = autoAnimating && animatingIndex === index;
                  const shouldExpand = isActive || isAnimating;
                  
                  return (
                    <div 
                      key={index} 
                      className={`platform__feature-item ${isAnimating ? 'platform__feature-item--animating' : ''}`}
                    >
                      <div className="platform__feature-row">
                        <button
                          className={`platform__feature-dot ${shouldExpand ? 'platform__feature-dot--active' : ''} ${isAnimating ? 'platform__feature-dot--animating' : ''}`}
                          onClick={() => toggleFeature(index)}
                          aria-label={`Toggle feature ${index + 1}`}
                        />
                        <div className="platform__feature-content">
                          <h4 className="platform__feature-title">
                            {feature.title}
                          </h4>
                          <p className={`platform__feature-description ${!shouldExpand ? 'platform__feature-description--hidden' : ''} ${isAnimating ? 'platform__feature-description--animating' : ''}`}>
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="platform__cta-wrapper">
                <Button href="#platform-details" size="sm" className="platform__screenshot-cta-overlay">
                  Visite a Plataforma
                </Button>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Access Section */}
      <section className="platform__access section">
        <div className="container">
          <div className="platform__access-content">
            <p className="platform__access-text">
              O acesso a esta plataforma digital para gestão dos seus contentores de resíduos é efetuado de forma bastante simples. Pode aceder à sua conta através do endereço <a href="https://www.sotkis.com" target="_blank" rel="noopener noreferrer" className="platform__access-link">www.sotkis.com</a> ou através da app Sotkis.
            </p>
            <button className="platform__access-button" onClick={openVideoModal}>
              <span>Play Video</span>
              <div className="platform__access-button-icon">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="platform__video-modal" onClick={closeVideoModal}>
          <div className="platform__video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="platform__video-modal-close" onClick={closeVideoModal} aria-label="Close video">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <video 
              ref={videoRef}
              className="platform__video-modal-video"
              autoPlay
              onClick={togglePlayPause}
            >
              <source src={videoplatVideo} type="video/mp4" />
            </video>
            <div className="platform__video-modal-controls">
              <button onClick={togglePlayPause} aria-label={isVideoPlaying ? "Pause" : "Play"}>
                {isVideoPlaying ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 4H6V20H10V4Z" fill="currentColor"/>
                    <path d="M18 4H14V20H18V4Z" fill="currentColor"/>
                  </svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>
                  </svg>
                )}
              </button>
              <button onClick={toggleMute} aria-label={isVideoMuted ? "Unmute" : "Mute"}>
                {isVideoMuted ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 5L6 9H2V15H6L11 19V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M23 9L17 15M17 9L23 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 5L6 9H2V15H6L11 19V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15.54 8.46C16.4774 9.39764 17.0039 10.6692 17.0039 11.995C17.0039 13.3208 16.4774 14.5924 15.54 15.53" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M19.07 4.93C20.9447 6.80528 21.9979 9.34836 21.9979 12C21.9979 14.6516 20.9447 17.1947 19.07 19.07" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
