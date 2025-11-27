import React from 'react';
import { FullPageHero } from '../components/common/FullPageHero';
import { Carousel } from '../components/ui/Carousel';
import { useLanguage } from '../contexts/LanguageContext';
import { drsTranslations } from '../translations/drs';
import drsHeroImage from '../assets/DRS.webp';
import drs1Image from '../assets/drs1.webp';
import drs2Image from '../assets/drs2.webp';
import drs3Image from '../assets/drs3.webp';
import drs4Image from '../assets/drs4.webp';
import './DRS.css';

export const DRS: React.FC = () => {
  const { language } = useLanguage();
  const t = drsTranslations[language];

  const images = [drs3Image, drs4Image];

  const carouselItems = t.carousel.map((item, index) => ({
    id: String(index + 1),
    title: item.title,
    description: item.description,
    image: images[index]
  }));

  return (
    <div className="drs">
      <FullPageHero
        title={t.hero.title}
        description={t.hero.description}
        backgroundImage={drsHeroImage}
        showButton={false}
      />

      <section className="drs__content section">
        <div className="container">
          <div className="drs__text-content">
            <h2>{t.content.title}</h2>
            <p>
              {t.content.text1}
            </p>
            <p>
              {t.content.text2}
            </p>
            <p>
              {t.content.text3}
            </p>
          </div>
          <div className="drs__content-image">
            <img
              src={drs1Image}
              alt="DRS system"
              className="drs__image"
            />
          </div>
        </div>
      </section>

      <Carousel items={carouselItems} />

      <section className="drs__image-section drs__image-section--bottom">
        <div className="container">
          <img
            src={drs2Image}
            alt="DRS system"
            className="drs__image"
          />
        </div>
      </section>
    </div>
  );
};

