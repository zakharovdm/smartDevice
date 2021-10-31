'use strict';
(function () {
  var buttonAccordions = document.querySelectorAll('.site-footer__accordion-button');
  var openClass = 'site-footer__accordion-button--open';

  var removeOpen = function () {
    buttonAccordions.forEach(function (btn) {
      btn.classList.remove(openClass);
    });
  };

  var toggleAccordion = function (evt) {
    if (evt.target.classList.contains(openClass)) {
      evt.target.classList.remove(openClass);
    } else {
      removeOpen();
      evt.target.classList.add(openClass);
    }
  };

  buttonAccordions.forEach(function (btn) {
    btn.addEventListener('click', toggleAccordion);
  });
})();
