import React, { useState } from 'react';
import { AnimateOnScroll } from '../components/ui/AnimateOnScroll';
import { AnimatedHeroTitle } from '../components/ui/AnimatedHeroTitle';
import { MobileCarousel } from '../components/ui/MobileCarousel';
import { useLanguage } from '../contexts/LanguageContext';
import { accessTranslations } from '../translations/access';
import accessHeroImage from '../assets/0058-frame.webp';
import access1Image from '../assets/access1.webp';
import accessSuperficieImage from '../assets/AccessSuperficie.webp';
import accessAppT4GImage from '../assets/AccessAppT4G.webp';
import marcoExplodImage from '../assets/marco-ikon-flex-EXPLOD.172.webp';
import restrictor0042Image from '../assets/0042-frame.webp';
import smartTagImage from '../assets/smart-tag.webp';
import smartCardImage from '../assets/smart-card.webp';
import smartphoneImage from '../assets/smartphone.webp';
import conectarImage from '../assets/conectar.webp';
import tambor1Image from '../assets/access-com-restritor-volume-1.webp';
import tambor2Image from '../assets/access-com-restritor-volume.webp';
import alcapao1Image from '../assets/access-com-restritor-volume-2.webp';
import alcapao2Image from '../assets/access-com-restritor-volume-3.webp';
import alcapao3Image from '../assets/access-com-restritor-volume-4.webp';

import './Access.css';

export const Access: React.FC = () => {
  const { language } = useLanguage();
  const t = accessTranslations[language];
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const openVideoModal = () => {
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
  };

  const images = [access1Image, accessSuperficieImage, accessAppT4GImage];

  const cardItems = t.carousel.map((item, index) => ({
    id: String(index + 1),
    title: item.title,
    description: item.description,
    image: images[index]
  }));

  return (
    <div className="access">
      <section className="access__hero">
        <img
          src={accessHeroImage}
          alt="SOTKIS Access"
          className="access__hero-image"
        />
        <div className="access__hero-overlay"></div>
        <div className="access__hero-content container">
          <div className="access__hero-text-content">
            <AnimatedHeroTitle text={t.hero.title} className="access__hero-title" delay={0} />
            <button className="access__hero-button" onClick={openVideoModal}>
              <span>{t.hero.button}</span>
              <div className="access__hero-button-icon">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </section>

      <section className="access__intro section">
        <div className="container">
          <div className="access__intro-content">
            <AnimateOnScroll animation="fadeSlideUp" delay={0} duration={0.8}>
              <h2>{t.intro.title}</h2>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeSlideUp" delay={150} duration={0.8}>
              <p>
                {t.intro.text1}
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeSlideUp" delay={300} duration={0.8}>
              <p>
                {t.intro.text2}
              </p>
            </AnimateOnScroll>
            {(() => {
              const intro = t.intro as { title: string; text1: string; text2: string; text3?: string };
              return intro.text3 ? (
                <AnimateOnScroll animation="fadeSlideUp" delay={450} duration={0.8}>
                  <p>
                    {intro.text3}
                  </p>
                </AnimateOnScroll>
              ) : null;
            })()}
          </div>
        </div>
      </section>

      <section className="access__cards section">
        {/* Desktop Grid */}
        <div className="access__cards-grid access__cards-grid--desktop">
          {cardItems.map((item, index) => (
            <AnimateOnScroll
              key={item.id}
              animation="fadeSlideUp"
              delay={index * 150}
              duration={0.8}
              className="access__card"
            >
              <div className="access__card-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="access__card-content">
                <h3 className="access__card-title">{item.title}</h3>
                <p className="access__card-description">{item.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="access__cards-carousel">
          <MobileCarousel>
            {cardItems.map((item) => (
              <div key={item.id} className="access__card">
                <div className="access__card-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="access__card-content">
                  <h3 className="access__card-title">{item.title}</h3>
                  <p className="access__card-description">{item.description}</p>
                </div>
              </div>
            ))}
          </MobileCarousel>
        </div>
      </section>

      <section className="access__technical section">
        <div className="container">
          <div className="access__technical-content">
            <AnimateOnScroll animation="fadeSlideUp" delay={0} duration={0.8}>
              <h2>Características técnicas</h2>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeSlideUp" delay={150} duration={0.8}>
              <p>
                O SOTKIS Access integra uma fechadura eletromecânica e um módulo eletrónico que inclui as antenas e baterias. Num horário predefinido, o sistema envia as informações das sessões de depósito para a plataforma web usando uma comunicação GSM.
              </p>
            </AnimateOnScroll>
            <div className="access__technical-layout">
              <AnimateOnScroll animation="fadeSlideUp" delay={300} duration={0.8} className="access__technical-item">
                <div>
                  <h3>Fechadura eletromecânica</h3>
                  <p>Bloqueia a tampa do marco de deposição e, assim, restringe o acesso ao contentor de resíduos.</p>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll animation="scaleUp" delay={200} duration={0.9} className="access__technical-image-wrapper">
                <img src={marcoExplodImage} alt="Marco explodido" className="access__technical-image" />
              </AnimateOnScroll>
              <AnimateOnScroll animation="fadeSlideUp" delay={400} duration={0.8} className="access__technical-item">
                <div>
                  <h3>Caixa eletrónica</h3>
                  <p>É composta pelo quadro eletrónico principal e inclui o leitor RFID, as baterias, os módulos GSM e as antenas.</p>
                </div>
              </AnimateOnScroll>
            </div>

            {/* Devices sub-section */}
            <AnimateOnScroll animation="fadeSlideUp" delay={200} duration={0.8} className="access__devices">
              <div className="access__devices-text">
                <p>O sistema admite múltiplos formatos de identificação para garantir flexibilidade operacional.</p>
              </div>
              <div className="access__devices-grid">
                <div className="access__device-item">
                  <img src={smartTagImage} alt="Smart Tag" className="access__device-image" />
                  <p className="access__device-name"><strong>Smart Tag</strong></p>
                  <p className="access__device-type">(RFID)</p>
                </div>
                <div className="access__device-item">
                  <img src={smartCardImage} alt="Smart Card" className="access__device-image" />
                  <p className="access__device-name"><strong>Smart Card</strong></p>
                  <p className="access__device-type">(RFID)</p>
                </div>
                <div className="access__device-item access__device-item--bluetooth">
                  <div className="access__device-image-wrapper">
                    <img src={smartphoneImage} alt="Smartphone" className="access__device-image" />
                    <div className="access__bluetooth-badge">
                      <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.71 7.71L12 2h-1v7.59L6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 5.83l1.88 1.88L13 9.59V5.83zm1.88 10.46L13 18.17v-3.76l1.88 1.88z"/>
                      </svg>
                    </div>
                  </div>
                  <p className="access__device-name"><strong>Smartphone</strong></p>
                  <p className="access__device-type">(Bluetooth)</p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <section className="access__restrictor section">
        <div className="container">
          <div className="access__restrictor-content">
            <AnimateOnScroll animation="fadeSlideUp" delay={0} duration={0.8}>
              <h2>SOTKIS ACCESS COM RESTRITOR DE VOLUME</h2>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeSlideUp" delay={150} duration={0.8}>
              <p>
                O SOTKIS Access, por meio da instalação de um restritor volumétrico no marco de deposição, viabiliza a implementação do princípio PAYT. O "pay-as-you-throw" é um sistema em que os residentes pagam pelos resíduos de acordo com a quantidade que produzem, sendo considerado um sistema de pagamento mais justo. Dependendo do marco de deposição ou do contentor existem diferentes restritores de volume disponíveis.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll animation="scaleUp" delay={200} duration={0.9}>
              <img src={restrictor0042Image} alt="Restritor de volume" className="access__restrictor-image" />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <section className="access__how-it-works section">
        <div className="container">
          <div className="access__how-it-works-content">
            <AnimateOnScroll animation="fadeSlideUp" delay={0} duration={0.8}>
              <h2>Como Funciona</h2>
            </AnimateOnScroll>

            {/* Sequence 1 - Tambor duplo — Desktop */}
            <AnimateOnScroll animation="fadeSlideUp" delay={200} duration={0.8} className="access__how-sequence access__how-desktop">
              <div className="access__how-sequence-text">
                <p>Para a sua implementação, é necessário um tambor duplo aplicado no contentor enterrado, semienterrado ou de superfície, equipado com o módulo de acesso SOTKIS. O tambor, que varia de 30 a 100 litros, restringe o volume das deposições e só autoriza um depósito por conexão.</p>
              </div>
              <div className="access__how-sequence-steps">
                <div className="access__how-step">
                  <div className="access__how-step-top">
                    <div className="access__how-step-number">1</div>
                    <div className="access__how-step-arrow"></div>
                  </div>
                  <p className="access__how-step-label"><strong>Conectar</strong></p>
                  <div className="access__how-step-image">
                    <img src={conectarImage} alt="Conectar" />
                  </div>
                </div>
                <div className="access__how-step">
                  <div className="access__how-step-top">
                    <div className="access__how-step-number">2</div>
                    <div className="access__how-step-arrow"></div>
                  </div>
                  <p className="access__how-step-label"><strong>Abrir, rodar o tambor</strong> e depositar sobre a superfície interior do tambor</p>
                  <div className="access__how-step-image">
                    <img src={tambor1Image} alt="Rodar o tambor" />
                  </div>
                </div>
                <div className="access__how-step access__how-step--last">
                  <div className="access__how-step-top">
                    <div className="access__how-step-number">3</div>
                  </div>
                  <p className="access__how-step-label"><strong>Rodar o tambor e fechar completamente</strong> o sistema, permitindo a entrada dos resíduos no contentor</p>
                  <div className="access__how-step-image access__how-step-image--double">
                    <img src={tambor1Image} alt="Tambor fechado" />
                    <img src={tambor2Image} alt="Resíduos no contentor" />
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Sequence 1 - Tambor duplo — Mobile */}
            <div className="access__how-mobile">
              <p className="access__how-mobile-desc">Para a sua implementação, é necessário um tambor duplo aplicado no contentor enterrado, semienterrado ou de superfície, equipado com o módulo de acesso SOTKIS. O tambor, que varia de 30 a 100 litros, restringe o volume das deposições e só autoriza um depósito por conexão.</p>
              <MobileCarousel>
                <div className="access__how-slide">
                  <div className="access__how-slide-number">1</div>
                  <p className="access__how-slide-label"><strong>Conectar</strong></p>
                  <div className="access__how-slide-image">
                    <img src={conectarImage} alt="Conectar" />
                  </div>
                </div>
                <div className="access__how-slide">
                  <div className="access__how-slide-number">2</div>
                  <p className="access__how-slide-label"><strong>Abrir, rodar o tambor</strong> e depositar sobre a superfície interior do tambor</p>
                  <div className="access__how-slide-image">
                    <img src={tambor1Image} alt="Rodar o tambor" />
                  </div>
                </div>
                <div className="access__how-slide">
                  <div className="access__how-slide-number">3</div>
                  <p className="access__how-slide-label"><strong>Rodar o tambor e fechar completamente</strong> o sistema, permitindo a entrada dos resíduos no contentor</p>
                  <div className="access__how-slide-image access__how-slide-image--double">
                    <img src={tambor1Image} alt="Tambor fechado" />
                    <img src={tambor2Image} alt="Resíduos no contentor" />
                  </div>
                </div>
              </MobileCarousel>
            </div>

            {/* Sequence 2 - Alçapão — Desktop */}
            <AnimateOnScroll animation="fadeSlideUp" delay={300} duration={0.8} className="access__how-sequence access__how-desktop">
              <div className="access__how-sequence-text">
                <p>Para sistemas enterrados, pode também ser implementado um alçapão interior no marco de deposição, com restritor de volume, equipado com o módulo de acesso SOTKIS.</p>
                <p>Do mesmo modo, após a abertura do Sotkis Access, o alçapão de 35 litros, limita o volume das deposições e só autoriza um depósito por conexão.</p>
              </div>
              <div className="access__how-sequence-steps">
                <div className="access__how-step">
                  <div className="access__how-step-top">
                    <div className="access__how-step-number">1</div>
                    <div className="access__how-step-arrow"></div>
                  </div>
                  <p className="access__how-step-label"><strong>Conectar</strong></p>
                  <div className="access__how-step-image">
                    <img src={conectarImage} alt="Conectar" />
                  </div>
                </div>
                <div className="access__how-step">
                  <div className="access__how-step-top">
                    <div className="access__how-step-number">2</div>
                    <div className="access__how-step-arrow"></div>
                  </div>
                  <p className="access__how-step-label"><strong>Abrir a tampa</strong> superior e <strong>depositar</strong> sobre o alçapão interior</p>
                  <div className="access__how-step-image">
                    <img src={alcapao1Image} alt="Abrir e depositar" />
                  </div>
                </div>
                <div className="access__how-step access__how-step--last">
                  <div className="access__how-step-top">
                    <div className="access__how-step-number">3</div>
                  </div>
                  <p className="access__how-step-label"><strong>Fechar completamente a tampa,</strong> permitindo a entrada dos resíduos no contentor</p>
                  <div className="access__how-step-image access__how-step-image--double">
                    <img src={alcapao2Image} alt="Tampa fechada" />
                    <img src={alcapao3Image} alt="Resíduos no contentor" />
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Sequence 2 - Alçapão — Mobile */}
            <div className="access__how-mobile">
              <p className="access__how-mobile-desc">Para sistemas enterrados, pode também ser implementado um alçapão interior no marco de deposição, com restritor de volume, equipado com o módulo de acesso SOTKIS. Após a abertura do Sotkis Access, o alçapão de 35 litros limita o volume das deposições e só autoriza um depósito por conexão.</p>
              <MobileCarousel>
                <div className="access__how-slide">
                  <div className="access__how-slide-number">1</div>
                  <p className="access__how-slide-label"><strong>Conectar</strong></p>
                  <div className="access__how-slide-image">
                    <img src={conectarImage} alt="Conectar" />
                  </div>
                </div>
                <div className="access__how-slide">
                  <div className="access__how-slide-number">2</div>
                  <p className="access__how-slide-label"><strong>Abrir a tampa</strong> superior e <strong>depositar</strong> sobre o alçapão interior</p>
                  <div className="access__how-slide-image">
                    <img src={alcapao1Image} alt="Abrir e depositar" />
                  </div>
                </div>
                <div className="access__how-slide">
                  <div className="access__how-slide-number">3</div>
                  <p className="access__how-slide-label"><strong>Fechar completamente a tampa,</strong> permitindo a entrada dos resíduos no contentor</p>
                  <div className="access__how-slide-image access__how-slide-image--double">
                    <img src={alcapao2Image} alt="Tampa fechada" />
                    <img src={alcapao3Image} alt="Resíduos no contentor" />
                  </div>
                </div>
              </MobileCarousel>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="access__video-modal" onClick={closeVideoModal}>
          <div className="access__video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="access__video-modal-close" onClick={closeVideoModal} aria-label="Close video">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="access__video-modal-iframe-wrapper">
              <iframe
                width="853"
                height="480"
                src="https://www.youtube.com/embed/M0Gr6pVUz4E"
                title="SOTKON Intelligent Systems - We present Sotkis"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="access__video-modal-iframe"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
