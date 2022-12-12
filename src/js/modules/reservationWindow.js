import fetchData from './fetchApi.js';
import reservationModal from './reservationModal.js';
import renderModal from './renderModal.js';

const reservationPopUp = () => {
  const reservationBtns = document.querySelectorAll('.reserve-btn');
  reservationBtns.forEach((button) => {
    button.addEventListener('click', (e) => {
      const id = e.target.id.split('-')[1];
      console.log(id);
      const URL = `https://api.artic.edu/api/v1/exhibitions/${id}?fields=id,title,short_description,image_url`;
      // call data from artworks api and rendering on page;
      fetchData(URL).then((exhibition) => {
        renderModal(reservationModal, exhibition.data);
      }).then(() => {
        const modelwindow = document.querySelector('.exhibitions__modal');
        const pageContainer = document.querySelector('.container');
        const closeBtn = document.querySelector('.exhibitions__modal-btn');
        closeBtn.addEventListener('click', () => {
          pageContainer.removeChild(modelwindow);
        });
      });
    });
  });
};

export default reservationPopUp;