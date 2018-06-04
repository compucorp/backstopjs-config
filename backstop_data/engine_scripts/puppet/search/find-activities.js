'use strict';

module.exports = async (engine, scenario, vp) => {
  await engine.click('#_qf_Search_refresh-botton');
  await engine.waitForNavigation();
};
