'use strict';

module.exports = async (engine, scenario, vp) => {
  await require('../common/open-accordions')(engine, scenario, vp);
  await engine.waitForSelector('.custom-group-Donor_Information', { visible: true });
};
