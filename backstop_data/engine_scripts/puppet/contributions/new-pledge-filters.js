'use strict';

module.exports = async (engine, scenario, vp) => {
  await engine.click('a[href="#report-tab-set-filters"]');
};
