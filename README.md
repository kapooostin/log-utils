# log-utils [![NPM version](https://img.shields.io/npm/v/log-utils.svg?style=flat)](https://www.npmjs.com/package/log-utils) [![NPM monthly downloads](https://img.shields.io/npm/dm/log-utils.svg?style=flat)](https://npmjs.org/package/log-utils) [![NPM total downloads](https://img.shields.io/npm/dt/log-utils.svg?style=flat)](https://npmjs.org/package/log-utils) [![Linux Build Status](https://img.shields.io/travis/jonschlinkert/log-utils.svg?style=flat&label=Travis)](https://travis-ci.org/jonschlinkert/log-utils)

> Tiny wrapper around ansi-colors to add colored symbols and a timestamp.

Please consider following this project's author, [Jon Schlinkert](https://github.com/jonschlinkert), and consider starring the project to show your :heart: and support.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save log-utils
```

## Usage

```js
const log = require('log-utils');
```

## API

### [.error](index.js#L23)

Get a red error symbol.

**Example**

```js
console.log(log.error); //=> ✖
```

### [.info](index.js#L35)

Get a cyan info symbol.

**Example**

```js
console.log(log.info); //=> ℹ
```

### [.success](index.js#L47)

Get a green success symbol.

**Example**

```js
console.log(log.success); //=> ✔
```

### [.warning](index.js#L59)

Get a yellow warning symbol.

**Example**

```js
console.log(log.warning); //=> ⚠
```

### [.timestamp](index.js#L71)

Get a formatted timestamp.

**Example**

```js
console.log(log.timestamp); //=> [15:27:46]
```

### [.ok](index.js#L93)

Returns a formatted string prefixed by a green check.

**Example**

```js
console.log(log.ok('   foo'));
console.log(log.ok('  foo'));
console.log(log.ok(' foo'));
console.log(log.ok('foo'));
// Results in:
//    ✔ foo
//   ✔ foo
//  ✔ foo
// ✔ foo
```

### [.heading](index.js#L112)

Make the given text bold and underlined.

**Example**

```js
console.log(log.heading('foo'));
// or
console.log(log.heading('foo', 'bar'));
```

### Colors

Available colors from [ansi-colors](https://github.com/doowb/ansi-colors):

## Changes

**v0.2.0 (2016-07-16)**

* `removed`: all spinner methods

**v0.1.5 (2016-07-16)**

* `added`: `.header` method
* `fixed`: `.ok` method, so that whitespace is respected

## About

<details>
<summary><strong>Contributing</strong></summary>

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

</details>

<details>
<summary><strong>Running Tests</strong></summary>

Running and reviewing unit tests is a great way to get familiarized with a library and its API. You can install dependencies and run tests with the following command:

```sh
$ npm install && npm test
```

</details>

<details>
<summary><strong>Building docs</strong></summary>

_(This project's readme.md is generated by [verb](https://github.com/verbose/verb-generate-readme), please don't edit the readme directly. Any changes to the readme must be made in the [.verb.md](.verb.md) readme template.)_

To generate the readme, run the following command:

```sh
$ npm install -g verbose/verb#dev verb-generate-readme && verb
```

</details>

### Related projects

You might also be interested in these projects:

[ansi-colors](https://www.npmjs.com/package/ansi-colors): Easily add ANSI colors to your text and symbols in the terminal. A faster drop-in… [more](https://github.com/doowb/ansi-colors) | [homepage](https://github.com/doowb/ansi-colors "Easily add ANSI colors to your text and symbols in the terminal. A faster drop-in replacement for chalk, kleur and turbocolor (without the dependencies and rendering bugs).")

### Contributors

| **Commits** | **Contributor** |  
| --- | --- |  
| 23 | [jonschlinkert](https://github.com/jonschlinkert) |  
| 5  | [doowb](https://github.com/doowb) |  

### Author

**Jon Schlinkert**

* [GitHub Profile](https://github.com/jonschlinkert)
* [Twitter Profile](https://twitter.com/jonschlinkert)
* [LinkedIn Profile](https://linkedin.com/in/jonschlinkert)

### License

Copyright © 2018, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT License](LICENSE).

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.8.0, on November 17, 2018._