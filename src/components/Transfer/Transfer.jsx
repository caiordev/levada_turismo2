import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';

const TransferSection = styled.section`
  padding: 4rem 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e8f4fe 100%);
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(90deg, #2196f3, #64b5f6);
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.3rem;
  color: #1565c0;
  margin-bottom: 2rem;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: linear-gradient(90deg, #2196f3, #64b5f6);
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;

const SliderWrapper = styled.div`
  flex: 1;
  width: 50%;
  position: relative;

  .slick-slider {
    height: 400px;
  }

  .slick-list, .slick-track {
    height: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
    
    .slick-slider {
      height: 250px;
    }
  }
`;

const TransferCard = styled.div`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(33, 150, 243, 0.1);
  transition: all 0.3s ease;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  border: 1px solid rgba(33, 150, 243, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(33, 150, 243, 0.2);
    border-color: rgba(33, 150, 243, 0.2);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 0;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 380px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  @media (max-width: 768px) {
    img {
      width: 360px;
      height: 250px;
      object-fit: cover;
      object-position: center;
  }

  @media (max-width: 1024px) {
    height: 250px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
  }
  
  }
`;

const CardContent = styled.div`
  flex: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(to bottom right, #fff, #f8f9fa);
  border-left: 3px solid #2196f3;

  h3 {
    font-size: 1.8rem;
    color: #1565c0;
    margin-bottom: 1rem;
  }

  p {
    color: #546e7a;
    margin-bottom: 1rem;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    border-left: none;
    border-top: 3px solid #2196f3;

    h3 {
      font-size: 1.5rem;
      margin-bottom: 0.8rem;
    }

    p {
      font-size: 0.95rem;
      margin-bottom: 0.8rem;
    }
  }
`;

const Features = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;

  li {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
    color: #546e7a;
    font-size: 1rem;

    &:before {
      content: "✓";
      color: #2196f3;
      margin-right: 0.8rem;
      font-weight: bold;
    }
  }

  @media (max-width: 768px) {
    margin: 1rem 0;
    grid-template-columns: 1fr;
    gap: 0.5rem;

    li {
      font-size: 0.9rem;
      margin-bottom: 0.3rem;
    }
  }
`;

const Button = styled.button`
  background: linear-gradient(90deg, #2196f3, #64b5f6);
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  width: fit-content;

  i {
    font-size: 1.2rem;
  }

  &:hover {
    background: linear-gradient(90deg, #1976d2, #2196f3);
    transform: translateX(5px);
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0.7rem 1rem;
    font-size: 0.95rem;
  }
`;

const transferInfo = {
  title: "Transfer",
  description: "Oferecemos serviço de transfer privativo com conforto e segurança. Nossa equipe experiente garante uma viagem tranquila do aeroporto até seu destino.",
  images: [
    "/carro/carro4.jpeg",
    "/carro/carro1.jpeg",
    "/carro/carro2.jpeg",
    "/carro/carro3.jpeg",
    "/carro/carro.jpeg"
    
  ],
  features: [
    "Veículos modernos e climatizados",
    "Motoristas profissionais",
    "Pontualidade garantida",
    "Atendimento 24 horas",
    "Preços competitivos",
    "Serviço personalizado"
  ]
};

const Transfer = () => {
  const handleContact = () => {
    const phoneNumber = "5598991333370";
    const message = "Olá! Gostaria de informações sobre o serviço de transfer.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <TransferSection id="transfer">
      <Container>
        <Title>{transferInfo.title}</Title>
        <TransferCard>
          <SliderWrapper>
            <Slider {...settings}>
              {transferInfo.images.map((image, index) => (
                <div key={index}>
                  <ImageContainer>
                    <img src={image} alt={`Transfer ${index + 1}`} />
                  </ImageContainer>
                </div>
              ))}
            </Slider>
          </SliderWrapper>
          <CardContent>
            <h3>Transfer Privativo</h3>
            <p>{transferInfo.description}</p>
            <Features>
              {transferInfo.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </Features>
            <Button onClick={handleContact}>
              <i className="fab fa-whatsapp"></i>
              Solicitar Transfer
            </Button>
          </CardContent>
        </TransferCard>
      </Container>
    </TransferSection>
  );
};

export default Transfer;