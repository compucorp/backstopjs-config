'use strict';

const Page = require('../page-objects/crm-page.js');

module.exports = async (engine, scenario, vp) => {
  const page = await Page.build(engine, scenario, vp);

  await require('./add-contacts-to-group-results')(engine, scenario, vp);
  await engine.click('[title="Select All Rows"]  > input[name="toggleSelect"]');
  await page.clickAndWaitForNavigation('#_qf_Basic_next_action');
};
