$(document).ready(function() {
  
  // Bootstrap toolip
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

  // Scroll to anchor
  $('a[href*=#]').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 1000, 'linear');
	});

  // Add behaviour to elements while scrolling
  $(window).bind('scroll', function (e) {

    if ($(window).scrollTop() > 420) {
        $('.button-block').addClass('fixed');
        $('.scroller').addClass('hidden');
    } else {
        $('.button-block').removeClass('fixed');
        $('.scroller').removeClass('hidden');
    }

    if ($(window).scrollTop() >= 695) {
      $('.button-block').removeClass('fixed');
      $('.button-block').addClass('absolute_menu');
    } else {
      $('.button-block').removeClass('absolute_menu');
    }

    if ($(window).scrollTop() >= 670) {
      $('.fa-linkedin-square').addClass('absolute');
      $('.contact_information').addClass('absolute');
    } else {
      $('.fa-linkedin-square').removeClass('absolute');
      $('.contact_information').removeClass('absolute');
    }
  });
  

});