'use strict';

var SearchPage = function (casper, scenario, viewPort) {
  this.casper = casper;
  this.scenario = scenario;
  this.viewPort = viewPort;
};

SearchPage.prototype = Object.create({
  searchContact:  {
    value: function (select2ContainerSelector) {
      this.casper.waitForSelector('#_qf_Basic_refresh', function () {
        document.querySelector('#_qf_Basic_refresh').click()
      }, function () {
        this.echo(':(', 'WARN_BAR');
      }, 8000);
    }
  }
});

module.exports = SearchPage;
