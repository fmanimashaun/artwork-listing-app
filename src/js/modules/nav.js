const pageNav = (navItems, removeClass) => {
  navItems.forEach((tab) => {
    tab.addEventListener('click', (event) => {
      if (event.target.textContent === 'Artworks') {
        removeClass(navItems);
        event.target.classList.add('active');
        // renderPage(pageMain, renderList, list);
      } else if (event.target.textContent === 'Exhibitions') {
        removeClass(navItems);
        event.target.classList.add('active');
        // renderPage(pageMain, renderAddForm);
      } else if (event.target.textContent === 'Shop') {
        removeClass(navItems);
        event.target.classList.add('active');
        // renderPage(pageMain, renderContact);
      }
    });
  });
};

export default pageNav;