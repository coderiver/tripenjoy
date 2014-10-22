head.ready(function() {

  $(document).on("click", function(){
   $(".js-popup").fadeOut(200);
   $('.overlay').hide();
   $('.out').removeClass('is-blurred');
   $('body').removeClass('no-overflow');

   $('.select__drop').slideUp(200);
  });

  if ( $(".js-slick-slider").length ) {
    $(".js-slick-slider").slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: true,
      autoplaySpeed: 5000,
      slide: '.slider__item',
      prevArrow: '.slider__prev',
      nextArrow: '.slider__next',
    });
  };

  $('.select').on('click', function(event) {
    event.stopPropagation();
    event.preventDefault();
    $(this).find('.select__drop').slideToggle(200);
  });

  $('.select__drop a').on('click', function(event) {
    event.stopPropagation();
    event.preventDefault();
    var optionID = $(this).attr('data-option');
    var optionText  = $(this).text();
    var value = $(this).parents('.select').find('.select__value');
    value.attr('data-selected-option', optionID).text(optionText);
    $(this).parents('.select__drop').slideUp(100);
  });

  $('.select__drop').on('click', function(event) {
    event.stopPropagation();
  });

  //show popups
  $('.js-popup-show').on('click', function(event) {
    event.preventDefault();
    event.stopPropagation();
    var popup = $('#' + $(this).attr('data-popup'));
    popup.fadeIn(400);
    $('.overlay').show();
    $('.out').addClass('is-blurred');
    $('body').addClass('no-overflow');
  });
  $('.js-popup').on('click', function(event) {
    event.stopPropagation();
  });
  $('.js-popup-hide').on('click', function(event) {
    event.preventDefault();
    $(this).parents('.js-popup').fadeOut(200);
    $('.overlay').hide();
    $('.out').removeClass('is-blurred');
    $('body').removeClass('no-overflow');
  });
});