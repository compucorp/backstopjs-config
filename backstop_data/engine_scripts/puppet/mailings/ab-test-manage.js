'use strict';

module.exports = async (engine, scenario, vp) => {
  await engine.waitFor('table.display', { visible: true });

  // The list grows on each passing run, so we display only 9 rows in the test (First being the main row);
  await engine.evaluate(() => {
    document.querySelectorAll('table.display tr:nth-child(n+4)').forEach(row => row.remove());
  });
};
