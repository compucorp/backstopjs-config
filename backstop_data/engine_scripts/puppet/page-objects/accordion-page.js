'use strict';

var FormPage = require('./form-page.js');

module.exports = class AccordionPage extends FormPage {

  /**
   * Opens all the accordions on the page
   */
  async openAllAccordions() {
    await this.clickAll('div.crm-accordion-wrapper.collapsed > div');
  }
};
