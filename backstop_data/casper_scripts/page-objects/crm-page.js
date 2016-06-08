'use strict';

var CrmPage = function (casper, scenario, viewPort) {
  this.casper = casper;
  this.scenario = scenario;
  this.viewPort = viewPort;

  try {
    this.config = require('../crm-config');
  } catch (e) {
    var sampleStructure = '{"url": "YOUR LOCAL URL", "credentials": {"name": "YOUR USERNAME", "pass": "YOUR PASSWORD"}}';
    casper.echo('You should create a "crm-config.json" file in the "casper_scripts" directory containing the following structure: ' + sampleStructure, 'ERROR');
  }
};

CrmPage.prototype = Object.create({
  loginIfNeeded: function () {
    // Check if we got redirected to the dashboard page
    var me = this;
    if (this.casper.getCurrentUrl().indexOf('/index.php?q=civicrm&reset=1') !== -1) {
      this.casper.echo('Logging in...', 'INFO');
      this.casper.thenOpen(me.config.url + '/welcome-page', function () {
        this.fill('form#user-login-form', me.config.credentials, true);
      });
      this.casper.thenOpen(this.scenario.url, function () {
        me.closeErrorNotifications();
        this.wait(3000);
      });
    }
  },
  waitForSelectorAndEvaluate: function(fnExecInBrowser, targetSelector) {
    var args = arguments;
    this.casper.waitForSelector(targetSelector, function () {
      this.evaluate.apply(this, args);
    }, function () {
      this.echo('Selector "' + targetSelector + '" not found', 'WARN_BAR');
    }, 3000);
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
  closeAllAlertMsgBlocks: function () {
    this.clickAll('.alert-danger > a.close');
  },
  closeErrorNotifications: function () {
    this.clickAll('a.ui-notify-cross.ui-notify-close');
  }
});

module.exports = CrmPage;
