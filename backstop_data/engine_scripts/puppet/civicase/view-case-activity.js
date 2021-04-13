'use strict';

module.exports = async (engine, scenario, vp) => {
  await require('./dashboard.js')(engine, scenario, vp);
  await engine.click('a[title="Activities"]');
  await engine.waitForSelector('.crm-child-row', { visible: true });
  await engine.waitForSelector('.blockUI.blockOverlay', { hidden: true });
  await engine.waitForTimeout(1000);
};
