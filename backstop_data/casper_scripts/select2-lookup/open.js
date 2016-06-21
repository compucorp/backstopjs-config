'use strict';
module.exports = function (casper, scenario, vp) {
  var Page = require('../page-objects/form-page.js');
  var page = new Page(casper, scenario, vp);

  casper.echo('opening selec2 (lookup)', 'INFO');

  casper.then(function() {
    page.resizeElement('table.form-layout:nth-child(1)', '20px', '300px');
    page.resizeElement('table.form-layout:nth-child(1) > tbody:nth-child(1) > tr:nth-child(5) > td:nth-child(3)', '20px', '300px');
    page.openSelect2DropDown('#s2id_preferred_language');
    this.wait(1500);
  });
};
