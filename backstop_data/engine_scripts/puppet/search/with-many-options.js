'use strict';

const Page = require('../page-objects/crm-page.js');

module.exports = async (engine, scenario, vp) => {
  const page = new Page(engine, scenario, vp);

  await page.clickSelect2Option('#s2id_tag', 'Add relationship - to organization');
  await page.clickSelect2Option('#s2id_tag', 'Add relationship - to individual');
  await page.clickSelect2Option('#s2id_tag', 'Add activity');
};
