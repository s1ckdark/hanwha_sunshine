/*
* JATracker 액션 추적 스크립트
*
* jatracker('event', 'clickEvent', '카테고리', '액션명', '라벨');
* */

window.addEventListener('load', function(){
  $('#more .hanwha_sunshine a').on('click', function(){
    jatracker('event', 'clickEvent', '한화 그룹 더 보기', '한화 그룹 더 보기', '한화 그룹 더 보기');
  });
  $('#more .hanwha_solar .a').on('click', function(){
    jatracker('event', 'clickEvent', '한화 태양광 더보기', '한화 태양광 더보기', '한화 태양광 더보기');
  });
  $('#more .hanwha_engine .a').on('click', function(){
    jatracker('event', 'clickEvent', '한화 항공엔진 더보기', '한화 항공엔진 더보기', '한화 항공엔진 더보기');
  });
});