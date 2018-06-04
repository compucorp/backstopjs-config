'use strict';

module.exports = async (engine, scenario, vp) => {
  await engine.waitFor('.crm-tag-item', { visible: true });
};
