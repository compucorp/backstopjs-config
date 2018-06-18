'use strict';

module.exports = async (engine, scenario, vp) => {
  await require('./find-activities')(engine, scenario, vp);
  await engine.click('a[title="Delete Activity"]');
  await engine.waitFor('.CRM_Activity_Form_Activity', { visible: true });
};
