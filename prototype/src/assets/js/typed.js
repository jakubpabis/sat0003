//
// typed.js
// Theme module
//

'use strict';

(function() {

  //
  // Variables
  //

  var toggle = document.querySelectorAll('[data-toggle="typed"]');

  //
  // Functions
  //

  function init(el) {
    var elementOptions = el.dataset.options;
    elementOptions = elementOptions ? JSON.parse(elementOptions) : {};
    var defaultOptions = {
      typeSpeed: 60,
      backSpeed: 60,
      backDelay: 2000,
      loop: true
    }
    var options = Object.assign(defaultOptions, elementOptions);

    // Init
    new Typed(el, options);
  }

  //
  // Events
  //

  if (typeof Typed !== 'undefined' && toggle) {
    [].forEach.call(toggle, function(el) {
      init(el);
    });
  }

})();
