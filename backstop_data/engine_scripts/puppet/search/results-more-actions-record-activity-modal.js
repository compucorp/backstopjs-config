'use strict';

module.exports = async (engine, scenario, vp) => {
  await require('./results-more-actions-dropdown')(engine, scenario, vp);
  await engine.click('span.crm-hover-button a[title="Record Activity"]');
  await engine.waitFor('.crm-activity-selector-activity', { visible: true });
  await engine.waitFor('.blockUI.blockOverlay', { hidden: true });
  await engine.waitFor('.dataTables_processing', { hidden: true });
};
