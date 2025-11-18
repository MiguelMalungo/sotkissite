import React from 'react';
import { Button } from '../components/common/Button';
import { ContainerTextFlip } from '../components/ui/ContainerTextFlip';
import './Home.css';

export const Home: React.FC = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="home__hero">
        <div className="home__hero-scrolling-container">
          <img 
            src="/src/assets/band.webp" 
            alt="" 
            className="home__hero-scrolling-image"
          />
          <img 
            src="/src/assets/band.webp" 
            alt="" 
            className="home__hero-scrolling-image"
          />
        </div>
        <video 
          className="home__hero-video" 
          autoPlay 
          loop 
          muted 
          playsInline
          ref={(video) => {
            if (video) {
              video.playbackRate = 0.175;
            }
          }}
        >
          <source src="/src/assets/Animation.mp4" type="video/mp4" />
        </video>
        <div className="home__hero-overlay"></div>
        <div className="home__hero-content container">
          <h1 className="home__hero-heading">Conheça os nossos sistemas inteligentes para gestão de resíduos</h1>
          <div className="home__hero-description">
            <p>Estamos preparados para criar cidades inteligentes e comunidades ambientalmente sustentáveis através dos nossos sistemas inteligentes.<br />Ao utilizar os sistemas associados ao SOTKIS, a entidade responsável pela operação pode obter informações sobre o nível de enchimento dos contentores de resíduos, planear rotas de recolha de forma muito mais eficiente, saber frequências de deposição e tipo de resíduos depositados, entre muitas outras variáveis. Está pronto para conduzir a sua cidade para um futuro sustentável a partir da gestão dos resíduos?</p>
          </div>
        </div>
      </section>

      {/* Logo Section */}
      <section className="home__logo-section">
        <div className="container">
          <img 
            src="/src/assets/logotipo-sotkon-neg-preto.webp" 
            alt="Sotkon Logo" 
            className="home__logo-image"
          />
        </div>
      </section>

      {/* Rise Above Section */}
      <section className="home__rise-above-container">
        <div className="home__rise-above-video-wrapper">
          <img 
            src="/src/assets/square.webp" 
            alt="" 
            className="home__rise-background-image"
          />
          <video 
            className="home__rise-video" 
            autoPlay 
            loop 
            muted 
            playsInline
          >
            <source src="/src/assets/video1.mp4" type="video/mp4" />
          </video>
          <div className="home__rise-title-overlay">
            <ContainerTextFlip
              words={["Rise", "Innovate", "Transform", "Elevate"]}
              interval={3000}
              animationDuration={700}
            />
          </div>
        </div>
        <div className="home__rise-above-content">
          <p className="home__rise-above-text">
            <span className="home__rise-above-text--black">O SOTKIS (Sotkon Intelligent Systems)</span> consiste num sistema integrado de gestão que recolhe e trata informações sobre os diversos processos envolvidos na deposição e/ou recolha de resíduos. <span className="home__rise-above-text--black">O software SOTKIS</span> permite assim agregar os diferentes módulos inteligentes e foi desenhado para otimizar a eficiência dos recursos alocados à gestão de resíduos e aumentar a rentabilidade desta operação.
          </p>
          <Button href="/platform" variant="primary" size="sm">
            Ver Mais
          </Button>
        </div>
      </section>

      {/* Access Section */}
      <section className="home__section home__section--access">
        <div className="container">
          <div className="home__section-grid">
            <div className="home__section-content">
              <h2 className="home__section-heading">Access</h2>
              <div className="home__section-text-wrapper">
                <p className="home__section-text">
                  O módulo de acesso SOTKIS ACCESS pode ser instalado facilmente num sistema enterrado Sotkon já existente. É a solução perfeita para cidades que desejem introduzir um sistema de tarifação de resíduos PAYT! Este módulo inclui a recolha e transmissão de dados para a faturação dos resíduos depositados, conforme a política que esteja em vigor, de acordo com as especificidades locais. O SOTKIS ACCESS recolhe informação sempre que uma chave de acesso é utilizada e converte dados sobre quem, quando e que resíduos foram depositados em informações valiosas que conduzem a uma melhoria da qualidade dos resíduos, a um aumento de taxas de reciclagem e à redução do custo global de gestão de resíduos. Conheça aqui como a sua cidade pode beneficiar com o SOTKIS ACCESS.
                </p>
              </div>
              <Button href="/access" variant="primary" size="sm">
                Ver mais
              </Button>
            </div>
            <div className="home__section-image">
              <div className="home__section-image-placeholder">
                <img 
                  src="/src/assets/accesssm.webp" 
                  alt="Access control system"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Level Section */}
      <section className="home__section home__section--level">
        <div className="container">
          <div className="home__section-grid home__section-grid--reverse">
            <div className="home__section-image">
              <div className="home__section-image-placeholder">
                <img 
                  src="/src/assets/levelsm.webp" 
                  alt="Level monitoring sensors"
                />
              </div>
            </div>
            <div className="home__section-content">
              <h2 className="home__section-heading">Level</h2>
              <p className="home__section-text">
                Este módulo inteligente monitoriza o nível de enchimento de resíduos nos contentores onde é aplicado, tornando-se assim uma solução muito eficiente e rentável ao permitir realocar recursos e programar as rotas essenciais de forma estratégica, económica e ambientalmente sustentável. Com esta solução desenhada para cidades inteligentes é possível evitar deslocações desnecessárias, otimizar rotas e reduzir os custos em combustível, em mão-de-obra e em equipamentos. Perceba aqui como pode beneficiar de todas estas vantagens!
              </p>
              <Button href="/level" variant="primary" size="sm">
                Ver mais
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* DRS Section */}
      <section className="home__section home__section--drs">
        <div className="container">
          <div className="home__section-grid">
            <div className="home__section-content">
              <h2 className="home__section-heading">DRS</h2>
              <p className="home__section-text">
                O "Digital Return System" oferece aos municípios um instrumento importante para o aumento das taxas de reciclagem e para uma melhoria significativa na qualidade dos resíduos seletivos. Equipado com uma tecnologia inovadora que identifica individualmente cada embalagem de deposição seletiva (vidro, plástico e metal), o Sotkis DRS permite a atribuição de incentivos aos utilizadores após cada deposição de resíduos.
              </p>
              <Button href="/drs" variant="primary" size="sm">
                Ver mais
              </Button>
            </div>
            <div className="home__section-image">
              <div className="home__section-image-placeholder">
                <img 
                  src="/src/assets/DRSsm.webp" 
                  alt="Deposit return system"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Paylt Section */}
      <section className="home__section home__section--paylt">
        <div className="container">
          <div className="home__section-grid home__section-grid--reverse">
            <div className="home__section-image">
              <div className="home__section-image-placeholder">
                <img 
                  src="/src/assets/playtsm.webp" 
                  alt="Paylt solution"
                />
              </div>
            </div>
            <div className="home__section-content">
              <h2 className="home__section-heading">P(L)ayt</h2>
              <div className="home__section-text-wrapper">
                <p className="home__section-text">
                  Os sistemas inteligentes SOTKIS estão também disponíveis para a implementação de sistemas PAYT, com objetivo de sensibilizar cidadãos e empresas e para um sistema mais justo e responsável. O PAYT é a abreviatura para "pay-as-you-throw", um sistema que prevê que os residentes paguem os resíduos com base na quantidade que produzem. Entende-se como o sistema de pagamento mais justo e deverá, no médio prazo, ser aplicado em todos os países da União Europeia. A Sotkon apresenta o ecossistema P(L)AYT, que significa Pay-less-as-you-throw e inclui um sistema PAYT quantifica os resíduos depositados por cada utilizador medindo o seu volume, a possibilidade de reduzir o valor cobrado pelas deposições de resíduos indiferenciados de acordo com reciclagem efetuada e a inclusão de recompensas em forma de pontos e gamificação, para incentivar a separação correta e a devolução de recicláveis. O PLAYT é um ecossistema integrado de hardware, software e inteligência artificial, capaz de transformar o modelo atual de deposição e recolha de resíduos num sistema mais eficiente, rastreável e participativo, alinhado com os princípios da economia circular e da transição verde e digital. Saiba como podemos ajudar a instalar o sistema P(L)AYT mais adequado à sua cidade.
                </p>
              </div>
              <Button href="/paylt" variant="primary" size="sm">
                Ver mais
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* T4G App Section */}
      <section className="home__section home__section--t4g">
        <div className="container">
          <div className="home__section-grid">
            <div className="home__section-content">
              <h2 className="home__section-heading">APP DE CIDADÃO T4G</h2>
              <p className="home__section-text">
                A aplicação Trash4Goods atua como interface digital entre o cidadão e o sistema municipal de gestão de resíduos, promovendo a gamificação, a recompensa e a consciencialização ambiental. A app móvel permite que cada utilizador se conecte por bluetooth com os dispositivos Sotkis Access e Sotkis DRS, efetue as suas ações de reciclagem, ganhando pontos que podem ser trocados por produtos, serviços digitais ou descontos. A T4G permite a dinamização económica, ao canalizar incentivos para comércio e serviços.
              </p>
              <Button href="#contact" variant="primary" size="sm">
                Ver mais
              </Button>
            </div>
            <div className="home__section-image">
              <div className="home__section-image-placeholder">
                <img 
                  src="/src/assets/test.webp" 
                  alt="Trash4Goods App"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section className="home__app-section">
        <div className="home__app-hero">
          <img
            src="/src/assets/Featurephone.webp"
            alt="SOTKIS mobile app interface"
            className="home__app-background home__app-background-desktop"
          />
          <img
            src="/src/assets/mobile2.webp"
            alt="SOTKIS mobile app interface"
            className="home__app-background home__app-background-mobile"
          />
          <div className="home__app-overlay">
            <div className="home__app-content">
              <div className="home__app-badges">
                <a href="#" className="home__app-badge">
                  <img src="/src/assets/apple.webp" alt="Download on App Store" />
                </a>
                <a href="#" className="home__app-badge">
                  <img src="/src/assets/google.webp" alt="Get it on Google Play" />
                </a>
              </div>
              <h2 className="home__app-title">DOWNLOAD A NOSSA SMARTPHONE APP</h2>
              <p className="home__app-description">
                A aplicação permite que veja todos os contentores enterrados da sua cidade e ter todos os registos de deposição.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
