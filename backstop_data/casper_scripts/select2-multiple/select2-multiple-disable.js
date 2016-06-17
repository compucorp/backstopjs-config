'use strict';
module.exports = function (casper, scenario, vp) {
  var Page = require('../page-objects/form-page.js');
  var page = new Page(casper, scenario, vp);

  casper.echo('disabling selec2 multiple', 'INFO');

  casper.then(function () {
    page.disableSelect2('#s2id_preferred_communication_method');
    this.wait(1500);
  });
};
