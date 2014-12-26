/* jshint strict:false */

(function () {
  'use strict';

  var drawDonuts = require('./helpers.js').drawDonuts;

  drawDonuts('.js', 150, 90, '#F8DC3D', '#555');
    drawDonuts('.e2e', 60, 75, '#B72F33', '#fff');
    drawDonuts('.selenium', 60, 75, '#979797', '#fff');
    drawDonuts('.angularjs', 90, 90, '#DD1B16', '#fff', 1, 1);
    drawDonuts('.reactjs', 110, 55, '#61DAFB', '#155c6d');
    drawDonuts('.flux', 90, 25, '#26b0d3', '#fff', 0.8);
    drawDonuts('.isomorphic', 90, 25, '#0e95b7', '#fff');
    drawDonuts('.node', 95, 75, '#80BD01', '#fff');
    drawDonuts('.games', 80, 20, '#d7db67', '#555', 0.7);
    drawDonuts('.webgl', 75, 10, '#990000', '#fff', 0.7);

  drawDonuts('.web', 120, 90, '#26A1FF', '#fff');
    drawDonuts('.html5', 80, 85, '#EF6529', '#fff', 0.8);
    drawDonuts('.css3', 90, 85, '#0270BB', '#fff', 0.7);
    drawDonuts('.preprocessors', 70, 85, '#DA619B', '#fff', 1.1);
    drawDonuts('.responsive', 60, 75, '#828282', '#fff', 1.1);
    drawDonuts('.cordova', 80, 20, '#7bcfd8', '#555');
    drawDonuts('.android', 100, 25, '#97C024', '#fff');

  drawDonuts('.python', 80, 65, '#FECD40', '#555');
  drawDonuts('.go', 80, 10, '#D0B799', '#555');
  drawDonuts('.perl', 60, 85, '#0b5c8c', '#fff', 0.9, 1);
  drawDonuts('.php', 60, 70, '#8892BF', '#fff', 0.7);

  drawDonuts('.db', 100, 65, '#AAAAAC', '#555');
    drawDonuts('.mysql', 70, 85, '#2B5A6A', '#fff', 0.7);
    drawDonuts('.sqlite', 60, 85, '#71C0EA', '#0B5C8C', 0.8);
    drawDonuts('.postgresql', 70, 25, '#306592', '#fff');
    drawDonuts('.coutchdb', 75, 55, '#BD121B', '#fff', 0.8);
    drawDonuts('.mongodb', 60, 45, '#4F9648', '#fff', 0.9);
    drawDonuts('.rethinkdb', 70, 20, '#1F3F4E', '#fff', 1, 1.5);
    drawDonuts('.cassandra', 80, 10, '#adc8db', '#555', 1, 0.4);

  drawDonuts('.devops', 90, 40, '#024164', '#fff', 0.9, 1.4);
    drawDonuts('.docker', 90, 50, '#1FB6E8', '#fff', 0.9);
    drawDonuts('.fig', 75, 50, '#A41212', '#fff');
    drawDonuts('.jenkins', 80, 65, '#AAAAAC', '#333');
    drawDonuts('.apache', 60, 60, '#EA119C', '#fff', 0.9);
    drawDonuts('.varnish', 60, 25, '#73B9E3', '#024164');
    drawDonuts('.haproxy', 60, 25, '#6BF141', '#1c3d11');

  drawDonuts('.collaboration', 90, 80, '#F17D23', '#fff', 1.2);
    drawDonuts('.github', 80, 85, '#323131', '#fff', 1, 1.7);
    drawDonuts('.gitlab', 80, 75, '#656565', '#fff');
    drawDonuts('.git', 80, 80, '#F15034', '#fff');
    drawDonuts('.trac', 60, 80, '#B50600', '#fff', 0.8);
    drawDonuts('.kanban', 70, 65, '#edea55', '#555', 0.9, 1);

  drawDonuts('.irl', 120, 95, '#6EB5E1', '#fff', 1.2, 0.4);
    drawDonuts('.aikido', 90, 85, '#333', '#fff', 0.9, 1.9);
    drawDonuts('.bike', 90, 85, '#828BA1', '#fff', 1.2);
    drawDonuts('.father', 150, 98, '#EA94B7', '#fff', 1.2, 0.2);
})();
