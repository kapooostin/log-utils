'use strict';

require('mocha');
const assert = require('assert');
const log = require('./');

describe('log-utils', function() {
  it('should export a function', function() {
    assert(log);
    assert.equal(typeof log, 'function');
  });

  it('should expose getters', function() {
    assert(log.symbols);
    assert(log.symbols.hasOwnProperty('check'));

    assert(log.symbols.hasOwnProperty('cross'));
    assert(log.symbols.hasOwnProperty('check'));
    assert(log.symbols.hasOwnProperty('info'));
    assert(log.symbols.hasOwnProperty('warning'));

    assert.equal(typeof log.green, 'function');
    assert.equal(typeof log.cyan, 'function');
    assert.equal(typeof log.yellow, 'function');
    assert.equal(typeof log.red, 'function');

    assert(log.hasOwnProperty('error'));
    assert(log.hasOwnProperty('info'));
    assert(log.hasOwnProperty('success'));
    assert(log.hasOwnProperty('warning'));
  });
});
