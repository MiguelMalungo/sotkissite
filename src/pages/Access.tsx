import React from 'react';
import { FullPageHero } from '../components/common/FullPageHero';
import { Carousel } from '../components/ui/Carousel';
import accessHeroImage from '../assets/ACCESS.webp';
import access1Image from '../assets/access1.webp';
import accessCar1Image from '../assets/access_car1.webp';
import screenImage from '../assets/screen.webp';
import systemsImage from '../assets/systems.webp';
import './Access.css';

export const Access: React.FC = () => {
  const carouselItems = [
    {
      id: '1',
      title: 'Solução PAYT',
      description: 'Esta é a solução ideal para as cidades que pretendem introduzir um sistema de tarifação PAYT! O módulo do acesso SOTKIS é instalado facilmente em qualquer sistema enterrado Sotkon já existente e permite a recolha e transmissão de dados para a faturação em função do volume de lixo depositado, e de acordo com as exigências locais.',
      image: access1Image
    },
    {
      id: '2',
      title: 'Recolha de Dados',
      description: 'Assim, o sistema recolhe informação sempre que um utilizador se identifica no sistema e converte esses dados em informações que são úteis para a definição de políticas municipais e para o aumento da eficiência global na gestão de resíduos.',
      image: screenImage
    },
    {
      id: '3',
      title: 'Transferência de Dados',
      description: 'A transferência de dados é feita através de GPRS/GSM/Bluetooth e estes são centralizados e apresentados num portal online gerido pelo município ou pela empresa operadora.',
      image: '/src/assets/paylt_tecno.webp'
    }
  ];

  return (
    <div className="access">
      <FullPageHero 
        title="Sotkon Waste Systems"
        description="Controlos de Acesso para deposição de resíduos"
        backgroundImage={accessHeroImage}
        showButton={false}
      />
      
      <section className="access__intro section">
        <div className="container">
          <div className="access__intro-content">
            <h2>SOTKIS ACCESS</h2>
            <p>
              A solução perfeita para introduzir o sistema PAYT são os controlos de acesso Sotkon.
            </p>
            <p>
              Descubra aqui as várias funcionalidades do nosso módulo!
            </p>
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
            <h2>O SOTKIS ACCESS é compatível com os seguintes sistemas de resíduos:</h2>
            <img src={systemsImage} alt="Sistemas de resíduos compatíveis" />
          </div>
        </div>
      </section>
    </div>
  );
};
