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
    TweenMax.to($pd,.5,{scale:1,ease:Expo.easeInOut,className:'+=active'});    
  })

  // $('.popbtn').click(function(){
  //   console.log("click");
  //   var data = $(this).data('pop');
  //   var $target = $(data);
  //   TweenMax.to($target[0],.5,{scale:1,ease:Expo.easeInOut});
  // })

    $('.closebtn').click(function(){
       TweenMax.to('.closebtn', 0, {autoAlpha:0});
    TweenMax.to($('.item-pop.active'),.5,{scale:0, ease:Expo.easeInOut});
  })

});