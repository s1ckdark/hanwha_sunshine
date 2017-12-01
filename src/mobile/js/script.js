$(function(){
  // Video play
  //
  $('.video-play .play').on('click', function(e){
    e.preventDefault();
    $(this).hide().next('video')[0].play();
  });

  TweenMax.set('.item-pop', {scale:0});
  var pop = new TweenMax({paused:true});
  $('.popbtn').click(function(){
    console.log("click");
    var $this = $(this), popdata = $this.data('pop'), $pd = $(popdata);
    TweenMax.to('.closebtn', 0, {autoAlpha:1});
    TweenMax.to($pd,.5,{scale:1,ease:Expo.easeInOut,display:'block',className:'+=active',onComplete:function(){
         TweenMax.to('#viewport', 0, {className:'+=noscroll'});
}});
    })


    $('.closebtn').click(function(){
       TweenMax.to('.closebtn', 0, {autoAlpha:0});
    TweenMax.to($('.item-pop.active'),.5,{scale:0, ease:Expo.easeInOut});
     TweenMax.to('#viewport', 0, {className:'-=noscroll'});
     scrollToInterview();
  })

  function scrollToInterview () {
    var $id = $('#interview');
    var newpos;

    if ($id.length > 0) {
      newpos = $id.offset().top - $('#roof').outerHeight(); // header가 내용을 가리지 않게 위치 조정

      $('html, body').stop().animate({scrollTop: newpos}, 500);

      // if supported by the browser we can even update the URL.
      // if (window.history && window.history.pushState) {
      //   history.pushState('', document.title, id);
      // }
    }
}
// var roofH = $('#roof').height();
// var sliderH = $('.color-slider .item .wrapper').height();
// var windowH = $(window).height(); 
// var fullH = windowH - roofH;
// var sh = - (sliderH / 2);

// $('.color-slider .item').css({'height':fullH});
// $('.color-slider .item .wrapper').css({'margin-top':sh});

});