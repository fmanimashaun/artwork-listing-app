import closeIcon from '../../img/close.svg';
import exhibitionUI from './exhibitionUI.js';

const myCancel = new Image();
myCancel.src = closeIcon;
myCancel.classList = ('imgCancel');

const exhibitionsCard = (title, id, imgurl, start) => {
  const board = document.querySelector('.main');

  const div = document.createElement('div');
  div.className = 'exhibitionCard';
  const strDiv = document.createElement('div');
  strDiv.className = 'strDiv';

  const buttonReservation = document.createElement('div');
  buttonReservation.className = 'buttonReservation';

  const img = document.createElement('img');
  img.className = 'exhibitionImg';
  img.src = imgurl;

  div.appendChild(img);
  strDiv.innerHTML = `<span>${title}</span><p>${start}</p>`;
  buttonReservation.innerHTML = `<div>Reservations</div><span class='hide'>${id}</span>`;

  div.appendChild(strDiv);
  div.appendChild(buttonReservation);
  board.appendChild(div);

  const overlay = document.querySelector('.opened');
  const cancel = document.querySelector('.closed');
  cancel.appendChild(myCancel);

  buttonReservation.addEventListener('click', () => {
    overlay.style.display = 'block';
    exhibitionUI(e.target.nextElementSibling.textContent);
  });

  cancel.addEventListener('click', () => {
    overlay.style.display = 'none';
    document.querySelector('.exhibition-board').innerHTML = '';
  });
};

export default exhibitionsCard;