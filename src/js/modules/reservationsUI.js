const URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ViSJ8poufeMKrw56GVxW/reservations?item_id=';
import getReservations from '../modules/getReservations.js';
import reservationCard from '../modules/reservationCard.js';

const reservationsUI = async (id) => {
  const data = await getReservations(id);
  data.forEach((meet) => {
    console.log(meet.username)
    reservationCard(meet.username, meet.date_start, meet.date_end);
  });
};

export default reservationsUI;