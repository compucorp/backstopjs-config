'use strict';

module.exports = async (engine, scenario, viewport) => {
  await engine.click('a.new-option');
  await engine.waitForSelector('.modal-dialog > form', { visible: true });
  await engine.waitForSelector('.cke .cke_contents', { visible: true });
  // wait for readjustment of modal window
  await engine.waitForTimeout(200);
};
