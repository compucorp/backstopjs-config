'use strict';

const Page = require('../page-objects/crm-page.js');

module.exports = async (engine, scenario, vp) => {
  const page = await Page.build(engine, scenario, vp);

  await require('./add-contacts-to-group')(engine, scenario, vp);

  await page.clickAndWaitForNavigation('.crm-submit-buttons a');
};
