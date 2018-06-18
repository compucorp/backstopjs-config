'use strict';

module.exports = async (engine, scenario, vp) => {
  await require('./results-more-actions-dropdown')(engine, scenario, vp);
  await engine.click('span.crm-hover-button  a[title="Delete Contact"]');
  await engine.waitFor('.CRM_Contact_Form_Task_Delete', { visible: true });
};
