'use strict';

var gulp        = require('gulp'),
    clean       = require('gulp-clean'),
    less        = require('gulp-less'),
    minifyCss   = require('gulp-minify-css'),
    minifyHtml  = require('gulp-minify-html'),
    iconfont    = require('gulp-iconfont'),
    consolidate = require('gulp-consolidate'),
    rename      = require('gulp-rename');

var tasks = {};

tasks.clean = function () {
  return gulp
    .src('./www/css', {read: false})
    .pipe(clean());
  };

tasks.buildFont = function () {
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
};

tasks.buildLess = function () {
  gulp
    .src('./less/main.less')
    .pipe(less())
    .pipe(minifyCss())
    .pipe(gulp.dest('./www/css'));
};

tasks.buildHtml = function () {
  gulp
    .src('./html/*.html')
    .pipe(minifyHtml())
    .pipe(gulp.dest('./www'));
};

module.exports = tasks;
