'use strict';

module.exports = async (engine, scenario, viewport) => {
  await require('./view-and-edit-price-fields')(engine, scenario, viewport) ;
  await engine.click('#newPriceField');
  await engine.waitFor('.CRM_Price_Form_Field');
}
