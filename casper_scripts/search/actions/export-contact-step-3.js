'use strict';
module.exports = function (casper, scenario, vp) {
  var Page = require('../page-objects/form-page.js');
  var page = new Page(casper, scenario, vp);

  casper.then(function () {
    require('./export-contact')(casper, scenario, vp);
    page.clickFirst('[for="CIVICRM_QFID_2_4"]');
    page.clickFirst('#_qf_Select_next-bottom');
  });
};
