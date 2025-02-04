import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import QRCode from 'qrcode';

const CadasturSection = styled.section`
  padding: 6rem 2rem;
  background-color: #f8f9fa;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #007AFF, #00C6FF);
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Title = styled.h2`
  color: #1a1a1a;
  margin-bottom: 3rem;
  font-size: 2.5rem;
  font-weight: 700;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background-color: #007AFF;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    padding: 1.5rem;
  }
`;

const QRCodeImage = styled.img`
  width: 220px;
  height: 220px;
  border: 3px solid #007AFF;
  border-radius: 15px;
  padding: 10px;
  background: white;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 180px;
    height: 180px;
  }
`;

const InfoContainer = styled.div`
  max-width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const Description = styled.p`
  color: #4a4a4a;
  margin-bottom: 1.5rem;
  line-height: 1.8;
  font-size: 1.1rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`;

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  background-color: #007AFF;
  color: white;
  padding: 15px 30px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 122, 255, 0.3);

  &:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 122, 255, 0.4);
  }

  @media (max-width: 768px) {
    padding: 12px 25px;
    font-size: 1rem;
  }
`;

const Cadastur = () => {

  const [qrCodeUrl, setQrCodeUrl] = useState('');

  useEffect(() => {
    const link = 'https://cadastur.turismo.gov.br/cadastur/#!/public/qrcode/27579359000111';
    QRCode.toDataURL(link, {
      color: {
        dark: '#000000', 
        light: '#ffffff', 
      },
    }, (err, url) => {
      if (err) {
        console.error("Erro ao gerar o QR Code:", err);
      } else {
        setQrCodeUrl(url); 
      }
    });
  }, []);
  
  return (
    <CadasturSection>
      <Container>
        <Title>Agência Credenciada CADASTUR</Title>
        <Content>
          <QRCodeImage 
            src={qrCodeUrl}
            alt="QR Code Cadastur"
          />
          <InfoContainer>
            <Description>
              A Levada Turismo é uma agência oficialmente registrada e credenciada pelo CADASTUR, 
              o Sistema de Cadastro de pessoas físicas e jurídicas que atuam no setor do turismo. 
              Esta certificação garante a legitimidade e a qualidade dos nossos serviços.
            </Description>
            <Button 
              href="https://cadastur.turismo.gov.br/cadastur/#!/public/qrcode/27579359000111" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faCheck} />
              Verificar Credenciamento
            </Button>
          </InfoContainer>
        </Content>
      </Container>
    </CadasturSection>
  );
};

export default Cadastur;
