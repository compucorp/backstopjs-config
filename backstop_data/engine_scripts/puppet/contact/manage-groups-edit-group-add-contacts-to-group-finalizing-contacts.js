'use strict';

module.exports = async (engine, scenario, vp) => {
  await require('./manage-groups-edit-group-add-contacts-to-group-results-form')(engine, scenario, vp);
  await engine.click('[title="Select All Rows"]  > input[name="toggleSelect"]');
  await engine.click('#_qf_Basic_next_action');
  await engine.waitForNavigation();
};
