const URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ViSJ8poufeMKrw56GVxW/reservations?item_id=';

const getReservations = async (id) => {
  const response = await fetch(`${URL}${id}`);
  const data = await response.json();
  return data;
};

export default getReservations;