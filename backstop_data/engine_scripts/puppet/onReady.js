'use strict';

const Page = require('./page-objects/crm-page.js');

module.exports = async (engine, scenario, vp) => {
  const page = await Page.build(engine, scenario, vp);
  
  // add more ready handlers here...
};
