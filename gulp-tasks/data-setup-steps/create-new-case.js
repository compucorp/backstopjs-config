const createUniqueRecordFactory = require('../utils/create-unique-record-factory.js');

module.exports = createNewCase;

/**
 * Creates a new Case
 * Required for scenarios in 'civicase.json'
 */
function createNewCase () {
  var createUniqueCase = createUniqueRecordFactory('Case', ['subject']);
  const caseData = {
    contact_id: 8,
    case_type_id: 'housing_support',
    subject: 'New Case',
    status_id: 'Open'
  };

  var caseObj = createUniqueCase(caseData);

  if (!caseObj.is_error) {
    console.log('Case data setup successful.');
  }
}
