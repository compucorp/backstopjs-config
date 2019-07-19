'use strict';

const Page = require('../page-objects/crm-page.js');

module.exports = async (engine, scenario, vp) => {
  await Page.build(engine, scenario, vp);
  await engine.waitFor('.crm-editable', { visible: true });
};
