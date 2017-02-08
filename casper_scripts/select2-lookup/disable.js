'use strict';
module.exports = function (casper, scenario, vp) {
  var Page = require('../page-objects/form-page.js');
  var page = new Page(casper, scenario, vp);

  casper.echo('disabling select2 (lookup)', 'INFO');

  casper.then(function () {
    page.disableSelect2('#s2id_preferred_language');
    this.wait(1500);
  });
};
