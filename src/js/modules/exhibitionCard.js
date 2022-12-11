import postReservation from './postReservation';
import reservationsUI from '../modules/reservationsUI.js'

const exhibitionCard = (title, id, image_url, short_description, gallery_title, aic_start_at, aic_end_at) => {

  const reservationBoard = document.querySelector('.exhibition-board');

  const ticketBoard = document.createElement('div');
  ticketBoard.className = 'ticket-board';
  reservationsUI(id);

  const imgThumb = document.createElement('img');
  imgThumb.id = 'imgThumb';
  imgThumb.src = image_url;

  const form = document.createElement('form');

  const divText = document.createElement('div');
  divText.className='exhibitionText'

  divText.innerHTML = `<h2>${gallery_title}</h2><h4>${title}</h4><h6>${short_description}</h6><h3 class='reservation-title'>Reservations</h3>`;

  const inputName = document.createElement('input');
  inputName.id = 'name';
  inputName.placeholder = 'Your Name';
  inputName.required = true;

  const inputInitDate = document.createElement('input');
  inputInitDate.id = 'initDate';
  inputInitDate.value = aic_start_at;
  inputInitDate.readOnly = true;
  const inputFinalDate = document.createElement('input');
  inputFinalDate.id = 'finalDate';
  inputFinalDate.value = aic_end_at;
  inputFinalDate.readOnly = true;
  const submitButton = document.createElement('button');
  submitButton.id = 'submit';
  submitButton.textContent = 'SUBMIT';

  const inputs = [inputName, inputInitDate, inputFinalDate, submitButton];

  for (let i = 0; i < inputs.length; i += 1) {
    form.appendChild(inputs[i]);
  }

  divText.appendChild(ticketBoard);
  reservationBoard.appendChild(imgThumb);
  reservationBoard.appendChild(divText);
  reservationBoard.appendChild(form);

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const userName = document.getElementById('name');
    const initDate = document.getElementById('initDate');
    const finalDate = document.getElementById('finalDate');
    const reservation = document.querySelector('.ticket-board');
    reservation.innerHTML = '';
    postReservation(userName.value, initDate.value, finalDate.value, id);
    userName.value='';
  });

};

export default exhibitionCard;