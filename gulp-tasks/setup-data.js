const createDuplicateContact = require('./data-setup-steps/create-duplicate-contact.js');
const createPriceSetAndPriceField = require('./data-setup-steps/create-price-set-and-field.js');
const createBatch = require('./data-setup-steps/create-batch.js');
const createPendingContribution = require('./data-setup-steps/create-pending-contribution.js');

module.exports = setupData;

function setupData () {
  createDuplicateContact();
  createPriceSetAndPriceField();
  createBatch();
  createPendingContribution();

  return Promise.resolve();
}


