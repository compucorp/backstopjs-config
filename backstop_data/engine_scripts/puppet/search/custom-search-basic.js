'use strict';

const Page = require('../page-objects/crm-page.js');

module.exports = async (engine, scenario, vp) => {
  const page = new Page(engine, scenario, vp);
  
  await page.clickAndWaitForNavigation('#_qf_Custom_refresh');
};
