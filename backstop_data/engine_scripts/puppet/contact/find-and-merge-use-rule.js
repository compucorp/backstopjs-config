'use strict';

module.exports = async (engine, scenario, vp) => {
  engine.click('a[title="Use DedupeRule"]');
  engine.waitForNavigation();
};