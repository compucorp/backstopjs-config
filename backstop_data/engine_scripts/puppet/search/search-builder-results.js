'use strict';

const Page = require('../page-objects/crm-page.js');

module.exports = async (engine, scenario, vp) => {
  const page = await Page.build(engine, scenario, vp);

  await engine.select('select#mapper_1_0_0', 'Individual');
  await engine.select('select#mapper_1_0_1', 'last_name');
  await engine.select('select#operator_1_0', '=');
  await engine.type('input#value_1_0', 'patel');
  await page.clickAndWaitForNavigation('#_qf_Builder_refresh');
};
