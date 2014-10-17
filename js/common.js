head.ready(function() {

  $(document).on("click", function(){
   // $(".js-popup").hide();
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
});