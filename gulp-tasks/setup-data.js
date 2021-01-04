const enableCivicaseComponent = require('./data-setup-steps/enable-civicase-component.js');
const createNewCase = require('./data-setup-steps/create-new-case.js');
const createDuplicateContact = require('./data-setup-steps/create-duplicate-contact.js');
const createPriceSetAndPriceField = require('./data-setup-steps/create-price-set-and-field.js');
const createBatch = require('./data-setup-steps/create-batch.js');
const createPendingContribution = require('./data-setup-steps/create-pending-contribution.js');

module.exports = setupData;

/**
 * Sets up all the data necessary for backstop tests to run
 *
 * @returns {Promise} promise
 */
function setupData () {
  enableCivicaseComponent();
  createNewCase();
  createDuplicateContact();
  createPriceSetAndPriceField();
  createBatch();
  createPendingContribution();

  return Promise.resolve();
}
