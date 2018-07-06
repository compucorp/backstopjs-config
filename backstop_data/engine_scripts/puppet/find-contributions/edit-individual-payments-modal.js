'use strict';

const Page = require('../page-objects/crm-page.js');

module.exports = async (engine, scenario, vp) => {
  const page = await Page.build(engine, scenario, vp);

  await require('./show-individual-payment')(engine, scenario, vp);
  await page.clickAndWaitForModal('a[title="Edit Payment"]');
};
