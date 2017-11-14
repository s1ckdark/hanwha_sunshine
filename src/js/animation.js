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

var $svg = $('.circle svg');
$svg.each(function(i){
    var $this = $(this);
    TweenMax.to(this, 2+1*i, {rotate:360,
    bezier: {
    type: "quadratic",
    values:[
      /*p1*/{ x: 0, y: 0 }, { x:2, y: 0 }, { x: 2, y: 2 },
      /*p2*/{ x: 2, y:4}, { x: 0, y: 4 },
      /*p3*/{ x: -2, y: 4 }, { x: -2, y: 2 },
      /*p4*/{ x: -2, y: 0 }, { x: 0, y: 0 }],
    autoRotate: false
  },
  ease: Linear.easeNone,repeat:-1
},0.1*i);
});



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

    
function circleMotion(){

  var $circleObj;
  var CIRCLE_LEN = 7;
  var loopObjArr = [];
  $circleObj = $(".main_contents>.circle>li");
 
  function initPosition(){ 
    for(var i = 0; i < CIRCLE_LEN; ++i){
        var twObj = $($circleObj).eq(i);
        TweenMax.to(twObj, 0, {scale:3, alpha:0});
    }
  }

 function scaleMotion(){
      initPosition()
      for(var i = 3; i >= 0; --i){
          var twObj = $($circleObj).eq(i);
          var goScale = i*0.2+1+0.1;
          TweenMax.to(twObj, 1, {delay:i*0.1, scale:goScale, ease:Cubic.easeInOut});
          TweenMax.to(twObj, 0.8, {delay:i*0.1+0.8, scale:1, ease:Cubic.easeOut});
      }
  }

    function CircleLoopMotion(obj, delay, idx){
        var posxGap = (idx < 3)?20:40;
        var posyGap = 20;
        var angle = 0;
        var speed = parseInt(Math.random()*2) + 2;
        function render(obj, delay, i){
            console.log(obj);
            var posx = 0;
            var posy = 0;
            if(i%2 == 0) posx = Math.sin(angle*Math.PI/180)*posxGap;
            else posy = Math.cos(angle*Math.PI/180)*posyGap;

            TweenMax.to(obj, 0, {delay:delay, x:posx, y:posy});

            angle = (angle + speed);
        }
    }

    function inMotion(){
      for (var i = 0; i < CIRCLE_LEN; ++i) {
       var twObj = $($circleObj).eq(i);
        var gap = 20;
        var plus = (i%2 == 0)?-1:1;
        var posx = parseInt(Math.random()*gap)*plus;
        var posy = parseInt(Math.random()*gap)*plus;

        loopObjArr[i] = new CircleLoopMotion(twObj, i*0.1, i);

        TweenMax.to(twObj, 2, {delay: i * 0.1, scale: 1, x: posx, y: posy, alpha:1, ease:Expo.easeOut})
    }

    
  }

     // function loopMotion(){
     //        for (var i = 0; i < CIRCLE_LEN; ++i) {
     //            var loopObj = loopObjArr[i];
     //            render(i);
     //        }
     //    }
scaleMotion();
inMotion();

  }

circleMotion();

