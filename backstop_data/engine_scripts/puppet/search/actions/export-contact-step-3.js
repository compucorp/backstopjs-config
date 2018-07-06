'use strict';

const Page = require('../../page-objects/crm-page.js');

module.exports = async (engine, scenario, vp) => {
  const page = await Page.build(engine, scenario, vp);

  await require('./export-contact')(engine, scenario, vp);
  await engine.click('[for="CIVICRM_QFID_2_4"]');
  await page.clickAndWaitForNavigation('#_qf_Select_next-bottom');
};
