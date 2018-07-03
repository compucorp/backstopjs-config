'use strict';

const Page = require('../page-objects/crm-configure-contribution-page.js');

module.exports = async (engine, scenario, viewPort) => {
  const page = await Page.build(engine, scenario, viewPort);

  await engine.click('.crm-contribution-page-configure-actions .crm-hover-button');
  await page.clickAndWaitForNavigation('a[title="Contribution Widget"]');
  await engine.waitForSelector('.CRM_Contribute_Form_ContributionPage_Widget');
  await page.enableCheckbox('input#is_active');
  await require('../common/open-accordions')(engine, scenario, viewPort);
};
