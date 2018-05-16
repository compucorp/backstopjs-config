'use strict';

var CrmPage = require('./crm-page.js');

var FormPage = function (casper, scenario, viewPort) {
  CrmPage.call(this, casper, scenario, viewPort);
};

FormPage.prototype = Object.create(CrmPage.prototype, {
  /**
   * Focuses on the specified select2 dropdown.
   *
   * @param {String} select2ContainerSelector - the css selector for the select2
   * dropdown to focus on.
   */
  activateSelect2: {
    value: function (select2ContainerSelector) {
      this.waitForSelectorAndEvaluate(function (selector) {
        var event = document.createEvent('Event');
        event.initEvent('focus', true, true);
        document.querySelector(selector).dispatchEvent(event);
      }, select2ContainerSelector + ' input');
    }
  },

  /**
   * Blurs out of the specified select2 dropdown.
   *
   * @param {String} select2ContainerSelector - the css selector for the select2
   * dropdown to blur out of.
   */
  blurSelect2: {
    value: function (select2ContainerSelector) {
      this.waitForSelectorAndEvaluate(function (selector) {
        var event = document.createEvent('Event');
        event.initEvent('blur', true, true);
        document.querySelector(selector).dispatchEvent(event);
      }, select2ContainerSelector + ' input');
    }
  },

  /**
   * Clicks on a specific option inside the currently active select2 dropdown.
   *
   * @param {Number} nth - the number of the option to click on. This is a zero
   * based index.
   */
  clickSelect2NthOption: {
    value: function (nth) {
      var selector = '.select2-drop-active li:nth-of-type(' + nth + ')';
      this.waitForSelectorAndEvaluate(function (selector) {
        var event = document.createEvent('MouseEvent');
        event.initMouseEvent('mouseup', true, true);
        document.querySelector(selector).dispatchEvent(event);
      }, selector);
    }
  },

  /**
   * Disables a specific select2 dropdown.
   *
   * @param {String} select2ContainerSelector - the select2 dropdown to disable.
   */
  disableSelect2: {
    value: function (select2ContainerSelector) {
      this.addClassToElement(
        select2ContainerSelector,
        'select2-container-disabled'
      );
    }
  },

  /**
   * Opens the speficied select2 dropdown.
   *
   * @param {String} select2ContainerSelector - the select2 dropdown to open.
   */
  openSelect2DropDown: {
    value: function (select2ContainerSelector) {
      this.waitForSelectorAndEvaluate(function (selector) {
        /**
         * Phantomjs doesn't support the following event syntax yet. SlimerJS does.
         * (Leaving it here for reference)
         */
        // var event = new MouseEvent('mousedown', {
        //   bubbles: true
        // });
        var event = document.createEvent('MouseEvent');
        event.initMouseEvent('mousedown', true, true);
        document.querySelector(selector).dispatchEvent(event);
      }, select2ContainerSelector + ' .select2-choice');
    }
  },

  /**
   * Opens the specified select2 dropdown of the multiple type.
   *
   * @param {String} select2ContainerSelector - the select2 dropdown to open.
   */
  openSelect2MultipleDropDown: {
    value: function (select2ContainerSelector) {
      this.waitForSelectorAndEvaluate(function (selector) {
        document.querySelector(selector).click();
      }, select2ContainerSelector + ' .select2-choices');
    }
  },

  /**
   * Submits the current page form.
   */
  submit: {
    value: function () {
      this.clickFirst('#crm-main-content-wrapper form .crm-form-submit:not(.cancel)');
    }
  }
});

FormPage.prototype.constructor = FormPage;

module.exports = FormPage;
