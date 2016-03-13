'use strict';

require('mocha');
var assert = require('assert');
var utils = require('./');

describe('log-utils', function() {
  it('should export a (getter) function', function() {
    assert(utils);
    assert.equal(typeof utils, 'function');
  });
  it('should expose getters', function() {
    assert(utils.hasOwnProperty('symbol'));
    assert(utils.hasOwnProperty('check'));

    assert(utils.symbol.hasOwnProperty('error'));
    assert(utils.symbol.hasOwnProperty('success'));
    assert(utils.symbol.hasOwnProperty('info'));
    assert(utils.symbol.hasOwnProperty('warning'));

    assert(utils.hasOwnProperty('green'));
    assert(utils.hasOwnProperty('cyan'));
    assert(utils.hasOwnProperty('yellow'));
    assert(utils.hasOwnProperty('red'));

    assert(utils.hasOwnProperty('error'));
    assert(utils.hasOwnProperty('info'));
    assert(utils.hasOwnProperty('success'));
    assert(utils.hasOwnProperty('warning'));
  });
});
