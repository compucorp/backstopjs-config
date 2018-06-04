'use strict';

module.exports = async (engine, scenario, vp) => {
  await engine.waitFor('.crm-wizard', { visible: true });
  await engine.click('a[href="#tab-header"]');
};
