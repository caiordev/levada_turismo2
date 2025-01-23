import React from 'react';
import './SeasonalInfo.css';

const seasons = [
  {
    id: 'chuvoso',
    title: 'Época de Chuvas',
    period: 'Janeiro a Junho',
    description: 'Período de formação das lagoas, com chuvas intensas que enchem as dunas de água cristalina.',
    waterLevel: 60,
    status: [
      'Chuvas frequentes e intensas',
      'Formação das lagoas',
      'Paisagem mais verde',
      'Temperatura mais amena'
    ],
    recommendation: 'Ideal para ver a formação das lagoas e a paisagem mais verde.',
    image: '/lagoa-azul/lagoa-azul-meio-cheio.jpg'
  },
  {
    id: 'lagoas-cheias',
    title: 'Lagoas Cheias',
    period: 'Julho a Setembro',
    description: 'Melhor época para visitar! As lagoas estão em seu nível máximo e a temperatura é perfeita para banho.',
    waterLevel: 100,
    status: [
      'Lagoas completamente cheias',
      'Água em temperatura ideal',
      'Clima mais seco',
      'Melhor período para fotos'
    ],
    recommendation: 'Período mais procurado pelos turistas, com condições perfeitas para banho.',
    image: '/Lencois-1.jpg'
  },
  {
    id: 'seco',
    title: 'Período Seco',
    period: 'Outubro a Dezembro',
    description: 'As lagoas começam a secar, mas ainda é possível encontrar algumas lagoas perenes.',
    waterLevel: 30,
    status: [
      'Lagoas em processo de secagem',
      'Temperaturas mais altas',
      'Menos turistas',
      'Preços mais acessíveis'
    ],
    recommendation: 'Bom para quem prefere menor movimento turístico e não se importa com lagoas menores.',
    image: '/lagoa-azul/lagoa-azul-seca.jpg'
  }
];

const SeasonalInfo = () => {
  return (
    <section className="seasonal-info" id="seasons">
      <div className="seasonal-header">
        <h2>Épocas do Ano</h2>
        <p>Descubra a melhor época para sua visita aos Lençóis Maranhenses</p>
      </div>

      <div className="seasons-container">
        {seasons.map((season) => (
          <div key={season.id} className="season-card">
            <div className="season-image" style={{ backgroundImage: `url(${season.image})` }}>
              <div className="season-title">
                <h3>{season.title}</h3>
                <span className="period">{season.period}</span>
              </div>
            </div>
            <div className="season-content">
              <p className="description">{season.description}</p>
              <div className="water-level">
                <div className="water-level-text">
                  <span>Nível da Água</span>
                  <span className="percentage">{season.waterLevel}%</span>
                </div>
                <div className="water-level-bar">
                  <div 
                    className="water-level-fill" 
                    style={{ width: `${season.waterLevel}%` }}
                  />
                </div>
              </div>
              <div className="status-container">
                <h4>Como está:</h4>
                <ul className="status-list">
                  {season.status.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="recommendation">
                <h4>Recomendação:</h4>
                <p>{season.recommendation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SeasonalInfo;
