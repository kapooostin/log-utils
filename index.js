/*!
 * log-utils <https://github.com/jonschlinkert/log-utils>
 * Copyright (c) 2016-present, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

const time = require('time-stamp');
const colors = require('ansi-colors');

/**
 * Get a red error symbol.
 *
 * ```js
 * console.log(log.error); //=> ✖
 * ```
 * @name .error
 * @api public
 */
const error = colors.red(colors.symbols.cross),

/**
 * Get a cyan info symbol.
 *
 * ```js
 * console.log(log.info); //=> ℹ
 * ```
 * @name .info
 * @api public
 */
const info = colors.cyan(colors.symbols.info),

/**
 * Get a green success symbol.
 *
 * ```js
 * console.log(log.success); //=> ✔
 * ```
 * @name .success
 * @api public
 */
const success = colors.green(colors.symbols.check),

/**
 * Get a yellow warning symbol.
 *
 * ```js
 * console.log(log.warning); //=> ⚠
 * ```
 * @name .warning
 * @api public
 */
const warning = colors.yellow(colors.symbols.warning),

/**
 * Get a formatted timestamp.
 *
 * ```js
 * console.log(log.timestamp); //=> [15:27:46]
 * ```
 * @name .timestamp
 * @api public
 */
const timestamp = () => `[${colors.gray(time('HH:mm:ss'))}]`;

/**
 * Returns a formatted string prefixed by a green check.
 *
 * ```js
 * console.log(log.ok('   foo'));
 * console.log(log.ok('  foo'));
 * console.log(log.ok(' foo'));
 * console.log(log.ok('foo'));
 * // Results in:
 * //    ✔ foo
 * //   ✔ foo
 * //  ✔ foo
 * // ✔ foo
 * ```
 * @name .ok
 * @api public
 */
const ok = str => str.replace(
  /^(\s*)(.*?)$/,
  (m, s, v) => `${s}${success} ${v}`
);

/**
 * Make the given text bold and underlined.
 *
 * ```js
 * console.log(log.heading('foo'));
 * // or
 * console.log(log.heading('foo', 'bar'));
 * ```
 * @name .heading
 * @api public
 */

const heading = (...args) => colors.bold.underline(
  args.filter(v => v !== void 0)
      .map(String)
      .join(' ')
);

/**
 * Expose `log`
 */
const log = {
  error,
  info,
  success,
  warning,
  timestamp,
  ok,
  heading,
};

log.__proto__ = colors;
module.exports = log;
