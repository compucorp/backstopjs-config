'use strict';

module.exports = async (engine) => {
  await engine.waitForSelector('.blockUI.blockOverlay', { hidden: true });
};
