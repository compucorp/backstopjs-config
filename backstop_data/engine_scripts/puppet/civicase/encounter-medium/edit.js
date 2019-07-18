'use strict';

module.exports = async (engine, scenario, viewport) => {
  await engine.click('a[title="Edit encounter_medium"]');
  await engine.waitFor('.modal-dialog > form', { visible: true });
  await engine.waitFor('.cke .cke_contents', { visible: true });
  // wait for readjustment of modal window
  await engine.waitFor(200);
};
