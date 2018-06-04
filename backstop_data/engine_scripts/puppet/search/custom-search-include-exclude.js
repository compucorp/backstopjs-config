'use strict';

module.exports = async (engine, scenario, vp) => {
  await engine.click('label[for="CIVICRM_QFID_1_andOr"]');
  await engine.click('#_qf_Custom_refresh-bottom');
  await engine.waitForNavigation();
};
