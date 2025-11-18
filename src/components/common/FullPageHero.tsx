import React from 'react';
import { Button } from './Button';
import './FullPageHero.css';

export interface FullPageHeroProps {
  title?: string;
  description?: string;
  backgroundImage?: string;
  showButton?: boolean;
}

export const FullPageHero: React.FC<FullPageHeroProps> = ({
  title,
  description,
  backgroundImage,
  showButton = true,
}) => {
  return (
    <section 
      className="full-page-hero"
      style={{ backgroundColor: 'white' }}
    >
      {backgroundImage && (
        <>
          <div 
            className="full-page-hero__background"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="full-page-hero__overlay" />
        </>
      )}
      <div className="full-page-hero__container container">
        {(title || description) ? (
          <div className="full-page-hero__content">
            {title && <h1 className="full-page-hero__title">{title}</h1>}
            {description && (
              <div className="full-page-hero__description">
                <p>{description}</p>
                {showButton && (
                  <div className="full-page-hero__cta">
                    <Button href="/contact" variant="primary" size="md">
                      Enquire now
                    </Button>
                  </div>
                )}
              </div>
            )}
          </div>
        ) : showButton ? (
          <div className="full-page-hero__cta">
            <Button href="/contact" variant="primary" size="md">
              Enquire now
            </Button>
          </div>
        ) : null}
      </div>
    </section>
  );
};

