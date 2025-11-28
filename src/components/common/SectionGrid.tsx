import React from 'react';
import { Button } from './Button';
import { AnimateOnScroll } from '../ui/AnimateOnScroll';
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
            <AnimateOnScroll animation="fadeSlideUp" delay={100} duration={0.8}>
              <h2 className="section-grid__heading">{heading}</h2>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeSlideUp" delay={250} duration={0.8}>
              <div className={`section-grid__text-wrapper ${hasScrollableText ? 'section-grid__text-wrapper--scrollable' : ''}`}>
                {typeof text === 'string' ? (
                  <p className="section-grid__text">{text}</p>
                ) : (
                  <div className="section-grid__text">{text}</div>
                )}
              </div>
            </AnimateOnScroll>
            {children}
            <AnimateOnScroll animation="fadeSlideUp" delay={400} duration={0.8}>
              {buttonText && buttonHref && (
                <Button href={buttonHref} variant="primary" size="sm">
                  {buttonText}
                </Button>
              )}
            </AnimateOnScroll>
          </div>
          <AnimateOnScroll
            animation={reverse ? "fadeSlideLeft" : "fadeSlideRight"}
            delay={0}
            duration={0.9}
            className="section-grid__image"
          >
            <div className="section-grid__image-placeholder">
              <img src={imageSrc} alt={imageAlt} />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};






