'use strict';
module.exports = function (casper, scenario, vp) {
  var Page = require('../page-objects/form-page.js');
  var page = new Page(casper, scenario, vp);
  casper.echo('clicking select2 option', 'INFO');
  casper.then(function () {
    page.openSelect2DropDown('#s2id_phone_phone_type_id');
    page.clickSelect2NthOption(2);
    page.blurSelect2('#s2id_phone_phone_type_id');
    this.wait(500);
  });
};
