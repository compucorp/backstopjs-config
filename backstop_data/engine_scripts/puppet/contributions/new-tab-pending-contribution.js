'use strict';

const Page = require('../page-objects/crm-page.js');

module.exports = async (engine, scenario, vp) => {
  const page = await Page.build(engine, scenario, vp);

  // Reset all options.
  await page.clickAll('.select2-search-choice-close');
  await page.clickSelect2Option('#s2id_contribution_status_id', 'Pending');
  await page.clickAndWaitForNavigation('#_qf_Search_refresh');
  await page.openInNewTab('.crm-contact-contribute-contributions > table > tbody > tr:first-child [title="View Contribution"]');
};
