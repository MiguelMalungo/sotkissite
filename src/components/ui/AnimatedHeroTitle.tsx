import React, { useEffect, useRef, useState } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './AnimatedHeroTitle.css';

export interface AnimatedHeroTitleProps {
  text: string;
  className?: string;
  delay?: number;
  as?: 'h1' | 'h2';
  animateAllLines?: boolean;
}

export const AnimatedHeroTitle: React.FC<AnimatedHeroTitleProps> = ({
  text,
  className = '',
  delay = 0,
  as: Component = 'h2',
  animateAllLines = false,
}) => {
  const { elementRef, isVisible } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true
  });
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    if (isVisible && !animationStarted) {
      const timer = setTimeout(() => {
        setAnimationStarted(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isVisible, delay, animationStarted]);

  // Split by newline to handle multi-line titles
  const lines = text.split('\n');

  return (
    <Component
      ref={elementRef as React.RefObject<HTMLHeadingElement>}
      className={`animated-hero-title ${className}`}
    >
      {lines.map((line, lineIndex) => {
        // Animate first line always, and other lines if animateAllLines is true
        const shouldAnimate = lineIndex === 0 || animateAllLines;

        if (shouldAnimate) {
          const upperLine = line.toUpperCase();
          const letters = upperLine.split('');
          // Calculate cumulative delay for subsequent lines
          const previousLinesLength = lines.slice(0, lineIndex).reduce((acc, l) => acc + l.length, 0);
          const baseDelay = lineIndex * 100 + previousLinesLength * 50;

          return (
            <span key={lineIndex} className="animated-hero-title__line">
              {letters.map((letter, letterIndex) => (
                <span
                  key={letterIndex}
                  className={`animated-hero-title__letter ${animationStarted ? 'animated-hero-title__letter--visible' : ''}`}
                  style={{
                    animationDelay: animationStarted ? `${baseDelay + letterIndex * 50}ms` : '0ms'
                  }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </span>
              ))}
            </span>
          );
        } else {
          // Second line and beyond: no animation, regular font, lowercase
          return (
            <span key={lineIndex} className="animated-hero-title__line animated-hero-title__line--static">
              {line}
            </span>
          );
        }
      })}
    </Component>
  );
};
