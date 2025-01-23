import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RegionDetails.css';

const regionInfo = {
  title: "Lençóis Maranhenses",
  description: `O Parque Nacional dos Lençóis Maranhenses é uma das maravilhas naturais mais impressionantes do Brasil. 
  Com suas vastas dunas de areia branca que se estendem por quilômetros e lagoas de água cristalina, o parque oferece 
  uma paisagem única que parece saída de um sonho. Durante a temporada de chuvas, milhares de lagoas de água doce se 
  formam entre as dunas, criando um espetáculo visual deslumbrante.`,
  highlights: [
    "Dunas de areia branca que se estendem por 155 mil hectares",
    "Lagoas de água cristalina com temperatura ideal para banho",
    "Pôr do sol espetacular sobre as dunas",
    "Fauna e flora únicas da região",
    "Experiência cultural com comunidades locais"
  ],
  images: [
    {
      url: "/lencois1.jpg",
      caption: "Vista aérea das dunas e lagoas"
    },
    {
      url: "/lencois2.jpg",
      caption: "Lagoa Azul ao pôr do sol"
    },
    {
      url: "/lencois3.jpg",
      caption: "Dunas e vegetação nativa"
    },
    {
      url: "/lencois4.jpg",
      caption: "Passeio de barco no Rio Preguiças"
    }
  ],
  bestTime: {
    title: "Melhor época para visitar",
    periods: [
      {
        season: "Alta temporada",
        months: "Julho a Setembro",
        description: "Lagoas cheias e clima perfeito"
      },
      {
        season: "Temporada de chuvas",
        months: "Janeiro a Junho",
        description: "Formação das lagoas"
      },
      {
        season: "Baixa temporada",
        months: "Outubro a Dezembro",
        description: "Menos turistas e preços mais baixos"
      }
    ]
  }
};

const tours = [
  {
    id: 'lagoa-azul',
    name: 'Lagoa Azul',
    description: 'Passeio de um dia inteiro pela famosa Lagoa Azul, com paradas para banho e fotos.',
    image: '/lencois-maranhenses.jpg',
    duration: '8 horas',
    includes: [
      'Transfer hotel-parque-hotel',
      'Guia especializado',
      'Água mineral',
      'Seguro viagem'
    ],
    price: 'A partir de R$ 150'
  },
  {
    id: 'farol-mandacaru',
    name: 'Farol Mandacaru',
    description: 'Visita ao histórico Farol de Mandacaru com vista panorâmica da região.',
    image: '/barreirinhas-ma-passeio-de-barco-farol-mandacaru-2.webp',
    duration: '6 horas',
    includes: [
      'Transfer hotel-farol-hotel',
      'Guia especializado',
      'Água mineral',
      'Seguro viagem'
    ],
    price: 'A partir de R$ 120'
  },
  {
    id: 'passeio-barco',
    name: 'Passeio de Barco',
    description: 'Navegue pelo Rio Preguiças com paradas em pontos turísticos.',
    image: '/BarreirinhasPortal.jpg',
    duration: '5 horas',
    includes: [
      'Barco exclusivo',
      'Guia especializado',
      'Água mineral',
      'Paradas para banho'
    ],
    price: 'A partir de R$ 130'
  },
  {
    id: 'passeio-caiaque',
    name: 'Aventura de Caiaque',
    description: 'Uma experiência única de caiaque pelas águas cristalinas do Rio Preguiças.',
    image: '/caiaque6.jpeg',
    duration: '3 horas',
    includes: [
      'Equipamentos completos',
      'Instrutor especializado',
      'Água mineral',
      'Seguro aventura'
    ],
    price: 'A partir de R$ 100'
  }
];

const RegionDetails = () => {
  const navigate = useNavigate();

  const handleTourClick = (tourId) => {
    navigate(`/tour/${tourId}`);
  };

  const handleReservar = (tourName) => {
    const phoneNumber = "5598981876833";
    const message = `Olá! Gostaria de mais informações sobre o passeio: ${tourName}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="region-details">
      <header className="region-header">
        <h1>{regionInfo.title}</h1>
        <p className="region-description">{regionInfo.description}</p>
      </header>

      <section className="image-gallery">
        <h2>Conheça o Paraíso</h2>
        <div className="gallery-grid">
          {regionInfo.images.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image.url} alt={image.caption} />
              <p>{image.caption}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="region-highlights">
        <h2>Destaques da Região</h2>
        <ul>
          {regionInfo.highlights.map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>
      </section>

      <section className="best-time">
        <h2>{regionInfo.bestTime.title}</h2>
        <div className="periods-grid">
          {regionInfo.bestTime.periods.map((period, index) => (
            <div key={index} className="period-card">
              <h3>{period.season}</h3>
              <p className="months">{period.months}</p>
              <p className="period-description">{period.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="available-tours">
        <h2>Nossos Passeios na Região</h2>
        <div className="tours-grid">
          {tours.map((tour) => (
            <div key={tour.id} className="tour-card">
              <div className="tour-image" style={{ backgroundImage: `url(${tour.image})` }}>
                <div className="tour-content">
                  <h3>{tour.name}</h3>
                  <p>{tour.description}</p>
                  <div className="tour-details">
                    <p className="duration">
                      <i className="far fa-clock"></i> {tour.duration}
                    </p>
                    <p className="price">{tour.price}</p>
                  </div>
                  <ul className="includes">
                    {tour.includes.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <div className="tour-buttons">
                    <button 
                      className="btn-ver-mais"
                      onClick={() => handleTourClick(tour.id)}
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
    </div>
  );
};

export default RegionDetails;
