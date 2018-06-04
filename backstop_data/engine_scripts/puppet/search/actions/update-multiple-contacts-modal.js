'use strict';

module.exports = async (engine, scenario, vp) => {
  await require('./update-multiple-contacts')(engine, scenario, vp);
  await engine.click('#popup-button');
};
