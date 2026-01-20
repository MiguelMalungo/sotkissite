import React, { useState, useEffect, useRef } from 'react';
import './FeatureCarousel.css';

export interface FeatureItem {
  id: string;
  label: string;
  description: string;
  image: string;
  isVideo?: boolean;
}

export interface FeatureCarouselProps {
  title: string;
  subtitle?: string;
  features: FeatureItem[];
  imagePosition?: 'left' | 'right';
  backgroundColor?: string;
  variant?: 'default' | 'full-background';
}

export const FeatureCarousel: React.FC<FeatureCarouselProps> = ({
  title,
  subtitle,
  features,
  imagePosition = 'right',
  backgroundColor = '#F4FBFC',
  variant = 'default'
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleFeatureClick = (index: number) => {
    setActiveIndex(index);
  };

  const isFullBackground = variant === 'full-background';

  // Parallax effect for video
  useEffect(() => {
    if (!isFullBackground || !videoRef.current || !features[activeIndex]?.isVideo) return;

    const handleScroll = () => {
      const video = videoRef.current;
      const container = containerRef.current;
      if (!video || !container) return;

      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate scroll progress: 0 when section enters viewport, 1 when it leaves
      const scrollProgress = Math.max(0, Math.min(1,
        (windowHeight - rect.top) / (windowHeight + rect.height)
      ));

      // Move between -50px and 50px for more visible parallax
      const translateY = (scrollProgress - 0.5) * 100;

      video.style.transform = `translate(-50%, calc(-50% + ${translateY}px)) scale(1.15)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isFullBackground, activeIndex, features]);

  return (
    <section
      ref={containerRef}
      className={`feature-carousel feature-carousel--${imagePosition} ${isFullBackground ? 'feature-carousel--full-background' : ''}`}
      style={!isFullBackground ? { backgroundColor } : undefined}
    >
      {isFullBackground && (
        <>
          <div className="feature-carousel__background-image-container">
            {features.map((feature, index) => (
              feature.isVideo ? (
                <video
                  key={feature.id}
                  ref={index === activeIndex ? videoRef : null}
                  src={feature.image}
                  className={`feature-carousel__background-image ${index === activeIndex ? 'feature-carousel__background-image--active' : ''}`}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <div
                  key={feature.id}
                  className={`feature-carousel__background-image ${index === activeIndex ? 'feature-carousel__background-image--active' : ''}`}
                  style={{ backgroundImage: `url(${feature.image})` }}
                />
              )
            ))}
          </div>
          <div className="feature-carousel__overlay"></div>
        </>
      )}

      <div className="feature-carousel__container">
        <div className="feature-carousel__content">
          <div className="feature-carousel__text-side">
            <div className="feature-carousel__header">
              {title && <h2 className="feature-carousel__title">{title}</h2>}
              {subtitle && (
                <p className="feature-carousel__subtitle">{subtitle}</p>
              )}
            </div>
            <div className="feature-carousel__features">
              {features.map((feature, index) => (
                <button
                  key={feature.id}
                  className={`feature-carousel__feature-pill ${index === activeIndex ? 'feature-carousel__feature-pill--active' : ''}`}
                  onClick={() => handleFeatureClick(index)}
                >
                  {index !== activeIndex && (
                    <span className="feature-carousel__feature-icon">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" />
                        <line x1="12" y1="8" x2="12" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <line x1="8" y1="12" x2="16" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </span>
                  )}
                  <span className="feature-carousel__feature-label">{feature.label}</span>
                </button>
              ))}
            </div>
          </div>

          {!isFullBackground ? (
            <div className="feature-carousel__image-side">
              <div className="feature-carousel__image-wrapper">
                {features[activeIndex]?.isVideo ? (
                  <video
                    src={features[activeIndex]?.image}
                    className="feature-carousel__image"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <img
                    src={features[activeIndex]?.image}
                    alt={features[activeIndex]?.label}
                    className="feature-carousel__image"
                  />
                )}
              </div>
              {/* Description below the image */}
              <div className="feature-carousel__description">
                <p>{features[activeIndex]?.description}</p>
              </div>
            </div>
          ) : (
            <div className="feature-carousel__active-description">
              <p>{features[activeIndex]?.description}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
