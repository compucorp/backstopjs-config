'use strict';

module.exports = async (engine, scenario, viewport) => {
  const priceFieldsEmpty = await engine.$('#crm-main-content-wrapper .messages');

  await require('./view-and-edit-price-fields')(engine, scenario, viewport);
  if(priceFieldsEmpty) {
    console.warn('No Price fields list present!')
    console.log('Taking the "Price Fields List" Page screenshot..');
  } else {
    await engine.click('a[title="Edit Price"]');
    await engine.waitForSelector('.CRM_Price_Form_Field');
  }
}
