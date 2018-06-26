'use strict';

const Page = require('../page-objects/crm-page.js');

module.exports = async (engine, scenario, viewport) => {
  const page = new Page(engine, scenario, viewport);

  await page.checkIfPriceFieldsAreEmpty('Fields').then(async () => {
    await page.clickAndWaitForNavigation('#newPriceSet');
  }, async () => {});
};
