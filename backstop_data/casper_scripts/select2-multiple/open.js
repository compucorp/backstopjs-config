'use strict';
module.exports = function (casper, scenario, vp) {
  var Page = require('../page-objects/form-page.js');
  var page = new Page(casper, scenario, vp);

  casper.echo('opening select2 (multiple)', 'INFO');

  casper.then(function() {
    page.resizeElement('table.form-layout:nth-child(1)', '20px', '200px');
    page.resizeElement('table.form-layout:nth-child(1) > tbody:nth-child(1) > tr:nth-child(4) > td:nth-child(2)', '20px', '200px');
    page.openSelect2MultipleDropDown('#s2id_preferred_communication_method');
    this.wait(1500);
  });
};
