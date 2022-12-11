import reservationsUI from "./reservationsUI";

const URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ViSJ8poufeMKrw56GVxW/reservations';

const postReservation = async (name, initDate, finalDate, id) => {
  const response = await fetch(URL, {
    method: 'POST',
    body: JSON.stringify({
        item_id: id,
        username: name,
        date_start: initDate,
        date_end: finalDate,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  reservationsUI(id);
  const data = await response.json();
  return data;
}

export default postReservation;