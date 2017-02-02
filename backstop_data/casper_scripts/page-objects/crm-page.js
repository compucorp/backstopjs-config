'use strict';

var CrmPage = function (casper, scenario, viewPort) {
  this.casper = casper;
  this.scenario = scenario;
  this.viewPort = viewPort;
};

CrmPage.prototype = Object.create({
  waitForSelectorAndEvaluate: function (fnExecInBrowser, targetSelector) {
    var args = arguments;
    this.casper.waitForSelector(targetSelector, function () {
      this.evaluate.apply(this, args);
    }, function () {
      this.echo('Selector "' + targetSelector + '" not found', 'WARN_BAR');
    }, 8000);
  },
  clickFirst: function (targetSelector) {
    this.waitForSelectorAndEvaluate(function (selector) {
      document.querySelector(selector).click();
    }, targetSelector);
  },
  clickAll: function (targetSelector) {
    this.waitForSelectorAndEvaluate(function (selector) {
      Array.prototype.forEach.call(document.querySelectorAll(selector), function (el) {
        el.click();
      });
    }, targetSelector);
  },
  resizeElement: function (targetSelector, width, height) {
    this.waitForSelectorAndEvaluate(function (selector, width, height) {
      var el = document.querySelector(selector);
      el.style.width = width;
      el.style.height = height;
    }, targetSelector, width, height);
  },
  addClassToElement: function (targetSelector, className) {
    this.waitForSelectorAndEvaluate(function (selector, newClass) {
      document.querySelector(selector).classList.add(newClass);
    }, targetSelector, className);
  },
  closeAllAlertMsgBlocks: function () {
    this.clickAll('.alert-danger > a.close');
  },
  closeErrorNotifications: function () {
    this.clickAll('a.ui-notify-cross.ui-notify-close');
  },
  hideElement: function(targetSelector) {
    this.waitForSelectorAndEvaluate(function (selector) {
      document.querySelector(selector).style.display = 'none';
    }, targetSelector);
  },
  changeTab: function(targetSelector) {
    this.waitForSelectorAndEvaluate(function (selector) {
      document.querySelector('.ui-tabs-active').classList.remove('ui-tabs-active', 'ui-state-active');
      document.querySelector('.crm-tab-button[aria-labelledby="' + selector.split('#')[1] + '"]').classList.add('ui-tabs-active', 'ui-state-active');

      Array.prototype.map.call(document.querySelectorAll('.ui-tabs-panel'), function(tab) {
        return tab.style.display = 'none';
      });
      document.querySelector('.ui-tabs-panel[aria-labelledby="' + selector.split('#')[1] + '"]').style.display = 'block';
    }, targetSelector);
  }
});

module.exports = CrmPage;
