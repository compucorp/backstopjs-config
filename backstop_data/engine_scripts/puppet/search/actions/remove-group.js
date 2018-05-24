'use strict';

const Page = require('../../page-objects/crm-page.js');

module.exports = async (engine, scenario, vp) => {
  const page = new Page(engine, scenario, vp);

  await engine.click('#_qf_Basic_refresh');
  await engine.waitForNavigation();
  await engine.click('#mark_x_3');
  await engine.waitFor('#search-status .select2-container:not(.select2-container-disabled)');
  await page.clickSelect2Option('#s2id_task', 'Group - remove contacts');
  await engine.waitForNavigation();
};
