'use strict';

/**
 * The scenario for this script had been removed from the suite, due to instability.
 * Headless Chrome times out most of the time when trying to submit the second step,
 * while it works fine if it submits it in non-headless mode. Unfortunately it
 * was not possible to figure out the source of the issue, so the scenario had been
 * removed to avoid false positives
 */

const Page = require('../page-objects/crm-page.js');

module.exports = async (engine, scenario, vp) => {
  const page = await Page.build(engine, scenario, vp);

  await require('./step-2')(engine, scenario, vp);
  await page.clickAndWaitForNavigation('#_qf_MapField_next-bottom');
};
