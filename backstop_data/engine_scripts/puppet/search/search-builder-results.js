'use strict';

module.exports = async (engine, scenario, vp) => {
  await engine.select('select#mapper_1_0_0', 'Individual'); 
  await engine.select('select#mapper_1_0_1', 'last_name');
  await engine.select('select#operator_1_0', '=');
  await engine.type('input#value_1_0', 'patel');
  await engine.click('#_qf_Builder_refresh');
  await engine.waitForNavigation();
};
