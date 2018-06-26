'use strict';

const Page = require('../page-objects/crm-page.js');

module.exports = async (engine, scenario, viewport) => {
  const page = new Page(engine, scenario, viewport);
  const pricelistEmpty = await engine.$('#crm-main-content-wrapper .messages');

  if(pricelistEmpty) {
    console.warn('No Price list present!')
    console.log('Taking the "Price Set List" Page screenshot..');
  } else {
    await page.clickAndWaitForNavigation('a[title="Preview Price Set"]');
  }
}
