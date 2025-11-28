import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './AnimateOnScroll.css';

export type AnimationType = 'fade' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'blur' | 'fadeSlideUp' | 'fadeSlideDown' | 'fadeSlideLeft' | 'fadeSlideRight' | 'fadeBlur' | 'scaleUp';

export interface AnimateOnScrollProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({
  children,
  animation = 'fadeSlideUp',
  delay = 0,
  duration = 0.8,
  threshold = 0.1,
  rootMargin = '0px',
  triggerOnce = true,
  className = '',
  as: Component = 'div',
}) => {
  const { elementRef, isVisible } = useScrollAnimation({
    threshold,
    rootMargin,
    triggerOnce,
  });

  return React.createElement(
    Component,
    {
      ref: elementRef,
      className: `animate-on-scroll ${animation ? `animate-on-scroll--${animation}` : ''} ${isVisible ? 'animate-on-scroll--visible' : ''} ${className}`,
      style: {
        '--animation-delay': `${delay}ms`,
        '--animation-duration': `${duration}s`,
      } as React.CSSProperties,
    },
    children
  );
};
