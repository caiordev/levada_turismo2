import React, { useRef } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const DestinationsSection = styled.section`
  padding: 80px 0;
  background-color: #ffffff;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 40px 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 0 15px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 0.75rem;
  }
`;

const SectionSubtitle = styled.p`
  text-align: center;
  color: #666;
  margin-bottom: 3rem;
  font-size: 1.1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
    padding: 0 1rem;
  }
`;

const DestinationsContainer = styled.div`
  position: relative;
  padding: 0 40px;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

const DestinationsGrid = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: 2rem;
  padding: 1rem 0;
  scrollbar-width: none;
  -ms-overflow-style: none;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    gap: 1rem;
    padding: 1rem 15px;
    margin: 0 -15px;
  }
`;

const DestinationCard = styled.div`
  min-width: 380px;
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  scroll-snap-align: start;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    min-width: 300px;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 280px;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 200px;
  }
`;

const DestinationImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;

  ${DestinationCard}:hover & {
    transform: scale(1.05);
  }
`;

const DestinationContent = styled.div`
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const DestinationName = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
  color: #1a1a1a;
  font-weight: 600;
  letter-spacing: -0.5px;
`;

const DestinationDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
`;

const DestinationInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
  padding: 1.25rem;
  background: #f8f9fa;
  border-radius: 8px;

  @media (max-width: 768px) {
    gap: 1rem;
    padding: 1rem;
    margin-bottom: 1.5rem;
  }
`;

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  .label {
    font-size: 0.8rem;
    color: #666;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .value {
    font-size: 1rem;
    color: #1a1a1a;
    font-weight: 500;
  }

  &.rating .value {
    display: flex;
    align-items: center;
    gap: 4px;
  }
`;

const PriceTag = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  justify-content: flex-end;
  
  .price {
    font-size: 1.8rem;
    color: #1a1a1a;
    font-weight: 600;
    letter-spacing: -0.5px;
  }

  .period {
    font-size: 0.9rem;
    color: #666;
  }
`;

const DestinationButton = styled.button`
  width: 100%;
  background: #0066cc;
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 0.5px;

  &:hover {
    background: #0052a3;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 0.9rem;
  }
`;

const ScrollButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${props => props.direction === 'left' ? 'left: 0;' : 'right: 0;'}
  background: rgba(255, 255, 255, 0.95);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 2;
  transition: all 0.3s ease;
  color: #1a1a1a;
  font-size: 1.5rem;

  &:hover {
    background: white;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const destinations = [
  {
    id: 'passeio-lancha',
    name: 'Passeio de Lancha',
    description: 'Explore o Rio Preguiças em um passeio de lancha emocionante, visitando pontos turísticos únicos.',
    image: '/public/Lencois-1.jpg',
    duration: '8 horas',
    groupSize: '4-8 pessoas',
    rating: '4.9',
    price: 'R$ 150'
  },
  {
    id: 'passeio-4x4',
    name: 'Passeio de 4x4',
    description: 'Aventure-se pelas dunas em um veículo 4x4, chegando a lugares inacessíveis e deslumbrantes.',
    image: '/public/barreirinhas-ma-passeio-de-barco-farol-mandacaru-2.webp',
    duration: '6 horas',
    groupSize: '6-12 pessoas',
    rating: '4.8',
    price: 'R$ 120'
  },
  {
    id: 'por-do-sol',
    name: 'Pôr do Sol nas Dunas',
    description: 'Assista ao espetacular pôr do sol nas dunas dos Lençóis Maranhenses.',
    image: '/public/lencois-maranhenses.jpg',
    duration: '2 dias',
    groupSize: '4-8 pessoas',
    rating: '5.0',
    price: 'R$ 280'
  },
  {
    id: 'kitesurf',
    name: 'Kitesurf em Atins',
    description: 'Pratique kitesurf nas águas cristalinas de Atins, um dos melhores spots do Brasil.',
    image: '/kitesurf.jpg',
    duration: '8 horas',
    groupSize: '4-8 pessoas',
    rating: '4.9',
    price: 'R$ 150'
  },
  {
    id: 'trilha-oasis',
    name: 'Trilha do Oásis',
    description: 'Faça uma trilha guiada até lagoas escondidas, verdadeiros oásis entre as dunas.',
    image: '/trilha.jpg',
    duration: '6 horas',
    groupSize: '6-12 pessoas',
    rating: '4.8',
    price: 'R$ 120'
  }
];

const Destinations = () => {
  const destinationsGridRef = useRef(null);
  const navigate = useNavigate();

  const handleScroll = (direction) => {
    const container = destinationsGridRef.current;
    const scrollAmount = 400;
    if (container) {
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <DestinationsSection>
      <Container>
        <SectionTitle>Nossos Pacotes</SectionTitle>
        <SectionSubtitle>
          Explore nossos roteiros cuidadosamente planejados para sua melhor experiência
        </SectionSubtitle>
        <DestinationsContainer>
          <ScrollButton direction="left" onClick={() => handleScroll('left')}>
            ‹
          </ScrollButton>
          <DestinationsGrid ref={destinationsGridRef}>
            {destinations.map(destination => (
              <DestinationCard key={destination.id}>
                <ImageContainer>
                  <DestinationImage src={destination.image} alt={destination.name} />
                </ImageContainer>
                <DestinationContent>
                  <DestinationName>{destination.name}</DestinationName>
                  <DestinationDescription>
                    {destination.description}
                  </DestinationDescription>
                  <DestinationInfo>
                    <InfoItem>
                      <span className="label">Duração</span>
                      <span className="value">{destination.duration}</span>
                    </InfoItem>
                    <InfoItem>
                      <span className="label">Grupo</span>
                      <span className="value">{destination.groupSize}</span>
                    </InfoItem>
                    <InfoItem>
                      <span className="label">Avaliação</span>
                      <span className="value">★ {destination.rating}</span>
                    </InfoItem>
                    <InfoItem>
                      <span className="label">Status</span>
                      <span className="value">Disponível</span>
                    </InfoItem>
                  </DestinationInfo>
                  <PriceTag>
                    <span className="price">{destination.price}</span>
                    <span className="period">por pessoa</span>
                  </PriceTag>
                  <DestinationButton>
                    Reservar
                  </DestinationButton>
                </DestinationContent>
              </DestinationCard>
            ))}
          </DestinationsGrid>
          <ScrollButton direction="right" onClick={() => handleScroll('right')}>
            ›
          </ScrollButton>
        </DestinationsContainer>
      </Container>
    </DestinationsSection>
  );
};

export default Destinations;
