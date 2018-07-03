'use strict';

module.exports = async (engine, scenario, vp) => {
  await engine.click('.template > a');
  await engine.waitForNavigation();
};
