'use strict';

module.exports = async (engine, scenario, vp) => {
  await require('./add-new-group-step2')(engine, scenario, vp);
  engine.click('[title="Select All Rows"]  > input[name="toggleSelect"]');
  await engine.click('#_qf_Basic_next_action');
  await engine.waitForNavigation();
};
