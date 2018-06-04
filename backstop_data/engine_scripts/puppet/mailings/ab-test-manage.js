'use strict';

module.exports = async (engine, scenario, vp) => {
  await engine.waitFor('table.display', { visible: true });

  // The list grows on each passing run, so we display only 10 rows in the test
  await engine.evaluate(() => {
    document.querySelectorAll('table.display tr:nth-child(n+10)').forEach(row => row.remove());
  });
};
