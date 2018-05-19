'use strict';

module.exports = async (engine, scenario, vp) => {
  await engine.waitFor('.view-content', { visible: true });
};
