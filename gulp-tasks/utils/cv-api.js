const execSync = require('child_process').execSync;
const CONFIGS = require('./configs.js');
const LOGGED_IN_USER_NAME = 'admin';

module.exports = cvApi;

/**
 * Executes a single call to the `cv api` service and returns the response
 * in JSON format.
 *
 * @param {string} entityName the name of the entity to run the query on.
 * @param {string} action the entity action.
 * @param {object} queryData the data to pass to the entity action.
 * @returns {object} the result from the entity action call.
 */
function cvApi (entityName, action, queryData) {
  var queryResponse = cvApiBatch([[entityName, action, queryData]]);

  return queryResponse[0];
}

/**
 * Executes multi calls to the `cv api` service and returns the response from
 * those calls in JSON format.
 *
 * @param {Array} queriesData a list of queries to pass to the `cv api:batch` service.
 * @returns {object} response from the cv api.
 */
function cvApiBatch (queriesData) {
  var config = CONFIGS.getSiteConfig();
  var cmd = `echo '${JSON.stringify(queriesData)}' | cv api:batch -U ${LOGGED_IN_USER_NAME}`;
  var responses = JSON.parse(execSync(jsonEscape(cmd), { cwd: config.root }));
  checkAndThrowApiResponseErrors(responses);

  return responses;
}

/**
 * @param {string} str string
 * @returns {string} escaped string
 */
function jsonEscape(str)  {
  return str.split('\\n').join('\\\\n');
}

/**
 * Throws an error if it finds any inside one of the `cv api` responses.
 *
 * @param {Array} responses the list of responses as returned by `cv api:batch`.
 */
function checkAndThrowApiResponseErrors (responses) {
  responses.forEach((response) => {
    if (response.is_error) {
      throw response.error_message;
    }
  });
}

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
