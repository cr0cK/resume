/* jshint strict:false */

(function () {
  'use strict';

  var donuts = require('./donuts.js');

  // draw donuts
  donuts.draw();
  // fix correct zoom of donuts at loading
  donuts.handleResizing();
  // listing resize event to scale donuts
  donuts.bindWindowEvent();
})();
