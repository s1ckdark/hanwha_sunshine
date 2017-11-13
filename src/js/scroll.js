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
  var $video = $('#video');
  var $twinklebtn = $('.top-indicator .link');

  $video.find('video').attr({
    'src': 'http://cf.c.ooyala.com/15dTkyZDE6hd11k9l-gw1Af3KKt819wk/DOcJ-FxaFrRg4gtDEwOjFyazowODE7G_ ',
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

  var $hero = $('.hero').children();
  var heroAni = new TimelineMax({paused:true, repeat:-1,repeatDelay:5});
  heroAni.to($hero.eq(1),1, {autoAlpha:1,scale:1,ease: Back.easeInOut},0)
         .to($hero.eq(1),1, {autoAlpha:0,scale:1,ease: Back.easeInOut},2)
         .to($hero.eq(2), 1, {autoAlpha:1,sclae:1}, 1)
         .to($hero.eq(2), 1, {opacity:0,scale:0,ease: Back.easeOut,delay:2},2)
         .fromTo($hero.eq(3), 1, {autoAlpha:0,sclae:0}, {autoAlpha:1,scale:1,ease: Back.easeInOut,zIndex:0}, 2)

 
  new ScrollMagic.Scene(
    {
      triggerElement: $('#top')[0],
      duration: $('#top').height(),
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

var bar3d = new TimelineMax({paused:true});
bar3d.fromTo('.bar3d',1,{scale:0},{scale:1,ease:Back.easeOut},.5)
     .fromTo('.bar3d .ship.retangle_bubble',.5,{scale:0},{scale:1,ease:Back.easeOut},1)
     .fromTo('.bar3d .chip.retangle_bubble',.5,{scale:0},{scale:1,ease:Back.easeOut},1.5)
     .fromTo('.bar3d .vehicle.retangle_bubble',.5,{scale:0},{scale:1,ease:Back.easeOut},2)
     .fromTo('.bar3d .medicine.circle_bubble',.5,{scale:0},{scale:1,ease:Back.easeOut},2.5)

 
  new ScrollMagic.Scene(
    {
      triggerElement: $('.market')[0],
      duration: $('.market').height(),
    })
     .on('enter leave', function(event){  
      if (event.type === 'enter') {
        bar3d.play();
        } else {
        bar3d.pause();
      }

    })
    .addTo(controller);
var chartBubble = new TimelineMax({paused:true});
chartBubble
     .fromTo('.retangle_bubble.s2011',.1,{scale:0,autoAlpha:0},{scale:1,autoAlpha:1,ease:Back.easeOut},.1)
     .fromTo('.retangle_bubble.s2012',.1,{scale:0,autoAlpha:0},{scale:1,autoAlpha:1,ease:Back.easeOut},.2)
     .fromTo('.retangle_bubble.s2013',.1,{scale:0,autoAlpha:0},{scale:1,autoAlpha:1,ease:Back.easeOut},.3)
     .fromTo('.retangle_bubble.s2014',.1,{scale:0,autoAlpha:0},{scale:1,autoAlpha:1,ease:Back.easeOut},.4)
     .fromTo('.retangle_bubble.s2015',.1,{scale:0,autoAlpha:0},{scale:1,autoAlpha:1,ease:Back.easeOut},.5)
     .fromTo('.retangle_bubble.s2016',.1,{scale:0,autoAlpha:0},{scale:1,autoAlpha:1,ease:Back.easeOut},.6)
     .fromTo('.kanarbSales .circle_bubble',.1,{scale:0,autoAlpha:0},{scale:1,autoAlpha:1,ease:Back.easeOut},.7);

var chartLine = new TimelineMax({paused:true,onComplete:function(){chartBubble.play();}});
chartLine.staggerFrom("#line path", .1, {drawSVG:"80% 50%"}, .1);


  new ScrollMagic.Scene(
    {
      triggerElement: '.bg_medicine',
      triggerHook:.5,
    })
     .on('enter leave', function(event){  
      if (event.type === 'enter') {
        chartLine.play();
        } else {
        chartLine.pause();
      }
    })
    .addTo(controller);

  new ScrollMagic.Scene(
    {
      triggerElement: '.cardflip',
      triggerHook:.6
    })
     .on('enter', function(event){  
      if (event.type === 'enter') {
          TweenMax.fromTo($(".cardflip"), 1, {rotationY:0}, {rotationY:360}, 0.1);
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

upTween('p.text','.4');
tweenText('.heading-1','.5');
tweenText('.heading-2','.5');

//
// interview scroll pin
// 
var interviewTween = function(){
var $interview = $('#interview');
var $slide = $interview.find('.slide');
var length = $slide.length;
var percent = 100 / length;
var timeline = new TimelineMax();
var $sliderInner = $slide;
var label;
var tweens = [];
var tween;


//   for (var j = 0; j < length; j++) {
//     tween = new SplitText($slide.eq(j).find('.text'));
//     tween = new TimelineMax({paused: true}).staggerFrom(tween.chars, .2, {opacity: 0, y: 10}, .1);
//     tweens.push(tween);
//   }

// function playTween(index){
//     if (index !== null) {
//       tweens[index].play(); // play 최초만 실행. 계속 실행하려면 restart로 변경.
//     }
//   }

for (var i = 0; i < length; i++) {
    if (i > 0) {// 두번째 슬라이드부터 이동하기
      timeline.to({}, 1, {}); // delay
      // timeline.to($slide.eq(i), 1, {yPercent: 100 * i, delay: 0, ease: Linear.easeNone});
    }
    label = '.interview' + (i+1); // ex) slide1
    // timeline.add(label);
    var $label = $(label).find('.nav a');
    // timeline.call(playTween, [i]);
    if (i > 0) { // 두번째 슬라이드부터 이전 것 숨기기
      timeline.to($slide.eq(i-1), .5, {className: '-=active'})
      timeline.to($label.eq(i-1), .5, {className: '-=active'})
    }
    timeline.to($slide.eq(i), .5, {className: '+=active'}); // 현재 슬라이드 보이기
    timeline.to($label.eq(i), .5, {className: '+=active'}); // 현재 슬라이드 보이기
    if (i + 1 === length) {// 마지막 슬라이드
      timeline.to({}, 1, {}); // delay
    }
  }
new ScrollMagic.Scene(
    {
      triggerElement: $interview[0],
      triggerHook: 0,
      duration: 100 * length + '%',
      offset: $('#roof').height() * -1
    })
    .setPin($interview[0])
    .setTween(timeline)
    .addTo(controller);
}
interviewTween();

// background parallax scrolling

new ScrollMagic.Scene(
    {
      triggerElement: ".parallax",
      triggerHook: "onEnter", 
      duration: "200%"
    })
    .setTween(".parallax > .bg_parallax", {y: "80%", ease: Linear.easeNone})
    .addIndicators()
    .addTo(controller);



//
// origin
//

var slideTween = function(){
  var $slider = $('.color-slider');
  var $item = $slider.find('.item');  
  var length = $item.length;
  // var percent = 100 / length;
  var timeline = new TimelineMax();
  var $sliderInner = $item;
  var label;
  var tweens = [];
  var tween;


// //   for (var j = 0; j < length; j++) {
// //     tween = new SplitText($item.eq(j).find('.text'));
// //     tween = new TimelineMax({paused: true}).staggerFrom(tween.chars, .2, {opacity: 0, y: 10}, .1);
// //     tweens.push(tween);
// //   }

// // function playTween(index){
// //     if (index !== null) {
// //       tweens[index].play(); // play 최초만 실행. 계속 실행하려면 restart로 변경.
// //     }
// //   }

for (var i = 0; i < length; i++) {
    if (i > 0) {// 두번째 슬라이드부터 이동하기
      timeline.to({}, 1, {}); // delay
      timeline.to($item.eq(i), 1, {yPercent: 100 * i, delay: 0, ease: Linear.easeNone});
    }
    label = 'slide' + (i+1); // ex) slide1
    timeline.add(label);
    // var $label = $(label).find('.nav a');
    // timeline.call(playTween, [i]);
    if (i > 0) { // 두번째 슬라이드부터 이전 것 숨기기
      timeline.to($item.eq(i-1), .5, {className: '-=active'})
      // timeline.to($label.eq(i-1), .5, {className: '-=active'})
    }
    timeline.to($item.eq(i), .5, {className: '+=active'}); // 현재 슬라이드 보이기
    // timeline.to($label.eq(i), .5, {className: '+=active'}); // 현재 슬라이드 보이기
    if (i + 1 === length) {// 마지막 슬라이드
      timeline.to({}, 1, {}); // delay
    }
  }

new ScrollMagic.Scene(
    {
      triggerElement: '.color-slider-section',
      triggerHook: 0,
      duration: 100 * length + '%',
      offset: $('#roof').height() * -1
    })
     .setPin('.color-slider-section')
     .addIndicators()
     .setTween(timeline)
    .addTo(controller);
}
slideTween();