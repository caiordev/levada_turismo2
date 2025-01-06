import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const FooterContainer = styled.footer`
  background: #333;
  color: #fff;
  padding: 60px 0 30px;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
`;

const FooterSection = styled.div`
  h3 {
    color: #fff;
    font-size: 1.5rem;
    margin-bottom: 20px;
    position: relative;
    padding-bottom: 10px;

    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 50px;
      height: 2px;
      background: #2196f3;
    }
  }

  p {
    color: #bbb;
    line-height: 1.6;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    gap: 10px;

    &:hover {
      color: #fff;
    }

    i {
      color: #2196f3;
      width: 20px;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
`;

const SocialIcon = styled.a`
  width: 40px;
  height: 40px;
  background: #2196f3;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background: #1976d2;
    transform: translateY(-3px);
  }
`;

const QuickLinks = styled.ul`
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 12px;
  }

  a {
    color: #bbb;
    text-decoration: none;
    transition: all 0.3s ease;
    display: inline-block;

    &:hover {
      color: #fff;
      transform: translateX(5px);
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid #444;
  color: #bbb;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>Sobre Nós</h3>
          <p>
            Somos uma agência especializada em turismo nos Lençóis Maranhenses, 
            oferecendo experiências únicas e inesquecíveis para nossos clientes.
          </p>
          <SocialLinks>
            <SocialIcon href="#" target="_blank">
              <FontAwesomeIcon icon={faFacebookF} />
            </SocialIcon>
            <SocialIcon href="#" target="_blank">
              <FontAwesomeIcon icon={faInstagram} />
            </SocialIcon>
            <SocialIcon href="https://wa.me/5598999999999" target="_blank">
              <FontAwesomeIcon icon={faWhatsapp} />
            </SocialIcon>
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <h3>Links Rápidos</h3>
          <QuickLinks>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#places">Lugares</a></li>
            <li><a href="#packages">Pacotes</a></li>
            <li><a href="#contact">Contato</a></li>
          </QuickLinks>
        </FooterSection>

        <FooterSection>
          <h3>Contato</h3>
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            Av. Beira Rio, 123 - Centro, Barreirinhas - MA
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} />
            (98) 99999-9999
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} />
            contato@lencoisturismo.com
          </p>
        </FooterSection>

        <FooterSection>
          <h3>Horário de Funcionamento</h3>
          <p>Segunda a Sábado</p>
          <p>08:00 - 18:00</p>
          <p>Domingo</p>
          <p>08:00 - 12:00</p>
        </FooterSection>
      </FooterContent>

      <Copyright>
        <p>&copy; {new Date().getFullYear()} Lençóis Turismo. Todos os direitos reservados.</p>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
