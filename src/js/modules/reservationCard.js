const reservationCard = (username, start, end) => {
  const reservationBoard = document.querySelector('.ticket-board');
  const divReservation = document.createElement('div');
  const reservationTitle = document.createElement('h2');
  divReservation.innerHTML = `<h5>${username}</h5><h5>${start}</h5><h5>${end}</h5>`;
  reservationBoard.appendChild(reservationTitle);
  reservationBoard.appendChild(divReservation);
};

export default reservationCard;