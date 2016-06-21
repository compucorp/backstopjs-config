'use strict';
module.exports = function (casper, scenario, vp) {
  var Page = require('../page-objects/form-page.js');
  var page = new Page(casper, scenario, vp);
  casper.echo('clicking select2 option', 'INFO');
  casper.then(function () {
    page.openSelect2MultipleDropDown('#s2id_preferred_communication_method');
    page.clickSelect2NthOption(2);
    this.wait(500);
  });
};
