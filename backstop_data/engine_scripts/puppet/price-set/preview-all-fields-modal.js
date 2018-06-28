'use strict';

module.exports = async (engine, scenario, viewport) => {
  await require('./view-and-edit-price-fields')(engine, scenario, viewport);
  await engine.click('a[href*="/civicrm/admin/price?action=preview"]');
  await engine.waitForSelector('.CRM_Price_Form_Preview');
}
