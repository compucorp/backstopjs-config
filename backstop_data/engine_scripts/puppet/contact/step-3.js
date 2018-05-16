'use strict';

module.exports = async (engine, scenario, vp) => {
  await require('./step-2')(engine, scenario, vp);
  await engine.click('#_qf_MapField_next-bottom');
  await engine.waitForNavigation();
};
