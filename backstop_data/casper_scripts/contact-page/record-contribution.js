'use strict';
module.exports = function (casper, scenario, vp) {
  var Page = require('../page-objects/contact-page.js');
  var page = new Page(casper, scenario, vp);

  require('./show-contributions')(casper, scenario, vp);
  casper.then(function () {
    page.clickFirst('.CRM_Contribute_Form_Search a[accesskey="N"]');
    this.wait(1000);
    require('../common/open-accordions')(casper, scenario, vp);
    this.wait(10000);
  });
};
