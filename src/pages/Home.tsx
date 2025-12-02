import React, { useRef, useEffect } from 'react';
import { Button } from '../components/common/Button';
import { AnimatedHeroTitle } from '../components/ui/AnimatedHeroTitle';
import { AnimateOnScroll } from '../components/ui/AnimateOnScroll';
import { useLanguage } from '../contexts/LanguageContext';
import { homeTranslations } from '../translations/home';
const animationVideo = new URL('../assets/Animation.mp4', import.meta.url).href;
const videoplatVideo = new URL('../assets/videoplat2.mp4', import.meta.url).href;
import heroImage1 from '../assets/11.webp';
import heroImage2 from '../assets/2.webp';
import heroImage3 from '../assets/3.webp';
import heroImage4 from '../assets/4.webp';
import accessSmImage from '../assets/newAccess.webp';
import levelSmImage from '../assets/LEVEL-SondaREEN2-1.webp';
import drsSmImage from '../assets/DRSsm.webp';
import playtSmImage from '../assets/Reciclar.jpg';
import trash4goodsImage from '../assets/trash4goods.webp';
import './Home.css';

export const Home: React.FC = () => {
  const { language } = useLanguage();
  const t = homeTranslations[language];
  const videoplatRef = useRef<HTMLVideoElement>(null);
  const topEdgeRef = useRef<HTMLDivElement>(null);
  const heroVideo1Ref = useRef<HTMLVideoElement>(null);
  const heroVideo2Ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const topEdgeElement = topEdgeRef.current;
    const videoElement = videoplatRef.current;
    if (!topEdgeElement || !videoElement) return;

    // Ensure video is ready
    const handleCanPlay = () => {
      if (videoElement) {
        videoElement.play().catch(err => {
          console.error('Video play error:', err);
        });
      }
    };

    videoElement.addEventListener('canplay', handleCanPlay);
    videoElement.load();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && videoElement) {
            videoElement.currentTime = 0; // Reset to start
            videoElement.play().catch(err => {
              console.error('Video play error:', err);
            });
          } else if (!entry.isIntersecting && videoElement) {
            // Optionally pause when out of view
            // videoElement.pause();
          }
        });
      },
      {
        threshold: 0,
        rootMargin: '0px 0px 0px 0px'
      }
    );

    observer.observe(topEdgeElement);

    return () => {
      observer.disconnect();
      videoElement.removeEventListener('canplay', handleCanPlay);
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
          video1.play().catch(() => { });
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
          <AnimatedHeroTitle
            text={t.hero.title}
            className="home__hero-heading"
            delay={100}
            as="h1"
            animateAllLines={true}
          />
          <div className="home__hero-description">
            <p dangerouslySetInnerHTML={{ __html: t.hero.description }} />
          </div>
        </div>
      </section>

      {/* Rise Above Section */}
      <section className="home__rise-above-container">
        <div className="home__rise-above-video-wrapper">
          <div ref={topEdgeRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '1px', pointerEvents: 'none' }} />
          <video
            ref={videoplatRef}
            className="home__rise-video-overlay"
            muted
            playsInline
            loop
            preload="auto"
          >
            <source src={videoplatVideo} type="video/mp4" />
          </video>
        </div>
        <div className="home__rise-above-content">
          <AnimateOnScroll animation="fadeSlideUp" delay={0} duration={0.8}>
            <h2 className="home__rise-above-title">{t.riseAbove.title}</h2>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fadeSlideUp" delay={200} duration={0.8}>
            <p className="home__rise-above-text">
              {language === 'pt' ? (
                <>
                  <span className="home__rise-above-text--black">A plataforma SOTKIS (Sotkon Intelligent Systems)</span> consiste num sistema integrado de gestão que recolhe e trata informações sobre os diversos processos envolvidos na deposição e/ou recolha de resíduos. <span className="home__rise-above-text--black">O portal e a app</span> foram desenhados para otimizar a eficiência dos recursos alocados à gestão de resíduos, aumentando a rentabilidade desta operação.
                </>
              ) : (
                <>
                  <span className="home__rise-above-text--black">The SOTKIS platform (Sotkon Intelligent Systems)</span> is an integrated management system that collects and processes information about the various processes involved in waste deposition and/or collection. <span className="home__rise-above-text--black">The portal and app</span> were designed to optimize the efficiency of resources allocated to waste management, increasing the profitability of this operation.
                </>
              )}
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fadeSlideUp" delay={400} duration={0.8} className="home__button-container">
            <Button href="/platform" variant="primary" size="sm">
              {t.riseAbove.button}
            </Button>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Cards Grid Section - Level, Access, DRS */}
      <section className="home__cards-section">
        <div className="container">
          <AnimateOnScroll animation="fadeSlideUp" delay={0} duration={0.8}>
            <h2 className="home__cards-section-title">Hardware</h2>
          </AnimateOnScroll>
        </div>
        <div className="home__cards-grid">
          {/* Level Card */}
          <AnimateOnScroll animation="fadeSlideUp" delay={0} duration={0.8} className="home__card">
            <a href="/level" className="home__card-link">
              <div className="home__card-image">
                <img src={levelSmImage} alt="Level monitoring sensors" />
                <div className="home__card-overlay"></div>
                <h3 className="home__card-title">{t.level.title}</h3>
              </div>
              <div className="home__card-content">
                <p className="home__card-description">{t.level.description}</p>
                <div className="home__card-button-wrapper">
                  <Button href="/level" variant="primary" size="sm">
                    {t.level.button}
                  </Button>
                </div>
              </div>
            </a>
          </AnimateOnScroll>

          {/* Access Card */}
          <AnimateOnScroll animation="fadeSlideUp" delay={150} duration={0.8} className="home__card">
            <a href="/access" className="home__card-link">
              <div className="home__card-image">
                <img src={accessSmImage} alt="Access control system" />
                <div className="home__card-overlay"></div>
                <h3 className="home__card-title">{t.access.title}</h3>
              </div>
              <div className="home__card-content">
                <p className="home__card-description">{t.access.description}</p>
                <div className="home__card-button-wrapper">
                  <Button href="/access" variant="primary" size="sm">
                    {t.access.button}
                  </Button>
                </div>
              </div>
            </a>
          </AnimateOnScroll>

          {/* DRS Card */}
          <AnimateOnScroll animation="fadeSlideUp" delay={300} duration={0.8} className="home__card">
            <a href="/drs" className="home__card-link">
              <div className="home__card-image">
                <img src={drsSmImage} alt="Deposit return system" />
                <div className="home__card-overlay"></div>
                <h3 className="home__card-title">{t.drs.title}</h3>
              </div>
              <div className="home__card-content">
                <p className="home__card-description">{t.drs.description}</p>
                <div className="home__card-button-wrapper">
                  <Button href="/drs" variant="primary" size="sm">
                    {t.drs.button}
                  </Button>
                </div>
              </div>
            </a>
          </AnimateOnScroll>
        </div>
      </section>

      {/* T4G App Section */}
      <section className="home__section home__section--t4g">
        <div className="home__section--t4g-wrapper">
          <AnimateOnScroll animation="fadeBlur" delay={0} duration={1} className="home__section--t4g-image">
            <img
              src={trash4goodsImage}
              alt="Trash4Goods App"
            />
          </AnimateOnScroll>
          <div className="container">
            <div className="home__section-grid home__section-grid--reverse">
              <div className="home__section-content">
                <AnimateOnScroll animation="fadeSlideUp" delay={200} duration={0.8}>
                  <h2 className="home__section-heading">{t.t4g.title}</h2>
                </AnimateOnScroll>
                <AnimateOnScroll animation="fadeSlideUp" delay={350} duration={0.8}>
                  <p className="home__section-text">
                    {t.t4g.description}
                  </p>
                </AnimateOnScroll>
                <AnimateOnScroll animation="fadeSlideUp" delay={500} duration={0.8} className="home__button-container">
                  <Button href="#contact" variant="primary" size="sm">
                    {t.t4g.button}
                  </Button>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Paylt Section */}
      <section className="home__section home__section--paylt">
        <div className="container">
          <div className="home__section-grid home__section-grid--stacked">
            <AnimateOnScroll animation="scaleUp" delay={0} duration={0.9} className="home__section-image">
              <div className="home__section-image-placeholder home__section-image-placeholder--full">
                <img
                  src={playtSmImage}
                  alt="Paylt solution"
                />
              </div>
            </AnimateOnScroll>
            <div className="home__section-content">
              <AnimateOnScroll animation="fadeSlideUp" delay={100} duration={0.8}>
                <h2 className="home__section-heading">{t.paylt.title}</h2>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fadeSlideUp" delay={250} duration={0.8}>
                <div className="home__section-text-wrapper">
                  <p className="home__section-text">
                    {t.paylt.description}
                  </p>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fadeSlideUp" delay={400} duration={0.8} className="home__button-container">
                <Button href="/paylt" variant="primary" size="sm">
                  {t.paylt.button}
                </Button>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
