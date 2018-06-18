'use strict';

module.exports = async (engine, scenario, vp) => {
  await require('./results-more-actions-dropdown')(engine, scenario, vp);
  await engine.click('span.crm-hover-button a[title="Add Note"]');
  await engine.waitFor('.CRM_Note_Form_Note', { visible: true });
  await require('../common/open-accordions')(engine, scenario, vp);
};
