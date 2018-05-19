'use strict';

const Page = require('../page-objects/crm-page.js');

module.exports = async (engine, scenario, vp) => {
  const page = new Page(engine, scenario, vp);

  await page.openSelect2DropDown('#s2id_tag', true);
  await page.clickSelect2NthOption(4);
  await page.openSelect2DropDown('#s2id_tag', true);
  await page.clickSelect2NthOption(3);
  await page.openSelect2DropDown('#s2id_tag', true);
  await page.clickSelect2NthOption(1);
};
