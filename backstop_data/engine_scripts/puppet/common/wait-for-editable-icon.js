'use strict';

module.exports = async (engine, scenario, vp) => {
  await engine.waitFor('.crm-editable', { visible: true });
};
