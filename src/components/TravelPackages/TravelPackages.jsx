import React from 'react';
import './TravelPackages.css';
import { Link } from 'react-router-dom';

const packages = [
  {
    id: 'rota-das-emocoes',
    name: 'Rota das Emoções',
    description: 'Experiência completa de 5 dias incluindo São Luís, Barreirinhas, Lagoa Azul, Atins e muito mais.',
    image: '/lencois-maranhenses.jpg',
    rating: 5.0,
    highlights: [
      'Hospedagem inclusa',
      'Café da manhã',
      'Transporte local',
      'Guia especializado'
    ]
  },
  {
    id: 'sao-luis-santo-amaro-barreirinhas',
    name: 'Pacote Aventura',
    description: 'Pacote de 2 dias com foco em atividades de aventura, incluindo caiaque e trilhas.',
    image: '/caiaque6.jpeg',
    rating: 5.0,
    highlights: [
      'Equipamentos inclusos',
      'Instrutor profissional',
      'Transporte local',
      'Lanche incluso'
    ]
  },
  {
    id: 'sao-luis-barreirinhas-atins',
    name: 'Pacote Romântico',
    description: 'Pacote especial para casais com passeios privativos e momentos únicos.',
    image: '/BarreirinhasPortal.jpg',
    rating: 5.0,
    highlights: [
      'Passeios privativos',
      'Jantar romântico',
      'Hospedagem premium',
      'Transfer exclusivo'
    ]
  },
  {
    id: 'sao-luis-barreirinhas-lencois-maranhenses',
    name: 'Pacote Romântico',
    description: 'Pacote especial para casais com passeios privativos e momentos únicos.',
    image: '/BarreirinhasPortal.jpg',
    rating: 5.0,
    highlights: [
      'Passeios privativos',
      'Jantar romântico',
      'Hospedagem premium',
      'Transfer exclusivo'
    ]
  }
];

const TravelPackages = () => {
  const handleReservar = (packageName) => {
    const phoneNumber = "5598991333370";
    const message = `Olá! Gostaria de mais informações sobre o pacote: ${packageName}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="travel-packages" id="packages">
      <h2>Pacotes de Viagem</h2>
      <div className="packages-grid">
        {packages.map((pkg) => (
          <div key={pkg.id} className="package-card">
            <div className="package-image" style={{ backgroundImage: `url(${pkg.image})` }}>
              <div className="package-content">
                <h3>{pkg.name}</h3>
                <div className="rating">
                  {'★'.repeat(5)} <span>{pkg.rating.toFixed(1)}</span>
                </div>
                <p>{pkg.description}</p>
                <ul className="highlights">
                  {pkg.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                <div className="package-buttons">
                  <Link 
                    to={`/package/${pkg.id}`}
                    className="btn-detalhes"
                  >
                    Ver Detalhes
                  </Link>
                  <button 
                    className="btn-reservar"
                    onClick={() => handleReservar(pkg.name)}
                  >
                    <i className="fab fa-whatsapp"></i> Solicitar Orçamento
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

export default TravelPackages;
