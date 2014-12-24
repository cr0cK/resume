/* jshint strict:false */

(function () {
  'use strict';

  var drawDonuts = require('./helpers.js').drawDonuts;

  drawDonuts('.js', 150, 90, '#F8DC3D', '#555');
    drawDonuts('.e2e', 60, 75, '#B72F33', '#fff');
    drawDonuts('.angularjs', 90, 90, '#DD1B16', '#fff');
    drawDonuts('.reactjs', 110, 55, '#61DAFB', '#155c6d');
    drawDonuts('.flux', 90, 25, '#26b0d3', '#fff', 0.8);
    drawDonuts('.isomorphic', 90, 25, '#0e95b7', '#fff');
    drawDonuts('.node', 80, 70, '#80BD01', '#fff');
    drawDonuts('.games', 80, 20, '#d7db67', '#555', 0.7);
    drawDonuts('.webgl', 60, 10, '#990000', '#fff', 0.7);

  drawDonuts('.web', 120, 90, '#26A1FF', '#fff');
    drawDonuts('.html5', 80, 85, '#EF6529', '#fff', 0.8);
    drawDonuts('.css3', 90, 85, '#0270BB', '#fff', 0.7);
    drawDonuts('.preprocessors', 70, 85, '#DA619B', '#fff', 1.1);
    drawDonuts('.responsive', 60, 75, '#828282', '#fff', 1.1);
    drawDonuts('.cordova', 80, 20, '#7bcfd8', '#555');
    drawDonuts('.android', 100, 25, '#97C024', '#fff');

  drawDonuts('.python', 80, 65, '#FECD40', '#555');
  drawDonuts('.go', 80, 10, '#D0B799', '#555');
  drawDonuts('.perl', 60, 80, '#0b5c8c', '#fff', 0.9);
  drawDonuts('.php', 60, 70, '#8892BF', '#fff', 0.7);

  drawDonuts('.db', 100, 65, '#AAAAAC', '#555');
    drawDonuts('.mysql', 70, 85, '#2B5A6A', '#fff', 0.7);
    drawDonuts('.sqlite', 60, 75, '#71C0EA', '#0B5C8C', 0.8);
    drawDonuts('.postgresql', 70, 25, '#306592', '#fff');
    drawDonuts('.coutchdb', 75, 75, '#BD121B', '#fff', 0.8);
    drawDonuts('.mongodb', 60, 45, '#4F9648', '#fff', 0.9);
    drawDonuts('.rethinkdb', 70, 20, '#1F3F4E', '#fff', 1, 1.5);
    drawDonuts('.cassandra', 80, 10, '#B3D2E6', '#555', 1, 0.2);

})();
