'use strict';

const Page = require('../page-objects/crm-page.js');

module.exports = async (engine, scenario, vp) => {
  const page = new Page(engine, scenario, vp);

  await page.closeErrorNotifications();
  await engine.waitFor('.jstree-loading', { hidden: true });
};
