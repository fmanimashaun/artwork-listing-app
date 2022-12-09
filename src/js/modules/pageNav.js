import pageRender from './pageRender.js';
import artworks from './artworks.js';
import shop from './shop.js';
import fetchData from './fetchApi.js';

const pageMain = document.querySelector('.main');
const URL = 'https://api.artic.edu/api/v1/artworks?limit=20&fields=id,title,artist_display,place_of_origin,credit_line,term_titles,image_id';

const pageNav = (navItems, removeClass) => {
  navItems.forEach((tab) => {
    tab.addEventListener('click', (event) => {
      if (event.target.textContent === 'Artworks') {
        removeClass(navItems);
        event.target.classList.add('active');
        // call data from artworks api and rendering on page;
        fetchData(URL).then((artworkArr) => {
          pageRender(pageMain, artworks, artworkArr.data);
        });
      } else if (event.target.textContent === 'Exhibitions') {
        removeClass(navItems);
        event.target.classList.add('active');
        pageMain.innerHTML = '';
        // renderPage(pageMain, renderAddForm);
      } else if (event.target.textContent === 'Shop') {
        removeClass(navItems);
        event.target.classList.add('active');
        pageMain.innerHTML = '';
        pageRender(pageMain, shop);
      }
    });
  });
};

export default pageNav;