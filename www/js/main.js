$(document).ready(function () {
  window.scrollTo = function (selector) {
    $('html, body').animate({
        scrollTop: $(selector).offset().top
    }, 500);
  }
});



