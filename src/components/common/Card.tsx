import React from 'react';
import './Card.css';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = false,
  padding = 'md',
}) => {
  return (
    <div className={`card card--padding-${padding} ${hover ? 'card--hover' : ''} ${className}`}>
      {children}
    </div>
  );
};

