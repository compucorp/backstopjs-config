'use strict';

const Page = require('../page-objects/crm-page.js');

module.exports = async (engine, scenario, vp) => {
  const page = new Page(engine, scenario, vp);

  await require('./manage-groups')(engine, scenario, vp);
  await page.clickAndWaitForModal('a[title="Edit Group"]');
};
