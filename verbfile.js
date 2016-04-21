'use strict';

module.exports = function(verb) {
  verb.extendWith('verb-readme-generator');
  verb.data({colors: Object.keys(require('ansi-colors'))});
  verb.task('default', ['readme']);
};
