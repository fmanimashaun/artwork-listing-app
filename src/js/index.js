import 'reset-css';
import '../scss/styles.scss';

import renderHeader from './modules/header.js';
import removeActive from './modules/removeActive.js';
import pageNav from './modules/pageNav.js';
import pageRender from './modules/pageRender.js';
import artworks from './modules/artworks.js';

renderHeader();

const tablist = document.querySelectorAll('.header__nav-link');
const pageMain = document.querySelector('.main');
pageNav(tablist, removeActive);

pageRender(pageMain, artworks);
