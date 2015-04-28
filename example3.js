var EXAMPLE_DATA = require('./example-data').results;

var un = require('underscore');
var moment = require('moment-timezone');

// http://en.wikipedia.org/wiki/Gross_margin
var marginCalc = function (item) {
  console.log('marginCalc');
  var cost = (item.impression_cost || 0) + (item.click_cost || 0);
  var revenue = (item.impression_revenue || 0) + (item.click_revenue || 0);
  var profit = revenue - cost;
  return un.assign({
    cost: cost,
    revenue: revenue,
    profit: profit,
    // we treat no revenue as `null` margin, but could use zero instead
    margin: revenue ? (profit / revenue) : null,
  }, item);
};

// http://en.wikipedia.org/wiki/Click-through_rate
var ctrCalc = function (item) {
  console.log('ctrCalc');
  var impression = (item.impression || 0);
  var click = (item.click || 0);
  // TODO talk about mutation
  return un.assign({
    // we treat no impressions as `null` ctr, but could use zero instead
    ctr: impression ? (click / impression) : null,
  }, item);
};

var dateCalc = function (item) {
  console.log('dateCalc');
  return un.assign({
    easternStart: moment.tz(item.start, 'US/Eastern').format('ha M/D/YY'),
  }, item);
};

// add calculated fields like margin, ctr, and formatted dates
// and only show data for midnight until 6am

// by composing (aka wrapping) function calls
// var res = un.take(un.map(un.map(un.map(EXAMPLE_DATA, marginCalc), ctrCalc), dateCalc), 6);
// using idomatic chaining
var res = un.chain(EXAMPLE_DATA).map(marginCalc).map(ctrCalc).map(dateCalc).take(6).value();
console.log(res);
