'use strict';

module.exports = async (engine, scenario, vp) => {
  await engine.click('.button.new-option');
  await engine.waitFor('.blockUI.blockOverlay', { hidden: true });
};
