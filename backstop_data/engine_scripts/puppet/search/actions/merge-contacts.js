'use strict';

const Page = require('../../page-objects/crm-page.js');

module.exports = async (engine, scenario, vp) => {
  const page = new Page(engine, scenario, vp);

  await require('./common')(page, ['3', '199']);
  await engine.waitFor('#search-status .select2-container:not(.select2-container-disabled)');
  await page.clickSelect2Option('#s2id_task', 'Merge contacts');
  await engine.waitForNavigation();
};
