'use strict';

module.exports = async (engine, scenario, vp) => {
  await engine.waitForSelector('.cke .cke_contents', { visible: true });
};
