import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faUsers, faStar } from '@fortawesome/free-solid-svg-icons';

const DestinationsSection = styled.section`
  padding: 80px 0;
  background: #fff;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 50px;
`;

const DestinationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const DestinationCard = styled.div`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  height: 650px;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-10px);
  }
`;

const DestinationImage = styled.div`
  height: 300px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
`;

const DestinationContent = styled.div`
  padding: 25px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const DestinationTitle = styled.h3`
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 15px;
`;

const DestinationDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
  flex-grow: 1;
`;

const DestinationFeatures = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin-bottom: 20px;
`;

const Feature = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 10px;
  background: #f8f9fa;
  border-radius: 10px;

  i {
    font-size: 1.5rem;
    color: #2196f3;
    margin-bottom: 5px;
  }

  span {
    font-size: 0.9rem;
    color: #666;
  }
`;

const PriceTag = styled.div`
  text-align: center;
  margin-bottom: 20px;

  .price {
    font-size: 2rem;
    color: #2196f3;
    font-weight: 600;
  }

  .period {
    color: #666;
    font-size: 0.9rem;
  }
`;

const BookButton = styled.button`
  width: 100%;
  padding: 15px;
  background: #2196f3;
  color: white;
  border: none;
  border-radius: 25px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #1976d2;
    transform: translateY(-2px);
  }
`;

const destinations = [
  {
    image: '/public/Lencois-1.jpg',
    title: 'Passeio Lagoa Azul',
    description: 'Explore as deslumbrantes lagoas dos Lençóis Maranhenses em um passeio inesquecível. Inclui transporte em 4x4, guia local e paradas para banho.',
    duration: '8 horas',
    groupSize: '4-8 pessoas',
    rating: '4.9',
    price: 'R$ 150'
  },
  {
    image: '/public/barreirinhas-ma-passeio-de-barco-farol-mandacaru-2.webp',
    title: 'Passeio Rio Preguiças',
    description: 'Navegue pelo Rio Preguiças, visitando pontos históricos como o Farol de Mandacaru e os Pequenos Lençóis. Inclui passeio de barco e almoço.',
    duration: '6 horas',
    groupSize: '6-12 pessoas',
    rating: '4.8',
    price: 'R$ 120'
  },
  {
    image: '/public/lencois-maranhenses.jpg',
    title: 'Circuito Completo',
    description: 'Conheça o melhor dos Lençóis Maranhenses em um circuito completo. Visite as principais lagoas, dunas e faça o passeio de barco pelo Rio Preguiças.',
    duration: '2 dias',
    groupSize: '4-8 pessoas',
    rating: '5.0',
    price: 'R$ 280'
  }
];

const Destinations = () => {
  return (
    <DestinationsSection id="packages">
      <SectionTitle>Pacotes</SectionTitle>
      <DestinationsGrid>
        {destinations.map((destination, index) => (
          <DestinationCard key={index}>
            <DestinationImage image={destination.image} />
            <DestinationContent>
              <DestinationTitle>{destination.title}</DestinationTitle>
              <DestinationDescription>{destination.description}</DestinationDescription>
              <DestinationFeatures>
                <Feature>
                  <FontAwesomeIcon icon={faClock} />
                  <span>{destination.duration}</span>
                </Feature>
                <Feature>
                  <FontAwesomeIcon icon={faUsers} />
                  <span>{destination.groupSize}</span>
                </Feature>
                <Feature>
                  <FontAwesomeIcon icon={faStar} />
                  <span>{destination.rating}</span>
                </Feature>
              </DestinationFeatures>
              <PriceTag>
                <span className="price">{destination.price}</span>
                <span className="period">/pessoa</span>
              </PriceTag>
              <BookButton>Reservar Agora</BookButton>
            </DestinationContent>
          </DestinationCard>
        ))}
      </DestinationsGrid>
    </DestinationsSection>
  );
};

export default Destinations;
