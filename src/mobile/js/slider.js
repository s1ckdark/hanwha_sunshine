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

  var $interviewInner = $('.interview-inner').owlCarousel({
    loop: true,
    dots:true,
    lazyLoad: true,
    items:1
    });  

  var $interviewSlider =$('.interview-slider').owlCarousel({
    loop:false,
    nav: false,
    dots: false,
    lazyLoad: true,
    items:1
    });

    var $colorSlider = $('.color-slider').owlCarousel({
    loop: true,
    dots:true,
    lazyLoad: true,
    items:1
    });  

    var $tweenSlider = $('.tween-slider').owlCarousel({
    loop: true,
    dots:true,
    lazyLoad: true,
    items:1,
    autoplay:true
    });  
});