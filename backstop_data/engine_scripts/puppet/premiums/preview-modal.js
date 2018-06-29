'use strict';

module.exports = async (engine, scenario, veiwPort) => {
  await engine.click('a[title="Preview Premium"]');
  await engine.waitFor('.blockUI.blockOverlay', { hidden: true });
  await engine.waitForSelector('.CRM_Contribute_Form_ManagePremiums', { visible: true });
};
