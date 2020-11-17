'use strict';

const Page = require('../page-objects/crm-page.js');

module.exports = async (engine, scenario, vp) => {
  const page = await Page.build(engine, scenario, vp);

  await require('./search')(engine, scenario, vp);
  await engine.click('th[title="Select Rows"] > .crm-form-checkbox');
  await engine.evaluate(()=>document.querySelector('a[title="Delete Contribution"]').click());
};
