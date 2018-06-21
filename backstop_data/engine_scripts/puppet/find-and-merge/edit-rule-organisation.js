'use strict';

module.exports = async (engine, scenario, vp) => {
  engine.click('#browseValues_Organization a[title="Edit DedupeRule"]');
  engine.waitForNavigation();
};
