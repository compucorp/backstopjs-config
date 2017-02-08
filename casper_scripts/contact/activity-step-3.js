'use strict';
module.exports = function (casper, scenario, vp) {
  var Page = require('../page-objects/form-page.js');
  var page = new Page(casper, scenario, vp);

  casper.then(function () {
    require('./step-2')(casper, scenario, vp);

    page.clickFirst('#_qf_MapField_next-bottom')
  });
};
