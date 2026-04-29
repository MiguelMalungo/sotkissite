import React, { useRef, useEffect } from 'react';
import { SEO } from '../components/common/SEO';
import { seoConfig } from '../utils/seoConfig';
import { Button } from '../components/common/Button';
import { AnimateOnScroll } from '../components/ui/AnimateOnScroll';
import { MobileCarousel } from '../components/ui/MobileCarousel';
import { WaveCanvas } from '../components/ui/WaveCanvas';
import { useLanguage } from '../contexts/LanguageContext';
import { homeTranslations } from '../translations/home';
const videoplatVideo = new URL('../assets/platfvid.mp4', import.meta.url).href;
import heroImage1 from '../assets/11.webp';
import heroImage2 from '../assets/2.webp';
import heroImage3 from '../assets/3.webp';
import heroImage4 from '../assets/4.webp';
import accessSmImage from '../assets/newAccess.webp';
import levelSmImage from '../assets/LEVEL-SondaREEN2-1.webp';
import drsSmImage from '../assets/SFS07103.webp';
import trash4goodsImage from '../assets/trash4goods-pic.webp';
import payltInfoImage from '../assets/rainbow_homepage.png';
import heroBgImage from '../assets/DSC09612.jpeg';
import heroBgImageMobile from '../assets/DSC09612 copy.jpeg';
import capaAssetImage from '../assets/capa-asset-1.webp';
import logoPlayt from '../assets/logo-playt.webp';
import iphoneHandMockup from '../assets/iPhone-Hand-Mockup.webp';
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
    let rafId: number;
    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => setScrollY(window.scrollY));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    const topEdgeElement = topEdgeRef.current;
    const videoElement = videoplatRef.current;
    if (!topEdgeElement || !videoElement) return;

    let loaded = false;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && videoElement) {
            if (!loaded) {
              loaded = true;
              videoElement.load();
            }
            videoElement.currentTime = 0;
            videoElement.playbackRate = 2;
            videoElement.play().catch(() => {});
          }
        });
      },
      { threshold: 0, rootMargin: '200px 0px 0px 0px' }
    );

    observer.observe(topEdgeElement);

    return () => {
      observer.disconnect();
    };
  }, []);


  return (
    <div className="home">
      <SEO {...seoConfig.home} lang={language === 'pt' ? 'pt' : 'en'} />
      {/* Hero Section */}
      <section className="home__hero">
        <div className="home__hero-slideshow">
          <img
            src={heroImage1}
            alt=""
            className="home__hero-slide home__hero-slide--1"
            fetchPriority="high"
          />
          <img
            src={heroImage2}
            alt=""
            className="home__hero-slide home__hero-slide--2"
            loading="lazy"
          />
          <img
            src={heroImage3}
            alt=""
            className="home__hero-slide home__hero-slide--3"
            loading="lazy"
          />
          <img
            src={heroImage4}
            alt=""
            className="home__hero-slide home__hero-slide--4"
            loading="lazy"
          />
        </div>
        <img src={heroBgImage} alt="" className="home__hero-bg-image home__hero-bg-image--desktop" />
        <img src={heroBgImageMobile} alt="" className="home__hero-bg-image home__hero-bg-image--mobile" />
        <WaveCanvas />
        <div className="home__hero-overlay"></div>
        <div className="home__hero-content container">
          <h1 className="home__hero-heading home__hero-animate home__hero-animate--1" dangerouslySetInnerHTML={{ __html: t.hero.title }} />
          {'subtitle' in t.hero && t.hero.subtitle && (
            <p className="home__hero-subtitle home__hero-animate home__hero-animate--2">{t.hero.subtitle}</p>
          )}
          <img src={capaAssetImage} alt="SOTKIS" className="home__hero-capa-image home__hero-animate home__hero-animate--capa" />
          <img src={iphoneHandMockup} alt="" className="home__hero-iphone-mockup home__hero-animate home__hero-animate--iphone" loading="lazy" />
          <div className="home__hero-description home__hero-animate home__hero-animate--3">
            <p dangerouslySetInnerHTML={{ __html: t.hero.description }} />
          </div>
        </div>
      </section>

      {/* Cards Grid Section - Level, Access, DRS */}
      <section className="home__cards-section">
        <div className="container">
          <AnimateOnScroll animation="fadeSlideUp" delay={0} duration={0.8}>
            <h2 className="home__cards-section-title">Hardware</h2>
            {'hardwareIntro' in t && t.hardwareIntro && (
              <p className="home__cards-section-description">{t.hardwareIntro}</p>
            )}
          </AnimateOnScroll>
          <div className="home__cards-grid home__cards-grid--desktop">
            {/* Level Card */}
            <AnimateOnScroll animation="fadeSlideUp" delay={0} duration={0.8} className="home__card">
              <a href="/level" className="home__card-link">
                <div className="home__card-image">
                  <img
                    src={levelSmImage}
                    alt="Level monitoring sensors"
                    loading="lazy"
                    style={{ transform: `translateY(${(scrollY - 800) * 0.03}px)` }}
                  />
                  <div className="home__card-overlay"></div>
                  <h3 className="home__card-title">{t.level.title}</h3>
                  <div className="home__card-button-wrapper home__card-button-wrapper--front">
                    <div className="button button--primary button--sm">
                      {t.level.button}
                      <ArrowIcon />
                    </div>
                  </div>
                </div>
                <div className="home__card-content">
                  <p className="home__card-description">{t.level.description}</p>
                  <div className="home__card-button-wrapper">
                    <div className="button button--primary button--sm">
                      {t.level.button}
                      <ArrowIcon />
                    </div>
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
                    loading="lazy"
                    style={{ transform: `scale(1.1) translateY(${(scrollY - 800) * 0.05}px)` }}
                  />
                  <div className="home__card-overlay"></div>
                  <h3 className="home__card-title">{t.access.title}</h3>
                  <div className="home__card-button-wrapper home__card-button-wrapper--front">
                    <div className="button button--primary button--sm">
                      {t.access.button}
                      <ArrowIcon />
                    </div>
                  </div>
                </div>
                <div className="home__card-content">
                  <p className="home__card-description">{t.access.description}</p>
                  <div className="home__card-button-wrapper">
                    <div className="button button--primary button--sm">
                      {t.access.button}
                      <ArrowIcon />
                    </div>
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
                    loading="lazy"
                    style={{ transform: `scale(1.1) translateY(${(scrollY - 800) * 0.05}px)` }}
                  />
                  <div className="home__card-overlay"></div>
                  <h3 className="home__card-title">{t.drs.title}</h3>
                  <div className="home__card-button-wrapper home__card-button-wrapper--front">
                    <div className="button button--primary button--sm">
                      {t.drs.button}
                      <ArrowIcon />
                    </div>
                  </div>
                </div>
                <div className="home__card-content">
                  <p className="home__card-description">{t.drs.description}</p>
                  <div className="home__card-button-wrapper">
                    <div className="button button--primary button--sm">
                      {t.drs.button}
                      <ArrowIcon />
                    </div>
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
            <div className="home__card home__card--level">
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
                    <div className="button button--primary button--sm">
                      {t.level.button}
                    </div>
                  </div>
                </div>
                <div className="home__card-content">
                  <p className="home__card-description">{t.level.description}</p>
                  <div className="home__card-button-wrapper">
                    <div className="button button--primary button--sm">
                      {t.level.button}
                    </div>
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
                    <div className="button button--primary button--sm">
                      {t.access.button}
                    </div>
                  </div>
                </div>
                <div className="home__card-content">
                  <p className="home__card-description">{t.access.description}</p>
                  <div className="home__card-button-wrapper">
                    <div className="button button--primary button--sm">
                      {t.access.button}
                    </div>
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
                    <div className="button button--primary button--sm">
                      {t.drs.button}
                    </div>
                  </div>
                </div>
                <div className="home__card-content">
                  <p className="home__card-description">{t.drs.description}</p>
                  <div className="home__card-button-wrapper">
                    <div className="button button--primary button--sm">
                      {t.drs.button}
                    </div>
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
        <div className="home__rise-above-content">
          <AnimateOnScroll animation="fadeSlideUp" delay={0} duration={0.8}>
            <h2 className="home__rise-above-title">{t.riseAbove.title}</h2>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fadeSlideUp" delay={200} duration={0.8}>
            <p className="home__rise-above-text">
              {language === 'pt' ? (
                <>
                  <span className="home__rise-above-text--black">A plataforma SOTKIS</span>, que inclui o portal online e a app, consiste num sistema integrado de gestão que recolhe e trata informações sobre os diversos processos envolvidos na deposição e/ou recolha de resíduos.
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
        <div className="home__rise-above-video-wrapper">
          <div ref={topEdgeRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '1px', pointerEvents: 'none' }} />
          <video
            ref={videoplatRef}
            className="home__rise-video-overlay"
            muted
            playsInline
            loop
            preload="none"
          >
            <source src={videoplatVideo} type="video/mp4" />
          </video>
        </div>
      </section>

      {/* App Cidadão Section */}
      <section className="home__section home__section--t4g home__section--parallax">
        <div
          className="home__section-parallax-bg"
          style={{ backgroundImage: `url(${trash4goodsImage})` }}
        />
        <div className="home__section-parallax-overlay" />
        <div className="container">
          <div className="home__section-content home__section-content--center">
            <AnimateOnScroll animation="fadeSlideUp" delay={0} duration={0.8}>
              <h2 className="home__section-heading home__section-heading--center">{t.t4g.title}</h2>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeSlideUp" delay={200} duration={0.8}>
              <p className="home__section-text home__section-text--center">
                {t.t4g.description}
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeSlideUp" delay={350} duration={0.8} className="home__button-container">
              <Button href="/trash4goods" variant="primary" size="sm">
                {t.t4g.button}
                <ArrowIcon />
              </Button>
            </AnimateOnScroll>
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

          {/* Scheme: Hardware + Software + App Cidadão → P(L)AYT */}
          <AnimateOnScroll animation="fadeSlideUp" delay={0} duration={0.8}>
            <div className="home__scheme home__scheme--paylt">
              <div className="home__scheme-items">
                <div className="home__scheme-pill">Hardware</div>
                <span className="home__scheme-plus">+</span>
                <div className="home__scheme-pill">Software</div>
                <span className="home__scheme-plus">+</span>
                <div className="home__scheme-pill home__scheme-pill--dark">App Cidadão</div>
              </div>
              <div className="home__scheme-arrow">
                <svg width="40" height="2" viewBox="0 0 40 2" fill="none">
                  <line x1="0" y1="1" x2="40" y2="1" stroke="#94C11F" strokeWidth="2" />
                </svg>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M0 0L10 5L0 10V0Z" fill="#94C11F" />
                </svg>
              </div>
              <div className="home__scheme-logo">
                <img src={logoPlayt} alt="P(L)AYT" />
              </div>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Rainbow image with municipio/cidadao advantages; CTA below */}
        <div className="playt-layers-container playt-layers-container--wide">
          <div className="playt-layers playt-layers--wide">
            <AnimateOnScroll animation="fadeIn" delay={200} duration={0.6}>
              <div className="playt-layers__image-only">
                <img src={payltInfoImage} alt="Playt ecosystem" loading="lazy" />
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeSlideUp" delay={300} duration={0.6}>
              <div className="playt-layers__below-cta">
                <Button href="/paylt" variant="primary" size="sm" className="playt-layers__cta-btn">
                  {t.paylt.button}
                  <ArrowIcon />
                </Button>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

    </div>
  );
};
