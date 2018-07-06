'use strict';

const CRMPage = require('./crm-page.js');

module.exports = class CRMSearchPage extends CRMPage {
  /**
   * Overriding main cleanup function
   * Calling fix layout css override
   * For detail definition check CRMPage class in ./crm-page.js
   */
  async cleanups () {
    await super.cleanups();
    await fixLayoutForTables.call(this);
  }
};

/**
 * Override table-layout property to fixed for each search result table layouts
 * Reason - Since tables without fixed layout sometimes takes more width (becomes fluid) and
 * hence breaks the test case without any reason.
 */
async function fixLayoutForTables () {
  await this.engine.addStyleTag({
    'content': '.crm-search-results > table, .dataTable { table-layout: fixed !important;}'
  });
}
