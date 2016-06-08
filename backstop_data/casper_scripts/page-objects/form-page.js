'use strict';

var CrmPage = require('./crm-page.js');

var FormPage = function (casper, scenario, viewPort) {
  CrmPage.call(this, casper, scenario, viewPort);
};

FormPage.prototype = Object.create(CrmPage.prototype, {
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
  openSelect2MultipleDropDown: {
    value: function (select2ContainerSelector) {
      this.waitForSelectorAndEvaluate(function (selector) {
        document.querySelector(selector).click();
      }, select2ContainerSelector + ' .select2-choices');
    }
  },
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
  activateSelect2: {
    value: function (select2ContainerSelector) {
      this.waitForSelectorAndEvaluate(function (selector) {
        var event = document.createEvent('Event');
        event.initEvent('focus', true, true);
        document.querySelector(selector).dispatchEvent(event);
      }, select2ContainerSelector + ' input');
    }
  },
  blurSelect2: {
    value: function (select2ContainerSelector) {
      this.waitForSelectorAndEvaluate(function (selector) {
        var event = document.createEvent('Event');
        event.initEvent('blur', true, true);
        document.querySelector(selector).dispatchEvent(event);
      }, select2ContainerSelector + ' input');
    }
  }
});
FormPage.prototype.constructor = FormPage;

module.exports = FormPage;
