'use strict';

module.exports = async (engine, scenario, vp) => {
  await engine.waitFor('.form-layout-compressed table', { visible: true });
};
