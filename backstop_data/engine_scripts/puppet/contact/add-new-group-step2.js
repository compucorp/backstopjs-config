'use strict';

module.exports = async (engine, scenario, vp) => {
  await require('./add-new-group-step1')(engine, scenario, vp);
  await engine.type('input[name="sort_name"]', 'Patel');
  await engine.click('#_qf_Basic_refresh');
  await engine.waitForNavigation();
};
