'use strict';

module.exports = async (engine, scenario, vp) => {
  await require('./results-more-actions-dropdown')(engine, scenario, vp);
  await engine.click('span.crm-hover-button a[title="Add Contribution"]');
  await engine.waitFor('.CRM_Contribute_Form_Contribution', { visible: true });
  await require('../common/open-accordions')(engine, scenario, vp);
  await engine.waitFor('[alt="loading"]', { hidden: true });  
};
