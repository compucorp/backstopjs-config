'use strict';

const Page = require('../page-objects/crm-page.js');

module.exports = async (engine, scenario, viewPort) => {
  const page = await Page.build(engine, scenario, viewPort);

  await require('./batches')(engine, scenario, viewPort);
  await page.clickAndWaitForNavigation('a[title="Batch Data Entry"]');

  // The .fa-calendar addon is present only in Shoreditch
  try {
    await engine.waitFor('.addon.fa-calendar', { visible: true });
  } catch (e) {}
};
