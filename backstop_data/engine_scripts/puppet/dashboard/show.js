'use strict';

module.exports = async (engine, scenario, vp) => {
  await require('../common/wait-for-editable-icon')(engine, scenario, vp);
  await engine.waitForSelector('.blockUI.blockOverlay', { hidden: true });
};
