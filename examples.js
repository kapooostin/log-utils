'use strict';

var utils = require('./');

for (var key in utils) {
  var val = utils[key];
  if (typeof val === 'string') {
    console.log(val);
  }
}

// console.log(utils.timestamp);
// console.log(utils.success);
