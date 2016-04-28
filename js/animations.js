(function() {

  $(".down-arrow").on('click', function() {
      $('html, body').animate({
        scrollTop: $("#happenings").offset().top
      }, 'slow');
  });

  $(".up-arrow").on('click', function() {
      $('html, body').animate({
        scrollTop: $("#splash").offset().top
      }, 'slow');
  });

})();
