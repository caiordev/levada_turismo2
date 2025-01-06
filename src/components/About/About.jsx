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
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const Content = styled.div`
  h2 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 1.5rem;
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
    margin-bottom: 1.5rem;
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
            Desde 2015, a <span className="highlight">Levada Turismo</span> tem se dedicado a proporcionar 
            experiências únicas nos Lençóis Maranhenses. Nossa jornada começou com um sonho: 
            compartilhar as maravilhas naturais desta região extraordinária com visitantes 
            de todo o mundo.
          </p>
          <p>
            Com uma equipe apaixonada e experiente, nos especializamos em criar roteiros 
            personalizados que combinam aventura, conforto e segurança. Nossa missão é 
            transformar cada passeio em uma memória inesquecível.
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
              <div className="number">50+</div>
              <div className="label">Roteiros Únicos</div>
            </div>
          </div>
        </Content>
      </Container>
    </AboutSection>
  );
};

export default About;
