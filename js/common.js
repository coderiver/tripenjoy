head.ready(function() {

  $(document).on("click", function(){
   $('.popup').fadeOut(200);
   $('.popup__in').removeClass('is-visible');
   // $('.overlay').hide();
   $('.out').removeClass('is-blurred');
   $('body').removeClass('no-overflow');

   // $('.select__drop').slideUp(200);
   closeSelectDropDown();
  });

  //jquery ui datepicker
  $.datepicker.setDefaults(
    $.extend(
      {'dateFormat':'dd.mm.yy'},
      $.datepicker.regional['ru']
    )
  );
  $('.datepicker').datepicker({
    // changeMonth: true,
    // changeYear: true,
  });

  $('.datepicker').on('click', function(event) {
    var placeholderText = $(this).attr('placeholder');
    $(this).attr('placeholder', '__.__.____');
    $(this).mask('00.00.0000');
    $(this).on('focusout', function(event) {
      if ( $(this).val() === '' ) {
        $(this).attr('placeholder', placeholderText);
      };
    });
  })


  //slider
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

  //gallery
  if ( $(".js-slick-gallery").length ) {
    $(".js-slick-gallery").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      // autoplay: true,
      // autoplaySpeed: 5000,
      adaptiveHeight: true,
      // slide: '.slider__item',
      prevArrow: '.gallery__prev',
      nextArrow: '.gallery__next',
      asNavFor: '.js-slick-carousel'
    });
  };

  if ( $(".js-slick-carousel").length ) {
    $(".js-slick-carousel").slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      focusOnSelect: true,
      arrows: false,
      // centerMode: true,
      // slide: '.slider__item',
      asNavFor: '.js-slick-gallery'
    });
  };

  //rating
  $('.rating__select').barrating('show');

  //custom select
  $('.select').on('click', function(event) {
    event.stopPropagation();
    event.preventDefault();
    closeSelectDropDown();
    var dropDown = $(this).find('.select__drop');
    if ( !dropDown.is(':visible') ) {
      dropDown.slideDown(200);
    };
  });

  $('.select__drop li').on('click', function(event) {
    if ( !$(this).parents('.js-no').length ) {
      var optionID = $(this).attr('data-option');
      var optionText  = $(this).text();
      var value = $(this).parents('.select').find('.select__value');
      value.attr('data-selected-option', optionID).text(optionText);
      // $(this).parents('.select__drop').slideUp(100);
      closeSelectDropDown();
    };
  });

  $('.select__drop').on('click', function(event) {
    event.stopPropagation();
  });

  var closeSelectDropDown = function() {
    $('.select__drop').slideUp(100);
  };

  //show/hide popups
  $('.js-popup-show').on('click', function(event) {
    event.preventDefault();
    event.stopPropagation();

    var popup       = $('#' + $(this).attr('data-popup'));
    var poupContent = popup.find('.popup__in');

    $('body').addClass('no-overflow');
    // $('.out').addClass('is-blurred');
    // $('.overlay').show();
    popup.fadeIn(200);
    setTimeout( function() {
      poupContent.addClass('is-visible');
    }, 200);
  });
  $('.popup__in').on('click', function(event) {
    event.stopPropagation();
  });
  $('.js-popup-hide').on('click', function(event) {
    event.preventDefault();
    $(this).parents('.popup__in').removeClass('is-visible');
    $(this).parents('.popup').fadeOut(200);
    // $('.overlay').hide();
    $('.out').removeClass('is-blurred');
    $('body').removeClass('no-overflow');
  });

  //tabs
  var tabs        = $('.js-tabs'),
      tab         = tabs.find('.js-tab').children(),
      tabContent  = tabs.find('.js-tabcontent').children(),
      activeClass = 'is-active';

  // hide all tabcontents exept first
  tabContent.not(':first-child').hide();

  tab.click(function(event) {
    var activeTabIndex = $(this).index();
    // change active tab
    tab.removeClass(activeClass);
    $(this).addClass(activeClass);
    // change active tabcontent
    tabContent.hide();
    tabContent.eq(activeTabIndex).show();
    return false;
  });


  //switch-btn in search block
  $('.switch').on('click', function(event) {
    event.preventDefault();
    $(this).toggleClass('is-toggle');
  });


  $('.input-number__up').on('click', function(event) {
    var value = $(this).siblings('input').val();
    value++;
    $(this).siblings('input').val(value);
  });

  $('.input-number__down').on('click', function(event) {
    var value = $(this).siblings('input').val();
    if (value > 0) {
      value--;
    };
    $(this).siblings('input').val(value);
  });
});