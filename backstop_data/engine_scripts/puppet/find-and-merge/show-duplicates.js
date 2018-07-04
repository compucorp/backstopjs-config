'use strict';

module.exports = async (engine, scenario, vp) => {
  await require('./use-rule')(engine, scenario, vp);
  await engine.waitForSelector('#_qf_DedupeFind_next-bottom', { visible: true });
  await engine.click('#_qf_DedupeFind_next-bottom');
  await engine.waitForSelector('.dataTables_processing', { hidden: true });
};
