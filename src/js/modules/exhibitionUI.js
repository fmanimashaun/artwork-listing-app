import getExhibitions from './getExhibitions.js';
import exhibitionCard from './exhibitionCard.js';

const exhibitionUI = async (id) => {
  const data = await getExhibitions();

  data.data.forEach((m) => {
    if (m.id === parseInt(id)) {
      exhibitionCard(m.title, m.id, m.image_url, m.short_description, m.gallery_title, m.aic_start_at, m.aic_end_at);
    }
  });
};

export default exhibitionUI;