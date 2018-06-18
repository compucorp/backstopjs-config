'use strict';

module.exports = async (engine, scenario, vp) => {
  await require('./results-more-actions-dropdown')(engine, scenario, vp);
  await engine.click('span.crm-hover-button a[title="Add Membership"]');
  await engine.waitFor('.CRM_Member_Form_Membership', { visible: true });
};
