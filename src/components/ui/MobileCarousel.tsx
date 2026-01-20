import React, { useState, useEffect, ReactNode } from 'react';
import './MobileCarousel.css';

export interface MobileCarouselProps {
  children: ReactNode[];
  className?: string;
  mobileBreakpoint?: number;
}

export const MobileCarousel: React.FC<MobileCarouselProps> = ({
  children,
  className = '',
  mobileBreakpoint = 768
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= mobileBreakpoint);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [mobileBreakpoint]);

  const childArray = React.Children.toArray(children);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (!isMobile) {
    return <>{children}</>;
  }

  return (
    <div className={`mobile-carousel ${className}`}>
      <div className="mobile-carousel__container">
        <div className="mobile-carousel__slide">
          {childArray[currentIndex]}
        </div>
        <div className="mobile-carousel__navigation">
          <div className="mobile-carousel__dots-container">
            {childArray.map((_, index) => (
              <button
                key={index}
                className={`mobile-carousel__dot ${index === currentIndex ? 'mobile-carousel__dot--active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
