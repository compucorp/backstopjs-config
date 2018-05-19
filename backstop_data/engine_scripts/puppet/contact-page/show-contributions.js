'use strict';

module.exports = async (engine, scenario, vp) => {
  await engine.waitFor('.contact-summary-contribute-tab', { visible: true });
};
