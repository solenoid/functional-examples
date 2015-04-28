var EXAMPLE_DATA = require('./example-data').results;

var moment = require('moment-timezone');

// add calculated fields like margin, ctr, and formatted dates
// and only show data for midnight until 6am
var res = [];
for (var i = 0, len = EXAMPLE_DATA.length; i < 6; i++) {
  console.log('loopy');
  var cost = (EXAMPLE_DATA[i].impression_cost || 0) + (EXAMPLE_DATA[i].click_cost || 0);
  var revenue = (EXAMPLE_DATA[i].impression_revenue || 0) + (EXAMPLE_DATA[i].click_revenue || 0);
  var profit = revenue - cost;
  var impression = (EXAMPLE_DATA[i].impression || 0);
  var click = (EXAMPLE_DATA[i].click || 0);
  res.push({
    cost: cost,
    revenue: revenue,
    profit: profit,
    // we treat no revenue as `null` margin, but could use zero instead
    margin: revenue ? (profit / revenue) : null,
    // we treat no impressions as `null` ctr, but could use zero instead
    ctr: impression ? (click / impression) : null,
    start: EXAMPLE_DATA[i].start,
    easternStart: moment.tz(EXAMPLE_DATA[i].start, 'US/Eastern').format('ha M/D/YY'),
  });
}

// console.log(EXAMPLE_DATA);
console.log(res);
