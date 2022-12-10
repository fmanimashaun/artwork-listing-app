import fetchData from './fetchApi.js';
import artworkModal from './artwork-modal.js';
import pageRender from './pageRender.js';

const pageContainer = document.querySelector('.container');

const commentPopUp = async () => {
  const commentBtns = document.querySelectorAll('.comment-btn');
  commentBtns.forEach((button) => {
    button.addEventListener('click', (e) => {
      console.log('clicked');
      const id = e.id.split('-')[1];
      const URL = `https://api.artic.edu/api/v1/artworks/${id}?fields=id,title,artist_display,place_of_origin,credit_line,term_titles,image_id`;
      // call data from artworks api and rendering on page;
      fetchData(URL).then((artwork) => {
        pageRender(pageContainer, artworkModal, artwork.data);
      });
    });
  });
};

export default commentPopUp;
