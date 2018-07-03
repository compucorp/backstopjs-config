'use strict';

const CRMPage = require('./crm-page.js');

module.exports = class ConfigureContributionsPage extends CRMPage {
  /**
   * Overriding main cleanup function
   * Enable pointer events function to the clean up process
   * For detail definition check CRMPage class in ./crm-page.js
   */
  async cleanups () {
    await super.cleanups();
    await enablePointerEvents.call(this);
  }
};

/**
 * Override pointer-events none property to auto for each disabled a link on the page.
 * Reason - Since shoreditch uses boostrap button styles and adds pointer-events none to links with 'disabled' class.
 */
async function enablePointerEvents () {
  await this.engine.addStyleTag({
    'content': 'a.disabled.crm-hover-button { pointer-events: auto !important;}'
  });
}
