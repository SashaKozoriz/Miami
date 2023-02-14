'use strict';

window.addEventListener('scroll', function() {
  if (window.pageYOffset > 20) {
    document
      .querySelector('.back-to-top')
      .classList.add('back-to-top--visible');
  } else {
    document
      .querySelector('.back-to-top')
      .classList.remove('back-to-top--visible');
  }
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
