'use strict';

// This script's scenario ("Import Contact - Step 4") has been removed from the
// test suite because of an apparent bug in Puppeteer, whereas on upon accepting
// the dialog, the following error would be produced:
// `Error: Protocol error (Runtime.callFunctionOn): Cannot find context with specified id undefined`

module.exports = async (engine, scenario, vp) => {
  await engine.on('dialog', async dialog => {
    await dialog.accept();
    await engine.waitFor('.crm-import-summary-form-block', { visible: true });
  });

  await require('./step-3')(engine, scenario, vp);
  await engine.click('#_qf_Preview_next-bottom');
};
