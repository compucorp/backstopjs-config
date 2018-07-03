'use strict';

const Page = require('../page-objects/crm-page.js');

module.exports = async (engine, scenario, viewport) => {
  const page = await Page.build(engine, scenario, viewport);
  await engine.click('.crm-entity span.crm-hover-button');
  await page.clickAndWaitForNavigation('a[title="Edit Price Set"]');
};
