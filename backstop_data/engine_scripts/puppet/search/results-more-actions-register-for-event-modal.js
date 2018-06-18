'use strict';

module.exports = async (engine, scenario, vp) => {
  await require('./results-more-actions-dropdown')(engine, scenario, vp);
  await engine.click('span.crm-hover-button a[title="Register for Event"]');
  await engine.waitFor('.CRM_Event_Form_Participant', { visible: true });
};
