'use strict';

module.exports = async (engine, scenario, vp) => {
  await engine.click('#_qf_Advanced_refresh-top');
  await engine.waitForNavigation();
};
