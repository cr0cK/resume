'use strict';


var gulp        = require('gulp'),
    clean       = require('gulp-clean'),
    less        = require('gulp-less'),
    sourcemaps  = require('gulp-sourcemaps'),
    minifyCss   = require('gulp-minify-css');



gulp.task('_clean', function () {
  return gulp
    .src('./www/css', {read: false})
    .pipe(clean());
});


gulp.task('_build-less', ['_clean'],function () {
  gulp
    .src('./less/main.less')
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./www/css'));
});


gulp.task('_watch', function () {
  gulp.watch([
    './less/main.less'
  ], ['_build']);
});


gulp.task('build', ['_build-less']);
gulp.task('watch', ['_watch']);
