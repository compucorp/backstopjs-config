'use strict';

const Page = require('../page-objects/form-page.js');

module.exports = async (engine, scenario, vp) => {
  const page = new Page(engine, scenario, vp);

  await page.closeErrorNotifications();
  await page.submit();
};
