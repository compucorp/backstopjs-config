const createUniqueRecordFactory = require('../utils/create-unique-record-factory.js');

module.exports = createPriceSetAndPriceField;

/**
 * Creates a new Price Set and a new price Field
 * Required for "Contributions - New Price Set" and other price set/field related scenarios
 */
function createPriceSetAndPriceField () {
  var createUniquePriceSet = createUniqueRecordFactory('PriceSet', ['title']);
  var createUniquePriceField = createUniqueRecordFactory('PriceField', ['label']);
  var createUniquePriceFieldValue = createUniqueRecordFactory('PriceFieldValue', ['label']);

  const priceSetData = {
    title: "PS1",
    is_active: 1,
    extends: 'CiviContribute',
    financial_type_id: 'Campaign Contribution'
  };

  // Create Price Set
  var priceSet = createUniquePriceSet(priceSetData);

  if (!priceSet.is_error) {
    console.log('Price Set data setup successful.');
  }

  const priceFieldData = {
    label: 'PF1',
    price_set_id: priceSetData.title,
    is_active: 1,
    html_type: 'Text'
  };

  // Create Price Field
  var priceField = createUniquePriceField(priceFieldData)

  if (!priceField.is_error) {
    console.log('Price Field data setup successful.');
  }

  const priceFieldValueData = {
    price_field_id: priceField.id,
    label: "PFV1",
    amount: 10,
    is_active: 1,
    financial_type_id: 'Campaign Contribution'
  };

  // Create Price Field Value
  var priceFieldValue = createUniquePriceFieldValue(priceFieldValueData)

  if (!priceFieldValue.is_error) {
    console.log('Price Field Value data setup successful.');
  }
}
