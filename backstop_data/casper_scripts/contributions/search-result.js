'use strict';
module.exports = function (casper, scenario, vp) {
  var Page = require('../page-objects/form-page.js');
  var page = new Page(casper, scenario, vp);

  require('../common/open-accordions')(casper, scenario, vp);
  casper.then(function () {
    page.clickFirst('#_qf_Search_refresh');
  });
};
