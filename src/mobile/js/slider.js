/*
* 슬라이더 관련 스크립트
*
* JS Dependencies
* - OwlCarousel2: https://owlcarousel2.github.io/OwlCarousel2
*    - owl.carousel.min.js
* */

$(function(){

  // brand article slider
  //
  var $articleSlider = $('.article-slider').owlCarousel({
    loop: true,
    dots:true,
    lazyLoad: true,
    items:1,
    margin: 20
    });    

  // var $interviewSlider = $('.interview-inner').owlCarousel({
  //   loop: true,
  //   dots:true,
  //   lazyLoad: true,
  //   items:1,
  //   margin: 20,
  //   stagePadding: 50,
  //   });  

$('.interview-slider').on('mousewheel initialized.owl.carousel changed.owl.carousel', function(e) {
    if (!e.namespace)  {
      return;
    }
    var carousel = e.relatedTarget;
    if(carousel.relative(carousel.current()) == 2) {
        TweenMax.from('.item .info-graphic svg', 1, {transformOrigin:'50% 50%',drawSVG:0,opacity:0,delay:1});
        TweenMax.from('.item .textDesc', 1, {transformOrigin:'50% 50%',opacity:0,delay:1});
    }
    $('.counter .activeNum').text(carousel.relative(carousel.current()) + 1);
    $('.counter .totalNum').text(carousel.items().length);
  }).owlCarousel({
    loop:false,
    nav: false,
    dots: false,
    lazyLoad: true,
    items:1,
    });

// var interviewSwiper = new Swiper('.interview-inner ', {
//     pagination: '.swiper-pagination',
//     direction: 'vertical',
//     slidesPerView: 1,
//     paginationClickable: true,
//     spaceBetween: 30,
//     mousewheelControl: true,
//     parallax: true,
//     speed: 600,
// });


// var interviewPix = new Swiper('.interview-slider', {
//         speed: 400,
//     });
});