import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  href?: string;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  href,
  className = '',
  disabled = false,
  type = 'button',
}) => {
  const baseClassName = `button button--${variant} button--${size} ${className}`;

  if (href) {
    // Check if it's an external link or hash link
    const isExternal = href.startsWith('http://') || href.startsWith('https://');
    const isHash = href.startsWith('#');
    
    if (isExternal || isHash) {
      return (
        <a href={href} className={baseClassName}>
          {children}
        </a>
      );
    }
    
    // Use React Router Link for internal navigation
    return (
      <Link to={href} className={baseClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={baseClassName}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

