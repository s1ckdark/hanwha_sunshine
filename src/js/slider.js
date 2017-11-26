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
interviewSlider.on('initialized.owl.carousel changed.owl.carousel', function(e) {
    if (!e.namespace)  {
      return;
    }
    // console.log(e);
  }).owlCarousel({
    loop:false,
    nav: false,
    dots: false,
    startPosition: 0,
    items:1,
    rewind: false,
    onInitialized  : counter, //When the plugin has initialized.
    onTranslated : counter //When the translation of the stage has finished.
});

var is = $('.interview.active .interview-slider');
is.on('mousewheel', '.interview.active', function(e) {
    var curr = $(this);
    console.log(e);
   if (e.deltaY > 0) {
      curr.trigger('next.owl');
   } else {
      curr.trigger('prev.owl');
   }
   e.preventDefault();
});


function counter(event) {
   var element   = event.target;         // DOM element, in this example .owl-carousel
    var items     = event.item.count;     // Number of items
    var item      = event.item.index + 1;     // Position of the current item
  $('.counter .activeNum').html(item);
  $('.counter .totalNum').html(items);

   if(item == 3) {
        TweenMax.from('.item .info-graphic svg', 1, {transformOrigin:'50% 50%',drawSVG:0,strokeWidth:0,opacity:0,delay:.5});
        TweenMax.from('.item .textDesc', 1, {transformOrigin:'50% 50%',strokeWidth:0,opacity:0,delay:.6});
    }
}


  var $tweenSlider = $('.tweenSlider .owl-carousel').owlCarousel({
    loop: true,
    dots:true,
    lazyLoad: true,
    items:1,
    autoplay:true,
    margin:20,
    autoplaySpeed:300
    });  


});