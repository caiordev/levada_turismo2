import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faClock, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ContactSection = styled.section`
  padding: 5rem 0;
  background: #ffffff;
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  h2 {
    font-size: 2rem;
    color: #1a1a1a;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  p {
    color: #666;
    font-size: 1rem;
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;

  .icon {
    color: #007AFF;
    font-size: 1.2rem;
    margin-top: 0.2rem;
  }

  div {
    h3 {
      font-size: 1rem;
      color: #1a1a1a;
      font-weight: 500;
      margin-bottom: 0.3rem;
    }

    p {
      color: #666;
      font-size: 0.95rem;
      line-height: 1.5;
      margin: 0;
    }
  }
`;

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 300px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #eaeaea;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const DirectionsButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background-color: #007AFF;
  color: white;
  text-decoration: none;
  border-radius: 6px;
  font-size: 0.95rem;
  font-weight: 500;
  transition: background-color 0.2s ease;
  width: fit-content;

  &:hover {
    background-color: #0056b3;
  }

  .icon {
    font-size: 1rem;
  }
`;

const Contact = () => {
  return (
    <ContactSection id="contact">
      <Container>
        <SectionTitle>
          <h2>Nossa Localização</h2>
          <p>Venha nos visitar e planeje sua próxima aventura</p>
        </SectionTitle>
        <ContentGrid>
          <InfoContainer>
            <InfoItem>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
              <div>
                <h3>Endereço</h3>
                <p>Av. Beira Rio, 123 - Centro<br />Barreirinhas - MA, 65590-000</p>
              </div>
            </InfoItem>
            <InfoItem>
              <FontAwesomeIcon icon={faClock} className="icon" />
              <div>
                <h3>Horário de Atendimento</h3>
                <p>Segunda a Sábado: 08h às 18h<br />Domingo: 08h às 12h</p>
              </div>
            </InfoItem>
            <InfoItem>
              <FontAwesomeIcon icon={faPhone} className="icon" />
              <div>
                <h3>Telefone</h3>
                <p>(98) 99999-9999</p>
              </div>
            </InfoItem>
            <InfoItem>
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              <div>
                <h3>E-mail</h3>
                <p>contato@lencoisturismo.com</p>
              </div>
            </InfoItem>
            <DirectionsButton 
              href="https://www.google.com/maps/dir/?api=1&destination=-2.7512085972259706,-42.820480325271326&travelmode=driving" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" /> Como Chegar
            </DirectionsButton>
          </InfoContainer>
          <MapContainer>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.219552857851!2d-42.820480325271326!3d-2.7512085972259706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7f21f2aabafe75f%3A0x21446f0e863c2957!2sLevada%20turismo!5e0!3m2!1spt-BR!2sbr!4v1735511866596!5m2!1spt-BR!2sbr" 
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Levada Turismo"
            />
          </MapContainer>
        </ContentGrid>
      </Container>
    </ContactSection>
  );
};

export default Contact;
