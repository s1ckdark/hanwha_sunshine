'use strict';

const gulp = require('gulp');
const eslint = require('gulp-eslint');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const nunjucks = require('gulp-nunjucks');
const htmlbeautify = require('gulp-html-beautify');
const path = require('path');
const merge = require('merge-stream');
const browserSync = require('browser-sync').create();
const del = require('del');

const folders = ['.', 'mobile']; // structure of web and bmoile. separate folder.
const baseurl = 'http://innovationlab.co.kr/innovation/hanwha_sunshine'; // project url

// run template engines
gulp.task('html', function () {
  var options = {
    'indent_size': 2,
    'max_preserve_newlines': 0
  };
  var date = new Date();

// separte folder web and mobile
  var tasks = folders.map(function(element){
    return gulp.src('src/' + element + '/html/**/!(_)*.html')
      .pipe(nunjucks.compile({
        baseurl: baseurl,
        version: date.getTime(), // CSS, JS cache version
        viewport_width: '1200', // viewport of PC. mobile viewport set up device-width
        brand: '한화', // header logo title
        title: '한화 해피 선샤인… 사랑 빛 쏟아지다',
        description:'산봉우리 사이로 태양이 떠오릅니다. 햇살은 아이들 공부방을 밝히는 등불이 됩니다. 할머니의 시린 몸을 녹이는 따뜻한 쉼터가 됩니다. 장애인이 일자리를 찾는 희망이 됩니다.',
        keyword: '태양광, 신재생에너지, 원자력 에너지, 태양광 발전, 사회공헌, 사회공헌활동, 해피선샤인, CSR, 한화, 한화 그룹 사회공헌활동, 공부방, 꽃때말공부방, 치매, 요양원, 장애인 여행, 장애인, 하늘품 단기 보호센터, 이산화탄소 배출, 이산화탄소, 화석연료, 여수 가사리 생태교육관, 발전설비, 소비전력, 세탁기, 텔레비전, 에어컨, 한화 태양의 숲, 태양의 숲, 태양광 발전 무상 지원, 태양광패널, 한화 큐셀, 태양광 모듈, 모듈',
        og_image: baseurl + '/img/og-image1.jpg', // 1200x628px
        og_article_publisher: 'https://www.facebook.com/joongang', // A Facebook page URL or ID
        dablena_init: 'www.hanwha.co.kr', // client website
      }))
      .pipe(htmlbeautify(options)) // beautify HTML files
      .pipe(gulp.dest('public/' + element + '/'))
      .pipe(browserSync.stream({once: true}));
  });

  return merge(tasks);
});

// js/lib/ 소스 처리 - 외부 라이브러리 파일
gulp.task('js:lib', function () {
  var tasks = folders.map(function(element){
    return gulp.src('src/' + element + '/js/lib/*.js')
      .pipe(gulp.dest('public/' + element + '/js/lib'));
  });

  return merge(tasks);
});
// js/common/ 소스 처리 - concat & uglify js
gulp.task('js:common', function () {
  var tasks = folders.map(function(element){
    return gulp.src([
      'src/' + element + '/js/common/transparency.js',
      'src/' + element + '/js/common/jquery.utils.js',
      'src/' + element + '/js/common/utils.js',
      'src/' + element + '/js/common/layout.js',
      'src/' + element + '/js/common/sns.js'
    ])
      .pipe(sourcemaps.init())
      .pipe(concat('common.js')) // concat
      .pipe(uglify()) // uglify 적용
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('public/' + element + '/js'));
  });

  return merge(tasks);
});
// eslint & concat & uglify js
gulp.task('js', ['js:common', 'js:lib'], function () {
  var tasks = folders.map(function(element){
    return gulp.src('src/' + element + '/js/*.js') //if you want to load sequence, define array at here!!  
      .pipe(eslint({ fix: true }))
      .pipe(eslint.format())
      .pipe(sourcemaps.init())
      .pipe(concat('script.js')) // concat
      .pipe(uglify()) // uglify
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('public/' + element + '/js'))
      .pipe(browserSync.stream({once: true}));
  });

  return merge(tasks);
});

// compile sass to css
gulp.task('sass', function () {
  var tasks = folders.map(function(element){
    return gulp.src('src/' + element + '/sass/**/*.scss')
      .pipe(sourcemaps.init())
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(autoprefixer([
        // cross-browsing prefix 
        'Chrome >= 35',
        'Firefox >= 38',
        'Edge >= 12',
        'Explorer >= 9',
        'iOS >= 8',
        'Safari >= 8',
        'Android 2.3',
        'Android >= 4',
        'Opera >= 12'
      ]))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('public/' + element + '/css'))
      .pipe(browserSync.stream({once: true}));
  });

  return merge(tasks);
});

// images
gulp.task('img', function () {
  var tasks = folders.map(function(element){
    var dest = 'public/' + element + '/img';
    return gulp.src('src/' + element + '/img/**/*.{jpg,jpeg,gif,png,svg,ico}')
      .pipe(gulp.dest(dest))
      .pipe(browserSync.stream({once: true}));
  });

  return merge(tasks);
});

gulp.task('serve', ['build'], function() {
  browserSync.init({
    server: ['public']
  });

  gulp.watch('src/**/html/*.{html,svg}', ['html']);
  gulp.watch('src/**/*.js', ['js']);
  gulp.watch('src/**/*.scss', ['sass']);
  gulp.watch('src/**/img/**/*.{jpg,jpeg,gif,png,svg,ico}', ['img']);
});

gulp.task('clean', function() {
  del.sync(['public/**']);
});

gulp.task('build', ['clean', 'html', 'js', 'sass', 'img'], function() {

});