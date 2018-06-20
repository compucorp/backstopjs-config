'use strict';

module.exports = async (engine, scenario, vp) => {
  await require('./manage-groups-edit-group-add-contacts')(engine, scenario, vp);
  await engine.waitForSelector('.crm-submit-buttons a', {visible: true});
  await engine.click('.crm-submit-buttons a');
};
