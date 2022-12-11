import closeIcon from '../../img/close.svg';
import exhibitionUI from '../modules/exhibitionUI.js';

const myCancel = new Image();
myCancel.src = closeIcon;
myCancel.classList = ('imgCancel');

const exhibitionsCard = (title, id, image_url, aic_start_at, aic_end_at) => {

  const board = document.querySelector('.main');

  const div = document.createElement('div');
  div.className = 'exhibitionCard';
  const strDiv = document.createElement('div');
  strDiv.className = 'strDiv';

  const buttonReservation = document.createElement('div');
  buttonReservation.className = 'buttonReservation';

  const img = document.createElement('img');
  img.className = 'exhibitionImg';
  img.src = image_url;

  div.appendChild(img);
  strDiv.innerHTML = `<span>${title}</span><p>${aic_start_at}</p>`
  buttonReservation.innerHTML = `<div>Reservations</div><span class='hide'>${id}</span>`

  div.appendChild(strDiv);
  div.appendChild(buttonReservation);
  board.appendChild(div);

  const overlay = document.querySelector('.opened');
  const cancel = document.querySelector('.closed');
  cancel.appendChild(myCancel);

  buttonReservation.addEventListener('click', (e) => {
    overlay.style.display = 'block';
    exhibitionUI(e.target.nextElementSibling.textContent);
  });

  cancel.addEventListener('click', (e) => {
    overlay.style.display = 'none';
    document.querySelector('.exhibition-board').innerHTML = '';
  });

};

export default exhibitionsCard;