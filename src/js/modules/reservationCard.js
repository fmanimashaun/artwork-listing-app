const reservationCard = (username, date_start, date_end) => {
    const reservationBoard = document.querySelector('.ticket-board');
    const divReservation = document.createElement('div');
    const reservationTitle = document.createElement('h2');
    divReservation.innerHTML = `<h5>${username}</h5><h5>${date_start}</h5><h5>${date_end}</h5>`;
    reservationBoard.appendChild(reservationTitle);
    reservationBoard.appendChild(divReservation);
};

export default reservationCard;