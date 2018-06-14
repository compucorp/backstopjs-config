'use strict';

module.exports = async (engine, scenario, vp) => {  
  await require('./find-contributions')(engine, scenario, vp);
  await engine.click('tr:first-child a[title="view payments"]');
  await engine.waitFor('.CRM_Contribute_Form_AdditionalPayment', { visible: true });
  await engine.click('tr:first-child + .crm-child-row a[title="Edit Payment"]');
  await engine.waitFor('.CRM_Financial_Form_PaymentEdit', { visible: true });
};
