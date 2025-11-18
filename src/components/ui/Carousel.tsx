import React, { useState } from 'react';
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

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="carousel">
      <div className="container">
        <div className="carousel__container">
          <div className="carousel__dots-wrapper">
            <div className="carousel__dots">
              {items.map((_, index) => (
                <button
                  key={index}
                  className={`carousel__dot ${index === currentIndex ? 'carousel__dot--active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
          <div className="carousel__wrapper">
            <div 
              className="carousel__track"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {items.map((item, index) => (
                <div 
                  key={item.id} 
                  className="carousel__slide"
                  onClick={() => {
                    if (index === 0 && items.length > 1) {
                      goToSlide(1);
                    }
                  }}
                  style={{ cursor: index === 0 && items.length > 1 ? 'pointer' : 'default' }}
                >
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
            <div className="carousel__dots carousel__dots--inside">
              {items.map((_, index) => (
                <button
                  key={index}
                  className={`carousel__dot ${index === currentIndex ? 'carousel__dot--active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

