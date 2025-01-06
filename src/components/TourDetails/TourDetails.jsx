import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const DetailsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Header = styled.div`
  position: relative;
  height: auto;
  margin-bottom: 2rem;
  border-radius: 15px;
  overflow: hidden;
`;

const HeaderContent = styled.div`
  position: absolute;
  top: 2rem;
  left: 2rem;
  color: white;
  z-index: 1;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .rating {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
  }
`;

const GalleryGrid = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 1.5rem;
  padding: 1rem;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  background: #f8f9fa;
  border-radius: 15px;
  
  &::-webkit-scrollbar {
    display: none;
  }
  
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const GalleryImage = styled.div`
  flex: 0 0 100%;
  height: 60vh;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  border-radius: 15px;
  cursor: pointer;
  transition: transform 0.3s ease;
  scroll-snap-align: start;
  position: relative;

  &:first-child {
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6));
      border-radius: 15px;
    }
  }

  &:not(:first-child) {
    flex: 0 0 400px;
    height: 60vh;
  }

  &:hover {
    transform: scale(1.03);
  }

  @media (max-width: 768px) {
    height: 40vh;
    
    &:not(:first-child) {
      flex: 0 0 300px;
      height: 40vh;
    }
  }
`;

const InfoSection = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Description = styled.div`
  h2 {
    font-size: 1.8rem;
    color: #333;
    margin-bottom: 1rem;
  }

  p {
    color: #666;
    line-height: 1.8;
    margin-bottom: 1.5rem;
  }
`;

const Details = styled.div`
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 15px;

  h3 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 1.5rem;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      display: flex;
      align-items: center;
      margin-bottom: 1rem;
      color: #666;

      svg {
        margin-right: 1rem;
        color: #007bff;
      }
    }
  }
`;

const Timeline = styled.div`
  margin: 3rem 0;
  padding: 2rem;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);

  h2 {
    font-size: 1.8rem;
    color: #333;
    margin-bottom: 2rem;
  }
`;

const TimelineItem = styled.div`
  position: relative;
  padding-left: 30px;
  margin-bottom: 2rem;
  
  &:last-child {
    margin-bottom: 0;
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: #007bff;
  }

  &::after {
    content: '';
    position: absolute;
    left: -4px;
    top: 0;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #007bff;
  }
`;

const TimelineTime = styled.h3`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const TimelineContent = styled.p`
  color: #666;
  margin: 0;
`;

const InfoCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin: 3rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const InfoCard = styled.div`
  background: #fff;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);

  h3 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      display: flex;
      align-items: center;
      margin-bottom: 1rem;
      color: #666;

      &:before {
        content: '•';
        color: #007bff;
        font-size: 1.5rem;
        margin-right: 0.5rem;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  img {
    max-width: 90%;
    max-height: 90vh;
    object-fit: contain;
  }
`;

const Button = styled.button`
  background-color: #25d366;
  color: white;
  border: none;
  border-radius: 25px;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #128c7e;
  }
`;

const tourData = {
  'lagoa-azul': {
    name: 'Lagoa Azul',
    rating: 5.0,
    mainImage: '/lencois-maranhenses.jpg',
    description: 'A Lagoa Azul é uma das mais famosas e belas lagoas dos Lençóis Maranhenses. Com suas águas cristalinas e areias brancas, oferece uma experiência única de banho e contemplação da natureza.',
    longDescription: 'Durante o passeio, você terá a oportunidade de conhecer diversas lagoas da região, com paradas estratégicas para banho e fotos. Nossos guias experientes compartilharão informações sobre a formação do parque e curiosidades sobre a fauna e flora local.',
    details: {
      duration: '4 horas',
      difficulty: 'Moderada',
      included: ['Transfer 4x4', 'Guia local', 'Água mineral', 'Seguro viagem'],
      recommendations: ['Protetor solar', 'Roupas de banho', 'Toalha', 'Câmera']
    },
    gallery: [
      '/Lencois-1.jpg',
      '/lencois-maranhenses.jpg',
      '/lencois-maranhenses-hurb-2839.jpeg',
      '/parque-nacional-dos-lencois.jpg'
    ]
  },
  'farol-mandacaru': {
    name: 'Farol Mandacaru',
    rating: 5.0,
    mainImage: '/barreirinhas-ma-passeio-de-barco-farol-mandacaru-2.webp',
    description: 'Visite o histórico Farol de Mandacaru e desfrute de uma vista panorâmica espetacular da região.',
    longDescription: 'O passeio ao Farol de Mandacaru é uma experiência única que combina história e natureza. Do alto do farol, você terá uma vista privilegiada do encontro do Rio Preguiças com o mar, além de poder observar toda a região dos Lençóis Maranhenses.',
    details: {
      duration: '3 horas',
      difficulty: 'Fácil',
      included: ['Transporte de barco', 'Guia local', 'Água mineral', 'Seguro viagem'],
      recommendations: ['Protetor solar', 'Chapéu/boné', 'Câmera', 'Dinheiro para artesanato']
    },
    gallery: [
      '/barreirinhas-ma-passeio-de-barco-farol-mandacaru-2.webp',
      '/BarreirinhasPortal.jpg',
      '/caiaque6.jpeg'
    ]
  },
  'passeio-barco': {
    name: 'Passeio de Barco',
    rating: 5.0,
    mainImage: '/BarreirinhasPortal.jpg',
    description: 'Navegue pelo Rio Preguiças com paradas em pontos turísticos.',
    longDescription: 'Um passeio relaxante pelo Rio Preguiças, onde você conhecerá diversos pontos turísticos e poderá apreciar a natureza local. O passeio inclui paradas em comunidades ribeirinhas e pontos de interesse histórico.',
    details: {
      duration: '6 horas',
      difficulty: 'Fácil',
      included: ['Barco', 'Guia especializado', 'Almoço', 'Seguro viagem'],
      recommendations: ['Protetor solar', 'Roupas leves', 'Câmera', 'Dinheiro extra']
    },
    gallery: [
      '/BarreirinhasPortal.jpg',
      '/caiaque6.jpeg',
      '/barreirinhas-ma-passeio-de-barco-farol-mandacaru-2.webp'
    ]
  }
};

const TourDetails = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const { id } = useParams();
  const tour = tourData[id];

  if (!tour) return <div>Tour não encontrado</div>;

  return (
    <DetailsContainer>
      <Header>
        <HeaderContent>
          <h1>{tour.name}</h1>
          <div className="rating">
            {'★'.repeat(5)} <span>{tour.rating.toFixed(1)}</span>
          </div>
        </HeaderContent>
        <GalleryGrid>
          <GalleryImage
            image={tour.mainImage}
            onClick={() => setSelectedImage(tour.mainImage)}
          />
          {tour.gallery.map((image, index) => (
            <GalleryImage
              key={index}
              image={image}
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </GalleryGrid>
      </Header>

      <InfoSection>
        <Description>
          <h2>Sobre o Passeio</h2>
          <p>{tour.longDescription}</p>
        </Description>
      </InfoSection>

      <Timeline>
        <h2>Roteiro do Passeio</h2>
        <TimelineItem>
          <TimelineTime>08:00</TimelineTime>
          <TimelineContent>Saída do hotel em veículo 4x4</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineTime>09:00</TimelineTime>
          <TimelineContent>Chegada na {tour.name}</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineTime>11:00</TimelineTime>
          <TimelineContent>Tempo livre para banho e fotos</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineTime>12:00</TimelineTime>
          <TimelineContent>Retorno ao hotel</TimelineContent>
        </TimelineItem>
      </Timeline>

      <InfoCards>
        <InfoCard>
          <h3>
            <span>O que está incluso</span>
          </h3>
          <ul>
            {tour.details.included.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </InfoCard>
        <InfoCard>
          <h3>
            <span>O que levar</span>
          </h3>
          <ul>
            {tour.details.recommendations.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </InfoCard>
      </InfoCards>

      {selectedImage && (
        <Modal onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Tour" />
        </Modal>
      )}

      <Button>
        <i className="fab fa-whatsapp"></i> Reservar este passeio
      </Button>
    </DetailsContainer>
  );
};

export default TourDetails;
