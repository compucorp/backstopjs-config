'use strict';

module.exports = async (engine, scenario, vp) => {
  await require('./add-contacts-to-group')(engine, scenario, vp);
  await engine.waitForSelector('.crm-submit-buttons a', {visible: true});
  await engine.click('.crm-submit-buttons a');
};
