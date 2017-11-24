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

// window.addEventListener('load', initScrollMagic);

// function initScrollMagic() {
//   // 4C 인재 텍스트 색상 채우기
//   var $person4c = $('#person-4c-color');
//   new ScrollMagic.Scene(
//     {
//       triggerElement: $person4c[0],
//       offset: -50,
//     })
//     .setTween($person4c, .8, {width: '100%', ease: Linear.easeNone})
//     .addTo(controller);

//   // 로버트의 말 텍스트 색상 채우기
//   var $robertQuote = $('#robert-quote');
//   var $robertQuoteText = $robertQuote.find('.color');
//   var rqTimeline = new TimelineMax()
//     .to($robertQuoteText.eq(0), .8, {width: '100%'})
//     .to($robertQuoteText.eq(1), 1.0, {width: '100%'})
//     .to($robertQuoteText.eq(2), 1.5, {width: '100%'});
//   new ScrollMagic.Scene(
//     {
//       triggerElement: $robertQuote[0]
//     })
//     .setTween(rqTimeline)
//     .addTo(controller);

  // video
  var $hero_video = $('#hero-video');
  var $video = $('#video1');
  var $twinklebtn = $('#hero .link');

  $hero_video.find('video').attr({
    'src': 'http://cf.c.ooyala.com/BuYnBnZDE6ftRuR_RcUkc5C1p6B_PqgO/DOcJ-FxaFrRg4gtDEwOjFyazpzZzug5m',
    'controls':true,
    'controlsList':'nodownload',
    'preload':'auto',
    'loop':false,
    'poster': ''
  });

  $video.find('video').attr({
    'src': 'http://cf.c.ooyala.com/k1dnBnZDE6FwYT2kf0EB33ExJ2ggaDRf/DOcJ-FxaFrRg4gtDEwOjFyazpzZzug5m',
    'controls':true,
    'controlsList':'nodownload',
    'preload':'auto',
    'loop':false,
    'poster': ''
  });

    // scroll auto play
  var $videos = $('.video-play');
  $videos.each(function(){
    var $this = $(this);
    var $videos = $this.find('video');
    new ScrollMagic.Scene(
      {
          triggerElement: this,
          duration: $this.height()
      })
      .on('enter leave', function(event){
        var $video = $this;
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
      .addTo(controller);
  });



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

upTween('p.text','.6');
upTween('p.text-intro','.6');
tweenText('.heading-1','.6');
tweenText('.heading-2','.6');
tweenText('.heading','.6');

//
// interview scroll pin
// 
function interviewTween(e) {
  
  var $interview = $('#interview');
  var $slide = $interview.find('.slide');
  var length = $slide.length;
  var percent = 100 / length;
  var timeline = new TimelineMax();
  var $sliderInner = $slide;
  var label;
  var tweens = [];
  var tween;

  for (var j = 0; j < length; j++) {
    tween = new SplitText($slide.eq(j).find('.heading'));
    tween = new TimelineMax({paused: true}).staggerFrom(tween.chars, .2, {opacity: 0, y: 10}, .1);
    tweens.push(tween);
  }

function playTween(index){
    if (index !== null) {
      tweens[index].play(); // play 최초만 실행. 계속 실행하려면 restart로 변경.
    }
  }

  for (var i = 0; i < length; i++) {
    if (i > 0) {// 두번째 슬라이드부터 이동하기
      timeline.to({}, 1, {}); // delay
      timeline.to($slide.eq(i), 1, {zIndex:10, delay: 0, ease: Linear.easeNone});
    }
    label = '.interview' + (i+1); // ex) slide1
    // timeline.add(label);
    var $label = $(label).find('.nav a');
    timeline.call(playTween, [i]);
    if (i > 0) { // 두번째 슬라이드부터 이전 것 숨기기
      timeline.to($slide.eq(i-1), 0, {className: '-=active'})
      timeline.to($label.eq(i-1), 0, {className: '-=active'})
    }
    timeline.to($slide.eq(i), 0, {className: '+=active'}); // 현재 슬라이드 보이기
    timeline.to($label.eq(i), 0, {className: '+=active'}); // 현재 슬라이드 보이기
    if (i + 1 === length) {// 마지막 슬라이드
      timeline.to({}, 1, {}); // delay
    }
  }

  new ScrollMagic.Scene(
    {
      triggerElement: $interview[0],
      triggerHook: 0,
      duration: 100 * length * 1.2 + '%', 
      offset: $('#roof').height() * -1
    })
    .setPin($interview[0])
    .setTween(timeline)
    .on('progress', function(e){
          var current = Math.floor(e.progress * 100)%25;
          console.log(current);
          if(current >0 && current <8) {
            $('.interview.active .interview-slider').trigger('to.owl.carousel', 0);
          } else if(current >= 8 && current < 16) {
             $('.interview.active .interview-slider').trigger('to.owl.carousel', 1);
          } else if( current >= 16 && current < 24) {
             $('.interview.active .interview-slider').trigger('to.owl.carousel', 2);
          }
      })
    .addTo(controller);
}
//   $.fn.scrollEnd = function(callback, timeout) {          
//   $(this).scroll(function(){
//     var $this = $(this);
//     if ($this.data('scrollTimeout')) {
//       clearTimeout($this.data('scrollTimeout'));
//     }
//     $this.data('scrollTimeout', setTimeout(callback,timeout));
//   });
// };


interviewTween();
// background parallax scrolling

new ScrollMagic.Scene(
    {
      triggerElement: ".parallax",
      triggerHook: "onEnter", 
      duration: "200%"
    })
    .setTween(".parallax > .bg_parallax", {y: "80%", ease: Linear.easeNone})
    // .addIndicators()
    .addTo(controller);
//
// origin
//

// function slideTween() {
//   var $area = $('.energy');
//   var $dots = $area.find('.owl-dot');
//   var $slide = $('.color-slider');
//   var $item = $slide.find('.item');  
//   var length = $item.length;
//   // var $owldots = $('.energy .owl-dots');
//   // var percent = 100 / length;
//   var timeline = new TimelineMax();
//   var $sliderInner = $item;
//   var label;
//   var tweens = [];
//   var tween;

//   var $stroke=$('#indicator-line path');
//   var ds = 0.2, ls=2;
//   var drawTween = new TimelineMax({paused:true});
//       drawTween.from($stroke.eq(0),  ls,  {drawSVG:0,opacity:0, ease: Linear.none, strokeWidth:0}, 0)
//     .from($stroke.eq(1), ds,  {drawSVG:0,opacity:0, ease: Linear.none, strokeWidth:0}, ls)
//     .from($stroke.eq(2), ds,  {drawSVG:0,opacity:0, ease: Linear.none, strokeWidth:0}, ls + ds*1)
//     .from($stroke.eq(3), ds,  {drawSVG:0,opacity:0, ease: Linear.none, strokeWidth:0}, ls + ds*2)
//     .from($stroke.eq(4), ds,  {drawSVG:0,opacity:0, ease: Linear.none, strokeWidth:0}, ls + ds*3)
//     .from($stroke.eq(5), ds,  {drawSVG:0,opacity:0, ease: Linear.none, strokeWidth:0}, 9.5)
//     .from($stroke.eq(6), ls,  {drawSVG:0,opacity:0, ease: Linear.none, strokeWidth:0}, 10)
//     .from($stroke.eq(7), ds,  {drawSVG:0,opacity:0, ease: Linear.none, strokeWidth:0}, 14)
//     .from($stroke.eq(8), ds,  {drawSVG:0,opacity:0, ease: Linear.none, strokeWidth:0}, 14)
//     .from($stroke.eq(9), ds,  {drawSVG:0,opacity:0, ease: Linear.none, strokeWidth:0}, 14.4)
//     .from($stroke.eq(10), ds,  {drawSVG:0,opacity:0, ease: Linear.none, strokeWidth:0}, 14.6)
//     .from($stroke.eq(11), ds,  {drawSVG:0,opacity:0, ease: Linear.none, strokeWidth:0}, 14.8);

// // //   for (var j = 0; j < length; j++) {
// // //     tween = new SplitText($item.eq(j).find('.text'));
// // //     tween = new TimelineMax({paused: true}).staggerFrom(tween.chars, .2, {opacity: 0, y: 10}, .1);
// // //     tweens.push(tween);
// // //   }
//  //    tweens.push(drawTween);
//  // function playTween(index){
//  //     if (index !== null) {
//  //       tweens[index].play(); // play 최초만 실행. 계속 실행하려면 restart로 변경.
//  //     }
//  //   }



// for (var i = 0; i < length; i++) {
//     if (i > 0) {// 두번째 슬라이드부터 이동하기
//       timeline.to({}, 1, {}); // delay
//       timeline.to($item.eq(i), 1, {zIndex:10, delay: 0, ease: Linear.easeNone});
//     }
//     label = 'slide' + (i+1); // ex) slide1
//     timeline.add(label);
//     // var $label = $(label).find('.nav a');
//     // drawTween.play();
//     if (i > 0) { // 두번째 슬라이드부터 이전 것 숨기기
//       timeline.to($item.eq(i-1), .5, {className: '-=active'})
//       // timeline.to($owldots.eq(i-1).find('.owl-dot'), .5, {className: '-=active'})
//       // timeline.to('.energy', .5, {className: '-=active'})
//       // timeline.to($label.eq(i-1), .5, {className: '-=active'})
//     }
//     timeline.to($item.eq(i), .5, {className: '+=active'}); // 현재 슬라이드 보이기
//     // timeline.to($owldots.eq(i).find('.owl-dot'), .5, {className: '+=active'}); // 현재 슬라이드 보이기
//     // timeline.to($label.eq(i), .5, {className: '+=active'}); // 현재 슬라이드 보이기
//     if (i + 1 === length) {// 마지막 슬라이드
//       timeline.to({}, 1, {}); // delay
//     }
//   }
//   // svg 트윈 시작하기
//   function playTween(index){
//     if (index !== null) {
//       drawTween.restart(); // play 최초만 실행. 계속 실행하려면 restart로 변경.
//     }
//   }

//   TweenMax.set([$slide, $slide.find('.descText')], {autoAlpha: 0});
//   timeline = new TimelineMax({delay: .1});
//   for (var j = 0; j < length; j++) {
//      timeline.to($slide.eq(j), .2, {autoAlpha: 1});
//      // timeline.to($dots.eq(j), 0, {className: '+=active'});
//      timeline.staggerFrom($slide.eq(j).find('.descText'), .4, {y: 30,autoAlpha:1}, 1); // 글자 트윈
//      timeline.call(playTween, [j]); // play tween
//      timeline.from($slide.eq(j).find('.icon'), .1, {autoAlpha: 0}); // svg 나타나기
//      timeline.to({}, 1.5, {}); // delay
//     if (j + 1 !== length) {// 마지막 슬라이드 제외
//       timeline.to($slide.eq(j), 0, {autoAlpha: 0});
//       timeline.to($dots.eq(j), 0, {className: '-=active'});
//     }
//   }

// new ScrollMagic.Scene(
//     {
//       triggerElement: '.energy',
//       triggerHook: 0,
//       duration: 100 * length + '%',
//       offset: $('#roof').height() * -1
//     })
//      .setPin('.energy')
     // .addIndicators()
//      .setTween(timeline)
//      .addTo(controller);
// }
//  slideTween();



var pinBouceTween = TweenMax.to('.map_point .pin', .5, {scale:1.2, yoyo:true, repeat:-1});
new ScrollMagic.Scene(
    {
      triggerElement: '.forestLocation',
      triggerHook: .5,
    })
    // .addIndicators()
    .on('enter', function(){
      $('.map_point .pin').each(function(i){
        var $this = $(this);
        var tl = new TimelineMax({repeatDelay:1});
        tl.fromTo($this.next('.desc'), .2,{autoAlpha:0}, {zIndex: 50,autoAlpha:1, top:-120, height:90, left:-142.5},i*1.5)
            // .to(pinSelf.next('.desc').find('.numText'), .2, {autoAlpha:1})
            // .to(pinSelf.next('.desc').find('.text'), .2, {autoAlpha:1})
         .fromTo($this.next('.desc').find('.tree'), .2,{autoAlpha:0}, {autoAlpha:1,top:-64, onComplete:function(){
          TweenMax.to($this.next('.desc'), .2, {autoAlpha:0,delay:1});
        }}, i*1.6);
      })
    })
    .reverse(false)
    // .setTween(pinBouceTween)
    .addTo(controller);

   $('.map_point .pin').each(function(index, element){

        var pinSelf = $(this);

        var pinDescTimeline = new TimelineMax({paused:true})
            .to(pinSelf,.1, {scale:2})
            .to(pinSelf.next('.desc'), .6, {zIndex: 50,autoAlpha:1, top:-120, height:90, left:-142.5})
            // .to(pinSelf.next('.desc').find('.numText'), .2, {autoAlpha:1})
            // .to(pinSelf.next('.desc').find('.text'), .2, {autoAlpha:1})
            .to(pinSelf.next('.desc').find('.tree'), .2, {autoAlpha:1,top:-64});

        pinSelf.hover(
            function() {
                pinDescTimeline.restart();
            },
            function() {
                pinDescTimeline.reverse(0.2);
            }
        );
    });

TweenMax.set(['.chart-inner #pie','.chart-inner #textDesc'],{opacity:0,y:-10});
TweenMax.set('.mix-chart', {xPercent:-65,opacity:0});
TweenMax.set('.pie-chart', {xPercent:40,opacity:0});
TweenMax.set('#chart-bar path',{height:0});
var drawtl = new TimelineMax()
    .to('.mix-chart', .5, {xPercent:0,transformOrigin:'0% 0%',ease: Linear.easeOut,opacity:1}, 0.3)
    .to('.chart-inner #chart-bar path', 1, {drawSVG: "0% 100%", transformOrigin:'0% 0%',ease: Bounce.easeOut,opacity:1,height:150,y:'+=10' }, 1.3)
    .to('.chart-inner #chart-point path', 1, {drawSVG: "0% 100%", ease: Bounce.easeOut,opacity:1,y:'+=10' }, 1.6)
    .to('.chart-inner #chart-lines path', 1, {drawSVG: "0% 100%", ease: Bounce.easeOut,opacity:1,y:'+=10' }, 1.6)
    .to('.chart-inner #point-over', 1, {transformOrigin:"0% 0%",drawSVG: "0% 100%", ease: Bounce.easeOut,opacity:1,y:'-=5' }, 2.5)
    .to('.pie-chart', .5, {xPercent:0,transformOrigin:'100% 0%',ease: Linear.easeOut,opacity:1}, 0.8)
    .to('.chart-inner #pie', 1, {drawSVG: "0% 100%", ease: Bounce.easeOut,opacity:1,y:'+=10' }, 1.8)
    .to('.chart-inner #textDesc', 1, {drawSVG: "0% 100%", ease: Bounce.easeOut,opacity:1,y:'+=10' }, 1.8);

    new ScrollMagic.Scene(
    {
      triggerElement: '.chart-inner',
      triggerHook: .6,
    })
    // .addIndicators()
    .setTween(drawtl)
    .addTo(controller);

function drawTreeIcon(){
  var $stroke=$('#tree path');
  for(var i=0;i<$stroke.length;i++){
    TweenMax.from($stroke.eq(i), 1, {drawSVG:0,opacity:0, delay:i*.2,ease:Circ.easeInOut, strokeWidth:0});
  }
  TweenMax.to('.co2', .5, {y:-5, transformOrigin:"50% 50%",yoyo:true,repeat:-1,transformStyle:'preserve-3d',ease:Power0.easeInOut,delay:1})
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



    // .to('.active .icon-panel .icon', .5,{y:'-=5',ease:Bounce.easeIn,opacity:1,delay:1})
    // .to('.active .icon-electronics .icon', .5,{y:'-=5',ease:Bounce.easeIn,opacity:1,delay:4})
    // .to('.active .icon-food .icon', .5,{y:'-=5',ease:Bounce.easeIn,opacity:1,delay:8});


// var cohe=$('.color-slider').height();
// new ScrollMagic.Scene(
//     {
//       triggerElement:'.energy-value',
//       triggerHook: 0,
//       duration: cohe,
//       offset: $('#roof').height() * -1
//     })
//     .setPin('.color-slider')
    // .addIndicators()
//     .addTo(controller);

// new ScrollMagic.Scene(
//     {
//       triggerElement:'.energy-value',
//       triggerHook: 0,
//       duration: cohe,
//       offset: $('#roof').height() * -1
//     })
//     .setPin('.color-slider .owl-item.active')
    // .addIndicators()
//     .on('enter', function(){
//       drawLine();
//     })
//     .addTo(controller);        

// var drawTweens = [];
// window.addEventListener('load', function(){
//   // svg 트윈 만들기
//   var tween;
//   // svg 1번
//   tween = new TimelineMax({paused: true})
//   // 노트북 안 강아지
//     .from('#as1-dog', .4, {y: 200})
//     .add('label1')
//     .from('#as1-clip', .4, {y: -200}, 0) // as1-dog 용 clip도 같이 움직여줘야 함.
//     // 말풍선
//     .from('#as1-mung', .4, {scale: 0, x: 80, y: 60, transformOrigin: 'center center'})
//     // 하트
//     .from('#as1-heart', .4, {scale: 0, rotation: -30, x: 80, y: 60, transformOrigin: 'center center'})
//     // 선
//     .staggerFrom('#as1-line line', .1, {opacity: 0}, .1)
//     // 계속 움직이는 트윈
//     .add(new TimelineMax({yoyo: true, repeat: -1})
//       .to('#as1-dog', 4, {y: 10, ease: Elastic.easeOut})
//       .to('#as1-clip', 4, {y: -10, ease: Elastic.easeOut}, 0)
//       , 'label1'
//     )
//   ;
//   drawTweens.push(tween);
//   // svg 2번
//   tween = new TimelineMax({paused: true})
//   // 손가락
//     .from('#as2-hand', .4, {y: 100})
//     // 원
//     .from('#as2-circle', .4, {scale: 0, transformOrigin: 'center center'}, '-=.2')
//     // 강아지
//     .from('#as2-dog', .4, {scale: 0, transformOrigin: 'center center'})
//     // .from('#as2-dog-c', .4, {scale: 0, transformOrigin: 'center center'})
//     // .staggerFrom(['#as2-dog-c1', '#as2-dog-c2', '#as2-dog-c3'], .1, {scale: 0, transformOrigin: 'center center'}, .1)
//     .add('label1')
//     // 문서
//     .from('#as2-doc', .4, {scale: 0, rotation: '-45_ccw', x: -50, y: -50, transformOrigin: 'right bottom'})
//     .staggerFrom('#as2-doc-line line', .1, {opacity: 0}, .1)
//     // 말풍선
//     .from('#as2-talk', .4, {x: 30, scale: 0, transformOrigin: 'center center'})
//     .staggerFromTo('#as2-talk line', .3, {strokeDashoffset: 50, strokeDasharray: 50}, {strokeDashoffset: 0}, .2)
//     // 계속 움직이는 트윈
//     .add(new TimelineMax({yoyo: true, repeat: -1})
//       .to('#as2-dog', 4, {rotation: 6, transformOrigin: 'center top'})
//       , 'label1'
//     )
//   ;
//   drawTweens.push(tween);
//   // svg 3번
//   tween = new TimelineMax({paused: true})
//   // 손
//     .from('#as3-hand1', .5, {x: -100, y: -100, rotation: -45, transformOrigin: 'center center'})
//     .from('#as3-hand2', .5, {x: 100, y: 100, rotation: -45, transformOrigin: 'center center'}, 0)
//     // 원
//     .add('label1')
//     .from('#as3-circle1', .5, {scale: 0, transformOrigin: 'center center'})
//     .from('#as3-line1', .5, {scale: 0, transformOrigin: 'right bottom'}, 'label1')
//     .set('#as3-circle2', {x: -10}, 'label1')
//     .from('#as3-circle2', .5, {scale: 0, transformOrigin: 'center center'}, 'label1')
//     .from('#as3-line2', .5, {scale: 0, transformOrigin: 'left bottom'}, 'label1')
//     .add('label2')
//     // 선
//     .staggerFrom('#as3-line line', .1, {opacity: 0}, .1)
//     // 계속 움직이는 트윈
//     .add(new TimelineMax({yoyo: true, repeat: -1})
//       .to(['#as3-circle1', '#as3-circle2'], 1, {scale: 1.1, transformOrigin: 'center center', ease: Linear.none})
//       , 'label2'
//     )
//   ;
//   drawTweens.push(tween);
// });

window.addEventListener('load', function(){
  var $area = $('.energy');
  var $dots = $area.find('.owl-dot');
  var $slider = $area.find('.color-slider');
  var $slide = $slider.find('.item');
  var length = $slide.length;
  var timeline;

  var $stroke=$('#indicator-line path');
  var ds = 0.1, ls=1;
  var drawTween = new TimelineMax({paused:true});
      drawTween.from($stroke.eq(0),  ls,  {drawSVG:0,opacity:0, ease: Linear.none, strokeWidth:0}, 0)
    .from($stroke.eq(1), ds,  {drawSVG:0,opacity:0, ease: Linear.none, strokeWidth:0}, ls)
    .from($stroke.eq(2), ds,  {drawSVG:0,opacity:0, ease: Linear.none, strokeWidth:0}, ls + ds*1)
    .from($stroke.eq(3), ds,  {drawSVG:0,opacity:0, ease: Linear.none, strokeWidth:0}, ls + ds*2)
    .from($stroke.eq(4), ds,  {drawSVG:0,opacity:0, ease: Linear.none, strokeWidth:0}, ls + ds*3)
    .from($stroke.eq(5), ds,  {drawSVG:0,opacity:0, ease: Linear.none, strokeWidth:0}, ls + ds*4)
    .from($stroke.eq(6), ls,  {drawSVG:0,opacity:0, ease: Linear.none, strokeWidth:0}, ls + ds*5)
    .from($stroke.eq(7), ds,  {drawSVG:0,opacity:0, ease: Linear.none, strokeWidth:0}, 2*ls + ds*1)
    .from($stroke.eq(8), ds,  {drawSVG:0,opacity:0, ease: Linear.none, strokeWidth:0}, 2*ls + ds*2)
    .from($stroke.eq(9), ds,  {drawSVG:0,opacity:0, ease: Linear.none, strokeWidth:0}, 2*ls + ds*3)
    .from($stroke.eq(10), ds, {drawSVG:0,opacity:0, ease: Linear.none, strokeWidth:0}, 2*ls + ds*4)
    .from($stroke.eq(11), ds, {drawSVG:0,opacity:0, ease: Linear.none, strokeWidth:0}, 2*ls + ds*5);
  // svg 트윈 시작하기
  function playTween(index){
    if (index !== null) {
      drawTween.restart(); // play 최초만 실행. 계속 실행하려면 restart로 변경.
    }
  }

  TweenMax.set([$slide, $slide.find('.descText')], {autoAlpha: 0});
  TweenMax.set([$slide.find('.icon-panel'), $slide.find('.icon-electronics'), $slide.find('.icon-food')], {y:'+=5',autoAlpha: 0});
  timeline = new TimelineMax({delay: .1});
  for (var i = 0; i < length; i++) {
     timeline.to($slide.eq(i), .2, {autoAlpha: 1});
     timeline.to($dots.eq(i), 0, {className: '+=active'});
     timeline.to('.sunshine', 1, {position:'absolute',left:'10%',top:'15%',ease:Linear.easeIn});
     timeline.call(playTween, [i]); // play tween
     timeline.to($slide.eq(i).find('.graphics'), 0,{className: '+=active'});
     timeline.staggerTo($slide.eq(i).find('.icon-panel'), .5, {y:'-=5',autoAlpha:1});
     timeline.to($slide.eq(i).find('.icon-panel .descText'), .1, {autoAlpha: 1,ease:Bounce.easeInOut}); // svg 나타나기
     timeline.staggerTo($slide.eq(i).find('.icon-electronics'), .5, {y:'-=5',autoAlpha:1});
     timeline.to($slide.eq(i).find('.icon-electronics .descText'), .1, {autoAlpha: 1,ease:Bounce.easeInOut}); // svg 나타나기
     timeline.staggerTo($slide.eq(i).find('.icon-food'), .5, {y:'-=5',autoAlpha:1});
     timeline.to($slide.eq(i).find('.icon-food .descText'), .1, {autoAlpha: 1,ease:Bounce.easeInOut}); // svg 나타나기
     timeline.to({}, 1.5, {}); // delay
    if (i + 1 !== length) {// 마지막 슬라이드 제외
      timeline.to($slide.eq(i), 0, {autoAlpha: 0});
      timeline.to($dots.eq(i), 0, {className: '-=active'});
    }
  }

  new ScrollMagic.Scene(
    {
      triggerElement: $area[0],
      triggerHook: 0,
      duration: 100 * length * 1.5 + '%', // 너무 빨리 지나가지 않게 1.2배 조정
      offset: $('#roof').height() * -1,
    })
    .setPin($area[0])
    .setTween(timeline)
    .addTo(controller);
});