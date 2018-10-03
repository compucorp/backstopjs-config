'use strict';

const Page = require('../../page-objects/crm-page.js');

module.exports = async (engine, scenario, viewport) => {
  const page = await Page.build(engine, scenario, viewPort);
  
  await require('./main')(engine, scenario, viewport);
  await engine.click('a[href="#acttab-actType"]');
  await page.waitForVisibility('#acttab-actType');  
};
