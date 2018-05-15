'use strict';
module.exports = function (casper, scenario, vp) {
  var Page = require('../../page-objects/crm-page.js');
  var page = new Page(casper, scenario, vp);

  casper.then(function () {
    require('./email-schedule')(casper, scenario, vp);
    page.clickFirst('a[href="#tab-response"]');
  });
};
