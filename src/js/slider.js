/*
* 슬라이더 관련 스크립트
*
* JS Dependencies
* - OwlCarousel2: https://owlcarousel2.github.io/OwlCarousel2
*    - owl.carousel.min.js
* */

$(function(){

  // brand article slider
  //
  var $articleSlider = $('.article-slider').owlCarousel({
    loop: true,
    dots:true,
    lazyLoad: true,
    items:1,
    margin: 20
    });  

  // var $colorSlider = $('.color-slider').on('initialized.owl.carousel changed.owl.carousel', function(e) {
  //   if (!e.namespace)  {
  //     return;
  //   }
  //   var active = e.page.index;
  // }).owlCarousel({
  //   loop: false,
  //   dots:true,
  //   lazyLoad: true,
  //   items:1,
  //   animateOut: 'slideOutUp',
  //   animateIn: 'slideInUp'
  //   });


//   // igarten quiz slider
//   //
//   var $quizSlider = $('#quiz-slider');
//   if ($quizSlider.length) {
//     $quizSlider.owlCarousel({
//       loop: false,
//       nav: true,
//       dots: true,
//       margin: 200,
//       center: true,
//       autoWidth: true,
//       lazyLoad: true,
//       items: 2,
//     });
//     // 정답 확인 버튼
//     $('#check-quiz').on('click', function(){
//       var $button = $(this);
//       var $slide = $quizSlider.find('.center');
//       var isActive = $button.hasClass('active');

//       $slide.find('img').toggle();
//       $button.text(isActive ? '정답 확인하기' : '문제 다시 보기');
//       $button.toggleClass('active');
//     });

//     // 정답 열린채로 슬라이더 움직일 경우 - 정답 닫기
//     $quizSlider.on('change.owl.carousel', function(){
//       $('#check-quiz.active').click();
//     });
//   }




//   $illustSlider.on('change.owl.carousel initialized.owl.carousel', function(){
//     // center 아이템 잡기위해 setTimeout 사용
//     setTimeout(function(){
//       var $item = $illustSlider.find('.owl-item');
//       TweenMax.to($item, .2, {scale: .7});
//     }, 0);
//   });
//   $illustSlider.on('changed.owl.carousel', function(){
//     // 빠르게 넘어갈 경우 마지막 center 아이템에만 적용하기
//     if (illustTime) {
//       clearInterval(illustTime);
//     }
//     illustTime = setTimeout(function(){
//       var $item = $illustSlider.find('.owl-item.center');
//       TweenMax.to($item, .4, {scale: 1});
//     }, 400);
//   });

$('.interview-slider').on('initialized.owl.carousel changed.owl.carousel', function(e) {
    if (!e.namespace)  {
      return;
    }
    var carousel = e.relatedTarget;
    $('.counter .activeNum').text(carousel.relative(carousel.current()) + 1);
    $('.counter .totalNum').text(carousel.items().length);
  }).owlCarousel({
    loop:false,
    nav: false,
    dots: false,
    lazyLoad: true,
    items:1,
    });
});