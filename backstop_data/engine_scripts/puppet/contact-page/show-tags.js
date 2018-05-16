'use strict';

module.exports = async (engine, scenario, vp) => {
  await engine.click('.ui-tabs-anchor[title="Tags"]');
  await engine.waitFor(1000);
};
