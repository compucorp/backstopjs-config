var _ = require('lodash');
const cvApi = require('../utils/cv-api.js');

module.exports = enableCivicaseComponent;

/**
 * Enable Civicase Component
 * Required for scenarios in 'civicase.json'
 */
function enableCivicaseComponent () {
  var setting = cvApi('Setting', 'get', {
    sequential: true
  }).values[0];

  const civicaseComponent = "CiviCase";
  var isCiviCaseComponentEnabled = _.indexOf(setting.enable_components, civicaseComponent) !== -1;

  if (isCiviCaseComponentEnabled) {
    return;
  }

  setting.enable_components.push(civicaseComponent)

  var enableCivicaseComponent = cvApi('Setting', 'create', setting);

  if (!enableCivicaseComponent.is_error) {
    console.log('CiviCase component enabled.');
  }
}
