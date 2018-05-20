'use strict';

module.exports = async (engine, scenario, vp) => {
  await engine.click('.button.new-option');
  await engine.waitFor('.blockUI.blockOverlay', { hidden: true });
  await require('../common/wait-for-wysiwyg')(engine, scenario, vp);
};
