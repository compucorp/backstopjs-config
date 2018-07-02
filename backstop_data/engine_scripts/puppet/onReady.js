'use strict';

const Page = require('../page-objects/crm-page.js');

module.exports = async (page, scenario, vp) => {
  console.log('SCENARIO > ' + scenario.label);
  await require('./clickAndHoverHelper')(page, scenario);

  await page.closeErrorNotifications();
  await page.waitForJSLibraries();
  await page.fixLayoutForTables();
  // add more ready handlers here...
};
