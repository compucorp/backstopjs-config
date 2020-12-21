'use strict';

const Page = require('../page-objects/crm-page.js');

module.exports = async (engine, scenario, vp) => {
  const page = await Page.build(engine, scenario, vp);

  await require('./find-participants')(engine, scenario, vp);
  await page.clickAndWaitForModal('a[title="Edit Participation"]');
  await engine.waitFor('.CRM_Event_Form_Participant', { visible: true });
};
