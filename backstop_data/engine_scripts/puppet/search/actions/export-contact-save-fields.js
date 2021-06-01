'use strict';

const Page = require('../../page-objects/crm-page.js');

module.exports = async (engine, scenario, vp) => {
  const page = await Page.build(engine, scenario, vp);

  await require('./export-contact')(engine, scenario, vp);
  await engine.click('#CIVICRM_QFID_2_exportOption');
  await page.clickAndWaitForNavigation('#_qf_Select_next-bottom');

  await page.clickSelect2Option('#s2id_autogen3', 'Addressee');
  await engine.click('.ng-binding.crm-button');
};
