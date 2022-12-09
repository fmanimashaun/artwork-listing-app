import likeIcon from '../../img/like.svg';
import unLikeIcon from '../../img/unlike.svg';

const pageMain = document.querySelector('.main');

const artworks = async (dataArr) => {
  const artworksHtmlContent = await dataArr.map((artwork) => `
      <figure class="artworks__item" id="${artwork.id}">
        <img class="artworks__item-img" src="https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg" alt="${artwork.title}">
        <figcaption class="artworks__item-caption">
          <h2 class="artworks__item-title">${artwork.title}</h2>
          <p>${artwork.artist_display}</p>
          <div class="artworks__item-interact">
            <button class="artworks__item-btn like-btn">
              <img class="like-img hidden" src="${likeIcon}" alt="like">
              <img class="like-img" src="${unLikeIcon}" alt="like">
            </button>
            <button id ="comment-${artwork.id}"class="artworks__item-btn comment">Comment</button>
          </div>
        </figcaption>
     </figure>
    `);
  pageMain.insertAdjacentHTML('afterbegin', `<div class="artworks">${artworksHtmlContent.join('')}</div>`);
};

export default artworks;
