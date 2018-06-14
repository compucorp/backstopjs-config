'use strict';

module.exports = async (engine) => {
  await engine.click('#crm-dashboard-configure');
  await engine.waitFor('#configure-dashlet', { visible: true });
  await engine.waitFor('.blockUI.blockOverlay', { hidden: true });
};
