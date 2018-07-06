'use strict';

const Page = require('../page-objects/crm-page.js');

module.exports = async (engine, scenario, vp) => {
  const page = await Page.build(engine, scenario, vp);

  await page.clickSelect2Option('#s2id_tag', 'Non-profit');
  await page.clickSelect2Option('#s2id_tag', 'Major Donor');
  await page.clickSelect2Option('#s2id_tag', 'Company');
};
