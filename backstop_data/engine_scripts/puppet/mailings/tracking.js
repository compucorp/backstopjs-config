'use strict';

module.exports = async (engine, scenario, vp) => {
  await require('../common/close-notifications')(engine, scenario, vp);
  await engine.waitForSelector('.crm-wizard', { visible: true });
  await engine.waitForSelector('a[href="#tab-tracking"]');
};
