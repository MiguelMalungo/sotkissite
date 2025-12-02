import React from 'react';
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

