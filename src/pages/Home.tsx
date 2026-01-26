import React, { useRef, useEffect } from 'react';
import { Button } from '../components/common/Button';
import { AnimateOnScroll } from '../components/ui/AnimateOnScroll';
import { MobileCarousel } from '../components/ui/MobileCarousel';
import { WaveCanvas } from '../components/ui/WaveCanvas';
import { useLanguage } from '../contexts/LanguageContext';
import { homeTranslations } from '../translations/home';
const videoplatVideo = new URL('../assets/videoplat2.mp4', import.meta.url).href;
import heroImage1 from '../assets/11.webp';
import heroImage2 from '../assets/2.webp';
import heroImage3 from '../assets/3.webp';
import heroImage4 from '../assets/4.webp';
import accessSmImage from '../assets/newAccess.webp';
import levelSmImage from '../assets/LEVEL-SondaREEN2-1.webp';
import drsSmImage from '../assets/DRSsm.webp';
import trash4goodsImage from '../assets/trash4goods.webp';
import payltInfoImage from '../assets/playt_circles.webp';
import './Home.css';

const ArrowIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ marginLeft: '10px', verticalAlign: 'middle', transition: 'transform 0.3s ease' }}
    className="button-arrow-icon"
  >
    <line x1="7" y1="17" x2="17" y2="7"></line>
    <polyline points="7 7 17 7 17 17"></polyline>
  </svg>
);

export const Home: React.FC = () => {
  const { language } = useLanguage();
  const t = homeTranslations[language];
  const videoplatRef = useRef<HTMLVideoElement>(null);
  const topEdgeRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = React.useState(0);
  const [flippedCards, setFlippedCards] = React.useState<{ [key: string]: boolean }>({
    level: false,
    access: false,
    drs: false
  });
  const [scrollProgress, setScrollProgress] = React.useState(0);

  const handleCardClick = (cardName: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    // Check if click was on button or its children
    const target = e.target as HTMLElement;
    const isButton = target.closest('.button') !== null;

    // If not clicking the button and on mobile, toggle flip state
    if (!isButton && window.innerWidth <= 768) {
      e.preventDefault();
      setFlippedCards(prev => ({
        ...prev,
        [cardName]: !prev[cardName]
      }));
    }
    // If clicking the button, allow navigation
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        <WaveCanvas />
        <div className="home__hero-overlay"></div>
        <div className="home__hero-content container">
          <h1 className="home__hero-heading" dangerouslySetInnerHTML={{ __html: t.hero.title }} />
          <div className="home__hero-description">
            <p dangerouslySetInnerHTML={{ __html: t.hero.description }} />
          </div>
        </div>
      </section>

      {/* Cards Grid Section - Level, Access, DRS */}
      <section className="home__cards-section">
        <div className="container">
          <AnimateOnScroll animation="fadeSlideUp" delay={0} duration={0.8}>
            <h2 className="home__cards-section-title">Hardware</h2>
          </AnimateOnScroll>
          <div className="home__cards-grid home__cards-grid--desktop">
            {/* Level Card */}
            <AnimateOnScroll animation="fadeSlideUp" delay={0} duration={0.8} className="home__card">
              <a href="/level" className="home__card-link">
                <div className="home__card-image">
                  <img
                    src={levelSmImage}
                    alt="Level monitoring sensors"
                    style={{ transform: `scale(1.1) translateY(${(scrollY - 800) * 0.05}px)` }}
                  />
                  <div className="home__card-overlay"></div>
                  <h3 className="home__card-title">{t.level.title}</h3>
                  <div className="home__card-button-wrapper home__card-button-wrapper--front">
                    <Button href="/level" variant="primary" size="sm">
                      {t.level.button}
                      <ArrowIcon />
                    </Button>
                  </div>
                </div>
                <div className="home__card-content">
                  <p className="home__card-description">{t.level.description}</p>
                  <div className="home__card-button-wrapper">
                    <Button href="/level" variant="primary" size="sm">
                      {t.level.button}
                      <ArrowIcon />
                    </Button>
                  </div>
                </div>
              </a>
            </AnimateOnScroll>

            {/* Access Card */}
            <AnimateOnScroll animation="fadeSlideUp" delay={150} duration={0.8} className="home__card">
              <a href="/access" className="home__card-link">
                <div className="home__card-image">
                  <img
                    src={accessSmImage}
                    alt="Access control system"
                    style={{ transform: `scale(1.1) translateY(${(scrollY - 800) * 0.05}px)` }}
                  />
                  <div className="home__card-overlay"></div>
                  <h3 className="home__card-title">{t.access.title}</h3>
                  <div className="home__card-button-wrapper home__card-button-wrapper--front">
                    <Button href="/access" variant="primary" size="sm">
                      {t.access.button}
                      <ArrowIcon />
                    </Button>
                  </div>
                </div>
                <div className="home__card-content">
                  <p className="home__card-description">{t.access.description}</p>
                  <div className="home__card-button-wrapper">
                    <Button href="/access" variant="primary" size="sm">
                      {t.access.button}
                      <ArrowIcon />
                    </Button>
                  </div>
                </div>
              </a>
            </AnimateOnScroll>

            {/* DRS Card */}
            <AnimateOnScroll animation="fadeSlideUp" delay={300} duration={0.8} className="home__card">
              <a href="/drs" className="home__card-link">
                <div className="home__card-image">
                  <img
                    src={drsSmImage}
                    alt="Deposit return system"
                    style={{ transform: `scale(1.1) translateY(${(scrollY - 800) * 0.05}px)` }}
                  />
                  <div className="home__card-overlay"></div>
                  <h3 className="home__card-title">{t.drs.title}</h3>
                  <div className="home__card-button-wrapper home__card-button-wrapper--front">
                    <Button href="/drs" variant="primary" size="sm">
                      {t.drs.button}
                      <ArrowIcon />
                    </Button>
                  </div>
                </div>
                <div className="home__card-content">
                  <p className="home__card-description">{t.drs.description}</p>
                  <div className="home__card-button-wrapper">
                    <Button href="/drs" variant="primary" size="sm">
                      {t.drs.button}
                      <ArrowIcon />
                    </Button>
                  </div>
                </div>
              </a>
            </AnimateOnScroll>
          </div>
        </div>

        {/* Mobile Carousel */}
        <div className="home__cards-carousel">
          <MobileCarousel className="home__cards-carousel-inner">
            {/* Level Card */}
            <div className="home__card">
              <a
                href="/level"
                className={`home__card-link ${flippedCards.level ? 'home__card-link--flipped' : ''}`}
                onClick={(e) => handleCardClick('level', e)}
              >
                <div className="home__card-image">
                  <img src={levelSmImage} alt="Level monitoring sensors" />
                  <div className="home__card-overlay"></div>
                  <h3 className="home__card-title">{t.level.title}</h3>
                  <div className="home__card-button-wrapper home__card-button-wrapper--front">
                    <Button href="/level" variant="primary" size="sm">
                      {t.level.button}
                    </Button>
                  </div>
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
            </div>

            {/* Access Card */}
            <div className="home__card">
              <a
                href="/access"
                className={`home__card-link ${flippedCards.access ? 'home__card-link--flipped' : ''}`}
                onClick={(e) => handleCardClick('access', e)}
              >
                <div className="home__card-image">
                  <img src={accessSmImage} alt="Access control system" />
                  <div className="home__card-overlay"></div>
                  <h3 className="home__card-title">{t.access.title}</h3>
                  <div className="home__card-button-wrapper home__card-button-wrapper--front">
                    <Button href="/access" variant="primary" size="sm">
                      {t.access.button}
                    </Button>
                  </div>
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
            </div>

            {/* DRS Card */}
            <div className="home__card">
              <a
                href="/drs"
                className={`home__card-link ${flippedCards.drs ? 'home__card-link--flipped' : ''}`}
                onClick={(e) => handleCardClick('drs', e)}
              >
                <div className="home__card-image">
                  <img src={drsSmImage} alt="Deposit return system" />
                  <div className="home__card-overlay"></div>
                  <h3 className="home__card-title">{t.drs.title}</h3>
                  <div className="home__card-button-wrapper home__card-button-wrapper--front">
                    <Button href="/drs" variant="primary" size="sm">
                      {t.drs.button}
                    </Button>
                  </div>
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
            </div>
          </MobileCarousel>
        </div>
      </section>

      {/* Software Title */}
      <AnimateOnScroll animation="fadeSlideUp" delay={0} duration={0.8}>
        <h2 className="home__software-section-title">Software</h2>
      </AnimateOnScroll>

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
              <ArrowIcon />
            </Button>
          </AnimateOnScroll>
        </div>
      </section>

      {/* T4G App Section */}
      <section className="home__section home__section--t4g home__section--parallax">
        <div className="home__section-parallax-bg" style={{ backgroundImage: `url(${heroImage4})` }}></div>
        <div className="home__section-parallax-overlay"></div>
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
                  <Button href="/trash4goods" variant="primary" size="sm">
                    {t.t4g.button}
                    <ArrowIcon />
                  </Button>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Paylt Info Section */}
      <section className="home__section home__section--paylt-info">
        <div className="container">
          <div className="home__section-content home__section-content--center">
            <AnimateOnScroll animation="fadeSlideUp" delay={0} duration={0.8}>
              <h2 className="home__section-heading home__section-heading--center">{t.paylt.title}</h2>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeSlideUp" delay={200} duration={0.8}>
              <p className="home__section-text home__section-text--center">
                {t.paylt.description}
              </p>
            </AnimateOnScroll>
          </div>
        </div>
        <AnimateOnScroll animation="fadeSlideUp" delay={400} duration={0.8} className="home__magnifier-wrapper" onScroll={(e) => {
          const target = e.target as HTMLDivElement;
          const { scrollLeft, scrollWidth, clientWidth } = target;
          const maxScroll = scrollWidth - clientWidth;
          if (maxScroll > 0) {
            setScrollProgress((scrollLeft / maxScroll) * 100);
          }
        }}>
          <img
            src={payltInfoImage}
            alt="Paylt Info Breakdown"
            className="home__magnifier"
          />
        </AnimateOnScroll>
        {/* Custom Mobile Scroll Cursor */}
        <div className="home__scroll-indicator-container">
          <div className="home__scroll-track">
            <div
              className="home__scroll-thumb"
              style={{ left: `${scrollProgress}%` }}
            ></div>
          </div>
          <div className="home__scroll-hint">Deslize para explorar a imagem</div>
        </div>
        <AnimateOnScroll animation="fadeSlideUp" delay={500} duration={0.8} className="home__button-container">
          <Button href="/paylt" variant="primary" size="sm">
            {t.paylt.button}
            <ArrowIcon />
          </Button>
        </AnimateOnScroll>
      </section>



    </div>
  );
};
