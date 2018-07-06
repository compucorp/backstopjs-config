'use strict';

const Page = require('../page-objects/crm-configure-contribution-page.js');

module.exports = async (engine, scenario, viewPort) => {
  const page = await Page.build(engine, scenario, viewPort);

  await engine.click('.crm-contribution-page-configure-actions .crm-hover-button');
  await page.clickAndWaitForNavigation('a[title="Contribution Amounts"]');
  await engine.waitForSelector('.CRM_Contribute_Form_ContributionPage_Amount');
};
