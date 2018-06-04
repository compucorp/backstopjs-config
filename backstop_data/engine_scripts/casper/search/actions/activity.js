'use strict';
module.exports = function (casper, scenario, vp) {
  var Page = require('../../page-objects/form-page.js');
  var page = new Page(casper, scenario, vp);

  casper.then(function () {
    page.clickFirst('#_qf_Basic_refresh');
    page.clickFirst('#mark_x_3');
    this.wait(500);
    page.openSelect2DropDown('#s2id_task');
    this.wait(1000);
    page.clickSelect2NthOption(1);
    this.wait(1000);
    require('../../common/open-accordions')(casper, scenario, vp);
  });
};
