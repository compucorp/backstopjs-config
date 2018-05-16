'use strict';
module.exports = function (casper, scenario, vp) {
  var Page = require('../page-objects/contact-page.js');
  var page = new Page(casper, scenario, vp);

  require('./show-memberships')(casper, scenario, vp);
  casper.then(function () {
    page.clickFirst('a[accesskey="N"][href$="context=membership"]');
    this.waitWhileSelector('.blockUI.blockOverlay');
    this.wait(1000);
  });
};