'use strict';

module.exports = async (engine, scenario, vp) => {
  await require('./manage-groups')(engine, scenario, vp);
  await engine.click('a[title="Group Contacts"]');
};
