head.ready(function() {

  // $(document).on("click", function(){
  //  $(".js-popup").hide();
  // });

  if ( $(".js-slick-slider").length ) {
    console.log('wow');
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
});