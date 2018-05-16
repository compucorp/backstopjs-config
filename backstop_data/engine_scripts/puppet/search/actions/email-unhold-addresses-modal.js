'use strict';

module.exports = async (engine, scenario, vp) => {
  await require('./email-unhold-addresses')(engine, scenario, vp);
  await engine.click('#popup-button');
};
