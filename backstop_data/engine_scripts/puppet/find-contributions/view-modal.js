'use strict';

module.exports = async (engine, scenario, vp) => {  
  await require('./search')(engine, scenario, vp);
  await engine.click('tr:first-child a[title="View Contribution"]');
  await engine.waitFor('.CRM_Contribute_Form_ContributionView', { visible: true });
};
