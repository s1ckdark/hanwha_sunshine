$(function(){
  // Video play
  //
  $('.video-play .play').on('click', function(e){
    e.preventDefault();
    $(this).hide().next('video')[0].play();
  });

  TweenMax.set('.item-pop', {scale:0});
  $('.popbtn').on('click', function(){
    var pop = new TweenMax({paused:true});
    var $this = $(this), popdata = $this.data('pop'), $pd = $(popdata);
   
    TweenMax.to($pd,.5,{scale:1,ease:Expo.easeInOut});
     
//     $this.on('click', function(event) {
//     event.preventDefault();
//     pop.reversed() ? pop.play() : pop.reverse();
// });
    
  })

  // $('.popbtn').click(function(){
  //   console.log("click");
  //   var data = $(this).data('pop');
  //   var $target = $(data);
  //   TweenMax.to($target[0],.5,{scale:1,ease:Expo.easeInOut});
  // })

    $('.closebtn').click(function(){
    var $this = $(this).parents().parents();
    TweenMax.to($this[0],.5,{scale:0, ease:Expo.easeInOut});
  })

});