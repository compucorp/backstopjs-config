'use strict';

const Page = require('../../page-objects/crm-page.js');

module.exports = async (engine, scenario, viewPort) => {
  const page = await Page.build(engine, scenario, viewPort);

  await require('./main')(engine, scenario, viewPort);
  await engine.click('a[href="#acttab-actType"]');
  await page.waitForVisibility('#acttab-actType');
};
