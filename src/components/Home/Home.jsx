import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const HomeSection = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  margin: 0;
  padding: 0;
`;

const SlideContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${props => props.translate}%);
`;

const SlideItem = styled.div`
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  position: relative;
  background-image: url(${props => props.image});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5));
  }
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  z-index: 1;
  width: 90%;
  max-width: 800px;
`;

const Name = styled.h2`
  font-size: 4.5rem;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
`;

const Description = styled.p`
  font-size: 1.4rem;
  margin-bottom: 2.5rem;
  max-width: 800px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
    line-height: 1.4;
  }
`;

const Button = styled.button`
  padding: 15px 35px;
  background: #2196f3;
  color: white;
  border: none;
  border-radius: 30px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 4px 15px rgba(33, 150, 243, 0.3);

  @media (max-width: 768px) {
    padding: 10px 25px;
    font-size: 1rem;
  }

  &:hover {
    background: #1976d2;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(33, 150, 243, 0.4);
  }
`;

const NavigationDots = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 2;
`;

const Dot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid white;
  background: ${props => props.active ? 'white' : 'transparent'};
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;

  &:hover {
    transform: scale(1.2);
  }
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 2;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    display: none;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }

  ${props => props.direction === 'left' ? 'left: 20px;' : 'right: 20px;'}
`;

const slides = [
  {
    image: '/lencois-maranhenses.jpg',
    name: 'Lençóis Maranhenses',
    description: 'Descubra o paraíso das dunas e lagoas cristalinas'
  },
  {
    image: '/barreirinhas-ma-passeio-de-barco-farol-mandacaru-2.webp',
    name: 'Mandacaru',
    description: 'Explore a história e a vista panorâmica da região'
  },
  {
    image: '/atins.webp',
    name: 'Atins',
    description: 'Explore as praias desertas e a natureza selvagem'
  },
  {
    image: '/pequenos-lencois.jpg',
    name: 'Pequenos Lençóis',
    description: 'Navegue pelas águas tranquilas e conheça a natureza local'
  },
  {
    image: '/cardosa.webp',
    name: 'Povoado Cardosa',
    description: 'Navegue pelas águas tranquilas e conheça a natureza local'
  }
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    startSlideShow();
    return () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current);
      }
    };
  }, []);

  const startSlideShow = () => {
    slideInterval.current = setInterval(() => {
      setCurrentSlide(current => (current + 1) % slides.length);
    }, 5000);
  };

  const handleExplore = () => {
    navigate('/region');
  };

  return (
    <HomeSection id="home">
      <SlideContainer translate={-currentSlide * 100}>
        {slides.map((slide, index) => (
          <SlideItem key={index} image={slide.image}>
            <Content>
              <Name>{slide.name}</Name>
              <Description>{slide.description}</Description>
              <Button onClick={handleExplore}>Explorar Agora</Button>
            </Content>
          </SlideItem>
        ))}
      </SlideContainer>

      <ArrowButton direction="left" onClick={() => setCurrentSlide(current => (current - 1 + slides.length) % slides.length)}>
        ‹
      </ArrowButton>
      <ArrowButton direction="right" onClick={() => setCurrentSlide(current => (current + 1) % slides.length)}>
        ›
      </ArrowButton>

      <NavigationDots>
        {slides.map((_, index) => (
          <Dot
            key={index}
            active={currentSlide === index}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </NavigationDots>
    </HomeSection>
  );
};

export default Home;
