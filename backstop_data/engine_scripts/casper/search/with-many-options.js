'use strict';
module.exports = function (casper, scenario, vp) {
  var Page = require('../page-objects/form-page.js');
  var page = new Page(casper, scenario, vp);

  casper.then(function () {
    page.openSelect2MultipleDropDown('#s2id_tag');
    page.clickSelect2NthOption(4);
    page.openSelect2MultipleDropDown('#s2id_tag');
    page.clickSelect2NthOption(3);
    page.openSelect2MultipleDropDown('#s2id_tag');
    page.clickSelect2NthOption(1);
    page.openSelect2MultipleDropDown('#s2id_tag');
    page.clickSelect2NthOption(1);
    page.openSelect2MultipleDropDown('#s2id_tag');
    page.clickSelect2NthOption(1);
  });
};
