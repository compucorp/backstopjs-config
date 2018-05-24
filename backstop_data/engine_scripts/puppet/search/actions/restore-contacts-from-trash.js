'use strict';

const Page = require('../../page-objects/crm-page.js');

module.exports = async (engine, scenario, vp) => {
  const page = new Page(engine, scenario, vp);

  await engine.click('#_qf_Basic_refresh');
  await engine.waitForNavigation();
  await engine.click('#mark_x_3');
  await engine.waitFor('#search-status .select2-container:not(.select2-container-disabled)');
  await page.openSelect2DropDown('#s2id_task');
  await page.clickSelect2Option('Restore contacts from trash');
  await engine.waitForNavigation();
};
