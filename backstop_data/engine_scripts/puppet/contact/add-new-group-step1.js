'use strict';

/**
 * Function to generate random string of 5 chars.
 */
 
function generate_id(len) {
  len = len || 5;
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < len; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}

module.exports = async (engine, scenario, vp) => {
  await engine.type('input[name="title"]', 'Backstop test group - Automated Case - ' + generate_id());
  await engine.type('textarea[name="description"]', 'Backstop test group description - Automated  - ' + generate_id());
  await engine.click('#_qf_Edit_upload-bottom');
  await engine.waitForNavigation();
};
