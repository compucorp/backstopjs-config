'use strict';

module.exports = async (engine, scenario, vp) => {
  const Page = require('../page-objects/crm-page.js');
  const page = await Page.build(engine, scenario, vp);

  await page.closeErrorNotifications();
};
