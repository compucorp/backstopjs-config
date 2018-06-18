'use strict';

module.exports = async (engine, scenario, vp) => {
  await require('./search-result')(engine, scenario, vp);
  await engine.click('tr:first-child a[title="Edit Membership"]');
  await engine.waitFor('.CRM_Member_Form_Membership', { visible: true });
};
