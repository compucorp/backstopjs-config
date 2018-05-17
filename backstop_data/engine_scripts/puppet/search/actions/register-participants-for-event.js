'use strict';

const Page = require('../../page-objects/crm-page.js');

module.exports = async (engine, scenario, vp) => {
  const page = new Page(engine, scenario, vp);

  await engine.click('#_qf_Basic_refresh');
  await engine.waitForNavigation();
  await engine.click('#mark_x_3');
  await engine.waitFor(500);
  await page.openSelect2DropDown('#s2id_task');
  await page.clickSelect2NthOption(20);
  await engine.waitForNavigation();
};
