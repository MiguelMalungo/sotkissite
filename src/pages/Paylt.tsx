import React, { useState } from 'react';
import { FeatureCarousel } from '../components/ui/FeatureCarousel';
import { AnimateOnScroll } from '../components/ui/AnimateOnScroll';
import { AnimatedHeroTitle } from '../components/ui/AnimatedHeroTitle';
import { useLanguage } from '../contexts/LanguageContext';
import { payltTranslations } from '../translations/paylt';
import payltHeroImage from '../assets/Beyond Recycling.jpg';

import playtnewImage from '../assets/playtnew.webp';
import softDashImg from '../assets/data.webp';
import softAppImg from '../assets/paylt_software_mobile_app.png';
import softMarketImg from '../assets/paylt_software_marketplace.png';
import softGamiImg from '../assets/paylt_software_gamification.png';
import hardIotImg from '../assets/newAccess.webp';
import hardRfidImg from '../assets/transfer.webp';
import hardAiImg from '../assets/newAccess.webp';
import fieldImg from '../assets/field.png';
import hardAccessImg from '../assets/paylt_hardware_access.png';
import techRoutesImg from '../assets/paylt_tech_routes.png';
import techPolicyImg from '../assets/paylt_tech_policies.png';
import techImprovImg from '../assets/levelsm.webp';
import techResImg from '../assets/levelhero.webp';
import techSustImg from '../assets/data.webp';
import './Paylt.css';

export const Paylt: React.FC = () => {
  const { language } = useLanguage();
  const t = payltTranslations[language];
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
  };

  // Software Carousel Features
  const softwareFeatures = [
    {
      id: '1',
      label: 'Dashboards interativos',
      description: 'Dashboards interativos para análise e tomada de decisão em tempo real.',
      image: techPolicyImg
    },
    {
      id: '2',
      label: 'Aplicação móvel',
      description: 'Aplicação móvel com acesso por Bluetooth e NFC para maior conveniência.',
      image: softAppImg
    },
    {
      id: '3',
      label: 'Marketplace integrado',
      description: 'Marketplace integrado com benefícios, recompensas e funcionalidades digitais.',
      image: softMarketImg
    },
    {
      id: '4',
      label: 'Gamificação',
      description: 'Ferramentas de gamificação para incentivar comportamentos sustentáveis.',
      image: softGamiImg
    }
  ];

  // Hardware Carousel Features
  const hardwareFeatures = [
    {
      id: '1',
      label: 'Sensores IoT',
      description: 'Sensores IoT para deteção de diferentes materiais em qualquer tipo de contentor.',
      image: hardIotImg
    },
    {
      id: '2',
      label: 'RFID',
      description: 'RFID para recolha porta-a-porta com identificação precisa.',
      image: hardRfidImg
    },
    {
      id: '3',
      label: 'Câmaras com IA',
      description: 'Câmaras com IA para deteção e prevenção de contaminação.',
      image: hardAiImg
    },
    {
      id: '4',
      label: 'Controlo de acessos',
      description: 'Sistemas de controlo de acessos para utilizadores individuais.',
      image: hardAccessImg
    }
  ];

  // Technology Impact Features
  const techFeatures = [
    {
      id: '1',
      label: 'Ajustar estratégias e rotas',
      description: 'Ajustar estratégias e rotas operacionais com base em dados em tempo real.',
      image: techRoutesImg
    },
    {
      id: '2',
      label: 'Políticas públicas',
      description: 'Definir políticas públicas mais eficazes baseadas em evidências concretas.',
      image: techPolicyImg
    },
    {
      id: '3',
      label: 'Oportunidades de melhoria',
      description: 'Identificar oportunidades de melhoria contínua nos processos.',
      image: techImprovImg
    },
    {
      id: '4',
      label: 'Otimizar recursos',
      description: 'Otimizar recursos e reduzir custos operacionais significativamente.',
      image: techResImg
    },
    {
      id: '5',
      label: 'Objetivos de sustentabilidade',
      description: 'Reforçar os objetivos de sustentabilidade local e nacional.',
      image: techSustImg
    }
  ];

  // Municipality Benefits Features
  const municipioFeatures = [
    {
      id: '1',
      label: 'Eficiência operacional',
      description: 'Aumento da eficiência operacional através de processos automatizados e otimizados.',
      image: fieldImg
    },
    {
      id: '2',
      label: 'Redução de custos',
      description: 'Redução de custos de recolha e tratamento de resíduos.',
      image: techResImg
    },
    {
      id: '3',
      label: 'Modelos PAYT/RAYT/SAYT',
      description: 'Implementação transparente de modelos PAYT/RAYT/SAYT.',
      image: softMarketImg
    },
    {
      id: '4',
      label: 'Controlo de contaminação',
      description: 'Maior controlo sobre contaminação e qualidade dos resíduos.',
      image: hardAiImg
    },
    {
      id: '5',
      label: 'Dados fiáveis',
      description: 'Dados fiáveis para planeamento e tomada de decisão estratégica.',
      image: softDashImg
    }
  ];

  // Citizen Benefits Features
  const cidadaoFeatures = [
    {
      id: '1',
      label: 'Participação ativa',
      description: 'Participação ativa e fácil no processo de reciclagem.',
      image: softAppImg
    },
    {
      id: '2',
      label: 'Recompensas e gamificação',
      description: 'Sistema de recompensas e gamificação que motiva a mudança de comportamento.',
      image: softGamiImg
    },
    {
      id: '3',
      label: 'Feedback imediato',
      description: 'Feedback imediato sobre hábitos individuais de reciclagem.',
      image: softDashImg
    },
    {
      id: '4',
      label: 'Acesso via app',
      description: 'Acesso em tempo real via app com Bluetooth e NFC.',
      image: softAppImg
    },
    {
      id: '5',
      label: 'Ambiente sustentável',
      description: 'Contribuição direta para um ambiente mais sustentável.',
      image: techSustImg
    }
  ];

  return (
    <div className="paylt">
      <section className="paylt__hero">
        <img
          src={payltHeroImage}
          alt="SOTKIS Paylt"
          className="paylt__hero-image"
        />
        <div className="paylt__hero-overlay"></div>
        <div className="paylt__hero-content container">
          <div className="paylt__hero-text-content">
            <AnimatedHeroTitle text={t.hero.title} className="paylt__hero-title" delay={0} />
            <p className="paylt__hero-subtitle">{t.hero.subtitle}</p>
          </div>
        </div>
      </section>

      <section className="paylt__intro section">
        <div className="container">
          <div className="paylt__intro-content">
            <AnimateOnScroll animation="fadeSlideUp" delay={0} duration={0.8}>
              <h2>{t.intro.title}</h2>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeSlideUp" delay={150} duration={0.8}>
              <p>
                {t.intro.text1}
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeSlideUp" delay={300} duration={0.8}>
              <h2>{t.intro.text2}</h2>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeSlideUp" delay={450} duration={0.8}>
              <p>
                {t.intro.text3}
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <section className="paylt__image-section">
        <div className="container">
          <AnimateOnScroll animation="fadeBlur" delay={0} duration={1}>
            <img
              src={playtnewImage}
              alt="Paylt System"
              className="paylt__image"
            />
          </AnimateOnScroll>
        </div>
      </section>

      <section className="paylt__how-it-works section">
        <div className="container">
          <div className="paylt__how-it-works-content">
            <AnimateOnScroll animation="fadeSlideUp" delay={0} duration={0.8}>
              <h2>{t.howItWorks.title}</h2>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeSlideUp" delay={150} duration={0.8}>
              <p>
                {t.howItWorks.description}
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Componentes da Solução Section - Blue background */}
      <section className="paylt__componentes-section">
        <div className="container">
          <AnimateOnScroll animation="fadeSlideUp" delay={0} duration={0.8}>
            <h2 className="paylt__section-title">Componentes da Solução</h2>
          </AnimateOnScroll>
        </div>

        {/* Software Carousel */}
        <FeatureCarousel
          title="Software Inteligente"
          subtitle="Uma infraestrutura dinâmica e escalável que integra:"
          features={softwareFeatures}
          imagePosition="right"
          backgroundColor="#F4FBFC"
          variant="full-background"
        />

        {/* Hardware Carousel */}
        <FeatureCarousel
          title="Hardware Avançado"
          subtitle="Dispositivos inteligentes instalados em qualquer tipo de contentor, incluindo:"
          features={hardwareFeatures}
          imagePosition="left"
          backgroundColor="#F4FBFC"
          variant="full-background"
        />
      </section>

      {/* Tecnologia que gera impacto Section - White background */}
      <section className="paylt__tecnologia-section">
        <div className="container">
          <AnimateOnScroll animation="fadeSlideUp" delay={0} duration={0.8}>
            <h2 className="paylt__tecnologia-title-outside">Tecnologia que gera impacto</h2>
          </AnimateOnScroll>
        </div>
        <FeatureCarousel
          title=""
          subtitle="Através da recolha e análise de dados em tempo real, suportada por algoritmos de IA, o Sotkis P(L)AYT aumenta a capacidade de monitorização dos municípios."
          features={techFeatures}
          imagePosition="right"
          backgroundColor="#ffffff"
          variant="full-background"
        />
      </section>

      {/* Benefícios para Municípios e Cidadãos Section - Blue background */}
      <section className="paylt__beneficios-section">
        <div className="container">
          <AnimateOnScroll animation="fadeSlideUp" delay={0} duration={0.8}>
            <h2 className="paylt__section-title">Benefícios para Municípios e Cidadãos</h2>
          </AnimateOnScroll>
        </div>

        {/* Para Municípios Carousel */}
        <FeatureCarousel
          title="Para Municípios"
          features={municipioFeatures}
          imagePosition="right"
          backgroundColor="#F4FBFC"
          variant="full-background"
        />

        {/* Para Cidadãos Carousel */}
        <FeatureCarousel
          title="Para Cidadãos"
          features={cidadaoFeatures}
          imagePosition="left"
          backgroundColor="#F4FBFC"
          variant="full-background"
        />
      </section>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="paylt__video-modal" onClick={closeVideoModal}>
          <div className="paylt__video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="paylt__video-modal-close" onClick={closeVideoModal} aria-label="Close video">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="paylt__video-modal-iframe-wrapper">
              <iframe
                width="853"
                height="480"
                src="https://www.youtube.com/embed/M0Gr6pVUz4E?controls=1&rel=0&modestbranding=1"
                title="SOTKON Intelligent Systems - We present Sotkis"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="paylt__video-modal-iframe"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
