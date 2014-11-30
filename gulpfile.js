'use strict';


var gulp        = require('gulp'),
    clean       = require('gulp-clean'),
    less        = require('gulp-less'),
    sourcemaps  = require('gulp-sourcemaps'),
    // minifyCss   = require('gulp-minify-css'),
    iconfont    = require('gulp-iconfont'),
    consolidate = require('gulp-consolidate'),
    rename      = require('gulp-rename');


gulp.task('_clean', function () {
  return gulp
    .src('./www/css', {read: false})
    .pipe(clean());
});

gulp.task('_build-font', ['_clean'], function () {
  gulp.src('./svg/*.svg')
    .pipe(iconfont({
      fontName: 'cr0cK',
      normalize: true
    }))
    .on('codepoints', function (codepoints) {
      gulp.src('templates/font.css')
        .pipe(consolidate('lodash', {
          glyphs: codepoints,
          fontName: 'cr0cK',
          fontPath: '../fonts/',
          className: 'icon'
        }))
        .pipe(rename('font.less'))
        .pipe(gulp.dest('./less/'));
    })
    .pipe(gulp.dest('www/fonts/'));
});

gulp.task('_build-less', ['_clean'], function () {
  gulp
    .src('./less/main.less')
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./www/css'));
});

gulp.task('_watch', ['_build-less'], function () {
  gulp.watch([
    './less/**/*.less'
  ], ['_build-less']);
});

gulp.task('watch', ['_watch']);
gulp.task('build:less', ['_build-less']);
gulp.task('build:font', ['_build-font']);


