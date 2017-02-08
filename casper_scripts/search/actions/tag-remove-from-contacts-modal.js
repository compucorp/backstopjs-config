'use strict';
module.exports = function (casper, scenario, vp) {
  var Page = require('../page-objects/form-page.js');
  var page = new Page(casper, scenario, vp);

  casper.then(function () {
    require('./tag-remove-from-contacts')(casper, scenarios, vp);
    page.clickFirst('#popup-button');
  });
};
