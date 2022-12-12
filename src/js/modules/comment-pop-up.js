import fetchData from './fetchApi.js';
import artworkModal from './artwork-modal.js';
import renderModal from './renderModal.js';
import { generateComment, addNewComment } from './comment.js';
import updateCounter from './countComments.js';

const commentPopUp = () => {
  const commentBtns = document.querySelectorAll('.comment-btn');
  commentBtns.forEach((button) => {
    button.addEventListener('click', (e) => {
      const id = e.target.id.split('-')[1];
      const URL = `https://api.artic.edu/api/v1/artworks/${id}?fields=id,title,artist_display,place_of_origin,credit_line,term_titles,image_id`;
      // call data from artworks api and rendering on page;
      fetchData(URL).then((artwork) => {
        renderModal(artworkModal, artwork.data);
      });
    });
  });
};

export default commentPopUp;

const addCommentEvent = async () => {
  const form = document.querySelector('.artworks__modal-comments-add');
  const addCommentBtn = document.querySelector('.add-comment-btn');

  form.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    const user = form.elements.fname;
    const comment = form.elements.newUserComment;

    await addNewComment(addCommentBtn.id, user.value, comment.value);

    const commentDiv = document.querySelector('.artworks__modal-comments-list');
    const commentParagraph = await generateComment(addCommentBtn.id);
    commentDiv.innerHTML = '';
    commentDiv.append(commentParagraph);

    const commentCountSpan = document.querySelector('.artworks__modal-comments-count');
    const commentNumbers = updateCounter();
    commentCountSpan.textContent = `${commentNumbers}`;

    form.reset();
  });
};

const addCloseEvent = () => {
  const closeBtn = document.getElementsByClassName('.artworks__modal-btn-img');
  closeBtn.addEventListener('click', () => {
    const closeIcon = commentPopUp();
    closeIcon.style.display = 'none';
  });
};

const showPopup = async (id) => {
  const commentCountSpan = document.querySelector('.artworks__modal-comments-count');
  const commentNumbers = updateCounter();
  commentCountSpan.textContent = `${commentNumbers}`;
  addCommentEvent();
  addCloseEvent();
};

