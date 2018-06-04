'use strict';

module.exports = async (engine, scenario, vp) => {
  await require('./restore-contacts-from-trash')(engine, scenario, vp);
  await engine.click('#popup-button');
};
