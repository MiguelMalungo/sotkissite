import React from 'react';
import { Button } from './Button';
import './SectionGrid.css';

export interface SectionGridProps {
  heading: string;
  text: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  buttonText?: string;
  buttonHref?: string;
  reverse?: boolean;
  backgroundColor?: 'primary' | 'secondary';
  gridColumns?: string;
  hasScrollableText?: boolean;
  children?: React.ReactNode;
}

export const SectionGrid: React.FC<SectionGridProps> = ({
  heading,
  text,
  imageSrc,
  imageAlt,
  buttonText,
  buttonHref,
  reverse = false,
  backgroundColor = 'secondary',
  gridColumns,
  hasScrollableText = false,
  children,
}) => {
  return (
    <section className={`section-grid section-grid--bg-${backgroundColor}`}>
      <div className="container">
        <div 
          className={`section-grid__layout ${reverse ? 'section-grid__layout--reverse' : ''}`}
          style={gridColumns ? { gridTemplateColumns: gridColumns } : undefined}
        >
          <div className="section-grid__content">
            <h2 className="section-grid__heading">{heading}</h2>
            <div className={`section-grid__text-wrapper ${hasScrollableText ? 'section-grid__text-wrapper--scrollable' : ''}`}>
              {typeof text === 'string' ? (
                <p className="section-grid__text">{text}</p>
              ) : (
                <div className="section-grid__text">{text}</div>
              )}
            </div>
            {children}
            {buttonText && buttonHref && (
              <Button href={buttonHref} variant="primary" size="sm">
                {buttonText}
              </Button>
            )}
          </div>
          <div className="section-grid__image">
            <div className="section-grid__image-placeholder">
              <img src={imageSrc} alt={imageAlt} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};






