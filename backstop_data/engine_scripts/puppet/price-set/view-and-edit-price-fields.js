'use strict';

const Page = require('../page-objects/crm-page.js');

module.exports = async (engine, scenario, viewport) => {
  const page = await Page.build(engine, scenario, viewport);

  await page.clickAndWaitForNavigation('a[title="View and Edit Price Fields"]');
};
