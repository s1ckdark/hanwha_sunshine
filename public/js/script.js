function imageTween(e){function a(){TweenMax.to(t.eq(n),l,{autoAlpha:0}),n=++n%t.length,TweenMax.to(t.eq(n),l,{autoAlpha:1}),TweenMax.delayedCall(o,a)}var t=$(e).children(),n=0,o=3,l=1.3;TweenMax.set(t.filter(":gt(0)"),{autoAlpha:0}),TweenMax.delayedCall(o,a)}function scrollToSection(){$(".top-indicator .link").on("click",function(e){e.preventDefault();var a,t=$(this).attr("href"),n=$(t);n.length>0&&(a=n.offset().top-$("#roof").outerHeight(),$("html, body").stop().animate({scrollTop:a},500))})}function upTween(e,a){var t=$(e);TweenMax.set(t,{opacity:0,y:30}),t.each(function(){var e=TweenMax.to(this,.8,{opacity:1,y:0});new ScrollMagic.Scene({triggerElement:this,triggerHook:a}).setTween(e).reverse(!1).addTo(controller)})}function tweenText(e,a){$(e).each(function(){var e=new SplitText(this,{type:"lines"}),t=new TimelineMax({paused:!0});t.staggerFrom(e.lines,.5,{opacity:0,cycle:{x:[100,-100]}},.2);new ScrollMagic.Scene({triggerElement:this,triggerHook:a}).on("start",function(){t.play()}).reverse(!1).addTo(controller)})}var $svg=$(".circle svg");$svg.each(function(e){$(this);TweenMax.to(this,2+1*e,{rotate:360,bezier:{type:"quadratic",values:[{x:0,y:0},{x:2,y:0},{x:2,y:2},{x:2,y:4},{x:0,y:4},{x:-2,y:4},{x:-2,y:2},{x:-2,y:0},{x:0,y:0}],autoRotate:!1},ease:Linear.easeNone,repeat:-1},.1*e)}),window.addEventListener("load",function(){$("#injoongang .article_arrow").on("click",function(){jatracker("event","clickEvent","중앙일보속 김승호 회장이야기","기사 링크 클릭","기사 더 보기")}),$(".btn_readmore").on("click",function(){jatracker("event","clickEvent","중앙일보 속 기사 더보기","기사 링크 클릭","기사 더 보기")}),$("#era .owl-next, #era .owl-prev ").on("click",function(){jatracker("event","clickEvent","연대기","슬라이드 좌우","슬라이드 내용 보기")}),$(".boldbtn").on("click",function(){jatracker("event","clickEvent","연대기","볼드마케팅 버튼 클릭","볼드마케팅 보기")}),$("#more .btn").on("click",function(){jatracker("event","clickEvent","더보기","보령제약 바로가기","보령제약 바로가기")})}),$(function(){$(".video-play .play").on("click",function(e){e.preventDefault(),$(this).hide().next("video")[0].play()});var e=$("#qna");e.length&&(e.find(".q-link").on("click",function(e){e.preventDefault();$(this).parent("li").toggleClass("active").siblings(".active").removeClass("active")}),e.find(".a-content").on("transitionend",function(){var e=$(this).parent();e.hasClass("active")&&$("html, body").stop().animate({scrollTop:e.offset().top-$("#roof").outerHeight()},500)}),e.find("#qna-more").on("click",function(a){a.preventDefault();$(this).hide(),e.find(".hidden").show()})),TweenMax.set(".cardflip",{transformStyle:"preserve-3d"}),TweenMax.set($(".back"),{rotationY:-180}),$.each($(".cardflip"),function(e,a){var t=$(this).children(".front"),n=$(this).children(".back"),o=new TimelineMax({paused:!0});o.to(t,1,{rotationY:180}).to(n,1,{rotationY:0},0).to(a,.5,{z:50},0).to(a,.5,{z:0},.5),a.animation=o}),$(".cardflip").hover(function(){this.animation.play()},function(){this.animation.reverse()});var a=$(".map_pointer");$(".location_desc .desc");a.each(function(e,a){})});var controller=new ScrollMagic.Controller,$video=$("#video"),$twinklebtn=$(".top-indicator .link");$video.find("video").attr({src:"http://cf.c.ooyala.com/15dTkyZDE6hd11k9l-gw1Af3KKt819wk/DOcJ-FxaFrRg4gtDEwOjFyazowODE7G_ ",controls:!0,controlsList:"nodownload",preload:"auto",loop:!1,poster:""}),new ScrollMagic.Scene({triggerElement:$video[0],duration:$video.height()}).on("enter leave",function(e){var a,t=t,n=t.find("video")[0],o=n.currentTime>0&&!n.paused&&!n.ended&&n.readyState>2;"enter"===e.type?a=setTimeout(function(){o||t.find(".play").click()},600):(a&&clearTimeout(a),o&&n.pause())});var arrowTween=new TimelineMax({paused:!0});arrowTween.staggerTo($twinklebtn,1,{opacity:.3,ease:SteppedEase.config(1),y:"+20",repeat:-1,delay:-1},.5);var $hero=$(".hero").children(),heroAni=new TimelineMax({paused:!0,repeat:-1,repeatDelay:5});heroAni.to($hero.eq(1),1,{autoAlpha:1,scale:1,ease:Back.easeInOut},0).to($hero.eq(1),1,{autoAlpha:0,scale:1,ease:Back.easeInOut},2).to($hero.eq(2),1,{autoAlpha:1,sclae:1},1).to($hero.eq(2),1,{opacity:0,scale:0,ease:Back.easeOut,delay:2},2).fromTo($hero.eq(3),1,{autoAlpha:0,sclae:0},{autoAlpha:1,scale:1,ease:Back.easeInOut,zIndex:0},2),new ScrollMagic.Scene({triggerElement:$("#top")[0],duration:$("#top").height()}).on("enter leave",function(e){"enter"===e.type?arrowTween.play():arrowTween.pause()}).addTo(controller);var iconTween=new TimelineMax({paused:!0});iconTween.from(".stroke",1,{stroke:"1px",transformOrigin:"50% 50%"}),new ScrollMagic.Scene({triggerElement:$(".icon")[0]}).on("enter leave",function(e){"enter"===e.type?iconTween.play():iconTween.pause()}).addTo(controller);var bar3d=new TimelineMax({paused:!0});bar3d.fromTo(".bar3d",1,{scale:0},{scale:1,ease:Back.easeOut},.5).fromTo(".bar3d .ship.retangle_bubble",.5,{scale:0},{scale:1,ease:Back.easeOut},1).fromTo(".bar3d .chip.retangle_bubble",.5,{scale:0},{scale:1,ease:Back.easeOut},1.5).fromTo(".bar3d .vehicle.retangle_bubble",.5,{scale:0},{scale:1,ease:Back.easeOut},2).fromTo(".bar3d .medicine.circle_bubble",.5,{scale:0},{scale:1,ease:Back.easeOut},2.5),new ScrollMagic.Scene({triggerElement:$(".market")[0],duration:$(".market").height()}).on("enter leave",function(e){"enter"===e.type?bar3d.play():bar3d.pause()}).addTo(controller);var chartBubble=new TimelineMax({paused:!0});chartBubble.fromTo(".retangle_bubble.s2011",.1,{scale:0,autoAlpha:0},{scale:1,autoAlpha:1,ease:Back.easeOut},.1).fromTo(".retangle_bubble.s2012",.1,{scale:0,autoAlpha:0},{scale:1,autoAlpha:1,ease:Back.easeOut},.2).fromTo(".retangle_bubble.s2013",.1,{scale:0,autoAlpha:0},{scale:1,autoAlpha:1,ease:Back.easeOut},.3).fromTo(".retangle_bubble.s2014",.1,{scale:0,autoAlpha:0},{scale:1,autoAlpha:1,ease:Back.easeOut},.4).fromTo(".retangle_bubble.s2015",.1,{scale:0,autoAlpha:0},{scale:1,autoAlpha:1,ease:Back.easeOut},.5).fromTo(".retangle_bubble.s2016",.1,{scale:0,autoAlpha:0},{scale:1,autoAlpha:1,ease:Back.easeOut},.6).fromTo(".kanarbSales .circle_bubble",.1,{scale:0,autoAlpha:0},{scale:1,autoAlpha:1,ease:Back.easeOut},.7);var chartLine=new TimelineMax({paused:!0,onComplete:function(){chartBubble.play()}});chartLine.staggerFrom("#line path",.1,{drawSVG:"80% 50%"},.1),new ScrollMagic.Scene({triggerElement:".bg_medicine",triggerHook:.5}).on("enter leave",function(e){"enter"===e.type?chartLine.play():chartLine.pause()}).addTo(controller),new ScrollMagic.Scene({triggerElement:".cardflip",triggerHook:.6}).on("enter",function(e){"enter"===e.type&&TweenMax.fromTo($(".cardflip"),1,{rotationY:0},{rotationY:360},.1)}).addTo(controller),scrollToSection(),upTween("p.text",".4"),tweenText(".heading-1",".5"),tweenText(".heading-2",".5");for(var label,tween,$interview=$("#interview"),$slide=$interview.find(".slide"),length=$slide.length,percent=100/length,timeline=new TimelineMax,$sliderInner=$slide,tweens=[],i=0;i<length;i++){i>0&&timeline.to({},1,{}),label=".interview"+(i+1);var $label=$(label).find(".nav a");i>0&&(timeline.to($slide.eq(i-1),.5,{className:"-=active"}),timeline.to($label.eq(i-1),.5,{className:"-=active"})),timeline.to($slide.eq(i),.5,{className:"+=active"}),timeline.to($label.eq(i),.5,{className:"+=active"}),i+1===length&&timeline.to({},1,{})}new ScrollMagic.Scene({triggerElement:$interview[0],triggerHook:0,duration:100*length+"%",offset:-1*$("#roof").height()}).setPin($interview[0]).setTween(timeline).addTo(controller),new ScrollMagic.Scene({triggerElement:".parallax",triggerHook:"onEnter",duration:"200%"}).setTween(".parallax > .bg_parallax",{y:"80%",ease:Linear.easeNone}).addIndicators().addTo(controller),$(function(){$(".article-slider").owlCarousel({loop:!0,dots:!0,lazyLoad:!0,items:1,margin:20}),$(".color-slider").owlCarousel({loop:!1,dots:!0,lazyLoad:!0,items:1,animateOut:"slideOutUp",animateIn:"slideInUp"});$(".interview-slider").on("initialized.owl.carousel changed.owl.carousel",function(e){if(e.namespace){var a=e.relatedTarget;$(".counter .activeNum").text(a.relative(a.current())+1),$(".counter .totalNum").text(a.items().length)}}).owlCarousel({loop:!1,nav:!1,dots:!1,lazyLoad:!0,items:1})});
//# sourceMappingURL=script.js.map
