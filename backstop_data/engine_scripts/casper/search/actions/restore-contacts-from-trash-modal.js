'use strict';
module.exports = function (casper, scenario, vp) {
  var Page = require('../../page-objects/form-page.js');
  var page = new Page(casper, scenario, vp);

  casper.then(function () {
    require('./restore-contacts-from-trash')(casper, scenarios, vp);
    page.clickFirst('#popup-button');
  });
};
