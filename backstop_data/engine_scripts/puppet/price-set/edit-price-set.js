'use strict';

const Page = require('../page-objects/crm-page.js');

module.exports = async (engine, scenario, viewport) => {
  const page = new Page(engine, scenario, viewport);

  await page.checkIfPriceFieldsAreEmpty('Set').then(async () => {
    await engine.click('.crm-entity span.crm-hover-button');
    await page.clickAndWaitForNavigation('a[title="Edit Price Set"]');
  })
  .catch(async () => { });
}
