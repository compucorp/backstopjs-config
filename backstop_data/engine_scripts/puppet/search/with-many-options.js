'use strict';

const Page = require('../page-objects/crm-page.js');

module.exports = async (engine, scenario, vp) => {
  const page = new Page(engine, scenario, vp);

  await page.openSelect2DropDown('#s2id_tag', true);
  await page.clickSelect2Option('Add relationship - to organization');
  await page.openSelect2DropDown('#s2id_tag', true);
  await page.clickSelect2Option('Add relationship - to individual');
  await page.openSelect2DropDown('#s2id_tag', true);
  await page.clickSelect2Option('Add activity');
};
