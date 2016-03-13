/*!
 * log-utils <https://github.com/jonschlinkert/log-utils>
 *
 * Copyright (c) 2016, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var utils = require('ansi-colors');
var fn = require;
require = utils;

/**
 * Utils
 */

require('error-symbol');
require('info-symbol');
require('success-symbol', 'check');
require('warning-symbol');
require('time-stamp');
require = fn;

utils.colors = require('ansi-colors');
utils.symbol = {};

/**
 * Error symbol.
 *
 * ```js
 * console.log(utils.symbol.error);
 * //=> ✖
 * ```
 * @name .symbol.error
 * @api public
 */

define(utils.symbol, 'error', function() {
  return utils.errorSymbol;
});

/**
 * Info symbol.
 *
 * ```js
 * console.log(utils.symbol.info);
 * //=> ℹ
 * ```
 * @name .symbol.info
 * @api public
 */

define(utils.symbol, 'info', function() {
  return utils.infoSymbol;
});

/**
 * Success symbol.
 *
 * ```js
 * console.log(utils.symbol.success);
 * //=> ✔
 * ```
 * @name .symbol.success
 * @api public
 */

define(utils.symbol, 'success', function() {
  return utils.check;
});

/**
 * Warning symbol.
 *
 * ```js
 * console.log(utils.symbol.warning);
 * //=> ⚠
 * ```
 * @name .symbol.warning
 * @api public
 */

define(utils.symbol, 'warning', function() {
  return utils.warningSymbol;
});

/**
 * Get a red error symbol.
 *
 * ```js
 * console.log(utils.error);
 * ```
 * @name .error
 * @api public
 */

define(utils, 'error', function() {
  return utils.red(utils.symbol.error);
});

/**
 * Get a cyan info symbol.
 *
 * ```js
 * console.log(utils.info);
 * ```
 * @name .info
 * @api public
 */

define(utils, 'info', function() {
  return utils.cyan(utils.symbol.info);
});

/**
 * Get a green success symbol.
 *
 * ```js
 * console.log(utils.success);
 * ```
 * @name .success
 * @api public
 */

define(utils, 'success', function() {
  return utils.green(utils.symbol.success);
});

/**
 * Get a yellow warning symbol.
 *
 * ```js
 * console.log(utils.warning);
 * ```
 * @name .warning
 * @api public
 */

define(utils, 'warning', function() {
  return utils.yellow(utils.symbol.warning);
});

/**
 * Get a formatted timestamp.
 *
 * ```js
 * console.log(utils.timestamp);
 * ```
 * @name .timestamp
 * @api public
 */

define(utils, 'timestamp', function() {
  return '[' + utils.gray(utils.timeStamp('HH:mm:ss')) + ']';
});

function define(obj, prop, fn) {
  Object.defineProperty(obj, prop, {
    configurable: true,
    enumerable: true,
    get: fn
  });
}

/**
 * Expose `utils`
 */

module.exports = utils;

