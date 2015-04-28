var EXAMPLE_DATA = require('./example-data').results;

var moment = require('moment-timezone');

var oneBigMap = function (item) {
  console.log('oneBigMap');
  var cost = (item.impression_cost || 0) + (item.click_cost || 0);
  var revenue = (item.impression_revenue || 0) + (item.click_revenue || 0);
  var profit = revenue - cost;
  var impression = (item.impression || 0);
  var click = (item.click || 0);
  // this has calculated fields in it along w/ formatted dates
  return {
    cost: cost,
    revenue: revenue,
    profit: profit,
    // we treat no revenue as `null` margin, but could use zero instead
    margin: revenue ? (profit / revenue) : null,
    // we treat no impressions as `null` ctr, but could use zero instead
    ctr: impression ? (click / impression) : null,
    start: item.start,
    easternStart: moment.tz(item.start, 'US/Eastern').format('ha M/D/YY'),
  };
};


// add calculated fields like margin, ctr, and formatted dates
// and only show data for midnight until 6am
var res = EXAMPLE_DATA.map(oneBigMap).slice(0, 6);

// console.log(EXAMPLE_DATA);
console.log(res);
