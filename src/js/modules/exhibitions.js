const pageMain = document.querySelector('.main');

const exhibitions = async (dataArr) => {
  const exhibitionsHtmlContent = await dataArr.filter((exhibition) => exhibition.image_url !== null).map((exhibition) => `
      <figure class="exhibitions__item" id="${exhibition.id}">
        <img class="exhibitions__item-img" src="${exhibition.image_url}" alt="${exhibition.title}">
        <figcaption class="exhibitions__item-caption">
          <h2 class="exhibitions__item-title">${exhibition.title}</h2>
          <button id ="reserve-${exhibition.id}"class="exhibitions__item-btn reserve-btn">Reservation</button>
        </figcaption>
     </figure>
    `);
  pageMain.insertAdjacentHTML('afterbegin', `<div class="exhibitions">${exhibitionsHtmlContent.join('')}</div>`);
};

export default exhibitions;