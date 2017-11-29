/*
* 화면 애니메이션 관련 스크립트
*
* Tweenmax 라이브러리를 사용하거나 직접 스크립트를 작성합니다.
*
* JS Dependencies
* - TweenMax: https://greensock.com
*    - TweenMax.min.js
* */
  //
  // hero 
  //




function imageTween(ele) {
    // 상단 페이드인 페이드아웃 슬라이드 쇼

    var $slides = $(ele).children();          //slides 
    var currentSlide = 0;               //keep track on the current slide
    var stayTime = 3;               //time the slide stays
    var slideTime = 1.3;                //fade in / fade out time

    TweenMax.set($slides.filter(":gt(0)"), {autoAlpha:0}); //we hide all images after the first one
    TweenMax.delayedCall(stayTime, nextSlide);             //start the slideshow

    function nextSlide(){                   
        TweenMax.to( $slides.eq(currentSlide), slideTime, {autoAlpha:0} );     //fade out the old slide
        currentSlide = ++currentSlide % $slides.length;                         //find out which is the next slide          
        TweenMax.to( $slides.eq(currentSlide), slideTime, {autoAlpha:1} );     //fade in the next slide
        TweenMax.delayedCall(stayTime, nextSlide);                             //wait a couple of seconds before next slide
    }
}

