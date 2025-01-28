import React from 'react';
import './Accommodation.css';

const accommodations = [
  {
    id: 'pousadas',
    title: 'Pousadas',
    description: 'Selecionamos as melhores pousadas da região, com ótimo custo-benefício e localização privilegiada.',
    image: '/pousada.png',
    features: [
      'Café da manhã incluso',
      'Próximo aos principais pontos turísticos',
      'Wi-Fi gratuito',
      'Atendimento personalizado'
    ]
  },
  {
    id: 'hostels',
    title: 'Hostels',
    description: 'Opções econômicas e aconchegantes, ideais para viajantes que buscam socialização e economia.',
    image: '/hostel.png',
    features: [
      'Quartos compartilhados ou privativos',
      'Cozinha compartilhada',
      'Área de convivência',
      'Ambiente descontraído'
    ]
  },
  {
    id: 'hoteis',
    title: 'Hotéis',
    description: 'Parceria com os melhores hotéis da região para garantir seu conforto e tranquilidade. Planeje sua estadia conosco!',
    image: '/hotel.png',
    features: [
      'Serviço de quarto',
      'Restaurante no local',
      'Academia e piscina',
      'Recepção 24h'
    ]
  }
];

const Accommodation = () => {
  const handleContact = (type) => {
    const phoneNumber = "5598991333370";
    const message = `Olá! Gostaria de informações sobre opções de hospedagem em ${type}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="accommodation" id="accommodation">
      <div className="accommodation-header">
        <h2>Hospedagem</h2>
        <p>Encontramos a melhor opção de hospedagem para sua viagem</p>
      </div>
      
      <div className="accommodation-grid">
        {accommodations.map((acc) => (
          <div key={acc.id} className="accommodation-card">
            <div className="accommodation-image" style={{ backgroundImage: `url(${acc.image})` }}>
              <div className="accommodation-overlay">
                <h3>{acc.title}</h3>
                <p>{acc.description}</p>
                <ul className="features">
                  {acc.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <button 
                  className="contact-button"
                  onClick={() => handleContact(acc.title)}
                >
                  <i className="fab fa-whatsapp"></i> Consultar Opções
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Accommodation;
