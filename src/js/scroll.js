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

// ScrollMagic 컨트롤러
var controller = new ScrollMagic.Controller();

  // video
  var $hero_video = $('#hero-video');
  var $video = $('#video1');
  var $twinklebtn = $('#hero .link');

  $hero_video.find('video').attr({
    'src': 'http://cf.c.ooyala.com/BuYnBnZDE6ftRuR_RcUkc5C1p6B_PqgO/DOcJ-FxaFrRg4gtDEwOjFyazpzZzug5m',
    'controls':true,
    'controlsList':'nodownload',
    'preload':'auto',
    'loop':true,
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
  }});
}

scrollToSection();

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
      timeline.to($slide.eq(i-1), 0, {className: '-=active'}, label); 
      timeline.to($label.eq(i-1), 0, {className: '-=active'}, label); 
    }
    timeline.to($slide.eq(i), 0, {className: '+=active'}, label); // 현재 슬라이드 보이기
    timeline.to($label.eq(i), 0, {className: '+=active'}, label); // 현재 슬라이드 보이기
    if (i + 1 === length) {// 마지막 슬라이드
      timeline.to({}, 1, {}); // delay
    }
  }

  new ScrollMagic.Scene(
    {
      triggerElement: $interview[0],
      triggerHook: 0,
      duration: 100 * length * 1.2 + '%', // 너무 빨리 지나가지 않게 1.2배 조정
      offset: $('#roof').height() * -1
    })
    .setPin($interview[0])
    .setTween(timeline)
    // .on("progress", function(e){
    //       var current = Math.floor(e.progress * 100);
    //       console.log(current);
    //       if(current >0 && current <9) {
    //         $('.active.slide').find('.interview-slider').trigger('to.owl.carousel', 0);
    //       } else if(current >= 9 && current < 18) {
    //           $('.active.slide').find('.interview-slider').trigger('to.owl.carousel', 1);
    //       } else if( current >= 18 && current < 28) {
    //           $('.active.slide').find('.interview-slider').trigger('to.owl.carousel', 2);
    //       } else if(current >= 28 && current < 36) {
    //           $('.active.slide').find('.interview-slider').trigger('to.owl.carousel', 0);
    //       } else if( current >= 36 && current < 45) {
    //           $('.active.slide').find('.interview-slider').trigger('to.owl.carousel', 1);
    //       } else if(current >= 45 && current < 56) {
    //           $('.active.slide').find('.interview-slider').trigger('to.owl.carousel', 2);
    //       } else if(current >= 56 && current < 65) {
    //           $('.active.slide').find('.interview-slider').trigger('to.owl.carousel', 0);
    //       } else if( current >= 65 && current < 74) {
    //           $('.active.slide').find('.interview-slider').trigger('to.owl.carousel', 1);
    //       } else if(current >= 74 && current < 85) {
    //           $('.active.slide').find('.interview-slider').trigger('to.owl.carousel', 2);
    //       } else if(current >= 85 && current < 90) {
    //           $('.active.slide').find('.interview-slider').trigger('to.owl.carousel', 0);
    //       } else if( current >= 90 && current < 95) {
    //           $('.active.slide').find('.interview-slider').trigger('to.owl.carousel', 1);
    //       } else if(current >= 95 && current < 100) {
    //           $('.active.slide').find('.interview-slider').trigger('to.owl.carousel', 2);
    //       } 
      // })
    .addTo(controller);
    // console.log($slide.height());


}

interviewTween();
// background parallax scrolling
    

var pinBouceTween = TweenMax.to('.map_point .pin', .5, {scale:1.2, yoyo:true, repeat:-1});
new ScrollMagic.Scene(
    {
      triggerElement: '.forestLocation',
      triggerHook: .5,
    })
    // .addIndicators()
  .on('enter', function(){
       $('.map_point .pin').each(function(i){
        var $this = $('.map_point .desc');
        var tl = new TimelineMax({delay:1, repeatDelay:6,repeat:-1});
        // for(var j=0;$this.length;j++){
        tl.fromTo($this.eq(i), .2,{autoAlpha:0}, {zIndex: 50,autoAlpha:1, top:-120, height:90, left:-142.5,ease:Circ.easeIn},i*1)
            // .to(pinSelf.next('.desc').find('.numText'), .2, {autoAlpha:1})
            // .to(pinSelf.next('.desc').find('.text'), .2, {autoAlpha:1})
         .fromTo($this.eq(i).find('.tree'), .2,{autoAlpha:0}, {autoAlpha:1,top:-64, onComplete:function(){
          TweenMax.to($this.eq(i), .2, {autoAlpha:0,delay:2});
        }}, i*1.1);
       // }
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
    .to('.chart-inner #chart-bar path', 1, {drawSVG: "0% 100%", transformOrigin:'0% 0%',ease: Bounce.easeOut,opacity:1,height:150,y:'+=5' }, 1.3)
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

function slideTween(){
  var $area = $('.energy');
  var $dots = $area.find('.owl-dot');
  var $slider = $area.find('.color-slider');
  var $slide = $slider.find('.item');
  var length = $slide.length;
  var timeline;

  var $stroke=$('#indicator-line path');
  var ds = 0.2, ls=1;
  var drawTween = new TimelineMax({paused:true});
  drawTween.from($stroke.eq(0),  ls,  {drawSVG:0,opacity:0, ease: Linear.none, strokeWidth:0}, 0)
    .to('.sunshine', 1, {position:'absolute',left:'10%',top:'15%',ease:Linear.easeIn})
    .from($stroke.eq(1), ls,  {drawSVG:0,opacity:0, ease: Linear.none, strokeWidth:0}, ls)
    .from($stroke.eq(2), ds,  {drawSVG:0,opacity:0, ease: Linear.none, strokeWidth:0}, ls + ds*1)
    .from($stroke.eq(3), ds,  {drawSVG:0,opacity:0, ease: Linear.none, strokeWidth:0}, ls + ds*2)
    .from($stroke.eq(4), ds,  {drawSVG:0,opacity:0, ease: Linear.none, strokeWidth:0}, ls + ds*3)
    .from($stroke.eq(5), ls,  {drawSVG:0,opacity:0, ease: Linear.none, strokeWidth:0}, ls + ds*4)
    .from($stroke.eq(6), ds,  {drawSVG:0,opacity:0, ease: Linear.none, strokeWidth:0}, ls + ds*5)
    .from($stroke.eq(7), ds,  {drawSVG:0,opacity:0, ease: Linear.none, strokeWidth:0}, 2*ls + ds*1)
    .from($stroke.eq(8), ds,  {drawSVG:0,opacity:0, ease: Linear.none, strokeWidth:0}, 2*ls + ds*2)
    .from($stroke.eq(9), ds,  {drawSVG:0,opacity:0, ease: Linear.none, strokeWidth:0}, 2*ls + ds*3)
    .from($stroke.eq(10), ds, {drawSVG:0,opacity:0, ease: Linear.none, strokeWidth:0}, 2*ls + ds*4)
    .from($stroke.eq(11), ds, {drawSVG:0,opacity:0, ease: Linear.none, strokeWidth:0}, 2*ls + ds*5)
    .to('.sunshine', 1, {position:'absolute',left:'10%',top:'15%',ease:Linear.easeIn,autoAlpha:1},0)
    .to($slide.find('.icon-panel'), .5, {y:'-=5',autoAlpha:1}, ls)
    .to($slide.find('.icon-panel .descText'), .1, {autoAlpha: 1,ease:Bounce.easeInOut},ls+ds) // svg 나타나기
    .to($slide.find('.icon-electronics'), .5, {y:'-=5',autoAlpha:1},ls+ds*2)
    .to($slide.find('.icon-electronics .descText'), .1, {autoAlpha: 1,ease:Bounce.easeInOut},ls + ds*3) // svg 나타나기
    .to($slide.find('.icon-food'), .5, {y:'-=5',autoAlpha:1},2*ls + ds*2)
    .to($slide.find('.icon-food .descText'), .1, {autoAlpha: 1,ease:Bounce.easeInOut},2*ls + ds*2); // svg 나타나기
  // svg 트윈 시작하기
  function playTween(index){
    if (index !== null) {
      drawTween.restart(); // play 최초만 실행. 계속 실행하려면 restart로 변경.
    }
  }

  TweenMax.set([$slide, $slide.find('.descText'), $area.find('.sunshine')], {autoAlpha: 0});
  TweenMax.set([$slide.find('.icon-panel'), $slide.find('.icon-electronics'), $slide.find('.icon-food')], {y:'+=5',autoAlpha: 0});
  timeline = new TimelineMax({delay:.1});
  for (var i = 0; i < length; i++) {
     timeline.to($slide.eq(i), .2, {autoAlpha: 1});
     timeline.to($dots.eq(i), 0, {className: '+=active'});
     timeline.to($slide.eq(i).find('.graphics'), 0,{className: '+=active'});
     timeline.call(playTween, [i]); // play tween
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
      duration: 100 * length + '%', // 너무 빨리 지나가지 않게 1.2배 조정
      offset: $('#roof').height() * -1,
    })
    .setPin($area[0])
    .setTween(timeline)
    .addTo(controller);


}
slideTween();