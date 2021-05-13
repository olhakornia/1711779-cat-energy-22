var navMain = document.querySelector('.page-header');
var navToggle = document.querySelector('.page-header__toggle');

navMain.classList.remove('page-header--nojs');
navMain.classList.remove('page-header--opened');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('page-header--opened')) {
    navMain.classList.remove('page-header--opened');
  } else {
    navMain.classList.add('page-header--opened');
  }
});
