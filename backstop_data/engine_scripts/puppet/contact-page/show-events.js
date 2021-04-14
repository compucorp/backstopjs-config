'use strict';

module.exports = async (engine, scenario, vp) => {
  await engine.waitForSelector('.crm-search-form', { visible: true });
};
