(function () {
  'use strict';

  var drawDonuts  = require('./helpers.js').drawDonuts,
      $           = require('../node_modules/jquery-browserify/lib/jquery'),
      _           = require('../node_modules/lodash/lodash.js');

  var draw = function () {
    drawDonuts('.js', 150, 90, '#F8DC3D', true, 0.8);
      drawDonuts('.e2e', 60, 75, '#B72F33', false);
      drawDonuts('.selenium', 60, 75, '#979797', false);
      drawDonuts('.angularjs', 90, 90, '#DD1B16', false, 1, 1);
      drawDonuts('.reactjs', 110, 55, '#61DAFB', true);
      drawDonuts('.flux', 90, 25, '#26b0d3', false, 1.2);
      drawDonuts('.isomorphic', 90, 25, '#0e95b7', false, 1.1);
      drawDonuts('.jquery', 70, 95, '#0e95b7', false);
      drawDonuts('.d3', 75, 60, '#F68E51', '#b76637', 1.4);
      drawDonuts('.node', 95, 75, '#80BD01', true);
      drawDonuts('.games', 80, 20, '#d7db67', true);
      drawDonuts('.webgl', 75, 10, '#990000', false);

    drawDonuts('.web', 120, 90, '#26A1FF', false, 1.2);
      drawDonuts('.html5', 80, 85, '#EF6529', false, 1.2);
      drawDonuts('.css3', 90, 85, '#0270BB', false, 1.2);
      drawDonuts('.preprocessors', 70, 85, '#DA619B', false);
      drawDonuts('.responsive', 60, 75, '#828282', false);
      drawDonuts('.cordova', 80, 20, '#7bcfd8', true);
      drawDonuts('.android', 100, 25, '#97C024', true, 1.1);

    drawDonuts('.python', 80, 75, '#FECD40', true, 1.2);
      drawDonuts('.go', 80, 10, '#D0B799', true, 1.4);
      drawDonuts('.perl', 60, 90, '#0b5c8c', false, 1.6, 1);
      drawDonuts('.php', 60, 85, '#8892BF', true, 1.6);
      drawDonuts('.net', 40, 20, '#007DB3', false, 0.8);
      drawDonuts('.java', 50, 20, '#F8272B', false, 0.8);

    drawDonuts('.db', 100, 75, '#AAAAAC', true);
      drawDonuts('.mysql', 70, 85, '#2B5A6A', false);
      drawDonuts('.sqlite', 60, 85, '#71C0EA', true);
      drawDonuts('.oracle', 50, 15, '#FA0F0C', false);
      drawDonuts('.postgresql', 70, 40, '#306592', false);
      drawDonuts('.coutchdb', 75, 55, '#BD121B', false);
      drawDonuts('.mongodb', 60, 45, '#4F9648', false);
      drawDonuts('.rethinkdb', 70, 20, '#1F3F4E', false, 1, 1.5);
      drawDonuts('.cassandra', 80, 10, '#adc8db', true, 1, 0.4);

    drawDonuts('.devops', 90, 40, '#024164', false, 1.2, 1.4);
      drawDonuts('.docker', 90, 50, '#1FB6E8', false, 1.2);
      drawDonuts('.fig', 75, 50, '#A41212', false, 1.6);
      drawDonuts('.jenkins', 80, 65, '#AAAAAC', true, 1.2);
      drawDonuts('.apache', 60, 60, '#EA119C', false, 0.9);
      drawDonuts('.varnish', 60, 25, '#73B9E3', true);
      drawDonuts('.haproxy', 60, 25, '#6BF141', true);

    drawDonuts('.collaboration', 90, 80, '#F17D23', false);
      drawDonuts('.github', 80, 85, '#323131', false, 1.2, 1.7);
      drawDonuts('.gitlab', 80, 75, '#656565', false, 1.2);
      drawDonuts('.git', 80, 80, '#F15034', false, 1.6);
      drawDonuts('.trac', 60, 80, '#B50600', false, 1.6);
      drawDonuts('.kanban', 70, 65, '#edea55', true, 0.9, 1);

    drawDonuts('.father', 150, 98, '#EA94B7', false, 1.2, 0.2);
      drawDonuts('.aikido', 90, 85, '#333', false, 1.2, 1.9);
      drawDonuts('.bike', 90, 85, '#828BA1', false, 0.8);

    drawDonuts('.french', 90, 100, '#002680', false, 1.2, 1.5);
      drawDonuts('.english', 90, 75, '#D1132C', false, 1.2);
      drawDonuts('.spanish', 50, 15, '#FEC401', true, 1, 1);
  };

  /**
   * Update width, height and zoom of donuts when resizing the window.
   */
  var handleResizing = function () {
    var width = $(window).width();
    var $section = $('section.interests');
    var $donuts = $section.find('> .donuts');

    if (width > 960) {
      $donuts.width('100%');
      $section.height('900px');
      $donuts.css('zoom', 1);
      return;
    }

    var zoom = width / 1000;
    var height = width;

    $donuts.width(width);
    $section.height(height);
    $donuts.css('zoom', zoom);
  };

  /**
   * Bind window resize event.
   */
  var bindWindowEvent = function () {
    var throttled = _.throttle(handleResizing, 100);
    $(window).resize(throttled);
  };

  module.exports = {
    draw: draw,
    bindWindowEvent: bindWindowEvent,
    handleResizing: handleResizing
  };
})();
