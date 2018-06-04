'use strict';
module.exports = function (casper, scenario, vp) {
  var Page = require('../page-objects/form-page.js');
  var page = new Page(casper, scenario, vp);

  casper.then(function () {
    this.page.uploadFile('#uploadFile', 'mocks/CiviCRM_Contact_Search.csv');
    page.clickFirst('#_qf_DataSource_upload-bottom')
  });
};
