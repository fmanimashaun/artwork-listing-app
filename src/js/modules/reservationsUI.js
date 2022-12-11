import getReservations from './getReservations.js';
import reservationCard from './reservationCard.js';

const reservationsUI = async (id) => {
  const data = await getReservations(id);
  data.forEach((meet) => {
    reservationCard(meet.username, meet.date_start, meet.date_end);
  });
};

export default reservationsUI;