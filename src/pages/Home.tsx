import React, { useRef, useEffect } from 'react';
import { Button } from '../components/common/Button';
import { ContainerTextFlip } from '../components/ui/ContainerTextFlip';
import { useLanguage } from '../contexts/LanguageContext';
import { homeTranslations } from '../translations/home';
const animationVideo = new URL('../assets/Animation.mp4', import.meta.url).href;
const video1 = new URL('../assets/video1.mp4', import.meta.url).href;
import heroImage1 from '../assets/11.webp';
import heroImage2 from '../assets/2.webp';
import heroImage3 from '../assets/3.webp';
import heroImage4 from '../assets/4.webp';
import logoImage from '../assets/logotipo-sotkon-neg-preto.webp';
import squareImage from '../assets/square.webp';
import accessSmImage from '../assets/accesssm.webp';
import levelSmImage from '../assets/levelsm.webp';
import drsSmImage from '../assets/DRSsm.webp';
import playtSmImage from '../assets/playtsm.webp';
import testImage from '../assets/test.webp';
import featurephoneImage from '../assets/Featurephone.webp';
import mobile2Image from '../assets/mobile2.webp';
import appleImage from '../assets/apple.webp';
import googleImage from '../assets/google.webp';
import './Home.css';

export const Home: React.FC = () => {
  const { language } = useLanguage();
  const t = homeTranslations[language];
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroVideo1Ref = useRef<HTMLVideoElement>(null);
  const heroVideo2Ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoElement.currentTime = 0; // Reset to start
            videoElement.play();
          }
        });
      },
      {
        threshold: 0, // Play as soon as any part is visible
        rootMargin: '0px 0px 0px 0px'
      }
    );

    observer.observe(videoElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const video1 = heroVideo1Ref.current;
    const video2 = heroVideo2Ref.current;
    if (!video1 || !video2) return;

    let isVideo1Active = true;
    let isTransitioning = false;
    const transitionDuration = 2.5;
    let checkInterval: number | null = null;
    let animationFrameId: number | null = null;

    // Preload both videos
    video1.preload = 'auto';
    video2.preload = 'auto';
    video1.load();
    video2.load();

    const startTransition = () => {
      if (isTransitioning) return;
      isTransitioning = true;

      const activeVideo = isVideo1Active ? video1 : video2;
      const inactiveVideo = isVideo1Active ? video2 : video1;
      
      // Reset and prepare inactive video
      inactiveVideo.currentTime = 0;
      
      // Wait for inactive video to be ready before starting transition
      const beginFade = () => {
        activeVideo.style.opacity = '1';
        inactiveVideo.style.opacity = '0';
        
        // Start playing inactive video
        inactiveVideo.play().catch(err => {
          console.error('Failed to play inactive video:', err);
          isTransitioning = false;
        });
        
        let startTime = Date.now();
        
        const fadeStep = () => {
          if (!isTransitioning) return;
          
          const elapsed = (Date.now() - startTime) / 1000;
          const progress = Math.min(elapsed / transitionDuration, 1);
          
          activeVideo.style.opacity = String(1 - progress);
          inactiveVideo.style.opacity = String(progress);
          
          if (progress < 1) {
            animationFrameId = requestAnimationFrame(fadeStep);
          } else {
            // Transition complete
            activeVideo.pause();
            activeVideo.currentTime = 0;
            isVideo1Active = !isVideo1Active;
            isTransitioning = false;
          }
        };
        
        animationFrameId = requestAnimationFrame(fadeStep);
      };
      
      // Ensure inactive video is ready
      if (inactiveVideo.readyState >= 3) { // HAVE_FUTURE_DATA or better
        beginFade();
      } else {
        const onCanPlay = () => {
          inactiveVideo.removeEventListener('canplay', onCanPlay);
          beginFade();
        };
        inactiveVideo.addEventListener('canplay', onCanPlay);
        inactiveVideo.load();
        
        // Timeout fallback
        setTimeout(() => {
          if (isTransitioning) {
            inactiveVideo.removeEventListener('canplay', onCanPlay);
            isTransitioning = false;
            console.warn('Video load timeout');
          }
        }, 5000);
      }
    };

    const monitorPlayback = () => {
      if (isTransitioning) return;
      
      const activeVideo = isVideo1Active ? video1 : video2;
      
      // Check if video has valid duration
      if (!activeVideo.duration || activeVideo.duration === 0) return;
      
      const timeRemaining = activeVideo.duration - activeVideo.currentTime;
      
      // Start transition before video ends
      if (timeRemaining <= transitionDuration && timeRemaining > 0.1) {
        startTransition();
        return;
      }
      
      // Ensure active video is playing
      if (activeVideo.paused && !activeVideo.ended && activeVideo.readyState >= 2) {
        activeVideo.play().catch(err => {
          console.error('Failed to resume active video:', err);
        });
      }
    };

    const setupVideos = () => {
      const bothReady = video1.readyState >= 3 && video2.readyState >= 3;
      
      if (bothReady) {
        // Start monitoring
        checkInterval = window.setInterval(monitorPlayback, 200);
        
        // Start first video
        video1.play().catch(err => {
          console.error('Failed to start video1:', err);
          // Try with muted if autoplay fails
          video1.muted = true;
          video1.play().catch(() => {});
        });
      } else {
        const checkReady = () => {
          if (video1.readyState >= 3 && video2.readyState >= 3) {
            setupVideos();
          }
        };
        
        video1.addEventListener('canplaythrough', checkReady, { once: true });
        video2.addEventListener('canplaythrough', checkReady, { once: true });
      }
    };

    setupVideos();

    return () => {
      if (checkInterval !== null) {
        clearInterval(checkInterval);
      }
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
      isTransitioning = false;
    };
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="home__hero">
        <div className="home__hero-slideshow">
          <img 
            src={heroImage1} 
            alt="" 
            className="home__hero-slide home__hero-slide--1"
          />
          <img 
            src={heroImage2} 
            alt="" 
            className="home__hero-slide home__hero-slide--2"
          />
          <img 
            src={heroImage3} 
            alt="" 
            className="home__hero-slide home__hero-slide--3"
          />
          <img 
            src={heroImage4} 
            alt="" 
            className="home__hero-slide home__hero-slide--4"
          />
        </div>
        <video 
          ref={heroVideo1Ref}
          className="home__hero-video home__hero-video--1" 
          autoPlay 
          muted 
          playsInline
          preload="auto"
          onLoadedMetadata={(e) => {
            e.currentTarget.playbackRate = 1.0;
          }}
        >
          <source src={animationVideo} type="video/mp4" />
        </video>
        <video 
          ref={heroVideo2Ref}
          className="home__hero-video home__hero-video--2" 
          muted 
          playsInline
          preload="auto"
          onLoadedMetadata={(e) => {
            e.currentTarget.playbackRate = 1.0;
          }}
        >
          <source src={animationVideo} type="video/mp4" />
        </video>
        <div className="home__hero-overlay"></div>
        <div className="home__hero-content container">
          <h1 className="home__hero-heading">{t.hero.title}</h1>
          <div className="home__hero-description">
            <p dangerouslySetInnerHTML={{ __html: t.hero.description }} />
          </div>
        </div>
      </section>

      {/* Logo Section */}
      <section className="home__logo-section">
        <div className="container">
          <img 
            src={logoImage} 
            alt="Sotkon Logo" 
            className="home__logo-image"
          />
        </div>
      </section>

      {/* Rise Above Section */}
      <section className="home__rise-above-container">
        <div className="home__rise-above-video-wrapper">
          <img 
            src={squareImage} 
            alt="" 
            className="home__rise-background-image"
          />
          <video 
            ref={videoRef}
            className="home__rise-video" 
            muted 
            playsInline
          >
            <source src={video1} type="video/mp4" />
          </video>
          <div className="home__rise-title-overlay">
            <ContainerTextFlip
              words={["Create", "Innovate", "Transform", "Evolve"]}
              interval={3000}
              animationDuration={700}
            />
          </div>
        </div>
        <div className="home__rise-above-content">
          <p className="home__rise-above-text">
            {language === 'pt' ? (
              <>
                <span className="home__rise-above-text--black">O SOTKIS (Sotkon Intelligent Systems)</span> consiste num sistema integrado de gestão que recolhe e trata informações sobre os diversos processos envolvidos na deposição e/ou recolha de resíduos. <span className="home__rise-above-text--black">O software SOTKIS</span> permite assim agregar os diferentes módulos inteligentes e foi desenhado para otimizar a eficiência dos recursos alocados à gestão de resíduos e aumentar a rentabilidade desta operação.
              </>
            ) : (
              <>
                <span className="home__rise-above-text--black">SOTKIS (Sotkon Intelligent Systems)</span> is an integrated management system that collects and processes information about the various processes involved in waste deposition and/or collection. <span className="home__rise-above-text--black">The SOTKIS software</span> thus allows aggregating the different intelligent modules and was designed to optimize the efficiency of resources allocated to waste management and increase the profitability of this operation.
              </>
            )}
          </p>
          <Button href="/platform" variant="primary" size="sm">
            {t.riseAbove.button}
          </Button>
        </div>
      </section>

      {/* Access Section */}
      <section className="home__section home__section--access">
        <div className="container">
          <div className="home__section-grid">
            <div className="home__section-content">
              <h2 className="home__section-heading">{t.access.title}</h2>
              <div className="home__section-text-wrapper">
                <p className="home__section-text">
                  {t.access.description}
                </p>
              </div>
              <Button href="/access" variant="primary" size="sm">
                {t.access.button}
              </Button>
            </div>
            <div className="home__section-image">
              <div className="home__section-image-placeholder">
                <img 
                  src={accessSmImage} 
                  alt="Access control system"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Level Section */}
      <section className="home__section home__section--level">
        <div className="container">
          <div className="home__section-grid home__section-grid--reverse">
            <div className="home__section-image">
              <div className="home__section-image-placeholder">
                <img 
                  src={levelSmImage} 
                  alt="Level monitoring sensors"
                />
              </div>
            </div>
            <div className="home__section-content">
              <h2 className="home__section-heading">{t.level.title}</h2>
              <p className="home__section-text">
                {t.level.description}
              </p>
              <Button href="/level" variant="primary" size="sm">
                {t.level.button}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* DRS Section */}
      <section className="home__section home__section--drs">
        <div className="container">
          <div className="home__section-grid">
            <div className="home__section-content">
              <h2 className="home__section-heading">{t.drs.title}</h2>
              <p className="home__section-text">
                {t.drs.description}
              </p>
              <Button href="/drs" variant="primary" size="sm">
                {t.drs.button}
              </Button>
            </div>
            <div className="home__section-image">
              <div className="home__section-image-placeholder">
                <img 
                  src={drsSmImage} 
                  alt="Deposit return system"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Paylt Section */}
      <section className="home__section home__section--paylt">
        <div className="container">
          <div className="home__section-grid home__section-grid--reverse">
            <div className="home__section-image">
              <div className="home__section-image-placeholder">
                <img 
                  src={playtSmImage} 
                  alt="Paylt solution"
                />
              </div>
            </div>
            <div className="home__section-content">
              <h2 className="home__section-heading">{t.paylt.title}</h2>
              <div className="home__section-text-wrapper">
                <p className="home__section-text">
                  {t.paylt.description}
                </p>
              </div>
              <Button href="/paylt" variant="primary" size="sm">
                {t.paylt.button}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* T4G App Section */}
      <section className="home__section home__section--t4g">
        <div className="container">
          <div className="home__section-grid">
            <div className="home__section-content">
              <h2 className="home__section-heading">{t.t4g.title}</h2>
              <p className="home__section-text">
                {t.t4g.description}
              </p>
              <Button href="#contact" variant="primary" size="sm">
                {t.t4g.button}
              </Button>
            </div>
            <div className="home__section-image">
              <div className="home__section-image-placeholder">
                <img 
                  src={testImage} 
                  alt="Trash4Goods App"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section className="home__app-section">
        <div className="home__app-hero">
          <img
            src={featurephoneImage}
            alt="SOTKIS mobile app interface"
            className="home__app-background home__app-background-desktop"
          />
          <img
            src={mobile2Image}
            alt="SOTKIS mobile app interface"
            className="home__app-background home__app-background-mobile"
          />
          <div className="home__app-overlay">
            <div className="home__app-content">
              <div className="home__app-badges">
                <a href="#" className="home__app-badge">
                  <img src={appleImage} alt="Download on App Store" />
                </a>
                <a href="#" className="home__app-badge">
                  <img src={googleImage} alt="Get it on Google Play" />
                </a>
              </div>
              <h2 className="home__app-title">{t.app.title}</h2>
              <p className="home__app-description">
                {t.app.description}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
