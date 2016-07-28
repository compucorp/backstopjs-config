'use strict';
module.exports = function (casper, scenario, vp) {
  var Page = require('../page-objects/form-page.js');
  var page = new Page(casper, scenario, vp);

  casper.echo('opening select2', 'INFO');

  casper.then(function () {
    page.resizeElement('table.form-layout:nth-child(1) > tbody:nth-child(1) > tr:nth-child(3) > td:nth-child(3)',
      '50px', '250px');
    page.openSelect2DropDown('#s2id_phone_phone_type_id');
    this.wait(1500);
  });
};
