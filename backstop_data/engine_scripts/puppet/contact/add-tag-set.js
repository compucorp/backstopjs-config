'use strict';

module.exports = async (engine, scenario, vp) => {
  await engine.click('a[href="#new-tagset"]');
  await engine.waitFor('.blockUI.blockOverlay', { hidden: true });
};
