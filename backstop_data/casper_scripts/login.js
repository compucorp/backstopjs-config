'use strict';

module.exports = function (casper, scenario, vp) {

  var config;
  try {
    config = require('./crm-config');
  } catch (e) {
    var sampleStructure =
      '{"url": "YOUR LOCAL URL", "credentials": {"name": "YOUR USERNAME", "pass": "YOUR PASSWORD"}}';
    casper.echo(
      'You should create a "crm-config.json" file in the "casper_scripts" directory containing the following structure: ' +
      sampleStructure, 'ERROR');
  }

  casper.echo('Logging in before starting...', 'INFO');

  casper.thenOpen(config.url + '/welcome-page', function () {
    var loginFormSelector = 'form#user-login-form';
    casper.waitForSelector(loginFormSelector, function () {
      this.fill(loginFormSelector, config.credentials, true);
    }, function () {
      this.echo('Login form not found!', 'RED_BAR');
    }, 8000);
  });
};
