/* global d3 */
/* jshint strict:false */

'use strict';

var drawDonuts = function (
    selector,
    diameter, pourcent,
    background, color,
    brighterValue, fontSize
  ) {
    brighterValue = brighterValue || 0.7;
    fontSize = fontSize || 1;

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

    var text = $(selector).find('span').eq(0).text();

    var svg = d3.select(selector).append('svg')
      .attr('width', width)
      .attr('height', height);

    var container = svg.append('g')
      .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

    container.selectAll('path')
      .data(pie(dataset.value))
      .enter().append('path')
      .attr('fill', function(d, i) {
        return (i > 0 &&  brighterBg) || bg;
      })
      .attr('d', arc);

    var container2 = svg.append('g')
      .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

    container2.selectAll('path')
      .data(pie([100]))
      .enter().append('path')
      .attr('fill', function() { return brighterBg; })
      .attr('d', innerArc);

    container2.append('text')
      .text(function() { return text; })
      .style('fill', function() { return color; })
      .style('font-size', function() {
        this.fontSize = diameter / text.length * 1.3 * fontSize;
        return this.fontSize + 'px'; })
      .style('font-weight', 'bold')
      .attr('dx', function() { return -this.getBBox().width / 2; })
      .attr('dy', function() {
        return this.getBBox().height / 3.5;
      });
  };

module.exports = {
  drawDonuts: drawDonuts
};
