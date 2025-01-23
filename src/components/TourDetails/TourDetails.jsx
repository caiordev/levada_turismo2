import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const DetailsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #ffffff;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Header = styled.div`
  position: relative;
  height: auto;
  margin-bottom: 2rem;
  border-radius: 15px;
  overflow: hidden;
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

  @media (max-width: 768px) {
    padding: 0.5rem;
    gap: 1rem;
    background: transparent;
  }
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

  &:not(:first-child) {
    flex: 0 0 100%;
  }

  &:hover {
    transform: scale(1.03);
  }

  @media (max-width: 768px) {
    height: 40vh;
    flex: 0 0 100%;
    
    &:not(:first-child) {
      flex: 0 0 100%;
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
  background: rgba(0,0,0,0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 1rem;

  img {
    max-width: 90%;
    max-height: 90vh;
    object-fit: contain;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    padding: 0.5rem;
    background: rgba(0,0,0,0.95);
    
    img {
      max-width: 100%;
      max-height: 80vh;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 2rem 0;
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
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #128c7e;
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.8rem;
    font-size: 1rem;
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.9);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 2;
  animation: bounce 1.5s infinite;
  pointer-events: none;

  @keyframes bounce {
    0%, 100% {
      transform: translateY(-50%) translateX(0);
    }
    50% {
      transform: translateY(-50%) translateX(5px);
    }
  }

  &::after {
    content: '→';
    font-size: 20px;
    color: #333;
  }

  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
    right: 15px;
    
    &::after {
      font-size: 16px;
    }
  }
`;

const tourData = {
  'lagoa-azul': {
    name: 'Lagoa Azul',
    rating: 5.0,
    mainImage: '/lencois-maranhenses.jpg',
    description: 'Saíremos em um veículo 4x4 em direção ao Parque Nacional. Nossa aventura começa percorrendo estradas de areia, com duração de aproximadamente 45 minutos, até chegarmos ao circuito da Lagoa Azul. A partir daí, caminharemos pelas dunas, passando por várias outras lagoas (durante a época de cheia). Visitaremos a Lagoa Azul, a Lagoa da Esmeralda e a Lagoa dos Toyoteiros. Poderemos tomar um maravilhoso banho nas lagoas e apreciar a beleza dos Lençóis Maranhenses. Por volta das 12:00 horas, retornaremos ao veículo para voltar a Barreirinhas, chegando na cidade entre 13:00 horas.',
    details: {
      duration: '4 horas',
      difficulty: 'Moderada',
      included: ['Transfer 4x4', 'Guia local'],
      recommendations: ['Protetor solar', 'Roupas de banho', 'Toalha', 'Câmera']
    },
    gallery: [
      '/Lencois-1.jpg',
      '/lencois-maranhenses.jpg',
      '/lencois-maranhenses-hurb-2839.jpeg',
      '/parque-nacional-dos-lencois.jpg'
    ]
  },
  'lagoa-bonita': {
    name: 'Lagoa Bonita',
    rating: 5.0,
    mainImage: '/circuito-lagoa-bonita.webp',
    description: 'Seguiremos em direção ao Parque Nacional em um veículo 4x4. Vamos para o Circuito da Lagoa Bonita, onde teremos a sensação de estar em meio a um grande deserto, um deserto muito especial e cheio de lagoas (durante a época de cheia). Após deliciosos banhos e um agradável entardecer, retornaremos para Barreirinhas.',
    details: {
      duration: '3 horas',
      difficulty: 'Fácil',
      included: ['Transporte de barco', 'Guia local'],
      recommendations: ['Protetor solar', 'Chapéu/boné', 'Câmera']
    },
    gallery: [
      '/barreirinhas-ma-passeio-de-barco-farol-mandacaru-2.webp',
      '/BarreirinhasPortal.jpg',
      '/caiaque6.jpeg'
    ]
  },
  'lagoa-azul-bonito': {
    name: 'Lagoa Azul + Lagoa Bonita',
    rating: 5.0,
    mainImage: '/lagoa-azul-bonita.jpeg',
    description: 'Após o café da manhã, iniciaremos nossa jornada em um veículo 4x4 rumo ao Parque Nacional dos Lençóis Maranhenses. A aventura começa atravessando estradas de areia até o circuito da Lagoa Azul. Lá, iniciaremos uma caminhada pelas imponentes dunas, contemplando diversas lagoas ao longo do caminho (presentes durante a época da cheia). Seguiremos em direção à Lagoa Bonita, com uma parada estratégica em um restaurante local para saborear um almoço típico e recarregar as energias. Após um breve descanso, continuaremos até a Lagoa Bonita, um cenário único que transmite a sensação de estar em um vasto deserto repleto de lagoas cristalinas. Aproveitaremos deliciosos banhos e um inesquecível pôr do sol antes de retornar para Barreirinhas, fechando o dia com memórias encantadoras desse paraíso natural.',
    details: {
      duration: '4 horas',
      difficulty: 'Moderada',
      included: ['Transfer 4x4', 'Guia local'],
      recommendations: ['Protetor solar', 'Roupas de banho', 'Toalha', 'Câmera']
    },
    gallery: [
      '/Lencois-1.jpg',
      '/lencois-maranhenses.jpg',
      '/lencois-maranhenses-hurb-2839.jpeg',
      '/parque-nacional-dos-lencois.jpg'
    ]
  },
  'atins': {
    name: 'Atins - Parque Nacional - Canto do Atins',
    rating: 5.0,
    mainImage: '/lencois-maranhenses.jpg',
    description: 'Após o café da manhã, sairemos em um veículo 4x4 até o Parque Nacional dos Lençóis Maranhenses, desta vez mais próximos ao mar. Passamos inicialmente pela Praia de Atins e, de lá, seguimos ao início das dunas do parque. Paramos o veículo, e sobre uma das inúmeras dunas teremos uma linda vista do parque, que se estende até o Canto do Atins e o mar. Seguimos então à Praia dos Lençóis, onde as dunas se aproximam do mar. Aqui, podemos tomar um banho de mar. Na época das chuvas, veremos uma pequena cachoeira que se forma junto ao mar. Seguimos então para as lagoas do Gavião, do Kite e outras lagoas mais, que nos permitem escolher em qual delas queremos desfrutar de deliciosos banhos. Agora já é hora de recompor as energias com um delicioso almoço no Canto do Atins. Luzia ou Antônio, em qual das duas barracas iremos comer aquele camarão fresco ou o peixe pescado há pouco? Difícil escolha... À tarde, lembrando que estamos no Nordeste, onde o dia é sempre quente, seguimos à Lagoa Tropical e à Lagoa da Esmeralda para mais alguns mergulhos deliciosos. No final do dia, voltamos ao nosso hotel. Horário: das 08:30 às 17:00, chegando na cidade.',
    details: {
      duration: '4 horas',
      difficulty: 'Moderada',
      included: ['Transfer 4x4', 'Guia local'],
      recommendations: ['Protetor solar', 'Roupas de banho', 'Toalha', 'Câmera']
    },
    gallery: [
      '/Lencois-1.jpg',
      '/lencois-maranhenses.jpg',
      '/lencois-maranhenses-hurb-2839.jpeg',
      '/parque-nacional-dos-lencois.jpg'
    ]
  },
  'vassouras-mandacaru-caburé': {
    name: 'Vassouras, Mandacaru e Caburé',
    rating: 5.0,
    mainImage: '/mandacaru.webp',
    description: 'Após o café da manhã, sairemos em voadeira Rio Preguiças abaixo em direção ao povoado do Atins. No caminho, paramos em Vassouras, Pequenos Lençóis, Área de Proteção Ambiental. Caminhamos pelas dunas, tomamos banho nas lagoas (na época da cheia) e podemos ainda saborear uma água de coco em uma barraquinha beira rio. Poderemos ainda ver os macacos prego que habitam o mangue do entorno. Continuamos navegando e em alguns minutos estamos no Caburé. É aqui que os pescadores passam o primeiro semestre do ano, quando as condições climáticas favorecem a pesca. Oportunidade de banho de mar. Em seguida cruzaremos o rio até o Mandacaru, um povoado de uma centena de casas que se originou a partir do Farol do Preguiças. Quando a entrada no mesmo está liberada, a sugestão é subir o farol e apreciar a vista do alto, podendo-se ver até o Parque Nacional e o mar.',
    details: {
      duration: '4 horas',
      difficulty: 'Moderada',
      included: ['Transfer 4x4', 'Guia local'],
      recommendations: ['Protetor solar', 'Roupas de banho', 'Toalha', 'Câmera']
    },
    gallery: [
      '/Lencois-1.jpg',
      '/lencois-maranhenses.jpg',
      '/lencois-maranhenses-hurb-2839.jpeg',
      '/parque-nacional-dos-lencois.jpg'
    ]
  },
  'pequenos-lencois': {
    name: 'Pequenos Lençóis',
    rating: 5.0,
    mainImage: '/pequenos-lencois.jpg',
    description: 'passeio de Quadriciclo, saída as 09:00hs.destino para os pequenos lençóis,Parque eólico, você vai pilotar o quadriciclo, cruzando as dunas dos pequenos lençóis. Parada nas lagoas de água doce aonde se pode mergulhar a vontade na lagoa do Alazão,Caités, próxima parada praia do caburé parada para o almoço e banho na praia, estamos de volta as 16hs:3',
    details: {
      duration: '4 horas',
      difficulty: 'Moderada',
      included: ['Transfer 4x4', 'Guia local'],
      recommendations: ['Protetor solar', 'Roupas de banho', 'Toalha', 'Câmera']
    },
    gallery: [
      '/Lencois-1.jpg',
      '/lencois-maranhenses.jpg',
      '/lencois-maranhenses-hurb-2839.jpeg',
      '/parque-nacional-dos-lencois.jpg'
    ]
  },
  'cardosa': {
    name: 'Cardosa',
    rating: 5.0,
    mainImage: '/cardosa.webp',
    description: 'Partiremos de Barreirinhas em um veículo 4x4 em direção ao povoado de Cardosa, em uma viagem de aproximadamente 1 hora. Ao chegar, encontraremos o Rio Formiga, um rio de águas cristalinas e temperatura muito agradável. Lá, faremos uma descida em boias infláveis durante 1 hora, acompanhados de guias locais.',
    details: {
      duration: '4 horas',
      difficulty: 'Moderada',
      included: ['Transfer 4x4', 'Guia local'],
      recommendations: ['Protetor solar', 'Roupas de banho', 'Toalha', 'Câmera']
    },
    gallery: [
      '/Lencois-1.jpg',
      '/lencois-maranhenses.jpg',
      '/lencois-maranhenses-hurb-2839.jpeg',
      '/parque-nacional-dos-lencois.jpg'
    ]
  },
  'passeio-caiaque': {
    name: 'Aventura de Caiaque',
    rating: 5.0,
    mainImage: '/caiaque6.jpeg',
    description: 'Passeio de caiaque pelo Rio Preguiças, com duração de aproximadamente 4 horas. Durante o passeio, exploraremos a natureza de perto, passando por manguezais e apreciando a fauna e flora locais.',
    details: {
      duration: '4 horas',
      difficulty: 'Moderada',
      included: ['Transfer 4x4', 'Guia local'],
      recommendations: ['Protetor solar', 'Roupas de banho', 'Toalha', 'Câmera']
    },
    gallery: [
      '/Lencois-1.jpg',
      '/lencois-maranhenses.jpg',
      '/lencois-maranhenses-hurb-2839.jpeg',
      '/parque-nacional-dos-lencois.jpg'
    ]
  },
  
};

const TourDetails = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showIndicator, setShowIndicator] = useState(true);
  const { id } = useParams();
  const tour = tourData[id];

  // Hide indicator after first scroll
  const handleScroll = (e) => {
    if (e.target.scrollLeft > 0) {
      setShowIndicator(false);
    }
  };

  if (!tour) return <div>Tour não encontrado</div>;

  return (
    <DetailsContainer>
      <Header>
        <GalleryGrid onScroll={handleScroll}>
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
        {showIndicator && tour.gallery.length > 0 && <ScrollIndicator />}
      </Header>

      <InfoSection>
        <Description>
          <h2>Sobre o Passeio</h2>
          <p>{tour.description}</p>
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
          <img src={selectedImage} alt="Tour" onClick={(e) => e.stopPropagation()} />
        </Modal>
      )}

      <ButtonContainer>
        <Button>
          <i className="fab fa-whatsapp"></i>
          Reservar este passeio
        </Button>
      </ButtonContainer>
    </DetailsContainer>
  );
};

export default TourDetails;
