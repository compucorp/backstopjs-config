const gulp = require('gulp');
const backstopJSTask = require('./gulp-tasks/backstop.js');
const setupDataTask = require('./gulp-tasks/setup-data.js');

['reference', 'test', 'openReport', 'approve'].map(action => {
  gulp.task('backstopjs:' + action, () => {
    return backstopJSTask(action);
  });
});

gulp.task('setupData', setupDataTask);
