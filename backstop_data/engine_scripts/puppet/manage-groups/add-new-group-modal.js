'use strict';

module.exports = async (engine, scenario, vp) => {
  await require('./manage-groups')(engine, scenario, vp);
  await engine.click('a.newGroup');
  await engine.waitFor('.blockUI.blockOverlay', { hidden: true });
};
