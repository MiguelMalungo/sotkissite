import React from 'react';
import { AnimateOnScroll, type AnimationType } from '../ui/AnimateOnScroll';
import './Card.css';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
  animate?: boolean;
  animation?: AnimationType;
  animationDelay?: number;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = false,
  padding = 'md',
  animate = false,
  animation = 'fadeSlideUp',
  animationDelay = 0,
}) => {
  const cardContent = (
    <div className={`card card--padding-${padding} ${hover ? 'card--hover' : ''} ${className}`}>
      {children}
    </div>
  );

  if (animate) {
    return (
      <AnimateOnScroll animation={animation} delay={animationDelay} duration={0.8}>
        {cardContent}
      </AnimateOnScroll>
    );
  }

  return cardContent;
};

