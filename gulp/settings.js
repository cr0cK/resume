'use strict';

var notify    = require('gulp-notify');

var settings = {
  bowerComponents: [
    'bower_components/d3/d3.min.js',
    'bower_components/jquery/dist/jquery.min.js'
  ],
  // used in the build and compile CSS tasks.
  sassOptions: {
    sourceComments: 'map',
    errLogToConsole: false,
    onError: function(err) {
      err = err.replace(__dirname, '');
      notify().write({
        title: 'Error',
        subtitle: 'Sass build failure',
        message: err
      });

      // Log error to console anyway
      console.log(err);
    }
  }
};

module.exports = settings;
