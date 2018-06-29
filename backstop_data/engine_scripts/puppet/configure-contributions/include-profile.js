'use strict';

const Page = require('../page-objects/crm-configure-contribution-page.js');

module.exports = async (engine, scenario, viewPort) => {
  const page = new Page(engine, scenario, viewPort);

  await engine.click('.crm-contribution-page-configure-actions .crm-hover-button');
  await page.clickAndWaitForNavigation('a[title="Include Profiles"]');
  await engine.waitForSelector('.CRM_Contribute_Form_ContributionPage_Custom');
};
