'use strict';

var clear = require('clear-require');

module.exports = function(verb) {
  verb.use(require('verb-generate-readme'));
  clear('ansi-colors');
  verb.data({colors: Object.keys(require('ansi-colors'))});
  verb.helper('list', function(colors) {
    var len = colors.length;
    var idx = -1;
    var str = '';
    while (++idx < len) {
      str += `\n- \`.${colors[idx]}\``;
    }
    return str;
  });
  verb.task('default', ['readme']);
};
