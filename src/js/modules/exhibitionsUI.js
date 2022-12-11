const URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/hUzMPIGaNYoKigliAiYY/likes';
import getExhibitions from '../modules/getExhibitions.js';
import exhibitionsCard from '../modules/exhibitionsCard.js';

const exhibitionsUI = async () => {
    const data = await getExhibitions();
    data.data.forEach((artWork) => {
        exhibitionsCard(artWork.title, artWork.id, artWork.image_url, artWork.aic_start_at, artWork.aic_end_at);
    });
};

export default exhibitionsUI;