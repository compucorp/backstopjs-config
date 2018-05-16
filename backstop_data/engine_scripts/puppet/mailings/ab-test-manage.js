'use strict';

module.exports = async (engine, scenario, vp) => {
  await engine.waitFor('table.display', { visible: true });
};
