import React, { useState } from 'react';
import { AnimateOnScroll } from '../components/ui/AnimateOnScroll';
import { AnimatedHeroTitle } from '../components/ui/AnimatedHeroTitle';
import { useLanguage } from '../contexts/LanguageContext';
import { levelTranslations } from '../translations/level';
const levelVideo = new URL('../assets/level.mp4', import.meta.url).href;
import level2Image from '../assets/level2.webp';
import levelHeroImage from '../assets/levelhero.webp';
import levelPhotoImage from '../assets/levelphoto.webp';
import levelSondaImage from '../assets/LEVEL-SondaREEN2-1.webp';
import sensorImage from '../assets/sensor.webp';
import infographicImage from '../assets/infograficoplayt.webp';
import levelCompativelImage from '../assets/levelcompativel.webp';
import './Level.css';

export const Level: React.FC = () => {
  const { language } = useLanguage();
  const t = levelTranslations[language];
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVideoMuted, setIsVideoMuted] = useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

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
    <div className="level">
      <section className="level__hero">
        <img
          src={level2Image}
          alt="SOTKIS Level"
          className="level__hero-image"
        />
        <div className="level__hero-overlay"></div>
        <div className="level__hero-content container">
          <div className="level__hero-text-content">
            <AnimatedHeroTitle text={t.hero.title} className="level__hero-title" delay={0} />
            <button className="level__hero-button" onClick={openVideoModal}>
              <span>{t.hero.button}</span>
              <div className="level__hero-button-icon">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </section>

      <section className="level__intro section">
        <div className="container">
          <div className="level__intro-content">
            <AnimateOnScroll animation="fadeSlideUp" delay={0} duration={0.8}>
              <h2>{t.intro.title}</h2>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeSlideUp" delay={150} duration={0.8}>
              <p>
                {t.intro.description}
              </p>
            </AnimateOnScroll>
          </div>
          <div className="level__intro-images">
            <AnimateOnScroll animation="fadeSlideLeft" delay={0} duration={0.9} className="level__intro-wrapper--left">
              <img
                src={levelPhotoImage}
                alt="Level photo"
                className="level__intro-image"
              />
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeSlideRight" delay={200} duration={0.9} className="level__intro-wrapper--right">
              <img
                src={levelSondaImage}
                alt="Level SondaREEN"
                className="level__intro-image"
              />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <section className="level__sensor-section section">
        <div className="container">
          <div className="level__sensor-content">
            <AnimateOnScroll animation="fadeSlideUp" delay={0} duration={0.8}>
              <h2>{t.sensor.title}</h2>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeSlideUp" delay={150} duration={0.8}>
              <p>
                {t.sensor.description}
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <section className="level__image-section">
        <div className="container">
          <AnimateOnScroll animation="scaleUp" delay={0} duration={1}>
            <img
              src={sensorImage}
              alt="Sensor"
              className="level__sensor-image"
            />
          </AnimateOnScroll>
        </div>
      </section>

      <section className="level__stages-section">
        <div className="container">
          <AnimateOnScroll animation="fadeSlideUp" delay={0} duration={0.8}>
            <h2 className="level__stages-title">{t.stages.title}</h2>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fadeBlur" delay={200} duration={1}>
            <img
              src={infographicImage}
              alt="Infographic"
              className="level__infographic-image"
            />
          </AnimateOnScroll>
        </div>
      </section>

      <section className="level__content section">
        <div className="container">
          <AnimateOnScroll animation="fadeSlideUp" delay={0} duration={0.8}>
            <h2 className="level__compatible-title">{t.compatibility.title}</h2>
          </AnimateOnScroll>
          <AnimateOnScroll animation="scaleUp" delay={200} duration={0.9}>
            <img
              src={levelCompativelImage}
              alt="Sistemas de resíduos compatíveis"
              className="level__compatible-image"
            />
          </AnimateOnScroll>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="level__video-modal" onClick={closeVideoModal}>
          <div className="level__video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="level__video-modal-close" onClick={closeVideoModal} aria-label="Close video">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <video
              ref={videoRef}
              className="level__video-modal-video"
              autoPlay
              controls
              onClick={togglePlayPause}
            >
              <source src={levelVideo} type="video/mp4" />
            </video>
            <div className="level__video-modal-controls">
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
    </div>
  );
};
