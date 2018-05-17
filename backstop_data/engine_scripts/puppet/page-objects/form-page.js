'use strict';

var CrmPage = require('./crm-page.js');

module.exports = class FormPage extends CrmPage {
  /**
   * Focuses on the specified select2 dropdown.
   *
   * @param {String} select2ContainerSelector - the css selector for the select2
   * dropdown to focus on.
   */
  activateSelect2(select2ContainerSelector) {
    this.waitForSelectorAndEvaluate(function (selector) {
      var event = document.createEvent('Event');
      event.initEvent('focus', true, true);
      document.querySelector(selector).dispatchEvent(event);
    }, select2ContainerSelector + ' input');
  }

  /**
   * Blurs out of the specified select2 dropdown.
   *
   * @param {String} select2ContainerSelector - the css selector for the select2
   * dropdown to blur out of.
   */
  blurSelect2(select2ContainerSelector) {
    this.waitForSelectorAndEvaluate(function (selector) {
      var event = document.createEvent('Event');
      event.initEvent('blur', true, true);
      document.querySelector(selector).dispatchEvent(event);
    }, select2ContainerSelector + ' input');
  }

  /**
   * Clicks on a specific option inside the currently active select2 dropdown.
   *
   * @param {Number} nth - the number of the option to click on. This is a zero
   * based index.
   */
  async clickSelect2NthOption(nth) {
    const selector = `.select2-drop-active li:nth-of-type(${nth})`;

    await this.waitForSelectorAndEvaluate(selector, selector => {
      const event = document.createEvent('MouseEvent');

      event.initMouseEvent('mouseup', true, true);
      document.querySelector(selector).dispatchEvent(event);
    });
  }

  /**
   * Disables a specific select2 dropdown.
   *
   * @param {String} select2ContainerSelector - the select2 dropdown to disable.
   */
  disableSelect2(select2ContainerSelector) {
    this.addClassToElement(
      select2ContainerSelector,
      'select2-container-disabled'
    );
  }

  /**
   * Opens the speficied select2 dropdown.
   *
   * @param {String} select2ContainerSelector - the select2 dropdown to open.
   */
  async openSelect2DropDown(select2ContainerSelector) {
    const selector = `${select2ContainerSelector} .select2-choice`;

    await this.waitForSelectorAndEvaluate(selector, selector => {
      const event = document.createEvent('MouseEvent');

      event.initMouseEvent('mousedown', true, true);
      document.querySelector(selector).dispatchEvent(event);
    });
  }

  /**
   * Opens the specified select2 dropdown of the multiple type.
   *
   * @param {String} select2ContainerSelector - the select2 dropdown to open.
   */
  async openSelect2MultipleDropDown(select2ContainerSelector) {
    const selector = `${select2ContainerSelector} .select2-choices`;

    this.waitForSelectorAndEvaluate(selector, selector => {
      document.querySelector(selector).click();
    });
  }

  /**
   * Submits the current page form.
   */
  async submit() {
    await this.engine.click('#crm-main-content-wrapper form .crm-submit-buttons:last-of-type .crm-form-submit:not(.cancel)');
    await this.engine.waitForNavigation();
  }
}
