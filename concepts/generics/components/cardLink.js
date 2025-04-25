export function createCardLink({
  href = '#',
  imageSrc,
  imageAlt = '',
  title,
  titleClass = 'text-info',
  badgeText = '',
  cardClass = 'custom-card-white',
}) {
  const badgeHTML = badgeText
    ? `<span class="badge bg-warning position-absolute" style="height: 25px; top: -10px; right: 210px">${badgeText}</span>`
    : '';

  return `
    <a href="${href}" class="card d-flex align-items-center text-center p-3 shadow-lg ${cardClass}" style="position: relative;">
      ${badgeHTML}
      <img src="${imageSrc}" alt="${imageAlt}" class="mb-2" width="50px" height="50px" />
      <h5 class="mt-2 ${titleClass}">${title}</h5>
    </a>
  `;
}
