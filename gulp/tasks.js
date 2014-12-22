'use strict';

var settings    = require('./settings'),
    gulp        = require('gulp'),
    clean       = require('gulp-clean'),
    concat      = require('gulp-concat'),
    sass        = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps  = require('gulp-sourcemaps'),
    minifyCss   = require('gulp-minify-css'),
    minifyHtml  = require('gulp-minify-html'),
    annotate    = require('gulp-ng-annotate'),
    uglify      = require('gulp-uglify'),
    browserify  = require('gulp-browserify'),
    jshint      = require('gulp-jshint'),
    iconfont    = require('gulp-iconfont'),
    consolidate = require('gulp-consolidate'),
    expect      = require('gulp-expect-file'),
    serve       = require('gulp-serve'),
    rename      = require('gulp-rename'),
    onFileExceptFailure = function () {
      console.log('\nSome vendor files are missing... Process stopped.');
      process.exit(1);
    };

var tasks = {};

tasks.clean = function () {
  return gulp
    .src('./www/*', {read: false})
    .pipe(clean());
  };

tasks.buildFont = function () {
  return gulp.src('./svg/*.svg')
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
        .pipe(rename('font.scss'))
        .pipe(gulp.dest('./sass/'));
    })
    .pipe(gulp.dest('www/fonts/'));
};

tasks.buildSass = function () {
  return gulp
    .src('./sass/main.scss')
      .pipe(sourcemaps.init())
      .pipe(sass(settings.sassOptions))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('./www/css'));
};

tasks.compileSass = function () {
  return gulp
    .src('./sass/main.scss')
    .pipe(sass(settings.sassOptions))
    .pipe(autoprefixer({
      browsers: ['> 1%', 'last 2 versions'],
      cascade: false
    }))
    .pipe(minifyCss())
    .pipe(gulp.dest('./www/css'));
};

tasks.buildBowerComponents = function () {
  return gulp
    .src(settings.bowerComponents)
    .pipe(expect({errorOnFailure: true}, settings.bowerComponents))
      .on('error', onFileExceptFailure)
    .pipe(concat('vendors.js'))
    .pipe(gulp.dest('./www/js'));
};

tasks.buildJS = function () {
  return gulp
    .src('js/**/*')
    .pipe(browserify({
      insertGlobals: true,
      debug: true
    }))
    .pipe(rename('app.js'))
    .pipe(gulp.dest('./www/js'));
};

tasks.compileJS = function () {
  return gulp
    .src('js/**/*')
    .pipe(concat('source.js'))
    .pipe(annotate())
    .pipe(uglify())
    .pipe(gulp.dest('./www/js'));
};

tasks.lintJS = function () {
  return gulp
    .src(['js/**/*', '!js/bower_components'])
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'));
};

tasks.copyJSON = function () {
  return gulp
    .src('json/**/*')
    .pipe(gulp.dest('./www/json'));
};

tasks.copyGraphics = function () {
  return gulp
    .src('graphics/**/*')
    .pipe(gulp.dest('./www/graphics'));
};

tasks.buildHtml = function () {
  return gulp
    .src('./html/**/*.html')
    .pipe(gulp.dest('./www'));
};

tasks.compileHtml = function () {
  return gulp
    .src('./html/**/*.html')
    .pipe(minifyHtml())
    .pipe(gulp.dest('./www'));
};

tasks.serveDev = serve('www');

module.exports = tasks;
