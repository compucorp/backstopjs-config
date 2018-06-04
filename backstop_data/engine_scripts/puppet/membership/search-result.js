'use strict';

module.exports = async (engine, scenario, vp) => {
  await require('../common/open-accordions')(engine, scenario, vp);
  await engine.click('#_qf_Search_refresh');
  await engine.waitFor('.crm-results-block');
};
