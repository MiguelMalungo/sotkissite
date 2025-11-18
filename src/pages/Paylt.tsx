import React, { useState } from 'react';
import { Carousel } from '../components/ui/Carousel';
import payltHeroMobileImage from '../assets/DRSsm.webp';
import paytVideo from '../assets/payt.mp4';
import screenImage from '../assets/screen.webp';
import payltSystemsImage from '../assets/payltsystems.webp';
import contPayltImage from '../assets/cont_paylt.webp';
import cardImage from '../assets/card.webp';
import keyImage from '../assets/key.webp';
import payltTecnoImage from '../assets/paylt_tecno.webp';
import './Paylt.css';

export const Paylt: React.FC = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const openVideoModal = () => {
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
  };
  const carouselItems = [
    {
      id: '1',
      title: 'Sistemas Enterrados e Semi-Enterrados',
      description: 'Para sistemas enterrados é necessário um marco de deposição com um limitador de volume, já para sistemas semi-enterrados é utilizado um tambor duplo. Para ambos os sistemas, é também necessário ter o módulo SOTKIS ACCESS instalado.',
      image: contPayltImage
    },
    {
      id: '2',
      title: 'Identificação do Utilizador',
      description: 'Do ponto de vista do utilizador, é necessária identificação no momento do depósito, que pode ser feita através de uma chave RFID (smart-tag), de um cartão de acesso (smart-card) ou de um telemóvel com Bluetooth.',
      image: cardImage
    },
    {
      id: '3',
      title: 'Chaves de Acesso e Limitador Volumétrico',
      description: 'Cada chave de acesso é programada com um ID de utilizador, que contém um código de 8 bytes exclusivo. Os dados do utilizador são registados na memória do sistema sempre que um cartão de acesso ou uma chave inteligente interage com o marco de deposição. Uma vez desbloqueado o acesso do utilizador ao marco de deposição, um limitador volumétrico restringe a quantidade de resíduos que pode ser depositado no marco após a tampa ter sido aberta e até a mesma ser novamente fechada. Nesse momento os resíduos descem até ao contentor e o acesso ao marco de deposição volta a estar bloqueado.',
      image: keyImage
    },
    {
      id: '4',
      title: 'Processamento de Dados e Faturação',
      description: 'Numa data e hora pré-configurada, os dados armazenados na memória do módulo de acesso SOTKIS são transferidos através de GSM/GPRS/Bluetooth para o portal web de gestão de acessos. Neste portal, a entidade responsável pode verificar todos os acessos, bem como gerir os dados obtidos. Estes dados de acesso dos utilizadores podem ser transferidos para um software de faturação certificado (não incluído no SOTKIS). Após a definição da tarifa aplicável, a empresa de gestão de resíduos sólidos urbanos está pronta para faturar a cada utilizador o valor mensal das suas deposições.',
      image: payltTecnoImage
    }
  ];

  return (
    <div className="paylt">
      <section className="paylt__hero">
        <img src={payltHeroMobileImage} alt="Paylt Mobile" className="paylt__hero-mobile-image" />
        <video 
          className="paylt__hero-video" 
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src={paytVideo} type="video/mp4" />
        </video>
        <div className="paylt__hero-overlay"></div>
        <div className="paylt__hero-content container">
          <h1 className="paylt__hero-title">Sotkon Waste Systems</h1>
          <p className="paylt__hero-subtitle">Soluções para sistema de pagamento de resíduos PAYT!</p>
        </div>
      </section>
      
      <section className="paylt__intro section">
        <div className="container">
          <div className="paylt__intro-content">
            <h2>P(L)ayt</h2>
            <p>
              O PAYT é a abreviatura para "pay-as-you-throw", um sistema que prevê que os residentes paguem os resíduos com base na quantidade que produzem. Entende-se como o sistema de pagamento mais justo e deverá, em médio prazo, ser aplicado em todos os países da União Europeia.
            </p>
            <p>
              Um sistema PAYT quantifica os resíduos depositados por cada utilizador medindo o seu peso ou o seu volume. Podem ser utilizadas diversas tecnologias na identificação, tanto dos utilizadores como das suas deposições, com objetivos de aplicação de tarifários ou de outras políticas de incentivo à Economia Circular.
            </p>
            <p>
              O SOTKIS PAYT fornece as ferramentas necessárias para desenhar e implementar políticas de sucesso que incentivam os utilizadores a uma gestão mais cuidada dos resíduos, com maior separação e melhoria da qualidade dos resíduos para tratamento e revalorização.
            </p>
            <p>
              O módulo SOTKIS ACCESS permite controlar e monitorizar o acesso aos contentores de resíduos, garantindo uma gestão eficiente e segura do sistema de deposição.
            </p>
          </div>
        </div>
      </section>
      
      <Carousel items={carouselItems} />
      
      <section className="paylt__content section">
        <div className="container">
          <div className="paylt__content-grid">
            <div className="paylt__content-image">
              <img 
                src={screenImage} 
                alt="Dados obtidos" 
                className="paylt__data-image"
              />
            </div>
            <div className="paylt__text-content">
              <h2>Dados Obtidos</h2>
              <p>
                Deste módulo inteligente podem ser obtidas diversas informações: dados do utilizador, tipos de utilizador (por exemplo, doméstico e não doméstico) e informações sobre as práticas de deposição de resíduos, tais como tipo de resíduos e frequência.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="paylt__compatibility section">
        <div className="container">
          <div className="paylt__compatibility-content">
            <h2 className="paylt__compatibility-title">Compatibilidade de Sistemas Sotkon</h2>
            <p className="paylt__compatibility-text">
              O SOTKIS PAYT é compatível com os seguintes sistemas:
            </p>
            <img 
              src={payltSystemsImage} 
              alt="Sistemas compatíveis" 
              className="paylt__systems-image"
            />
          </div>
        </div>
      </section>
      
      <section className="paylt__video section">
        <div className="container">
          <div className="paylt__video-content">
            <h2 className="paylt__video-title">Sotkis – Vídeo Sistemas Inteligentes PAYT</h2>
            <button className="paylt__video-button" onClick={openVideoModal}>
              <span>Play Video</span>
              <div className="paylt__video-button-icon">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="paylt__video-modal" onClick={closeVideoModal}>
          <div className="paylt__video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="paylt__video-modal-close" onClick={closeVideoModal} aria-label="Close video">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="paylt__video-modal-iframe-wrapper">
              <iframe
                width="853"
                height="480"
                src="https://www.youtube.com/embed/M0Gr6pVUz4E"
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

