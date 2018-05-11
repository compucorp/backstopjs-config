'use strict';

var CrmPage = function (casper, scenario, viewPort) {
  this.casper = casper;
  this.scenario = scenario;
  this.viewPort = viewPort;
};

CrmPage.prototype = Object.create({
  /**
   * Adds a css class to the specified element.
   *
   * @param {String} targetSelector - the css selector for the target element.
   * @param {String} className - the class name to add to the element.
   */
  addClassToElement: function (targetSelector, className) {
    this.waitForSelectorAndEvaluate(function (selector, newClass) {
      document.querySelector(selector).classList.add(newClass);
    }, targetSelector, className);
  },

  /**
   * Waits and clicks every element that matches the target selector.
   *
   * @param {String} targetSelector - the css selector of the target elements to
   * click.
   */
  clickAll: function (targetSelector) {
    this.waitForSelectorAndEvaluate(function (selector) {
      Array.prototype.forEach.call(
        document.querySelectorAll(selector),
        function (el) {
          el.click();
        }
      );
    }, targetSelector);
  },

  /**
   * Waits and clicks the first element that matches the target selector.
   *
   * @param {String} targetSelector - The css selector of the target element to
   * click.
   */
  clickFirst: function (targetSelector) {
    this.waitForSelectorAndEvaluate(function (selector) {
      document.querySelector(selector).click();
    }, targetSelector);
  },

  /**
   * Closes all active alert messages.
   */
  closeAllAlertMsgBlocks: function () {
    this.clickAll('.alert-danger > a.close');
  },

  /**
   * Closes all active notifications.
   */
  closeErrorNotifications: function () {
    this.clickAll('a.ui-notify-cross.ui-notify-close');
  },

  /**
   * Hides the target element by setting its display property to none.
   *
   * @param {String} targetSelector - the css selector for the element to hide.
   */
  hideElement: function (targetSelector) {
    this.waitForSelectorAndEvaluate(function (selector) {
      document.querySelector(selector).style.display = 'none';
    }, targetSelector);
  },

  /**
   * Changes the width and height of the target element.
   *
   * @param {String} targetSelector - the css selector for the element that will
   * be resized.
   * @param {String|Number} width - the new width for the target element.
   * @param {String|Number} height - the new height for the target element.
   */
  resizeElement: function (targetSelector, width, height) {
    this.waitForSelectorAndEvaluate(function (selector, width, height) {
      var el = document.querySelector(selector);
      el.style.width = width;
      el.style.height = height;
    }, targetSelector, width, height);
  },

  /**
   * Waits for an element and then evaluates a function on the browser.
   *
   * @param {Function} fnExecInBrowser - the callback function to be executed in
   * the browser after the target element is ready.
   * @param {String} targetSelector - the css selector for the element to wait
   * for.
   */
  waitForSelectorAndEvaluate: function (fnExecInBrowser, targetSelector) {
    var args = arguments;
    this.casper.waitForSelector(targetSelector, function () {
      this.evaluate.apply(this, args);
    }, function () {
      this.echo('Selector "' + targetSelector + '" not found', 'WARN_BAR');
    }, 8000);
  },

  /**
   * Waits for the URL to change.
   */
  waitForUrlChange: function () {
    var oldUrl = this.casper.getCurrentUrl();

    return this.casper.waitFor(function () {
      return oldUrl !== this.casper.getCurrentUrl();
    }.bind(this));
  }
});

module.exports = CrmPage;
