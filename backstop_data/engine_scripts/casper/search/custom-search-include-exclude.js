'use strict';
module.exports = function (casper, scenario, vp) {
  var Page = require('../page-objects/form-page.js');
  var page = new Page(casper, scenario, vp);

  casper.then(function () {
    page.clickFirst('label[for="CIVICRM_QFID_1_andOr"]');
    page.clickFirst('#_qf_Custom_refresh-bottom');
  });
};
