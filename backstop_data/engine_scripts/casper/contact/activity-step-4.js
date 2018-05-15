'use strict';
module.exports = function (casper, scenario, vp) {
  var Page = require('../page-objects/form-page.js');
  var page = new Page(casper, scenario, vp);

  casper.then(function () {
    require('./step-3')(casper, scenario, vp);

    page.clickFirst('#_qf_Preview_next-bottom')
    this.wait(3000)
  });
};
