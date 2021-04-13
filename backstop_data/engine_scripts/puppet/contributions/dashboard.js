'use strict';

module.exports = async (engine, scenario, vp) => {
  await engine.waitForSelector('.form-layout-compressed table', { visible: true });
};
