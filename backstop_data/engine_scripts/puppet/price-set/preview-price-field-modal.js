'use strict';

const Page = require('../page-objects/crm-page.js');

module.exports = async (engine, scenario, viewport) => {
  const page = new Page(engine, scenario, viewport);

  await require('./view-and-edit-price-fields')(engine, scenario, viewport);
  await page.checkIfPriceFieldsAreEmpty('Fields').then(async () => {
    await engine.click('a[title="Preview Price"]');
    await engine.waitForSelector('.CRM_Price_Form_Preview');
  }, async () => {});
}
