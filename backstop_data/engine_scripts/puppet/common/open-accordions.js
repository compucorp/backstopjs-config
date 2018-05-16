'use strict';

const Page = require('../page-objects/accordion-page.js');

module.exports = async (engine, scenario, vp) => {
  const page = new Page(engine, scenario, vp);

  console.log('Clicking all accordion headers');

  await page.openAllAccordions();

  try {
    await engine.waitFor('.loading-text', { hidden: true, timeout: 8000 });
    await engine.waitFor(1000);

    console.log('All accordion blocks loaded');
  } catch (e) {
    console.log('Loaders still visible and timeout reached!');
  }
};
