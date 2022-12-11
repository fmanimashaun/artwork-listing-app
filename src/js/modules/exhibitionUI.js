const URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/hUzMPIGaNYoKigliAiYY/likes';
import getExhibitions from '../modules/getExhibitions.js';
import exhibitionCard from '../modules/exhibitionCard.js';

const exhibitionUI = async (id) => {
  const data = await getExhibitions();

  data.data.forEach((meet) => {
    if (meet.id === parseInt(id)) {
      exhibitionCard(meet.title, meet.id, meet.image_url, meet.short_description, meet.gallery_title, meet.aic_start_at, meet.aic_end_at);
    }
  });

};

export default exhibitionUI;