import React from 'react';
import { FullPageHero } from '../components/common/FullPageHero';
import { Carousel } from '../components/ui/Carousel';
import { useLanguage } from '../contexts/LanguageContext';
import { accessTranslations } from '../translations/access';
import accessHeroImage from '../assets/ACCESS.webp';
import access1Image from '../assets/access1.webp';
import accessCar1Image from '../assets/access_car1.webp';
import screenImage from '../assets/screen.webp';
import systemsImage from '../assets/systems.webp';
import payltTecnoImage from '../assets/paylt_tecno.webp';
import './Access.css';

export const Access: React.FC = () => {
  const { language } = useLanguage();
  const t = accessTranslations[language];

  const images = [access1Image, screenImage, payltTecnoImage];
  
  const carouselItems = t.carousel.map((item, index) => ({
    id: String(index + 1),
    title: item.title,
    description: item.description,
    image: images[index]
  }));

  return (
    <div className="access">
      <FullPageHero 
        title={t.hero.title}
        description={t.hero.description}
        backgroundImage={accessHeroImage}
        showButton={false}
      />
      
      <section className="access__intro section">
        <div className="container">
          <div className="access__intro-content">
            <h2>{t.intro.title}</h2>
            <p>
              {t.intro.text1}
            </p>
            <p>
              {t.intro.text2}
            </p>
            {t.intro.text3 && (
              <p>
                {t.intro.text3}
              </p>
            )}
          </div>
        </div>
      </section>
      
      <section className="access__image-section">
        <div className="container">
          <img 
            src={accessCar1Image} 
            alt="Access car" 
            className="access__car-image"
          />
        </div>
      </section>
      
      <Carousel items={carouselItems} />
      
      <section className="access__content section">
        <div className="container">
          <div className="access__text-content">
            <h2>{t.compatibility.title}</h2>
            <img src={systemsImage} alt="Sistemas de resíduos compatíveis" />
          </div>
        </div>
      </section>
    </div>
  );
};
