'use strict';

module.exports = async (engine, scenario, vp) => {  
  await require('./show-individual-payment')(engine, scenario, vp);
  await engine.click('a[title="Edit Payment"]');
  await engine.waitFor('.CRM_Financial_Form_PaymentEdit', { visible: true });
};
