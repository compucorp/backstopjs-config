'use strict';

module.exports = async (engine, scenario, vp) => {
  await engine.waitFor('a[href^="/civicrm/tag/edit?action=add"]', { visible: true });
  await engine.click('a[href^="/civicrm/tag/edit?action=add"]');
  await engine.waitFor('.blockUI.blockOverlay', { hidden: true });
};
