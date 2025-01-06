import React from 'react';
import styled from 'styled-components';

const TransferSection = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(to right, #f8f9fa, #e9ecef);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 3rem;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background-color: #007bff;
  }
`;

const TransferCard = styled.div`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  max-width: 800px;
  margin: 0 auto;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CardImage = styled.div`
  height: 300px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
`;

const CardContent = styled.div`
  padding: 2rem;

  h3 {
    font-size: 1.8rem;
    color: #333;
    margin-bottom: 1.5rem;
    text-align: center;
  }

  p {
    color: #666;
    margin-bottom: 1.5rem;
    line-height: 1.6;
    text-align: center;
    font-size: 1.1rem;
  }
`;

const Features = styled.ul`
  list-style: none;
  padding: 0;
  margin: 2rem auto;
  max-width: 600px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;

  li {
    display: flex;
    align-items: center;
    margin-bottom: 0.8rem;
    color: #555;
    font-size: 1.1rem;

    &:before {
      content: '✓';
      color: #28a745;
      margin-right: 0.8rem;
      font-weight: bold;
    }
  }
`;

const Button = styled.button`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  display: block;
  padding: 1rem;
  background-color: #25d366;
  color: white;
  border: none;
  border-radius: 25px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #128c7e;
  }
`;

const transferInfo = {
  title: 'Serviços de Transfer',
  description: 'Oferecemos serviços de transfer completos para sua comodidade, incluindo transporte do aeroporto, viagens interestaduais e serviços executivos.',
  image: '/caiaque6.jpeg',
  features: [
    'Veículos modernos e climatizados',
    'Motoristas profissionais',
    'Horários flexíveis',
    'Seguro viagem incluso',
    'Wi-Fi a bordo',
    'Atendimento personalizado',
    'Água e snacks inclusos',
    'Bagagem inclusa'
  ]
};

const Transfer = () => {
  return (
    <TransferSection id="transfer">
      <Container>
        <Title>Serviços de Transfer</Title>
        <TransferCard>
          <CardImage image={transferInfo.image} />
          <CardContent>
            <p>{transferInfo.description}</p>
            <Features>
              {transferInfo.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </Features>
            <Button>
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
