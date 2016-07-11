'use strict';

var utils = require('./');

for (var key in utils) {
  var val = utils[key];
  if (typeof val === 'string') {
    console.log(val, `(${key})`);
  }
}

// console.log(utils.heading('foo', 'bar'));
// console.log(utils.timestamp);
// console.log(utils.symbol);
utils.ok('   foo');
