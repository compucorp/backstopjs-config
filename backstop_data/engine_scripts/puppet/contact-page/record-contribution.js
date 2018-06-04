'use strict';

module.exports = async (engine, scenario, vp) => {
  await require('./show-contributions')(engine, scenario, vp);
  await engine.click('.CRM_Contribute_Form_Search a[accesskey="N"]');
  await engine.waitFor('.crm-contribution-form-block', { visible: true });
  await require('../common/open-accordions')(engine, scenario, vp);
  await engine.waitFor('[alt="loading"]', { hidden: true });
};
