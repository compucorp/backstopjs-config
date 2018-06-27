'use strict';

const Page = require('../page-objects/crm-page.js');

module.exports = async (engine, scenario, vp) => {
  const page = new Page(engine, scenario, vp);

  await require('./show-memberships')(engine, scenario, vp);
  await page.clickAndWaitForModal('a[accesskey="N"][href$="context=membership"]');
};
