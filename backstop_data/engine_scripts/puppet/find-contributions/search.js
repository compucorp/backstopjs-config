'use strict';

const Page = require('../page-objects/crm-page.js');

module.exports = async (engine, scenario, vp) => {
  const page = await Page.build(engine, scenario, vp);

  await require('../common/open-accordions')(engine, scenario, vp);
  await page.clickAndWaitForNavigation('#_qf_Search_refresh');
};
