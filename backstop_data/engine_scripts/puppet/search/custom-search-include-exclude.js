'use strict';

const Page = require('../page-objects/crm-page.js');

module.exports = async (engine, scenario, vp) => {
  const page = await Page.build(engine, scenario, vp);

  await engine.click('label[for="CIVICRM_QFID_1_andOr"]');
  await page.clickAndWaitForNavigation('#_qf_Custom_refresh-bottom');
};
