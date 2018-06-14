'use strict';

module.exports = async (engine, scenario, vp) => {
  await engine.click('#crm-dashboard-configure');
  // wait for the ajax to complete the DOM 
  await engine.waitFor('#configure-dashlet', { visible: true });
  //wait for 500ms till the animation completes
  await engine.waitFor(500);
};
