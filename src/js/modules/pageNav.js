import pageRender from './pageRender.js';
import artworks from './artworks.js';
import shop from './shop.js';

const pageMain = document.querySelector('.main');

const pageNav = (navItems, removeClass) => {
  navItems.forEach((tab) => {
    tab.addEventListener('click', (event) => {
      if (event.target.textContent === 'Artworks') {
        removeClass(navItems);
        event.target.classList.add('active');
        pageRender(pageMain, artworks);
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