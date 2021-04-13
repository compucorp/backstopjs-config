'use strict';

module.exports = async (engine, scenario, vp) => {
  await engine.waitForSelector('.crm-wizard', { visible: true });
  await engine.waitForSelector('.cke', { visible: true });
};
