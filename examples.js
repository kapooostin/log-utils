'use strict';

const log = require('./');

for (let key in log) {
  if (typeof log[key] === 'string') {
    console.log(log[key], `${key}`);
  }
}

console.log(log.heading('foo', 'bar'));
// console.log(log.timestamp);
// console.log(log.symbols);
console.log(log.ok('   foo'));
console.log(log.ok('  foo'));
console.log(log.ok(' foo'));
console.log(log.ok('foo'));
