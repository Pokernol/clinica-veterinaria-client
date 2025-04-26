import { createCardLink } from '../../generics/components/cardLink.js';

document.addEventListener('DOMContentLoaded', function () {
  const cardLinksContainer = document.getElementById('cardLinksLandingPage');

  const cardsData = [
    {
      href: 'pages/agendamento.html',
      imageSrc: 'assets/img/calendar.svg',
      imageAlt: 'Calendário',
      title: 'Agendamento Consulta/Vacina',
      titleClass: '',
      badgeText: 'Novo!',
      cardClass: 'custom-card',
    },
    {
      href: 'pages/exames.html',
      imageSrc: 'assets/img/seringa.svg',
      imageAlt: 'seringa',
      title: 'Resultado de Exames',
      titleClass: 'text-info',
      badgeText: 'Novo!',
      cardClass: 'custom-card-white',
    },
    {
      href: 'pages/pet.html',
      imageSrc: 'assets/img/dog.svg',
      imageAlt: 'pet',
      title: 'Cadastre seu pet',
      titleClass: 'text-info',
      badgeText: 'Novo!',
      cardClass: 'custom-card-white',
    },
    {
      href: 'pages/quem-somos.html',
      imageSrc: 'assets/img/team.svg',
      imageAlt: 'equipe',
      title: 'Quem Somos',
      titleClass: 'text-info',
      badgeText: 'Novo!',
      cardClass: 'custom-card-white',
    },
    {
      href: 'pages/contato.html',
      imageSrc: 'assets/img/message.svg',
      imageAlt: 'mensagem',
      title: 'Fale Conosco',
      titleClass: 'text-info',
      badgeText: 'Novo!',
      cardClass: 'custom-card-white',
    },
  ];

  cardsData.forEach(cardData => {
    const cardHTML = createCardLink(cardData);
    cardLinksContainer.innerHTML += cardHTML;
  });
});
