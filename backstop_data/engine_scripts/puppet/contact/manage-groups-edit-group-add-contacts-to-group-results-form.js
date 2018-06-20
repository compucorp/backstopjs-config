'use strict';

module.exports = async (engine, scenario, vp) => {
  await require('./manage-groups-edit-group-add-contacts-to-group-search-form')(engine, scenario, vp);
  await engine.waitForSelector('input[name="sort_name"]', {visible: true});
  await engine.type('input[name="sort_name"]', 'Patel');
  await engine.click('#_qf_Basic_refresh');
  await engine.waitForNavigation();
};
