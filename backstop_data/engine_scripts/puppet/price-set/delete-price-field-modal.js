'use strict';

const Page = require('../page-objects/crm-page.js');

module.exports = async (engine, scenario, viewport) => {
  const page = await Page.build(engine, scenario, viewport);

  await require('./view-and-edit-price-fields')(engine, scenario, viewport);
  await engine.click('.crm-entity span.crm-hover-button');
  await page.clickAndWaitForModal('a[title="Delete Price"]');
};
