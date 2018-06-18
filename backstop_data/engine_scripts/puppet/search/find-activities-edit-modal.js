'use strict';

module.exports = async (engine, scenario, vp) => {
  await require('./find-activities')(engine, scenario, vp);
  await engine.click('a[title="Update Activity"]');
  await engine.waitFor('.CRM_Activity_Form_Activity', { visible: true });
  await require('../common/open-accordions')(engine, scenario, vp);
};
