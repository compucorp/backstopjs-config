'use strict';

/**
 * Performs a contact search, then selects the checkboxes with the given ids
 *
 * The search params are defined so that the smallest useful recordset is returned
 * as a way to improve performance
 *
 * @param {CrmPage} page
 * @param {Array} checkboxIds
 */
module.exports = async (page, checkboxIds = ['103']) => {
  await page.clickSelect2Option('#s2id_contact_type', 'Organization');
  await page.engine.type('#sort_name', 'Alliance');
  await page.clickAndWaitForNavigation('#_qf_Basic_refresh');

  /**
   * For parallel captures the search page redirects to advance search.
   * Reason -  Civicrm invalidates qf_key parameter as the same page is accessed with
   * different Drupal login sessions with multiple qf_keys passed at the same time.
   * To fix the bug we are checking if page redirects to advance search.
   */
  const onAdvanceSearchPage = !!(await page.engine.$('.CRM_Contact_Form_Search_Advanced'));

  // if page redirects, refill it and submit
  if (onAdvanceSearchPage) {
    await page.clickSelect2Option('#s2id_contact_type', 'Organization');
    await page.engine.type('#sort_name', 'Alliance');
    await page.clickAndWaitForNavigation('#_qf_Advanced_refresh-top');
  }

  for (const id of checkboxIds) {
    await page.engine.click(`#mark_x_${id}`);
  }

  await page.engine.waitFor('#search-status .select2-container:not(.select2-container-disabled)');
};
