'use strict';

module.exports = async (engine, scenario, vp) => {  
  await require('./find-contributions')(engine, scenario, vp);
  await engine.click('tr:first-child a[title="Edit Contribution"]');
  await engine.waitFor('.crm-contribution-form-block', { visible: true });
  await require('../common/open-accordions')(engine, scenario, vp);
};
