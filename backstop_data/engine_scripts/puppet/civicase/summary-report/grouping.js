'use strict';

module.exports = async (engine, scenario, vp) => {
  await engine.waitForAndClick('a[title="Grouping"]');
};
