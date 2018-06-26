'use strict';

module.exports = async (engine, scenario, viewport) => {
  const priceFieldsEmpty = await engine.$('#crm-main-content-wrapper .messages');

  await require('./view-and-edit-price-fields')(engine, scenario, viewport);
  if(priceFieldsEmpty) {
    console.warn('No Price Field list present!')
    console.log('Taking the "Price Fields List" Page screenshot..');
  } else {
    await engine.click('.crm-entity span.crm-hover-button');
    await engine.click('a[title="Disable Price"]');
    await engine.waitFor('.crm-confirm-dialog.crm-ajax-container', { visible: true });
    await engine.waitForSelector('.blockUI.blockOverlay', { hidden: true });
  }
}
