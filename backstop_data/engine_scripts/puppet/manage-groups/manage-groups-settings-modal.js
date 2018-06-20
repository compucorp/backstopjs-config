'use strict';

module.exports = async (engine, scenario, vp) => {
  await require('./manage-groups')(engine, scenario, vp);
  await engine.click('a[title="Edit Group"]');
  await engine.waitFor('.blockUI.blockOverlay', { hidden: true });
};
