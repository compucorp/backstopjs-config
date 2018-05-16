'use strict';

module.exports = async (engine, scenario, vp) => {
  await require('./tag-remove-from-contacts')(engine, scenario, vp);
  await engine.click('#popup-button');
};
