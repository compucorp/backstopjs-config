'use strict';

const Page = require('../page-objects/crm-page.js');

module.exports = async (engine, scenario, vp) => {
  const page = await Page.build(engine, scenario, vp);

  await require('./find-activities')(engine, scenario, vp);
  if (await engine.$('.crm-search-results span.crm-hover-button')) {
    await engine.click('.crm-search-results span.crm-hover-button');
  }
  await page.clickAndWaitForModal('a[title="Delete Activity"]');
};
