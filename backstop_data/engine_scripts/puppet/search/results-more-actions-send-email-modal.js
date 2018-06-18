'use strict';

module.exports = async (engine, scenario, vp) => {
  await require('./results-more-actions-dropdown')(engine, scenario, vp);
  await engine.click('span.crm-hover-button a[title="Send an Email"]');
  await engine.waitFor('.CRM_Contact_Form_Task_Email', { visible: true });
  await require('../common/open-accordions')(engine, scenario, vp);
};
