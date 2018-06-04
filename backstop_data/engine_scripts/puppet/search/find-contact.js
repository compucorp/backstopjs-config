'use strict';

module.exports = async (engine, scenario, vp) => {
  await engine.click('#_qf_Basic_refresh');
  await engine.waitForNavigation();
};
