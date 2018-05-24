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
module.exports = async (page, checkboxIds=['3']) => {
  await page.engine.type('#sort_name', 'Technology');
  await page.clickSelect2Option('#s2id_contact_type', 'Organization');
  await page.engine.click('#_qf_Basic_refresh');
  await page.engine.waitForNavigation();

  for (const id of checkboxIds) {
    await page.engine.click(`#mark_x_${id}`);
  }

  await page.engine.waitFor('#search-status .select2-container:not(.select2-container-disabled)');
};
