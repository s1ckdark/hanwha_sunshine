// web font loader
// if (typeof WebFont === 'object') {
//   WebFont.load({
//     google: {
//       families: ['notosans']
//     },
//   });
// }

$(function(){

  // lazyLoad
  // https://appelsiini.net/projects/lazyload
  // var userAgent = navigator.userAgent.toLowerCase();
  // if (userAgent.indexOf('edge') > -1 || userAgent.indexOf('trident') > -1) { // edge & ie - lazyload 버그로 임시로 처리함.
  //   $('img.lazyload').each(function(){
  //     $(this).attr('src', $(this).data('src'));
  //   });
  //   $('.lazyload').not('img').each(function(){
  //     $(this).css('background-image', 'url("' + $(this).data('src') + '")');
  //   });
  // } else {
  //   lazyload();
  // }

  // TweenMax.fromTo('.bg_kanarb', 8, {scale:1}, {scale:1.1, yoyo:true, repeat:-1, ease:Linear.easeNone})
  //
  // Video play
  //
  $('.video-play .play').on('click', function(e){
    e.preventDefault();
    $(this).hide().next('video')[0].play();
  });
});