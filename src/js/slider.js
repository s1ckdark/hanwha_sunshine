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
    margin: 20,
    autoplay:true,
    autoplaySpeed:300
    });  

var interviewSlider = $('.interview-slider');
interviewSlider.owlCarousel({
    loop:false,
    nav: false,
    dots: false,
    items:1,
    rewind:false,
    // autoplay: true,
    autoplaySpeed:300,
    startPosition:0,
    onInitialized  : counter, //When the plugin has initialized.
    onTranslated : counter, //When the translation of the stage has finished.
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
});

function counter(event) {
   var element   = event.target;         
    var items     = event.item.count;     // Number of items
    var item      = event.item.index + 1;     // Position of the current item
  $('.counter .activeNum').html(item);
  $('.counter .totalNum').html(items);
}

  var $tweenSlider = $('.tweenSlider .owl-carousel').owlCarousel({
    loop: true,
    dots:true,
    lazyLoad: true,
    items:1,
    // autoplay:true,
    autoplaySpeed:300
    });  


});