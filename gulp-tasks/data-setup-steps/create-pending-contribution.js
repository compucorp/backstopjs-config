const createUniqueRecordFactory = require('../utils/create-unique-record-factory.js');
const cvApi = require('../utils/cv-api.js');

module.exports = createPendingContribution;

/**
 * Creates a new Pending Contribution
 * Required for 'Contributions - Pending contributions - New tab' scenario
 */
function createPendingContribution () {
  var createUniqueContribution = createUniqueRecordFactory('Contribution', ['contribution_source']);
  var contact = cvApi('Contact', 'get', {
    nick_name: 'Backstop Contact A',
    sequential: true
  }).values[0];

  const pendingContributionData = {
    contact_id: contact.id,
    financial_type_id: "4",
    currency: 'USD',
    contribution_status_id: '2',
    payment_instrument_id: '4',
    non_deductible_amount: '0.00',
    total_amount: '0.00',
    fee_amount: '0.00',
    net_amount: '0.00',
    contribution_source: 'CS1',
    is_pay_later: '1',
    is_template: '0',
    civicrm_value_donor_information_3_id: '2',
    contribution_recur_status: 'Pending',
    payment_instrument: 'Check',
    contribution_status: 'Pending',
    instrument_id: '4'
  }

  var pendingContribution = createUniqueContribution(pendingContributionData);

  if (!pendingContribution.is_error) {
    console.log('Pending Contribution setup successful.');
  }
}
