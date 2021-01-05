'use strict';

module.exports = async (engine) => {
  await engine.waitFor('.crm-inactive-dashlet-fieldset');
  await engine.click('.crm-inactive-dashlet-fieldset legend a');
  await engine.waitFor(100);
};
