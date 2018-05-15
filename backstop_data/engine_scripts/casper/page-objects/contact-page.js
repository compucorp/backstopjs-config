'use strict';

var FormPage = require('./form-page.js');

var ContactPage = function (casper, scenario, viewPort) {
  FormPage.call(this, casper, scenario, viewPort);
  this.hideElement('#console');
};

ContactPage.prototype = Object.create(FormPage.prototype, {});
ContactPage.prototype.constructor = ContactPage;
module.exports = ContactPage;
