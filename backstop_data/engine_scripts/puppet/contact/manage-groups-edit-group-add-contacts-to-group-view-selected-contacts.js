'use strict';

module.exports = async (engine, scenario, vp) => {
  await require('./manage-groups-edit-group-add-contacts-to-group-finalizing-contacts')(engine, scenario, vp);
  await engine.click('a[title="View Selected Contacts"]');
  await engine.waitForSelector('.dataTables_wrapper');
};
