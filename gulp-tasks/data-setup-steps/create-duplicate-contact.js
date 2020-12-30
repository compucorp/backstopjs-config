const _ = require('lodash');
const cvApi = require('../utils/cv-api.js');

module.exports = createDuplicateContact;

/**
 * Creates a Duplicate Contact
 * Required for "Find and Merge Duplicate Contacts - Use Rule - Merge duplicate contacts - results" Scenario
 */
function createDuplicateContact () {
  var contactToDuplicate = cvApi('Contact', 'get', {
    sequential: 1,
    contact_type: 'Household',
    options: { sort: 'sort_name' }
  }).values[0];

  var duplicateContactParams = _.pick(
    contactToDuplicate,
    'contact_type',
    'sort_name',
    'display_name',
    'household_name'
  );

  var createDuplicateContact = cvApi('Contact', 'create', duplicateContactParams);

  if (!createDuplicateContact.is_error) {
    console.log('Duplicated 1 contact.');
  }
}
