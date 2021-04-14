'use strict';

module.exports = async (engine, scenario, vp) => {
  await require('./find.js')(engine, scenario, vp);
  await engine.click('a[title="Delete Case"]');
  await engine.waitForSelector('.modal-dialog > form', { visible: true });
  await engine.waitForSelector('.blockUI.blockOverlay', { hidden: true });
};
