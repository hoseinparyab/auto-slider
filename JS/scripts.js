 //--> slider five
 $('.image-slider').slick({
     slidesToShow: 3,
     dots: true,
     slidesToScroll: 1,
     autoplay: true,
     autoplaySpeed: 1000,
     pauseOnDotsHover: true,
     arrows: false,
 });
 //  play /pause slider
 $('#pause_btn').click(function () {
     $('.image-slider').slick('slickPause');
     $('#play_btn').removeClass('control-slider__btn--active')
     $(this).addClass('control-slider__btn--active');
 });

 $('#play_btn').click(function () {
     $('.image-slider').slick('slickPlay');
     $('#pause_btn').removeClass('control-slider__btn--active');
     $(this).addClass('control-slider__btn--active');

 });