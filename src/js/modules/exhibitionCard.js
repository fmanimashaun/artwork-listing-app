import postReservation from './postReservation.js';
import reservationsUI from './reservationsUI.js';

const exhibitionCard = (title, id, image, description, gallery, start, end) => {
  const reservationBoard = document.querySelector('.exhibition-board');

  const ticketBoard = document.createElement('div');
  ticketBoard.className = 'ticket-board';
  reservationsUI(id);

  const imgThumb = document.createElement('img');
  imgThumb.id = 'imgThumb';
  imgThumb.src = image;

  const form = document.createElement('form');

  const divText = document.createElement('div');
  divText.className = 'exhibitionText';

  divText.innerHTML = `<h2>${gallery}</h2><h4>${title}</h4><h6>${description}</h6><h3 class='reservation-title'>Reservations</h3>`;

  const inputName = document.createElement('input');
  inputName.id = 'name';
  inputName.placeholder = 'Your Name';
  inputName.required = true;

  const inputInitDate = document.createElement('input');
  inputInitDate.id = 'initDate';
  inputInitDate.value = start;
  inputInitDate.readOnly = true;
  const inputFinalDate = document.createElement('input');
  inputFinalDate.id = 'finalDate';
  inputFinalDate.value = end;
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
    userName.value = '';
  });
};

export default exhibitionCard;