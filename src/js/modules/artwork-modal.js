import closeIcon from '../../img/close_gray.svg';

const pageMain = document.querySelector('.main');

const artworkModal = async (data) => {
  const artworkModalHtmlContent = `
  <div class="artworks__modal">
  <div class="artworks__modal-wrapper">
    <button class='artworks__modal-btn'>
      <img class='artworks__modal-btn-img' src="${closeIcon}" alt="close">
    </button>
    <div class="artworks__modal-card">
      <img class="artworks__modal-card-img" src="https://www.artic.edu/iiif/2/${data.image_id}/full/843,/0/default.jpg" alt="${data.title}">
      <div class="artworks__modal-card-details">
        <h3 class="artworks__modal-card-title">${data.title}</h3>
        <p class='artworks__modal-card-author'><span>Author:</span> ${data.artist_display}</p>
        <p class='artworks__modal-card-origin'><span>Origin:</span>  ${data.place_of_origin}</p>
        <p class='artworks__modal-card-credit'><span>Credit:</span> ${data.credit_line}</p>
        <ul class="artworks__modal-card-terms">
          <li class='artworks__modal-card-terms-item'>watercolor</li>
          <li class='artworks__modal-card-terms-item'>Century of Progress</li>
          <li class='artworks__modal-card-terms-item'>paper (fiber product)</li>
          <li class='artworks__modal-card-terms-item'>watercolor</li>
          <li class='artworks__modal-card-terms-item'>water-base paint</li>
          <li class='artworks__modal-card-terms-item'>paint</li>
          <li class='artworks__modal-card-terms-item'>graphite</li>
          <li class='artworks__modal-card-terms-item'>drawings (visual works)</li>
          <li class='artworks__modal-card-terms-item'>prints and drawing</li>
          <li class='artworks__modal-card-terms-item'>world's fairs</li>
          <li class='artworks__modal-card-terms-item'>Chicago World's Fairs</li>
        </ul>
      </div>
      <div class="artworks__modal-comments">
        <h4 class="artworks__modal-comments-title">Comments<span class="artworks__modal-comments-count"></span>:
        </h4>
        <div class="artworks__modal-comments-list">
          <p class='artworks__modal-comments-item'>03/11/2021 Alex: I'd love to buy it!</p>
          <p class='artworks__modal-comments-item'>03/12/2021 Mia: I love</p>
        </div>
        <form action="" class="artworks__modal-comments-add">
          <input type="text" name="name" id="name" placeholder='Your name'>
          <textarea class='artworks__modal-comments-input' name="message" id="comment" maxlength="500" cols="30"
            rows="4" placeholder="Your insights..."></textarea>
          <input class='artworks__modal-comments-btn' type="submit" value="Comment">
        </form>
      </div>
    </div>
  </div>
</div>
    `;
  pageMain.insertAdjacentHTML('afterbegin', `<div class="artworks">${artworksHtmlContent.join('')}</div>`);
};

export default artworkModal;
