import React, { useState } from 'react';
import './FeatureCarousel.css';

export interface FeatureItem {
  id: string;
  label: string;
  description: string;
  image: string;
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

  const handleFeatureClick = (index: number) => {
    setActiveIndex(index);
  };

  const isFullBackground = variant === 'full-background';

  return (
    <section
      className={`feature-carousel feature-carousel--${imagePosition} ${isFullBackground ? 'feature-carousel--full-background' : ''}`}
      style={!isFullBackground ? { backgroundColor } : undefined}
    >
      {isFullBackground && (
        <>
          <div className="feature-carousel__background-image-container">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className={`feature-carousel__background-image ${index === activeIndex ? 'feature-carousel__background-image--active' : ''}`}
                style={{ backgroundImage: `url(${feature.image})` }}
              />
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
                <img
                  src={features[activeIndex]?.image}
                  alt={features[activeIndex]?.label}
                  className="feature-carousel__image"
                />
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
