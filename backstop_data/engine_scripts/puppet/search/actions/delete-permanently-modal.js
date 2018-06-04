'use strict';

module.exports = async (engine, scenario, vp) => {
  await require('./delete-permanently')(engine, scenario, vp);
  await engine.click('#popup-button');
};
