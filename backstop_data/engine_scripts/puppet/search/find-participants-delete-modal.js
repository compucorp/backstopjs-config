'use strict';

module.exports = async (engine, scenario, vp) => {
  await require('./find-participants')(engine, scenario, vp);
  await engine.click('tr:first-child span.crm-hover-button');
  await engine.click('tr:first-child a[title="Delete Participation"]');
  await engine.waitFor('.CRM_Event_Form_Participant', { visible: true });  
};
