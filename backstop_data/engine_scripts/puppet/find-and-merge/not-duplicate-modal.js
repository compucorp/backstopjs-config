'use strict';

module.exports = async (engine, scenario, vp) => {
  await require('./show-duplicates')(engine, scenario, vp);
  await engine.waitForSelector('.crm-dedupe-flip + a + a');
  await engine.click('.crm-dedupe-flip + a + a');
};
