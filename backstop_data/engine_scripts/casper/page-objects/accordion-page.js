'use strict';

var FormPage = require('./form-page.js');

var AccordionPage = function (casper, scenario, viewPort) {
  FormPage.call(this, casper, scenario, viewPort);
};

AccordionPage.prototype = Object.create(FormPage.prototype, {
  openAllAccordions: {
    value: function () {
      this.clickAll('div.crm-accordion-wrapper.collapsed > div');
    }
  }
});
AccordionPage.prototype.constructor = AccordionPage;

module.exports = AccordionPage;
