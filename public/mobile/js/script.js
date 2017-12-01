function imageTween(e){function t(){TweenMax.to(a.eq(o),r,{autoAlpha:0}),o=++o%a.length,TweenMax.to(a.eq(o),r,{autoAlpha:1}),TweenMax.delayedCall(n,t)}var a=$(e).children(),o=0,n=3,r=1.3;TweenMax.set(a.filter(":gt(0)"),{autoAlpha:0}),TweenMax.delayedCall(n,t)}function scrollToSection(){$(".top-indicator .link").on("click",function(e){e.preventDefault();var t,a=$(this).attr("href"),o=$(a);o.length>0&&(t=o.offset().top-$("#roof").outerHeight(),$("html, body").stop().animate({scrollTop:t},500))})}function upTween(e,t){var a=$(e);TweenMax.set(a,{opacity:0,y:30}),a.each(function(){var e=TweenMax.to(this,.8,{opacity:1,y:0});new ScrollMagic.Scene({triggerElement:this,triggerHook:t}).setTween(e).reverse(!1).addTo(controller)})}function tweenText(e,t){$(e).each(function(){var e=new SplitText(this,{type:"lines"}),a=new TimelineMax({paused:!0});a.staggerFrom(e.lines,.5,{opacity:0,cycle:{x:[100,-100]}},.2);new ScrollMagic.Scene({triggerElement:this,triggerHook:t}).on("start",function(){a.play()}).reverse(!1).addTo(controller)})}function drawTreeIcon(){for(var e=$("#tree path"),t=0;t<e.length;t++)TweenMax.from(e.eq(t),1,{drawSVG:0,opacity:0,delay:.2*t,ease:Circ.easeInOut,strokeWidth:0});TweenMax.to("#contribute .co2",.5,{y:-5,transformOrigin:"50% 50%",yoyo:!0,repeat:-1,transformStyle:"preserve-3d",ease:Power0.easeInOut,delay:1}),TweenMax.to(".arrow-recycle",3,{rotation:360,transformOrigin:"50% 50%",repeat:-1,ease:Power0.easeInOut,delay:2}),TweenMax.to(".plant",1,{scale:.9,repeat:-1,ease:Power0.easeInOut,delay:2,y:-5,yoyo:!0,transformOrigin:"50% 100%"})}function drawSpaceIcon(){for(var e=$("#space path"),t=0;t<e.length;t++)TweenMax.from(e.eq(t),1,{drawSVG:0,opacity:0,delay:.2*t}),TweenMax.to(".planet",3,{rotation:360,transformOrigin:"50% 50%",repeat:-1,delay:3,transformStyle:"preserve-3d",ease:Power0.easeInOut}),TweenMax.to(".spaceship",.5,{y:-5,transformOrigin:"50% 50%",yoyo:!0,repeat:-1,ease:Quad.easeInOut})}function frameAnime(e,t,a){var o={frame:1},n=$(e),r=($(".hero-intro")[0],TweenMax.to(o,t,{repeat:-1,frame:"+="+a,roundProps:"frame",onUpdate:function(){var e=o.frame;n.css({"background-image":"url('./img/video/img"+e+".png')"})}}));new ScrollMagic.Scene({triggerElement:e,triggerHook:.5}).setTween(r).addTo(controller)}window.addEventListener("load",function(){$("#more .hanwha_sunshine a").on("click",function(){jatracker("event","clickEvent","한화 그룹 더 보기","한화 그룹 더 보기","한화 그룹 더 보기")}),$("#more .hanwha_solar .a").on("click",function(){jatracker("event","clickEvent","한화 태양광 더보기","한화 태양광 더보기","한화 태양광 더보기")}),$("#more .hanwha_engine .a").on("click",function(){jatracker("event","clickEvent","한화 항공엔진 더보기","한화 항공엔진 더보기","한화 항공엔진 더보기")})}),$(function(){$(".video-play .play").on("click",function(e){e.preventDefault(),$(this).hide().next("video")[0].play()}),TweenMax.set(".item-pop",{scale:0});new TweenMax({paused:!0});$(".popbtn").click(function(){console.log("click");var e=$(this).data("pop"),t=$(e);TweenMax.to(".closebtn",0,{autoAlpha:1}),TweenMax.to(t,.5,{scale:1,ease:Expo.easeInOut,display:"block",className:"+=active",onComplete:function(){TweenMax.to("#viewport",0,{className:"+=noscroll"})}})}),$(".closebtn").click(function(){TweenMax.to(".closebtn",0,{autoAlpha:0}),TweenMax.to($(".item-pop.active"),.5,{scale:0,ease:Expo.easeInOut}),TweenMax.to("#viewport",0,{className:"-=noscroll"}),function(){var e,t=$("#interview");t.length>0&&(e=t.offset().top-$("#roof").outerHeight(),$("html, body").stop().animate({scrollTop:e},500))}()})});var controller=new ScrollMagic.Controller,$video=$("#video1"),$twinklebtn=$("#hero .link");$video.find("video").attr({src:"http://cf.c.ooyala.com/k1dnBnZDE6FwYT2kf0EB33ExJ2ggaDRf/DOcJ-FxaFrRg4gtDEwOmw3OjhiOxS0xX",controls:!0,controlsList:"nodownload",preload:"auto",loop:!1,poster:""}),new ScrollMagic.Scene({triggerElement:$video[0],duration:$video.height()}).on("enter leave",function(e){var t,a=a,o=a.find("video")[0],n=o.currentTime>0&&!o.paused&&!o.ended&&o.readyState>2;"enter"===e.type?t=setTimeout(function(){n||a.find(".play").click()},600):(t&&clearTimeout(t),n&&o.pause())});var arrowTween=new TimelineMax({paused:!0});arrowTween.staggerTo($twinklebtn,1,{opacity:.3,ease:SteppedEase.config(1),y:"+20",repeat:-1,delay:-1},.5);var $hero=$(".hero-indicator span").children(),heroAni=new TimelineMax({paused:!0,repeat:-1,repeatDelay:5});heroAni.to($hero.eq(1),1,{autoAlpha:1,scale:1,ease:Back.easeInOut},0).to($hero.eq(1),1,{autoAlpha:0,scale:1,ease:Back.easeInOut},2).to($hero.eq(2),1,{autoAlpha:1,sclae:1},1).to($hero.eq(2),1,{opacity:0,scale:0,ease:Back.easeOut,delay:2},2).fromTo($hero.eq(3),1,{autoAlpha:0,sclae:0},{autoAlpha:1,scale:1,ease:Back.easeInOut,zIndex:0},2),new ScrollMagic.Scene({triggerElement:$("#hero")[0],duration:$("#hero").height()}).on("enter leave",function(e){"enter"===e.type?arrowTween.play():arrowTween.pause()}).addTo(controller),new ScrollMagic.Scene({triggerElement:"#interview",triggerHook:.5}).on("enter",function(e){TweenMax.to("#interview",.2,{autoAlpha:1})}).addTo(controller);var iconTween=new TimelineMax({paused:!0});iconTween.from(".stroke",1,{stroke:"1px",transformOrigin:"50% 50%"}),new ScrollMagic.Scene({triggerElement:$(".icon")[0]}).on("enter leave",function(e){"enter"===e.type?iconTween.play():iconTween.pause()}).addTo(controller),scrollToSection(),upTween(".text",".5"),tweenText(".heading-1",".5"),tweenText(".heading-2",".5");var pinBouceTween=TweenMax.to(".map_point .pin",.5,{scale:1.2,yoyo:!0,repeat:-1,zIndex:11}),mapTween=new TimelineMax({repeat:-1,repeatDelay:1});$(".map_point .desc").each(function(e){var t=$(this);mapTween.add(TweenMax.to(t,.5,{zIndex:11,autoAlpha:1,top:-80})),mapTween.add(TweenMax.to(t,.2,{autoAlpha:0,delay:1}))}),new ScrollMagic.Scene({triggerElement:".forestLocation",triggerHook:.5}).reverse(!1).setTween(mapTween).addTo(controller),TweenMax.set([".chart-inner #pie",".chart-inner #textDesc"],{opacity:0,y:-10}),TweenMax.set(".mix-chart",{xPercent:-65,opacity:0}),TweenMax.set(".pie-chart",{xPercent:40,opacity:0}),TweenMax.set("#chart-bar path",{height:0});var drawtl=(new TimelineMax).to(".mix-chart",.5,{xPercent:0,transformOrigin:"0% 0%",ease:Linear.easeOut,opacity:1},.3).to(".chart-inner #chart-bar path",1,{drawSVG:"0% 100%",transformOrigin:"0% 0%",ease:Bounce.easeOut,opacity:1,height:150,y:"+=10"},1.3).to(".chart-inner #chart-point path",1,{drawSVG:"0% 100%",ease:Bounce.easeOut,opacity:1,y:"+=10"},1.6).to(".chart-inner #chart-lines path",1,{drawSVG:"0% 100%",ease:Bounce.easeOut,opacity:1,y:"+=10"},1.6).to(".chart-inner #chart-point path",.1,{autoAlpha:0},2.5).to(".chart-inner #point-over",1,{transformOrigin:"0% 0%",drawSVG:"0% 100%",ease:Bounce.easeOut,opacity:1,y:"-=5"},2.5);new ScrollMagic.Scene({triggerElement:".mix-chart",triggerHook:.6}).setTween(drawtl).addTo(controller);var drawtl2=(new TimelineMax).to(".pie-chart",.5,{xPercent:0,transformOrigin:"100% 0%",ease:Linear.easeOut,opacity:1},.8).to(".chart-inner #pie",1,{drawSVG:"0% 100%",ease:Bounce.easeOut,opacity:1,y:"+=10"},1.8).to(".chart-inner #textDesc",1,{drawSVG:"0% 100%",ease:Bounce.easeOut,opacity:1,y:"+=10"},1.8);new ScrollMagic.Scene({triggerElement:".pie-chart",triggerHook:.6}).setTween(drawtl2).addTo(controller),new ScrollMagic.Scene({triggerElement:"#info-graphic",triggerHook:.6}).on("enter",function(){drawTreeIcon(),drawSpaceIcon()}).addTo(controller),$(function(){function e(){(new TimelineMax).from(".triangle .line1",2,{drawSVG:0,strokeWidth:0,opacity:0,delay:1},0).from(".triangle .line2",2,{drawSVG:0,strokeWidth:0,opacity:0,delay:1},2.5).from(".triangle .line3",2,{drawSVG:0,strokeWidth:0,opacity:0,delay:1},5).from(".triangle .arrow",1,{drawSVG:0,strokeWidth:0,opacity:0,delay:.5},5).to(".info-text .text1",1,{autoAlpha:1,onComplete:function(){TweenMax.to(".info-text .text1",0,{delay:1,autoAlpha:0})}},1.5).to(".info-text .text2",1,{autoAlpha:1,onComplete:function(){TweenMax.to(".info-text .text2",0,{delay:1,autoAlpha:0})}},4).to(".info-text .text3",1,{autoAlpha:1,onComplete:function(){TweenMax.to(".info-text .text3",0,{delay:1,autoAlpha:0})}},5.5)}$(".article-slider").owlCarousel({loop:!0,dots:!0,lazyLoad:!0,items:1,margin:20}),$(".interview-inner").owlCarousel({loop:!1,dots:!0,items:1,dotsContainer:".i-nav"});$(".interview-inner").bind("mousewheel DOMMouseScroll",function(e){e.preventDefault()});$(".interview-slider").owlCarousel({loop:!1,nav:!1,dots:!0,items:1,animateOut:"fadeOut",animateIn:"fadeIn"}),$(".color-slider").owlCarousel({loop:!0,dots:!0,lazyLoad:!0,items:1,onInitialized:e,onTranslated:e}),$(".tween-slider").owlCarousel({loop:!0,dots:!0,lazyLoad:!0,items:1,autoplay:!0})});
//# sourceMappingURL=script.js.map
