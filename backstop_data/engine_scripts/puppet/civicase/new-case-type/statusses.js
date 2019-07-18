'use strict';

const Page = require('../../page-objects/crm-page.js');

module.exports = async (engine, scenario, viewport) => {
  const page = await Page.build(engine, scenario, viewport);
  
  await require('./main')(engine, scenario, viewport);
  await engine.click('a[href="#acttab-statuses"]');
  await page.waitForVisibility('#acttab-statuses'); 
};
