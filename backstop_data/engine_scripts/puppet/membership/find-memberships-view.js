'use strict';

module.exports = async (engine, scenario, vp) => {
  await require('./search-result')(engine, scenario, vp);
  await engine.click('tr:first-child a[title="View Membership"]');
  await engine.waitFor('.CRM_Member_Form_MembershipView', { visible: true });
};
