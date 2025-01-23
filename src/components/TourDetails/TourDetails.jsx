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

const Header = styled.header`
  width: 100%;
  margin-bottom: 2rem;
  border-radius: 15px;
  overflow: hidden;

  .header-top {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;

    img {
      width: 180px;
      height: auto;
      object-fit: contain;
    }

    h1 {
      font-size: 2.5rem;
      margin: 0;
      color: #333;
    }
  }

  @media (max-width: 768px) {
    .header-top {
      display: flex;
      align-items: center;
      gap: 1rem;
      
      img {
        width: 80px;
      }

      h1 {
        font-size: 1rem;
      }
    }
  }
`;

const ImageGallery = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 15px;
  margin: 2rem 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  .gallery-container {
    display: flex;
    transition: transform 0.5s ease-in-out;
  }

  img {
    width: 100%;
    flex-shrink: 0;
    object-fit: cover;
    aspect-ratio: 16/9;
  }
`;

const GalleryArrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${props => props.direction === 'left' ? 'left: 20px;' : 'right: 20px;'}
  background: rgba(255, 255, 255, 0.3);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
  z-index: 2;

  &:hover {
    background: rgba(255, 255, 255, 0.5);
  }

  &::before {
    content: ${props => props.direction === 'left' ? '"❮"' : '"❯"'};
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
    ${props => props.direction === 'left' ? 'left: 10px;' : 'right: 10px;'}
  }
`;

const GalleryDots = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 2;
`;

const Dot = styled.button`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${props => props.active ? 'white' : 'rgba(255, 255, 255, 0.5)'};
  border: none;
  padding: 0;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: white;
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

const VideoSection = styled.div`
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

  iframe {
    border-radius: 15px;
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
    ],
    itinerary: [
      {
        time: '07:30',
        activity: 'Saída do hotel em veículo 4x4'
      },
      {
        time: '08:30',
        activity: 'Chegada ao ponto de partida para Lagoa Azul'
      },
      {
        time: '09:00',
        activity: 'Início da caminhada pelas dunas'
      },
      {
        time: '09:30',
        activity: 'Chegada na Lagoa Azul'
      },
      {
        time: '11:30',
        activity: 'Tempo livre para banho e fotos'
      },
      {
        time: '12:30',
        activity: 'Início do retorno'
      },
      {
        time: '13:30',
        activity: 'Chegada ao hotel'
      }
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
    ],
    itinerary: [
      {
        time: '07:30',
        activity: 'Saída do hotel em veículo 4x4'
      },
      {
        time: '08:30',
        activity: 'Chegada ao ponto de partida para Lagoa Azul'
      },
      {
        time: '09:00',
        activity: 'Início da caminhada pelas dunas'
      },
      {
        time: '09:30',
        activity: 'Chegada na Lagoa Azul'
      },
      {
        time: '11:30',
        activity: 'Tempo livre para banho e fotos'
      },
      {
        time: '12:30',
        activity: 'Início do retorno'
      },
      {
        time: '13:30',
        activity: 'Chegada ao hotel'
      }
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
    ],
    itinerary: [
      {
        time: '07:30',
        activity: 'Saída do hotel em veículo 4x4'
      },
      {
        time: '08:30',
        activity: 'Chegada ao ponto de partida para Lagoa Azul'
      },
      {
        time: '09:00',
        activity: 'Início da caminhada pelas dunas'
      },
      {
        time: '09:30',
        activity: 'Chegada na Lagoa Azul'
      },
      {
        time: '11:30',
        activity: 'Tempo livre para banho e fotos'
      },
      {
        time: '12:30',
        activity: 'Início do retorno'
      },
      {
        time: '13:30',
        activity: 'Chegada ao hotel'
      }
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
    ],
    itinerary: [
      {
        time: '07:30',
        activity: 'Saída do hotel em veículo 4x4'
      },
      {
        time: '08:30',
        activity: 'Chegada ao ponto de partida para Lagoa Azul'
      },
      {
        time: '09:00',
        activity: 'Início da caminhada pelas dunas'
      },
      {
        time: '09:30',
        activity: 'Chegada na Lagoa Azul'
      },
      {
        time: '11:30',
        activity: 'Tempo livre para banho e fotos'
      },
      {
        time: '12:30',
        activity: 'Início do retorno'
      },
      {
        time: '13:30',
        activity: 'Chegada ao hotel'
      }
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
    ],
    itinerary: [
      {
        time: '07:30',
        activity: 'Saída do hotel em veículo 4x4'
      },
      {
        time: '08:30',
        activity: 'Chegada ao ponto de partida para Lagoa Azul'
      },
      {
        time: '09:00',
        activity: 'Início da caminhada pelas dunas'
      },
      {
        time: '09:30',
        activity: 'Chegada na Lagoa Azul'
      },
      {
        time: '11:30',
        activity: 'Tempo livre para banho e fotos'
      },
      {
        time: '12:30',
        activity: 'Início do retorno'
      },
      {
        time: '13:30',
        activity: 'Chegada ao hotel'
      }
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
    ],
    itinerary: [
      {
        time: '07:30',
        activity: 'Saída do hotel em veículo 4x4'
      },
      {
        time: '08:30',
        activity: 'Chegada ao ponto de partida para Lagoa Azul'
      },
      {
        time: '09:00',
        activity: 'Início da caminhada pelas dunas'
      },
      {
        time: '09:30',
        activity: 'Chegada na Lagoa Azul'
      },
      {
        time: '11:30',
        activity: 'Tempo livre para banho e fotos'
      },
      {
        time: '12:30',
        activity: 'Início do retorno'
      },
      {
        time: '13:30',
        activity: 'Chegada ao hotel'
      }
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
    ],
    itinerary: [
      {
        time: '07:30',
        activity: 'Saída do hotel em veículo 4x4'
      },
      {
        time: '08:30',
        activity: 'Chegada ao ponto de partida para Lagoa Azul'
      },
      {
        time: '09:00',
        activity: 'Início da caminhada pelas dunas'
      },
      {
        time: '09:30',
        activity: 'Chegada na Lagoa Azul'
      },
      {
        time: '11:30',
        activity: 'Tempo livre para banho e fotos'
      },
      {
        time: '12:30',
        activity: 'Início do retorno'
      },
      {
        time: '13:30',
        activity: 'Chegada ao hotel'
      }
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
      '/caiaque/caiaque1.jpeg',
      '/caiaque/caiaque2.jpeg',
      '/caiaque/caiaque3.jpeg',
      '/caiaque/caiaque4.jpeg'
    ],
    videoUrl: 'https://youtube.com/shorts/XKfCEsUyISQ?feature=share',
    itinerary: [
      {
        time: '07:30',
        activity: 'Saída do hotel em veículo 4x4'
      },
      {
        time: '08:30',
        activity: 'Chegada ao ponto de partida para Lagoa Azul'
      },
      {
        time: '09:00',
        activity: 'Início da caminhada pelas dunas'
      },
      {
        time: '09:30',
        activity: 'Chegada na Lagoa Azul'
      },
      {
        time: '11:30',
        activity: 'Tempo livre para banho e fotos'
      },
      {
        time: '12:30',
        activity: 'Início do retorno'
      },
      {
        time: '13:30',
        activity: 'Chegada ao hotel'
      }
    ]
  },
  
};

const TourDetails = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [showIndicator, setShowIndicator] = useState(true);
  const { id } = useParams();
  const tour = tourData[id];

  // Hide indicator after first scroll
  const handleScroll = (e) => {
    if (e.target.scrollLeft > 0) {
      setShowIndicator(false);
    }
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % tour.gallery.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + tour.gallery.length) % tour.gallery.length);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (Math.abs(distance) < minSwipeDistance) return;

    if (distance > 0) {
      // Swiped left, go to next image
      nextImage();
    } else {
      // Swiped right, go to previous image
      prevImage();
    }

    // Reset touch positions
    setTouchStart(0);
    setTouchEnd(0);
  };

  if (!tour) return <div>Tour não encontrado</div>;

  return (
    <DetailsContainer>
      <Header>
        <div className="header-top">
          <img src="/logo-removebg-preview.png" alt="Logo" />
          <h1>{tour.name}</h1>
        </div>
        <ImageGallery>
          <div 
            className="gallery-container" 
            style={{ transform: `translateX(-${currentImage * 100}%)` }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {tour.gallery.map((image, index) => (
              <img key={index} src={image} alt={`${tour.name} - Imagem ${index + 1}`} />
            ))}
          </div>
          <GalleryArrow direction="left" onClick={prevImage} />
          <GalleryArrow direction="right" onClick={nextImage} />
          <GalleryDots>
            {[...Array(tour.gallery.length)].map((_, index) => (
              <Dot 
                key={index} 
                active={currentImage === index} 
                onClick={() => setCurrentImage(index)}
              />
            ))}
          </GalleryDots>
          {showIndicator && tour.gallery.length > 0 && <ScrollIndicator />}
        </ImageGallery>
      </Header>

      <InfoSection>
        <Description>
          <h2>Sobre o Passeio</h2>
          <p>{tour.description}</p>
        </Description>
      </InfoSection>

      {tour.videoUrl && (
        <VideoSection>
          <h2>Vídeo do Passeio</h2>
          <iframe
            width="100%"
            height="400"
            src={tour.videoUrl.replace('shorts/', 'embed/').replace('?feature=share', '')}
            title={`Vídeo do passeio ${tour.name}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoSection>
      )}

      <Timeline>
        <h2>Roteiro do Passeio</h2>
        {tour.itinerary.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineTime>{item.time}</TimelineTime>
            <TimelineContent>{item.activity}</TimelineContent>
          </TimelineItem>
        ))}
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
