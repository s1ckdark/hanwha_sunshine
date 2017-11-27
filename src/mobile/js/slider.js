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
    loop:true,
    dots:true,
    lazyLoad: true,
    items:1
    });  

  $('.interview-inner').bind('mousewheel DOMMouseScroll', function(e) {
    e.preventDefault();
  });
  var $interviewSlider =$('.interview-slider').owlCarousel({
    loop:false,
    nav: false,
    dots: true,
    lazyLoad: true,
    items:1
    });

    var $colorSlider = $('.color-slider').owlCarousel({
    loop: true,
    dots:true,
    lazyLoad: true,
    items:1,
    onInitialized  : tweenSl, //When the plugin has initialized.
    onTranslated : tweenSl //When the translation of the stage has finished.
    });  

    function tweenSl(){
        TweenMax.from('.triangle .line1', 1, {transformOrigin:'50% 50%',drawSVG:0,strokeWidth:0,opacity:0,delay:.5});
        TweenMax.from('.triangle .line2', 1, {transformOrigin:'50% 50%',drawSVG:0,strokeWidth:0,opacity:0,delay:.5});
        TweenMax.from('.triangle .line3', 1, {transformOrigin:'50% 50%',drawSVG:0,strokeWidth:0,opacity:0,delay:.5});
        TweenMax.from('.triangle .arrow', 1, {transformOrigin:'50% 50%',drawSVG:0,strokeWidth:0,opacity:0,delay:.5});
        TweenMax.to('.info-text .text1', 1, {opacity:0},{opacity:1,delay:1});
        TweenMax.to('.info-text .text2', 1, {opacity:0},{opacity:1,delay:1});
        TweenMax.to('.info-text .text3', 1, {opacity:0},{opacity:1,delay:1});
    }

    var $tweenSlider = $('.tween-slider').owlCarousel({
    loop: true,
    dots:true,
    lazyLoad: true,
    items:1,
    autoplay:true,
      margin: 20
    });  
});