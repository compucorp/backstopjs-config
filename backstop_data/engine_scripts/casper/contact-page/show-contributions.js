'use strict';
module.exports = function (casper, scenario, vp) {
  var Page = require('../page-objects/contact-page.js');
  var page = new Page(casper, scenario, vp);

  casper.then(function () {
    page.clickFirst('.crm-contact-tabs-list a[title="Contributions"]');
    this.wait(1000);
  });
};
