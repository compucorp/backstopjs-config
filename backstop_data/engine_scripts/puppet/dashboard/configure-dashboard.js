'use strict';

module.exports = async (engine) => {
  await engine.waitForSelector('.crm-inactive-dashlet-fieldset');
  await engine.click('.crm-inactive-dashlet-fieldset legend a');
  await engine.waitForTimeout(100);
};
