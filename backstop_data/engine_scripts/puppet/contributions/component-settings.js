'use strict';

const Page = require('../page-objects/crm-page.js');

module.exports = async (engine, scenario, vp) => {
  await engine.click('#invoicing');

  // waiting for the  click to open the extra part of the form and then initialising class which does cleanup and waiting.
  const page = await Page.build(engine, scenario, vp);
};
