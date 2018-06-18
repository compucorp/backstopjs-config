'use strict';

module.exports = async (engine, scenario, vp) => {
  await require('./find-participants')(engine, scenario, vp);
  await engine.click('tr:first-child a[title="View Participation"]');
  await engine.waitFor('.CRM_Event_Form_ParticipantView', { visible: true });  
};
