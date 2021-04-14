'use strict';

module.exports = async (engine, scenario, viewport) => {
  await engine.waitForSelector('form[name="editCaseTypeForm"]');
};
