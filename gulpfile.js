'use strict';


var gulp        = require('gulp'),
    tasks       = require('./gulp/tasks');


gulp.task('_clean', tasks.clean);

gulp.task('_build:font', ['_clean'], tasks.buildFont);
gulp.task('_build:sass', ['_clean', '_build:font'], tasks.buildSass);
gulp.task('_build:bowerComponents', ['_clean'], tasks.buildBowerComponents);
gulp.task('_build:js', ['_clean'], tasks.buildJS);
gulp.task('_build:html', ['_clean'], tasks.buildHtml);

gulp.task('_compile:sass', ['_clean', '_build:font'], tasks.compileSass);
gulp.task('_compile:js', ['_clean'], tasks.compileJS);
gulp.task('_compile:html', ['_clean'], tasks.compileHtml);

gulp.task('_lint:js', tasks.lintJS);

gulp.task('_copy:json', ['_clean'], tasks.copyJSON);
gulp.task('_copy:graphics', ['_clean'], tasks.copyGraphics);
gulp.task('_copy:all', ['_copy:json', '_copy:graphics']);

gulp.task('_watch', ['build:all'], function () {
  gulp.watch('./svg/**/*', tasks.buildFont);
  gulp.watch('./sass/**/*', tasks.buildSass);
  gulp.watch('./js/**/*', ['_lint:js'], tasks.buildJS);
  gulp.watch('./html/*.html', tasks.buildHtml);
  gulp.watch('./json/*.json', tasks.copyJSON);
});

gulp.task('watch', ['_watch']);

gulp.task('build:all', [
  '_build:font', '_build:sass',
  '_build:bowerComponents', '_build:js',
  '_copy:all',
  '_build:html'
]);

gulp.task('compile:all', [
  '_build:font', '_compile:sass',
  '_build:bowerComponents', '_compile:js',
  '_copy:all',
  '_compile:html'
]);

gulp.task('serve:dev', tasks.serveDev);
