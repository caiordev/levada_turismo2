import React from 'react';
import { useNavigate } from 'react-router-dom';
import './OurTours.css';

const tours = [
  {
    id: 'lagoa-azul',
    name: 'Lagoa Azul',
    description: 'Passeio de uma manhã inteira por lagoas dos lençóis maranhenses, com paradas para banho e fotos.',
    image: '/lencois-maranhenses.jpg',
    rating: 5.0
  },
  {
    id: 'lagoa-bonita',
    name: 'Lagoa Bonita',
    description: 'Passeio para apreciar o pôr do sol na Lagoa Bonita, com vista panorâmica dos lençóis maranhenses.',
    image: '/lagoa-bonita/lagoabonita2.png',
    rating: 5.0
  },
  {
    id: 'lagoa-azul-bonito',
    name: 'Lagoa Azul + Lagoa Bonita',
    description: 'Passeio completo por lagoas dos lençóis maranhenses, incluindo Lagoa Azul e Lagoa Bonita.',
    image: '/lagoa-azul-bonita.jpeg',
    rating: 5.0
  },
  {
    id: 'atins',
    name: 'Atins',
    description: 'Passeio de um dia inteiro até Atins, com paradas para banho e almoço em restaurante local.',
    image: '/atins.webp',
    rating: 5.0
  },
  {
    id: 'vassouras-mandacaru-caburé',
    name: 'Vassouras, Mandacaru e Caburé',
    description: 'Passeio de um dia inteiro por Vassouras, Mandacaru e Caburé, com almoço em Caburé.',
    image: '/mandacaru.webp',
    rating: 5.0
  },
  {
    id: 'pequenos-lencois',
    name: 'Pequenos Lençóis',
    description: 'Passeio de um dia inteiro pelos pequenos lençóis, com paradas para banho e almoço em restaurante local.',
    image: '/pequenos-lencois.jpg',
    rating: 5.0
  },
  {
    id: 'cardosa',
    name: 'Cardosa',
    description: 'Flutuação no Rio Cardosa, descida de boia e parada para banho em lagoa.',
    image: '/cardosa.webp',
    rating: 5.0
  },
  {
    id: 'passeio-caiaque',
    name: 'Aventura de Caiaque',
    description: 'Uma experiência única de caiaque pelas águas tranquilas do Rio Preguiças, explorando a natureza de perto.',
    image: '/caiaque/caiaque5.jpeg',
    rating: 5.0,
  }
];

const OurTours = () => {
  const navigate = useNavigate();

  const handleVerMais = (tourId) => {
    window.scrollTo(0, 0);
    navigate(`/tour/${tourId}`);
  };

  const handleReservar = (tourName) => {
    const phoneNumber = "5598991333370"; 
    const message = `Olá! Gostaria de mais informações sobre o passeio: ${tourName}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="our-tours" id="tours">
      <h2>Nossos Passeios</h2>
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
                {tour.highlights && (
                  <ul className="highlights">
                    {tour.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                )}
                <div className="tour-buttons">
                  <button 
                    className="btn-ver-mais"
                    onClick={() => handleVerMais(tour.id)}
                  >
                    Ver Mais
                  </button>
                  <button 
                    className="btn-reservar"
                    onClick={() => handleReservar(tour.name)}
                  >
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
