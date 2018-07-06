'use strict';

const Page = require('../page-objects/crm-page.js');

module.exports = async (engine, scenario, vp) => {
  const page = await Page.build(engine, scenario, vp);

  await require('./show-events')(engine, scenario, vp);
  await page.clickAndWaitForModal('.CRM_Event_Form_Search a[accesskey="N"]');
};
