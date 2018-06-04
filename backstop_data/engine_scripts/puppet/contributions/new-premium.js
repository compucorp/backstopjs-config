'use strict';

module.exports = async (engine, scenario, vp) => {
  await engine.click('#newManagePremium');
  await engine.waitFor('.blockUI.blockOverlay', { hidden: true });
};
