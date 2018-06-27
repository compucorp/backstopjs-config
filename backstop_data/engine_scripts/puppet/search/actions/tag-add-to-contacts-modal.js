'use strict';

module.exports = async (engine, scenario, vp) => {
  await require('./tag-add-to-contacts')(engine, scenario, vp);
  await engine.click('#popup-button');
};
