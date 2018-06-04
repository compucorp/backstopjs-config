'use strict';

module.exports = async (engine, scenario, vp) => {
  await require('./email-schedule')(engine, scenario, vp);
  await engine.click('a[href="#tab-tracking"]');
};
