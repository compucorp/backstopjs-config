'use strict';

module.exports = async (engine, scenario, vp) => {
  await engine.on('dialog', async dialog => {
    await dialog.accept();
    await engine.waitForSelector('.crm-import-summary-form-block', { visible: true });
  });

  await require('./step-3')(engine, scenario, vp);
  await engine.click('#_qf_Preview_next-bottom');
};
