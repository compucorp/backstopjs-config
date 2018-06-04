'use strict';

module.exports = async (engine, scenario, vp) => {
  await require('./export-contact')(engine, scenario, vp);
  await engine.click('[for="CIVICRM_QFID_2_4"]');
  await engine.click('#_qf_Select_next-bottom');
  await engine.waitForNavigation();
};
