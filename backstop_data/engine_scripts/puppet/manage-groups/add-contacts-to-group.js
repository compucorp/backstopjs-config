'use strict';

module.exports = async (engine, scenario, vp) => {
  await require('./manage-groups')(engine, scenario, vp);
  await Promise.all([
    engine.click('a[title="Group Contacts"]'),
    engine.waitForNavigation()
  ]);
};
