head.ready(function(){$(document).on("click",function(){$(".popup").fadeOut(200),$(".popup__in").removeClass("is-visible"),$(".out").removeClass("is-blurred"),$("body").removeClass("no-overflow"),e()}),$.datepicker.setDefaults($.extend({dateFormat:"dd.mm.yy"},$.datepicker.regional.ru)),$(".datepicker").datepicker({}),$(".js-slick-slider").length&&$(".js-slick-slider").slick({slidesToShow:4,slidesToScroll:4,autoplay:!0,autoplaySpeed:5e3,slide:".slider__item",prevArrow:".slider__prev",nextArrow:".slider__next"}),$(".js-slick-gallery").length&&$(".js-slick-gallery").slick({slidesToShow:1,slidesToScroll:1,adaptiveHeight:!0,prevArrow:".gallery__prev",nextArrow:".gallery__next",asNavFor:".js-slick-carousel"}),$(".js-slick-carousel").length&&$(".js-slick-carousel").slick({slidesToShow:6,slidesToScroll:1,focusOnSelect:!0,arrows:!1,asNavFor:".js-slick-gallery"}),$(".rating__select").barrating("show"),$(".select").on("click",function(s){s.stopPropagation(),s.preventDefault(),e();var i=$(this).find(".select__drop");i.is(":visible")||i.slideDown(200)}),$(".select__drop li").on("click",function(s){if(!$(this).parents(".js-no").length){var i=$(this).attr("data-option"),t=$(this).text(),o=$(this).parents(".select").find(".select__value");o.attr("data-selected-option",i).text(t),e()}}),$(".select__drop").on("click",function(e){e.stopPropagation()});var e=function(){$(".select__drop").slideUp(100)};$(".js-popup-show").on("click",function(e){e.preventDefault(),e.stopPropagation();var s=$("#"+$(this).attr("data-popup")),i=s.find(".popup__in");$("body").addClass("no-overflow"),s.fadeIn(200),setTimeout(function(){i.addClass("is-visible")},200)}),$(".popup__in").on("click",function(e){e.stopPropagation()}),$(".js-popup-hide").on("click",function(e){e.preventDefault(),$(this).parents(".popup__in").removeClass("is-visible"),$(this).parents(".popup").fadeOut(200),$(".out").removeClass("is-blurred"),$("body").removeClass("no-overflow")});var s=$(".js-tabs"),i=s.find(".js-tab").children(),t=s.find(".js-tabcontent").children(),o="is-active";t.not(":first-child").hide(),i.click(function(e){var s=$(this).index();return i.removeClass(o),$(this).addClass(o),t.hide(),t.eq(s).show(),!1}),$(".switch").on("click",function(e){e.preventDefault(),$(this).toggleClass("is-toggle")}),$(".input-number__up").on("click",function(e){var s=$(this).siblings("input").val();s++,$(this).siblings("input").val(s)}),$(".input-number__down").on("click",function(e){var s=$(this).siblings("input").val();s>0&&s--,$(this).siblings("input").val(s)})});