'use strict';

const Page = require('../page-objects/crm-page.js');

module.exports = async (engine, scenarios, viewPorts) => {
  const page = new Page(engine, scenarios, viewPorts);

  await page.clickAndWaitForNavigation('a[title="Edit Personal Campaign Page"]');

}
