'use strict';

const Page = require('../../page-objects/crm-page.js');

module.exports = async (engine, scenario, vp) => {
  const page = await Page.build(engine, scenario, vp);

  await require('./common')(page);
  await page.clickSelect2Option('#s2id_task', 'Add activity');
  await engine.waitForNavigation();
  await require('../../common/open-accordions')(engine, scenario, vp);
};
