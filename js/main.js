/* global $ */
/* global d3 */

'use strict';

var isFirefox = !!window.navigator.userAgent.match(/firefox/i);

var Donuts = function () {
  this._build = function (
    selector,
    diameter, pourcent,
    background, inverseColor,
    fontSize, brighterValue
  ) {
    brighterValue = brighterValue || 0.7;
    fontSize = fontSize || 1;
    var fontSizeMin = 13;
    var fontSizeBase = 14;

    var bg = d3.hsl(background);
    var brighterBg = bg.brighter(brighterValue);

    var dataset = {
      value: [pourcent, 100 - pourcent],
    };

    var width = diameter,
      height = diameter,
      radius = diameter / 2;

    var pie = d3.layout.pie()
      .sort(null);

    var arc = d3.svg.arc()
      .innerRadius(radius)
      .outerRadius(radius / 1.5);

    var innerArc = d3.svg.arc()
      .innerRadius(0)
      .outerRadius(radius / 1.5 + 1);

    var texts = $(selector).find('> span')[0].innerHTML.split('<br>');

    var svg = d3.select(selector).append('svg')
      .attr('width', width)
      .attr('height', height);

    var container = svg.append('g')
      .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

    container.selectAll('path')
      .data(pie(dataset.value))
      .enter().append('path')
      .attr('fill', function(d, i) {
        return (i > 0 && brighterBg) || bg;
      })
      .attr('d', arc);

    var container2 = svg.append('g')
      .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

    container2.selectAll('path')
      .data(pie([100]))
      .enter().append('path')
      .attr('fill', function() { return brighterBg; })
      .attr('d', innerArc);

    texts.forEach(function (text, i) {
      container2.append('text')
        .text(function() { return text; })
        .style('fill', function() {
          var fillColor;
          if (inverseColor) {
            fillColor = bg.darker(3);
          } else {
            fillColor = '#fff';
          }
          return fillColor;
        })
        .style('font-size', function() {
          var value = d3.max([
            fontSizeMin,
            fontSizeBase * (diameter / 90) * fontSize
          ]);

          return value + 'px';
        })
        .style('font-weight', 'bold')
        .attr('dx', function() { return -this.getBBox().width / 2; })
        .attr('dy', function() {
          var dy;

          if (texts.length > 1) {
            dy = diameter / 10;

            if (i % 2 === 0) {
              dy = -dy;
            }

            dy += diameter / 15;
          } else {
            dy = this.getBBox().height / 3.5;
          }

          return dy;
        });
    });
  };

  /**
   * Draw donuts.
   */
  this.draw = function () {
    this._build('.javascript', 150, 90, '#F8DC3D', true, 0.8);
      this._build('.e2e', 60, 75, '#B72F33', false);
      this._build('.selenium', 60, 75, '#979797', false);
      this._build('.angularjs', 90, 90, '#DD1B16', false, 1, 1);
      this._build('.reactjs', 110, 55, '#61DAFB', true);
      this._build('.flux', 90, 25, '#26b0d3', false, 1.2);
      this._build('.isomorphic', 90, 25, '#0e95b7', false, 1.1);
      this._build('.jquery', 70, 95, '#0e95b7', false);
      this._build('.d3', 75, 60, '#F68E51', '#b76637', 1.4);
      this._build('.node', 95, 75, '#80BD01', true);
      this._build('.gl', 75, 10, '#990000', false);

    this._build('.web', 120, 90, '#26A1FF', false, 1.2);
      this._build('.html5', 80, 85, '#EF6529', false, 1.2);
      this._build('.css3', 90, 85, '#0270BB', false, 1.2);
      this._build('.preprocessors', 70, 85, '#DA619B', false);
      this._build('.responsive', 60, 75, '#828282', false);
      this._build('.cordova', 80, 20, '#7bcfd8', true);
      this._build('.android', 100, 15, '#97C024', true, 1.1);

    this._build('.python', 80, 75, '#FECD40', true, 1.2);
      // this._build('.go', 80, 10, '#D0B799', true, 1.4);
      this._build('.c', 50, 15, '#D0B799', true, 1.4);
      this._build('.perl', 60, 90, '#0b5c8c', false, 1.6, 1);
      this._build('.php', 60, 75, '#8892BF', true, 1.6);
      this._build('.net', 40, 15, '#007DB3', false, 0.8);
      this._build('.java', 50, 15, '#F8272B', false, 0.8);

    this._build('.db', 100, 75, '#AAAAAC', true);
      this._build('.mysql', 70, 85, '#2B5A6A', false);
      this._build('.sqlite', 60, 85, '#71C0EA', true);
      this._build('.oracle', 50, 15, '#FA0F0C', false);
      this._build('.postgresql', 70, 40, '#306592', false);
      this._build('.coutchdb', 75, 55, '#BD121B', false);
      this._build('.mongodb', 60, 45, '#4F9648', false);
      this._build('.rethinkdb', 70, 20, '#1F3F4E', false, 1, 1.5);
      this._build('.cassandra', 80, 10, '#adc8db', true, 1, 0.4);

    this._build('.devops', 90, 40, '#024164', false, 1.2, 1.4);
      this._build('.docker', 90, 50, '#1FB6E8', false, 1.2);
      this._build('.fig', 75, 50, '#A41212', false, 1.6);
      this._build('.jenkins', 80, 65, '#AAAAAC', true, 1.2);
      this._build('.apache', 60, 60, '#EA119C', false, 0.9);
      this._build('.varnish', 60, 25, '#73B9E3', true);
      this._build('.haproxy', 60, 25, '#6BF141', true);
      this._build('.linux', 100, 75, '#6D6D6D', false);

    this._build('.collaboration', 90, 80, '#F17D23', false);
      this._build('.github', 80, 85, '#323131', false, 1.2, 1.7);
      this._build('.gitlab', 80, 75, '#656565', false, 1.2);
      this._build('.git', 80, 80, '#F15034', false, 1.6);
      this._build('.trac', 60, 80, '#B50600', false, 1.6);
      this._build('.kanban', 70, 65, '#edea55', true, 0.9, 1);

    this._build('.father', 150, 98, '#EA94B7', false, 1.2, 0.2);
      this._build('.aikido', 90, 85, '#333', false, 1.2, 1.9);
      this._build('.bike', 90, 85, '#828BA1', true, 0.8);

    this._build('.french', 90, 100, '#002680', false, 1.2, 1.5);
      this._build('.english', 90, 75, '#D1132C', false, 1.2);
      this._build('.spanish', 50, 15, '#FEC401', true, 1, 1);
  };

  /**
   * Bind window resize event.
   */
  this.handleResizing = function () {
    var fullWidthValue = 960;
    var width = $(window).width();
    var $section = $('section.interests');
    var $donuts = $section.find('> .donuts');

    if (width > fullWidthValue) {
      $donuts.width('100%');
      $section.height('900px');
      $donuts.css('zoom', 1);
      return;
    }

    var zoom = width / 1000;
    var height = width * 0.9;

    $donuts.width(width);
    $section.height(height);
    $donuts.css('zoom', zoom);

    // try to zoom and center donuts when resizing...
    if (isFirefox) {
      $donuts.css('-moz-transform', 'scale('+zoom+')');
      var marginLeftFix = -$donuts.position().left + 40;
      $donuts.css('margin-left', marginLeftFix + 'px');
    }
  };

  /**
   * Bind resize event to scale donuts.
   */
  this.bindResizeEvent = function () {
    var throttled = _.throttle(this.handleResizing, 100);
    $(window).resize(throttled);
  };
};

$(document).ready(function () {
  // IE11 fix
  document.createElement('main');

  var donuts = new Donuts();

  donuts.draw();
  donuts.handleResizing();
  donuts.bindResizeEvent();

  // Gecko sux sometimes...
  if (isFirefox) {
    $('body').css('letter-spacing', '-1px');
  }
});
