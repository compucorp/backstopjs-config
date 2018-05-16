'use strict';

module.exports = async (engine, scenario, vp) => {
  await engine.click('.ui-tabs-anchor[title="Memberships"]');
  await engine.waitFor(1000);
};
