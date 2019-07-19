'use strict';

const Page = require('../page-objects/crm-page.js');

module.exports = async (engine, scenarios, viewports) => {
  const page = await Page.build(engine, scenarios, viewports);

  await page.clickAndWaitForNavigation('a[title="Edit Personal Campaign Page"]');
};
