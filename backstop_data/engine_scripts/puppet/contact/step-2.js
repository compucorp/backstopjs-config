'use strict';

module.exports = async (engine, scenario, vp) => {
  const filePath = `${__dirname}/../../../../mocks/CiviCRM_Contact_Search.csv`;
  const fileInput = await engine.$('#uploadFile');

  await fileInput.uploadFile(filePath);
  await engine.click('#_qf_DataSource_upload-bottom');
  await engine.waitForNavigation();
};
