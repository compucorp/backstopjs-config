'use strict';

module.exports = async (engine, scenario, viewport) => {
  const priceFieldsEmpty = await engine.$('#crm-main-content-wrapper .messages');

  await require('./view-and-edit-price-fields')(engine, scenario, viewport);
  if(priceFieldsEmpty) {
    console.warn('No Price list present!')
    console.log('Taking the "Price Fields List" Page screenshot..');
  } else {
    await engine.click('a[href*="/civicrm/admin/price?action=preview"]');
    await engine.waitForSelector('.CRM_Price_Form_Preview');
  }
}
