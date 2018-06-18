'use strict';

module.exports = async (engine, scenario, vp) => {
  await require('./results-more-actions-dropdown')(engine, scenario, vp);
  await engine.click('span.crm-hover-button a[title="Tag Contact"]');
  await engine.waitFor('.CRM_Tag_Form_Tag', { visible: true }); 
};
