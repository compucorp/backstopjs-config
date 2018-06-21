'use strict';

module.exports = async (engine, scenario, vp) => {
  await require('./search')(engine, scenario, vp);
  await engine.click('a[title="view payments"]');
  await engine.waitFor('.CRM_Contribute_Form_AdditionalPayment', { visible: true });
};
