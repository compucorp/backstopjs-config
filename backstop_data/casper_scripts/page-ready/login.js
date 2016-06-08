'use strict';
module.exports = function (casper, scenario, vp) {
  var Page = require('../page-objects/crm-page.js');
  var page = new Page(casper, scenario, vp);

  casper.echo('onReady.js', 'INFO');

  casper.then(function() {
    page.loginIfNeeded();
  });
};
