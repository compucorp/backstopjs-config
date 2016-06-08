'use strict';
module.exports = function (casper, scenario, vp) {
  casper.echo('onBeforeEach.js', 'INFO');
};
