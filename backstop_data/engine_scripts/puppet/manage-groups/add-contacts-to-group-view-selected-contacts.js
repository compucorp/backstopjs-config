'use strict';

module.exports = async (engine, scenario, vp) => {
  await require('./add-contacts-to-group-confirm')(engine, scenario, vp);
  await engine.click('a[title="View Selected Contacts"]');
  await engine.waitForSelector('.dataTables_wrapper');
};
