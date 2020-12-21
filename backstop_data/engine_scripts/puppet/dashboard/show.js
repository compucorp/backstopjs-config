'use strict';

module.exports = async (engine, scenario, vp) => {
  await engine.waitForSelector('#civicrm-dashboard');
};
