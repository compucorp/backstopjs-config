'use strict';
module.exports = function (casper, scenario, vp) {
  var Page = require('../page-objects/accordion-page.js');
  var page = new Page(casper, scenario, vp);

  casper.then(function () {
    this.echo('Clicking all accordion headers', 'INFO');
    page.openAllAccordions();
    this.waitWhileSelector('.loading-text', function () {
      this.wait(1000);
      this.echo('All accordion blocks loaded', 'INFO');
    }, function () {
      this.echo('Loaders still visible and timeout reached!', 'RED_BAR');
    }, 8000);
  });
};
