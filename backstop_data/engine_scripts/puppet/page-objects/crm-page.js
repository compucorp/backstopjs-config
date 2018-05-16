'use strict';

module.exports = class CrmPage {

  constructor(engine, scenario, viewPort) {
    this.engine = engine;
    this.scenario = scenario;
    this.viewPort = viewPort;
  }

  /**
   * Adds a css class to the specified element.
   *
   * @param {String} targetSelector - the css selector for the target element.
   * @param {String} className - the class name to add to the element.
   */
  addClassToElement (targetSelector, className) {
    this.waitForSelectorAndEvaluate(function (selector, newClass) {
      document.querySelector(selector).classList.add(newClass);
    }, targetSelector, className);
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
   * Waits and clicks the first element that matches the target selector.
   *
   * @param {String} targetSelector - The css selector of the target element to
   * click.
   */
  clickFirst (targetSelector) {
    this.waitForSelectorAndEvaluate(function (selector) {
      document.querySelector(selector).click();
    }, targetSelector);
  }

  /**
   * Closes all active alert messages.
   */
  closeAllAlertMsgBlocks () {
    this.clickAll('.alert-danger > a.close');
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
   * Hides the target element by setting its display property to none.
   *
   * @param {String} targetSelector - the css selector for the element to hide.
   */
  hideElement (targetSelector) {
    this.waitForSelectorAndEvaluate(function (selector) {
      document.querySelector(selector).style.display = 'none';
    }, targetSelector);
  }

  /**
   * Changes the width and height of the target element.
   *
   * @param {String} targetSelector - the css selector for the element that will
   * be resized.
   * @param {String|Number} width - the new width for the target element.
   * @param {String|Number} height - the new height for the target element.
   */
  resizeElement (targetSelector, width, height) {
    this.waitForSelectorAndEvaluate(function (selector, width, height) {
      var el = document.querySelector(selector);
      el.style.width = width;
      el.style.height = height;
    }, targetSelector, width, height);
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
   * Waits for the URL to change.
   */
  waitForUrlChange () {
    var oldUrl = this.casper.getCurrentUrl();

    return this.casper.waitFor(function () {
      return oldUrl !== this.casper.getCurrentUrl();
    }.bind(this));
  }
}
