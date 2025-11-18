import React from 'react';
import { Button } from './Button';
import './Hero.css';

export interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryCTA?: {
    text: string;
    href?: string;
    onClick?: () => void;
  };
  secondaryCTA?: {
    text: string;
    href?: string;
    onClick?: () => void;
  };
  backgroundImage?: string;
  overlay?: boolean;
  centered?: boolean;
}

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  backgroundImage,
  overlay = false,
  centered = true,
}) => {
  return (
    <section 
      className={`hero ${centered ? 'hero--centered' : ''}`}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
    >
      {overlay && <div className="hero__overlay" />}
      <div className="hero__container container">
        <div className="hero__content">
          {subtitle && (
            <p className="hero__subtitle fade-in-up">{subtitle}</p>
          )}
          <h1 className="hero__title fade-in-up">{title}</h1>
          {description && (
            <p className="hero__description fade-in-up">{description}</p>
          )}
          {(primaryCTA || secondaryCTA) && (
            <div className="hero__actions fade-in-up">
              {primaryCTA && (
                <Button
                  href={primaryCTA.href}
                  onClick={primaryCTA.onClick}
                  size="lg"
                  variant="primary"
                >
                  {primaryCTA.text}
                </Button>
              )}
              {secondaryCTA && (
                <Button
                  href={secondaryCTA.href}
                  onClick={secondaryCTA.onClick}
                  size="lg"
                  variant="outline"
                >
                  {secondaryCTA.text}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

