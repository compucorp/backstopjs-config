'use strict';

const Page = require('../page-objects/crm-configure-contribution-page.js');

module.exports = async (engine, scenario, viewPort) => {
  const page = await Page.build(engine, scenario, viewPort);

  await engine.click('.crm-contribution-page-configure-actions .crm-hover-button');
  await page.clickAndWaitForNavigation('a[title="Tell a Friend"]');
  await engine.waitForSelector('.CRM_Friend_Form_Contribute');
  await page.enableCheckbox('input#tf_is_active');
};
