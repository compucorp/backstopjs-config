'use strict';

const Page = require('../page-objects/crm-page.js');

module.exports = async (engine, scenario, viewport) => {
  const page = new Page(engine, scenario, viewport);

  await page.checkIfPriceFieldsAreEmpty('Set').then(async () => {
    await page.clickAndWaitForNavigation('a[title="View and Edit Price Fields"]');
  })
  .catch(async () => {});
}
