'use strict';

const Page = require('../page-objects/crm-page.js');

module.exports = async (engine, scenario, vp) => {
  const page = await Page.build(engine, scenario, vp);

  await require('./add-contacts-to-group-search-form')(engine, scenario, vp);
  await engine.waitForSelector('input[name="sort_name"]', {visible: true});
  await engine.type('input[name="sort_name"]', 'Patel');
  await page.clickAndWaitForNavigation('#_qf_Basic_refresh');
};
