const createUniqueRecordFactory = require('../utils/create-unique-record-factory.js');

module.exports = createDuplicateContact;

/**
 * Creates 2 contacts(duplicate of each other).
 * Required for "Find and Merge Duplicate Contacts - Use Rule - Merge duplicate contacts - results" Scenario
 */
function createDuplicateContact () {
  var createUniqueContact = createUniqueRecordFactory('Contact', ['nick_name']);
  var createUniqueEmail = createUniqueRecordFactory('Email', ['email']);

  var contactA = createUniqueContact({
    contact_type: 'Household',
    household_name: 'AAA AAA',
    nick_name: 'Backstop Contact A'
  });

  var contactB = createUniqueContact({
    contact_type: 'Household',
    household_name: 'AAA AAA',
    nick_name: 'Backstop Contact B'
  });

  var email = createUniqueEmail({
    contact_id: contactA.id,
    email: "contacta@backstop.com"
  });

  if (!contactA.is_error && !contactB.is_error && !email.is_error) {
    console.log('Created 2 contacts(duplicate of each other).');
  }
}
