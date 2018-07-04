'use strict';

const Page = require('../page-objects/crm-page.js');

module.exports = async (engine, scenario, vp) => {
  const page = await Page.build(engine, scenario, vp);

  await require('./manage-groups')(engine, scenario, vp);
  await engine.click('.crm-entity span.crm-hover-button');
  await page.clickAndWaitForModal('a[title="Delete Group"]');
};
