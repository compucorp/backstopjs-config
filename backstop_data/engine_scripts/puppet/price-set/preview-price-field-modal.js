'use strict';

const Page = require('../page-objects/crm-page.js');

module.exports = async (engine, scenario, viewport) => {
  const page = new Page(engine, scenario, viewport);

  await require('./view-and-edit-price-fields')(engine, scenario, viewport);
  await page.clickAndWaitForModal('a[title="Preview Price"]');
};
