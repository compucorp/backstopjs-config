'use strict';
const Page = require('../page-objects/crm-page.js');

module.exports = async (engine, scenario, viewport) => {
  const page = new Page(engine, scenario, viewport);

  await require('./view-and-edit-price-fields')(engine, scenario, viewport);
  await page.checkIfPriceFieldsAreEmpty('Fields').then(async () => {
    await engine.click('.crm-entity span.crm-hover-button');
    await engine.click('a[title="Delete Price"]');
    await engine.waitFor('.CRM_Price_Form_DeleteField', { visible: true });
  }, async () => {});
};
