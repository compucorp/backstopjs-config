const _ = require('lodash');
const createUniqueRecordFactory = require('../utils/create-unique-record-factory.js');

module.exports = createBatch;

/**
 * Creates a new Batch
 * Required for "Batch Data Entry" and other batch related scenarios
 */
function createBatch () {
  var createUniqueBatch = createUniqueRecordFactory('Batch', ['title']);

  const batchData = {
    title: 'New Batch 1',
    status_id: 'Data Entry',
    type_id: 'Contribution',
    total: 2,
    item_count: 2
  };

  var batch = createUniqueBatch(batchData);

  if (!batch.is_error) {
    console.log('Batch data setup successful.');
  }
}
