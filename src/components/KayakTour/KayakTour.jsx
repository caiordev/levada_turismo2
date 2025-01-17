import React, { useState, useRef, useEffect } from 'react';
import './KayakTour.css';

const KayakTour = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const carouselRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setShowModal(false);
      }
    };

    if (showModal) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [showModal]);

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setShowModal(false);
    }
  };

  const images = [
    { src: '/caiaque6.jpeg', alt: 'Passeio de Caiaque 1' },
    { src: '/caiaque6.jpeg', alt: 'Passeio de Caiaque 2' },
    { src: '/caiaque6.jpeg', alt: 'Passeio de Caiaque 3' },
    { src: '/caiaque6.jpeg', alt: 'Passeio de Caiaque 4' },
    { src: '/caiaque6.jpeg', alt: 'Passeio de Caiaque 5' }
  ];

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleReservar = () => {
    const phoneNumber = "5598981876833";
    const message = "Olá! Gostaria de mais informações sobre o passeio de caiaque!";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const tourDetails = {
    included: [
      'Caiaque individual ou duplo',
      'Remo e colete salva-vidas',
      'Instrutor especializado',
      'Água mineral',
      'Fotos do passeio',
      'Seguro aventura'
    ],
    route: [
      'Saída do Porto dos Lençóis',
      'Navegação pelo Rio Preguiças',
      'Parada para fotos na vegetação nativa',
      'Exploração de pequenos igarapés',
      'Observação da fauna local',
      'Retorno ao ponto de partida'
    ]
  };

  return (
    <section className="kayak-tour" id="kayak">
      <div className="kayak-container">
        <div className="kayak-image-section">
          <button className="scroll-button left" onClick={handlePrev}>
            <span className="button-content">
              <i className="fas fa-chevron-left"></i>
            </span>
          </button>
          <div 
            className="image-carousel"
            ref={carouselRef}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div 
              className="carousel-inner" 
              style={{ 
                transform: `translateX(-${currentImage * 100}%)`,
              }}
            >
              {images.map((image, index) => (
                <div key={index} className="carousel-item">
                  <img src={image.src} alt={image.alt} />
                </div>
              ))}
            </div>
            <div className="carousel-dots">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${currentImage === index ? 'active' : ''}`}
                  onClick={() => setCurrentImage(index)}
                  aria-label={`Ir para imagem ${index + 1}`}
                />
              ))}
            </div>
          </div>
          <button className="scroll-button right" onClick={handleNext}>
            <span className="button-content">
              <i className="fas fa-chevron-right"></i>
            </span>
          </button>
        </div>
        <div className="kayak-content">
          <h2>Aventura de Caiaque</h2>
          <p>
            Explore as belezas naturais do Rio Preguiças em uma aventura inesquecível de caiaque. 
            Navegue por águas cristalinas e desfrute de momentos únicos em meio à natureza.
          </p>
          <div className="kayak-features">
            <div className="feature">
              <i className="fas fa-clock"></i>
              <span>3 horas de duração</span>
            </div>
            <div className="feature">
              <i className="fas fa-user-friends"></i>
              <span>Todos os níveis</span>
            </div>
            <div className="feature">
              <i className="fas fa-check-circle"></i>
              <span>Equipamentos inclusos</span>
            </div>
          </div>
          
          <button 
            className="details-button"
            onClick={() => setShowModal(true)}
          >
            <i className="fas fa-info-circle"></i>
            Ver detalhes do passeio
          </button>

          <button className="reserve-button" onClick={handleReservar}>
            <i className="fab fa-whatsapp"></i> Reservar Agora
          </button>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={handleClickOutside}>
          <div className="modal-content" ref={modalRef}>
            <button 
              className="modal-close" 
              onClick={() => setShowModal(false)}
              aria-label="Fechar modal"
            />
            
            <h2>Detalhes do Passeio de Caiaque</h2>
            
            <div className="modal-sections">
              <div className="details-section">
                <h3>
                  <i className="fas fa-list-check"></i>
                  O que está incluso
                </h3>
                <ul className="details-list">
                  {tourDetails.included.map((item, index) => (
                    <li key={`included-${index}`}>{item}</li>
                  ))}
                </ul>
              </div>
              
              <div className="details-section">
                <h3>
                  <i className="fas fa-route"></i>
                  Percurso do Passeio
                </h3>
                <ul className="details-list route-list">
                  {tourDetails.route.map((item, index) => (
                    <li key={`route-${index}`}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="details-section">
                <h3>
                  <i className="fas fa-info-circle"></i>
                  Informações Importantes
                </h3>
                <ul className="details-list">
                  <li>Idade mínima: 8 anos</li>
                  <li>Nível de dificuldade: Fácil/Moderado</li>
                  <li>Levar protetor solar e roupas leves</li>
                  <li>Ponto de encontro: Porto dos Lençóis</li>
                </ul>
              </div>
            </div>

            <button className="modal-reserve" onClick={() => {
              setShowModal(false);
              handleReservar();
            }}>
              <i className="fab fa-whatsapp"></i>
              Reservar Agora
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default KayakTour;
