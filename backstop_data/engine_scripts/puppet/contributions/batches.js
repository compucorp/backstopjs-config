'use strict';

module.exports = async (engine, scenario, vp) => {
  await engine.waitForSelector('.dataTables_processing', { hidden: true });
};
