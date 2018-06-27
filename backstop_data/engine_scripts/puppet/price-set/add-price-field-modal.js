'use strict';

const Page = require('../page-objects/crm-page.js');

module.exports = async (engine, scenario, viewport) => {
  const page = new Page(engine, scenario, viewport);
  
  await page.checkIfPriceFieldsAreEmpty('Fields').then(async () => {
    await require('./view-and-edit-price-fields')(engine, scenario, viewport);
    await engine.click('#newPriceField');
    await engine.waitFor('.CRM_Price_Form_Field');
  })
  .catch(async () => {});
};
