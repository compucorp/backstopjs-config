'use strict';

module.exports = async (engine, scenario, vp) => {
  await require('./show-memberships')(engine, scenario, vp);
  await engine.click('a[accesskey="N"][href$="context=membership"]');
  await engine.waitFor('.blockUI.blockOverlay', { hidden: true });
  await engine.waitFor(1000);
};
