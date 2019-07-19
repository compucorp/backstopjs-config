'use strict';

const Page = require('../page-objects/crm-page.js');

module.exports = async (engine, scenario, vp) => {
  const page = await Page.build(engine, scenario, vp);

  await require('./step-2')(engine, scenario, vp);
  await page.clickAndWaitForNavigation('#_qf_MapField_next-bottom');
};
