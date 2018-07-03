/* globals XPathResult */

'use strict';

module.exports = class CrmPage {
  constructor (engine, scenario, viewPort) {
    this.engine = engine;
    this.scenario = scenario;
    this.viewPort = viewPort;
  }

  /**
   * Waits and clicks every element that matches the target selector.
   *
   * @param {String} selector - the css selector of the target elements to
   * click.
   */
  async clickAll (selector) {
    await this.waitForSelectorAndEvaluate(selector, selector => {
      document.querySelectorAll(selector).forEach(element => element.click());
    });
  }

  /**
   * Clicks on the select2 option with the given label.
   *
   * @param {String} selector - The selector that identifies the select2 dropdown
   * @param {String} label
   */
  async clickSelect2Option (selector, label) {
    // Check if the select2Options is for multiselect
    const isMultiple = !!(await this.engine.$(`${selector} .select2-choices`));

    await this.engine.click(`${selector} ` + (isMultiple ? '.select2-choices .select2-search-field' : '.select2-choice'));
    await this.engine.evaluate((label) => {
      const xPath = `.//div[contains(@class, "select2-result-label")][text()="${label}"]/parent::*`;
      const item = document.evaluate(xPath, document.body, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
      const event = document.createEvent('MouseEvent');

      event.initMouseEvent('mouseup', true, true);
      item.dispatchEvent(event);
    }, label);
  }

  /**
   * Waits for the Navigation to happens after some link (selector) is clicked.
   *
   * @param {String} selector - the css selector for the element to click and wait for navigation.
   */
  async clickAndWaitForNavigation (selector) {
    await this.engine.waitForSelector(selector);
    await Promise.all([
      this.engine.click(selector),
      this.engine.waitForNavigation()
    ]);
    await this.cleanups();
  }

  /**
  * Waits for Modal form to compelete rendering after some link to open modal is clicked
  *
  * @param {String} selector - the css selector for the element to click and wait for modal.
  */
  async clickAndWaitForModal (selector) {
    await this.engine.waitForSelector(selector);
    await this.engine.click(selector);
    await this.engine.waitForSelector('.modal-dialog > form', { visible: true });
    await this.engine.waitForSelector('.blockUI.blockOverlay', { hidden: true });
    await this.cleanups();
    // Waiting for civicrm to complete readjusting the modal, to help backstop taking better screenshots
    await this.engine.waitFor(300);
  }

  /**
   * Closes all active notifications.
   */
  async closeErrorNotifications () {
    const exists = !!(await this.engine.$('.ui-notify-message'));
    if (exists) {
      console.log('Closing error notifications');
      await this.clickAll('a.ui-notify-cross.ui-notify-close');
      await this.engine.waitFor('.ui-notify-message', { hidden: true });
    }
  }

  /**
   * Checks if the checkbox is enabled and checks it if not.
   *
   * @param {String} selector - the css selector for the checkbox to be click and enabled
   */
  async enableCheckbox (selector) {
    const checkbox = await this.engine.$(selector);
    const checked = await (await checkbox.getProperty('checked')).jsonValue();

    if (!checked) {
      await this.engine.click(selector);
    }
  }

  /**
   * Opens all the accordions on the page
   */
  async openAllAccordions () {
    const areAccordionsOpen = !!(await this.engine.$('body.all-accordions-open'));

    if (!areAccordionsOpen) {
      const isSubAccordionExist = !!(await this.engine.$('.collapsible-title'));

      await this.clickAll('div.crm-accordion-wrapper.collapsed > div');
      if (isSubAccordionExist) {
        await this.clickAll('.collapsible-title');
      }
      await this.engine.addScriptTag({
        'content': 'document.body.classList.add("all-accordions-open")'
      });
      await this.cleanups();
    }
  }

  /**
   * Submits the current page form.
   */
  async submit () {
    await this.clickAndWaitForNavigation('#crm-main-content-wrapper form .crm-submit-buttons:last-of-type .crm-form-submit:not(.cancel)');
  }

  /**
   * Waits for an element and then evaluates a function on the browser.
   *
   * @param {String} selector - the css selector for the element to wait
   * @param {Function} fn - the callback function to be executed in
   * the browser after the target element is ready.
   * for.
   */
  async waitForSelectorAndEvaluate (selector, fn) {
    try {
      await this.engine.waitFor(selector, { timeout: 8000 });
      await this.engine.evaluate(fn, selector);
    } catch (e) {
      console.log('Selector "' + selector + '" not found');
    }
  }

  /**
   * Waits for the WYSIWYG to be visible on the page
   */
  async waitForWYSIWYG () {
    const isWysiwygVisible = await isElementVisible.call(this, '.crm-form-wysiwyg');

    if (isWysiwygVisible) {
      await this.engine.waitFor('.cke .cke_contents', { visible: true });
    }
  }

  /**
   * Waits for the date picker to be visible on the page
   */
  async waitForDatePicker () {
    const hasDatepicker = await isElementVisible.call(this, '.hasDatepicker');

    if (hasDatepicker) {
      this.engine.waitForSelector('.fa-calendar');
    }
  }

  /**
    * Waits for Js libraries and other cleanups
   */
  async cleanups () {
    await this.waitForWYSIWYG();
    await this.waitForDatePicker();
    await this.closeErrorNotifications();
  }

  /**
   * Static builder class for creating new object thereby doing intial cleanup
   */
  static async build (engine, scenario, vp) {
    const page = new this(engine, scenario, vp);

    await page.cleanups();

    return page;
  }
};

/**
  * Checks if element is visible on screen
  * @param {String} selector - the css selector for the element to checkfor
  */
async function isElementVisible (selector) {
  return this.engine.evaluate((selector) => {
    const e = document.querySelector(selector);

    if (!e) {
      return false;
    }

    const style = window.getComputedStyle(e);

    return style && style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0' && e.offsetHeight > 0;
  },selector);
}
