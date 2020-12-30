const createDuplicateContact = require('./data-setup-steps/create-duplicate-contact.js');

module.exports = setupData;

function setupData () {
  createDuplicateContact();

  return Promise.resolve();
}


