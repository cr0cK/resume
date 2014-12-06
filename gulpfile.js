'use strict';


var gulp        = require('gulp'),
    tasks       = require('./gulp/tasks');


gulp.task('_clean', tasks.clean);

gulp.task('_build:font', ['_clean'], tasks.buildFont);

gulp.task('_watch:less', tasks.buildLess);
gulp.task('_build:less', ['_clean'], tasks.buildLess);

gulp.task('_watch:html', tasks.buildHtml);
gulp.task('_build:html', ['_clean'], tasks.buildHtml);

gulp.task('_watch', ['_build:less', '_build:html'], function () {
  gulp.watch('./less/**/*.less', ['_watch:less']);
  gulp.watch('./html/*.html', ['_watch:html']);
});

gulp.task('watch', ['_watch']);
gulp.task('build:all', ['_build:font', '_build:less', '_build:html']);
