'use strict';
module.exports = function (casper, scenario, vp) {
  var Page = require('../page-objects/contact-page.js');
  var page = new Page(casper, scenario, vp);

  casper.then(function () {
    page.clickFirst('.ui-tabs-anchor[title="Memberships"]');
    this.wait(1000);
  });
};
