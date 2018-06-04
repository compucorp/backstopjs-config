'use strict';

module.exports = async (engine, scenario, vp) => {
  await require('./show-events')(engine, scenario, vp);
  await engine.click('.CRM_Event_Form_Search a[accesskey="N"]');
  await engine.waitFor('.blockUI.blockOverlay', { hidden: true });
  await engine.waitFor('.CRM_Event_Form_Participant', { visible: true });
};
