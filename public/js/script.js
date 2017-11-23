function imageTween(e){function a(){TweenMax.to(t.eq(o),r,{autoAlpha:0}),o=++o%t.length,TweenMax.to(t.eq(o),r,{autoAlpha:1}),TweenMax.delayedCall(n,a)}var t=$(e).children(),o=0,n=3,r=1.3;TweenMax.set(t.filter(":gt(0)"),{autoAlpha:0}),TweenMax.delayedCall(n,a)}function circleMotion(){var e,a=7,t=[];e=$(".main_contents>.circle>li"),function(){!function(){for(var t=0;t<a;++t){var o=$(e).eq(t);TweenMax.to(o,0,{scale:3,alpha:0})}}();for(var t=3;t>=0;--t){var o=$(e).eq(t),n=.2*t+1+.1;TweenMax.to(o,1,{delay:.1*t,scale:n,ease:Cubic.easeInOut}),TweenMax.to(o,.8,{delay:.1*t+.8,scale:1,ease:Cubic.easeOut})}}(),function(){for(var o=0;o<a;++o){var n=$(e).eq(o),r=o%2==0?-1:1,i=parseInt(20*Math.random())*r,c=parseInt(20*Math.random())*r;t[o]=new function(e,a,t){parseInt(2*Math.random())}(n,.1*o,o),TweenMax.to(n,2,{delay:.1*o,scale:1,x:i,y:c,alpha:1,ease:Expo.easeOut})}}()}function scrollToSection(){$(".top-indicator .link").on("click",function(e){e.preventDefault();var a,t=$(this).attr("href"),o=$(t);o.length>0&&(a=o.offset().top-$("#roof").outerHeight(),$("html, body").stop().animate({scrollTop:a},500))})}function upTween(e,a){var t=$(e);TweenMax.set(t,{opacity:0,y:30}),t.each(function(){var e=TweenMax.to(this,.8,{opacity:1,y:0});new ScrollMagic.Scene({triggerElement:this,triggerHook:a}).setTween(e).reverse(!1).addTo(controller)})}function tweenText(e,a){$(e).each(function(){var e=new SplitText(this,{type:"lines"}),t=new TimelineMax({paused:!0});t.staggerFrom(e.lines,.5,{opacity:0,cycle:{x:[100,-100]}},.2);new ScrollMagic.Scene({triggerElement:this,triggerHook:a}).on("start",function(){t.play()}).reverse(!1).addTo(controller)})}function interviewTween(e){for(var a,t,o=$("#interview"),n=o.find(".slide"),r=n.length,i=new TimelineMax,c=[],l=0;l<r;l++)t=new SplitText(n.eq(l).find(".heading")),t=new TimelineMax({paused:!0}).staggerFrom(t.chars,.2,{opacity:0,y:10},.1),c.push(t);for(var s=0;s<r;s++){s>0&&(i.to({},1,{}),i.to(n.eq(s),1,{zIndex:10,delay:0,ease:Linear.easeNone})),a=".interview"+(s+1);var d=$(a).find(".nav a");i.call(function(e){null!==e&&c[e].play()},[s]),s>0&&(i.to(n.eq(s-1),.5,{className:"-=active"}),i.to(d.eq(s-1),.5,{className:"-=active"})),i.to(n.eq(s),.5,{className:"+=active"}),i.to(d.eq(s),.5,{className:"+=active"}),s+1===r&&i.to({},1,{})}new ScrollMagic.Scene({triggerElement:o[0],triggerHook:0,duration:100*r*2+"%",offset:-1*$("#roof").height()}).setPin(o[0]).setTween(i).on("progress",function(e){var a=Math.floor(100*e.progress)%25;console.log(a),a>0&&a<8?$(".interview.active .interview-slider").trigger("to.owl.carousel",0):a>=8&&a<16?$(".interview.active .interview-slider").trigger("to.owl.carousel",1):a>=16&&a<24&&$(".interview.active .interview-slider").trigger("to.owl.carousel",2)}).addTo(controller)}function slideTween(){for(var e,a=$(".color-slider").find(".item"),t=a.length,o=new TimelineMax,n=0;n<t;n++)n>0&&(o.to({},1,{}),o.to(a.eq(n),1,{zIndex:10,delay:0,ease:Linear.easeNone})),e="slide"+(n+1),o.add(e),n>0&&(o.to(a.eq(n-1),.5,{className:"-=active"}),o.to(a.eq(n-1).find(".panel-size"),.5,{className:"-=active"})),o.to(a.eq(n),.5,{className:"+=active"}),o.to(a.eq(n).find(".panel-size"),.5,{className:"+=active"}),n+1===t&&o.to({},1,{});new ScrollMagic.Scene({triggerElement:".energy",triggerHook:0,duration:100*t+"%",offset:-1*$("#roof").height()}).setPin(".energy").addIndicators().setTween(o).addTo(controller)}function drawTreeIcon(){for(var e=$("#tree path"),a=0;a<e.length;a++)TweenMax.from(e.eq(a),1,{drawSVG:0,opacity:0,delay:.2*a,ease:Circ.easeInOut,strokeWidth:0});TweenMax.to(".co2",.5,{y:-5,transformOrigin:"50% 50%",yoyo:!0,repeat:-1,transformStyle:"preserve-3d",ease:Power0.easeInOut,delay:1}),TweenMax.to(".arrow-recycle",3,{rotation:360,transformOrigin:"50% 50%",repeat:-1,ease:Power0.easeInOut,delay:2}),TweenMax.to(".plant",1,{scale:.9,repeat:-1,ease:Power0.easeInOut,delay:2,y:-5,yoyo:!0,transformOrigin:"50% 100%"})}function drawSpaceIcon(){for(var e=$("#space path"),a=0;a<e.length;a++)TweenMax.from(e.eq(a),1,{drawSVG:0,opacity:0,delay:.2*a}),TweenMax.to(".planet",3,{rotation:360,transformOrigin:"50% 50%",repeat:-1,delay:3,transformStyle:"preserve-3d",ease:Power0.easeInOut}),TweenMax.to(".spaceship",.5,{y:-5,transformOrigin:"50% 50%",yoyo:!0,repeat:-1,ease:Quad.easeInOut})}function drawLine(){TweenMax.set(".active .icon",{y:5,opacity:0});for(var e=$("#indicator-line path"),a=0;a<e.length;a++)TweenMax.from(e.eq(a),.5,{drawSVG:0,opacity:0,delay:1.2*a,ease:Circ.easeInOut,strokeWidth:0});TweenMax.to(".active .icon-panel .icon",.5,{y:"-=5",ease:Bounce.easeIn,opacity:1,delay:1}),TweenMax.to(".active .icon-electronics .icon",.5,{y:"-=5",ease:Bounce.easeIn,opacity:1,delay:4}),TweenMax.to(".active .icon-food .icon",.5,{y:"-=5",ease:Bounce.easeIn,opacity:1,delay:8})}circleMotion(),window.addEventListener("load",function(){$("#injoongang .article_arrow").on("click",function(){jatracker("event","clickEvent","중앙일보속 김승호 회장이야기","기사 링크 클릭","기사 더 보기")}),$(".btn_readmore").on("click",function(){jatracker("event","clickEvent","중앙일보 속 기사 더보기","기사 링크 클릭","기사 더 보기")}),$("#era .owl-next, #era .owl-prev ").on("click",function(){jatracker("event","clickEvent","연대기","슬라이드 좌우","슬라이드 내용 보기")}),$(".boldbtn").on("click",function(){jatracker("event","clickEvent","연대기","볼드마케팅 버튼 클릭","볼드마케팅 보기")}),$("#more .btn").on("click",function(){jatracker("event","clickEvent","더보기","보령제약 바로가기","보령제약 바로가기")})}),$(function(){$(".video-play .play").on("click",function(e){e.preventDefault(),$(this).hide().next("video")[0].play()});var e=$("#qna");e.length&&(e.find(".q-link").on("click",function(e){e.preventDefault();$(this).parent("li").toggleClass("active").siblings(".active").removeClass("active")}),e.find(".a-content").on("transitionend",function(){var e=$(this).parent();e.hasClass("active")&&$("html, body").stop().animate({scrollTop:e.offset().top-$("#roof").outerHeight()},500)}),e.find("#qna-more").on("click",function(a){a.preventDefault();$(this).hide(),e.find(".hidden").show()})),TweenMax.set(".cardflip",{transformStyle:"preserve-3d"}),TweenMax.set($(".back"),{rotationY:-180}),$.each($(".cardflip"),function(e,a){var t=$(this).children(".front"),o=$(this).children(".back"),n=new TimelineMax({paused:!0});n.to(t,1,{rotationY:180}).to(o,1,{rotationY:0},0).to(a,.5,{z:50},0).to(a,.5,{z:0},.5),a.animation=n}),$(".cardflip").hover(function(){this.animation.play()},function(){this.animation.reverse()})});var controller=new ScrollMagic.Controller,$hero=$("#hero-video"),$video=$("#video"),$twinklebtn=$(".hero .link");$hero.find("video").attr({src:"http://cf.c.ooyala.com/BuYnBnZDE6ftRuR_RcUkc5C1p6B_PqgO/DOcJ-FxaFrRg4gtDEwOjFyazpzZzug5m",controls:!0,controlsList:"nodownload",preload:"auto",loop:!1,poster:""}),$video.find("video").attr({src:"http://cf.c.ooyala.com/k1dnBnZDE6FwYT2kf0EB33ExJ2ggaDRf/DOcJ-FxaFrRg4gtDEwOjFyazpzZzug5m",controls:!0,controlsList:"nodownload",preload:"auto",loop:!1,poster:""}),new ScrollMagic.Scene({triggerElement:$video[0],duration:$video.height()}).on("enter leave",function(e){var a,t=t,o=t.find("video")[0],n=o.currentTime>0&&!o.paused&&!o.ended&&o.readyState>2;"enter"===e.type?a=setTimeout(function(){n||t.find(".play").click()},600):(a&&clearTimeout(a),n&&o.pause())});var arrowTween=new TimelineMax({paused:!0});arrowTween.staggerTo($twinklebtn,1,{opacity:.3,ease:SteppedEase.config(1),y:"+20",repeat:-1,delay:-1},.5);var $hero=$(".hero").children(),heroAni=new TimelineMax({paused:!0,repeat:-1,repeatDelay:5});heroAni.to($hero.eq(1),1,{autoAlpha:1,scale:1,ease:Back.easeInOut},0).to($hero.eq(1),1,{autoAlpha:0,scale:1,ease:Back.easeInOut},2).to($hero.eq(2),1,{autoAlpha:1,sclae:1},1).to($hero.eq(2),1,{opacity:0,scale:0,ease:Back.easeOut,delay:2},2).fromTo($hero.eq(3),1,{autoAlpha:0,sclae:0},{autoAlpha:1,scale:1,ease:Back.easeInOut,zIndex:0},2),new ScrollMagic.Scene({triggerElement:$("#top")[0],duration:$("#top").height()}).on("enter leave",function(e){"enter"===e.type?arrowTween.play():arrowTween.pause()}).addTo(controller);var iconTween=new TimelineMax({paused:!0});iconTween.from(".stroke",1,{stroke:"1px",transformOrigin:"50% 50%"}),new ScrollMagic.Scene({triggerElement:$(".icon")[0]}).on("enter leave",function(e){"enter"===e.type?iconTween.play():iconTween.pause()}).addTo(controller);var chartBubble=new TimelineMax({paused:!0});chartBubble.fromTo(".retangle_bubble.s2011",.1,{scale:0,autoAlpha:0},{scale:1,autoAlpha:1,ease:Back.easeOut},.1).fromTo(".retangle_bubble.s2012",.1,{scale:0,autoAlpha:0},{scale:1,autoAlpha:1,ease:Back.easeOut},.2).fromTo(".retangle_bubble.s2013",.1,{scale:0,autoAlpha:0},{scale:1,autoAlpha:1,ease:Back.easeOut},.3).fromTo(".retangle_bubble.s2014",.1,{scale:0,autoAlpha:0},{scale:1,autoAlpha:1,ease:Back.easeOut},.4).fromTo(".retangle_bubble.s2015",.1,{scale:0,autoAlpha:0},{scale:1,autoAlpha:1,ease:Back.easeOut},.5).fromTo(".retangle_bubble.s2016",.1,{scale:0,autoAlpha:0},{scale:1,autoAlpha:1,ease:Back.easeOut},.6).fromTo(".kanarbSales .circle_bubble",.1,{scale:0,autoAlpha:0},{scale:1,autoAlpha:1,ease:Back.easeOut},.7);var chartLine=new TimelineMax({paused:!0,onComplete:function(){chartBubble.play()}});chartLine.staggerFrom("#line path",.1,{drawSVG:"80% 50%"},.1),new ScrollMagic.Scene({triggerElement:".bg_medicine",triggerHook:.5}).on("enter leave",function(e){"enter"===e.type?chartLine.play():chartLine.pause()}).addTo(controller),new ScrollMagic.Scene({triggerElement:".cardflip",triggerHook:.6}).on("enter",function(e){"enter"===e.type&&TweenMax.fromTo($(".cardflip"),1,{rotationY:0},{rotationY:360},.1)}).addTo(controller),scrollToSection(),upTween("p.text",".4"),tweenText(".heading-1",".5"),tweenText(".heading-2",".5"),$.fn.scrollEnd=function(e,a){$(this).scroll(function(){var t=$(this);t.data("scrollTimeout")&&clearTimeout(t.data("scrollTimeout")),t.data("scrollTimeout",setTimeout(e,a))})},interviewTween(),new ScrollMagic.Scene({triggerElement:".parallax",triggerHook:"onEnter",duration:"200%"}).setTween(".parallax > .bg_parallax",{y:"80%",ease:Linear.easeNone}).addIndicators().addTo(controller);var pinBouceTween=TweenMax.to(".map_point .pin",.5,{scale:1.2,yoyo:!0,repeat:-1});new ScrollMagic.Scene({triggerElement:".forestLocation",triggerHook:.5}).addIndicators().setTween(pinBouceTween).addTo(controller),$(".map_point .pin").each(function(e,a){var t=$(this),o=new TimelineMax({paused:!0}).to(t,.1,{scale:2}).to(t.next(".desc"),.6,{zIndex:50,autoAlpha:1,top:-120,height:90,left:-142.5}).to(t.next(".desc").find(".tree"),.2,{autoAlpha:1,top:-64});t.hover(function(){o.restart()},function(){o.reverse(.2)})}),TweenMax.set([".chart-inner svg path",".chart-inner svg text"],{opacity:0,y:-10}),TweenMax.set(".mix-chart",{xPercent:-65,opacity:0}),TweenMax.set(".pie-chart",{xPercent:40,opacity:0}),TweenMax.set("#chart-bar path",{height:0});var drawtl=(new TimelineMax).to(".mix-chart",1,{xPercent:0,transformOrigin:"0% 0%",ease:Linear.easeOut,opacity:1},.3).to(".chart-inner #chart-bar path",1,{drawSVG:"0% 100%",transformOrigin:"0% 0%",ease:Bounce.easeOut,opacity:1,height:150,y:"+=10"},1.3).to(".chart-inner #chart-point path",1,{drawSVG:"0% 100%",ease:Bounce.easeOut,opacity:1,y:"+=10"},1.6).to(".chart-inner #chart-lines path",1,{drawSVG:"0% 100%",ease:Bounce.easeOut,opacity:1,y:"+=10"},1.6).to(".pie-chart",1,{xPercent:0,transformOrigin:"100% 0%",ease:Linear.easeOut,opacity:1},.8).to(".chart-inner #pie path",1,{drawSVG:"0% 100%",ease:Bounce.easeOut,opacity:1,y:"+=10"},1.8).to(".chart-inner .textDesc",1,{drawSVG:"0% 100%",ease:Bounce.easeOut,opacity:1,y:"+=10"},1.8);new ScrollMagic.Scene({triggerElement:".chart-inner",triggerHook:.6}).addIndicators().setTween(drawtl).addTo(controller),new ScrollMagic.Scene({triggerElement:"#info-graphic",triggerHook:.6}).addIndicators().on("enter",function(){drawTreeIcon(),drawSpaceIcon()}).addTo(controller);var cohe=$(".color-slider").height();new ScrollMagic.Scene({triggerElement:".color-slider",triggerHook:.6,duration:cohe}).addIndicators().on("enter",function(){drawLine()}).addTo(controller),$(function(){$(".article-slider").owlCarousel({loop:!0,dots:!0,lazyLoad:!0,items:1,margin:20});$(".interview-slider").on("mousewheel initialized.owl.carousel changed.owl.carousel",function(e){if(e.namespace){var a=e.relatedTarget;2==a.relative(a.current())&&(TweenMax.from(".item .info-graphic svg",1,{transformOrigin:"50% 50%",drawSVG:0,strokeWidth:0,opacity:0,delay:1}),TweenMax.from(".item .textDesc",1,{transformOrigin:"50% 50%",strokeWidth:0,opacity:0,delay:2})),$(".counter .activeNum").text(a.relative(a.current())+1),$(".counter .totalNum").text(a.items().length)}}).owlCarousel({loop:!1,nav:!1,dots:!1,lazyLoad:!0,items:1,rewind:!0});$(".tweenSlider .owl-carousel").owlCarousel({loop:!0,dots:!0,lazyLoad:!0,items:1,margin:20}),$(".color-slider").owlCarousel({loop:!1,dots:!0,lazyLoad:!0,items:1})});
//# sourceMappingURL=script.js.map
