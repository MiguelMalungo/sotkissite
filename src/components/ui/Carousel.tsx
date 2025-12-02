import React, { useState, useEffect } from 'react';
import './Carousel.css';

export interface CarouselItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface CarouselProps {
  items: CarouselItem[];
}

export const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (isMobile) {
    // Mobile version: Single slide with dots
    return (
      <section className="carousel carousel--mobile">
        <div className="carousel__mobile-container">
          <div className="carousel__mobile-slide">
            <div className="carousel__mobile-image">
              <img src={items[currentIndex].image} alt={items[currentIndex].title} />
            </div>
            <div className="carousel__mobile-content">
              <h3 className="carousel__mobile-title">{items[currentIndex].title}</h3>
              <p className="carousel__mobile-description">{items[currentIndex].description}</p>
            </div>
          </div>
          <div className="carousel__mobile-dots">
            {items.map((_, index) => (
              <button
                key={index}
                className={`carousel__mobile-dot ${index === currentIndex ? 'carousel__mobile-dot--active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Desktop version: Horizontal scroll
  return (
    <section className="carousel">
      <div className="carousel__container">
        <div className="carousel__wrapper">
          <div className="carousel__track">
            {items.map((item) => (
              <div key={item.id} className="carousel__slide">
                <div className="carousel__slide-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="carousel__slide-content">
                  <h3 className="carousel__slide-title">{item.title}</h3>
                  <p className="carousel__slide-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="carousel__blur-overlay" />
    </section>
  );
};

