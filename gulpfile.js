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
        title: '',
        keyword: '',
        og_image: baseurl + '/img/og-image.jpg', // 1200x628px
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