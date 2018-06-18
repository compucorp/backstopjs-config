'use strict';

module.exports = async (engine, scenario, vp) => {
  await require('./results-more-actions-dropdown')(engine, scenario, vp);
  await engine.click('span.crm-hover-button a[title="Add Relationship"]');
  await engine.waitFor('.CRM_Contact_Form_Relationship', { visible: true });
};
