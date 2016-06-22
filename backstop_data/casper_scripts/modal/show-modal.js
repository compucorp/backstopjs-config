'use strict';
module.exports = function (casper, scenario, vp) {
  var Page = require('../page-objects/accordion-page.js');
  var page = new Page(casper, scenario, vp);

  casper.then(function () {
    page.openAllAccordions();
    this.waitWhileSelector('.loading-text', function () {
      this.wait(1000);
      page.clickFirst('.crm-option-edit-link');
      this.waitForSelector('.ui-dialog-content table', function () {
        this.echo('Modal visible', 'INFO');
      }, function () {
        this.echo('Modal not found!', 'RED_BAR');
      }, 8000);
    }, function () {
      this.echo('Loaders still visible and timeout reached!', 'RED_BAR');
    }, 8000);
  });
};
