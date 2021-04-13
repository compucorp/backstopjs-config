'use strict';

const Page = require('../../page-objects/crm-page.js');

module.exports = async (engine, scenario, vp) => {
  const page = await Page.build(engine, scenario, vp);

  await require('./common')(page);
  await page.clickSelect2Option('#s2id_task', 'Email - schedule/send via CiviMail');
  await engine.waitForNavigation();
  await engine.waitForSelector('.crm-wizard', { visible: true });
  await engine.waitForSelector('.content > .select2-container.crm-group-ref', { visible: true });
  await require('../../common/close-notifications')(engine, scenario, vp);
  await require('../../common/wait-for-civicrm-page')(engine, scenario, vp);
  await engine.waitForSelector('.select2-search-choice', { visible: true });
};
