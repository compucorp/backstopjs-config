'use strict';

module.exports = async (engine, scenario, vp) => {
  await engine.waitForSelector('.contact-summary-contribute-tab', { visible: true });
};
