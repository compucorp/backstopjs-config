'use strict';

const Page = require('../page-objects/crm-page.js');

module.exports = async (engine, scenario, vp) => {
  const page = await Page.build(engine, scenario, vp);

  await require('./results-more-actions-dropdown')(engine, scenario, vp);
  await page.clickAndWaitForModal('span.crm-hover-button a[title="Send an Email"]');
  await require('../common/open-accordions')(engine, scenario, vp);
};
