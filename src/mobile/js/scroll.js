/*
* Scroll 관련 스크립트
*
* JS Dependencies
* - ScrollMagic: http://scrollmagic.io
*    - ScrollMagic.min.js
*    - animation.gsap.min.js
*    - debug.addIndicators.min.js
* - TweenMax: https://greensock.com
*    - TweenMax.min.js
* */ 

// // ScrollMagic 컨트롤러
var controller = new ScrollMagic.Controller();

  // video
  // var $hero_video = $('#hero-video');
  var $video = $('#video1');
  var $twinklebtn = $('#hero .link');

  // $hero_video.find('video').attr({
  //   'src': 'http://cf.c.ooyala.com/BuYnBnZDE6ftRuR_RcUkc5C1p6B_PqgO/DOcJ-FxaFrRg4gtDEwOjFyazpzZzug5m',
  //   'controls':true,
  //   'controlsList':'nodownload',
  //   'preload':'auto',
  //   'loop':false,
  //   'poster': ''
  // });

  $video.find('video').attr({
    'src': 'http://cf.c.ooyala.com/k1dnBnZDE6FwYT2kf0EB33ExJ2ggaDRf/DOcJ-FxaFrRg4gtDEwOmw3OjhiOxS0xX',
    'controls':true,
    'controlsList':'nodownload',
    'preload':'auto',
    'loop':false,
    'poster': ''
  });

  // scroll auto play
  new ScrollMagic.Scene(
    {
      triggerElement: $video[0],
      duration: $video.height(),
    })
    .on('enter leave', function(event){
      var $video = $video;
      var video = $video.find('video')[0];
      var timer;
      var isPlaying = video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2;
      if (event.type === 'enter') {
        timer = setTimeout(function(){ // enter -> leave 이벤트 연속 발생시 play() 방지
          if (!isPlaying) {
            $video.find('.play').click(); // play
          }
        }, 600);
      } else {
        if (timer) {
          clearTimeout(timer);
        }
        if (isPlaying) {
          video.pause(); // pause
        }
      }
    })

//twinkle arrow, hero tween on hero
  var arrowTween = new TimelineMax({paused:true});
  arrowTween.staggerTo($twinklebtn, 1, {opacity:0.3,ease:SteppedEase.config(1),y:'+20',repeat:-1,delay:-1},0.5);

  var $hero = $('.hero-indicator span').children();
  var heroAni = new TimelineMax({paused:true, repeat:-1,repeatDelay:5});
  heroAni.to($hero.eq(1),1, {autoAlpha:1,scale:1,ease: Back.easeInOut},0)
         .to($hero.eq(1),1, {autoAlpha:0,scale:1,ease: Back.easeInOut},2)
         .to($hero.eq(2), 1, {autoAlpha:1,sclae:1}, 1)
         .to($hero.eq(2), 1, {opacity:0,scale:0,ease: Back.easeOut,delay:2},2)
         .fromTo($hero.eq(3), 1, {autoAlpha:0,sclae:0}, {autoAlpha:1,scale:1,ease: Back.easeInOut,zIndex:0}, 2)

 
  new ScrollMagic.Scene(
    {
      triggerElement: $('#hero')[0],
      duration: $('#hero').height(),
    })
    .on('enter leave', function(event){  
      if (event.type === 'enter') {
        arrowTween.play();
        } else {
        arrowTween.pause();
      }

    })
    .addTo(controller);


  new ScrollMagic.Scene(
    {
      triggerElement: '#interview',
      triggerHook:.5
    })
    .on('enter', function(event){  
      TweenMax.to('#interview', .2, {autoAlpha:1})
    })
    .addTo(controller);


var iconTween = new TimelineMax({paused:true});
iconTween.from('.stroke', 1, {stroke:'1px', transformOrigin:"50% 50%"});
 new ScrollMagic.Scene(
    {
      triggerElement: $('.icon')[0]
    })
     .on('enter leave', function(event){  
      if (event.type === 'enter') {
        iconTween.play();
        } else {
        iconTween.pause();
      }

    })
    .addTo(controller);


  scrollToSection();

  
// Section Nav 링크 스크롤링
function scrollToSection () {
  $('.top-indicator .link').on('click', function (e) {
    e.preventDefault();

    var id = $(this).attr('href');
    var $id = $(id);
    var newpos;

    if ($id.length > 0) {
      newpos = $id.offset().top - $('#roof').outerHeight(); // header가 내용을 가리지 않게 위치 조정

      $('html, body').stop().animate({scrollTop: newpos}, 500);

      // if supported by the browser we can even update the URL.
      // if (window.history && window.history.pushState) {
      //   history.pushState('', document.title, id);
      // }
    }
  });
}



function upTween(e, hook){
     var $e = $(e);
     TweenMax.set($e, {opacity:0, y:30});
     // TweenMax.killTweensOf()
     $e.each(function(){
        var $this = this;
        var sectionTitTween = TweenMax.to($this, .8, {opacity:1, y:0});
        var sectionTitScene = new ScrollMagic.Scene({
            triggerElement: $this,
            triggerHook: hook
        })
        .setTween(sectionTitTween)
        .reverse(false)
        .addTo(controller);
});
}

function tweenText(e, hook){
       var $e = $(e);
       // TweenMax.killTweensOf()
       $e.each(function(){
        var $this = this;
        var textTween = new SplitText($this, {type:"lines"});
        var tl = new TimelineMax({paused:true});
        tl.staggerFrom(textTween.lines, 0.5, {opacity:0, cycle:{x:[100, -100]}}, 0.2)
        var textScene = new ScrollMagic.Scene({
            triggerElement: $this,
            triggerHook: hook
        })
        .on('start', function(){
          tl.play();
        })
        .reverse(false)
        .addTo(controller);
});
}

upTween('.text','.5');
tweenText('.heading-1','.5');
tweenText('.heading-2','.5');


//
// origin
//


var pinBouceTween = TweenMax.to('.map_point .pin', .5, {scale:1.2, yoyo:true, repeat:-1,zIndex:11});
new ScrollMagic.Scene(
    {
      triggerElement: '.forestLocation',
      triggerHook: .5,
    })
    // .addIndicators()
    .on('enter', function(){
      $('.map_point .desc').each(function(i){
        var $this = $(this);
        var tl = new TimelineMax({delay:1});
        tl.to($this, .2, {zIndex: 11,autoAlpha:1, top:-80},i*1)
         .fromTo($this.find('.tree'), .2,{autoAlpha:0}, {autoAlpha:1,top:-50,scale:.6}, i*1.1);

         $this.click(function(){
          TweenMax.fromTo($this, .2, {zIndex: '10'},{zIndex: '+=6'});
         })
      })
    })
    .reverse(false)
    // .setTween(pinBouceTween)
    .addTo(controller);

TweenMax.set(['.chart-inner #pie','.chart-inner #textDesc'],{opacity:0,y:-10});
TweenMax.set('.mix-chart', {xPercent:-65,opacity:0});
TweenMax.set('.pie-chart', {xPercent:40,opacity:0});
TweenMax.set('#chart-bar path',{height:0});
var drawtl = new TimelineMax()
    .to('.mix-chart', .5, {xPercent:0,transformOrigin:'0% 0%',ease: Linear.easeOut,opacity:1}, 0.3)
    .to('.chart-inner #chart-bar path', 1, {drawSVG: "0% 100%", transformOrigin:'0% 0%',ease: Bounce.easeOut,opacity:1,height:150,y:'+=10' }, 1.3)
    .to('.chart-inner #chart-point path', 1, {drawSVG: "0% 100%", ease: Bounce.easeOut,opacity:1,y:'+=10' }, 1.6)
    .to('.chart-inner #chart-lines path', 1, {drawSVG: "0% 100%", ease: Bounce.easeOut,opacity:1,y:'+=10' }, 1.6)
    .to('.chart-inner #chart-point path', .1, {autoAlpha:0}, 2.5)
    .to('.chart-inner #point-over', 1, {transformOrigin:"0% 0%",drawSVG: "0% 100%", ease: Bounce.easeOut,opacity:1,y:'-=5' }, 2.5);
  
    new ScrollMagic.Scene(
    {
      triggerElement: '.mix-chart',
      triggerHook: .6,
    })
    // .addIndicators()
    .setTween(drawtl)
    .addTo(controller);

var drawtl2 = new TimelineMax()
    .to('.pie-chart', .5, {xPercent:0,transformOrigin:'100% 0%',ease: Linear.easeOut,opacity:1}, 0.8)
    .to('.chart-inner #pie', 1, {drawSVG: "0% 100%", ease: Bounce.easeOut,opacity:1,y:'+=10' }, 1.8)
    .to('.chart-inner #textDesc', 1, {drawSVG: "0% 100%", ease: Bounce.easeOut,opacity:1,y:'+=10' }, 1.8);

    new ScrollMagic.Scene(
    {
      triggerElement: '.pie-chart',
      triggerHook: .6,
    })
    // .addIndicators()
    .setTween(drawtl2)
    .addTo(controller);

function drawTreeIcon(){
  var $stroke=$('#tree path');
  for(var i=0;i<$stroke.length;i++){
    TweenMax.from($stroke.eq(i), 1, {drawSVG:0,opacity:0, delay:i*.2,ease:Circ.easeInOut, strokeWidth:0});
  }
  TweenMax.to('#contribute .co2', .5, {y:-5, transformOrigin:"50% 50%",yoyo:true,repeat:-1,transformStyle:'preserve-3d',ease:Power0.easeInOut,delay:1})
  TweenMax.to('.arrow-recycle', 3, {rotation:360, transformOrigin:"50% 50%",repeat:-1,ease:Power0.easeInOut,delay:2})
  TweenMax.to('.plant', 1, {scale:0.9,repeat:-1,ease:Power0.easeInOut,delay:2,y:-5,yoyo:true,transformOrigin:"50% 100%"})
}

function drawSpaceIcon(){
  var $stroke=$('#space path');
  for(var i=0;i<$stroke.length;i++){
  TweenMax.from($stroke.eq(i), 1, {drawSVG:0,opacity:0, delay:i*.2});
  TweenMax.to('.planet', 3, {rotation:360, transformOrigin:"50% 50%",repeat:-1,delay:3,transformStyle:'preserve-3d',ease:Power0.easeInOut})
  TweenMax.to('.spaceship', .5, {y:-5, transformOrigin:"50% 50%",yoyo:true,repeat:-1,ease:Quad.easeInOut})
  }
}

    new ScrollMagic.Scene(
    {
      triggerElement:'#info-graphic',
      triggerHook: .6,
    })
    // .addIndicators()
    .on('enter', function(){
      drawTreeIcon();
      drawSpaceIcon();
    })
    .addTo(controller);


function frameAnime(target, duration, frame){
  var anim = {frame:1}, $target = $(target), videoName = $('.hero-intro')[0];
  var videoTween = TweenMax.to(anim, duration , {repeat:-1,frame:"+="+frame, roundProps:"frame", onUpdate:updateHandler });
  function updateHandler() {
    var af= ("00"+anim.frame).slice(-3);
    console.log(af);
  $target.css({"background-image":"url('./img/video/img"+af+".jpg')"}); 
  }
  var  videoArea = {}
  // return cached value
    // function getVideoArea () {
    //     return videoArea.h;
    // }
    // update value
    // function updateVideoArea () {

    //     // videoArea.w = '100vw';
    //     videoArea = $('.hero-intro').height();
    //     $target.css({'height':videoArea});
        
    // }
    // // update on resize
    // $(window).on("resize", updateVideoArea);
    // set initial value
    // updateVideoArea();

     var VideoScene = new ScrollMagic.Scene({
            triggerElement: target,
            triggerHook: 0.5,
            // duration: getVideoArea // set function as duration value
    })
    .setTween(videoTween)
    .addTo(controller);
}
    frameAnime('.hero-intro', 15,30);