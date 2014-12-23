/* jshint strict:false */

(function () {
  'use strict';

  var drawDonuts = require('./helpers.js').drawDonuts;

  drawDonuts('.js', 150, 80, '#F8DC3D', '#000');
    drawDonuts('.e2e', 60, 75, '#B72F33', '#fff');
    drawDonuts('.angularjs', 90, 90, '#DD1B16', '#fff');
    drawDonuts('.reactjs', 110, 55, '#61DAFB', '#fff');
    drawDonuts('.flux', 90, 25, '#26b0d3', '#fff', 0.8);
    drawDonuts('.isomorphic', 90, 25, '#0e95b7', '#fff');
    drawDonuts('.node', 80, 65, '#80BD01', '#fff');
    drawDonuts('.games', 60, 20, '#FF0000', '#fff', 0.7);
    drawDonuts('.webgl', 50, 10, '#990000', '#fff', 0.7);

  drawDonuts('.web', 120, 80, '#26A1FF', '#fff');
    drawDonuts('.html5', 80, 75, '#EF6529', '#fff', 0.8);
    drawDonuts('.css3', 90, 75, '#0270BB', '#fff', 0.7);
    drawDonuts('.preprocessors', 70, 85, '#DA619B', '#fff', 1.1);
    drawDonuts('.responsive', 60, 75, '#828282', '#fff', 1.1);
    drawDonuts('.mobile', 90, 25, '#111111', '#fff');
    drawDonuts('.android', 100, 25, '#97C024', '#fff');

})();
