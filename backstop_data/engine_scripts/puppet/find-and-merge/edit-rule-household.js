'use strict';

module.exports = async (engine, scenario, vp) => {
  engine.click('a[title="Edit DedupeRule"]');
  engine.waitForNavigation();
};
