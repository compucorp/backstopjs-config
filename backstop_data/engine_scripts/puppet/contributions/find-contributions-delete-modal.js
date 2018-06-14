'use strict';

module.exports = async (engine, scenario, vp) => {  
  await require('./find-contributions')(engine, scenario, vp);
  await engine.click('tr:first-child a[title="Delete Contribution"]');
  await engine.waitFor('.CRM_Contribute_Form_Contribution', { visible: true });
};
