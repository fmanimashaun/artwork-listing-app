import 'reset-css';
import '../scss/styles.scss';

import renderHeader from './modules/header.js';
import removeActive from './modules/removeActive.js';
import pageNav from './modules/nav.js';
import exhibitionsUI from './modules/exhibitionsUI.js';

renderHeader();

const tablist = document.querySelectorAll('.header__nav-link');

pageNav(tablist, removeActive);

const reservation = document.querySelector('.reservations');
const exhibitionBoard = document.querySelector('.main');
reservation.addEventListener('click', () => {
  exhibitionBoard.innerHTML = '';
  exhibitionsUI();
});
