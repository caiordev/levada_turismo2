import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 6rem 2rem;
  background-color: #f8f9fa;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  border-radius: 15px;
  margin-top: 6.5rem;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  aspect-ratio: 4/3;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }

   @media (max-width: 768px) {

     margin-top: 0rem;
   }
`;

const Content = styled.div`
  padding-right: 2rem;

  h2 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 2rem;
    position: relative;

    &:after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 60px;
      height: 3px;
      background-color: #007bff;
    }
  }

  p {
    font-size: 1.1rem;
    color: #666;
    line-height: 1.8;
    margin-bottom: 2rem;
    text-align: justify;
    hyphens: auto;
  }

  .highlight {
    color: #007bff;
    font-weight: 600;
  }

  .stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: 3rem;

    .stat-item {
      text-align: center;

      .number {
        font-size: 2.5rem;
        font-weight: 700;
        color: #007bff;
        margin-bottom: 0.5rem;
      }

      .label {
        font-size: 1rem;
        color: #666;
      }
    }
  }

  @media (max-width: 768px) {
    padding-right: 0;
  }
`;

const About = () => {
  return (
    <AboutSection id="about-section">
      <Container>
        <ImageWrapper>
          <img src="/lencois-maranhenses.jpg" alt="Lençóis Maranhenses" />
        </ImageWrapper>
        <Content>
          <h2>Nossa História</h2>
          <p>
            Somos naturais da cidade de Barreirinhas, MA, e atuamos na atividade turística desde 1999 como agência receptiva e condutores de visitantes no Parque Nacional dos Lençóis Maranhenses. Em abril de 2017, formalizamos a empresa <span className="highlight">Levada Turismo</span>. O nome "Levada" foi inspirado no antigo sistema de irrigação que os primeiros habitantes da região usavam para molhar suas plantações. Eles cavavam valas no solo que se encontravam com o rio e, quando a maré subia, a água era transportada por essas valas, levando vida às plantações, pois onde há água, há vida. Esse processo é uma viagem de conhecimento e contemplação da natureza, assim como a experiência que queremos proporcionar com a Levada Turismo. Nosso objetivo é transportar vidas, levando passageiros de um lugar para outro com muito cuidado e segurança, garantindo qualidade e praticidade na sua viagem.
          </p>
          <div className="stats">
            <div className="stat-item">
              <div className="number">8+</div>
              <div className="label">Anos de Experiência</div>
            </div>
            <div className="stat-item">
              <div className="number">5K+</div>
              <div className="label">Clientes Satisfeitos</div>
            </div>
            <div className="stat-item">
              <div className="number">10+</div>
              <div className="label">Roteiros Únicos</div>
            </div>
          </div>
        </Content>
      </Container>
    </AboutSection>
  );
};

export default About;
