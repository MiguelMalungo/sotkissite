import React from 'react';
import levelVideo from '../assets/level.mp4';
import levelPhotoImage from '../assets/levelphoto.webp';
import levelSondaImage from '../assets/LEVEL-SondaREEN2.webp';
import sensorImage from '../assets/sensor.webp';
import l1Image from '../assets/l1.webp';
import l2Image from '../assets/l2.webp';
import l3Image from '../assets/l3.webp';
import l4Image from '../assets/l4.webp';
import levelCompativelImage from '../assets/levelcompativel.webp';
import './Level.css';

export const Level: React.FC = () => {

  return (
    <div className="level">
      <section className="level__hero">
        <video 
          className="level__hero-video" 
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src={levelVideo} type="video/mp4" />
        </video>
        <div className="level__hero-overlay"></div>
        <div className="level__hero-content container">
        </div>
      </section>
      
      <section className="level__intro section">
        <div className="container">
          <div className="level__intro-content">
            <h2>SOTKIS LEVEL</h2>
            <p>
              O SOTKIS LEVEL é uma solução eficiente e rentável, ao permitir realocar recursos e programar as rotas essenciais de forma estratégica, económica e ambientalmente sustentável! Na sua essência, este módulo inteligente tem como objetivo monitorizar o nível de enchimento de resíduos em cada contentor enterrado. Desta forma, evita-se deslocações desnecessárias e contribui-se para otimizar rotas, economizar combustível e reduzir custos com as equipas e equipamentos.
            </p>
          </div>
          <div className="level__intro-images">
            <img 
              src={levelPhotoImage} 
              alt="Level photo" 
              className="level__intro-image level__intro-image--left"
            />
            <img 
              src={levelSondaImage} 
              alt="Level SondaREEN" 
              className="level__intro-image level__intro-image--right"
            />
          </div>
        </div>
      </section>
      
      <section className="level__sensor-section section">
        <div className="container">
          <div className="level__sensor-content">
            <h2>Sensor Ultrasónico</h2>
            <p>
              O SOTKIS Level usa um sensor ultrassónico disponibilizando, no portal online e na app, as informações recolhidas. Num horário predefinido, o sistema envia as informações do nível de enchimento para a plataforma web usando uma comunicação GSM.
            </p>
          </div>
        </div>
      </section>
      
      <section className="level__image-section">
        <div className="container">
          <img 
            src={sensorImage} 
            alt="Sensor" 
            className="level__sensor-image"
          />
        </div>
      </section>
      
      <section className="level__stages-section">
        <div className="container">
          <h2 className="level__stages-title">Características Principais</h2>
          <div className="level__stages-grid">
            <img 
              src={l1Image} 
              alt="Level stage 1" 
              className="level__stage-image"
            />
            <img 
              src={l2Image} 
              alt="Level stage 2" 
              className="level__stage-image"
            />
            <img 
              src={l3Image} 
              alt="Level stage 3" 
              className="level__stage-image"
            />
            <img 
              src={l4Image} 
              alt="Level stage 4" 
              className="level__stage-image"
            />
          </div>
        </div>
      </section>
      
      <section className="level__content section">
        <div className="container">
          <h2 className="level__compatible-title">Compatibilidade:</h2>
          <img 
            src={levelCompativelImage} 
            alt="Sistemas de resíduos compatíveis" 
            className="level__compatible-image"
          />
        </div>
      </section>
    </div>
  );
};
