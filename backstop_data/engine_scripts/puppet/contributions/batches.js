'use strict';

module.exports = async (engine, scenario, vp) => {
  await engine.waitFor('.dataTables_processing', { hidden: true });
};
