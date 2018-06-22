'use strict';

module.exports = async (engine, scenario, vp) => {
  const Page = require('../page-objects/crm-page.js');
  const page = new Page(engine, scenario, vp);

  await page.closeErrorNotifications();
};
