'use strict';

const Page = require('../page-objects/crm-page.js');

module.exports = async (engine, scenario, vp) => {
  const page = await Page.build(engine, scenario, vp);

  let config;
  const formSelector = 'form#user-login-form';

  try {
    config = require('../../../configs/crm-config');
  } catch (e) {
    const sampleStructure = '{"url": "YOUR LOCAL URL", "credentials": {"name": "YOUR USERNAME", "pass": "YOUR PASSWORD"}}';

    console.log(
      `You should create a "crm-config.json" file in the "casper_scripts" directory, containing the following structure: ${sampleStructure}`
    );
  }

  console.log('Logging in before starting...');

  await engine.goto(config.url);
  await engine.waitFor(formSelector);
  await engine.type('[name="name"]', config.credentials.name);
  await engine.type('[name="pass"]', config.credentials.pass);
  await page.clickAndWaitForNavigation('#edit-submit');
};
