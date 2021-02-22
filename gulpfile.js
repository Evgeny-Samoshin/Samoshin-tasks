const {src, dest, series, watch} = require('gulp');
const sync = require('browser-sync').create();
const del = require('del');
const csso = require('gulp-csso');
const include = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const gcmq = require('gulp-group-css-media-queries');

function html() {
   return src( 'src/**.html')
    .pipe(include({
      prefix: '@@'
    }))
    .pipe(htmlmin({
       collapseWhitespace: true
      }))
    .pipe(dest('dist'))
}

function img() {
  return src( 'src/assets/**/*.svg')
    .pipe(dest('dist/assets'))
}

function scss() {
  return src('src/scss/**.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gcmq())
    .pipe(csso())
    .pipe(concat('style.css'))
    .pipe(dest('dist'))
}

function clear() {
  return del('dist')
}

function serve() {
  sync.init({
    server: './dist'
  })
  watch('./src/**/*.html', series(html)).on('change', sync.reload)
  watch('./src/**/*.scss', series(scss)).on('change', sync.reload)
  watch('./src/**/*.svg', series(img)).on('change', sync.reload)
}

exports.build = series(clear, img, scss, html);
exports.serve = series(clear, img, scss, html, serve);
exports.clear = clear;