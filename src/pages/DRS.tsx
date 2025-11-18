import React from 'react';
import { FullPageHero } from '../components/common/FullPageHero';
import { Carousel } from '../components/ui/Carousel';
import drsHeroImage from '../assets/DRS.webp';
import drs1Image from '../assets/drs1.webp';
import drs2Image from '../assets/drs2.webp';
import drs3Image from '../assets/drs3.webp';
import drs4Image from '../assets/drs4.webp';
import './DRS.css';

export const DRS: React.FC = () => {
  const carouselItems = [
    {
      id: '1',
      title: 'Tecnologia Inovadora',
      description: 'O "Digital Return System" é equipado com uma tecnologia inovadora que identifica individualmente cada embalagem de deposição seletiva (vidro, plástico e metal), permitindo a atribuição de incentivos a cada utilizador, motivando assim toda a população a reciclar de forma mais organizada e frequente.',
      image: drs3Image
    },
    {
      id: '2',
      title: 'Recompensas e Incentivos',
      description: 'A identificação de cada depósito permite assim recompensar os utilizadores, contribuindo para o aumento das taxas de reciclagem e a diminuição da quantidade de resíduos inadequados nas frações seletivas.',
      image: drs4Image
    }
  ];

  return (
    <div className="drs">
      <FullPageHero 
        title="Sotkon Waste Systems"
        description="Sistema de Retorno Digital"
        backgroundImage={drsHeroImage}
        showButton={false}
      />
      
      <section className="drs__content section">
        <div className="container">
          <div className="drs__text-content">
            <h2>Deposit Return System</h2>
            <p>
              Para se conectarem aos equipamentos DRS, os cidadãos apenas necessitam de um dispositivo móvel para ligação via Bluetooth ou de um cartão RFID. Após esta ligação, o utilizador deposita as suas garrafas de vidro, embalagens de plástico e latas de metal. O sistema DRS reconhece todos os tipos de materiais de embalagem.
            </p>
            <p>
              Depois deste processo, o utilizador recebe o incentivo que a sua cidade quer atribuir!
            </p>
            <p>
              Os incentivos a atribuir são decididos por cada município e podem ser "pontos" recebidos após cada depósito. Esses pontos podem depois ser convertidos em vários benefícios para cada cidadão - descontos nas tarifas de resíduos, transportes públicos, utilização de equipamentos municipais ou incentivos à participação em eventos da cidade.
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

