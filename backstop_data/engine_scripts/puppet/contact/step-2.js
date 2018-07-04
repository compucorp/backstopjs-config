'use strict';

const Page = require('../page-objects/crm-page.js');

module.exports = async (engine, scenario, vp) => {
  const page = await Page.build(engine, scenario, vp);
  const filePath = `${__dirname}/../../../../mocks/CiviCRM_Contact_Search.csv`;
  const fileInput = await engine.$('#uploadFile');

  await fileInput.uploadFile(filePath);
  await engine.click('#skipColumnHeader');
  await page.clickAndWaitForNavigation('#_qf_DataSource_upload-bottom');
};
