'use strict';

module.exports = async (engine, scenario, vp) => {
  await engine.click('.crm-contact-tabs-list a[title="Contributions"]');
  await engine.waitFor(1000);
};
