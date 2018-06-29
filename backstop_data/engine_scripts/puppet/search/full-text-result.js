'use strict';

const Page = require('../page-objects/crm-page.js');

module.exports = async (engine, scenario, vp) => {
  const page = new Page(engine, scenario, vp);
  
  await engine.type('#text', 'Barry Adams');
  await page.clickAndWaitForNavigation('#_qf_Custom_refresh');
  // // remove activity table
  // await engine.evaluate( () => {
  //   const xPath = `.//table[contains(@summary, "Activity listings.")]/parent::*/parent::*`;
  //   const item = document.evaluate(xPath, document.body, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  // });
};
