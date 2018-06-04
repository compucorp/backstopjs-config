'use strict';
module.exports = function (casper, scenario, vp) {
  var Page = require('../page-objects/contact-page.js');
  var page = new Page(casper, scenario, vp);

  casper.then(function () {
    require('../common/close-notifications')(casper, scenario, vp);
    this.waitWhileSelector('.blockUI.blockOverlay');
  });
};
