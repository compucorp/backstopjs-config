'use strict';

module.exports = async (engine, scenario, vp) => {
  await engine.waitForSelector('#crm-dashboard-configure');
};
