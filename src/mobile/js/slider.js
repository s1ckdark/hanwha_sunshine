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
    items:1,
    dotsContainer: '.i-nav'
    });  

  $('.interview-inner').bind('mousewheel DOMMouseScroll', function(e) {
    e.preventDefault();
  });
  var $interviewSlider =$('.interview-slider').owlCarousel({
    loop:false,
    nav: false,
    dots: true,
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
        var tl = new TimelineMax()
        .from('.triangle .line1', 2, {drawSVG:0,strokeWidth:0,opacity:0,delay:1},0)
        .from('.triangle .line2', 2, {drawSVG:0,strokeWidth:0,opacity:0,delay:1},2.5)
        .from('.triangle .line3', 2, {drawSVG:0,strokeWidth:0,opacity:0,delay:1},5)
        .from('.triangle .arrow', 1, {drawSVG:0,strokeWidth:0,opacity:0,delay:.5},5)
        .to('.info-text .text1', 1 ,{autoAlpha:1, onComplete:function(){
           TweenMax.to('.info-text .text1', 0, {delay:1,autoAlpha:0}); 
        }},1.5)
        .to('.info-text .text2', 1, {autoAlpha:1, onComplete:function(){
           TweenMax.to('.info-text .text2', 0, {delay:1,autoAlpha:0}); 
        }},4)
        .to('.info-text .text3', 1, {autoAlpha:1, onComplete:function(){
           TweenMax.to('.info-text .text3', 0, {delay:1,autoAlpha:0}); 
        }},5.5);
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