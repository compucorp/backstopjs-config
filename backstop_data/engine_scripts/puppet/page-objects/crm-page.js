'use strict';

module.exports = class CrmPage {
  constructor (engine, scenario, viewPort) {
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
   * Clicks on the select2 option with the given label.
   *
   * @param {String} selector - The selector that identifies the select2 dropdown
   * @param {String} label
   */
  async clickSelect2Option (selector, label) {
    await this.engine.click(`${selector} [class^="select2-choice"]`);
    await this.engine.evaluate(label => {
      const xPath = `.//div[contains(@class, "select2-result-label")][text()="${label}"]/parent::*`;
      let XPathResult;
      const item = document.evaluate(xPath, document.body, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
      const event = document.createEvent('MouseEvent');

      event.initMouseEvent('mouseup', true, true);
      item.dispatchEvent(event);
    }, label);
  }

  /**
   * Closes all active notifications.
   */
  async closeErrorNotifications () {
    const exists = !!(await this.engine.$('.ui-notify-message'));
    if (exists) {
      console.log('Closing error notifications');
      await this.clickAll('a.ui-notify-cross.ui-notify-close');
      await this.engine.waitFor('.ui-notify-message', { hidden: true });
    }
  }

  /**
   * Opens all the accordions on the page
   */
  async openAllAccordions () {
    await this.clickAll('div.crm-accordion-wrapper.collapsed > div');
  }

  /**
   * Submits the current page form.
   */
  async submit () {
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

  /**
   * Waits for the Navigation to happens after some link (selector) is clicked.
   *
   * @param {String} selector - the css selector for the element to click and wait for navigation.
   */
  async clickAndWaitForNavigation (selector) {
    await this.engine.waitForSelector(selector);
    await Promise.all([
      this.engine.click(selector),
      this.engine.waitForNavigation()
    ]);
  }

  /**
   * Checks if there are no price fields present on the page or not
   * @param {String} type - the title of the message to be displayed
   */
  async checkIfPriceFieldsAreEmpty (type) {
    // checks for the messages div - appears if the list is empty.
    const priceFieldsEmpty = await this.engine.$('#crm-main-content-wrapper .messages');
    if (priceFieldsEmpty) {
      console.warn('No Price list present!');
      console.log(`Taking the "Price ${type} List" Page screenshot..`);
      return Promise.reject(new Error('list empty'));
    } else {
      return Promise.resolve('list not empty');
    }
  }
};
