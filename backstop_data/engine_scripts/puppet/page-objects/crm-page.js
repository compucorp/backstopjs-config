'use strict';

module.exports = class CrmPage {

  constructor(engine, scenario, viewPort) {
    this.engine = engine;
    this.scenario = scenario;
    this.viewPort = viewPort;
  }

  /**
   * Waits and clicks every element that matches the target selector.
   *
   * @param {String} selector - the css selector of the target elements to
   * click.
   */
  async clickAll (selector) {
    await this.waitForSelectorAndEvaluate(selector, selector => {
      document.querySelectorAll(selector).forEach(element => element.click());
    });
  }

  /**
   * Clicks on a specific option inside the currently active select2 dropdown.
   *
   * @param {Number} nth - the number of the option to click on. This is a zero
   * based index.
   */
  async clickSelect2NthOption(nth) {
    await this.engine.click(`.select2-drop-active li:nth-of-type(${nth})`);
  }

  /**
   * Closes all active notifications.
   */
  async closeErrorNotifications () {
    const exists = !!(await this.engine.$('.ui-notify-message'));

    if (exists) {
      await this.engine.click('a.ui-notify-cross.ui-notify-close');
      await this.engine.waitFor('.ui-notify-message', { hidden: true });
    }
  }

  /**
   * Opens all the accordions on the page
   */
  async openAllAccordions() {
    await this.clickAll('div.crm-accordion-wrapper.collapsed > div');
  }

  /**
   * Opens the speficied select2 dropdown.
   *
   * @param {String} select2ContainerSelector - the select2 dropdown to open.
   */
  async openSelect2DropDown(select2ContainerSelector) {
    await this.engine.click(`${select2ContainerSelector} .select2-choice`);
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

  /**
   * Waits for an element and then evaluates a function on the browser.
   *
   * @param {String} selector - the css selector for the element to wait
   * @param {Function} fn - the callback function to be executed in
   * the browser after the target element is ready.
   * for.
   */
  async waitForSelectorAndEvaluate (selector, fn) {
    try {
      await this.engine.waitFor(selector, { timeout: 8000 });
      await this.engine.evaluate(fn, selector);
    } catch (e) {
      console.log('Selector "' + selector + '" not found');
    }
  }

  /**
   * Waits for the WYSIWYG to be visible on the page
   */
  async waitForWYSIWYG () {
    await this.engine.waitFor('.cke', { visible: true });
  }
}
