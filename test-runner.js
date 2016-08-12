/* eslint no-console: 0 */

'use strict';
var argv = require('yargs').argv;
var exec = require('child_process').exec;
var fs = require('fs');
var backstopjsConfigPath = 'node_modules/backstopjs/capture/config.json';
var localUrl;

try {
  localUrl = JSON.parse(fs.readFileSync('backstop_data/casper_scripts/crm-config.json', 'utf8')).url;
} catch (e) {
  if (e.code === 'ENOENT') {
    var sampleStructure =
      '{"url": "YOUR LOCAL URL", "credentials": {"name": "YOUR USERNAME", "pass": "YOUR PASSWORD"}}';
    console.log('\n********************************************************************************************************************\n',
      'You should create a "crm-config.json" file in the "casper_scripts" directory, containing the following structure: \n' + sampleStructure,
      '\n********************************************************************************************************************\n');
  } else {
    throw e;
  }
}

/**
 * Watches (only once) the internal BackstopJS cached configuration file and replaces
 * the "{url}" placeholders with the "url" property of the "crm-config.json" file
 */
function modifyConfigOnceChanged() {
  fs.watch(backstopjsConfigPath, function(eventType) {
    if (eventType !== 'change') {
      return;
    }
    try {
      fs.readFile(backstopjsConfigPath, 'utf8', function(error, data) {
        if (error) {
          throw error;
        }
        fs.writeFile(backstopjsConfigPath, data.replace(new RegExp('{url}', 'g'), localUrl), function(error) {
          if (error) {
            throw error;
          }
        });
      });
    } finally {
      // Stop watching
      this.close();
    }
  });
}

/**
 * Executes the BackstopJS task in its contextual path
 * @param  {string}   taskName       The name of the BackstopJS task to execute
 * @param  {string}   configFileName The configuration file to use
 */
function execBackstopJS(taskName, configFileName) {
  var proc = exec('npm run ' + taskName + ' -- --configPath=../../' + configFileName, {
    cwd: 'node_modules/backstopjs'
  }, function(error, stdout, stderr) {
    if (error) {
      console.error(error);
      throw error;
    }
  });
  proc.stdout.pipe(process.stdout);
  proc.stderr.pipe(process.stderr);
}

if (localUrl) {
  modifyConfigOnceChanged();
  execBackstopJS(argv.task || 'test', argv.configPath);
}
