const cvApi = require('./cv-api.js');

module.exports = createUniqueRecordFactory;

/**
 * Returns a function that creates unique records for the given entity.
 *
 * @param {string} entityName the name of the entity that the records belongs to.
 * @param {string[]} matchingFields the list of fields that will be used to check
 * if the record has already been created. Ex.: `name`, `subject`, `title`, etc.
 * @returns {Function} of unique records
 */
function createUniqueRecordFactory (entityName, matchingFields) {
  /**
   * Checks if the record exists on the given entity before creating a new one.
   *
   * @param {object} recordData the data used to create a new record on the Entity.
   * @returns {object} the returned value from the API.
   */
  return function createUniqueRecord (recordData) {
    var filter = { options: { limit: 1 }, sequential: 1 };

    matchingFields.forEach((matchingField) => {
      filter[matchingField] = recordData[matchingField];
    });

    var record = cvApi(entityName, 'get', filter);

    if (record.count) {
      return record;
    }

    return cvApi(entityName, 'create', recordData);
  };
}
