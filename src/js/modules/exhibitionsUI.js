import getExhibitions from './getExhibitions.js';
import exhibitionsCard from './exhibitionsCard.js';

const exhibitionsUI = async () => {
  const data = await getExhibitions();
  data.data.forEach((work) => {
    exhibitionsCard(work.title, work.id, work.image_url, work.aic_start_at);
  });
};

export default exhibitionsUI;