import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMapMarkerAlt, faSun, faUmbrellaBeach, faMountain, faWater } from '@fortawesome/free-solid-svg-icons';

const PackageDetailsContainer = styled.div`
  padding: 120px 20px 40px;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e9f2 100%);
  min-height: 100vh;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const PackageHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
  position: relative;
  
  h1 {
    font-size: 3.5rem;
    color: #1a237e;
    margin-bottom: 20px;
    font-weight: 700;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  }

  &::after {
    content: '';
    display: block;
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, #2196f3, #1a237e);
    margin: 20px auto;
    border-radius: 2px;
  }
`;

const Highlights = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 50px;
`;

const HighlightCard = styled.div`
  background: white;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  gap: 15px;

  .icon {
    font-size: 1.5rem;
    color: #2196f3;
    width: 40px;
  }

  .text {
    color: #424242;
    font-size: 1.1rem;
  }
`;

const Timeline = styled.div`
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 100%;
    background: linear-gradient(180deg, #2196f3, #1a237e);
    border-radius: 2px;

    @media (max-width: 768px) {
      left: 30px;
    }
  }
`;

const DaySection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin-left: 60px;
  }

  &:nth-child(even) {
    flex-direction: row-reverse;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
    }

    .day-content {
      text-align: right;
      padding-right: 50px;

      @media (max-width: 768px) {
        text-align: left;
        padding-right: 30px;
        padding-left: 20px;
      }
    }
  }

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 20px;
    height: 20px;
    background: #2196f3;
    border: 4px solid #fff;
    border-radius: 50%;
    z-index: 1;
    box-shadow: 0 0 0 4px rgba(33, 150, 243, 0.2);

    @media (max-width: 768px) {
      left: -30px;
    }
  }
`;

const DayContent = styled.div`
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  width: calc(50% - 50px);
  position: relative;
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    width: 100%;
  }

  &:hover {
    transform: translateY(-5px);
  }

  h2 {
    color: #1a237e;
    font-size: 1.2rem;
    margin-bottom: 20px;
    font-weight: 600;
    text-align: left; 
  }

  p {
    color: #424242;
    line-height: 1.8;
    font-size: 1.1rem;
    margin: 0;
    text-align: justify;
  }
`;

const packageData = {
  'rota-das-emocoes': {
    title: 'ROTA DAS EMOÇÕES',
    highlights: [
      { icon: faMapMarkerAlt, text: 'Barreirinhas' },
      { icon: faClock, text: '5 dias de aventura' },
      { icon: faSun, text: 'Clima tropical o ano todo' },
      { icon: faUmbrellaBeach, text: 'Praias paradisíacas' },
      { icon: faMountain, text: 'Dunas dos Lençóis Maranhenses' },
      { icon: faWater, text: 'Lagoas de água doce' }
    ],
    days: [
      {
        day: '1º Dia - SÃO LUÍS',
        description: 'Chegada ao Aeroporto de São Luís. Recepção e traslado ao hotel.'
      },
      {
        day: '2° Dia: SÃO LUÍS - BARREIRINHAS',
        description: 'Translado rumo à Barreirinhas. Chegada e acomodação, tarde livre para aproveita a cidade.'
      },
      {
        day: '3º Dia: CIRCUITO LAGOAS AZUL E BONITA',
        description: 'Após o café da manhã, sairemos em veículo 4x4 em direção ao Parque Nacional. Nossa aventura começa percorrendo estradas de areia até chegarmos ao circuito da Lagoa Azul. A partir dela caminharemoss pelas dunas, passando por outras várias lagoas (na época da cheia). Seguimos o roteiro em direção à Lagoa Bonita, parando antes em um restaurante local para almoçar. Após um breve descanso partimos para a Lagoa Bonita, local onde temos a sensação de estar em meio ao grande deserto. Deserto este muito especial, cheio de lagoas. Após deliciosos banhos e um gostoso entardecer, retornamos para Barreirinhas.'
      },
      {
        day: '4° Dia: BARREIRINHAS - VASSOURAS - MANDACARU - CABURÉ - REVOADA - ATINS',
        description: 'Após o café da manhã, sairemos de voadeira no Rio Preguiças em direção ao povoado do Atins. No caminho, paramos em Vassouras, Pequenos Lençóis, Área de Proteção Ambiental. Caminharemos pelas dunas, tomamos banho nas lagoas (na época da cheia) e podemos ainda saborear uma água de coco em uma barraquinha beira rio. Poderemos ainda ver os macacos prego que habitam o mangue do entorno. Continuamos navegando e em alguns minutos estamos no Caburé. É aqui que os pescadores passam o primeiro semestre do ano, quando as condições climáticas favorecem a pesca. Oportunidade de banho de mar. Em seguida cruzaremos o rio até o Mandacaru, um povoado de uma centena de casas que se originou a partir do Farol do Preguiças. A sugestão é subir o farol e apreciar a vista do alto, podendo-se ver até o Parque Nacional e o mar. Seguiremos em direção a Atins, onde vamos nos hospedar essa noite. Antes, porém, não podemos perder o espetáculo da revoada das garças, e com sorte, também dos guarás, que no final da tarde voltam ao seu dormitório, para mais uma noite de sono.'
      },
      {
        day: '5° Dia – ATINS – PARQUE NACIONAL - CANTO DO ATINS - PONTA DO MANGUE',
        description: 'Após o café da manhã, sairemos em 4x4 até o Parque Nacional dos Lençóis Maranhenses, desta vez mais próximos ao mar. Passamos incialmente pela Praia de Atins, e de lá seguimos ao início das dunas do Parque Nacional. Paramos o veículo, e sobre uma das inúmeras dunas teremos uma linda vista do parque, se estendendo até o Canto do Atins e o mar. Seguimos então à Praia dos Lençóis, onde as dunas se aproximam do mar. Aqui podemos tomar um banho de mar. Na época das chuvas, veremos uma pequena cachoeira que se forma junto ao mar. Seguimos então para as lagoas do Gavião, do Kite, e outras lagoas mais, que nos permitem escolher em qual delas iremos querer desfrutar de deliciosos banhos. Agora já é hora de recompor as energias através de um delicioso almoço no Canto do Atins. Luzia ou Antonio, em qual das duas barracas iremos comer aquele camarão fresco ou o peixe pescado há pouco? Difícil escolha.... À tarde, lembrando que estamos no nordeste, onde o dia é sempre quente, seguimos à Lagoa Tropical e da Esmeralda, na Ponta do Mangue, para mais alguns mergulhos deliciosos. No final do dia voltamos ao nosso hotel.'
      }
      ,
      {
        day: '6° Dia – ATINS – TUTOIA - DELTA DO PARNAÍBA - DELTA',
        description: 'Após o café da manhã (de acordo com a maré), cruzaremos de lancha voadeira, por 10 minutos, o rio Preguiças até o Caburé, de onde partiremos em veículo 4x4 até Tutoia. O trajeto para lá será pela praia até Paulino Neves e depois via asfalto. Lá chegando, embarcaremos em lancha voadeira em um dos afluentes do Rio Parnaíba, para atravessarmos o mesmo até o Porto dos Tatus, percorrendo 4 dos 5 braços deste impressionante delta. Partiremos do Porto de Tutoia, e nosso trajeto, passará por várias ilhas, entre elas a Ilha do Cajueiro, a Ilha dos Três Bocas, a Ilha do Caju, a Ilha do Torto e a Ilha das Canárias. Faremos nosso almoço no Morro do Meio, um singelo povoado típico dos ribeirinhas que habitam as margens do Delta do Parnaíba. No final da tarde iremos à Ilha dos Pássaros, local onde iremos assistir um espetáculo da natureza que é a Revoada dos Guarás.  Em seguida navegaremos mais 45 minutos, ao Porto dos Tatus. Aqui desembarcamos da lancha voadeira e seguiremos por mais 20 minutos de carro até a cidade de Parnaíba. Após nos alojarmos em nossa pousada, podemos dar uma volta pelo centro histórico, no Porto das Barcas, e visitar algumas lojas de artesanato e jantar. '
      }
      ,
      {
        day: '7° Dia – PARNAÍBA  – CAMOCIM  - TATAJUBA  - JERICOACOARA',
        description: 'Após café da manhã, traslado a Camocim. Após a travessia de barco pelo Rio Coreaú, iniciaremos o traslado que na verdade é um grande passeio. A paisagem é composta por praias desertas e lindas dunas que chegam a até 30 metros de altura. Faremos um pausa em Tatajuba para curtir a bela Lagoa Verde. Após relaxarmos nas redes penduradas sobre a lagoa, poderemos almoçar neste delicioso recanto. Tatajuba é um primitivo vilarejo de pescadores que foi encoberto pela ação das dunas e reconstruído pelos seus habitantes na outra margem do rio. É por isso que alguns a consideram como Nova Tatajuba. Possui dunas enormes, algumas em processo de cristalização, o que as impede de se mover pela ação do vento. Chegaremos a Jeri à tarde e nos hospedaremos. '
      }
      ,
      {
        day: '8° Dia – JERICOACOARA  – LAGOAS AZUL E DO PARAÍSO - PEDRA FURADA',
        description: 'Neste dia, sairemos à pé e caminharemos pela praia até a Pedra Furada, junto ao mar. Símbolo da vila, o local compreende lindas formações rochosas em meio às ondas do mar. Curtiremos o local e voltaremos a Jeri, logo em seguida, faremos um passeio de buggy às Lagoas Azul - ainda virgem, imensa e de águas impressionantemente azuis - e do Paraíso, que possui algumas charmosas pousadas ao redor. Caminharemos por suas areias e poderemos nadar em suas gostosas águas. A região é conhecida também pela culinária, pois os restaurantes, apesar de simples, oferecem pratos de peixes e camarão frescos, pescados no mesmo dia, a preços atraentes. No meio da tarde retornaremos a Jeri cruzando as dunas, uma sensação maravilhosa. Chegaremos a tempo de assistir o pôr-do-sol do alto da duna principal da vila, para onde todos se dirigem. '
      },
      {
        day: '9° Dia – JERICOACOARA  – FORTALEZA, JERICOACOARA AO AEROPORTO DE CRUZ',
        description: 'Após o café da manhã, traslado para o Aeroporto de Fortaleza para embarque.'
      }
    ]
  },
  'sao-luis-santo-amaro-barreirinhas': {
    title: 'SÃO LUIS - SANTO AMARO - BARREIRINHAS',
    highlights: [
      { icon: faMapMarkerAlt, text: 'São Luís, Santo Amaro, Barreirinhas' },
      { icon: faClock, text: '5 dias de aventura' },
      { icon: faSun, text: 'Clima tropical o ano todo' },
      { icon: faUmbrellaBeach, text: 'Praias paradisíacas' },
      { icon: faMountain, text: 'Dunas dos Lençóis Maranhenses' },
      { icon: faWater, text: 'Lagoas de água doce' }
    ],
    days: [
      {
        day: '1º Dia - SÃO LUIS TRANSFER IN AEROPORTO AO HOTEL',
        description: 'Chegada ao Aeroporto de São Luís. Recepção e traslado ao hotel.'
      },
      {
        day: '2° Dia - SÃO LUÍS // SANTO AMARO // PARQUE NACIONAL /CIRCUITO LAGOA DAS ANDORINHA',
        description: 'Após o café da manhã, saímos do hotel com nosso veículo, em direção a Santo Amaro. Aproximadamente 3h30. Acomodação na pousada e almoço. À tarde saímos para uma caminhada leve pelo Parque Nacional dos Lençóis Maranhenses em direção à Lagoa das Andorinhas, uma entre muitas que encontraremos para nos refresca com banhos (na época da cheia). Ficaremos curtindo este visual até o entardecer. Santo Amaro é uma cidade ainda pequena, que fica localizada as margens do campo nos lençóis maranhenses que vem crescendo pela oferta turísticas por conta da estrada de asfalto que chegou ligando a outros municípios. '
      },
      {
        day: '3º Dia - SANTO AMARO // BETANIA // BARREIRINHAS',
        description: 'Após o café da manhã faremos um passeio em veículo 4x4 meio às dunas, passando por boa parte do parque aproveitando banhos nas lagoas até chegarmos à beira do Rio Alegre, de onde temos uma vista espetacular do povoado da Betânia. Após a rápida travessia do rio em lancha, chegamos ao povoado da Betânia, (comunidade simples onde vivem cerca de 50 famílias). Parada para almoço. Após uma volta pelo povoado e um breve descanso nas redes já retornando para Sto. Amaro, passando pela Lagoa do Junco e lagoa do cajueirinho para nos refresca com banhos e chegando na cidade   Pegamos nossa bagagem e seguimos para Barreirinhas.'
      },
      {
        day: '4° Dia - BARREIRINHAS CIRCUITO LAGOA AZUL / CIRCUITO LAGOA BONITA',
        description: 'Após o café da manhã, sairemos em veículo 4x4 em direção ao Parque Nacional. Nossa aventura começa percorrendo estradas de areia até chegarmos ao circuito da Lagoa Azul. A partir dela caminhamos pelas dunas, passando por outras várias lagoas (na época da cheia). Seguimos o roteiro em direção à Lagoa Bonita, parando antes em um restaurante local para almoçar. Após um breve descanso partimos para a Lagoa Bonita, local onde temos a sensação de estar em meio ao grande deserto. Deserto este muito especial, cheio de lagoas. Após deliciosos banhos e um gostoso entardecer, retornamos para Barreirinhas.'
      },
      {
        day: '5° Dia – BARREIRINHAS // VASSOURAS // MANDACARU // CABURÉ /ATINS// BARREIRINHAS',
        description: 'Após o café da manhã, sairemos em voadeira Rio Preguiças abaixo em direção ao povoado do Atins. No caminho, paramos em Vassouras, Pequenos Lençóis, Área de Proteção Ambiental. Caminhamos pelas dunas, tomamos banho nas lagoas (na época da cheia) e podemos ainda saborear uma água de coco em uma barraquinha beira rio. Poderemos ainda ver os macacos prego que habitam o mangue do entorno. Continuamos navegando e em alguns minutos estamos no Caburé.  É aqui que os pescadores passam o primeiro semestre do ano, quando as condições climáticas favorecem a pesca. Oportunidade de banho de mar. Em seguida cruzaremos o rio até o Mandacaru, um povoado de uma centena de casas que se originou a partir do Farol do Preguiças a sugestão é subir o farol e apreciar a vista do alto, podendo-se ver até o Parque Nacional e o mar. Seguiremos em direção a Atins, onde vamos nos hospedar essa noite. Antes, porém, não podemos perder o espetáculo da revoada das garças, e com sorte, também dos guarás, que no final da tarde voltam ao seu dormitório, para mais uma noite de sono.'
      }
      ,
      {
        day: '6° Dia – BARREIRINHAS /ATINS E CANTO DE ATINS ',
        description: 'Passeio Atins saindo de Barreirinhas após o café, em veículo 4x4 percorrendo, trilhas de areia meio a vegetação restinga e dunas, com parada em algumas lagoas para banhos, lagoa tropical, Mario, bode velho, kaite outras, visita a comunidade e praia de Atins e praia dos lençóis onde as dunas se aproxima do mar, também temos 3 opções de almoço uma séria no canto do Atins(restaurante da Sra. Luiza, que foi uma das pioneiras em fazer o camarão grelhado da região dos lençóis, restaurante. Do Sr. Antônio fica um ao lado do outro e também o restaurante da Sra. Carminha que fica na lagoa do Mario e outra será almoçar em Atins, que hoje já temos várias opções de restaurantes, e por volta das 16:00 horas retorno para Barreirinhas.'
      }
      ,
      {
        day: '7° Dia – BARREIRINHAS TRANSFER AO AEROPORTO DE SÃO LUIS',
        description: 'Após café da manhã, traslado a Camocim. Após a travessia de barco pelo Rio Coreaú, iniciaremos o traslado que na verdade é um grande passeio. A paisagem é composta por praias desertas e lindas dunas que chegam a até 30 metros de altura. Faremos um pausa em Tatajuba para curtir a bela Lagoa Verde. Após relaxarmos nas redes penduradas sobre a lagoa, poderemos almoçar neste delicioso recanto. Tatajuba é um primitivo vilarejo de pescadores que foi encoberto pela ação das dunas e reconstruído pelos seus habitantes na outra margem do rio. É por isso que alguns a consideram como Nova Tatajuba. Possui dunas enormes, algumas em processo de cristalização, o que as impede de se mover pela ação do vento. Chegaremos a Jeri à tarde e nos hospedaremos. '
      }
    ]
  },
  'sao-luis-barreirinhas-atins': {
    title: 'SÃO LUIS - BARREIRINHAS - ATINS',
    highlights: [
      { icon: faMapMarkerAlt, text: 'São Luís, Barreirinhas, Atins' },
      { icon: faClock, text: '5 dias de aventura' },
      { icon: faSun, text: 'Clima tropical o ano todo' },
      { icon: faUmbrellaBeach, text: 'Praias paradisíacas' },
      { icon: faMountain, text: 'Dunas dos Lençóis Maranhenses' },
      { icon: faWater, text: 'Lagoas de água doce' }
    ],
    days: [
      {
        day: '1º Dia - SÃO LUÍS',
        description: 'Chegada ao Aeroporto de São Luís, recepção e traslado ao hotel. Tarde livre para sentir um pouco a cidade e descansar.'
      },
      {
        day: '2° Dia - SÃO LUÍS /BARREIRINHAS',
        description: 'A tarde passeio de caiaque. Após o café da manhã saída de são luís para barreirinhas viagem com aproximadamente 04:00 horas vias asfalto, chegando em barreirinhas acomodação e após o almoço saída para o passeio de caiaque saindo da hospedagem seguimos percorrendo 15km por estrada de asfalto ate ao povoado Sobradinho, onde daremos Início a decida pelo rio preguiças, contemplando a natureza exuberantes das margens do rio preguiças sempre a favor da correntezas, remadas sem grandes esforços, decida de aproximadamente 02:00 horas e 30 minutos até ao balneário do recanto na Andiroba, durante o percurso teremos uma parada de 10 minutos para mergulho no Rio, e seguimos até ao balneário onde o veículo vai está aguardando para retornar barreirinhas.'
      },
      {
        day: '3º Dia - BARREIRINHAS - CIRCUITO DAS LAGOAS AZUL E BONITA',
        description: 'pós o café da manhã, sairemos em veículo 4x4 em direção ao Parque Nacional. Nossa aventura começa percorrendo estradas de areia, até chegarmos ao circuito da Lagoa Azul. A partir dela caminhamos pelas dunas, passando por outras várias lagoas (na época da cheia). Após curtir esse lindo pedaço do parque, seguimos para o restaurante da Graça, próximo ao povoado Mata fome. Pequeno restaurante rústico, dentro de sua própria casa, em meio à restinga. Opções dos mais saborosos pratos regionais - camarão, peixe, galinha caipira. Após o almoço e um breve descanso nas redes, partimos para a região da Lagoa Bonita, uma das mais belas áreas do parque. Aqui ficamos até o final da tarde para, com sorte, apreciar um belíssimo pôr do sol do alto das dunas. Retornamos então para Barreirinhas'
      },
      {
        day: '4° Dia - BARREIRINHAS // VASSOURAS // MANDACARU // CABURÉ / ATINS',
        description: 'Após o café da manhã, sairemos em voadeira Rio Preguiças abaixo em direção ao povoado do Atins. No caminho, paramos em Vassouras, Pequenos Lençóis, Área de Proteção Ambiental. Caminhamos pelas dunas, tomamos banho nas lagoas (na época da cheia) e podemos ainda saborear uma água de coco em uma barraquinha beira rio. Poderemos ainda ver os macacos prego que habitam o mangue do entorno. Continuamos navegando e em alguns minutos estamos no Caburé.  É aqui que os pescadores passam o primeiro semestre do ano, quando as condições climáticas favorecem a pesca. Oportunidade de banho de mar. Em seguida cruzaremos o rio até o Mandacaru, um povoado de uma centena de casas que se originou a partir do Farol do Preguiças. À sugestão é subir o farol e apreciar a vista do alto, podendo-se ver até o Parque Nacional e o mar. Mais alguns minutos de lancha voadeira chegaremos na praia de atins onde o rio preguiças desaguar no mar com opção para banho, depois retomo para barreirinhas'
      },
      {
        day: '5° Dia – ATINS – PARQUE NACIONAL - CANTO DO ATINS - PONTA DO MANGUE.',
        description: 'Após o café da manhã, sairemos em 4x4 até o Parque Nacional dos Lençóis Maranhenses, desta vez mais próximos ao mar. Passamos incialmente pela Praia de Atins, e de lá seguimos ao início das dunas do Parque Nacional. Paramos o veículo, e sobre uma das inúmeras dunas teremos uma linda vista do parque, se estendendo até o Canto do Atins e o mar. Seguimos então à Praia dos Lençóis, onde as dunas se aproximam do mar. Aqui podemos tomar um banho de mar. Na época das chuvas, veremos uma pequena cachoeira que se forma junto ao mar. Seguimos então para as lagoas do Gavião, do Kite, e outras lagoas mais, que nos permitem escolher em qual delas iremos querer desfrutar de deliciosos banhos. Agora já é hora de recompor as energias através de um delicioso almoço no Canto do ATINS. Luzia, Antônio e Judite, em qual das duas barracas iremos comer aquele camarão fresco ou o peixe grelhado. À tarde, lembrando que estamos no nordeste, onde o dia é sempre quente, seguimos à Lagoa Tropical e da Esmeralda, na Ponta do Mangue, para mais alguns mergulhos deliciosos. No final do dia voltamos ao nosso hotel.'
      }
      ,
      {
        day: '6° Dia – ATINS // BARREIRINHAS // SÃO LUIS',
        description: 'Após o café da manhã, voltamos de Atins para Barreirinhas, e em horário apropriado, traslado para São Luís. Fim de tarde livre em São Luís.'
      }
      ,
      {
        day: '7° Dia – SÃO LUÍS',
        description: 'Em horário apropriado, traslado ao aeroporto de São Luís.'
      }
    ]
  },
  'sao-luis-barreirinhas-lencois-maranhenses': {
    title: 'SÃO LUÍS - BARREIRINHAS - LENCÖIS MARANHENSES',
    highlights: [
      { icon: faMapMarkerAlt, text: 'São Luís, Barreirinhas, Atins' },
      { icon: faClock, text: '5 dias de aventura' },
      { icon: faSun, text: 'Clima tropical o ano todo' },
      { icon: faUmbrellaBeach, text: 'Praias paradisíacas' },
      { icon: faMountain, text: 'Dunas dos Lençóis Maranhenses' },
      { icon: faWater, text: 'Lagoas de água doce' }
    ],
    days: [
      {
        day: '1º Dia - TRANSFER SÃO LUIS A BARREIRINHAS VEICULO REGULAR, EM HORARIO ACONBINAR.',
        description: 'Chegada ao Aeroporto de São Luís. Recepção e traslado ao hotel.'
      },
      {
        day: '2° Dia - BARREIRINHAS CIRCUITO LAGOA AZUL / CIRCUITO LAGOA BONITA, PAASEIO PRIVADO',
        description: 'Após o café da manhã, sairemos em veículo 4x4 em direção ao Parque Nacional. Nossa aventura começa percorrendo estradas de areia até chegarmos ao circuito da Lagoa Azul. A partir dela caminhamos pelas dunas, passando por outras várias lagoas (na época da cheia). Seguimos o roteiro em direção à Lagoa Bonita, parando antes em um restaurante local para almoçar. Após um breve descanso partimos para a Lagoa Bonita, local onde temos a sensação de estar em meio ao grande deserto. Deserto este muito especial, cheio de lagoas. Após deliciosos banhos e um gostoso entardecer, retornamos para Barreirinhas.'
      },
      {
        day: '3º Dia - BARREIRINHAS // VASSOURAS // MANDACARU // CABURÉ /Atins /BARREIRINHAS, PASSEIO PRIVADO',
        description: 'Após o café da manhã, sairemos em voadeira Rio Preguiças abaixo em direção ao povoado do Atins. No caminho, paramos em Vassouras, Pequenos Lençóis, Área de Proteção Ambiental. Caminhamos pelas dunas, tomamos banho nas lagoas (na época da cheia) e podemos ainda saborear uma água de coco em uma barraquinha beira rio. Poderemos ainda ver os macacos prego que habitam o mangue do entorno. Continuamos navegando e em alguns minutos estamos no Caburé.  É aqui que os pescadores passam o primeiro semestre do ano, quando as condições climáticas favorecem a pesca. Oportunidade de banho de mar de lanc. Em seguida cruzaremos o Rio até o Mandacaru, um povoado de uma centena de casas que se originou a partir do Farol do Preguiças a sugestão é subir o farol e apreciar a vista do alto, podendo-se ver até o Parque Nacional e o mar de lancha voadeira mais alguns minutos chegaremos na praia de Atins onde o rio preguiças desagua no mar com opção com opção para banho para banho, Retorno para Barreirinhas.'
      },
      {
        day: '4° Dia - BARREIRINHAS /ATINS E CANTO DE ATINS (PASSEIO PRIVADO)',
        description: 'Após o café da manhã sairemos em veículo 4x4 percorrendo, trilhas de areia meio a vegetação restinga e dunas, com parada em algumas lagoas para banhos, visita a comunidade e praia de Atins e praia dos lençóis onde as dunas se aproxima do mar, também temos opções de almoço uma séria no canto do Atins(restaurante da Sra. Luiza, que foi uma das pioneiras em fazer o camarão grelhado da região dos lençóis, restaurante. Do Sr. Antônio fica um ao lado do outro e também o restaurante da Sra. Carminha que fica na lagoa do Mario e outra será almoçar em Atins, que hoje já temos várias opções de restaurantes, e as 16:00 horas retorno para Barreirinhas.'
      },
      {
        day: '5° Dia – BARREIRINHAS PASSEIO DE CAIAQUES PELO RIO PREGUIÇAS',
        description: 'Saída as 08:30 buscando os clientes em sua hospedagens, e seguimos percorrendo 15km por estrada de asfalto até ao povoado sobradinho, onde daremos início a decida de caiaque pelo rio preguiças, contemplando a natureza exuberantes das margens do rio preguiças sempre a favor da correntezas, remadas sem grandes esforços, decida de aproximadamente 02:00 horas e 30 minutos até ao balneário do recanto na Andiroba ,durante o percurso teremos uma parada de 10 minutos para mergulho no Rio, e seguimos até ao balneário onde o veículo vai está aguardando para retornar a  barreirinhas.'
      }
      ,
      {
        day: '6° Dia – BARREIRINHAS TRANSFER AO AEROPORTO DE SÃO LUIS EM REGULAR HORARIO ACOBINAR.',
        description: ' '
      }

    ]
  }
};

const PackageDetails = () => {
  const { id } = useParams();
  const packageInfo = packageData[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!packageInfo) {
    return <div>Pacote não encontrado</div>;
  }

  return (
    <PackageDetailsContainer>
      <Content>
        <PackageHeader>
          <h1>{packageInfo.title}</h1>
        </PackageHeader>

        <Highlights>
          {packageInfo.highlights.map((highlight, index) => (
            <HighlightCard key={index}>
              <FontAwesomeIcon icon={highlight.icon} className="icon" />
              <span className="text">{highlight.text}</span>
            </HighlightCard>
          ))}
        </Highlights>

        <Timeline>
          {packageInfo.days.map((day, index) => (
            <DaySection key={index}>
              <DayContent className="day-content">
                <h2>{day.day}</h2>
                <p>{day.description}</p>
              </DayContent>
            </DaySection>
          ))}
        </Timeline>
      </Content>
    </PackageDetailsContainer>
  );
};

export default PackageDetails;
