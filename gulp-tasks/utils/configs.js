const path = require('path');
const fs = require('fs');

const BACKSTOP_DIR = 'backstop_data';
const FILES = {
  siteConfig: path.join(BACKSTOP_DIR, 'site-config.json'),
  temp: path.join(BACKSTOP_DIR, 'backstop.temp.json'),
  tpl: path.join(BACKSTOP_DIR, 'backstop.tpl.json')
};

module.exports = {
  BACKSTOP_DIR: BACKSTOP_DIR,
  CONFIG_TPL: { 'url': 'http://%{site-host}', 'root': '%{path-to-site-root}' },
  FILES: FILES,
  getSiteConfig: getSiteConfig
};

/**
 * Returns the content of site config file
 *
 * @return {Object}
 */
function getSiteConfig () {
  return JSON.parse(fs.readFileSync(FILES.siteConfig));
}
