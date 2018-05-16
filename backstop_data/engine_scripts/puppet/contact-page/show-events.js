'use strict';

module.exports = async (engine, scenario, vp) => {
  await engine.click('.ui-tabs-anchor[title="Events"]');
  await engine.waitFor(1000);
};
