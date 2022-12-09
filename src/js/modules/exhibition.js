const pageMain = document.querySelector('.main');

const exhibitions = async (dataArr) => {
  const exhibitionsHtmlContent = await dataArr.map((exhibition) => `
      <figure class="exhibitions__item" id="${exhibition.id}">
        <img class="exhibitions__item-img" src="${exhibition.image_url}" alt="${exhibition.title}">
        <figcaption class="exhibitions__item-caption">
          <h2 class="exhibitions__item-title">${exhibition.title}</h2>
          <p>${exhibition.short_description}</p>
          <button id ="reserve-${exhibition.id}"class="exhibitions__item-btn comment">Reservation</button>
        </figcaption>
     </figure>
    `).filter((exhibition) => exhibition.image_id !== null);
  pageMain.insertAdjacentHTML('afterbegin', `<div class="exhibitions">${exhibitionsHtmlContent.join('')}</div>`);
};

export default exhibitions;