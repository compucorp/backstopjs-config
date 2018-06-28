'use strict';

module.exports = async (engine, scenario, viewport) => {

  await require('./view-and-edit-price-fields')(engine, scenario, viewport);
  await engine.click('.crm-entity span.crm-hover-button');
  await engine.click('a[title="Delete Price"]');
  await engine.waitFor('.CRM_Price_Form_DeleteField', { visible: true });
};
