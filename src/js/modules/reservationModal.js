import closeIcon from '../../img/close_gray.svg';

const pageContainer = document.querySelector('.container');

const reservationModal = async (data) => {
  const reservationModalHtmlContent = `
    <div class="exhibitions__modal">
      <div class="exhibitions__modal-wrapper">
        <button class='exhibitions__modal-btn'>
          <img class='exhibitions__modal-btn-img' src="${closeIcon}" alt="close">
        </button>
        <div class="exhibitions__modal-card">
          <img class="exhibitions__modal-card-img" src="${data.image_url}" alt="project artwork">
          <div class="exhibitions__modal-card-details">
            <h3 class="exhibitions__modal-card-title">${data.title}</h3>
            <p class='exhibitions__modal-card-description'>${data.short_description}</p>
          </div>
          <div class="exhibitions__modal-reservations">
            <h4 class="exhibitions__modal-reservations-title">Reservations<span class="exhibitions__modal-reservations-count"></span>:
            </h4>
            <div class="exhibitions__modal-reservations-list">
              <p class='exhibitions__modal-reservations-item'>03/11/2021 - 03/12/2021 by Alex</p>
              <p class='exhibitions__modal-reservations-item'>03/14/2021 - 03/16/2021 by Mia</p>
            </div>
            <form action="" class="exhibitions__modal-reservations-add">
              <h4 class="exhibitions__modal-reservations-add-title">Add a reservation:</h4>
              <input type="text" name="name" id="name" placeholder='Your name'>
              <input type="text" name="date" id="start_date" placeholder='Start date' onfocus="(this.type='date')" onblur="(this.type='text')">
              <input type="text" name="date" id="end_date" placeholder='End date' onfocus="(this.type='date')" onblur="(this.type='text')">
              <input class='exhibitions__modal-reservations-btn' type="submit" value="Reserve">
            </form>
          </div>
        </div>
      </div>
    </div>
  `;
  pageContainer.insertAdjacentHTML('afterbegin', reservationModalHtmlContent);
};

export default reservationModal;