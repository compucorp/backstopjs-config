'use strict';

const Page = require('../page-objects/crm-search-page.js');

module.exports = async (engine, scenario, vp) => {
  const page = await Page.build(engine, scenario, vp);

  await page.clickAndWaitForSuccessfulSearch();
};
