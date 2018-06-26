'use strict';

module.exports = async (engine, scenario, viewport) => {
  const pricelistEmpty = await engine.$('#crm-main-content-wrapper .messages');

  if(pricelistEmpty) {
    console.warn('No Price list present!')
    console.log('Taking the "Price Set List" Page screenshot..');
  } else {
    await engine.click('.crm-entity span.crm-hover-button');
    await engine.click('a[title="Disable Price Set"]');
    await engine.waitFor('.crm-confirm-dialog.crm-ajax-container', { visible: true });
    await engine.waitForSelector('.blockUI.blockOverlay', { hidden: true });
  }
}
