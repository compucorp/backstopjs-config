'use strict';

const Page = require('../page-objects/crm-page.js');

module.exports = async (engine, scenario, vp) => {
  const page = await Page.build(engine, scenario, vp);

  console.log('Clicking all accordion headers');

  await page.openAllAccordions();

  try {
    await engine.waitFor('.blockUI.blockOverlay', { hidden: true });
    await engine.waitFor('.loading-text', { hidden: true, timeout: 8000 });
    await engine.waitFor('[alt="loading"]', { hidden: true });
    // wait for reedjustment of the modal after ajax content load after opening accordion
    await engine.waitFor(500);
    console.log('All accordion blocks loaded');
  } catch (e) {
    console.log('Loaders still visible and timeout reached!');
  }
};
