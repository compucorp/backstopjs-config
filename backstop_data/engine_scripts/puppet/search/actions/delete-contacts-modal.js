'use strict';

module.exports = async (engine, scenario, vp) => {
  await require('./delete-contacts')(engine, scenario, vp);
  await engine.click('#popup-button');
};
