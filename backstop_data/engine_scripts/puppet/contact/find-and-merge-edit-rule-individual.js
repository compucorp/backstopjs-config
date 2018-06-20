'use strict';

module.exports = async (engine, scenario, vp) => {
  engine.click('#browseValues_Individual a[title="Edit DedupeRule"]');
  engine.waitForNavigation();
};