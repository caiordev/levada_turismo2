import React from 'react';
import { useNavigate } from 'react-router-dom';
import './OurTours.css';

const tours = [
  {
    id: 'lagoa-azul',
    name: 'Lagoa Azul',
    description: 'Passeio de um dia inteiro pela famosa Lagoa Azul, com paradas para banho e fotos.',
    image: '/lencois-maranhenses.jpg',
    rating: 5.0
  },
  {
    id: 'farol-mandacaru',
    name: 'Farol Mandacaru',
    description: 'Visita ao histórico Farol de Mandacaru com vista panorâmica da região.',
    image: '/barreirinhas-ma-passeio-de-barco-farol-mandacaru-2.webp',
    rating: 5.0
  },
  {
    id: 'passeio-barco',
    name: 'Passeio de Barco',
    description: 'Navegue pelo Rio Preguiças com paradas em pontos turísticos.',
    image: '/BarreirinhasPortal.jpg',
    rating: 5.0
  }
];

const OurTours = () => {
  const navigate = useNavigate();

  const handleVerMais = (tourId) => {
    navigate(`/tour/${tourId}`);
  };

  return (
    <section className="our-tours" id="tours">
      <h2>Nossos Passeisos</h2>
      <div className="tours-grid">
        {tours.map((tour) => (
          <div key={tour.id} className="tour-card">
            <div className="tour-image" style={{ backgroundImage: `url(${tour.image})` }}>
              <div className="tour-content">
                <h3>{tour.name}</h3>
                <div className="rating">
                  {'★'.repeat(5)} <span>{tour.rating.toFixed(1)}</span>
                </div>
                <p>{tour.description}</p>
                <div className="tour-buttons">
                  <button 
                    className="btn-ver-mais"
                    onClick={() => handleVerMais(tour.id)}
                  >
                    Ver Mais
                  </button>
                  <button className="btn-reservar">
                    <i className="fab fa-whatsapp"></i> Reservar
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTours;
