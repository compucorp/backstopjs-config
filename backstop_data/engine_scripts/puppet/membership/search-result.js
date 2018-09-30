'use strict';

const Page = require('../page-objects/crm-page.js');

module.exports = async (engine, scenario, vp) => {
  const page = await Page.build(engine, scenario, vp);
  let trySubmit = true;

  // CiviCRM doesn't like when multiple searches are being submitted at the same
  // time, causing in a fatal error. This loop tries until the search is submitted
  // successfully
  while (trySubmit) {
    await page.clickAndWaitForNavigation('#_qf_Search_refresh');

    if (await engine.$('.status-fatal')) {
      await engine.goto(scenario.url);
    } else {
      trySubmit = false;
    }
  }
};
