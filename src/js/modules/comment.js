import fetchData from './fetchApi.js';
// eslint-disable-next-line
const createCommentHtml = ({ creation_date, username, comment }) => {
  // eslint-disable-next-line
  let creationDate = creation_date;
  const commentSpan = document.createElement('span');
  commentSpan.className = 'comment-sp';
  commentSpan.innerText = `
        ${creationDate} ${username}: ${comment}  
      `;
  return commentSpan;
};

export const generateComment = async (id) => {
  const commentParagraph = document.createElement('p');
  commentParagraph.innerHTML = '';

  const comments = await fetchData(id);
  if (comments == null) {
    const emptyCommentSpan = document.createElement('span');
    emptyCommentSpan.className = 'no-comment';
    emptyCommentSpan.textContent = 'be the first to comment';
    commentParagraph.append(emptyCommentSpan);
  } else {
    comments.forEach((comment) => {
      commentParagraph.append(createCommentHtml(comment));
    });
  }

  return commentParagraph;
};

export const addNewComment = async (id, user, comment) => {
  const newComment = {
    item_id: id,
    username: user,
    comment,
  };
  const res = await fetchData((URL), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newComment),
  });
  //   const data = await res.json();
  return res;
};
