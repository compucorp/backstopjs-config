'use strict';

module.exports = async (engine, scenario, vp) => {
  await require('./manage-groups')(engine, scenario, vp);
  await engine.click('.crm-entity span.crm-hover-button');
  await engine.click('a[title="Delete Group"]');
  await engine.waitFor('.blockUI.blockOverlay', { hidden: true });
};
