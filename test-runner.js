'use strict';

var argv = require('yargs').argv;
var exec = require('child_process').exec;
var fs = require('fs');

var configFolderPath = './scenarios/';
var localUrl;

try {
  localUrl = JSON.parse(fs.readFileSync('./configs/crm-config.json', 'utf8')).url;
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

function getFileScenarios(files, idx, scenarios) {
  if (idx === files.length) {
    console.log(scenarios.length)
    createAllFile(scenarios);
  } else {
    var file = files[idx];

    fs.readFile(configFolderPath + file, 'utf8', (err, data) => {
      if (err) throw err;

      data = JSON.parse(data);
      data.scenarios = data.scenarios.map(scenario => {
        if (scenario['onBeforeScript'] === 'login.js') {
          delete scenario['onBeforeScript'];
        }

        return scenario;
      });

      scenarios = scenarios.concat(data.scenarios);
      getFileScenarios(files, ++idx, scenarios);
    });
  }
}

if (argv.configPath === 'all') {
  fs.readdir(configFolderPath, 'utf8', (err, files) => {
    var scenarios = [];
    getFileScenarios(files, 0, scenarios);
  });
} else {
  fs.readFile('./scenarios/' + argv.configPath, 'utf8', (err, data) => {
    if (err) throw err;

    writeTmpFile(replaceURL(data));
  });
}

function createAllFile(scenarios) {
  var tmpFileData = {
    "viewports": [{
      "name": "desktop",
      "width": 1920,
      "height": 3000
    }],
    "onBeforeScript": "login.js",
    "scenarios": scenarios,
    "paths": {
      "bitmaps_reference": "./backstop_data/screenshots/all/reference",
      "bitmaps_test": "./backstop_data/screenshots/all/test",
      "engine_scripts": "./backstop_data/engine_scripts/puppet",
      "html_report": "./backstop_data/html_report/all",
      "ci_report": "./backstop_data/ci_report/all"
    },
    "engine": "puppeteer",
    "report": ["CLI", "browser"],
    "asyncCaptureLimit": 1,
    "asyncCompareLimit": 50,
    "debug": false,
    "debugWindow": false
  };

  writeTmpFile(replaceURL(JSON.stringify(tmpFileData)));
}

function replaceURL(data) {
  return data.replace(new RegExp('{url}', 'g'), localUrl);
}

function writeTmpFile(data) {
  fs.writeFile('tmp.json', data, function (err) {
    if (err) return console.log(err);

    execBackstopJS();
  });
}

function execBackstopJS() {
  var task = argv.task || 'test';

  var proc = exec('./node_modules/.bin/backstop ' + task + ' --configPath=tmp.json', function(error, stdout, stderr) {
    if (error) {
      console.error(error);
      throw error;
    }
  });
  proc.stdout.pipe(process.stdout);
  proc.stderr.pipe(process.stderr);
}
