'use strict';

module.exports = async (engine, scenario, vp) => {
  await engine.waitForSelector('.view-content', { visible: true });
};
